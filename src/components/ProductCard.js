const ProductCard = (props) => {
  return (
    <div className="Product-card">
      <h4>{props.data.name}</h4>
      <p>{props.data.category}</p>
      <p>{props.data.price}</p>
    </div>
  );
};
export default ProductCard;
