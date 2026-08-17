import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Button from "@mui/material/Button";
import fs from "fs";
import path from "path";

import UserSearch from "./Usersearch";

export default async function User() {
    const cookiesStore = await cookies();
    const LoggedIn = cookiesStore.get("LoggedIn");

    if (!LoggedIn || LoggedIn.value !== "true") {
        redirect("/login");
    }

    const filePath = path.join(process.cwd(),"data","data.json");

    const fileData = fs.readFileSync(filePath, "utf-8");

    const User = JSON.parse(fileData);

    return (
        <div className="users-page">
            <h1>Users</h1>
                        <div className="add-user">
                <Button
                    href="/users/add"
                    variant="contained"
                >
                    Add User
                </Button>
            </div>

            <UserSearch users={User} />
        </div>
    );
}