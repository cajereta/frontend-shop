import { Carousel } from "@/components/carousel/Carousel";
import { NewProductsSection } from "@/components/products/section/NewProducts";
import { Testimonials } from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4">
      <Carousel />
      <NewProductsSection />
      <Testimonials />
    </main>
  );
}
