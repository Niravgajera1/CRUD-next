"use client";

import { useEffect, useState } from "react";
import "./../../style.css";

export default function Page(props) {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [color, setcolor] = useState("");
  const [company, setcompany] = useState("");
  const [category, setcategory] = useState("");

  useEffect(() => {
    geteditproduct();
  }, []);

  const geteditproduct = async () => {
    let productid = props.params.productedit;
    // console.log(productid);
    let productdata = await fetch(
      "http://localhost:3001/api/products/" + productid
    );
    productdata = await productdata.json();
    console.log(productdata);
    if (productdata.success) {
      let result = productdata.result;
      setname(result.name);
      setprice(result.price);
      setcolor(result.color);
      setcompany(result.company);
      setcategory(result.category);
    }
  };

  const handleupdate = async () => {
    let productid = props.params.productedit;
    let data = await fetch("http://localhost:3001/api/products/" + productid, {
      method: "PUT",
      body: JSON.stringify({ name, price, color, company, category }),
    });
    data = await data.json();
    if (data.result) {
      alert("product is updated");
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
      <h1>Update product</h1>

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
      <button className="btn" onClick={handleupdate}>
        Update Product
      </button>
      <button className="btn" onClick={handleclear}>
        Clear Data
      </button>
    </div>
  );
}
