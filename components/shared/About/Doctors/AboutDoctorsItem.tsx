import React from 'react';
import { cn } from '@lib/utils';
import Image from 'next/image';

interface Props {
  className?: string;
  image: string;
  fullname: string;
  speciality: string[];
}

export const AboutDoctorsItem = ({ className, image, fullname, speciality }: Props) => {
  return (
    <div className={cn("rounded-lg shadow-md bg-white py-4", className)}>
      <Image width={1000} height={1000} src={image} alt={fullname} className="w-full h-[400px] object-cover rounded-3xl" />
      <div className="pt-4">
        <h3 className="text-lg font-semibold">{fullname}</h3>
        <div className="text-sm text-gray-500">
          {speciality.map((spec, index) => (
            <span key={index}>
              {spec}
              {index < speciality.length - 1 ? ' | ' : ''} {/* Разделитель " | " */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
