import { Facebook, Instagram, Twitter, Whatsapp } from "../icons";

export const TopHeader = () => {
  return (
    <>
      <div className="hidden md:flex justify-between border-b border-gray-300/75 p-4 items-center">
        <div className="flex gap-2 text-gray-600">
          <Facebook />
          <Instagram />
          <Twitter />
          <Whatsapp />
        </div>
        <div className="text-gray-500 text-xs flex gap-2">
          <h3 className="font-bold uppercase">Free shipping</h3>
          <h3 className="font-medium uppercase">on orders over $100</h3>
        </div>
        <div className="flex gap-4 text-sm text-gray-600">
          <select
            name="currency"
            id="currency"
            aria-label="Currency"
            className="bg-white rounded-sm  px-2"
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </select>
          <select
            name="language"
            id="language"
            aria-label="Language"
            className="bg-white rounded-sm  px-2 "
          >
            <option value="en">English</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
    </>
  );
};
