import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <h2>Next App User System</h2>
        </header>

        <main className="content">
          {children}
        </main>

        <footer className="footer">
          <p>Akash Verma</p>
        </footer>
      </body>
    </html>
  );
}