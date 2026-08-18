import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const formData = await request.formData();

    const name = formData.get("name");
    const city = formData.get("city");
    const street = formData.get("street");
    const suite = formData.get("suite");

    const filePath = path.join(process.cwd(),"data","data.json");

    const fileData = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileData);

    const newId = users.length > 0 ? users[users.length - 1].id + 1: 1;

    const newUser = {
        id: newId,
        name: name,
        address: {
            city: city,
            street: street,
            suite: suite,
        },
    };

    users.push(newUser);

    fs.writeFileSync(filePath,JSON.stringify(users, null, 2));

    return NextResponse.redirect(
        new URL("/dashboard", request.url)
    );
}