// "use client";
import Link from "next/link";
import Deletproduct from "@/app/lib/deletproduct";

const getproducts = async () => {
  let data = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  data = await data.json();
  //console.log(data);
  if (data.success) {
    console.log(data);
    return data.result;
  } else {
    return [];
  }
};

export default async function Page() {
  let product = await getproducts();
  //   console.log(productlist);
  return (
    <div>
      <h1>Product list</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Company</td>
            <td>Color</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.company}</td>
                <td>{item.color}</td>
                <td>{item.category}</td>
                <td>
                  <Link href={"productlist/" + item._id}>Edit</Link>
                </td>
                <td>
                  <Deletproduct id={item._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// const getproducts = async () => {
//   let data = await fetch("http://localhost:3000/api/products");
//   data = await data.json();
//   if (data.success) {
//     return data.result;
//   } else {
//     return []; // Return an empty array if there's an error
//   }
// };

// export default function Page() {
//   const [productList, setProductList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const products = await getproducts();
//       setProductList(products);
//     };
//     fetchData();
//   }, []); // Empty dependency array to only run once on mount

//   return (
//     <div>
//       <h1>Product list</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Price</td>
//             <td>Company</td>
//             <td>Color</td>
//             <td>Category</td>
//           </tr>
//         </thead>
//         <tbody>
//           {productList &&
//             productList.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>{item.company}</td>
//                 <td>{item.color}</td>
//                 <td>{item.category}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
