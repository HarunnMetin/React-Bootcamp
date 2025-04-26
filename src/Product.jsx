import PruductItem from "./Productitem";

function Products() {
  return (
    <div className="products">
      <h1>Product Component</h1>
      <div className="product-container">
        <PruductItem />
        <PruductItem />
        <PruductItem />
        <PruductItem />
      </div>
    </div>
  );
}

export default Products;
