import "./App.css";
import data, {
  allCategories,
  categoriesUnique,
  namesAndCategories,
} from "./data";
import CategoryButton from "./components/CategoryButton";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import React from "react";

function App() {
  const [category, setCategory] = useState("All");

  //layout category buttons
  const buttons = categoriesUnique.map((cat) => {
    return (
      <CategoryButton onClick={() => categoryClickHandler(cat)} name={cat} currentCategory={category}/>
    );
  });

  //layout products
  const products = data
    .filter((item) => {
      return item.category === category || category === "All";
    })
    .map((obj) => {
      return <ProductCard data={obj} />;
    });

  //handle category clicks
  const categoryClickHandler = (cat) => {
    setCategory(cat);
  };

  return (
    <div>
      <div className="Category-section">
        {buttons}
        <CategoryButton
          onClick={() => categoryClickHandler("All")}
          name="All"
          currentCategory={category}
        />
      </div>
      <div className="Product-section">{products}</div>
    </div>
  );
}

export default App;
