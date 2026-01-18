'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, Question } from '../data/questions';
import { aiTypes } from '../data/types';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Card } from '../components/ui/Card';

// Initial scores for the 4 axes
const initialScores = {
    input: 0,       // Theory (-) vs Intuition (+)
    process: 0,     // Manual (-) vs Auto (+)
    output: 0,      // Structured (-) vs Creative (+)
    interaction: 0, // Human (-) vs AI (+)
};

export default function DiagnosisPage() {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState(initialScores);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = currentQuestionIndex + 1;

    // Guard: If question is missing (e.g. index out of bounds), prevent crash
    if (!currentQuestion && !isAnalyzing) return null;

    const handleAnswer = (weight: number) => {
        // Update score based on question type
        setScores(prev => ({
            ...prev,
            [currentQuestion.type]: prev[currentQuestion.type as keyof typeof initialScores] + weight
        }));

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            finishDiagnosis();
        }
    };

    const finishDiagnosis = () => {
        setIsAnalyzing(true);

        // Determine the result type based on final scores
        // Logic: If score > 0 then Option B trait, else Option A trait
        // Note: This simple logic assumes odd number of questions per axis or non-zero sum for strict binary.
        // If 0, we default to one side (e.g., Theory).

        const resultProfile = {
            input: scores.input > 0 ? 'Intuition' : 'Theory',
            process: scores.process > 0 ? 'Auto' : 'Manual',
            output: scores.output > 0 ? 'Creative' : 'Structured',
            interaction: scores.interaction > 0 ? 'AI' : 'Human',
        };

        // Find the matching AI Type
        const matchedType = aiTypes.find(type =>
            type.axis.input === resultProfile.input &&
            type.axis.process === resultProfile.process &&
            type.axis.output === resultProfile.output &&
            type.axis.interaction === resultProfile.interaction
        );

        // If no perfect match (should cover all 16 combos ideally, but we only have 16 types defined),
        // Fallback to the closest match or a default. 
        // Since I defined 16 types in types.ts that *should* cover the matrix, let's assume match.
        // If undefined, fallback to the first defined type.
        const resultId = matchedType ? matchedType.id : 'rhms';

        // Simulate analysis delay then redirect
        setTimeout(() => {
            router.push(`/result/${resultId}`);
        }, 2000);
    };

    if (isAnalyzing) {
        return (
            <div className="page-shell min-h-screen flex flex-col items-center justify-center p-4">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-24 h-24 border-4 border-lime-200 border-t-transparent rounded-full mb-8"
                />
                <h2 className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-emerald-200 animate-pulse">
                    解析中。まもなく結果を表示します。
                </h2>
                <p className="text-slate-500 mt-4">プロファイルを算出中...</p>
            </div>
        );
    }

    return (
        <div className="page-shell min-h-screen">
            <div className="container mx-auto px-4 max-w-2xl py-20">
            <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-500 mb-2">
                    <span>Q{progress}</span>
                    <span>全{questions.length}問</span>
                </div>
                <ProgressBar current={progress} total={questions.length} />
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl"
                >
                    <Card className="p-8">
                        <h2 className="font-display text-2xl font-bold text-slate-100 mb-8 leading-relaxed">
                            {currentQuestion.text}
                        </h2>

                        <div className="space-y-4">
                            <button
                                onClick={() => handleAnswer(-1)}
                                className="w-full p-6 text-left rounded-xl border border-slate-800 hover:border-lime-200/60 hover:bg-slate-900/70 transition-all group"
                            >
                                <span className="font-semibold text-slate-200 group-hover:text-lime-200">
                                    {currentQuestion.options[0]}
                                </span>
                            </button>

                            <button
                                onClick={() => handleAnswer(1)}
                                className="w-full p-6 text-left rounded-xl border border-slate-800 hover:border-sky-200/60 hover:bg-slate-900/70 transition-all group"
                            >
                                <span className="font-semibold text-slate-200 group-hover:text-sky-200">
                                    {currentQuestion.options[1]}
                                </span>
                            </button>
                        </div>
                    </Card>
                </motion.div>
            </AnimatePresence>
            </div>
        </div>
    );
}
