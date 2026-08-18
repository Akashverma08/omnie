"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/login", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      localStorage.setItem("LoggedIn", "true");

      router.push("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: 400,
          p: 2,
          boxShadow: 4,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 3,
            }}
          >
            Login Form
          </Typography>

          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Username"
              placeholder="Enter the username"
              name="username"
              type="text"
              autoComplete="username"
              fullWidth
            />

            <TextField
              label="Password"
              placeholder="Enter the password"
              name="password"
              type="password"
              autoComplete="current-password"
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}