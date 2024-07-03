import { User, Heart, Cart, Menu } from "../icons";

export const MobileNavigation = () => {
  return (
    <div className="md:hidden bottom-1 sticky m-2 py-4 border rounded-lg bg-transparent">
      <div className="flex justify-between  items-center  text-gray-600 mx-12">
        <User width={24} height={24} className="cursor-pointer" />
        <Heart width={24} height={24} className="cursor-pointer" />
        <Cart width={24} height={24} className="cursor-pointer" />
        <Menu width={24} height={24} className="cursor-pointer" />
      </div>
    </div>
  );
};
