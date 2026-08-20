import {
  Box,
  Typography,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1f365d",
        color: "white",
        textAlign: "center",
        py: 3,
        mt: 5,
      }}
    >
      <Typography>
        © 2026 MyShop. All Rights Reserved.
      </Typography>
    </Box>
  );
}