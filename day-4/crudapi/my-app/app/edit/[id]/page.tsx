"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

export default function EditUser() {

  const params = useParams();

  const router = useRouter();

  const id = params.id;

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [city, setCity] =
    useState("");

  useEffect(() => {

    const getUser = async () => {

      const response =
        await fetch(
          `/api/users/${id}`
        );

      const data =
        await response.json();

      setName(data.name);

      setEmail(data.email);

      setCity(
        data.address.city
      );
    };

    getUser();

  }, [id]);

  const update = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    await fetch(
      `/api/users/${id}`,
      {
        method: "PUT",

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
      }
    );

    router.push("/");
  };

  return (
    <div>
      <h1>Edit User</h1>

      <form onSubmit={update}>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <input
          type="text"
          value={city}
          onChange={(e) =>
            setCity(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <button>
          Update
        </button>

      </form>
    </div>
  );
}