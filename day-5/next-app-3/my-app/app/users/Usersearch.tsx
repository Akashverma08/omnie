"use client";

import { useState } from "react";
import UserCard from "./UserCard";

export default function UserSearch({ users }: { users: any[] }) {
    const [search, setSearch] = useState("");


    const filteredUsers = users.filter((user) => {

        const normalizedSearch = search.trim().toLowerCase();

        if (normalizedSearch === "") {
            return true;
        }

        const address = `${user.address?.city ?? ""} ${user.address?.street ?? ""} ${user.address?.suite ?? ""}`.toLowerCase();

        return (
            user.id?.toString().includes(normalizedSearch) ||
            user.name?.toLowerCase().includes(normalizedSearch) ||
            user.username?.toLowerCase().includes(normalizedSearch) ||
            user.email?.toLowerCase().includes(normalizedSearch) ||
            address.includes(normalizedSearch)
        );
    });

    return (
        <div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search user..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="users-container">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user: any) => (
                        <UserCard key={user.id} user={user} />
                    ))
                ) : (
                    <p>No user found</p>
                )}
            </div>
        </div>
    );
}