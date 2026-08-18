"use client";

import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

type User = {
  id: number;
  name: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
};

type Props = {
  user: User;
  onClose: () => void;
  onDelete: (id: number) => void;
};

export default function UserDetailsCard({
  user,
  onClose,
  onDelete,
}: Props) {
  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography
          variant="h5"
          component="h5"
          sx={{ mb: 2 }}
        >
          User Details
        </Typography>

        <Typography>
          <strong>ID:</strong> {user.id}
        </Typography>

        <Typography>
          <strong>Name:</strong> {user.name}
        </Typography>

        <Typography>
          <strong>Street:</strong> {user.address.street}
        </Typography>

        <Typography>
          <strong>Suite:</strong> {user.address.suite}
        </Typography>

        <Typography>
          <strong>City:</strong> {user.address.city}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 3 }}
        >
          <Button
            variant="contained"
            href={`/users/edit/${user.id}`}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </Button>

          <Button
            variant="outlined"
            onClick={onClose}
          >
            Close
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}