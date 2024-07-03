import { bottomHeaderContent } from "@/lib/constants";

export const BottomHeader = () => {
  return (
    <div className="hidden md:flex font-medium justify-center gap-12 items-center  text-gray-700 container py-3 mx-auto ">
      {bottomHeaderContent.map((item, index) => (
        <p
          className="hover:underline underline-offset-8 decoration-2 cursor-pointer decoration-blue-400 "
          key={index}
        >
          {item}
        </p>
      ))}
    </div>
  );
};
