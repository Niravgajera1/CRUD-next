"use client";

import { useState } from "react";
import "@/app/style.css";

export default function Page() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [color, setcolor] = useState("");
  const [company, setcompany] = useState("");
  const [category, setcategory] = useState("");

  const handleadd = async () => {
    console.log({ name, price, color, company, category });
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POSt",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    result = await result.json();
    if (result.success) {
      alert("product add success fully");
    }
  };

  const handleclear = (e) => {
    setname((e.target.value = ""));
    setcolor((e.target.value = ""));
    setprice((e.target.value = ""));
    setcompany((e.target.value = ""));
    setcategory((e.target.value = ""));
  };
  return (
    <div>
      <h1>Add product</h1>

      <input
        className="input"
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Enter Product price"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Enter Product color"
        value={color}
        onChange={(e) => setcolor(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Enter Product company"
        value={company}
        onChange={(e) => setcompany(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="Enter Product category"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
      />
      <button className="btn" onClick={handleadd}>
        Add Product
      </button>
      <button className="btn" onClick={handleclear}>
        Clear Data
      </button>
    </div>
  );
}
