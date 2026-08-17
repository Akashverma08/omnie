// components/UserForm.tsx
//
// This component needs "use client" because it uses:
//   - useState (to hold form field values and validation errors)
//   - onChange / onSubmit event handlers (browser interaction)
// None of that can run on the server, so this MUST be a Client Component.
//
// It is REUSABLE: both the "Add User" page and the "Edit User" page
// render <UserForm /> with different props. The `mode` prop ("add" | "edit")
// only changes small details (button text, whether initialData is pre-filled).
// All the field markup, validation, and layout lives in ONE place.

"use client";

import { useState } from "react";
import { UserFormData } from "@/types/user";

interface UserFormProps {
  mode: "add" | "edit";
  initialData?: UserFormData;
  submitting: boolean;
  onSubmit: (data: UserFormData) => void;
}

interface FormErrors {
  name?: string;
  username?: string;
  email?: string;
  city?: string;
  companyName?: string;
}

const emptyForm: UserFormData = {
  name: "",
  username: "",
  email: "",
  address: { city: "" },
  company: { name: "" },
};

export default function UserForm({
  mode,
  initialData,
  submitting,
  onSubmit,
}: UserFormProps) {
  const [form, setForm] = useState<UserFormData>(initialData ?? emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.username.trim()) newErrors.username = "Username is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Email format looks invalid";
    }

    if (!form.address.city.trim()) newErrors.city = "City is required";
    if (!form.company.name.trim())
      newErrors.companyName = "Company name is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    field: "name" | "username" | "email" | "city" | "companyName",
    value: string
  ) {
    setForm((prev) => {
      if (field === "city") {
        return { ...prev, address: { ...prev.address, city: value } };
      }
      if (field === "companyName") {
        return { ...prev, company: { ...prev.company, name: value } };
      }
      return { ...prev, [field]: value };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(form);
  }

  return (
    <form className="user-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {errors.name && <p className="field-error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={form.username}
          onChange={(e) => handleChange("username", e.target.value)}
        />
        {errors.username && <p className="field-error">{errors.username}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email && <p className="field-error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={form.address.city}
          onChange={(e) => handleChange("city", e.target.value)}
        />
        {errors.city && <p className="field-error">{errors.city}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="companyName">Company Name</label>
        <input
          id="companyName"
          type="text"
          value={form.company.name}
          onChange={(e) => handleChange("companyName", e.target.value)}
        />
        {errors.companyName && (
          <p className="field-error">{errors.companyName}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting
          ? "Saving..."
          : mode === "add"
          ? "Add User"
          : "Update User"}
      </button>
    </form>
  );
}
