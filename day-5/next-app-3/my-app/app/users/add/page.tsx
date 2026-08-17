import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Add() {
    return (
        <Box sx={{minHeight: "70vh",display: "flex",justifyContent: "center",alignItems: "center",padding: 3,}}>
            <Card sx={{ width: 420, boxShadow: 4,}}>
                <CardContent sx={{ padding: 4 }}>
                    <Typography variant="h5"
                        sx={{mb: 3,fontWeight: 700,textAlign: "center",}}>
                        Add User
                    </Typography>

                    <Box
                        component="form"
                        action="/api/users/add"
                        method="POST"
                        sx={{display: "flex",flexDirection: "column",
                            gap: 2.5,
                        }}
                    >
                        <TextField
                            label="Username"
                            name="name"
                            placeholder="Enter your name"
                            fullWidth
                            required
                        />

                        <TextField
                            label="City"
                            name="city"
                            placeholder="Enter your city"
                            fullWidth
                            required
                        />

                        <TextField
                            label="Street"
                            name="street"
                            placeholder="Enter your street"
                            fullWidth
                            required
                        />

                        <TextField
                            label="Suite"
                            name="suite"
                            placeholder="Enter your suite"
                            fullWidth
                            required
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            Add User
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}