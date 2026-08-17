import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        href="/login"
        size="large"
      >
        Login
      </Button>
    </Box>
  );
}