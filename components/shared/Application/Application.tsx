import React, { useState } from 'react';
import { cn } from '@lib/utils';
import InputMask from 'react-input-mask';
import { motion } from 'framer-motion';

// Custom hook for form validation
const useFormValidation = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const validate = (name: string, value: string) => {
    let error = '';
    if (!value.trim()) {
      error = 'This field is required';
    } else if (name === 'phone' && !/^\+998\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/.test(value)) {
      error = 'Invalid phone number format';
    }
    setErrors({ ...errors, [name]: error });
  };

  return { errors, validate };
};

interface Props {
  className?: string;
}

export const Application = ({ className }: Props) => {
  const { errors, validate } = useFormValidation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
    console.log(formData);
  };

  return (
    <div className={cn("py-24", className)}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className='w-full max-w-[1500px] px-4 mx-auto rounded-3xl bg-[#009FE3] p-10 text-white'
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Записаться на прием</h2>
            <p className="text-lg mb-6">Мы предлагаем комфортные условия и современный подход к лечению</p>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">ФИО</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg focus:ring-4 focus:outline-none ${errors.name ? 'ring-red-500' : 'ring-blue-500'}`}
                placeholder="Введите ФИО"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2">Номер телефона</label>
              <InputMask
                mask="+998 (99) 999-99-99"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg focus:ring-4 focus:outline-none ${errors.phone ? 'ring-red-500' : 'ring-blue-500'}`}
                placeholder="+998 (__) ___-__-__"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="service" className="block mb-2">Выберите услугу</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg focus:ring-4 focus:outline-none"
              >
                <option value="">Выберите услугу</option>
                <option value="consultation">Консультация</option>
                <option value="diagnosis">Диагностика</option>
                <option value="treatment">Лечение</option>
              </select>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-[#009FE3] font-bold py-3 rounded-lg hover:bg-gray-100"
            >
              Отправить
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};
