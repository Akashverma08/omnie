"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter, usePathname } from "next/navigation";
export default function Header() {
  const router=useRouter();
  const pathname = usePathname();
  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
        method: "POST",
    });

    if (response.ok) {
        router.push("/login");
    }
};

  

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "center" ,position:"relative"  }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: 700 }}
        >
          CRUD App
        </Typography>
        <Button 
        color="inherit"
        onClick={handleLogout} sx={{ position: "absolute",right: 20,}}>
          LogOut

        </Button>
      </Toolbar>
    </AppBar>
  );
}