import React from 'react';
import { cn } from '@lib/utils';
import { BannerNurse } from './Banner/BannerNurse';
import { AboutNurse } from './About/AboutNurse';
import { ModulesNurse } from './Modules/ModulesNurse';
import { Application } from '../Application/Application';
import { Map } from '../Map/Map';
import { Teachers } from './Teachers/Teachers';
import { Bonuses } from './Bonuses/Bonuses';

interface Props {
  className?: string;
}

export const CoursesNurse = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <BannerNurse />
        <AboutNurse />
        <ModulesNurse />
        <Teachers />
        <Bonuses />
        <Application />
        <Map />
    </div>
  );
};
