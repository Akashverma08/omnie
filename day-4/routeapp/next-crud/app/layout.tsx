// app/layout.tsx
//
// This is the ROOT LAYOUT. Every single page in the app is rendered
// INSIDE this file, in place of `{children}`.
//
// Why put <Header /> and <Footer /> here instead of importing them
// into every page manually?
//
// Because layout.tsx wraps EVERY route automatically:
//     /                -> Header, page.tsx content,        Footer
//     /users           -> Header, users/page.tsx content,  Footer
//     /users/add       -> Header, add/page.tsx content,     Footer
//     /users/edit/1    -> Header, edit/[id]/page.tsx content, Footer
//
// If we instead imported <Header /> into each page file, we'd have to
// repeat that import 5+ times and remember to do it on every new page
// we create in the future. Putting it in layout.tsx means it's
// impossible to forget - new pages get it for free just by living
// inside the app/ folder.

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "User CRUD Application",
  description: "A Next.js + TypeScript CRUD app using JSONPlaceholder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
