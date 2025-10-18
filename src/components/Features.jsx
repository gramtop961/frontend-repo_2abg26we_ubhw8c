import { Sparkles, Layout, Feather } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Instant Setup',
    desc: 'Hit the ground running with a ready-to-go hello world experience.'
  },
  {
    icon: Layout,
    title: 'Modern UI',
    desc: 'Clean, responsive design that looks great on any screen size.'
  },
  {
    icon: Feather,
    title: 'Lightweight',
    desc: 'Fast, minimal footprint so your experience feels snappy.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why you’ll love it</h2>
          <p className="mt-2 text-slate-600">Simple, elegant, and purpose-built.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
