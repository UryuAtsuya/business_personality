export function Footer() {
    return (
        <footer className="bg-slate-950/80 border-t border-slate-800 py-12">
            <div className="container mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} AI Business Personality. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center gap-6">
                    <a href="#" className="text-slate-500 hover:text-lime-200 text-xs">Terms of Service</a>
                    <a href="#" className="text-slate-500 hover:text-lime-200 text-xs">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
