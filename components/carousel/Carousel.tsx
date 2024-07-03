import { EmblaCarousel } from "./embla-carousel";
import { SlidesImages } from "@/lib/constants";

export const Carousel = () => {
  return (
    <>
      <EmblaCarousel slides={SlidesImages} />
    </>
  );
};
