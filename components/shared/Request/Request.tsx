"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Response } from "./Response";
import { useTranslations } from "next-intl";

interface Props {
  className?: string;
  title?: string;
}

export const Request = ({ className, title = "Записаться" }: Props) => {
  const t = useTranslations("")
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState<
    "success" | "error" | null
  >(null);
  const [formData, setFormData] = useState({ name: "", phone: "", edu: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://baby-sun.uz/api/application",
        formData,
        {
          headers: {
            "API-Key": "aFE~&#siAhCs9_Ni]AoC)HMF#y0V)!-kIh0h-3.eR0_W.gA~gk", // Place your actual API Key here
          },
        }
      ); // Замените на свой API путь
      if (response.status === 200) {
        setResponseStatus("success");
        setIsOpen(false);
      } else {
        setResponseStatus("error");
      }
    } catch (err) {
      setResponseStatus("error");
      console.log(err);
    } finally {
      setIsLoading(false); // Остановить лоадер
    }
  };

  return (
    <div>
      {/* Кнопка "Записаться", открывающая модальное окно */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className={cn(
              "rounded-full lgx:px-12 py-3 font-semibold",
              className
            )}
          >
            {title == "Записаться"? t('request') : title}
          </Button>
        </DialogTrigger>

        <DialogContent className="max-mdx:max-w-[360px] msx-w-[430px] px-6 py-6 max-mdx:px-4 bg-white shadow-lg rounded-lg">
          <DialogHeader>
            <DialogTitle className="max-mdx:text-2xl text-3xl font-bold">
              {t("Main.Form.titleModal")}
            </DialogTitle>
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <Input
              name="name"
              placeholder={t("Main.Form.fields.name")}
              className="py-6 px-3 bg-[#F8F8F8] text-black font-semibold text-lg rounded-2xl"
              onChange={handleInputChange}
              value={formData.name}
            />
            <Input
              name="phone"
              placeholder={t("Main.Form.fields.phone")}
              className="py-6 px-3 bg-[#F8F8F8] text-black font-semibold text-lg rounded-md"
              onChange={handleInputChange}
              value={formData.phone}
            />
            <Input
              name="edu"
              placeholder={t("Main.Form.fields.education")}
              className="py-6 px-3 bg-[#F8F8F8] text-black font-semibold text-lg rounded-md"
              onChange={handleInputChange}
              value={formData.edu}
            />
          </div>

          {/* Лоадер и кнопка отправки */}
          <div className="mt-4">
            <Button
              className="rounded-full max-mdx:w-full px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="animate-spin" size={25} />{" "}
                  {/* Иконка с анимацией вращения */}
                  <span>{t("Main.Form.loading")}</span>
                </div>
              ) : `${t("Main.Form.submitButton")}`}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Модальное окно успешного ответа или ошибки */}
      {responseStatus && (
        <Response
          status={responseStatus}
          onClose={() => setResponseStatus(null)}
        />
      )}
    </div>
  );
};
