"use client";
import {useAppDispatch} from "@/src/app/hooks"

//import { useDispatch } from "react-redux";
import { addItem } from "@/src/redux/slice";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
//import { AppDispatch } from "@/src/redux/store";

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

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  //const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addItem());
  };

  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {product.name}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          sx={{ mt: 1, fontWeight: "bold" }}
        >
          ${product.price}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {product.description}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleAddToCart}
            sx={{
              borderRadius: 3,
              textTransform: "none",
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}