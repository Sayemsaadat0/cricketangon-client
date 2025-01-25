"use client";
import { useGetArticles } from "@/app/(admin)/admin/article/_hook/article.hook";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TArticleImageSliderProps {
  autoPlayInterval?: number;
  className?: string;
}

const ArticleImageSlider = ({
  autoPlayInterval = 3000,
  className = "",
}: TArticleImageSliderProps) => {
  const { data } = useGetArticles();
  const articles = data?.data?.data?.slice(0, 5) || [];
  const images = articles.map((article: any) =>
    article.image
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${article.image}`
      : "https://placehold.co/100x100/e2e2db/red/png"
  ); // Extract and process images

  console.log(images);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={cn(`relative overflow-hidden rounded-lg `, className)}>
      <div className={cn("aspect-w-2 aspect-h-1 h-full", className)}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]} // Use the processed image URL
            alt={`Slide ${currentIndex + 1}`}
            className={cn("w-full h-full object-cover", className)}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_ : any, index : any) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleImageSlider;
