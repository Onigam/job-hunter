# STAR+R Stories: CTO, Stealth Startup (AI systems for traditional industries)

This role is a technical cofounder seat: first engineer, client-facing from month one, building custom AI systems that have to become resellable products. Expect questions about building alone from zero, multi-tenant design, trade-offs under commercial pressure, and hiring and leading a small team. The four stories below cover those.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built end to end." / "How do you handle ambiguity?" / "What's the hardest thing you've built?" (this one answers their application prompt directly)

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no engineering team; it was me and a business side that was already talking to its first enterprise prospects.

**Task.** My job was to build the whole platform, first on my own and then with a small team, fast enough that the commercial side had something real to sell, without painting us into a corner we couldn't get out of later.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed to move quickly and I knew it would hold up past the first few clients. The core features were in front of a prospect within about three months. From there the platform grew in layers as clients asked for things: an API layer, impact reporting, postal campaigns and, eventually, proper multi-tenancy. When it was clear I couldn't carry it alone, I hired and onboarded the first three engineers and set up the basics that let a small team move without stepping on each other: CI/CD, a code review habit, and architecture notes that someone new could actually read.

**Result.** Alaya went into production with 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian company valued at over $1B, in 2021. The acquisition was, in a practical sense, an external audit of the technical choices we'd made along the way.

**Reflection.** Two things I'd do differently. Observability came too late; we only added proper APM once problems were already hurting us. And multi-tenancy was retrofitted rather than designed in, which cost us far more than building it on day one would have. That second lesson is exactly why the "resellable from the first commit" line in your posting resonated with me.

---

## 2. Designing for many clients when the first ones are already live

**Likely questions:** "Have you designed multi-tenant or productized software?" / "How would you stop custom builds turning into one-off forks?"

_Note: the star bank only records that multi-tenancy was retrofitted late and was costly. The specifics in the Action below are a reasonable reconstruction; check them against what actually happened and correct anything that doesn't match before using this story._

**Situation.** At Alaya, the early product was built around the needs of our first few enterprise clients. As we signed more, each one wanted its own configuration, its own reporting, and strict separation of its employees' data from everyone else's.

**Task.** I had to turn a platform that had grown client by client into something that could serve many tenants from one codebase, while those clients were live and using it every day.

**Action.** I started by working out what genuinely varied between clients and what only looked different, because a lot of the "custom" requests turned out to be the same need phrased differently. The real variation went into configuration per tenant rather than into code branches. Data isolation was the part I was least willing to compromise on, so I treated it as a hard boundary in the data model rather than something enforced by convention in application code. The migration happened incrementally, client by client, so that no single change could take everyone down at once.

**Result.** The platform scaled from a handful of clients to 50+ on a single codebase, and that multi-tenant base was part of what made it a credible acquisition target for Benevity rather than a collection of bespoke deployments.

**Reflection.** It worked, but it was expensive, and most of the cost came from doing it late. In a company like yours, where every build is meant to be resold, I'd make the tenant boundary and the configuration model the first design decision on the first project, before a single client-specific feature gets written.

---

## 3. Choosing not to rewrite under investor pressure

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you balance delivery against long-term architecture?" / "How do you explain technical decisions to non-technical people?"

**Situation.** Later at Alaya, our monolith was starting to crack under load. The engineers were split between a full microservices rewrite and keeping a modular monolith, and our investors wanted new features, not a rewrite they couldn't see.

**Task.** I needed a decision I could defend to both sides: one that fixed the real scaling problem without stopping feature delivery for months.

**Action.** Rather than settle it in a meeting, I ran a two-week spike and load-tested prototypes of both approaches. I took the results to the leadership team and investors as numbers, not opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and agree in advance on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in about six weeks. The busiest endpoints got roughly 40% faster, the rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the right answer took more energy than the engineering did. Data settled it. Next time I'd benchmark earlier and shorten the debate. It's also the kind of conversation I'd expect to have with your founders and clients regularly, where the question is how little we can build to solve the real problem.

---

## 4. Getting two teams to adopt AI tooling without being their manager

**Likely questions:** "How do you lead and influence engineers?" / "How would you build and lead the team as projects scale?" / "What's your hands-on experience with AI in production workflows?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how our engineers worked, but the two teams I wanted to bring along didn't report to me.

**Task.** I had to change daily engineering habits across both teams without any authority to mandate it.

**Action.** I started small, with three engineers who were already curious. I built internal demos that showed time saved on real work rather than toy examples, and ran informal lunch sessions where there was no mandate, just "here's what this did on last week's PR." I wrote reusable prompt templates and committed them to a shared repo so people didn't have to start from scratch, and I kept a record of concrete wins, like a PR review cycle that came down by about two hours.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted code review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the engineers who adopted it on their own terms became its advocates. As a CTO hiring a first team, I'd keep the same instinct: explain why, show it working on real code, and let good practice spread through the people who are already convinced.

---

## Gaps to prepare for honestly

- **Spanish.** The posting requires fluent Spanish for client work from month one. Decide before the first call how to answer this truthfully; don't let it come up for the first time in front of a client.
- **Construction, proptech, 3D/visual generation.** These are nice-to-haves and I haven't worked in any of them. Say so plainly and point to how quickly Alaya had to learn enterprise HR and CSR buyers.
- **AI depth.** They ask about generative models, agents, retrieval, orchestration, evaluation and cost control. Be ready with specific examples from Benevity work on LLM integration, embeddings, semantic search and multi-agent workflows, and only claim what I've actually shipped.
