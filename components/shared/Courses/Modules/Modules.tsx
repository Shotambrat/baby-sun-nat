import React from "react";
import { cn } from "@lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";

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
                  Анатомия и физиология позвоночника. <br /> Теоретические аспекты
                  диагностики сколиоза.
                </p>
                <hr className="my-8 border-2" />
                <ul className="grid grid-cols-2 gap-4 mt-6">
                  <li className="flex items-start gap-2">
                    <img src={'/svg/courses/module/check.svg'} alt="Check" className="w-6 h-6" />
                    <span>Введение в методику</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img src={'/svg/courses/module/check.svg'} alt="Check" className="w-6 h-6" />
                    <span>Изучение базовых принципов лечения сколиоза</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img src={'/svg/courses/module/check.svg'} alt="Check" className="w-6 h-6" />
                    <span>Еще какой-то пункт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img src={'/svg/courses/module/check.svg'} alt="Check" className="w-6 h-6" />
                    <span>Еще какой-то пункт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img src={'/svg/courses/module/check.svg'} alt="Check" className="w-6 h-6" />
                    <span>Еще какой-то пункт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img src={'/svg/courses/module/check.svg'} alt="Check" className="w-6 h-6" />
                    <span>Еще какой-то пункт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img src={'/svg/courses/module/check.svg'} alt="Check" className="w-6 h-6" />
                    <span>Еще какой-то пункт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <img src={'/svg/courses/module/check.svg'} alt="Check" className="w-6 h-6" />
                    <span>Еще какой-то пункт</span>
                  </li>
                </ul>
              </div>
              <div className="w-1/3 bg-[#44C3FA] text-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold">4 месяца</h4>
                  <p className="text-lg">длительность курса</p>
                </div>
                <div className="mb-8">
                  <h4 className="text-2xl font-bold">2 000 у.е.</h4>
                  <p className="text-lg">стоимость курса</p>
                </div>
                <button className="w-full bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100">
                  Записаться на курс
                </button>
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
