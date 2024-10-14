import React from 'react';
import { cn } from '@lib/utils';
import { Banner } from './Banner/Banner';
import { About } from './About/About';
import { Modules } from './Modules/Modules';
import { Application } from '../Application/Application';
import { Map } from '../Map/Map';
import { Teachers } from './Teachers/Teachers';

interface Props {
  className?: string;
}

export const Courses = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <Banner />
        <About />
        <Modules />
        <Teachers />
        <Application />
        <Map />
    </div>
  );
};