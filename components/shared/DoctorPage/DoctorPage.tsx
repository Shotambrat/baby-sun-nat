import React from "react";
import { cn } from "@lib/utils";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Request } from "../Request/Request";

interface Props {
  className?: string;
}

const doctors = [
  {
    slug: "muminova-madina-muminqizi",
    data: {
        fullname: "Муминова Мадина Мумин кизи",
        info: '[Имя врача] — ведущий специалист в области [область медицины], имеет многолетний опыт работы с детьми. Он/она специализируется на [перечень специализаций] и постоянно повышает квалификацию на международных медицинских конференциях и симпозиумах. Под его/её руководством клиника BabySun стала одной из лучших в регионе. Его/её основной целью является обеспечение качественного медицинского обслуживания, направленного на восстановление здоровья и поддержание комфорта маленьких пациентов',
        graphic: ["8:00 - 17:00 пн-пт", "8:00 - 15:00 сб"],
      speciality: ["Хирург", "Ортопед"],
    },
  },
];

export const DoctorPage = ({ className }: Props) => {
  return (
    <section className={cn("pb-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto flex flex-col gap-8 pt-8">
        <div>
          <Link
            href={"/"}
            className="flex items-center gap-2 text-[#009FE3] text-xl font-semibold hover:gap-4 transition-all duration-150"
          >
            <Image
              src={"/svg/doctorPage/left-arrow.svg"}
              width={100}
              height={100}
              alt="Back icon"
              className="w-2"
            />
            Назад
          </Link>
        </div>
        <div className="flex max-mdx:flex-col gap-8">
          <div className="">
            <Image
              src={"/images/about/doctors/doctor.png"}
              width={1000}
              height={1000}
              quality={100}
              alt="Doctors photo"
              className="h-auto w-full mdx:w-[400px] rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <div className="text-lg font-semibold text-[#009FE3]">
                {doctors[0].data.speciality.map((spec, index) => (
                  <span key={index}>
                    {spec}
                    {index < doctors[0].data.speciality.length - 1
                      ? " | "
                      : ""}{" "}
                    {/* Разделитель " | " */}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold mdx:text-4xl">
                    {doctors[0].data.fullname}
                </h1>
                <p className="w-full max-w-[500px]">
                    {doctors[0].data.info}
                </p>
                <hr />
                <div>
                    <p className="text-[#009FE3] font-semibold">График работы</p>
                    <ul>
                        {
                            doctors[0].data.graphic.map((item, index) => (
                                <li className="font-bold text-lg" key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div>
              <Request title="Записаться на прием" className="max-mdx:w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
