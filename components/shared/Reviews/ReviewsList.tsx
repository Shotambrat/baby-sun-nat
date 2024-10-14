"use client"
import React, {useState, useEffect} from "react";
import { cn } from "@lib/utils";
import { ReviewItem } from "../About/Reviews/ReviewItem";

interface Props {
  className?: string;
}

const reviews = [
  {
    name: "Иванов Иван",
    date: "06.10.2024",
    avatar: "/images/ivanov.jpg",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eiusmod tempor incidid id urna ut labore et dolore mag et dolor in hendrerit pariatur. Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eius mod tempor incidid id urna ut labore et dolor in he nostrud pariatur.",
  },
  {
    name: "Петров Петр",
    date: "08.12.2024",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eiusmod tempor incidid id urna ut labore et dolore mag et dolor in hendrerit pariatur. Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eius mod tempor incidid id urna ut labore et dolor in he nostrud pariatur.",
  },
  {
    name: "Петров Петр",
    date: "08.12.2024",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eiusmod tempor incidid id urna ut labore et dolore mag et dolor in hendrerit pariatur. Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eius mod tempor incidid id urna ut labore et dolor in he nostrud pariatur.",
  },
  {
    name: "Петров Петр",
    date: "08.12.2024",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eiusmod tempor incidid id urna ut labore et dolore mag et dolor in hendrerit pariatur. Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eius mod tempor incidid id urna ut labore et dolor in he nostrud pariatur.",
  },
  {
    name: "Петров Петр",
    date: "08.12.2024",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eiusmod tempor incidid id urna ut labore et dolore mag et dolor in hendrerit pariatur. Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eius mod tempor incidid id urna ut labore et dolor in he nostrud pariatur.",
  },
  {
    name: "Петров Петр",
    date: "08.12.2024",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eiusmod tempor incidid id urna ut labore et dolore mag et dolor in hendrerit pariatur. Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eius mod tempor incidid id urna ut labore et dolor in he nostrud pariatur.",
  },
  {
    name: "Петров Петр",
    date: "08.12.2024",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eiusmod tempor incidid id urna ut labore et dolore mag et dolor in hendrerit pariatur. Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eius mod tempor incidid id urna ut labore et dolor in he nostrud pariatur.",
  },
  {
    name: "Петров Петр",
    date: "08.12.2024",
    avatar: "/images/petrov.jpg",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eiusmod tempor incidid id urna ut labore et dolore mag et dolor in hendrerit pariatur. Lorem ipsum dolor sit amet, consectetur adip sapien, sed do eius mod tempor incidid id urna ut labore et dolor in he nostrud pariatur.",
  },
];

export const ReviewsList = ({ className }: Props) => {
    // State to track whether reviews are expanded or not
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleReviewsCount, setVisibleReviewsCount] = useState(3); // Default for mobile
  
    // Function to toggle show/hide of reviews
    const toggleReviews = () => {
      setIsExpanded(!isExpanded);
    };
  
    // Adjust the number of reviews based on the screen size
    const adjustVisibleReviews = () => {
      if (window.innerWidth >= 1000) {
        setVisibleReviewsCount(9); // Desktop
      } else if (window.innerWidth >= 650) {
        setVisibleReviewsCount(6); // Tablet
      } else {
        setVisibleReviewsCount(3); // Mobile
      }
    };
  
    // Use effect to adjust visible reviews on window resize
    useEffect(() => {
      adjustVisibleReviews(); // Adjust initially
      window.addEventListener("resize", adjustVisibleReviews); // Adjust on resize
  
      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("resize", adjustVisibleReviews);
      };
    }, []);
  
    return (
      <section className={cn("py-24", className)}>
        <div className="w-full max-w-[1500px] mx-auto px-4 flex flex-col gap-8">
          <h1 className="text-4xl font-semibold">Отзывы пациентов</h1>
          <div className="grid grid-cols-1 mdx:grid-cols-2 lgx:grid-cols-3 gap-4">
            {reviews
              .slice(0, isExpanded ? reviews.length : visibleReviewsCount)
              .map((review, index) => (
                <ReviewItem
                  key={index}
                  name={review.name}
                  date={review.date}
                  avatar={review.avatar}
                  reviewText={review.reviewText}
                  className="shadow-md p-4"
                />
              ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={toggleReviews}
              className="px-6 py-3 bg-blue-500 rounded-full text-white"
            >
              {isExpanded ? "Свернуть" : "Показать все"}
            </button>
          </div>
        </div>
      </section>
    );
  };
