import { Cart, Heart, Magnifier, User } from "../icons";

export const MainHeader = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-2 md:justify-between py-4 md:px-4 border-b border-gray-300/75">
        <h1 className="text-2xl font-bold hover:underline decoration-wavy underline-offset-8 cursor-pointer decoration-blue-400/50  ">
          ＦＡＮＣＹ
        </h1>
        <div className="flex items-center w-full px-8 md:w-[65%] relative">
          <input
            type="text"
            placeholder="Search any product"
            className="w-full rounded-md border border-gray-300/75 p-1 px-4"
          />
          <Magnifier className="absolute right-0 mr-14 " />
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-600 mx-4">
          <User width={24} height={24} />
          <Heart width={24} height={24} />
          <Cart width={24} height={24} />
        </div>
      </div>
    </>
  );
};
