"use client";

import { useState } from "react";
import UserActions from "./UserActions";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";

export default function UserCard({ user }: { user: any }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="user-card">
            <div className="user-card-header">
                <h2>{user.name}</h2>

                <IconButton
                    onClick={() => setShowDetails(!showDetails)}
                    color="primary"
                    title="View details"
                >
                    <VisibilityIcon />
                </IconButton>
            </div>

            <p>
                <strong>ID:</strong> {user.id}
            </p>

            {showDetails && (
                <div className="user-details">
                    <p>
                        <strong>City:</strong> {user.address.city}
                    </p>

                    <p>
                        <strong>Address:</strong>{" "}
                        {user.address.street}, {user.address.suite}
                    </p>
                </div>
            )}

            <UserActions id={user.id} />
        </div>
    );
}