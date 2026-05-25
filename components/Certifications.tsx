import { certifications } from "@/data/certifications";
import Image from "next/image";

export default function Certifications() {
  return (
    <section className="container-main py-24">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400 mb-4">
          Certifications
        </p>

        <h2 className="text-4xl md:text-5xl font-black text-white">
          Credentials & Learning
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="panel p-6 hover:border-violet-500/40 transition"
          >
            <div className="relative h-48 rounded-xl overflow-hidden mb-6">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-violet-400 text-sm mb-2">
              {cert.issuer}
            </p>

            <h3 className="text-2xl font-bold text-white mb-3">
              {cert.title}
            </h3>

            <p className="text-zinc-400 mb-6">
              {cert.date}
            </p>

            <a
              href={cert.credentialUrl}
              target="_blank"
              className="text-violet-400 hover:text-violet-300 transition"
            >
              View Credential →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
