export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 mb-4">
            Welcome
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Hello, World!
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A clean, modern starter to say hello in style. Built with speed and simplicity in mind.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-white shadow hover:bg-indigo-700 transition-colors"
              href="#get-started"
            >
              Get Started
            </a>
            <a
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-slate-800 hover:bg-slate-50 transition-colors"
              href="#learn-more"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
