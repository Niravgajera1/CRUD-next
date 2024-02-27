//import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Link href="/addproduct" className="add">
          Add Products
        </Link>{" "}
        <br></br>
        <br></br>
        <Link href="/productlist" className="add">
          product list
        </Link>
      </div>
    </main>
  );
}
