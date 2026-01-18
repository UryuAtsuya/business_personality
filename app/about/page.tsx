import { Activity, Compass, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Card } from "../components/ui/Card";

const axes = [
  {
    title: "Input",
    subtitle: "Theory vs Intuition",
    description: "情報の受け取り方。理屈で固めるか、勘で掴むか。",
    icon: ShieldCheck,
  },
  {
    title: "Process",
    subtitle: "Manual vs Auto",
    description: "進め方の好み。自分で精度を上げるか、仕組みで回すか。",
    icon: Activity,
  },
  {
    title: "Output",
    subtitle: "Structured vs Creative",
    description: "成果物の方向性。堅実にまとめるか、飛躍で伸ばすか。",
    icon: Sparkles,
  },
  {
    title: "Interaction",
    subtitle: "Human vs AI",
    description: "関係性の重心。人を軸にするか、AIを軸にするか。",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell min-h-screen text-slate-100 border-t border-slate-800">
      <section className="container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 mb-6 w-fit tracking-wider uppercase">
            <Compass className="w-3 h-3 text-blue-400" />
            About
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-50 to-blue-200 drop-shadow-sm">
            AI時代の仕事スタイルを、<br />
            4軸で可視化する診断です。
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            この診断は「性格」じゃない。「働き方のクセ」を測る。
            AIとの向き合い方、チーム内の役割、意思決定の癖を
            4つの軸で整理し、16タイプに分類する。
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {axes.map(({ title, subtitle, description, icon: Icon }) => (
            <Card key={title} tone="light" className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-sky-400 text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {title}
                  </div>
                  <div className="font-display text-lg font-bold text-slate-800">
                    {subtitle}
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
