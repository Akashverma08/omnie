"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Page() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        const response = await fetch("/api/login", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {

            router.push(`/users/${data.userId}`);

        } else {

            alert(data.message);

        }

    };

    return (
        <form onSubmit={handleLogin}>

            username :
            <input name="username"
                type="text"
                value={username}
                placeholder="enter username"
                onChange={(e) => setUsername(e.target.value)} />
            Password:
            <input name="password"
                type="password"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Login</button>
        </form>
    )
}