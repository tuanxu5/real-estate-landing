'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import Image from 'next/image';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  icon?: ReactNode;
  title: string;
  description: string;
  image?: string;
  hover?: boolean;
}

export default function Card({
  icon,
  title,
  description,
  image,
  hover = true,
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-2xl shadow-lg bg-white p-6 transition-all duration-300';

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      whileHover={hover ? { scale: 1.05 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {icon && (
        <div className="mb-4 text-4xl">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
        {title}
      </h3>
      
      <p className="text-neutral-gray-800 font-inter">
        {description}
      </p>
    </motion.div>
  );
}
