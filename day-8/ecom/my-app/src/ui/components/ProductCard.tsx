"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { addItem } from "@/src/redux/cartSlice";
import type { AppDispatch } from "@/src/redux/store";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {

  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <Card>

      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />

      <CardContent>

        <Typography variant="h6">
          {product.name}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{ my: 1 }}
        >
          ${product.price}
        </Typography>

        <Typography
          variant="body2"
          sx={{ mb: 2 }}
        >
          {product.description}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>

      </CardContent>

    </Card>
  );
}