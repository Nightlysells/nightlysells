
'use client'

import Image from 'next/image'

export default function Page() {
  const handleMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent('Wholesale Inquiry – Nightly_sells');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:mr3686673@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-violet-600/90 shadow-lg shadow-violet-500/20 grid place-items-center overflow-hidden">
              <Image src="/nightly-logo.png" alt="Nightly Logo" width={36} height={36} className="h-9 w-9 object-cover rounded-2xl" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">Nightly_sells</p>
              <p className="text-xs text-slate-400 -mt-1">Wholesale • Retail • E‑Commerce</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#brands" className="hover:text-white/90 text-slate-300">For Brands</a>
            <a href="#contact" className="hover:text-white/90 text-slate-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-violet-700/30 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-10 sm:pt-20 sm:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
                Trusted product sourcing & retail distribution.
              </h1>
              <p className="mt-4 text-slate-300 text-lg">
                Nightly_sells buys branded consumer goods in bulk and distributes them through established retail channels—focused on consistency, compliance, and long‑term partnerships.
              </p>
              <div className="mt-6">
                <a href="#brands" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm hover:bg-white/10 transition">
                  Brand/Distributor Info <span className="ml-2">→</span>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">✔ Registered CA business</span>
                <span className="inline-flex items-center gap-2">✔ Compliance‑first</span>
                <span className="inline-flex items-center gap-2">✔ Bulk logistics</span>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-3xl shadow-2xl p-6">
              <h2 className="text-xl font-semibold mb-3">What qualifies us as a business</h2>
              <p className="text-slate-300 leading-relaxed mb-3">
                We operate as a registered wholesale/retail company acquiring branded CPG in case quantities and reselling through vetted retail channels. We maintain current business licenses and tax documentation and purchase directly from authorized distributors.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Consistent order volumes with repeat purchasing</li>
                <li>MAP adherence and brand protection cooperation</li>
                <li>Professional prep/3PL and compliant labeling</li>
                <li>Responsive communication and PO discipline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Brands & Distributors */}
      <section id="brands" className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Authorized Distribution",
              body: "We buy in cases and pallets, maintain clean invoices, and keep clear product lineage to the brand."
            },
            {
              title: "Compliance & MAP",
              body: "We respect channel strategy, follow MAP policies, and coordinate on content, bundles, or variations as needed."
            },
            {
              title: "Logistics Ready",
              body: "We work with reputable carriers and 3PLs for fast, damage‑free handling, including FBA prep when required."
            }
          ].map((f, i) => (
            <div key={i} className="bg-slate-900/60 border border-white/10 rounded-3xl p-5">
              <h3 className="text-base font-semibold mb-2">{f.title}</h3>
              <p className="text-slate-300">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6">
            <h2 className="text-xl font-semibold mb-3">Wholesale & Partnerships</h2>
            <p className="text-slate-300 mb-4">
              Interested in opening or approving a wholesale account? Send us a quick note with product lines, MOQs, and requirements. We can ship to a commercial dock or approved 3PL.
            </p>
            <form onSubmit={handleMail} className="space-y-3">
              <input name="name" placeholder="Your name" required className="w-full rounded-2xl bg-slate-950/60 border border-white/10 px-4 py-2" />
              <input name="email" type="email" placeholder="Your email" required className="w-full rounded-2xl bg-slate-950/60 border border-white/10 px-4 py-2" />
              <textarea name="message" placeholder="Tell us what you’re looking to move (brands, cases, MOQs, MAP, etc.)" rows={5} className="w-full rounded-2xl bg-slate-950/60 border border-white/10 px-4 py-2"></textarea>
              <button type="submit" className="w-full rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 transition">Send Inquiry</button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6">
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p className="text-slate-300"><a href="tel:+19098431191" className="hover:underline">(909) 843‑1191</a></p>
              <p className="text-slate-300"><a href="mailto:mr3686673@gmail.com" className="hover:underline">mr3686673@gmail.com</a></p>
              <p className="text-slate-400 text-sm">California, USA</p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6">
              <h2 className="text-xl font-semibold mb-3">Shareable blurb for forms</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We are a registered wholesale/retail company purchasing branded consumer goods in bulk and reselling through established retail channels. We maintain current business licenses and tax documentation and work directly with authorized distributors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold">Nightly_sells</p>
            <p className="text-sm text-slate-400">Wholesale • Retail • E‑Commerce</p>
          </div>
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Nightly_sells. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
