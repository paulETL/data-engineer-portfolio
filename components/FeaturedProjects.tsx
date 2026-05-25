import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-violet-400">
              Featured Project
            </p>

            <h2 className="text-4xl font-bold text-white">
              Engineering Projects
            </h2>
          </div>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
