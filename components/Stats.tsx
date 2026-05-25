const stats = [
  {
    number: "5+",
    label: "Streaming Pipelines",
  },
  {
    number: "15+",
    label: "Technologies",
  },
  {
    number: "Real-Time",
    label: "Data Systems",
  },
  {
    number: "End-to-End",
    label: "Cloud & Analytics",
  },
];

export default function Stats() {
  return (
    <section className="pb-24">
      <div className="container-main">
        <div className="grid md:grid-cols-4 border border-white/10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-10 border border-white/10"
            >
              <h3 className="text-4xl font-bold mb-3">
                {stat.number}
              </h3>

              <p className="uppercase tracking-[0.2em] text-sm text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
