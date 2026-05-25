export default function ResumeCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
        
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
              Resume
            </p>

            <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
              Resume & Experience
            </h2>

            <p className="text-lg leading-relaxed text-zinc-400">
              Explore my technical background,
              project experience, certifications,
              and data engineering skill set.

            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-xl bg-violet-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-xl border border-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:border-violet-500/40 hover:bg-white/[0.03]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
