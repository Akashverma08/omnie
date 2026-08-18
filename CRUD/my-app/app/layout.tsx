import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppRouterCacheProvider>
          <Header />

          <main style={{ flex: 1 }}>
            {children}
          </main>

          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}