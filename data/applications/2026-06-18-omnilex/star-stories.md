# STAR Stories — Omnilex AI Engineer, Legal Search

---

## Story 1: Building Alaya from zero to acquisition
*Best for: "Tell me about a time you built a production system from scratch" / "What's your biggest technical ownership story?"*

When I co-founded Alaya in 2016, we had no product, no customers, and no team. My job was to architect and build the entire platform myself first, then with a growing team, while the business was already signing its first enterprise contracts. The scope kept expanding: core features, multi-tenant architecture, an API layer, impact reporting, postal campaigns, and eventually the integrations that enterprise clients actually needed to adopt the product.

I chose TypeScript and Node.js because I could move fast, iterate quickly, and find engineers who already knew the stack. I shipped a demo-able product in about three months, then layered in more complexity iteratively, each release informed by what clients actually broke or asked for. When the team grew to three engineers, I introduced CI/CD, code review norms, and lightweight architecture documentation, not because it was time to be formal, but because the feedback loop was getting too slow without it.

The platform reached production with 50+ enterprise clients across Switzerland and France. Benevity acquired us in 2021, at over $1B valuation. That acquisition was direct validation of the technical choices we'd made from day one.

Looking back, I'd invest in observability much earlier. We added proper APM late and it cost us debugging time we didn't have. I'd also design for multi-tenancy from day zero rather than retrofitting it later.

---

## Story 2: Making a hard architecture decision under pressure
*Best for: "Tell me about a hard technical trade-off" / "How do you approach system design under constraints?"*

At Alaya, the monolith was starting to crack under load. The team split into two camps: some wanted a full microservices rewrite, others wanted to stay with what we had. Investors were pushing for features, not engineering housekeeping, and we didn't have the luxury of a six-month pause.

My job was to make a defensible call. I ran a two-week technical spike comparing both approaches with prototype load tests, not just architectural opinions. I presented the trade-offs to the CTO and investors with concrete metrics: latency under load, estimated migration time, risk of breaking live integrations. I proposed a strangler fig approach, extracting the two highest-traffic modules first and leaving everything else untouched until there was a clear reason to move it, with explicit criteria for when to extract additional modules.

We shipped the first extracted module in about six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the Benevity acquisition, with no big-bang rewrite required.

The hardest part wasn't the technical decision; it was convincing people that not rewriting everything was the right call. Data made it possible. If I did it again, I'd run the benchmarks earlier to cut the debate shorter and reduce the anxiety in the room.

---

## Story 3: Introducing AI tooling to teams without a mandate
*Best for: "Tell me about a time you introduced a new technology to a team" / "How do you influence without formal authority?" / Relevant to LLM/semantic search adoption*

When I joined Benevity as a Senior Staff IC after the acquisition, I wanted to change how the engineering teams were working. AI tools had gotten good enough to shift how code gets written and reviewed, but there was no mandate to introduce them and no budget line for it.

I started small. I found three engineers who were already curious and built them working demos: a PR review workflow that surfaced issues consistently under 15 minutes, a test generation setup that cut boilerplate by roughly half on a specific category of file. No slide deck, just running code. I ran informal lunch sessions where I'd show what I'd built that week, no attendance required. I also committed a shared prompt library to the repo so that good patterns could spread without me being in every conversation.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation as part of their normal workflow. I became the informal AI tooling lead across the org, which wasn't a title I'd asked for.

Mandate-free adoption is slower but stickier. Engineers who found it useful on their own terms became advocates. A top-down directive would have triggered compliance rather than genuine use.

---

## Story 4: Ramping up in a new engineering culture after acquisition
*Best for: "Tell me about navigating a big change" / "How do you get up to speed in a large unfamiliar codebase?"*

When Benevity acquired Alaya in 2021, I went from a team of 8 to a company with several hundred engineers. Different culture, different codebase (mostly Java and microservices), different processes, and a product surface I'd never seen before.

My instinct was to move fast and bring what we'd built at Alaya directly into Benevity's way of working. That turned out to be the wrong instinct. I spent the first month just mapping the existing architecture: which teams owned what, where the real bottlenecks were, which systems were considered stable versus fragile. I made a deliberate choice not to propose anything for the first four weeks.

That patience paid off. By the time I started proposing changes, I had relationships with the platform and infrastructure teams that made those conversations much easier. I ended up as a cross-team architecture liaison for the Europe-facing product surface, contributing to three major cross-team decisions in the first year.

What I learned was that the fastest way to have impact in a large organization isn't to arrive with answers. It's to arrive with good questions and take the time to understand the constraints that aren't written down anywhere.
