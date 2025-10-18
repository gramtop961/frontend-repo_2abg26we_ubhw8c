import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-indigo-600 text-white grid place-items-center">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
