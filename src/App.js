import "./App.css";
import data, {
  allCategories,
  categoriesUnique,
  namesAndCategories,
} from "./data";
import CategoryButton from "./components/CategoryButton";
import ProductCard from "./components/ProductCard";

function App() {
  //layout category buttons
  const buttons = categoriesUnique.map((cat) => {
    return <CategoryButton name={cat} />;
  });
  //layout products
  const products = data.map((obj) => {
    return <ProductCard data={obj} />
  })
  return (
    <div>
      <div className="Category-section">{buttons}</div>
      <div className="Product-section">{products}</div>
    </div>
  );
}

export default App;
