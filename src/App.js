import "./App.css";
import data, {
  allCategories,
  categoriesUnique,
  categoriesWithCounts,
  namesAndCategories,
} from "./data";
import CategoryButton from "./components/CategoryButton";
import ProductCard from "./components/ProductCard";
import TotalPrice from "./components/TotalPrice";
import SelectedPrice from "./components/SelectedPrice";
import { useState } from "react";
import React from "react";

function App() {
  const [category, setCategory] = useState("All");

  //helper to convert the string price to a float
  const priceToFloat = (strPrice) => {
    const price = strPrice.slice(1);
    return parseFloat(price);
  };
  //handle category clicks
  const categoryClickHandler = (cat) => {
    setCategory(cat);
  };

  //layout category buttons
  const buttons = categoriesUnique.map((cat) => {
    return (
      <CategoryButton
        onClick={() => categoryClickHandler(cat)}
        name={cat}
        currentCategory={category}
        count={categoriesWithCounts[cat]}
      />
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

  //use reduce to get totalPrice
  const totalPrice = data.reduce(
    (prevTotal, item) => prevTotal + priceToFloat(item.price),
    0
  );

  const selectedPrice = data.filter((item) => {
    return item.category === category || category === "All";
  })
  .reduce(
    (prevTotal, item) => prevTotal + priceToFloat(item.price),
    0
  )

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
      <div className="Total-price">
        <TotalPrice total={totalPrice.toFixed(2)} />
      </div>
      <div className="Selected-price">
        <SelectedPrice total={selectedPrice.toFixed(2)} />
      </div>
    </div>
  );
}

export default App;
