export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
          Next.js 15 · TypeScript · Tailwind CSS
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            RSLEIHE is ready to build.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300">
            Start editing <code className="rounded bg-white/10 px-2 py-1">app/page.tsx</code> to create your application.
          </p>
        </div>

        <div className="grid gap-4 text-left sm:grid-cols-3">
          {["App Router", "Strict TypeScript", "Tailwind CSS"].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/30">
              <h2 className="font-semibold text-cyan-100">{item}</h2>
              <p className="mt-2 text-sm text-slate-400">
                Configured and ready for modern Next.js development.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
