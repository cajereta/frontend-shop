import { Facebook, Instagram, Twitter, Whatsapp } from "../icons";
import { BottomHeader } from "./bottom-header";
import { MainHeader } from "./main-header";
import { TopHeader } from "./top-header";

export const Header = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <BottomHeader />
    </>
  );
};
