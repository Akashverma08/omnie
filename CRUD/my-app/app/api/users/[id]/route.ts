import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function DELETE(
    request: Request, { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const filePath = path.join(process.cwd(), "data", "data.json");
        const fileData = fs.readFileSync(filePath, "utf-8");
        const users = JSON.parse(fileData);

        const userExist = users.find((user: any) => user.id === Number(id));

        if (!userExist) {
            return NextResponse.json(
                { message: "Not Found" },
                { status: 401 }

            )
        }

        const updatedUsers = users.filter((user: any) => user.id !== Number(id));

        fs.writeFileSync(filePath, JSON.stringify(updatedUsers, null, 2));

        return NextResponse.json(
            { messages: "User deleted" },
            { status: 200 }
        )
    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        )
    }



}




export async function POST(request: Request,
    { params}: { params: Promise<{ id: string }> }
) {
    try {

        const { id } = await params;
        const formData = await request.formData();

        const name = formData.get("name") as string;
        const city = formData.get("city") as string;
        const street = formData.get("street") as string;
        const suite = formData.get("suite") as string;

        const filePath = path.join(process.cwd(), "data", "data.json");
        const fileData = fs.readFileSync(filePath, "utf-8");
        const users = JSON.parse(fileData);

        const editUser = users.find((user: any) => user.id === Number(id));

        if (!editUser) {
            return NextResponse.json(
                { message: "Not Found" },
                { status: 404 }

            );
        }
        editUser.name = name;
        editUser.address.city = city;
        editUser.address.street = street;
        editUser.address.suite = suite;

        fs.writeFileSync(
            filePath,
            JSON.stringify(users, null, 2)
        );

        return Response.redirect(
            new URL("/dashboard", request.url)
        )



    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        )
    }

}

