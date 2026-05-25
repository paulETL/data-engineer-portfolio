export default function Hero() {
  return (
    <section className="relative overflow-x-hidden py-20 md:py-24">

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT SIDE */}

          <div className="panel p-4 md:p-10">

            <div className="inline-flex items-center gap-2 border border-violet-500/30 rounded-full px-4 py-2 text-sm text-violet-400 mb-8">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              DATA ENGINEER
            </div>

            <h1 className="text-3xl md:text-7xl font-black leading-none mb-6">
              Ebubechukwu
              <br />
              <span className="text-violet-500">
                Paul
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-6">
              Engineering 
              <span className="text-violet-500"> realtime </span>
              data systems for  
              <span className="text-violet-500"> scalable business operations </span>
              
            </p>

            <p className="text-white/60 text-lg leading-8 md:leading-9 max-w-2xl mb-10">
              I build data platforms that improve
              decision-making, automate workflows,
              and deliver reliable insight across
              analytics and business operations.



            </p>

            <div className="flex flex-wrap gap-4 mb-10">

  <a
    href="#projects"
    className="purple-btn"
  >
    View My Projects
  </a>

  <a
    href="/resume.pdf"
    download
    className="dark-btn"
  >
    Download Resume
  </a>

</div>



          <div className="flex gap-4">

  <a
    href="https://github.com/paulETL"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-zinc-950 text-4xl text-white transition hover:border-violet-500"
  >
    G
  </a>

  <a
    href="https://linkedin.com/in/YOUR-LINKEDIN"
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-zinc-950 text-4xl text-white transition hover:border-violet-500"
  >
    in
  </a>

  <a
    href="mailto:paulkizito001@gmail.com"
    className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-zinc-950 text-4xl text-white transition hover:border-violet-500"
  >
    @
  </a>

</div>



          </div>

          {/* RIGHT SIDE */}

          <div className="panel p-8 md:p-10 flex flex-col justify-between">

            {/* <div> */}
{/* 
              <h3 className="text-2xl font-bold mb-10">
                Tech Stack Highlights
              </h3>

              <div className="grid grid-cols-3 gap-8">

                {[
                  "Python",
                  "SQL",
                  "Kafka",
                  "Spark",
                  "Airflow",
                  "AWS",
                ].map((tech) => (
                  <div
                    key={tech}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 mb-4" />

                    <p className="text-white/70">
                      {tech}
                    </p>
                  </div>
                ))}

              </div>

            </div> */}

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 items-start">

              {[
                {
                  value: "2+",
                  label: "Years Experience",
                },
                // {
                //   value: "15+",
                //   label: "Projects",
                // },
                {
                  value: "10+",
                  label: "Technologies",
                },
                {
                  value: "100%",
                  label: "Commitment",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 border border-white/10"
                >
                  <h4 className="text-4xl font-bold text-violet-500 mb-2">
                    {item.value}
                  </h4>

                  <p className="text-white/60 text-sm">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

