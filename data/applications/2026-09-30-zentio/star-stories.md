# STAR+R Stories: Zentio, Founding Engineer (Berlin)

Zentio is three cofounders (Julian Rose, Immo Polewka, Christophe Kafrouni), a €1.4M pre-seed led by HTGF, and a product that has to pull messy ERP/MES data into a planning UI that factory people trust. Expect questions on shipping alone end to end, Postgres and data modelling calls, how you actually use AI in your workflow, and how you'd cope with a domain you don't know yet. The four stories below cover those. Tell them out loud a few times; don't memorise them word for word.

---

## 1. Building Alaya from a blank page to acquisition

**Likely question:** "Tell me about something you built from scratch" / "How do you handle ambiguity?" / "Why should we trust you as engineer number one?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, and the business side was already talking to its first enterprise prospects.

**Task.** My job was to build the whole platform, alone at first, and get it in front of those clients before the conversations went cold. After that, it had to hold up while we grew.

**Action.** I picked a stack I knew would carry us without clever infrastructure: Node.js, React and PostgreSQL. The first three months went into the core features we needed for a real demo, and I kept the scope brutal, because a half-finished feature in front of an enterprise buyer is worse than a missing one. Once we had traction, I expanded in layers: a multi-tenant architecture, an API layer, impact reporting, postal campaigns. When we could hire, I brought on the first three engineers and set up the things I didn't want to retrofit later, CI/CD, code review habits and short architecture docs so people could make decisions without asking me every time.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and Benevity (a Canadian unicorn valued at $1B+) acquired Alaya in 2021. Their technical due diligence was, in practice, a review of the decisions I'd made from day one.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM once the pain was obvious, and I'd put basic tracing and metrics in from the first deploy now. And retrofitting multi-tenancy cost us more than designing for it would have. For Zentio, the parallel is obvious: every factory is a tenant with its own ERP quirks, so I'd want tenant isolation and per-customer integration config in the schema from week one.

---

## 2. Choosing a modular monolith over a rewrite

**Likely question:** "Tell me about a hard technical trade-off" / "How do you handle tech debt under delivery pressure?" / "How do you make database and performance decisions?"

**Situation.** A few years into Alaya, the monolith was showing cracks on its busiest endpoints. Half the team wanted a full microservices rewrite. Investors wanted new features, not a rewrite.

**Task.** I had to make a call we could defend on both fronts: fix the scaling problem without stopping delivery for months.

**Action.** Rather than argue it in meetings, I ran a two-week spike and prototyped both approaches with load tests, so the discussion could be about numbers. The data pointed to a strangler fig migration. We'd pull out the two highest-traffic modules first and leave everything else in the monolith, with written criteria for when another module earned extraction. I presented that trade-off to the leadership team and the investors with the benchmark results, not opinions, and then led the first extraction myself.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was convincing people that not rewriting everything was the right answer. Data settled it. Next time I'd benchmark earlier and cut the debate shorter. At Zentio I'd expect the same pattern in a different form: the temptation to split into services early, when a well-indexed Postgres schema and a clean module boundary would carry a small team much further.

---

## 3. Getting two teams to adopt AI-assisted development without authority

**Likely question:** "What's your thesis on AI-first development?" / "How do you actually use AI when you code?" / "How do you influence people who don't report to you?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how fast our teams shipped, but the two teams I wanted to bring along didn't report to me, and plenty of people were sceptical.

**Task.** Change how engineers actually worked, day to day, without a mandate.

**Action.** I started small, with three engineers who were already curious, and worked with them on real tickets rather than toy examples. The internal demos I built showed concrete time saved on things people hated doing, like PR review cycles; one of them saved about two hours on a single review loop, and that anecdote travelled further than any slide. There were informal lunch-and-learn sessions, no attendance expected. I wrote reusable prompt templates and put them in a shared repo so nobody had to start from zero, and I kept notes on what worked and what didn't, because the failures were as useful as the wins.

**Result.** Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org. Beyond that, I've been building LLM integrations and multi-agent workflows in production, which is where my view of AI-first development really formed.

**Reflection.** Going mandate-free was slower but it stuck. People who adopted it on their own terms defended it to their peers, which a top-down rule would never have produced. My thesis now is simple: AI makes a small team fast only if the codebase is legible, with typed boundaries, good tests and clear schemas. At a three-person startup, that's a discipline, not a luxury.

---

## 4. Joining an organisation ten times bigger after the acquisition

**Likely question:** "Tell me about working in an unfamiliar codebase or domain" / "How do you ramp up on something you don't know?" (useful for the "you've never worked in manufacturing" follow-up)

**Situation.** After Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of ours. Different culture, a different codebase in Java and microservices, and different ways of making decisions.

**Task.** Integrate Alaya's capabilities into Benevity's platform while still shipping new features, without losing the speed we'd had as a startup.

**Action.** I got it wrong first. Early on I moved too fast and tried to fix things that weren't broken, which didn't land well. So I reset: I spent about a month mapping the existing architecture before proposing anything, and I built relationships with the platform and infra teams before pushing technical opinions. Over time I became the cross-team architecture liaison for the Europe-facing part of the product.

**Result.** We migrated Alaya's core features into Benevity's platform. I contributed to three major cross-team architecture decisions, and that liaison role stuck.

**Reflection.** Listening first made me more effective, not slower. That's how I'd walk into a factory too. I haven't worked in manufacturing, so I'd want to sit with a planner or shift lead early, watch how they actually use their Excel schedule, and learn what "a plan we trust" means to them before I design the Gantt view. The Sagemcom years, building software for telecom set-top boxes, at least taught me to respect hardware and physical constraints that software can't argue with.

---

## Questions to have ready for them

- Which ERP/MES systems are your pilot customers on, and how do you get data out today: APIs, database access, file drops?
- Is the planning view on the Canvas API already, or is that a decision the founding engineer makes?
- How do the solver and ML pipelines (Christophe's side) talk to the product layer? Who owns that contract?
- What does "AI-first development" look like in your repo today?
- Onsite expectations in Berlin: days per week, and is a Geneva start with regular travel an option?
