// app/users/add/page.tsx
// Route: /users/add
//
// "use client" is required because we use useState (submitting/error/success
// flags) and useRouter (to redirect after a successful POST) - both are
// browser-only / interactive features.

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import UserForm from "@/components/UserForm";
import { UserFormData } from "@/types/user";

export default function AddUserPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleAdd(data: UserFormData) {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to create user");

      // JSONPlaceholder returns the "created" user (usually with id: 11),
      // but it does NOT actually save it server-side. Since we redirect to
      // /users right after this, and /users re-fetches from JSONPlaceholder,
      // the new user would normally disappear on that fresh fetch.
      //
      // To make the new user visibly appear as requested, we stash it in
      // sessionStorage before redirecting, and the Users page can merge it
      // in. This demonstrates managing client state around a fake API's
      // limitations without adding a database.
      const created = await res.json();
      const stashed = JSON.parse(
        sessionStorage.getItem("newlyAddedUsers") || "[]"
      );
      stashed.push(created);
      sessionStorage.setItem("newlyAddedUsers", JSON.stringify(stashed));

      setSuccess(true);
      setTimeout(() => router.push("/users"), 800);
    } catch (err) {
      setError("Failed to create user. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <h1>Add User</h1>
      {error && <p className="error-banner">{error}</p>}
      {success && <p className="success-banner">User created successfully!</p>}
      <UserForm mode="add" submitting={submitting} onSubmit={handleAdd} />
    </div>
  );
}
