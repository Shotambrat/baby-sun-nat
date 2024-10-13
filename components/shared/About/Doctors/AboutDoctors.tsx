import React from 'react';
import { cn } from '@lib/utils';
import { AboutDoctorsItem } from './AboutDoctorsItem';

interface Props {
  className?: string;
}

const doctors = [
  {
    image: '/images/about/doctors/Doctor.png',
    fullname: 'Муминова Мадина Мумин кизи',
    speciality: ['Хирург', 'Ортопед']
  },
  {
    image: '/images/about/doctors/Doctor.png',
    fullname: 'Муминова Мадина Мумин кизи',
    speciality: ['Хирург', 'Ортопед']
  },
  {
    image: '/images/about/doctors/Doctor.png',
    fullname: 'Муминова Мадина Мумин кизи',
    speciality: ['Хирург', 'Ортопед']
  },
  {
    image: '/images/about/doctors/Doctor.png',
    fullname: 'Муминова Мадина Мумин кизи',
    speciality: ['Хирург', 'Ортопед']
  },
  {
    image: '/images/about/doctors/Doctor.png',
    fullname: 'Муминова Мадина Мумин кизи',
    speciality: ['Хирург', 'Ортопед']
  },
  {
    image: '/images/about/doctors/Doctor.png',
    fullname: 'Муминова Мадина Мумин кизи',
    speciality: ['Хирург', 'Ортопед']
  },
  {
    image: '/images/about/doctors/Doctor.png',
    fullname: 'Муминова Мадина Мумин кизи',
    speciality: ['Хирург', 'Ортопед']
  },
  {
    image: '/images/about/doctors/Doctor.png',
    fullname: 'Муминова Мадина Мумин кизи',
    speciality: ['Хирург', 'Ортопед']
  }
];

export const AboutDoctors = ({ className }: Props) => {
  return (
    <div className={cn("py-24", className)}>
      <div className='space-y-12 w-full max-w-[1500px] px-4 mx-auto'>
        <h2 className='text-5xl max-mdx:text-4xl font-bold'>Наши врачи</h2>
        <div className='grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-4 gap-4'>
          {doctors.map((doctor, index) => (
            <AboutDoctorsItem
              key={index}
              image={doctor.image}
              fullname={doctor.fullname}
              speciality={doctor.speciality}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
