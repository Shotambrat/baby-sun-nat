import React from 'react';
import { cn } from '@lib/utils';
import { Map } from '../Map/Map';
import { Application } from '../Application/Application';
import { List } from './List/ListSpa';
import { Benefit } from './Benefit/BenefitSpa';
import { Specials } from './Specials/Specials';

interface Props {
  className?: string;
}

export const ServicesSpa = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <List />
        <Benefit />
        <Specials />
        <Application />
        <Map />
    </div>
  );
};