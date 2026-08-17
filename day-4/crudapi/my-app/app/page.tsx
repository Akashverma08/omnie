"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState<any[]>([]);

  const getUsers = async () => {
    const response = await fetch("/api/users");

    const data = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (id: number) => {
    await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });

    setUsers(
      users.filter((u) => u.id !== id)
    );
  };

  return (
    <div>
      <h1>User List</h1>

      <Link href="/add">
        Add User
      </Link>

      <br />
      <br />

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>{user.name}</td>

              <td>{user.email}</td>

              <td>{user.address?.city}</td>

              <td>
                <Link
                  href={`/edit/${user.id}`}
                >
                  Edit
                </Link>

                {"  "}

                <button
                  onClick={() =>
                    deleteUser(user.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}