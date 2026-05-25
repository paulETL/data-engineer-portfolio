export default function Architecture() {
  return (
    <section
      id="architecture"
      className="section-spacing"
    >
      <div className="container-main">

        <div className="mb-20">
          <p className="tracking-[0.3em] uppercase text-sm text-white/40 mb-4">
            System Design
          </p>

          <h2 className="text-5xl font-bold">
            Pipeline Architecture
          </h2>
        </div>

        <div className="glass-card rounded-3xl p-10">
          <img
            src="/images/architecture.png"
            alt="architecture"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
