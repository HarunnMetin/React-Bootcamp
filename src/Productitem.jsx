import "./ProductItem.css";

function PruductItem() {
  return (
    <div class="product-item">
      <div className="product-img">
        <img src="https://picsum.photos/200/300?random=1" alt="soda" />
      </div>
      <b className="produc-title">Soda</b>
      <span className="product-price">4$</span>
    </div>
  );
}

export default PruductItem;
