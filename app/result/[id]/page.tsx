'use client';

import { use } from 'react';
import { aiTypes } from '../../data/types';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import Link from 'next/link';
import { Share2, RefreshCw, Layers, Shield, Zap, Target, Users } from 'lucide-react';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default function ResultPage(props: Props) {
    const params = use(props.params);
    const type = aiTypes.find(t => t.id === params.id);

    if (!type) {
        notFound();
    }

    // Color mappings
    const colorSchemes = {
        blue: {
            bg: 'bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-500',
            badge: 'bg-white/20 border-white/40 text-white',
            text: 'text-blue-600',
            border: 'border-blue-100',
            lightBg: 'bg-blue-50',
            bgButton: 'bg-blue-600',
            bgButtonHover: 'hover:bg-blue-500',
            icon: 'text-blue-500',
        },
        green: {
            bg: 'bg-gradient-to-br from-emerald-600 via-teal-500 to-green-500',
            badge: 'bg-white/20 border-white/40 text-white',
            text: 'text-emerald-600',
            border: 'border-emerald-100',
            lightBg: 'bg-emerald-50',
            bgButton: 'bg-emerald-600',
            bgButtonHover: 'hover:bg-emerald-500',
            icon: 'text-emerald-500',
        },
        orange: {
            bg: 'bg-gradient-to-br from-orange-600 via-amber-500 to-yellow-500',
            badge: 'bg-white/20 border-white/40 text-white',
            text: 'text-orange-600',
            border: 'border-orange-100',
            lightBg: 'bg-orange-50',
            bgButton: 'bg-orange-600',
            bgButtonHover: 'hover:bg-orange-500',
            icon: 'text-orange-500',
        },
        purple: {
            bg: 'bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500',
            badge: 'bg-white/20 border-white/40 text-white',
            text: 'text-violet-600',
            border: 'border-violet-100',
            lightBg: 'bg-violet-50',
            bgButton: 'bg-violet-600',
            bgButtonHover: 'hover:bg-violet-500',
            icon: 'text-violet-500',
        }
    };

    const scheme = colorSchemes[type.color || 'blue']; // Default to blue if undefined
    const axisCopy = {
        input: {
            Theory: {
                title: '理論で固めて動く',
                body: '裏取りと因果を先に固める。根拠がないなら保留する。',
                summary: '理論と根拠で先に固めて進める。'
            },
            Intuition: {
                title: '勘で掴んで磨く',
                body: '兆しを拾って即試す。走りながら精度を上げる。',
                summary: '直感で掴み、実験で磨く。'
            }
        },
        process: {
            Manual: {
                title: '手で仕上げ切る',
                body: '自分の目と手で詰め切る。品質に妥協しない。',
                summary: '手で仕上げて品質を担保する。'
            },
            Auto: {
                title: '仕組みで回し切る',
                body: '再現性と速度に振る。人の介入は最小限。',
                summary: '自動化で速度と再現性を取る。'
            }
        },
        output: {
            Structured: {
                title: '構造で勝つ',
                body: '整理と標準化で外さない成果を出す。',
                summary: '構造化で安定を取り切る。'
            },
            Creative: {
                title: '発想で突破する',
                body: '常識を崩して突破口を作る。',
                summary: '発想で停滞を割る。'
            }
        },
        interaction: {
            Human: {
                title: '人を動かして進める',
                body: '対話と合意で前に出る。周囲を巻き込んで動かす。',
                summary: '人を巻き込み推進する。'
            },
            AI: {
                title: 'AIで加速して進める',
                body: 'AIを積極的に使い、速度と精度を引き上げる。',
                summary: 'AI協働で速度と精度を上げる。'
            }
        }
    };

    const deeperSummary = [
        axisCopy.input[type.axis.input].summary,
        axisCopy.process[type.axis.process].summary,
        axisCopy.output[type.axis.output].summary,
        axisCopy.interaction[type.axis.interaction].summary,
    ].join(' ');

    const axisInsights = [
        {
            label: '情報の掴み方',
            axis: 'Input',
            ...axisCopy.input[type.axis.input],
        },
        {
            label: '進め方',
            axis: 'Process',
            ...axisCopy.process[type.axis.process],
        },
        {
            label: 'アウトプット',
            axis: 'Output',
            ...axisCopy.output[type.axis.output],
        },
        {
            label: '協働の重心',
            axis: 'Interaction',
            ...axisCopy.interaction[type.axis.interaction],
        },
    ];
    const careerItems = type.recommendedCareer
        .split('・')
        .map(item => item.trim())
        .filter(Boolean);
    const similarityRanked = aiTypes
        .filter(t => t.id !== type.id)
        .map(t => ({
            type: t,
            score:
                (t.axis.input === type.axis.input ? 1 : 0) +
                (t.axis.process === type.axis.process ? 1 : 0) +
                (t.axis.output === type.axis.output ? 1 : 0) +
                (t.axis.interaction === type.axis.interaction ? 1 : 0),
        }))
        .sort((a, b) => b.score - a.score);
    const complementaryRanked = aiTypes
        .filter(t => t.id !== type.id)
        .map(t => {
            const sameCore =
                (t.axis.input === type.axis.input ? 1 : 0) +
                (t.axis.output === type.axis.output ? 1 : 0);
            const diffExec =
                (t.axis.process !== type.axis.process ? 1 : 0) +
                (t.axis.interaction !== type.axis.interaction ? 1 : 0);
            return { type: t, score: sameCore * 2 + diffExec, sameCore, diffExec };
        })
        .filter(item => item.sameCore >= 1 && item.diffExec >= 1)
        .sort((a, b) => b.score - a.score);
    const topSimilar = similarityRanked.slice(0, 2);
    const topComplementary = complementaryRanked.slice(0, 2);
    const actionHints = [
        {
            title: 'キャッチコピー',
            body: type.catchCopy,
        },
        {
            title: '勝ち筋',
            body: type.survivalStrategy,
        },
        {
            title: '稼ぎどころ',
            body: type.recommendedCareer,
        },
    ];

    return (
        <div className="page-shell min-h-screen font-sans text-slate-100 border-t border-slate-800/70">

            {/* Top Bar for Mobile / Breadcrumb */}
            <div className="bg-slate-900/55 border-b border-slate-800/70 px-6 py-4 flex items-center justify-between sticky top-16 z-40 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
                    <span>/</span>
                    <span className={scheme.text}>診断結果</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Sidebar (Profile) - Col Span 4 */}
                    <div className="lg:col-span-4 space-y-6">
                        <Card className="overflow-hidden sticky top-32">
                            <div className={`${scheme.bg} p-8 text-center text-white relative`}>
                                <div className={`inline-block px-3 py-1 rounded-full ${scheme.badge} border text-xs font-bold uppercase tracking-wider mb-4`}>
                                    確定タイプ
                                </div>
                                <h1 className="font-display text-3xl font-black mb-2 leading-tight">{type.youtrustName}</h1>
                                <div className="text-white/80 text-sm font-medium mb-6">{type.name}</div>
                                <div className="w-48 h-48 mx-auto bg-white/90 rounded-full flex items-center justify-center shadow-2xl shadow-black/20 mb-6 overflow-hidden border-4 border-white/80">
                                    {type.image ? (
                                        <img src={type.image} alt={type.youtrustName} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="text-4xl font-bold text-slate-300">
                                            {type.youtrustName.charAt(0)}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 justify-center mb-6">
                                    {[type.code, `代替リスク: ${type.replacementRisk}`].map(tag => (
                                        <span key={tag} className={`px-3 py-1 rounded-full ${scheme.lightBg} ${scheme.text} text-xs font-bold uppercase`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    <Button className={`w-full rounded-2xl font-bold text-sm py-5 ${scheme.bgButton} text-white ${scheme.bgButtonHover}`}>
                                        <Share2 className="w-4 h-4 mr-2" /> 結果を共有する
                                    </Button>
                                    <Link href="/diagnosis" className="block">
                                        <Button variant="secondary" className="w-full rounded-2xl font-bold text-sm py-5">
                                            <RefreshCw className="w-4 h-4 mr-2" /> もう一度診断する
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Main Content - Col Span 8 */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Executive Summary */}
                        <Card tone="light" className="p-8 md:p-10 bg-slate-900/35 border-slate-700/60 text-slate-100 shadow-[0_18px_50px_rgba(2,6,23,0.65)] backdrop-blur">
                            <h2 className="font-display text-xl font-bold text-slate-100 mb-6 flex items-center">
                                <Target className={`w-5 h-5 mr-2 ${scheme.text}`} />
                                タイプの核
                            </h2>
                            <div className="space-y-4">
                                <p className="text-lg text-slate-100 leading-loose font-semibold">
                                    {type.catchCopy}
                                </p>
                                <p className="text-slate-200 leading-relaxed">
                                    {type.survivalStrategy}
                                </p>
                                <p className="text-slate-200 leading-relaxed">
                                    {deeperSummary}
                                </p>
                            </div>
                        </Card>

                        {/* Deep Dive */}
                        <Card tone="light" className="p-8 md:p-10 bg-slate-900/35 border-slate-700/60 text-slate-100 shadow-[0_18px_50px_rgba(2,6,23,0.65)] backdrop-blur">
                            <h2 className="font-display text-xl font-bold text-slate-100 mb-6 flex items-center">
                                <Layers className={`w-5 h-5 mr-2 ${scheme.text}`} />
                                思考スタイルを読み解く
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {axisInsights.map((insight) => (
                                    <div key={insight.axis} className="rounded-2xl border border-slate-700/60 p-6 bg-slate-900/35">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                                            {insight.label}
                                        </div>
                                        <div className="font-display text-base font-bold text-slate-100 mb-2">
                                            {insight.title}
                                        </div>
                                        <p className="text-sm text-slate-200 leading-relaxed">
                                            {insight.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Detailed Stats Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card tone="light" className="p-8 bg-slate-900/35 border-slate-700/60 text-slate-100 shadow-[0_18px_50px_rgba(2,6,23,0.65)] backdrop-blur">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                                    <Zap className="w-4 h-4 mr-2 text-amber-500" /> 勝ち筋
                                </h3>
                                <p className="text-slate-200 leading-relaxed font-medium">
                                    {type.survivalStrategy}
                                </p>
                            </Card>

                            <Card tone="light" className="p-8 bg-slate-900/35 border-slate-700/60 text-slate-100 shadow-[0_18px_50px_rgba(2,6,23,0.65)] backdrop-blur">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center">
                                    <Shield className="w-4 h-4 mr-2 text-rose-500" /> 代替リスク
                                </h3>
                                <div className="text-3xl font-black text-slate-100 mb-3">
                                    {type.replacementRisk}
                                </div>
                            </Card>
                        </div>

                        {/* Role Guidance */}
                        <Card tone="light" className="p-8 md:p-10 bg-slate-900/35 border-slate-700/60 text-slate-100 shadow-[0_18px_50px_rgba(2,6,23,0.65)] backdrop-blur">
                            <h3 className="font-display text-lg font-bold mb-4 flex items-center text-slate-100">
                                <Layers className={`w-5 h-5 mr-2 ${scheme.text}`} /> 稼ぎどころ
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {careerItems.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-2 rounded-full border border-slate-700/60 bg-slate-900/40 text-sm text-slate-200 font-semibold shadow-sm"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>

                        {/* Compatibility */}
                        <Card tone="light" className="p-8 md:p-10 bg-slate-900/35 border-slate-700/60 text-slate-100 shadow-[0_18px_50px_rgba(2,6,23,0.65)] backdrop-blur">
                            <h3 className="font-display text-lg font-bold mb-4 flex items-center text-slate-100">
                                <Users className={`w-5 h-5 mr-2 ${scheme.text}`} /> 組むべき相手
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5 shadow-sm">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                                        同系統で噛み合う
                                    </div>
                                    <div className="space-y-3">
                                        {topSimilar.map(({ type: match }) => (
                                            <div key={match.id} className="flex items-center justify-between">
                                                <div className="font-bold text-slate-100">{match.youtrustName}</div>
                                                <div className="text-xs text-slate-300">{match.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5 shadow-sm">
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                                        補完で伸びる
                                    </div>
                                    <div className="space-y-3">
                                        {topComplementary.map(({ type: match }) => (
                                            <div key={match.id} className="flex items-center justify-between">
                                                <div className="font-bold text-slate-100">{match.youtrustName}</div>
                                                <div className="text-xs text-slate-300">{match.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Additional Insight (Placeholder for Radar etc) */}
                        <Card tone="light" className="p-8 md:p-10 relative overflow-hidden bg-gradient-to-br from-slate-950/80 via-slate-900/40 to-slate-900/60 border-slate-700/60 text-slate-100 shadow-[0_18px_50px_rgba(2,6,23,0.65)] backdrop-blur">
                            <div className="absolute -top-12 -right-6 w-48 h-48 rounded-full blur-3xl opacity-60 bg-slate-800/60"></div>
                            <h3 className="font-display text-lg font-bold mb-4 flex items-center text-slate-100">
                                <Layers className={`w-5 h-5 mr-2 ${scheme.text}`} /> 動き方の要点
                            </h3>
                            <p className="text-slate-200 leading-relaxed max-w-2xl mb-6">
                                キャッチコピー、勝ち筋、稼ぎどころを整理した。
                                迷ったらここに戻って、次の一手を決めよう。
                            </p>
                            <div className="grid md:grid-cols-3 gap-5">
                                {actionHints.map((hint) => (
                                    <div key={hint.title} className="rounded-2xl border border-slate-700/60 bg-slate-900/40 p-5 shadow-sm">
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                                            {hint.title}
                                        </div>
                                        <p className="text-sm text-slate-200 leading-relaxed">
                                            {hint.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
}
