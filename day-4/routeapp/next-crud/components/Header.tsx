// components/Header.tsx
//
// This is a SERVER component (no "use client" at the top).
// Why? It has no state, no event handlers, no browser-only APIs -
// it just renders static navigation links. Server components are
// rendered on the server and shipped to the browser as plain HTML,
// which means less JavaScript sent to the client. We only add
// "use client" when a component truly needs interactivity.
//
// We use Next.js's <Link> component instead of a plain <a> tag because
// <Link> enables client-side navigation (no full page reload) and
// Next.js automatically prefetches the linked page in the background.

import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          User CRUD App
        </Link>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/users">Users</Link>
          <Link href="/users/add">Add User</Link>
        </nav>
      </div>
    </header>
  );
}
