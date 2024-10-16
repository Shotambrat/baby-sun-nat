import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Link } from "@/i18n/routing";

interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  return (
    <footer className={cn("bg-[#F1F4F8] flex flex-col gap-4", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto py-12 grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-8">
        <div className="space-y-8">
          <Image
            src={"/images/footer/Footer-logo.png"}
            width={1000}
            height={1000}
            quality={100}
            alt="Footer Logo of Baby Sun"
            className="w-full max-w-[200px] h-auto"
          />
          <div className="flex gap-4 items-center">
            <Image
              src={"/svg/footer/Inst.svg"}
              width={100}
              height={100}
              alt="Instagrm Icon in Footer"
              className="w-10 max-mdx:w-12"
            />
            <Image
              src={"/svg/footer/telegram.svg"}
              width={100}
              height={100}
              alt="Instagrm Icon in Footer"
              className="w-10 max-mdx:w-12"
            />
            <Image
              src={"/svg/footer/facebook.svg"}
              width={100}
              height={100}
              alt="Instagrm Icon in Footer"
              className="w-10 max-mdx:w-12"
            />
            <Image
              src={"/svg/footer/youtube.svg"}
              width={100}
              height={100}
              alt="Instagrm Icon in Footer"
              className="w-10 max-mdx:w-12"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl max-mdx:text-4xl font-semibold">Адрес</h3>
          <p className="text-sm leading-5 max-mdx:text-xl font-medium w-full max-mdx:max-w-full max-w-[250px]">
            г.Ташкент, ул Такая-то, проезд такой-то, дом такой-то
          </p>
          <Link
            href={"/contacts"}
            className="text-[#009FE3] max-mdx:text-xl flex gap-4 font-bold items-center"
          >
            Построить маршрут
            <Image
              src={"/svg/main/services/right-arrow.svg"}
              width={100}
              height={100}
              alt="Footer right Arrow"
              className="w-2"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl max-mdx:text-4xl font-semibold">Связаться с нами</h3>
          <a
            href="tel:+998909999999"
            className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]"
          >
            +998 (90) 999-99-99
          </a>
          <a
            href="tel:+998909999999"
            className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]"
          >
            +998 (90) 123-45-67
          </a>
          <a
            href="milto:name@domain.com"
            className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]"
          >
            name@domain.com
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl max-mdx:text-4xl font-semibold">График работы</h3>
          <p className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]">
            8:00 - 17:00 пн-пт
          </p>
          <p className="text-sm max-mdx:text-xl leading-5 font-medium w-full max-w-[250px]">
            8:00 - 15:00 сб
          </p>
        </div>
      </div>
      <hr />
      <div className="flex w-full justify-between max-w-[1500px] px-4 mx-auto py-4">
        <div className="flex gap-12 max-mdx:gap-4 max-lgx: flex-wrap">
          <p className="text-[#879EBC]">
          2024 © BabySun. Все права защищены
          </p>
          <p className="text-[#879EBC]">
          Политика конфиденциальности
          </p>
          <p className="text-[#879EBC]">
          Пользовательское соглашение
          </p>
        </div>
        <Image
          src={"/svg/footer/result-logo.svg"}
          width={1000}
          height={1000}
          quality={100}
          alt="Result Agency footer Logo"
          className="w-full max-mdx:hidden max-w-[150px]"
        />
      </div>
      <hr className="mdx:hidden" />
      <div className="mdx:hidden w-full flex justify-center py-8">
      <Image
          src={"/svg/footer/result-logo.svg"}
          width={1000}
          height={1000}
          quality={100}
          alt="Result Agency footer Logo"
          className="w-full mdx:hidden max-w-[150px]"
        />
      </div>
    </footer>
  );
};
