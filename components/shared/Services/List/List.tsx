import React from "react";
import { cn } from "@lib/utils";

interface Props {
  className?: string;
}

// const services = [
//     {
//         title: "",
//         description: "",

//     }
// ]

export const List = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h1 className="text-5xl max-mdx:text-3xl font-bold">Хирургия</h1>
        <p className="font-medium text-[#494949] w-full max-w-[1100px]">
        В BabySun проводятся высокотехнологичные хирургические вмешательства с применением новейших методов. Лапароскопические и эндоскопические операции обеспечивают минимальный период восстановления, что особенно важно для детей и подростков
        </p>
        <div>
            
        </div>
      </div>
    </div>
  );
};
