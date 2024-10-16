"use client";
import { useState, ChangeEvent } from "react";
import React from "react";
import { cn } from "@lib/utils";
import TextField from "@mui/material/TextField";
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import { Button } from "@/components/ui";
import Image from "next/image";

interface Props {
  className?: string;
}

interface FormState {
  fullname: string;
  number: string;
  service: string;
}

export const Application = ({ className }: Props) => {
  const [form, setForm] = useState<FormState>({
    fullname: "",
    number: "",
    service: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: keyof FormState) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>, name: keyof FormState) => {
    setForm((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto relative">
        <div className="w-full lgx:p-12 relative p-6 mdx:p-10 flex max-mdx:flex-col lgx:rounded-[40px] rounded-3xl bg-[#009FE3] text-white gap-6">
          <div className="absolute -bottom-12 -left-2">
            <Image
              src={"/images/application/application-icon.png"}
              width={1000}
              height={1000}
              alt="Application Icon on Background"
              className="max-h-[200px] max-w-[200px] h-full w-full"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h3 className="text-4xl font-semibold leading-12 w-full max-w-[300px]">
              Записаться <br /> на прием
            </h3>
            <p className="w-full max-w-[300px] max-mdx:text-lg">
              Мы предлагаем комфортные условия и современный подход к лечению
            </p>
          </div>
          <div className="flex-1">
            <div className="w-full space-y-8 lgx:max-w-[500px]">
              <TextField
                label="ФИО"
                value={form.fullname}
                onChange={(e) => handleInputChange(e, "fullname")}
                variant="standard"
                fullWidth
                sx={{
                  input: { color: "white" },
                  "& .MuiInput-underline:before": { borderBottomColor: "white" }, // Белая нижняя линия
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "white" }, // Белая линия при наведении
                  "& .MuiInput-underline:after": { borderBottomColor: "gold" }, // Золотая линия при фокусе
                }}
                InputLabelProps={{
                  style: { color: "white" }, // Цвет label
                }}
              />
              <TextField
                label="Номер телефона"
                value={form.number}
                onChange={(e) => handleInputChange(e, "number")}
                variant="standard"
                fullWidth
                sx={{
                  input: { color: "white" },
                  "& .MuiInput-underline:before": { borderBottomColor: "white" }, // Белая нижняя линия
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "white" }, // Белая линия при наведении
                  "& .MuiInput-underline:after": { borderBottomColor: "gold" }, // Золотая линия при фокусе
                }}
                InputLabelProps={{
                  style: { color: "white" }, // Цвет label
                }}
              />
              <FormControl fullWidth variant="standard" sx={{ mb: 3, color: "white" }}>
                <InputLabel sx={{ color: "white" }}>Выберите услугу</InputLabel>
                <Select
                  value={form.service}
                  onChange={(e) => handleSelectChange(e, "service")}
                  sx={{
                    color: "white",
                    "& .MuiSelect-icon": { color: "white" }, // Белая иконка стрелки
                    "& .MuiInput-underline:before": { borderBottomColor: "white" }, // Белая нижняя линия
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": { borderBottomColor: "white" }, // Белая линия при наведении
                    "&:hover:not(.Mui-disabled):before": { borderBottomColor: "white" }, // Белая линия при наведении (без фокуса)
                    "&:before": { borderBottomColor: "white" }, // Белая линия до фокуса
                    "&:after": { borderBottomColor: "gold" }, // Золотая линия при фокусе
                  }}
                >
                  <MenuItem value="consultation">Консультация</MenuItem>
                  <MenuItem value="treatment">Лечение</MenuItem>
                  <MenuItem value="diagnostics">Диагностика</MenuItem>
                </Select>
              </FormControl>
              <Button className="bg-white text-[#009FE3] max-lgx:w-full text-xl font-semibold py-3 hover:bg-white px-16 rounded-full">
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
