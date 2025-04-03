"use client";
import { useState, useEffect, useRef } from "react";

interface SlideData {
  title: string;
  description: string;
  // button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  total: number;
}

const Slide = ({ slide, index, current }: SlideProps) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-[60vh] flex items-center justify-center transition-transform duration-1000 ease-in-out bg-white p-6"
      style={{ transform: `translateX(${(index - current) * 100}%)` }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-6xl mx-auto">
        <div className="text-left md:w-1/2 p-6">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900">{slide.title}</h2>
          <p className="mt-2 text-sm md:text-lg text-gray-700">{slide.description}</p>
          <button className="mt-4 px-6 py-2 bg-[#FFCD00] text-white rounded-lg shadow-md hover:bg-pink-600 transition">
            {/* {slide.button} */}
            Enroll Now
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img className="w-full lg:w-80 object-cover rounded-lg" src={slide.src} alt={slide.title} />
        </div>
      </div>
    </div>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, slides.length]);

  return (
    <div className="relative md:px-12 md:py-6 overflow-hidden w-full h-full">
      <div className="relative w-full h-[55vh] overflow-hidden">
        <div className="relative flex w-full h-full">
          {slides.map((slide, index) => (
            <Slide key={index} slide={slide} index={index} current={current} total={slides.length} />
          ))}
        </div>
      </div>
    </div>
  );
}
