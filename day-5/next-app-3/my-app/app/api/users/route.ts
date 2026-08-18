import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "data",
      "data.json"
    );

    const fileData = fs.readFileSync(
      filePath,
      "utf-8"
    );

    const users = JSON.parse(fileData);

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}