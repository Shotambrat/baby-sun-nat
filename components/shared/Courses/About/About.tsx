import React from 'react';
import { cn } from '@lib/utils';

interface Props {
  className?: string;
}

export const About = ({ className }: Props) => {
  return (
    <div className={cn("py-24",className)}>

    </div>
  );
};