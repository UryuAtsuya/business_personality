import Link from "next/link";
import { Button } from "./ui/Button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800 shadow-[0_8px_24px_rgba(2,6,12,0.5)]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-lime-300 to-emerald-200 flex items-center justify-center text-slate-950 font-black text-xl group-hover:from-lime-200 group-hover:to-emerald-100 transition-colors">
            A
          </div>
          <span className="font-display font-bold text-slate-100 tracking-tight text-lg">
            AIRS <span className="text-slate-500 text-sm font-normal">AIタイプ診断</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm font-bold text-slate-300 hover:text-lime-200 transition-colors"
            >
              診断の狙い
            </Link>
            <Link
              href="/types"
              className="text-sm font-bold text-slate-300 hover:text-lime-200 transition-colors"
            >
              16タイプを見る
            </Link>
            <Link href="/diagnosis">
              <Button
                variant="primary"
                size="sm"
                className="font-bold shadow-none hover:shadow-lg"
              >
                今すぐ診断する
              </Button>
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
