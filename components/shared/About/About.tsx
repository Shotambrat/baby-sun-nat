import React from 'react';
import { cn } from '@lib/utils';
import { History } from './History/History';
import { AboutBanner } from './Banner/AboutBanner';

interface Props {
  className?: string;
}

export const About = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <AboutBanner />
        <History />
    </div>
  );
};