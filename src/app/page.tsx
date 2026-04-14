export default function Home() {
  const features = [
    {
      title: "SEO Agent",
      description:
        "Finds keyword clusters, on-page fixes, and content opportunities by intent.",
    },
    {
      title: "Content Agent",
      description:
        "Generates weekly content plans, blog drafts, and repurposed social snippets.",
    },
    {
      title: "Social Agent",
      description:
        "Creates platform-ready posts for X, Reddit, and LinkedIn with tone variants.",
    },
    {
      title: "Email Agent",
      description:
        "Builds lifecycle email sequences, lead magnets, and conversion follow-ups.",
    },
    {
      title: "Analytics Agent",
      description:
        "Tracks funnel metrics, spots drop-offs, and proposes high-impact A/B tests.",
    },
  ];

  const faqs = [
    {
      q: "Is GrowAgent fully autonomous?",
      a: "Yes for planning, drafts, and optimization loops. Sensitive actions like publishing and mass email can require your approval.",
    },
    {
      q: "Who is this for?",
      a: "Solo founders and SMB teams (5 to 50 employees) that need results without hiring a full in-house growth team.",
    },
    {
      q: "Do I need technical skills?",
      a: "No. Start with your website URL and growth goal. GrowAgent handles research, strategy, and execution tasks.",
    },
    {
      q: "How does billing work?",
      a: "Subscriptions are processed by Lemon Squeezy (Merchant of Record), including taxes and invoicing.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 md:px-10">
        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-12">
          <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
            Autonomous AI Marketing for SMB
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            GrowAgent turns your website into a 24/7 AI growth engine.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Paste your URL or one goal prompt. GrowAgent launches SEO, content,
            social, email, and analytics agents to execute your growth plan.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-xl bg-emerald-400 px-6 py-3 text-center font-medium text-slate-950 transition hover:bg-emerald-300"
            >
              Start at $99/month
            </a>
            <a
              href="#how-it-works"
              className="rounded-xl border border-slate-700 px-6 py-3 text-center font-medium transition hover:border-slate-500"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <p className="mb-2 text-sm text-slate-400">Quick start prompt</p>
            <p className="text-slate-200">
              growagent.ai/prompt: &quot;Grow my B2B SaaS to 50k users in 90
              days with $30k budget&quot;
            </p>
          </div>
        </section>

        <section id="how-it-works">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "1) You input URL, goals, market, and budget.",
              "2) GrowAgent audits your funnel and generates a 90-day plan.",
              "3) Agents execute tasks, report metrics, and optimize weekly.",
            ].map((step) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-slate-300"
              >
                {step}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">Your AI Growth Team</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
              >
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="mt-2 text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing">
          <h2 className="text-3xl font-semibold">Simple pricing</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm text-slate-400">Starter</p>
              <p className="mt-2 text-3xl font-semibold">$99/mo</p>
              <p className="mt-3 text-slate-300">
                Solo founders. Core agents, weekly plans, and approval workflow.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400 bg-emerald-400/10 p-6">
              <p className="text-sm text-emerald-300">Growth</p>
              <p className="mt-2 text-3xl font-semibold">$299/mo</p>
              <p className="mt-3 text-slate-200">
                SMB teams. More agent runs, team seats, deeper analytics.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm text-slate-400">Scale</p>
              <p className="mt-2 text-3xl font-semibold">Custom</p>
              <p className="mt-3 text-slate-300">
                High-volume growth ops with custom integrations and support.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">Customer proof (placeholder)</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["SaaS founder", "Agency owner", "Ecommerce operator"].map(
              (persona) => (
                <blockquote
                  key={persona}
                  className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-slate-300"
                >
                  &quot;GrowAgent replaced 3 contractors in our growth stack in
                  week one.&quot;
                  <footer className="mt-3 text-sm text-slate-400">
                    {persona}, testimonial placeholder
                  </footer>
                </blockquote>
              ),
            )}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
              >
                <summary className="cursor-pointer text-lg font-medium">
                  {item.q}
                </summary>
                <p className="mt-2 text-slate-300">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold">
            Ready to let AI run your marketing?
          </h2>
          <p className="mt-4 text-slate-300">
            Launch your first autonomous growth workflow in minutes.
          </p>
          <a
            href="https://app.lemonsqueezy.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-xl bg-emerald-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-emerald-300"
          >
            Create your plan
          </a>
        </section>
      </main>
    </div>
  );
}
