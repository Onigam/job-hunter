# STAR+R Stories: Stealth Startup, Founding CTO / Co-Founder (European AI Infrastructure)

A co-founder interview isn't a normal loop. Expect the founder to probe three things: can you build the first version alone, will you tell me when I'm wrong, and will you still be here when there's no money. These stories are picked for that, plus short answers to the three questions in the posting.

---

## Story 1: Building Alaya from a blank page to acquisition

**Likely questions:** "What's the most significant system you've built and owned?" / "How do you work with no resources and no process?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no engineering team, just a business cofounder who was already talking to enterprise prospects.

**Task.** My job was the whole technical side: pick the stack, build the product, and keep up with whatever the first clients needed to sign.

**Action.** I went with Node.js, React and PostgreSQL because I could move fast in them and none of it would box us in later. The first demoable version took about three months. After that it was a steady loop of expanding what customers were asking for: an API layer, impact reporting, postal campaigns, and eventually multi-tenancy once we had enough enterprise clients that separate setups stopped being manageable. When the workload outgrew me, I hired the first three engineers and put in the basics I'd been skipping: CI/CD, code review, and written architecture notes so I wasn't the only person who knew why things were the way they were.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity acquired Alaya in 2021. Their due diligence went through the platform, and it held up.

**Reflection.** Two things I'd do differently, and both matter for an AI gateway. Observability came late at Alaya, and for a product that sits on every request of a customer's app, it has to be there from the first deploy. I'd also design for multi-tenancy on day one; retrofitting it cost us far more than building it in would have.

---

## Story 2: Choosing not to rewrite, under investor pressure

**Likely questions:** "Tell me about a hard technical trade-off." / "When did you push back on a decision?"

**Situation.** A few years into Alaya, the monolith was starting to crack under load. Half the team wanted a full microservices rewrite. Investors wanted new features, not a rewrite of anything.

**Task.** I had to make a call that we could defend both to the engineers and to the people funding us, without freezing delivery.

**Action.** Rather than settle it in a meeting, I ran a two-week spike comparing both approaches with prototype load tests. Then I took the numbers to the leadership team and investors. My proposal was a strangler fig approach: pull out the two highest-traffic modules, leave everything else in the monolith, and write down the criteria that would justify extracting anything further. That last part mattered, because it turned "should we split this?" from a recurring argument into a checklist.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The monolith stayed stable through the acquisition, and we never needed the big rewrite.

**Reflection.** The hardest part wasn't technical. It was persuading people that not rewriting was a real decision and not a lack of ambition. Data ended that debate, and I'd benchmark earlier next time to end it sooner. For this role, it's also my honest answer to "will you challenge me?" Yes, but with numbers, and I'll write down what would change my mind.

---

## Story 3: Getting two teams onto AI tooling without any authority

**Likely questions:** "How would you build an engineering organisation?" / "How do you drive adoption of something new?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development in their daily work.

**Task.** Change how people worked without being able to tell anyone to do it.

**Action.** Mandates weren't an option, so I started with three engineers who were already curious. We built small internal demos that showed time saved on real work, like cutting roughly two hours from a PR review cycle. Those turned into informal lunch sessions. I also put reusable prompt templates in a shared repo so nobody had to start from a blank prompt, and kept track of what actually saved time and what didn't.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** It was slower than a top-down rollout would have been, but it stuck, because the people who adopted it did the persuading for me. It's also how I'd sell an AI gateway to platform teams: start with the engineers who already feel the pain of five provider SDKs and no cost visibility, and let them bring in their security team.

---

## Story 4: Joining an organisation ten times our size after the acquisition

**Likely questions:** "What do you know about enterprise readiness?" / "Tell me about a time you were wrong."

**Situation.** After the acquisition in 2021 I moved into Benevity as a Senior Staff Engineer. The organisation was about ten times Alaya's size, ran Java microservices rather than our Node stack, and had processes we'd never needed.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new work.

**Action.** My first instinct was to fix things quickly, and some of what I tried to fix wasn't broken. I backed off, spent about a month mapping the architecture, and got to know the platform and infrastructure teams before pushing opinions. From there I became the cross-team architecture contact for the Europe-facing product.

**Result.** Core Alaya features were migrated into the Benevity platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** Listening first made me more useful, not less. It's also where I learned what enterprise buyers actually check: access control, audit trails, data residency and who can see what. That list is basically the governance feature set of the product you're describing.

---

## Short answers to the three questions in the posting

**Most significant system built or owned.** Alaya's platform, from the first commit to 50+ enterprise clients and an acquisition by Benevity. I'd talk through Story 1 and the multi-tenancy retrofit in particular, since tenant isolation is the heart of a gateway product.

**Why founding over another senior role.** I've done both. The senior staff years at Benevity taught me a lot about scale and influence, but the work I'm proudest of is Alaya, where I owned the result and not just a slice of it. AI infrastructure is also where my last few years of work have been heading anyway, with LLM integration, multi-agent workflows and semantic search.

**Conditions for committing as a co-founder.** An agreed equity split before any real build starts, vesting that applies to both founders, a written funding or revenue milestone that triggers salaries, a clear say on technical decisions and a board seat once there's a board, and a few weeks working together on something real before either of us signs. I'm Geneva-based and would work remotely with regular time in London.
