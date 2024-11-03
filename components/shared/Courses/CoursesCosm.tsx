import React from 'react';
import { cn } from '@lib/utils';
import { BannerCosm } from './Banner/BannerCosm';
import { AboutCosm } from './About/AboutCosm';
import { ModulesCosm } from './Modules/ModulesCosm';
import { Application } from '../Application/Application';
import { Map } from '../Map/Map';
import { Teachers } from './Teachers/Teachers';
import { Bonuses } from './Bonuses/Bonuses';

interface Props {
  className?: string;
}

export const CoursesCosm = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <BannerCosm />
        <AboutCosm />
        <ModulesCosm />
        <Teachers />
        <Bonuses />
        <Application />
        <Map />
    </div>
  );
};