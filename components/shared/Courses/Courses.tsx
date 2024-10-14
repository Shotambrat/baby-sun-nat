import React from 'react';
import { cn } from '@lib/utils';
import { Banner } from './Banner/Banner';
import { About } from './About/About';

interface Props {
  className?: string;
}

export const Courses = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <Banner />
        <About />
    </div>
  );
};