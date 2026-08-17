// app/api/users/route.ts
//
// This is a ROUTE HANDLER, not a page. The filename `route.ts` (instead of
// `page.tsx`) tells Next.js: "this file returns data/JSON, not HTML/UI."
//
// A file at app/api/users/route.ts automatically becomes the endpoint:
//     /api/users
//
// Here we EXPORT one async function per HTTP method we want to support:
// GET and POST. Next.js looks at the incoming request method and calls
// the matching exported function.
//
// WHY have this proxy layer instead of calling JSONPlaceholder directly
// from the browser?
//   1. It demonstrates how a Next.js frontend talks to its OWN backend,
//      which then talks to an external service - the same pattern you'd
//      use with a real database or a private third-party API key.
//   2. It's a place to add logic later (auth, caching, request shaping)
//      without touching any frontend code.
//   3. It keeps the external API URL in one place on the server.

import { NextRequest, NextResponse } from "next/server";
import { User, UserFormData } from "@/types/user";

const EXTERNAL_API = "https://jsonplaceholder.typicode.com/users";

// GET /api/users  ->  fetches all users from JSONPlaceholder
export async function GET() {
  try {
    const res = await fetch(EXTERNAL_API, { cache: "no-store" });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch users" },
        { status: res.status }
      );
    }

    const data: User[] = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

// POST /api/users  ->  creates a user via JSONPlaceholder
export async function POST(request: NextRequest) {
  try {
    const body: UserFormData = await request.json();

    const res = await fetch(EXTERNAL_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to create user" },
        { status: res.status }
      );
    }

    const created: User = await res.json();
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
