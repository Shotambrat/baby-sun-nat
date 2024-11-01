import React from "react";
import { cn } from "@lib/utils";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { Request } from "../../Request/Request";

interface Props {
  className?: string;
}

export const Modules = ({ className }: Props) => {
  return (
    <div className={cn("py-12", className)}>
      <div className="w-full max-w-[1500px] mx-auto px-4 flex flex-col gap-8">
        <h2 className="text-4xl font-semibold">Программа курса</h2>
        <div className="w-full">
          <Tabs defaultValue="module1" className="w-full space-y-8">
            <TabsList className="w-full flex justify-between p-2 border-b border-gray-300">
              <TabsTrigger
                className="flex-1 h-full px-4 py-4 text-lg font-semibold data-[state=active]:bg-[#009FE3] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-black"
                value="module1"
              >
                Модуль 1
              </TabsTrigger>
              <TabsTrigger
                className="flex-1 h-full px-4 py-4 text-lg font-semibold data-[state=active]:bg-[#009FE3] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-black"
                value="module2"
              >
                Модуль 2
              </TabsTrigger>
              <TabsTrigger
                className="flex-1 h-full px-4 py-4 text-lg font-semibold data-[state=active]:bg-[#009FE3] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-black"
                value="module3"
              >
                Модуль 3
              </TabsTrigger>
              <TabsTrigger
                className="flex-1 h-full px-4 py-4 text-lg font-semibold data-[state=active]:bg-[#009FE3] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-black"
                value="module4"
              >
                Модуль 4
              </TabsTrigger>
            </TabsList>

            {/* Content for Module 1 */}
            <TabsContent className="flex gap-4" value="module1">
              <div className="border border-[#DFDFDF] w-2/3 p-8 rounded-lg">
                <p className="text-[#009FE3] font-semibold">Модуль 1</p>
                <h3 className="text-3xl font-bold mt-4">Основы ШРОТ-терапии</h3>
                <p className="mt-2 font-medium">
                Введение в основы ШРОТ-терапии, анатомию и физиологию позвоночника, базовые принципы диагностики сколиоза.
                </p>
                <hr className="my-8 border-2" />
                <ul className="grid grid-cols-2 gap-4 mt-6">
                  <li className="flex items-start gap-2">
                    <img
                      src={"/svg/courses/module/check.svg"}
                      alt="Check"
                      className="w-6 h-6"
                    />
                    <span>Введение в методику</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img
                      src={"/svg/courses/module/check.svg"}
                      alt="Check"
                      className="w-6 h-6"
                    />
                    <span>Изучение базовых принципов лечения сколиоза</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img
                      src={"/svg/courses/module/check.svg"}
                      alt="Check"
                      className="w-6 h-6"
                    />
                    <span>Особенности анатомии и физиологии позвоночника</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img
                      src={"/svg/courses/module/check.svg"}
                      alt="Check"
                      className="w-6 h-6"
                    />
                    <span>Основы диагностики и анализ искривлений позвоночника</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img
                      src={"/svg/courses/module/check.svg"}
                      alt="Check"
                      className="w-6 h-6"
                    />
                    <span>Подготовка пациента к началу курса</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img
                      src={"/svg/courses/module/check.svg"}
                      alt="Check"
                      className="w-6 h-6"
                    />
                    <span>Обучение первой группе упражнений на дыхание</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img
                      src={"/svg/courses/module/check.svg"}
                      alt="Check"
                      className="w-6 h-6"
                    />
                    <span>Обзор методик коррекции осанки</span>
                  </li>
                </ul>
              </div>
              <div className="w-1/3 relative overflow-hidden bg-[#009FE3] text-white p-8 flex flex-col gap-8 rounded-lg shadow-lg">
                <div>
                  <h4 className="text-4xl font-medium">4 месяца</h4>
                  <p className="text-lg">длительность курса</p>
                </div>
                <hr />
                <div>
                  <h4 className="text-4xl font-medium">2 000 у.е.</h4>
                  <p className="text-lg">стоимость курса</p>
                </div>
                <Request title="Заприсаться на курс" className="self-start bg-white text-[#009FE3] font-semibold py-3 px-6 rounded-full hover:bg-gray-100" />
                <div className="absolute -bottom-12 -right-2">
                  <Image
                    src={"/images/application/Mask group.svg"}
                    width={1000}
                    height={1000}
                    alt="Application Icon on Background"
                    className="max-h-[200px] max-w-[200px] h-full w-full"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Content for other modules */}
            <TabsContent value="module2">
              <p>Контент для модуля 2</p>
            </TabsContent>
            <TabsContent value="module3">
              <p>Контент для модуля 3</p>
            </TabsContent>
            <TabsContent value="module4">
              <p>Контент для модуля 4</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
