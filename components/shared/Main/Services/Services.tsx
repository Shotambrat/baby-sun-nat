import React from "react";
import { cn } from "@lib/utils";
import { Link } from "@/i18n/routing";
import Image from "next/image";
// import { Button } from "@/components/ui";

interface Props {
  className?: string;
}

type Card = {
  icon: string;
  title: string;
  slug: string;
};

const ServiceCard = ({ card }: { card: Card }) => (
  <Link
    href={card.slug}
    className="bg-[#F1F4F8] p-6 rounded-xl space-y-12 shadow-md hover:shadow-lg transition-shadow flex flex-col items-start"
  >
    <Image
      src={card.icon}
      width={100}
      height={100}
      alt={`Service Card of ${card.slug}`}
      className="w-8"
    />
    <div className="space-y-1">
      <h3 className="text-xl font-semibold">{card.title}</h3>
      <p className="text-[#009FE3] flex gap-3 items-center font-semibold hover:underline">
        Перейти{" "}
        <Image
          src={"/svg/main/services/right-arrow.svg"}
          width={100}
          height={100}
          alt="Arrow right to Link"
          className="w-2"
        />
      </p>
    </div>
  </Link>
);

export const Services = ({ className }: Props) => {
  const cards: Card[] = [
    {
      icon: "/svg/main/services/scissors.svg",
      title: "Хирургия",
      slug: "/services/surgery",
    },
    {
      icon: "/svg/main/services/scissors.svg",
      title: "Ортопедия",
      slug: "/services/orthopedics",
    },
    {
      icon: "/svg/main/services/scissors.svg",
      title: "СПА для женщин",
      slug: "/services/women-spa",
    },
    {
      icon: "/svg/main/services/scissors.svg",
      title: "Косметология",
      slug: "/services/cosmetology",
    },
    {
      icon: "/svg/main/services/scissors.svg",
      title: "Детский массаж",
      slug: "/services/child-massage",
    },
    // {
    //   icon: "/svg/main/services/scissors.svg",
    //   title: "Педиатрия",
    //   slug: "/services/pediatrics",
    // },
  ];

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 flex flex-col gap-8 mx-auto">
        <h2 className="text-4xl font-bold">Наши услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <ServiceCard key={index} card={card} />
          ))}
        </div>
        {/* <div className="w-full flex items-center justify-center">
          <Link href={"/services"}>
            <Button className="px-8 rounded-full py-4 text-xl">
              Показать все улуги
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};
