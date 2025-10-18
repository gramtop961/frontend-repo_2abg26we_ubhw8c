export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>&copy; {year} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-slate-900 transition-colors" href="#privacy">Privacy</a>
          <a className="hover:text-slate-900 transition-colors" href="#terms">Terms</a>
          <a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
