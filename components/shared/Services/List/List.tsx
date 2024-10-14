import React from "react";
import { cn } from "@lib/utils";

interface Props {
  className?: string;
}

const services = [
    {
        title: "Лапароскопическая хирургия",
        description: "Минимально инвазивные операции для лечения заболеваний органов брюшной полости и малого таза",
        price: "850 000 сум",
    },
    {
        title: "Лапароскопическая хирургия",
        description: "Минимально инвазивные операции для лечения заболеваний органов брюшной полости и малого таза",
        price: "Индивидуальная цена",
    },
    {
        title: "Лапароскопическая хирургия",
        description: "Минимально инвазивные операции для лечения заболеваний органов брюшной полости и малого таза",
        price: "850 000 сум",
    },
    {
        title: "Лапароскопическая хирургия",
        description: "Минимально инвазивные операции для лечения заболеваний органов брюшной полости и малого таза",
        price: "850 000 сум",
    },
    {
        title: "Лапароскопическая хирургия",
        description: "Минимально инвазивные операции для лечения заболеваний органов брюшной полости и малого таза",
        price: "850 000 сум",
    },
    {
        title: "Лапароскопическая хирургия",
        description: "Минимально инвазивные операции для лечения заболеваний органов брюшной полости и малого таза",
        price: "850 000 сум",
    },
    {
        title: "Лапароскопическая хирургия",
        description: "Минимально инвазивные операции для лечения заболеваний органов брюшной полости и малого таза",
        price: "850 000 сум",
    },
    {
        title: "Лапароскопическая хирургия",
        description: "Минимально инвазивные операции для лечения заболеваний органов брюшной полости и малого таза",
        price: "850 000 сум",
    },
    {
        title: "Лапароскопическая хирургия",
        description: "Минимально инвазивные операции для лечения заболеваний органов брюшной полости и малого таза",
        price: "850 000 сум",
    },
    
]

export const List = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h1 className="text-5xl max-mdx:text-3xl font-bold">Хирургия</h1>
        <p className="font-medium text-[#494949] w-full max-w-[1100px]">
        В BabySun проводятся высокотехнологичные хирургические вмешательства с применением новейших методов. Лапароскопические и эндоскопические операции обеспечивают минимальный период восстановления, что особенно важно для детей и подростков
        </p>
        <div className="grid w-full grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3 gap-4">
            {
              services.map((item, index) => (
                <div key={index} className="p-6 flex flex-col gap-8 justify-between rounded-2xl bg-[#F1F4F8]">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-[#90A0B5]">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-xl text-[#009FE3] font-semibold">
                    {item.price}
                  </p>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
};
