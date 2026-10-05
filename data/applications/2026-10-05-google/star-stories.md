# STAR+R Stories: Google, Staff Software Engineer, Generative AI, Commerce

Google's behavioral round ("Googleyness and Leadership") for Staff roles leans on influence without authority, navigating ambiguity, cross-team alignment in a matrixed org, and technical judgment. The four stories below map to the posting's responsibilities: technical leadership, coaching distributed teams, aligning teams on goals and timelines, and shipping large-scale systems. A short prepared answer for the ML infrastructure gap follows at the end, because it will come up.

---

## 1. Influencing without authority: AI-assisted engineering at Benevity

**Likely prompts:** "Tell me about a time you changed how a team worked without being their manager." / "How do you coach engineers who don't report to you?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how fast the teams around me could ship, but the two teams I wanted to bring along didn't report to me, and a few engineers were openly skeptical about putting generated code into review.

**Task.** My goal was to get AI tooling into people's daily workflow in a way that stuck, without a mandate and without becoming the person who nags everyone about a new tool.

**Action.** I started small, with three engineers who were already curious, and worked alongside them on real tickets rather than toy demos. Once we had a few concrete wins, like a PR review cycle that came in about two hours shorter, I ran informal lunch-and-learn sessions where I mostly showed the work and let people ask hard questions. The prompt templates we'd refined went into a shared repo so anyone could pick them up and change them. I never asked a team lead to require any of it.

**Result.** Within about three months, roughly 70% of engineers across both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead for the org.

**Reflection.** Skipping the mandate made it slower, but it stuck. The early adopters became the advocates, which was far more convincing than anything I could have said. At Google's scale I'd add a lightweight way to measure the effect from the start, because "people like it" doesn't survive a planning review.

---

## 2. A hard architecture call under delivery pressure

**Likely prompts:** "Tell me about a significant technical trade-off you made." / "How do you decide when to pay down technical debt?"

**Situation.** At Alaya our monolith was starting to crack under load. Half the team wanted a full microservices rewrite, and investors wanted new features, not a rewrite. Both sides had a point, and the debate was eating weeks.

**Task.** I had to make a decision I could defend with data, one that protected long-term scalability without stalling the roadmap.

**Action.** I ran a two-week spike that prototyped both approaches and put them under load tests, then took the numbers to leadership and investors instead of opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first and keep everything else in the monolith. We also wrote down explicit criteria for when another module would earn its own service, so the next argument would be shorter.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got around 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the ambitious option turned out to be the hardest part. Data ended that argument. I'd benchmark earlier next time and save the team a couple of weeks of debate.

---

## 3. Working inside a much larger, matrixed organization

**Likely prompts:** "Tell me about a time you had to align several teams with different priorities." / "How do you ramp up in an unfamiliar codebase and culture?"

**Situation.** After Benevity acquired Alaya in 2021, I went from a small team where I knew every line of code to an engineering org around ten times bigger, with a Java microservices stack, different processes and teams that had their own roadmaps.

**Task.** We needed Alaya's capabilities folded into Benevity's platform while new feature work kept moving, without losing the speed we'd had as a startup.

**Action.** For the first month I mostly mapped the existing architecture and asked questions before proposing anything. I put real time into the platform and infra teams, because every integration path ran through systems they owned. Once there was some trust, I started bringing concrete proposals to cross-team architecture discussions and became the liaison for the Europe-facing product surface, which meant translating between teams that didn't share context.

**Result.** The core Alaya features were migrated onto Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Slowing down to listen made me noticeably more effective. It's the lesson I'd carry into Google Commerce, where Search, Gemini, Payments and merchant teams all touch the same shopping journey.

---

## 4. Building a platform from zero through to acquisition

**Likely prompts:** "Tell me about the most complex system you've built end to end." / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no team, and the business side was already talking to its first enterprise prospects.

**Task.** I had to design and build the whole platform, first alone and then with a team, fast enough to support enterprise sales without painting us into a corner.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, so we could move quickly without over-engineering. The core features were ready for a first demo within about three months. From there the platform grew in layers: multi-tenant architecture, an API layer, impact reporting, postal campaigns. As the team grew I hired and onboarded the first three engineers and set up CI/CD, code review habits and architecture docs, so the codebase didn't depend on my memory.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian unicorn valued above $1B, in 2021.

**Reflection.** I'd have invested in observability much earlier, since we only added proper APM late. Multi-tenancy also cost far more to retrofit than to design in, and I'd build for it from day one. Both lessons apply directly to agentic checkout, where you need to see exactly what an agent did and on whose behalf.

---

## Prepared answer: the ML infrastructure gap

The posting asks for five years leading ML design and optimizing ML infrastructure, including fine-tuning and model deployment. Don't dodge it, and don't stretch the truth.

> "I'll be direct. My background isn't training or fine-tuning infrastructure. Where I've gone deep is the layer around the model: integrating LLMs into production systems, multi-agent and tool-calling workflows, semantic search with embeddings, and the platform work that makes all of that reliable and observable. For agentic commerce, a lot of the hard problems sit exactly there, in tool permissions, state across sessions, evaluation of agent behavior and failure handling at checkout. I'd expect to partner closely with the people who own model infrastructure, and I learn unfamiliar stacks quickly. I went from a startup Node codebase to Benevity's Java microservices and was contributing to cross-team architecture within months."

If the recruiter signals this is a hard filter for L7, ask openly whether the team would consider an L6 conversation with a clear path, rather than letting the process quietly stall.
