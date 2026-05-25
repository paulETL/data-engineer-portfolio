import Image from "next/image";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {


  return (
    <div className="grid items-center gap-12 rounded-[32px] border border-white/10 bg-white/[0.03] p-10 lg:grid-cols-2">

      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <Image
          src={project.image || project.images?.[0]}
          alt={project.title}
          width={900}
          height={600}
          className="h-full w-full object-cover"
        />
      </div>

      <div>

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
          Featured Project
        </p>

        <h3 className="mb-6 text-5xl font-black leading-tight text-white">
          {project.title}
        </h3>

        <p className="mb-8 text-lg leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <ul className="mb-8 space-y-3 text-white/70">
          {project.highlights.map((item: string) => (
            <li key={item}>• {item}</li>
        ))}
  </ul>


        <div className="mb-8 flex flex-wrap gap-3">
          {project.technologies.map((item: string) => (
            <span
              key={item}
              className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200"
    >
      {item}
    </span>
  ))}
</div>


        <div className="flex gap-4">

          <a
            href={`/projects/${project.id}`}
            className="rounded-2xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500"
          >
            View Project
          </a>

          <a
            href={project.github}
            className="rounded-2xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-violet-500"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
}
