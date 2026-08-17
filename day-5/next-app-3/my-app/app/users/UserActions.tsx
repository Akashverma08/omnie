"use client";

import Link from "next/link";

export default function UserActions({ id }: { id: number }) {
    const handleDelete = async () => {
        const response = await fetch(`/api/users/${id}`, {
            method: "Delete"
        });
        if (response.ok) {
            window.location.reload();
        }
    };

    return (
        <div className="user-actions">
            <button onClick={handleDelete} className="delete-button">Delete</button>
            <Link href={`/users/edit/${id}`}>
                <button className="edit-button">Edit</button>
            </Link>
        </div>
    )

}