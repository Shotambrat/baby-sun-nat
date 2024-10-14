"use client";
import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

export const Banner = ({ className }: Props) => {
  return (
    <section
      className={cn(
        "w-full h-screen70 max-mdx:h-screen60 relative bg-[#F1F8FF]",
        className
      )}
    >
      <div className="w-full flex max-lgx:flex-col h-full">
        <div className="flex-1 h-full flex flex-col items-start justify-center p-8">
          {/* Banner text and button */}
          <h2 className="text-5xl text-[#008CFF] font-bold mb-4">Хирургия</h2>
          <p className="text-lg text-[#4A4A4A] mb-6">
            Высокоточные операции с применением современных методик для быстрого
            восстановления и максимальной безопасности пациента
          </p>
          <button className="bg-[#008CFF] text-white py-3 px-6 rounded-full hover:bg-[#006FCC] transition-all">
            Подробнее
          </button>
        </div>
        <div className="flex-1 h-full relative flex justify-end">
          {/* Banner image */}
          <Image
            src={'/images/main/banner/image-desktop.png'}
            width={2000}
            height={2000}
            alt="Image Desktop banner"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute -bottom-8 w-full flex justify-center items-center">
        {/* Here you can add the animated slider dots */}
        <div className="w-3 h-3 bg-[#008CFF] rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full mx-1"></div>
      </div>
    </section>
  );
};
