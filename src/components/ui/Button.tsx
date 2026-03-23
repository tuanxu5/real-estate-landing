'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  loading?: boolean;
  icon?: boolean;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md',
  children, 
  disabled = false,
  loading = false,
  icon = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-exo font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-accent-gold to-accent-gold-light text-white hover:shadow-xl hover:shadow-accent-gold/30 hover:-translate-y-0.5 focus:ring-accent-gold',
    secondary: 'bg-primary text-white hover:bg-primary-light hover:shadow-xl hover:-translate-y-0.5 focus:ring-primary',
    outline: 'bg-transparent border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white hover:shadow-lg focus:ring-accent-gold',
    ghost: 'bg-transparent text-accent-gold hover:bg-accent-gold/10 hover:shadow-md focus:ring-accent-gold'
  };

  return (
    <motion.button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || loading}
      whileHover={disabled || loading ? {} : { scale: 1.02 }}
      whileTap={disabled || loading ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Đang xử lý...</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          {icon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
        </>
      )}
    </motion.button>
  );
}
