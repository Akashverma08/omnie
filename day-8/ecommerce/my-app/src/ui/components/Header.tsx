"use client";
import { useAppSelector } from "@/src/app/hooks";
//import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Badge,
  IconButton,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//import {RootState} from "@/src/redux/store"

export default function Header() {
  const selector = useAppSelector((state) => state.cart.value);
  //const selector = useSelector((state:any) => state.cart.value);

  return (
    <AppBar position="static" sx={{
      mb: 3
    }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          MyShop
        </Typography>


        <IconButton color="inherit">
          <Badge badgeContent={selector} color="error" showZero>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

      </Toolbar>
    </AppBar>
  );
}