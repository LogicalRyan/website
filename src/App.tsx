function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 bg-gray-950/80 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logicalbranch.png"
              alt="LogicalBranch logo"
              className="h-9 w-9 rounded-md ring-1 ring-brand-400/20 bg-white p-1 object-contain"
            />
            <span className="text-lg font-semibold tracking-tight">
              LogicalBranch
            </span>
          </a>
          {/* <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#work" className="hover:text-white transition">
              Work
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
            >
              Start a project
            </a>
          </div> */}
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent"></div>
          <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                Build reliable software, faster.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300">
                LogicalBranch builds fast, intuitive, and reliable products that
                customers love. We turn ideas into production‑ready apps that
                improve conversion, retention, and time‑to‑market.
              </p>
            </div>
          </div>
        </section>

        {/* Logos */}

        {/* Features */}
        <section
          id="services"
          className="mx-auto max-w-7xl px-6 py-20 md:py-28 pt-0 md:pt-0"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              What we do
            </h2>
            <p className="mt-4 text-gray-300">
              End‑to‑end product development with a focus on maintainability and
              speed.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Custom Product Development
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Greenfield builds, refactors, and scale‑ups using modern stacks
                (React, Node, Bun, Rust).
              </p>
            </div>
            <div
              id="contact"
              className="rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-500/15 via-white/5 to-transparent p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Have a project in mind?
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Let’s architect it together. We’ll respond within one
                    business day.
                  </p>
                </div>
                <a
                  href="mailto:ryan@logicalbranch.com"
                  className="inline-flex items-center rounded-md bg-brand-500 px-5 py-3 text-white font-medium hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                >
                  ryan@logicalbranch.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {/* <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-500/15 via-white/5 to-transparent p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Have a project in mind?
                </h3>
                <p className="mt-2 text-gray-300">
                  Let’s architect it together. We’ll respond within one business
                  day.
                </p>
              </div>
              <a
                href="mailto:ryan@logicalbranch.com"
                className="inline-flex items-center rounded-md bg-brand-500 px-5 py-3 text-white font-medium hover:bg-brand-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
              >
                ryan@logicalbranch.com
              </a>
            </div>
          </div>
        </section> */}
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} LogicalBranch. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6">
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default App;
