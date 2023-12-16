import { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-5 gap-4 bg-black text-white">
        <div className="col-span-3 text-center">Product</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Subtotal</div>
      </div>
      <ProductList />
    </>
  );
}

export default App;
