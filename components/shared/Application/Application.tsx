import React from 'react';
import { cn } from '@lib/utils';

interface Props {
  className?: string;
}

export const Application = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
        <div className='w-full max-w-[1500px] px-4 mx-auto rounded-[50px] relative bg-[#009FE3]'>
            <div className='w-full lgx:p-16 p-6 mdx:p-12 flex max-mdx:flex-col text-white gap-6'>
                <div className='flex-1 space-y-4'>
                    <h3 className='text-4xl font-semibold leading-12 w-full max-w-[300px]'>
                        Записаться на прием
                    </h3>
                </div>
                <div className='flex-1'>

                </div>
            </div>
        </div>
    </div>
  );
};