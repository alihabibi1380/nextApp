import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Next-Js Project</h1>
      <Link href="/users">Go to users page</Link><br/>
      <Link href="/users/new">Go to new users page</Link>
      <ProductCard/>
    </main>
  )
}
