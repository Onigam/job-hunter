# STAR+R Stories: Wolters Kluwer, Principal Full Stack Engineer, AI Platform & Agents

The interview loop is four stages over two to four weeks: intro screen, two live coding rounds, a systems design round and a work presentation. The posting says AI-generated responses or outside help during interviews means disqualification. These are notes to rehearse out loud until they sound like normal conversation, not scripts to read.

The role is principal level on a central GenAI platform (about 100 engineers, sub-teams under 10), so expect questions on leading by example, architecture ownership, platform thinking for internal users, and shipping reliable systems to production.

---

## Story 1: Getting two teams onto AI-assisted development without authority

**Likely questions:** "How do you influence engineers who don't report to you?" / "How would you drive adoption of a platform other teams don't have to use?" / "Tell me about mentoring."

At Benevity I was a Senior Staff IC with no direct reports, and I wanted two teams that weren't mine to start using AI-assisted development in their daily work. Nobody had asked for it, and a mandate from me wouldn't have carried any weight anyway, so the task was really about changing habits through evidence. I started with three engineers who were already curious and built small internal demos around real work from our backlog, so the time savings were visible on code people recognized. From there I ran informal lunch-and-learn sessions, put reusable prompt templates in a shared repo so nobody had to start from a blank page, and wrote up concrete wins as they happened, like a PR review cycle that went about two hours faster. Within three months roughly 70% of engineers across both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead for the org.

Looking back, the no-mandate route was slower but it stuck, because the people who adopted it on their own terms became the ones arguing for it in their teams. A central agent platform lives or dies by the same thing. Product teams will only build on it if the paved road is actually faster than doing it themselves, so I'd treat templates, docs and working examples as part of the product, not an afterthought.

---

## Story 2: Modular extraction instead of a rewrite

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you handle tech debt against feature pressure?" / Systems design follow-ups.

At Alaya our monolith was starting to show cracks under load, and the team was split between a full microservices rewrite and keeping a modular monolith. Investors wanted features, not a rewrite, so whatever I chose had to be defensible to people who weren't engineers. I ran a two-week spike comparing both approaches with prototype load tests, then brought the trade-offs to leadership and investors as numbers rather than opinions. What I proposed was a strangler fig migration: extract the two highest-traffic modules first, leave everything else in the monolith, and agree on explicit criteria for when any further module would earn its own service. The first extracted module shipped in six weeks, the busiest endpoints got about 40% faster, and the remaining monolith stayed stable all the way through the acquisition. We never needed the big-bang rewrite.

The hardest part wasn't technical. It was convincing people that not rewriting everything was the right call, and the benchmarks did most of that work. I'd benchmark earlier next time to shorten the debate. For an agent platform the same instinct applies: agree up front on what evidence (latency, eval scores, cost per call) justifies adding a new abstraction, instead of building it because it seems elegant.

---

## Story 3: Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built end to end." / "What's the biggest system you've owned?" / Good base for the work presentation.

In 2016 I cofounded Alaya, an employee purpose and engagement platform, and we had no product and no customers. My job was to architect and build the whole platform, alone at first and then with a small team, while the business side was signing its first enterprise clients. I chose a deliberately plain stack, Node.js, React and PostgreSQL, because I wanted something that could scale without me over-engineering it for problems we didn't have yet. The core features were ready to demo in about three months. Over the following years we expanded into multi-tenancy, an API layer, impact reporting and postal campaigns, and I hired and onboarded the first three engineers, setting up CI/CD, code review habits and architecture docs as we went. We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired us in 2021.

Two things I'd change. Observability came too late; we added proper APM well after we needed it, and I'd put tracing in from the first deploy now, which matters even more with agents, where you need to see every tool call and retrieval step to debug anything. I also underestimated the cost of retrofitting multi-tenancy, so today I'd design tenant boundaries on day one. For a platform serving 20+ agents across different product lines, that isolation question comes up early.

---

## Story 4: Joining a much larger org after the acquisition

**Likely questions:** "Tell me about working in a large organization." / "How do you ramp up in a new codebase?" / "Tell me about cross-functional collaboration."

After the acquisition I joined Benevity as a Senior Staff Engineer in an engineering org about ten times the size of Alaya, with a Java and microservices codebase and processes I didn't know. The job was to fold Alaya's capabilities into Benevity's platform while still shipping new features, without losing the pace we'd had as a startup. I spent the first month mapping the existing architecture before proposing anything, and built relationships with the platform and infra teams before I started pushing technical opinions. Over time I became the cross-team architecture contact for the Europe-facing product surface and drove the AI tooling adoption in Story 1. Core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

Honestly, I moved too fast at the start and tried to fix things that weren't broken. Slowing down and listening made me more effective, and it's the approach I'd take at Wolters Kluwer too, since a central platform team has to earn trust from product, UX and clinical domain experts before it gets to set conventions.

---

## Gaps to prepare for honestly

- **Clinical and regulated domains.** No healthcare background. Be direct about it and talk about how I'd work with physician editors on eval sets and failure definitions, rather than pretending familiarity.
- **Terraform, Rust, Azure.** Most of my infra is AWS, Docker and Kubernetes. Say so, and point to how quickly I've picked up new stacks before (Java at Benevity).
- **LangGraph, MCP and A2A.** Revise these before the systems design round so the vocabulary is fresh, and only claim what I've actually built.
