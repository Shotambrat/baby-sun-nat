"use client"
import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface Props {
  className?: string;
}


export const Navigation = ({ className }: Props) => {
  const t = useTranslations('Headers.Navigation');

  // Access the navigation array directly from your translation file
  const navigationItems = [
    { title: t('course'), href: '/services/hirurgiya' },
    { title: t('teachers'), href: '/courses/shrot' },
    { title: t('reviews'), href: '/about' },
    { title: t('education'), href: '/reviews' },
    { title: t('gallery'), href: '/contacts' },
  ];

  return (
    <ul className={cn("h-full flex justify-between items-center gap-4", className)}>
      {navigationItems.map((item, index) => (
        <Link href={item.href} key={index} className='hover:text-neutral-400 text-xl transition-all duration-300'>
          <button
            style={{ fontWeight: 600 }}
            className="focus:outline-none"
          >
            {item.title}
          </button>
        </Link>
      ))}
    </ul>
  );
};
