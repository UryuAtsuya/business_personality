'use client';

import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="page-shell min-h-screen font-sans text-slate-50">

      {/* Split Hero Section */}
      <section className="min-h-[90vh] grid md:grid-cols-2">
        {/* Left: Content */}
        <div className="flex flex-col justify-center px-8 md:px-20 py-20 bg-slate-950/70 order-2 md:order-1 relative z-10 border-t border-slate-800 md:border-t-0 md:border-r md:border-slate-800">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/70 border border-lime-200/30 text-xs font-bold text-lime-200 mb-8 w-fit tracking-[0.2em] uppercase"
          >
            <Activity className="w-3 h-3 text-lime-200" />
            System Evaluation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8 text-slate-50"
          >
            AI時代、<br />
            あなたの<br />
            <span className="text-lime-200">実力</span>を証明する。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-lg mb-12 leading-relaxed font-medium"
          >
            忖度のない視点で、ビジネスでのAI活用、
            意思決定のクセ、チーム内での立ち位置を
            16類型で可視化し、現状を明確にする。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Link href="/diagnosis">
              <Button size="lg" className="rounded-lg px-8 py-6 text-lg font-bold">
                評価を可視化する <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <div className="text-sm text-slate-300 font-medium">所要時間: 約2分 / 途中保存不可</div>
          </motion.div>
        </div>

        {/* Right: Visual */}
        <div className="hero-visual relative overflow-hidden order-1 md:order-2 flex items-center justify-center p-8 md:p-12 border-b border-slate-800 md:border-b-0">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-lime-200/10 rounded-full filter blur-[120px]" />
          <div className="absolute -bottom-36 -left-36 w-[520px] h-[520px] bg-sky-400/10 rounded-full filter blur-[140px]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-[520px]"
          >
            <div className="rounded-[20px] border border-slate-700 bg-slate-950/60 backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.4)] p-4 md:p-6">
              <img
                src="/humans.png"
                alt="16タイプのキャラクター一覧"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Grid (Three Columns) */}
      <section className="py-24 border-t border-slate-800 bg-slate-950/70">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-50 mb-6">
                現場で通用する、<br />
                忖度ゼロのフィードバック。
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                単なる「タイプ分け」で終わらせない。作業スタイル、意思決定の弱点、
                チーム内での最適な立ち位置を明示し、
                次の一手の指針を明確にする。
              </p>
            </div>
            <Link href="/types" className="text-lime-200 font-bold hover:underline underline-offset-4 flex items-center">
              全16タイプを見る <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <FeatureDetail
              title="Strength Re-discovery"
              subtitle="強みの再発見"
              desc="無意識にやっている「AIとの付き合い方」が、実は武器だ。あなたの隠れた強みを明らかにする。"
            />
            <FeatureDetail
              title="Risk Management"
              subtitle="リスクの把握"
              desc="「効率優先で品質が死ぬ」「慎重すぎて速度が死ぬ」など、タイプ別の落とし穴を遠慮なく指摘する。"
            />
            <FeatureDetail
              title="Team Optimization"
              subtitle="チームビルディング"
              desc="自分と真逆のタイプを知れ。誰と組めば最大火力が出るか、補完関係を突き止める。"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureDetail({ title, subtitle, desc }: { title: string, subtitle: string, desc: string }) {
  return (
    <Card className="group p-7">
      <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{title}</div>
      <h3 className="font-display text-xl font-bold text-slate-50 mb-4 pb-4 border-b border-slate-800 group-hover:border-lime-200 transition-colors">
        {subtitle}
      </h3>
      <p className="text-slate-300 leading-relaxed">
        {desc}
      </p>
    </Card>
  );
}
