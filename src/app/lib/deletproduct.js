"use client";

import { useRouter } from "next/navigation";

export default function Deletproduct(props) {
  console.log(props.id);
  const router = useRouter();
  const handledelet = async () => {
    let response = await fetch(
      "http://localhost:3000/api/products/" + props.id,
      {
        method: "DELETE",
      }
    );
    response = await response.json();
    if (response.success) {
      alert("Data Deleted");
      router.push("/productlist");
    }
  };
  return (
    <div>
      <button onClick={handledelet}>DELETE</button>
    </div>
  );
}
