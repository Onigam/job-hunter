# STAR Stories — Quin (Founding Engineer / CTO)

---

## Story 1: Building Alaya from zero to acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Why founding engineer?" / "How do you handle full ownership?"

When I co-founded Alaya in 2016, there was no product, no team, and no customers. The first real conversation I had with my cofounder was about the architecture we'd regret in three years if we got it wrong. We were building a purpose and impact platform for enterprises, which meant multi-tenant from day one rather than retrofitted later.

Over the first three months I built the core product alone: Node.js backend, React frontend, PostgreSQL, with a data layer designed to isolate tenants from the start. I made deliberate stack choices, picking technologies I knew well enough to ship fast but that had enough ecosystem depth to scale. The first enterprise demo shipped in month three. By the time we had three engineers on the team, I'd written the architecture docs, set up CI/CD, and established code review as a real practice.

Five years later, Alaya had 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian unicorn with a $1B+ valuation. The multi-tenant architecture I'd designed in 2016 didn't require a rewrite through the acquisition process or the integration that followed.

What I'd do differently: add observability earlier. We added proper APM late and flew blind during our first real scaling events. I also underestimated the cost of retrofitting multi-tenancy had we not designed for it upfront, which is why I'd make the same structural call again from day one.

---

## Story 2: Making a hard architecture decision under pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs delivery pressure?" / "Tell me about a time you had to make a hard call"

Around 2019, Alaya's platform had grown beyond what the initial architecture handled comfortably. Two modules were showing clear cracks under load. The team split: some engineers wanted a full microservices rewrite, others were worried about delay risk while investors were pushing for new features. I needed to make a call.

I ran a two-week technical spike, comparing both approaches with prototype load tests rather than gut opinions. The microservices path would have bought us better per-module scaling but delayed feature delivery by several months and introduced operational complexity our team size couldn't absorb yet. The strangler fig approach, extracting the two highest-traffic modules while keeping the rest of the monolith stable, was the more defensible call.

I presented the trade-offs to the founding team with concrete metrics. We went with the strangler fig. The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the 2021 acquisition without a rewrite.

The hardest part wasn't the technical decision: it was convincing people that not rewriting everything was the right move. Data made the argument; opinion alone wouldn't have. What I'd do earlier next time is benchmark before the debate starts, so the numbers are already there when people start arguing.

---

## Story 3: Leading without formal authority

**Best for:** "Tell me about leading a team without being the manager" / "How do you drive change across an org?" / CTO / Staff+ / "How do you get buy-in?"

After the Benevity acquisition in 2021, I was a Senior Staff IC on a team roughly ten times the size of Alaya. No direct reports. But I could see that AI-assisted development workflows could meaningfully improve how engineers on two of our teams worked. The challenge was that nobody reported to me, and mandating new tooling in an unfamiliar org is a good way to get ignored.

I started with three engineers who were already curious. I built internal demos showing concrete time savings: a PR review cycle that normally took a full day, compressed to a few hours using GitHub Copilot combined with custom prompt templates I'd written. I ran informal lunch sessions, no requirement to attend, just "here's what I found, want to see?" I committed reusable prompt templates to a shared repo so people could experiment without asking for permission first.

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation regularly. I became the informal AI tooling lead for the broader org.

The thing I noticed was that mandate-free adoption was more durable: engineers who chose to use the tools on their own terms became internal advocates, which I couldn't have manufactured top-down. What I'd change is tracking adoption metrics from day one, so I had hard numbers when leadership eventually asked about impact rather than having to reconstruct them retroactively.
