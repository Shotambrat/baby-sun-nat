"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Request } from "../../Request/Request";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "@/i18n/routing";

interface Props {
  className?: string;
}

export const Tools = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Headers.Navigation");

  const navigationItems = [
    { title: t('course'), href: '/services/hirurgiya' },
    { title: t('teachers'), href: '/courses/shrot' },
    { title: t('reviews'), href: '/about' },
    { title: t('education'), href: '/reviews' },
    { title: t('gallery'), href: '/contacts' },
  ];

  const handleScroll = (href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Закрываем меню после прокрутки
    }
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex max-xl:flex gap-4 items-center">
        <LanguageSwitcher  />
        <Request className="max-mdx:hidden" />
      </div>

      {/* Burger Menu Icon */}
      <Button
        variant="ghost"
        className="ml-2 lgx:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </Button>

      {/* Full-height Drawer Menu */}
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        size={300} // Drawer width
        style={{ height: "100vh" }} // Ensures full height
        className="p-4 z-0"
      >
        <div className="flex justify-end items-center border-b border-neutral-200">
          <Button
            className="text-xl"
            variant="ghost"
            onClick={() => setIsOpen(false)}
          >
            X
          </Button>
        </div>

        {/* Navigation items */}
        <nav className="py-4">
          {navigationItems.map((item, index) => (
            <Link
            href={item.href}
              key={index}
              onClick={() => handleScroll(item.href)}
              className="flex items-center justify-between py-4 border-b border-neutral-200 w-full text-left"
            >
              <span className="hover:text-neutral-400 text-lg font-semibold transition-all duration-300">
                {item.title}
              </span>
              <ChevronRight className="text-gray-400" />
            </Link>
          ))}
        </nav>

        <div className="p-4 w-full flex justify-between z-10">
          {/* <LanguageSwitcher /> */}
          <div className="w-full" onClick={() => setIsOpen(false)}>
            <Request className="z-[9999] w-full" />
          </div>
        </div>
      </Drawer>
    </div>
  );
};
