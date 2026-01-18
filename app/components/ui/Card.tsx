'use client';

import { cn } from '@/lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    tone?: 'dark' | 'light';
};

export function Card({ className, tone = 'dark', ...props }: CardProps) {
    const tones = {
        dark: 'rounded-xl border border-slate-800 bg-slate-950/40 shadow-[0_16px_40px_rgba(3,5,9,0.5)] backdrop-blur-sm',
        light: 'rounded-xl border border-slate-200/70 bg-slate-50/85 shadow-[0_16px_40px_rgba(15,23,42,0.18)] backdrop-blur-sm',
    };

    return (
        <div
            className={cn(
                tones[tone],
                className
            )}
            {...props}
        />
    );
}
