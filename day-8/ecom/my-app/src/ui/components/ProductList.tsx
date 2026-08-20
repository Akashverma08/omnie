import {
  Container,
  Grid,
  Typography,
} from "@mui/material";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
    description:
      "Comfortable wireless mouse for everyday use.",
  },

  {
    id: 2,
    name: "Keyboard",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    description:
      "Mechanical keyboard with comfortable keys.",
  },

  {
    id: 3,
    name: "Headphones",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description:
      "High quality headphones with clear sound.",
  },

  {
    id: 4,
    name: "Smart Watch",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description:
      "Smart watch with modern features.",
  },

  {
    id: 5,
    name: "Laptop",
    price: 799.99,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description:
      "Powerful laptop for work and entertainment.",
  },

  {
    id: 6,
    name: "Gaming Mouse",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1563297007-0686b7003af7",
    description:
      "High precision gaming mouse.",
  },
];

export default function ProductList() {
  return (
    <Container sx={{ py: 5 }}>

      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4 }}
      >
        Our Products
      </Typography>

      <Grid container spacing={3}>

        {products.map((product) => (
          <Grid
            key={product.id}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}

      </Grid>

    </Container>
  );
}