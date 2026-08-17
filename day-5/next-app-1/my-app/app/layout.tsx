

export default function RootLayout({children,}:{children:ReactNode}) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <header>My Header</header>
        {children}
        <footer>My footer</footer>
        </body>
    </html>
  );
}
