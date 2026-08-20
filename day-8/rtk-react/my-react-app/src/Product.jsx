import AddToCart from "./AddToCart";

const Product = () => {
  return (
    <div className="product">

      <div className="product-image">
        <img
          src="https://images.unsplash.com/photo-1527814050087-3793815479db"
          alt="Wireless Mouse"
        />
      </div>

      <div className="product-info">
        <h1>Wireless Mouse</h1>

        <h2>$29.99</h2>

        <p>
          Experience high-quality performance with this wireless mouse.
          Featuring a comfortable design and smooth movement.
        </p>

        <AddToCart />
      </div>

    </div>
  );
};

export default Product;