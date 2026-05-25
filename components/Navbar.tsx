export default function Navbar() {
  return (
    <nav className="border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl bg-black/20">
      <div className="container-main h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="text-3xl font-black text-violet-500">
            EP
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm text-white/70">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Certifications</a>
          <a href="#">Resume</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="dark-btn text-sm">
          Download Resume
        </button>

      </div>
    </nav>
  );
}
