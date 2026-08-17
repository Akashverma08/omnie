// This file defines the "shape" of a User object using a TypeScript interface.
//
// Why we need this:
// JSONPlaceholder's /users endpoint returns objects with nested fields
// (address.city, company.name, etc). Instead of writing that shape over
// and over in every component, we describe it ONCE here and re-use it
// everywhere with `import { User } from "@/types/user"`.
//
// Benefits:
// - Autocomplete: your editor knows exactly which fields exist on a user.
// - Compile-time safety: if you try to use `user.emial` (typo) TypeScript
//   will refuse to compile instead of failing silently in the browser.
// - Self-documenting: anyone reading UserForm.tsx can look at this file
//   to instantly understand what data a "User" contains.

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

// `User`   -> describes a single user object, e.g. the response of GET /users/1
// `User[]` -> describes an array of users, e.g. the response of GET /users
//
// We also define a separate type for form input, because when ADDING a user
// they don't have an `id` yet (JSONPlaceholder assigns it).
export type UserFormData = Omit<User, "id">;
