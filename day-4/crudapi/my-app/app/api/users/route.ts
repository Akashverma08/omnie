import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

function readUsers() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function writeUsers(users: any) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}


// GET ALL USERS
export async function GET() {
  let users = readUsers();

  if (users.length === 0) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    users = await response.json();

    writeUsers(users);
  }

  return NextResponse.json(users);
}


// ADD USER
export async function POST(request: Request) {
  const body = await request.json();

  const users = readUsers();

  const newUser = {
    id:
      users.length > 0
        ? Math.max(...users.map((u: any) => u.id)) + 1
        : 1,

    name: body.name,

    email: body.email,

    address: {
      city: body.address.city,
    },
  };

  users.push(newUser);

  writeUsers(users);

  return NextResponse.json(newUser, {
    status: 201,
  });
}