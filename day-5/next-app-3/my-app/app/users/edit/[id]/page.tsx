import fs from "fs";
import path from "path";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default async function EditUser(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const filePath = path.join(
        process.cwd(),
        "data",
        "data.json"
    );

    const fileData = fs.readFileSync(filePath, "utf-8");

    const users = JSON.parse(fileData);

    const userExist = users.find(
        (user: any) => user.id === Number(id)
    );

    if (!userExist) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "70vh",
                }}
            >
                <Typography variant="h5">
                    User Not Found
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 3,
            }}
        >
            <Card
                sx={{
                    width: 420,
                    boxShadow: 4,
                }}
            >
                <CardContent sx={{ padding: 4 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 3,
                            fontWeight: 700,
                            textAlign: "center",
                        }}
                    >
                        Edit User
                    </Typography>

                    <Box
                        component="form"
                        action={`/api/users/${id}`}
                        method="POST"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2.5,
                        }}
                    >
                        <TextField
                            label="Username"
                            name="name"
                            defaultValue={userExist.name}
                            fullWidth
                        />

                        <TextField
                            label="City"
                            name="city"
                            defaultValue={userExist.address.city}
                            fullWidth
                        />

                        <TextField
                            label="Street"
                            name="street"
                            defaultValue={userExist.address.street}
                            fullWidth
                        />

                        <TextField
                            label="Suite"
                            name="suite"
                            defaultValue={userExist.address.suite}
                            fullWidth
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                        >
                            Update
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}