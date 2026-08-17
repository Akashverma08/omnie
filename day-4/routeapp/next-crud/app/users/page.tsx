// app/users/page.tsx
//
// This needs "use client" because it uses:
//   - useState (users list, loading flag, error message, deleting id)
//   - useEffect (fetch users when the page mounts)
//   - onClick (the Delete button, and window.confirm)
// A Server Component cannot hold state or respond to clicks, so this
// page must run in the browser.
//
// Note: this page calls OUR OWN /api/users route (not JSONPlaceholder
// directly). See app/api/users/route.ts for the proxy layer.

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User } from "@/types/user";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data: User[] = await res.json();

      // JSONPlaceholder always returns its original 10 users on GET, even
      // after we've POSTed or PUT changes to it. The Add/Edit pages stash
      // whatever they successfully created/updated in sessionStorage before
      // redirecting here. We merge that into the fetched list so the user
      // visibly sees their change reflected, as required by the project.
      const added: User[] = JSON.parse(
        sessionStorage.getItem("newlyAddedUsers") || "[]"
      );
      const editedMap: Record<number, User> = JSON.parse(
        sessionStorage.getItem("editedUsers") || "{}"
      );

      const merged = data.map((u) => editedMap[u.id] ?? u);
      setUsers([...merged, ...added]);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmed) return;

    setDeletingId(id);
    setError(null);
    try {
      const res = await fetch(`/api/users/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete user");

      // JSONPlaceholder doesn't actually remove the user from its database,
      // but it DOES return a success response for the DELETE request.
      // We treat that success response as our signal to update our own
      // frontend state - removing the user from the `users` array causes
      // React to re-render the table without that row, immediately.
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      setError("Failed to delete user. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  if (loading) return <p className="status-message">Loading users...</p>;

  return (
    <div>
      <div className="page-header">
        <h1>Users</h1>
        <Link href="/users/add" className="btn btn-primary">
          Add User
        </Link>
      </div>

      {error && <p className="error-banner">{error}</p>}

      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.company.name}</td>
              <td className="actions-cell">
                <Link href={`/users/edit/${user.id}`} className="btn btn-sm">
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(user.id)}
                  disabled={deletingId === user.id}
                >
                  {deletingId === user.id ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
