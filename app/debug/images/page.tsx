'use client';

import { aiTypes } from '../../data/types';
import Link from 'next/link';

export default function ImageDebugPage() {
    return (
        <div className="min-h-screen bg-slate-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-900">Character Image Verification</h1>
                    <Link href="/" className="px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition-colors">
                        Back to Home
                    </Link>
                </div>

                <p className="mb-6 text-slate-600 bg-white p-4 rounded-lg border border-slate-200">
                    <strong>Instructions:</strong> Please verify that the image displayed for each character matches the intended ID.
                    If there is a mismatch, the file mapping in <code>public/images/characters</code> needs to be adjusted.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {aiTypes.map((type) => {
                        const filename = type.image?.split('/').pop();

                        return (
                            <div key={type.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
                                <div className="w-full aspect-square bg-slate-50 rounded-lg overflow-hidden mb-4 border border-slate-100 relative group">
                                    {type.image ? (
                                        <img src={type.image} alt={type.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-slate-300 font-bold">No Image</div>
                                    )}
                                    <div className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="font-bold">{type.code}</span>
                                    </div>
                                </div>

                                <h3 className="font-bold text-slate-800 text-sm mb-1">{type.youtrustName}</h3>
                                <p className="text-xs text-slate-500 mb-3">{type.name}</p>

                                <div className="w-full bg-slate-100 rounded p-2">
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Current File</p>
                                    <p className="text-xs font-mono font-medium text-slate-700 break-all">
                                        {filename}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
