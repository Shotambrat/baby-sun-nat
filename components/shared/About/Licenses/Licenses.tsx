"use client";
import React from "react";
import { cn } from "@lib/utils";
import { PhotoProvider, PhotoView } from 'react-photo-view'; // Import react-photo-view
import 'react-photo-view/dist/react-photo-view.css'; // Import react-photo-view styles
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui"; // Assuming you're using the shadcn carousel

interface Props {
  className?: string;
}

const licenses = [
  {
    id: 1,
    image: "/images/about/licenses/licence.png", // Path to your image
  },
  {
    id: 2,
    image: "/images/about/licenses/licence.png", // Same image repeated for demonstration
  },
  {
    id: 3,
    image: "/images/about/licenses/licence.png",
  },
  {
    id: 4,
    image: "/images/about/licenses/licence.png",
  },
  {
    id: 5,
    image: "/images/about/licenses/licence.png",
  },
];

export const Licenses = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h2 className="text-4xl font-bold">Сертификаты и лицензии</h2>

        <PhotoProvider>
          <Carousel className="space-y-12">
            <CarouselContent>
              {licenses.map((license, index) => (
                <CarouselItem key={index} className="mdx:basis-1/2 lgx:basis-1/4">
                  <div className="p-2 h-auto rounded-2xl flex justify-center items-center">
                    <PhotoView src={license.image}>
                      <img
                        src={license.image}
                        alt={`License ${index + 1}`}
                        className="cursor-pointer object-contain h-full w-full"
                      />
                    </PhotoView>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </PhotoProvider>
      </div>
    </div>
  );
};
