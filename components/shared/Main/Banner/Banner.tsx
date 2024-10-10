import React from 'react';
import { cn } from '@lib/utils';

interface Props {
  className?: string;
}

export const Banner = ({ className }: Props) => {
  return (
    <section className={cn("w-full h-screen70 max-mdx:h-screen60 relative bg-[#CAE3FF]",className)}>
        <div className='w-full flex flex-col'>
            
        </div>
    </section>
  );
};