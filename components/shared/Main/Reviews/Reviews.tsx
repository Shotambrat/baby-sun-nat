import React from "react";
import { cn } from "@lib/utils";
import { Button } from "@/components/ui";
import { Link } from "@/i18n/routing";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui"; // Assuming you are using Carousel from shadcn

interface Props {
    className?: string;
}

const reviews = [
  {
    nickname: "maria_nosachevaa",
    date: "16.11.2021",
    review:
      "Наконец-то нашли !!! Именно так хочется начать писать о ШРОТ методе и о Александре, очень грамотном терапевте...",
    link: "https://www.instagram.com/scolios_clinic_krd?igsh=M2ZuMjF3bXZ0M2pu",
    social: "instagram",
  },
  {
    nickname: "senshinanatali",
    date: "16.11.2021",
    review:
      "Спасибо Александр за ваши тренировки, индивидуальную программу, эмоциональную поддержку...",
    link: "https://www.instagram.com/scolios_clinic_krd?igsh=M2ZuMjF3bXZ0M2pu",
    social: "instagram",
  },
  {
    nickname: "_zhukova_e",
    date: "16.11.2021",
    review:
      "Позанимались 10 занятий , не жалеем потраченного времени и денежных средств...",
    link: "https://www.instagram.com/scolios_clinic_krd?igsh=M2ZuMjF3bXZ0M2pu",
    social: "instagram",
  },
  {
    nickname: "_kidakoeva_",
    date: "19.11.2021",
    review:
      "Спасибо большое, Александр, за проделанную работу. Не зря мне Вас порекомендовали...",
    link: "https://www.instagram.com/scolios_clinic_krd?igsh=M2ZuMjF3bXZ0M2pu",
    social: "instagram",
  },
  {
    nickname: "helenbelsev14",
    date: "16.11.2021",
    review: "Хороший специалист вкладывает душу и хочет помочь👏",
    link: "https://www.instagram.com/scolios_clinic_krd?igsh=M2ZuMjF3bXZ0M2pu",
    social: "instagram",
  },
  {
    nickname: "voycenko_aigul",
    date: "20.11.2021",
    review:
      "Александр, мы благодарим вас за вашу работу, отзывчивость и внимание...",
    link: "https://www.instagram.com/scolios_clinic_krd?igsh=M2ZuMjF3bXZ0M2pu",
    social: "instagram",
  },
  {
    nickname: "jykova2021",
    date: "17.11.2021",
    review:
      "Спасибо за проделанную работу, Александр знает толк в своём деле, результат виден через 10 занятий...",
    link: "https://www.instagram.com/scolios_clinic_krd?igsh=M2ZuMjF3bXZ0M2pu",
    social: "instagram",
  },
  {
    nickname: "chebotarevajuliya",
    date: "29.11.2021",
    review:
      "Хочу выразить благодарность Александру за то, что он принес эту чудесную методику в Краснодар...",
    link: "https://www.instagram.com/scolios_clinic_krd?igsh=M2ZuMjF3bXZ0M2pu",
    social: "instagram",
  },
  {
    nickname: "zalinatimova",
    date: "25.11.2021",
    review:
      "Здравствуйте, я мама Марииты, которая прошла долгий путь...",
    link: "https://www.instagram.com/scolios_clinic_krd?igsh=M2ZuMjF3bXZ0M2pu",
    social: "instagram",
  },
];

export const Reviews = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h2 className="text-4xl font-bold">Отзывы пациентов</h2>
        
        <Carousel className="space-y-12">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-1 mdx:basis-1/2 lgx:basis-1/3">
                <div className="bg-[#F8FBFF] mx-2 p-8 h-[400px] rounded-2xl flex flex-col justify-between">
                  <div className="space-y-8">
                    <div>
                      <h6 className="text-2xl font-semibold">{review.nickname}</h6>
                      <p className="text-neutral-300 text-lg">{review.date}</p>
                    </div>
                    <p className="text-xl font-medium line-clamp-6">
                      {review.review}
                    </p>
                  </div>
                  <Link
                    className="text-lg font-medium text-[#009FE3]"
                    href={review.link}
                  >
                    {review.social}
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="w-full flex justify-center items-center">
          <Link href={'/reviews'}>
            <Button className="rounded-full text-xl py-4 px-12">Все отзывы</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
