import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
          Contact
        </p>

        <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
          Get In Touch
        </h2>

        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-zinc-400">
          I’m available for data engineering,
          analytics engineering, BI, and cloud
          data platform opportunities. For collaborations, internships,
          freelance, or full-time roles,
          reach out directly below.



        </p>

        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap">

          <a
            href="mailto:paulkizito001@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white transition hover:border-violet-500/40 hover:bg-violet-500/5"
          >
            <MdEmail className="h-5 w-5 text-violet-400" />
            paulkizito001@gmail.com
          </a>

          <a
            href="https://github.com/paulETL"
            target="_blank"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white transition hover:border-violet-500/40 hover:bg-violet-500/5"
          >
            <FaGithub className="h-5 w-5 text-violet-400" />
            github.com/paulETL
          </a>

          <a
            href="https://www.linkedin.com/in/ebubechukwu-paul-7631502b8"
            target="_blank"
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-white transition hover:border-violet-500/40 hover:bg-violet-500/5"
          >
            <FaLinkedin className="h-5 w-5 text-violet-400" />
            LinkedIn Profile
          </a>

        </div>
      </div>
    </section>
  );
}

