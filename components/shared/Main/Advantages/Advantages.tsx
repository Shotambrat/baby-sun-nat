import React from 'react';
import { cn } from '@lib/utils';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Advantages = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className='w-full max-w-[1500px] px-4 space-y-12'>
        <h2 className="text-4xl font-bold">
          Преимущества клиники
        </h2>
        
        {/* Responsive grid layout */}
        <div className='gap-[12px] grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4'>
          
          {/* First Advantage */}
          <div className='border rounded-3xl flex flex-col order-1 items-start justify-center gap-8 px-[16px] py-[16px]'>
            <h3 className='font-medium text-2xl leading-6'>
              Современное оборудование
            </h3>
            <p className='text-lg leading-5 text-[#333]'>
              Клиника оснащена передовой медицинской техникой, обеспечивая высокоточные результаты диагностики.
            </p>
          </div>
          <div className='order-2'>
            <Image
              src='/images/main/advantages/image (2).png'
              quality={100}
              layout='responsive'
              width={500}
              height={500}
              alt='Современное оборудование'
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Second Advantage */}
          <div className='border rounded-3xl flex flex-col order-3 mdx:order-4 lgx:order-3 items-start justify-center gap-8 px-[16px] py-[16px]'>
            <h3 className='font-medium text-2xl leading-6'>
              Индивидуальный подход
            </h3>
            <p className='text-lg leading-5 text-[#333]'>
              Каждому пациенту уделяется максимальное внимание, с учетом его особенностей и потребностей.
            </p>
          </div>
          <div className='order-4 mdx:order-3 lgx:order-4'>
            <Image
              src='/images/main/advantages/IMG_2170 (1).png'
              quality={100}
              layout='responsive'
              width={500}
              height={500}
              alt='Индивидуальный подход'
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Third Advantage */}
          <div className='border rounded-3xl flex flex-col order-5 lgx:order-6 items-start justify-center gap-8 px-[16px] py-[16px]'>
            <h3 className='font-medium text-2xl leading-6'>
              Опытные специалисты
            </h3>
            <p className='text-lg leading-5 text-[#333]'>
              Наши врачи — признанные эксперты в своих областях, регулярно повышающие квалификацию.
            </p>
          </div>
          <div className='order-6 lgx:order-5'>
            <Image
              src='/images/main/advantages/Rectangle 4.png'
              quality={100}
              layout='responsive'
              width={500}
              height={500}
              alt='Опытные специалисты'
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Fourth Advantage */}
          <div className='border rounded-3xl flex flex-col order-7 mdx:order-8 items-start justify-center gap-8 px-[16px] py-[16px]'>
            <h3 className='font-medium text-2xl leading-6'>
              Комфортные условия
            </h3>
            <p className='text-lg leading-5 text-[#333]'>
              Мы создали уютную и дружелюбную атмосферу, чтобы дети не боялись посещать врача.
            </p>
          </div>
          <div className='order-8 mdx:order-7'>
            <Image
              src='/images/main/advantages/Advantage.png'
              quality={100}
              layout='responsive'
              width={500}
              height={500}
              alt='Комфортные условия'
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
};
