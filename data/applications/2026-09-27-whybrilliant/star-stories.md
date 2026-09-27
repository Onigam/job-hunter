# STAR+R Stories: WhyBrilliant, Founding Engineer

WhyBrilliant is at pre-seed (€1M from Merantix Capital, June 2026), founded in 2026 by Patrick Böert and Aleksander Heimrath. The first engineer will own everything from the Next.js front end to the Python services, the LLM pipeline, voice and candidate data security. Expect the founders to probe three things: can you ship 0→1 alone, can you set standards others will inherit, and how do you handle the parts of the stack you haven't touched (voice, Langfuse).

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." "How do you handle ambiguity?" "What does your first 90 days look like here?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no codebase, just a business side that was already talking to enterprise clients and needed something to show them.

**Task.** My job was the whole platform. I was the only engineer at first, so architecture, delivery, infrastructure and later hiring all sat with me, and I had to get to a credible demo before the sales conversations went cold.

**Action.** I picked a stack I knew would hold up without clever engineering: Node.js, React and PostgreSQL. The first three months went into the core features we needed for a demo, and nothing else. Once clients started signing, I built out the multi-tenant architecture, an API layer, impact reporting and postal campaigns. When I hired the first three engineers, I set up CI/CD, a code review habit and written architecture docs, so the way we worked didn't live only in my head.

**Result.** The platform went into production with 50+ enterprise clients across Switzerland and France, and Benevity (a Canadian unicorn valued at over $1B) acquired Alaya in 2021. The technical decisions from those first months held up through due diligence.

**Reflection.** Two things I'd do differently, and both matter for WhyBrilliant. We added proper APM late, and I'd put tracing and monitoring in from week one; here that means Langfuse and Sentry on the first LLM call, not after the first incident. I also underestimated how painful it is to retrofit multi-tenancy and data isolation. With sensitive candidate data, I'd design the isolation and access model on day zero.

---

## 2. Choosing not to rewrite

**Likely questions:** "Tell me about a technical trade-off under pressure." "How do you handle technical debt when the business wants features?"

**Situation.** A few years into Alaya, our monolith was showing cracks on the busiest endpoints. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted features, not a rewrite.

**Task.** I had to make a call I could defend to engineers and to the business, one that fixed the scaling problem without stopping delivery.

**Action.** Rather than argue it in meetings, I ran a two-week spike and prototyped both approaches with load tests. I took the trade-offs to the leadership team and investors as numbers. What I proposed was a strangler fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and agree in writing on the criteria that would justify extracting anything more.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable right through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part was convincing people that not rewriting was the right answer. Data did it in the end, and I'd benchmark earlier to shorten the debate. At a pre-seed company the same instinct applies in reverse: start with one deployable Python service and one Next.js app, and only split things when there's a measured reason to.

---

## 3. Getting two teams to change how they work, without authority

**Likely questions:** "How do you set engineering standards?" "How do you influence people who don't report to you?" "How do you use AI in your own workflow?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of them mine, to adopt AI-assisted development in their daily work.

**Task.** The goal was to change habits, not to get people to try a tool once. A mandate wasn't an option, and I doubt it would have worked anyway.

**Action.** I started with three engineers who were already curious. We built small internal demos around real tasks from their backlog, so the time savings were concrete rather than theoretical. After that came informal lunch and learn sessions, plus a shared repo of prompt templates people could copy and improve. Whenever a result was worth sharing, like a PR review cycle that came in about two hours shorter, I wrote it up.

**Result.** Within three months, about 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it lasted, because the people who adopted it on their own terms argued for it better than I could. As founding engineer I'd be setting the standards myself, and I'd still write them down early and keep them small enough for the second and third hires to challenge.

---

## 4. Learning a codebase ten times bigger, fast

**Likely questions:** "Tell me about working in an unfamiliar environment." "Our stack includes things you haven't used. How would you ramp up?"

**Situation.** After the acquisition in 2021, I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, the codebase was Java microservices rather than our Node.js stack, and the culture and processes were different too.

**Task.** I had to integrate Alaya's capabilities into Benevity's platform without losing the product velocity that made us worth acquiring.

**Action.** The first month went into mapping the existing architecture before I proposed anything. I built relationships with the platform and infra teams before pushing technical opinions, and I took on the role of cross-team architecture liaison for the Europe-facing product surface.

**Result.** We migrated the core Alaya features into Benevity's platform. I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Early on I moved too fast trying to fix things that weren't broken. Listening first made me more effective, and that's how I'd approach the voice stack here. I haven't shipped a production ElevenLabs pipeline, so my plan would be a thin end-to-end slice in week one (audio in, transcript, LLM turn, speech out, all traced in Langfuse), with latency measured at each hop before optimising anything.

---

## Honest answer if they push on the voice and observability gap

"I haven't run a production voice pipeline, and I haven't used Langfuse specifically. What I have done many times is own a system end to end where I didn't know every piece on day one, and I've built LLM integrations and multi-agent workflows recently. For voice, I'd expect the hard parts to be turn-taking latency and failure handling mid-conversation, not the SDK itself, and I'd want both measured before we tune anything."
