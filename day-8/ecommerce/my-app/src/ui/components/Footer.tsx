"use client";

import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 3,
        textAlign: "center",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        MyShop
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        All Computer Devices Available Here
      </Typography>

     
    </Box>
  );
}