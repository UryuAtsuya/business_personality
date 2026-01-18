import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { aiTypes } from "../data/types";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

export default function TypesPage() {
  return (
    <div className="page-shell min-h-screen text-slate-100 border-t border-slate-800">
      <section className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/70 border border-lime-200/30 text-xs font-bold text-lime-200 mb-6 w-fit tracking-[0.2em] uppercase">
            <Layers className="w-3 h-3 text-lime-200" />
            16 Profiles
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
            16タイプ一覧
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            4つの軸の組み合わせから導かれる16タイプ。
            キャッチコピーと勝ち筋を見比べて、自分の立ち位置を確認しよう。
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 pb-16 md:pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTypes.map((type) => (
            <Card key={type.id} className="p-6 flex flex-col">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-900/60 border border-slate-700 flex items-center justify-center">
                  {type.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={type.image}
                      alt={type.youtrustName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-lg font-black text-slate-500">
                      {type.youtrustName.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-500">
                    {type.name}
                  </div>
                  <div className="font-display text-xl font-black text-slate-100">
                    {type.youtrustName}
                  </div>
                  <div className="text-slate-500 text-sm mt-1">{type.catchCopy}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                  {[type.code, `代替リスク: ${type.replacementRisk}`].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-slate-900/70 text-lime-200 text-xs font-bold uppercase border border-lime-200/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 text-sm text-slate-400 leading-relaxed line-clamp-3">
                {type.survivalStrategy}
              </div>

              <div className="mt-4 text-xs text-slate-500 leading-relaxed">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] block mb-2">
                  稼ぎどころ
                </span>
                {type.recommendedCareer}
              </div>

              <div className="mt-6">
                <Link href={`/result/${type.id}`}>
                  <Button variant="secondary" size="sm" className="w-full rounded-lg">
                    詳細を見る <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
