const services = [
  {
    title: "General Contracting",
    description:
      "End-to-end project oversight from permitting and planning through final inspection. We coordinate every trade so your build runs on time and on budget.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Residential Remodeling",
    description:
      "Kitchen and bath renovations, additions, and whole-home remodels. We transform existing spaces into something you'll love living in.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Commercial Construction",
    description:
      "Office build-outs, retail spaces, and multi-unit developments built to code and delivered with commercial-grade durability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Custom Home Building",
    description:
      "Ground-up custom homes designed around how you want to live. We work closely with you and your architect from lot to move-in.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description:
      "Dedicated project managers who keep your job on schedule, within budget, and proactively communicate every step of the way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
  {
    title: "Design-Build",
    description:
      "Single-source delivery where our team handles both design and construction — fewer handoffs, faster timelines, and tighter cost control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Oak <span className="text-amber-600">California</span>
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            <a
              href="#contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gray-950 pt-16">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4">
              Licensed General Contractor · California
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Building California's Future,{" "}
              <span className="text-amber-500">One Project at a Time.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Oak California delivers residential and commercial construction with the craftsmanship, transparency, and reliability that California homeowners and businesses deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded transition-colors text-base"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded transition-colors text-base"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-amber-600">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10+", label: "Years in Business" },
            { value: "200+", label: "Projects Completed" },
            { value: "100%", label: "Licensed & Insured" },
            { value: "5★", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-amber-100 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From a single-room remodel to a ground-up commercial development, we bring the same level of dedication and craftsmanship to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="text-amber-600 mb-5">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-3">
              Reach Out
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Ready to start your project? Get in touch and we'll get back to you within one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 bg-gray-50">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <a href="tel:+15551234567" className="text-gray-500 hover:text-amber-600 transition-colors text-sm">
                (555) 123-4567
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 bg-gray-50">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:hello@oakcalifornia.com" className="text-gray-500 hover:text-amber-600 transition-colors text-sm">
                hello@oakcalifornia.com
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 bg-gray-50">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
              <p className="text-gray-500 text-sm">California, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold text-white">
            Oak <span className="text-amber-500">California</span>
          </span>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Oak California. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-gray-500">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
