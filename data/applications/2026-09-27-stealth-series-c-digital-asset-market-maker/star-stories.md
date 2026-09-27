# STAR+R Stories: Stealth (Series C digital-asset market maker), Deputy CTO

The role is the CTO's operational partner: running a global engineering cadence (OKRs, monthly reviews, delivery pipelines), a multi-year consolidation of trading infrastructure across 80+ venues and 1,400+ markets, group data pipelines, MiCA/DORA/SOC 2 execution, budget and M&A integrations. The interview loop goes Talent Partner, then a CTO deep-dive, then ExCo alignment, then a presentation to leadership. Expect behavioural questions on operating models, platform consolidation, integration after acquisitions, influencing senior peers, and explaining technical risk to non-engineers.

**Honest gaps, prepare for them rather than dodge them.** The posting asks for low-latency distributed systems and algorithmic trading experience, digital-asset knowledge (CEX/DEX, custody, settlement), Rust, and hands-on MiCA/DORA/SOC 2 delivery. I don't have direct trading, Rust or crypto-regulatory experience, and I haven't run an org of 200+. Don't stretch a story to cover any of that. The pitch is: the CTO owns the trading depth, I own the machine around it (cadence, consolidation, integration, controls-by-design as an engineering habit), and I learn the domain fast. Before the CTO interview, do real homework: read the DORA ICT risk and third-party requirements, the MiCA obligations for CASPs, and SOC 2 trust criteria, and be ready to say how I'd turn them into engineering backlog items and review gates.

---

## Story 1: Building Alaya from a blank page to an acquisition

**Likely questions:** "Tell me about an engineering operating model you built." / "How do you set up delivery practices from scratch?" / "What did you learn scaling a team?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no team. The business side was already talking to large enterprise prospects, so the platform had to exist before we could sell it.

**Task.** As Head of Technologies I had to design and build the whole platform, alone at first, then grow a team around it without losing the speed we needed to land early clients.

**Action.** I picked a deliberately boring stack (Node.js, React, PostgreSQL) that I knew would carry us further than we needed at the start, and got a demoable core built in roughly three months. From there the platform grew in layers: multi-tenancy, an API layer, impact reporting, postal campaigns. When I hired the first three engineers, I put the operating basics in place early, CI/CD, a real code review culture and written architecture docs, because I'd seen what happens when a small team tries to add those later under pressure.

**Result.** Alaya went into production with more than 50 enterprise clients across Switzerland and France, and in 2021 it was acquired by Benevity, a Canadian unicorn valued above $1B. The technical due diligence held up, which is about as direct a test of early engineering decisions as you get.

**Reflection.** I'd have put proper observability in much earlier; APM came late and we flew blind on a few incidents. Retrofitting multi-tenancy also cost more than designing for it upfront would have. For a trading platform both lessons are even sharper: telemetry and isolation between divisions are day-zero requirements, not later improvements.

---

## Story 2: Integrating an acquired product into a much larger platform

**Likely questions:** "Tell me about an M&A integration." / "How do you walk into a bigger org and change things?" / "How would you approach your first 90 days here?"

**Situation.** After the acquisition, I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya, the codebase was Java and microservices rather than our Node stack, and the processes and culture were different in almost every way.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, and without the acquired team losing the momentum it had.

**Action.** For the first month I mostly mapped. I read the architecture, sat with the platform and infrastructure teams, and asked why things were the way they were before I proposed anything. Once I had some credibility with those teams, I started pushing on specific decisions, and over time I became the cross-team architecture contact for the Europe-facing product surface. The migration itself went feature by feature rather than as one big cutover.

**Result.** Alaya's core features were migrated into the Benevity platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** My first instinct was to fix things that weren't actually broken, and that cost me some goodwill early on. Listening first made me more effective. That's also how I'd start as a Deputy CTO: the first weeks go into understanding each division's delivery rhythm and constraints before any unified cadence gets imposed.

---

## Story 3: Consolidating a platform without a big-bang rewrite

**Likely questions:** "Tell me about a hard architecture trade-off." / "How would you approach consolidating our trading infrastructure?" / "How do you balance platform work against business pressure?"

**Situation.** At Alaya the monolith was starting to strain on a handful of high-traffic endpoints. Part of the team wanted to rewrite everything as microservices. Investors wanted features, and honestly they had a point.

**Task.** Make a call I could defend to both engineers and investors, one that fixed the scaling problem without freezing delivery.

**Action.** Rather than argue about it, I ran a two-week spike that prototyped both approaches and load-tested them. I brought the results to leadership and investors as numbers, not preferences. The proposal was a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any further module would earn its own extraction.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got around 40% faster. The rest of the monolith stayed stable right through the acquisition, and nobody had to live through a rewrite.

**Reflection.** The hardest part was persuading people that not rewriting everything was the ambitious choice. Data ended the debate; I'd benchmark even earlier next time. The same pattern maps onto the venue consolidation in this role: pick the venues or services where unification pays off most, prove the latency and cost gains, and let published criteria decide what moves next.

---

## Story 4: Changing how teams work without authority over them

**Likely questions:** "How would you get divisional VPs to adopt a common cadence?" / "Tell me about influencing without authority." / "How do you drive org-wide change?"

**Situation.** At Benevity I was an IC with no direct reports. I was convinced AI-assisted development would save two engineering teams real time, but neither team reported to me and nobody had asked for it.

**Task.** Get both teams to change how they worked day to day, in a way that would last after I stopped pushing.

**Action.** Instead of writing a proposal, I started with three engineers who were already curious and built small demos on their real code, so the savings were concrete. After a handful of examples (one PR review cycle came out about two hours shorter), I ran informal lunch-and-learns with no attendance expected. We kept the prompt templates that worked in a shared repo and I wrote up the results, including where the tools produced confident nonsense.

**Result.** Within about three months, roughly 70% of engineers across both teams were using AI-assisted review and generation, and I became the informal AI tooling lead for the org.

**Reflection.** It was slower than a mandate, but it stuck because the adopters argued for it themselves. A Deputy CTO does have formal authority, yet I'd still roll out a unified OKR and review cadence this way: pilot it with one division that wants it, show the results, then extend it, rather than decree it across every division on day one.

---

## Prepared answer: "You haven't worked in trading or with MiCA/DORA. Why you?"

Don't turn this into a story. Say it plainly: the CTO already brings the trading and systems depth, and this role is about running the organisation around that depth. I've built an engineering org from nothing, taken it through an acquisition, integrated it into a platform ten times its size, and moved teams that didn't report to me. On regulation, the engineering side of DORA and SOC 2 is mostly disciplined change management, incident handling, third-party oversight and evidence you can produce on demand, which are habits I'd build into the delivery pipeline rather than bolt on at audit time. Then be specific about what I'd need to learn in the first 90 days and who I'd learn it from.
