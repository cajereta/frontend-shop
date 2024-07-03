import { Product } from "@/lib/types";

export const ProductItem = (product: Product) => {
  return (
    <>
      <div className="w-56 h-fit p-4 flex flex-col gap-4 border border-gray-400 rounded-lg">
        <img
          src={product.thumbnail}
          alt="product"
          width={200}
          height={300}
          className="object-cover"
        />
        <div>
          <h4 className="text-sm text-gray-500">{product.category}</h4>
          <h3 className="font-bold ">{product.title}</h3>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">${product.price}</h3>
          <button className="w-full border border-gray-400 rounded-md p-1.5 hover:bg-blue-800/75 hover:text-white font-[600]">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};