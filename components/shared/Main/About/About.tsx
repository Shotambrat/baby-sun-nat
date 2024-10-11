import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui";

interface Props {
  className?: string;
}

export const About = ({ className }: Props) => {
  const aboutText = `Клиника BabySun является ведущим медицинским учреждением, специализирующимся на детском здоровье. Мы предлагаем широкий спектр медицинских услуг, начиная от диагностики и профилактики заболеваний до сложных хирургических вмешательств. Наша цель — обеспечить каждому ребенку качественное медицинское обслуживание, основанное на современных методиках и доказательной медицине.\n
  Клиника гордится своим профессиональным коллективом, который состоит из опытных врачей и медицинских сестер. Мы постоянно совершенствуем наши знания и внедряем инновационные подходы для улучшения здоровья наших маленьких пациентов.\n
  Наша команда понимает, насколько важен индивидуальный подход к каждому ребенку и его семье, поэтому мы создаем комфортные условия для лечения и реабилитации, помогая малышам быстрее восстанавливаться и чувствовать себя уверенно.`;

  return (
    <section className={cn("py-24 bg-white", className)}>
      <div className="w-full max-w-[1550px] px-4 mx-auto flex max-lgx:flex-col gap-4 items-start justify-start">
        <div className="w-full lgx:w-auto flex justify-center">
          <Image
            src={"/images/main/about/about.png"}
            width={1000}
            height={1000}
            alt="About section Group Image"
            className="w-full max-w-[] mdx:hidden lgx:block h-full max-h-[700px]"
            quality={100}
          />
          <Image
            src={"/images/main/about/about2.png"}
            width={1000}
            height={1000}
            alt="About section Group Image"
            className="w-full hidden mdx:block lgx:hidden"
            quality={100}
          />

        </div>
        <div className="w-full lgx:w-auto h-full flex flex-col justify-between gap-4 max-w-[500px] py-8 lgx:py-24">
          <h2 className="text-4xl font-bold max-mdx:mb-6">О клинике</h2>
          <p className="leading-5 max-mdx:text-lg font-medium whitespace-pre-line">
            {aboutText}
          </p>
          <Link href={'/about'}>
            <Button className="self-start max-mdx:text-xl bg-blue-500 text-white max-mdx:py-4 py-3 max-mdx:px-16 px-12 rounded-full">
              Подробнее
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};