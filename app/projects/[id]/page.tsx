import { projects } from "@/data/projects"
import Image from "next/image"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params

  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-violet-400">
            Project Case Study
          </p>

          <h1 className="mb-8 text-5xl font-black leading-tight text-white md:text-7xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-xl leading-relaxed text-zinc-400">
            {project.description}
          </p>
        </div>

        {/* IMAGE GALLERY */}
{/* IMAGE GALLERY */}
<div className="mb-20">
  <div className="mb-6 flex items-center justify-between">
    <h2 className="text-3xl font-bold text-white">
      Project Gallery
    </h2>

    <p className="text-sm text-zinc-500">
      Swipe horizontally
    </p>
  </div>

  <div className="flex gap-4 overflow-x-auto pb-4">
    {project.images?.map((image, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[85vw] md:w-[700px]"
      >
        <Image
          src={image}
          alt={`${project.title}-${index}`}
          width={1600}
          height={900}
          className="h-full w-full rounded-3xl border border-white/10 object-cover"
        />
      </div>
    ))}
  </div>
</div>




        {/* VIDEOS */}
        {project.videos && project.videos.length > 0 && (
          <div className="mb-20 space-y-8">

            <h2 className="text-3xl font-bold text-white">
              Demo Videos
            </h2>

            {project.videos.map((video, index) => (
              <video
                key={index}
                controls
                className="w-full rounded-3xl border border-white/10"
              >
                <source src={video} type="video/mp4" />
              </video>
            ))}
          </div>
        )}

        {/* TECH STACK */}
        <div className="mb-20 flex flex-wrap gap-4">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-sm text-violet-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUSINESS OBJECTIVE */}
        {project.businessObjective && (
          <div className="mb-20 rounded-3xl border border-white/10 p-8">

            <h2 className="mb-6 text-3xl font-bold text-white">
              Business Objective
            </h2>

            <p className="text-lg leading-relaxed text-zinc-400">
              {project.businessObjective}
            </p>
          </div>
        )}

        {/* HIGHLIGHTS */}
        <div>

          <h2 className="mb-10 text-4xl font-black text-white">
            Key Highlights
          </h2>

          <div className="grid gap-6">

            {project.highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 p-8"
              >
                <p className="text-xl text-zinc-200">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

