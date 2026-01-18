'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
    current: number;
    total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
    const progress = (current / total) * 100;

    return (
        <div className="w-full bg-slate-900/70 rounded-full h-2.5 mb-6 overflow-hidden border border-slate-800">
            <motion.div
                className="bg-gradient-to-r from-lime-200 to-emerald-200 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
        </div>
    );
}
