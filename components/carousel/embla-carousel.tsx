"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import useEmblaCarousel from "embla-carousel-react";
import "./carousel.css";

type carousel = {
  src: string;
  alt: string;
  title: string;
  price: string;
};
type PropType = {
  slides: carousel[];
  options?: EmblaOptionsType;
};

export const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);

  const divStyle = (src: string) => ({
    backgroundImage: "url(" + src + ")",
  });

  return (
    <section className="embla rounded-lg my-8 md:my-2 transition-all">
      <div
        className="embla__viewport rounded-2xl h-[20rem] md:h-[40rem]"
        ref={emblaRef}
      >
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div
                style={divStyle(slide.src)}
                className="w-full h-[40rem] brightness-[0.9] bg-fit bg-center rounded-2xl"
              />
              <div className="absolute top-[10rem] md:top-80 md:bottom-[10rem] p-8 md:p-16 w-full font-bold text-white [text-shadow:_0px_20px_20px_rgb(0_0_0_/_80%)]">
                <h3 className="my-4 text-4xl md:text-7xl drop-shadow-lg tracking-wide ">
                  {slide.title}
                </h3>
                <h3 className=" text-2xl md:text-5xl  drop-shadow-lg tracking-wide ">
                  {slide.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
