import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>

      {/* <a href="/users">Users</a> */}
      <Link href="/users">Users</Link>
      <ProductCard />
    </div>
  );
}
