"use client";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

type Props = {
  filterField: string;
  filterValue: string;
  sortField: string;
  sortOrder: string;

  onFilterFieldChange: (value: string) => void;
  onFilterValueChange: (value: string) => void;
  onSortFieldChange: (value: string) => void;
  onSortOrderChange: (value: string) => void;
};

export default function DashboardFilters({
  filterField,
  filterValue,
  sortField,
  sortOrder,
  onFilterFieldChange,
  onFilterValueChange,
  onSortFieldChange,
  onSortOrderChange,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
        flexWrap: "wrap",
      }}
    >
      {/* Filter Field */}
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Filter By</InputLabel>

        <Select
          value={filterField}
          label="Filter By"
          onChange={(e) => onFilterFieldChange(e.target.value)}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="street">Street</MenuItem>
          <MenuItem value="suite">Suite</MenuItem>
          <MenuItem value="city">City</MenuItem>
        </Select>
      </FormControl>

      {/* Filter Value */}
      <TextField
        label="Search"
        value={filterValue}
        onChange={(e) => onFilterValueChange(e.target.value)}
      />

      {/* Sort Field */}
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Sort By</InputLabel>

        <Select
          value={sortField}
          label="Sort By"
          onChange={(e) => onSortFieldChange(e.target.value)}
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="street">Street</MenuItem>
          <MenuItem value="suite">Suite</MenuItem>
          <MenuItem value="city">City</MenuItem>
        </Select>
      </FormControl>

      {/* Sort Order */}
      <FormControl sx={{ minWidth: 180 }}>
        <InputLabel>Order</InputLabel>

        <Select
          value={sortOrder}
          label="Order"
          onChange={(e) => onSortOrderChange(e.target.value)}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}