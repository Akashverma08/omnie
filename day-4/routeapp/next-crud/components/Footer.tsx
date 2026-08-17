// components/Footer.tsx
//
// Also a Server Component - purely static content, so no "use client"
// is needed. Placed in app/layout.tsx so it renders on every route.

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>2026 User CRUD Application</p>
      </div>
    </footer>
  );
}
