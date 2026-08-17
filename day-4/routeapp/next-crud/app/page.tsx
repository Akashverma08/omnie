// app/page.tsx
//
// This file maps to the "/" route (the homepage).
// It's a Server Component - purely static, no state or events -
// so no "use client" directive is needed.

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-hero">
      <h1>User Management System</h1>
      <p>
        A simple CRUD app built with Next.js App Router, TypeScript, and the
        JSONPlaceholder fake REST API.
      </p>
      <div className="home-actions">
        <Link href="/users" className="btn btn-primary">
          View Users
        </Link>
        <Link href="/users/add" className="btn btn-secondary">
          Add User
        </Link>
      </div>
    </div>
  );
}
