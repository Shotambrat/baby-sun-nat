import React from 'react';
import { cn } from '@lib/utils';
import { BannerHijama } from './Banner/BannerHijama';
import { AboutHijama } from './About/AboutHijama';
import { ModulesHijama } from './Modules/ModulesHijama';
import { Application } from '../Application/Application';
import { Map } from '../Map/Map';
import { Teachers } from './Teachers/Teachers';
import { Bonuses } from './Bonuses/Bonuses';

interface Props {
  className?: string;
}

export const CoursesHijama = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <BannerHijama />
        <AboutHijama />
        <ModulesHijama />
        <Teachers />
        <Bonuses />
        <Application />
        <Map />
    </div>
  );
};
