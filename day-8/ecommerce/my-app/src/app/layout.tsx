import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ReduxProvider from "@/src/ui/components/ReduxProvider";

export const metadata: Metadata = {
  title: "MyShop",
  description: "Ecommerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}