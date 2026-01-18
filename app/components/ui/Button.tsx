'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

type MotionButtonProps = Omit<HTMLMotionProps<"button">, "ref"> & ButtonProps;

const Button = forwardRef<HTMLButtonElement, MotionButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        const variants = {
            primary: 'bg-lime-300 text-slate-950 shadow-[0_18px_40px_rgba(200,241,90,0.2)] hover:bg-lime-200 border border-lime-200/30',
            secondary: 'bg-slate-900/40 text-slate-200 border border-slate-700 hover:border-lime-200/40 hover:text-lime-200',
            ghost: 'bg-transparent text-slate-300 hover:bg-slate-800/70',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-10 py-4 text-lg font-bold',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    'relative overflow-hidden rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-bold',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
