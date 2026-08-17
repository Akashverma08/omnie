"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUser() {

  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const submit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    await fetch("/api/users", {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        name: name,

        email: email,

        address: {
          city: city,
        },
      }),
    });

    router.push("/");
  };

  return (
    <div>
      <h1>Add User</h1>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
        />

        <br />
        <br />

        <button>
          Save
        </button>
      </form>
    </div>
  );
}