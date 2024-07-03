import { Carousel } from "@/components/carousel/Carousel";
import { ProductItem } from "@/components/products/ProductItem";
import { products } from "@/lib/dummyData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen ">
      <Carousel />
      <ProductItem {...products[0]} />
    </main>
  );
}
