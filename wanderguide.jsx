import React from "react";

// If your bundler has issues importing images, place the file in /public and use the path below.
// Make sure /public/nihongodekita.png exists in your app.
const HERO_IMG = "/nihongodekita.png";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_1234567890abcdef"; // TODO: replace with real payment link

export default function NihongodekitaTokyoGuide() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-purple-100 grid place-items-center">🌸</div>
            <div className="font-semibold tracking-tight">Nihongodekita · Tokyo Guide</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">What You Get</a>
            <a href="#tours" className="hover:opacity-80">Audio Tours</a>
            <a href="#how" className="hover:opacity-80">How It Works</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={STRIPE_PAYMENT_LINK}
              className="inline-flex items-center rounded-2xl border border-purple-600 bg-purple-600 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Buy the Guide
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,#ede9fe,transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium">
              <span>New</span>
              <span className="h-1 w-1 rounded-full bg-neutral-400" />
              <span>8 recorded audio tours</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Don't Miss My Inside Tour on Tokyo
            </h1>
            <p className="mt-4 text-lg text-neutral-700">
              Get my curated travel guide with <strong>8 recorded audio tours</strong>,
              <strong> 75 recommendations</strong>, and <strong>language essentials</strong> so you can explore with confidence.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={STRIPE_PAYMENT_LINK}
                className="inline-flex items-center rounded-2xl border border-purple-600 bg-purple-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                Get Access Now
              </a>
              <a href="#features" className="px-5 py-3 rounded-2xl border border-neutral-300 font-semibold hover:bg-neutral-50">
                See What's Inside
              </a>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              こんにちは, <em>Konnichiwa!</em> I'm <strong>Sayaka</strong> from <strong>@nihongodekita</strong>. I've lived in Japan my whole life and created this
              comprehensive guide to make your Japan trip the best one yet.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Audio Tours", value: "8" },
                { label: "Curated Spots", value: "75" },
                { label: "Language Essentials", value: "✓" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-neutral-200 p-4 bg-white shadow-sm">
                  <div className="text-2xl font-extrabold">{stat.value}</div>
                  <div className="text-xs text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={HERO_IMG}
              alt="Sayaka from Nihongodekita showing the travel app in Shibuya"
              className="rounded-3xl border border-neutral-200 shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 rotate-[-2deg] rounded-2xl bg-white shadow-lg border border-neutral-200 p-3">
              <div className="text-xs font-semibold">You get:</div>
              <div className="text-xs text-neutral-700">8 audio tours · 75 recs · phrases</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 border-t border-neutral-200 bg-neutral-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">What's inside the guide</h2>
          <p className="mt-2 text-neutral-700">Hand-picked by a local. Clear routes. Language support when you need it.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "75 Must-Visit Spots", desc: "Must-see landmarks, favorite restaurants, and secret spots.", icon: "📍" },
              { title: "8 Audio Tours", desc: "Rich history and cultural insights across top neighborhoods.", icon: "🎧" },
              { title: "Offline Navigation", desc: "Pin, save, and follow turn-by-turn without stress.", icon: "📱" },
              { title: "Language Essentials", desc: "Phrases and resources from the moment you land at HND/NRT.", icon: "🗣️" },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-neutral-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Tours */}
      <section id="tours" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">8 audio guides, recorded by me</h2>
            <a href={STRIPE_PAYMENT_LINK} className="text-purple-700 font-semibold hover:underline">Get access now →</a>
          </div>
          <p className="mt-2 text-neutral-700">Epic stories, all at your own pace.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Ginza Shopping Tour", desc: "Tokyo’s most luxurious shopping area, a haven for fashion and fine dining." },
              { title: "Shibuya Walking Tour", desc: "Dive into Tokyo’s trendiest district for shopping, dining, and nightlife." },
              { title: "Tokyo Imperial Walking Tour", desc: "Discover imperial history in a lush, moated green space in central Tokyo." },
              { title: "Shinjuku Walking Tour", desc: "Explore Tokyo’s entertainment hub with endless places to eat, shop, and play." },
              { title: "Asakusa Walking Tour", desc: "Step into old‑world Tokyo: geisha charm, vibrant markets, iconic temples." },
              { title: "Ueno Park Walking Tour", desc: "Stroll a sprawling urban oasis of cherry blossoms, art, and history." },
              { title: "Yanaka Walking Tour", desc: "Uncover a hidden gem blending tradition, art, and a peaceful vibe." },
              { title: "Kamakura Walking Tour", desc: "A coastal town’s rich history, scenic temples, and serene beaches." },
            ].map((t) => (
              <article key={t.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="h-36 rounded-xl bg-neutral-100 grid place-items-center text-5xl">🗺️</div>
                <h3 className="mt-4 font-bold">{t.title}</h3>
                <p className="mt-1 text-sm text-neutral-700">{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 bg-neutral-50/50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">How it works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { step: "1", title: "Purchase the Guide", desc: "Instant access via secure Stripe checkout." },
              { step: "2", title: "Open the App", desc: "iOS/Android friendly. Save maps and go offline before you head out." },
              { step: "3", title: "Explore & Learn", desc: "Follow curated routes. Tap to play audio where it matters." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-bold text-neutral-500">STEP {s.step}</div>
                <h3 className="mt-2 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-purple-50 p-8 md:p-10 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-extrabold tracking-tight">Make your Tokyo trip unforgettable</h3>
                <p className="mt-2 text-neutral-700">Solo adventurer, digital nomad, or family traveler—this guide helps you experience Tokyo like a local and fall in love with the city I call home.</p>
                <ul className="mt-4 text-sm text-neutral-800 list-disc list-inside">
                  <li>8 audio tours · 75 recommendations · language essentials</li>
                  <li>Lifetime access and free minor updates</li>
                  <li>30‑day money‑back guarantee</li>
                </ul>
              </div>
              <div className="md:justify-self-end">
                <div className="rounded-2xl border border-neutral-300 bg-white p-6 text-center shadow">
                  <div className="text-sm font-semibold text-neutral-600">Full Travel Guide</div>
                  <div className="mt-1 text-4xl font-extrabold tracking-tight">$39</div>
                  <div className="text-xs text-neutral-500">one‑time</div>
                  <a
                    href={STRIPE_PAYMENT_LINK}
                    className="mt-4 inline-flex items-center rounded-2xl border border-purple-600 bg-purple-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full justify-center"
                  >
                    Get My Full Travel Guide
                  </a>
                  <div className="mt-3 text-[11px] text-neutral-500">Secure checkout powered by Stripe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Frequently asked questions</h2>
          <div className="mt-8 grid gap-5">
            {[
              { q: "Do I need data to use the guide?", a: "No. You can save routes and maps in advance. Audio is lightweight and works offline once downloaded." },
              { q: "Which phones are supported?", a: "iOS and Android are supported. Any modern browser works for the web version." },
              { q: "Can I get a refund if it's not for me?", a: "Yes. 30‑day money‑back guarantee—no questions asked." },
              { q: "Is the content updated?", a: "Yes. You get lifetime access to the current version plus free minor updates." },
            ].map((item) => (
              <details key={item.q} className="group rounded-2xl border border-neutral-200 bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-semibold">{item.q}</span>
                  <span className="text-neutral-400 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-3 text-sm text-neutral-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-600">©2025 · All rights reserved</div>
          <div className="text-sm text-neutral-600">Made by Sayaka · <a className="hover:underline" href="#">Privacy Policy</a></div>
        </div>
      </footer>
    </div>
  );
}
