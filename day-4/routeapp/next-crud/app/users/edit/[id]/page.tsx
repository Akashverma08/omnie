// app/users/edit/[id]/page.tsx
// Route: /users/edit/1, /users/edit/2, /users/edit/10 ...
//
// The [id] folder name is a dynamic segment - Next.js generates a route
// for ANY id value automatically, we don't create a separate file per user.
// The `params` prop below gives us the actual id from the URL.
//
// "use client" is required: useState (form data/loading/error),
// useEffect (fetch the user when the page loads), and useRouter (redirect
// after a successful update) are all client-only features.

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserForm from "@/components/UserForm";
import { User, UserFormData } from "@/types/user";

interface EditUserPageProps {
  params: { id: string };
}

export default function EditUserPage({ params }: EditUserPageProps) {
  const router = useRouter();
  const { id } = params;

  const [initialData, setInitialData] = useState<UserFormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/users/${id}`);
        if (!res.ok) throw new Error("User not found");
        const data: User = await res.json();
        setInitialData({
          name: data.name,
          username: data.username,
          email: data.email,
          address: { city: data.address.city },
          company: { name: data.company.name },
        });
      } catch (err) {
        setError("User not found or failed to load.");
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  async function handleUpdate(data: UserFormData) {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to update user");

      const updated: User = await res.json();

      // Same reasoning as the Add page: JSONPlaceholder doesn't persist the
      // PUT, so we stash the updated user (keyed by id) in sessionStorage
      // and the Users list merges it in on next fetch.
      const editedMap = JSON.parse(
        sessionStorage.getItem("editedUsers") || "{}"
      );
      editedMap[Number(id)] = { ...updated, id: Number(id) };
      sessionStorage.setItem("editedUsers", JSON.stringify(editedMap));

      setSuccess(true);
      setTimeout(() => router.push("/users"), 800);
    } catch (err) {
      setError("Failed to update user. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <p className="status-message">Loading user...</p>;
  if (error && !initialData) return <p className="error-banner">{error}</p>;

  return (
    <div>
      <h1>Edit User</h1>
      {error && <p className="error-banner">{error}</p>}
      {success && (
        <p className="success-banner">User updated successfully!</p>
      )}
      {initialData && (
        <UserForm
          mode="edit"
          initialData={initialData}
          submitting={submitting}
          onSubmit={handleUpdate}
        />
      )}
    </div>
  );
}
