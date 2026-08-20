import products from "@/src/data/products.json";
import ProductCard from "./ProductCard";

import Grid from "@mui/material/Grid";
export default function ProductList() {
  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          px: 2,
        }}
      >
        {products.map((product) => (
          <Grid
            key={product.id}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}