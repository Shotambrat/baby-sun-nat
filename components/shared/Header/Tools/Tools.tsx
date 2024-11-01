"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, ChevronDown } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
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
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const navigationItems = [
    {
      title: "Услуги",
      href: "/services",
      data: [
        { title: "Хирургия", href: "/services/surgery" },
        { title: "Ортопедия", href: "/services/orthopedics" },
        { title: "СПА для женщин", href: "/services/women-spa" },
        { title: "Косметология", href: "/services/cosmetology" },
        { title: "Детский массаж", href: "/services/child-massage" },
      ],
    },
    {
      title: "Курсы",
      href: "/courses",
      data: [
        { title: "ШРОТ-терапия", href: "/courses/shrot-therapy" },
        { title: "Hijama & zuluk", href: "/courses/hijoma-and-zuluk" },
        { title: "Медсестра", href: "/courses/nursery" },
        { title: "Косметология", href: "/courses/cosmetology" },
      ],
    },
    { title: "О нас", href: "/about" },
    { title: "Отзывы", href: "/reviews" },
    { title: "Контакты", href: "/contacts" },
  ];

  const handleAccordionToggle = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex max-xl:flex gap-4 items-center">
        <LanguageSwitcher />
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
        size={300}
        style={{ height: "100vh" }}
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

        {/* Navigation items with Accordion */}
        <nav className="py-4">
          {navigationItems.map((item, index) => (
            <div key={index}>
              {item.data ? (
                <div>
                  {/* Accordion Header */}
                  <button
                    onClick={() => handleAccordionToggle(item.title)}
                    className={`flex justify-between items-center w-full py-4 text-left text-lg font-semibold ${
                        openAccordion === item.title ? "text-[#009FE3]" : ""
                      } hover:text-[#009FE3] transition-colors duration-500`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`transition-transform duration-500 ${
                        openAccordion === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openAccordion === item.title ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 border-l-2 border-neutral-200">
                      {item.data.map((subItem, subIndex) => (
                        <Link
                          href={subItem.href}
                          key={subIndex}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-gray-700 hover:text-neutral-400 text-md transition-colors duration-300"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button className="w-full" onClick={() => handleAccordionToggle(item.title)}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-4 w-full text-left text-lg font-semibold hover:text-neutral-400 transition-all duration-500"
                >
                  <span>{item.title}</span>
                  <ChevronRight className="text-gray-400" />
                </Link>

                </button>
              )}
            </div>
          ))}
        </nav>

        {/* Request Component */}
        <div className="p-4 w-full flex justify-between z-10">
          <div className="w-full" onClick={() => setIsOpen(false)}>
            <Request className="z-[9999] w-full" />
          </div>
        </div>
      </Drawer>
    </div>
  );
};
