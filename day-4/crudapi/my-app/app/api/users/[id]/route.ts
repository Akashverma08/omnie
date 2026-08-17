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


// GET ONE USER
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const users = readUsers();

  const user = users.find(
    (u: any) => u.id == Number(id)
  );

  return NextResponse.json(user);
}


// UPDATE USER
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await request.json();

  const users = readUsers();

  const index = users.findIndex(
    (u: any) => u.id == Number(id)
  );

  users[index] = {
    ...users[index],

    name: body.name,

    email: body.email,

    address: {
      city: body.address.city,
    },
  };

  writeUsers(users);

  return NextResponse.json(users[index]);
}


// DELETE USER
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const users = readUsers();

  const newUsers = users.filter(
    (u: any) => u.id != Number(id)
  );

  writeUsers(newUsers);

  return NextResponse.json({
    message: "Deleted",
  });
}