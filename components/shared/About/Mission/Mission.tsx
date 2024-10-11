import React from 'react';
import { cn } from '@lib/utils';

interface Props {
  className?: string;
}

export const Mission = ({ className }: Props) => {
  return (
    <div className={cn("py-24",className)}>
        <div className='w-full max-w-[1500px] px-4 mx-auto space-y-8'>
            <h2 className='text-3xl font-semibold'>
                Миссия и ценности
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='rounded-3xl p-8 border border-[#DFDFDF] h-[200px] mdx:h-[300px] lgx:h-[400px]'>
                    <h3 className='text-xl font-semibold'>
                        Забота о детях 
                    </h3>
                    <p className='leading-5 font-medium'>
                    Мы стремимся улучшить качество жизни каждого ребенка, предоставляя передовые методы лечения
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};