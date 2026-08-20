import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ReduxProvider from "@/src/ui/components/ReduxProvider";

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