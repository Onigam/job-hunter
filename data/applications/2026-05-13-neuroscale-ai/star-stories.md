# STAR Stories — Neuroscale AI / Founding Software Engineer (TypeScript)

Stories selected for: TypeScript backend at scale, founding engineer ownership, agentic AI pipelines, architecture decisions under pressure, influence without formal authority.

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a founding engineer experience" / "How do you handle starting with no guardrails?"

In 2016, I co-founded Alaya with a blank page and no customers. The pitch to investors was real, but the product wasn't. We had to build it fast enough to sign the first enterprise clients before the runway ran out.

My task was to architect and build the entire platform solo, then grow and lead the engineering team as the business scaled. There was no CTO above me making the hard calls.

I chose TypeScript and Node.js for the backend from the start, PostgreSQL as the data layer, React on the frontend. Pragmatic choices that could move fast without over-engineering. I shipped the core features in three months to get to a first demo, then iteratively added multi-tenancy, a REST and GraphQL API layer for enterprise integrations, impact reporting, and postal campaign tooling. Once the product was stable enough, I hired the first three engineers, set up CI/CD and code review culture, and wrote the architecture docs that let me stop being the only person who understood the system.

The platform reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity acquired Alaya at a $1B+ valuation, which validated every architecture decision made from day one under real pressure.

Looking back, I'd invest in observability much earlier. We added proper APM late, which meant some production issues took longer to diagnose than they should have. And I'd design for multi-tenancy from the start; retrofitting it mid-growth is painful.

---

## Story 2: Shipping Agentic AI Workflows from Prototype to Production

**Best for:** "Tell me about an LLM/AI integration you shipped" / "How do you move AI from experiment to production?"

At Benevity, after the acquisition, I was given latitude to explore how AI tooling could change how we built and reviewed code. The informal mandate was loose: see if there's something useful here.

The actual task was harder than it sounded. I needed to prototype something credible enough to demonstrate value, then get two engineering teams to actually use it in their daily work, without a top-down mandate.

I started by integrating OpenAI and Anthropic APIs into our internal code review pipeline, building TypeScript prompt chains that could generate PR summaries, flag patterns, and suggest test cases. I ran load tests early to understand latency and cost at our PR volume. Once the prototype was solid, I built a demo showing concrete time savings for a typical PR review cycle, then ran informal sessions for the engineers who were already curious. I created a shared repository of reusable prompt templates, committed them with examples, and documented results in concrete terms: one workflow cut a review cycle from ~40 minutes to ~15.

Within three months, roughly 70% of engineers across both teams were using the AI-assisted workflows. I became the informal AI tooling lead for the engineering org, consulted on prompting strategy for two product features that shipped that quarter.

What I'd do differently: instrument the LLM calls for cost and latency from day one. We added monitoring later and found some chains were ~3x more expensive than needed with small prompt adjustments.

---

## Story 3: A Hard Architecture Decision Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated under pressure" / "How do you handle tech debt vs. new features?"

At Alaya around 2019, we had a Node.js monolith that was starting to show scaling cracks. Two specific modules, campaign processing and impact reporting, were bottlenecks affecting the whole system under load. The team was split between a full microservices rewrite and a modular monolith approach. Investors wanted new features, not a three-month rewrite.

My task was to make a defensible decision the team would actually execute on, and that the business could survive.

I ran a two-week technical spike comparing both approaches: prototype load tests for each architecture, migration cost estimates, projected timelines under realistic conditions. Instead of presenting opinions, I brought concrete metrics to the CTO and the investors, including how long each path would delay the next feature milestone. I proposed a strangler fig approach: extract the two highest-traffic modules first, keep the rest monolithic, define explicit criteria for when to extract additional services.

We shipped the first extracted module in six weeks. Performance on those endpoints improved by roughly 40%. The remaining monolith held stable through the acquisition with no major incidents. We never needed a big-bang rewrite.

The lesson I carry: when the team is arguing about architecture, the fastest way to cut the debate is data from a spike, not a longer whiteboard session. I'd run the benchmarks a week earlier next time.

---

## Story 4: Leading Without Formal Authority

**Best for:** "How do you influence without a management title?" / Founding or Staff+ IC roles

At Benevity, I was a Senior Staff IC with no direct reports. But I needed to change how engineers worked across two teams that didn't report to me, in an org used to bottom-up adoption rather than top-down mandates.

The task was to get meaningful adoption of AI-assisted development practices without being anyone's manager, and without the organizational theater that kills adoption before it starts.

I started with three engineers who were already curious, not skeptical, and built a small demo with them showing a specific, concrete time saving on a PR review cycle they recognized. I didn't pitch AI in the abstract. From there, I ran optional lunch-and-learn sessions, created reusable prompt templates in a shared repo, and documented results in terms engineers cared about: hours saved, not "transformation."

Within three months, 70% of engineers on both teams had integrated AI tooling into their regular workflow. I was asked to advise on prompting strategy for two product features and became the informal owner of AI practices across the org.

What worked: the mandate-free approach was slower, but the engineers who adopted it on their own terms became advocates. That's something a top-down decree can't produce, and it mattered more at scale.

---

## Story 5: Navigating Post-Acquisition Integration

**Best for:** "Tell me about navigating organizational change" / "How do you adapt to a new technical environment?"

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering org ten times that size. Different culture, different codebase (Java microservices at the core), different architecture review processes, different deployment cadence.

My task was to integrate Alaya's TypeScript and Node.js capabilities into Benevity's platform while continuing to ship new features, without losing the velocity we'd built.

I spent the first month just mapping: the existing architecture, the team structures, the unwritten rules about who owned what. I built relationships with the platform and infra teams before proposing any changes, which meant when I did push a technical opinion, I wasn't a stranger. I drove adoption of AI-augmented development practices across two teams and became the cross-team architecture liaison for the Europe-facing product surface, where Alaya's original customers lived.

We successfully migrated the core Alaya feature set into Benevity's platform and contributed to three major cross-team architecture decisions in the first year.

What I got wrong early: I moved too fast trying to fix things that weren't broken. The Alaya way was right for a startup; it wasn't always right for a post-IPO company with different risk tolerances. Slowing down and listening first made me more effective in the second half of that year.
