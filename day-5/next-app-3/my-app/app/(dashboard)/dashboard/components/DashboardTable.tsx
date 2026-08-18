"use client";

import { useEffect, useState } from "react";

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";

import DashboardFilters from "./DashboardFilters";
import UserDetailsCard from "./UserDetailsCard";

type User = {
  id: number;
  name: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
};

export default function DashboardTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [filterField, setFilterField] = useState("name");
  const [filterValue, setFilterValue] = useState("");

  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const getUsers = async () => {
    try {
      const response = await fetch("/api/users");

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Get value according to selected field
  const getFieldValue = (user: User, field: string) => {
    if (field === "name") {
      return user.name;
    }

    if (field === "city") {
      return user.address.city;
    }

    if (field === "street") {
      return user.address.street;
    }

    if (field === "suite") {
      return user.address.suite;
    }

    return "";
  };

  // Filtering
  const filteredUsers = users.filter((user) => {
    const value = getFieldValue(user, filterField);

    return value
      .toLowerCase()
      .includes(filterValue.toLowerCase());
  });

  // Sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const valueA = getFieldValue(a, sortField).toLowerCase();
    const valueB = getFieldValue(b, sortField).toLowerCase();

    if (sortOrder === "asc") {
      return valueA.localeCompare(valueB);
    }

    return valueB.localeCompare(valueA);
  });

  // Delete user
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setSelectedUser(null);

      getUsers();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>

      {/* Dashboard Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">
          Dashboard
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          href="/users/add"
        >
          Add User
        </Button>
      </Box>

      {/* Filter and Sort */}
      <DashboardFilters
        filterField={filterField}
        filterValue={filterValue}
        sortField={sortField}
        sortOrder={sortOrder}
        onFilterFieldChange={setFilterField}
        onFilterValueChange={setFilterValue}
        onSortFieldChange={setSortField}
        onSortOrderChange={setSortOrder}
      />

      {/* Users Table */}
      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow>

              <TableCell>
                <strong>Name</strong>
              </TableCell>

              <TableCell>
                <strong>Street</strong>
              </TableCell>

              <TableCell>
                <strong>Suite</strong>
              </TableCell>

              <TableCell>
                <strong>City</strong>
              </TableCell>

              <TableCell align="center">
                <strong>View</strong>
              </TableCell>

            </TableRow>
          </TableHead>

          <TableBody>
            {sortedUsers.map((user) => (
              <TableRow key={user.id}>

                <TableCell>
                  {user.name}
                </TableCell>

                <TableCell>
                  {user.address.street}
                </TableCell>

                <TableCell>
                  {user.address.suite}
                </TableCell>

                <TableCell>
                  {user.address.city}
                </TableCell>

                <TableCell align="center">

                  <IconButton
                    color="primary"
                    onClick={() => setSelectedUser(user)}
                  >
                    <VisibilityIcon />
                  </IconButton>

                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      {/* No users message */}
      {sortedUsers.length === 0 && (
        <Typography
          sx={{
            mt: 3,
            textAlign: "center",
          }}
        >
          No users found
        </Typography>
      )}

      {/* User Details */}
      {selectedUser && (
        <UserDetailsCard
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          onDelete={handleDelete}
        />
      )}

    </Box>
  );
}