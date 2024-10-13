"use client"
import React, { useState } from 'react';
import { cn } from '@lib/utils';
import { Button } from '@/components/ui';
import { ReviewItem } from './ReviewItem';

interface ReviewsFilterProps {
  className?: string;
}

const categories = [
  { title: 'Все отзывы', slug: 'all' },
  { title: 'Курс массажа', slug: 'rubdown' },
  { title: 'Курс по косметологии', slug: 'cosmetology' },
  { title: 'Другой', slug: 'other' },
];

const reviews = [
  {
    category: 'all',
    name: 'Иванов Иван',
    date: '06.10.2024',
    avatar: '/images/ivanov.jpg',
    reviewText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',
  },
  {
    category: 'rubdown',
    name: 'Петров Петр',
    date: '08.12.2024',
    avatar: '/images/petrov.jpg',
    reviewText: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',
  },
  // Добавьте больше отзывов
];

export const ReviewsFilter = ({ className }: ReviewsFilterProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllReviews, setShowAllReviews] = useState(false);

  const filteredReviews = reviews.filter(
    (review) => activeCategory === 'all' || review.category === activeCategory
  );

  const toggleShowAll = () => setShowAllReviews(!showAllReviews);

  return (
    <div className={cn("py-24", className)}>
      <div className="w-full max-w-[1500px] px-4 mx-auto space-y-8">
        <h2 className="text-5xl max-mdx:text-3xl font-bold w-full max-w-[500px]">Отзывы прошедших наше обучение</h2>
        <div className="w-full space-y-4">
          <div className="w-full flex gap-2 overflow-x-scroll no-scrollbar">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category.slug ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.title}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredReviews.slice(0, showAllReviews ? filteredReviews.length : 4).map((review, index) => (
              <ReviewItem
                key={index}
                name={review.name}
                date={review.date}
                avatar={review.avatar}
                reviewText={review.reviewText}
                className="bg-white shadow-md p-4"
              />
            ))}
          </div>
          <div className="w-full text-center">
            <Button onClick={toggleShowAll} className="mt-4">
              {showAllReviews ? 'Скрыть' : 'Смотреть все'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
