import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* 3D Background */}
      <div className="relative w-full h-[70vh] sm:h-[75vh] lg:h-[80vh] overflow-hidden">
        <Spline
          scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient vignette to keep text readable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
      </div>

      {/* Foreground content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-800 shadow mb-4">
            Welcome
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Hello, World!
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
            A futuristic, immersive greeting powered by a live 3D scene.
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
