import { ProductItem } from "@/components/products/ProductItem";
import { Product } from "@/lib/types";
import { products } from "@/lib/dummyData";

export const NewProductsSection = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full justify-center container mx-auto">
        <h2 className="text-center md:text-left text-3xl font-bold my-8">
          New Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto md:mx-0">
          {products.map((product: Product) => (
            <ProductItem {...product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
