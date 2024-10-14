"use client";
import React from "react";
import { cn } from "@lib/utils";
import { PhotoProvider, PhotoView } from "react-photo-view"; // Import react-photo-view
import "react-photo-view/dist/react-photo-view.css"; // Import react-photo-view styles
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui"; // Assuming you're using the shadcn carousel

interface Props {
  className?: string;
}

// Example teachers data
const teachers = [
  {
    id: 1,
    name: "Муминова Мадина",
    description:
      "Сертифицированный инструктор, физический терапевт, специализирующийся на коррекции сколиоза и других нарушений осанки",
    image: "/images/about/doctors/doctor.png", // Replace with correct image path
  },
  {
    id: 2,
    name: "Александр Перхун",
    description:
      "Сертифицированный инструктор PSSE (Schroth Method by Nikos Karavidas), физический терапевт и основатель 'Scolios clinic' в Краснодаре",
    image: "/images/courses/teachers/perhun-photo.png",
  },
  {
    id: 3,
    name: "Муминова Мадина",
    description:
      "Сертифицированный инструктор, физический терапевт, специализирующийся на коррекции сколиоза и других нарушений осанки",
    image: "/images/about/doctors/doctor.png",
  },
  {
    id: 4,
    name: "Александр Перхун",
    description:
      "Сертифицированный инструктор PSSE (Schroth Method by Nikos Karavidas), физический терапевт и основатель 'Scolios clinic' в Краснодаре",
    image: "/images/courses/teachers/perhun-photo.png",
  },
  {
    id: 5,
    name: "Муминова Мадина",
    description:
      "Сертифицированный инструктор, физический терапевт, специализирующийся на коррекции сколиоза и других нарушений осанки",
    image: "/images/about/doctors/doctor.png",
  },
  {
    id: 6,
    name: "Александр Перхун",
    description:
      "Сертифицированный инструктор PSSE (Schroth Method by Nikos Karavidas), физический терапевт и основатель 'Scolios clinic' в Краснодаре",
    image: "/images/courses/teachers/perhun-photo.png",
  },
];

export const Teachers = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h2 className="text-4xl font-semibold">Преподаватели</h2>

        <PhotoProvider>
          <Carousel className="space-y-12">
            <CarouselContent>
              {teachers.map((teacher) => (
                <CarouselItem key={teacher.id} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                      <PhotoView src={teacher.image}>
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="cursor-pointer object-cover h-72 w-full" // Uniform height of 72
                        />
                      </PhotoView>
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{teacher.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">{teacher.description}</p>
                      </div>
                    </div>
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
