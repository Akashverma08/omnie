"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("LoggedIn");

    router.push("/login");
  };

  const isLoginPage = pathname === "/login";

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 700 }}
        >
          CRUD App
        </Typography>

        {!isLoginPage && (
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              position: "absolute",
              right: 20,
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}