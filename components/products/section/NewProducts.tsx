import { ProductItem } from "@/components/products/ProductItem";
import { Product } from "@/lib/types";
import { products } from "@/lib/dummyData";

export const NewProductsSection = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between">
        {products.map((product: Product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </div>
    </>
  );
};
