import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";

interface Props {
  className?: string;
}

const items = [
  {
    icon: "/svg/services/benefits/1.svg",
    title: "Профессиональный подход",
    description:
      "Опытный специалист с двумя сертификатами гарантирует высокий уровень сервиса",
  },
  {
    icon: "/svg/services/benefits/2.svg",
    title: "Индивидуальные программы",
    description:
      "Подбор процедур с учетом индивидуальных потребностей и предпочтений клиента",
  },
  {
    icon: "/svg/services/benefits/3.svg",
    title: "Расслабление и восстановление",
    description:
      "Процедуры направлены на снятие стресса, улучшение настроения и восстановление энергии",
  },
  {
    icon: "/svg/services/benefits/4.svg",
    title: "Использование натуральных продуктов",
    description:
      "Применение натуральных компонентов, таких как мед, камни и масла, для улучшения состояния кожи и тела",
  },
];

export const Benefit = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex flex-col gap-8">
        <h2 className="text-4xl font-semibold">Преимущества СПА для женщин</h2>
        <div className="grid w-full grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div key={index} className="border border-[#DFDFDF] rounded-3xl p-6 flex flex-col gap-6">
                <Image
                    src={item.icon}
                    width={100}
                    height={100}
                    alt={`Иконка преимущества ${index}`}
                    className="w-full max-w-10 h-full max-h-10"
                />
                <h4 className="text-2xl font-semibold">
                    {item.title}
                </h4>
                <p className="font-medium">
                    {item.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};