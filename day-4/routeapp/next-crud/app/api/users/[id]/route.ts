// app/api/users/[id]/route.ts
//
// The folder name `[id]` is a DYNAMIC SEGMENT. It means this route handler
// matches ANY value in that position of the URL:
//     /api/users/1   -> params.id === "1"
//     /api/users/2   -> params.id === "2"
//     /api/users/42  -> params.id === "42"
//
// Next.js passes those params into the second argument of each handler
// function: (request, { params }).
//
// This single file therefore handles GET / PUT / DELETE for ANY user id,
// instead of us needing to write a separate file per user.

import { NextRequest, NextResponse } from "next/server";
import { User, UserFormData } from "@/types/user";

const EXTERNAL_API = "https://jsonplaceholder.typicode.com/users";

interface RouteParams {
  params: { id: string };
}

// GET /api/users/:id -> fetch a single user (used by the Edit page)
export async function GET(_request: NextRequest, { params }: RouteParams) {
  try {
    const res = await fetch(`${EXTERNAL_API}/${params.id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const data: User = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// PUT /api/users/:id -> update a user
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const body: UserFormData = await request.json();

    const res = await fetch(`${EXTERNAL_API}/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to update user" },
        { status: res.status }
      );
    }

    const updated: User = await res.json();
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE /api/users/:id -> delete a user
export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  try {
    const res = await fetch(`${EXTERNAL_API}/${params.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to delete user" },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
