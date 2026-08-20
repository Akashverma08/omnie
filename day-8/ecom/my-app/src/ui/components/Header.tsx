"use client";

import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Badge,
} from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";

export default function Header() {
  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>

        <Typography variant="h5">
          MyShop
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

          <Button
            component={Link}
            href="/"
            sx={{ color: "white" }}
          >
            Home
          </Button>

          <Button
            component={Link}
            href="/"
            sx={{ color: "white" }}
          >
            Products
          </Button>

          <Badge
            badgeContent={cartItems.length}
            color="error"
          >
            <span role="img" aria-label="Shopping cart" style={{fontSize: "32px"}}>
              🛒
            </span>
          </Badge>

        </Box>

      </Toolbar>
    </AppBar>
  );
}