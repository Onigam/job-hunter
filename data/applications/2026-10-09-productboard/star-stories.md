# STAR+R Stories: Productboard, Staff Full-stack Product Engineer

The posting asks for someone who owns the architecture that lets agents work well in the codebase: agent-friendly APIs and module boundaries, shared context for AI coding tools, AI code review, multi-step agent workflows in the product, and shipping AI-first features with PMs and designers. They also say they prefer former founders or founding engineers, and they're modernizing legacy Ruby into Kotlin. These five stories map onto that. Tell them out loud, and don't recite them.

---

## 1. Building a product from a blank page to an acquisition

**Likely questions:** "Tell me about something you built from scratch." / "What did being a founding engineer teach you?" / "How do you work with product and design when nothing is defined yet?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. We had no product and no customers, and the business side was already talking to enterprise prospects, so there was pressure from the first week.

**Task.** I owned everything technical: choosing the stack, building the first version, and later hiring the people who'd extend it with me.

**Action.** I picked Node.js, React and PostgreSQL because I could move fast on them without painting us into a corner, and got to a demo-ready version in about three months. After that the product grew outward with each customer conversation: an API layer, multi-tenancy once several enterprise clients shared the platform, impact reporting, postal campaigns. There was no PM for a long stretch, so I sat in on client calls and turned what I heard into the next sprint myself. When the first three engineers joined, I set up CI/CD, code review and short architecture docs so they could ship without queuing behind me.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired it in 2021. Their technical due diligence went through the platform we'd built, and it held up.

**Reflection.** I'd add proper observability much earlier; we brought in APM late and spent too long guessing at production issues. I'd also design for multi-tenancy from day one, because retrofitting it cost more than building it in would have. The part I'd keep is being close to customers. It's the same instinct Spark is built around, turning raw feedback into something an engineer can actually act on.

---

## 2. Drawing module boundaries in a system that had to keep shipping

**Likely questions:** "Tell me about a hard technical trade-off." / "How would you approach modernizing a legacy codebase?" / "How do you handle tech debt when the business wants features?"

**Situation.** At Alaya, our monolith started cracking under load on a handful of hot endpoints. Half the team wanted a full microservices rewrite, while investors wanted features and had no appetite for a rewrite at all.

**Task.** I had to make a call we could defend on both fronts, technically and commercially.

**Action.** Rather than settle it by opinion, I ran a two-week spike that compared both approaches with prototype load tests. I took the numbers to leadership and investors and proposed a strangler fig migration: pull out the two highest-traffic modules behind clear contracts, leave the rest in the monolith, and write down the criteria a module would have to meet before it earned its own service.

**Result.** The first extracted module shipped in six weeks. The busiest endpoints got roughly 40% faster, feature work kept going in parallel, and the remaining monolith stayed stable all the way through the acquisition. We never needed a big-bang rewrite.

**Reflection.** Convincing people that not rewriting everything was the ambitious option took more effort than the engineering, and data did most of that work. I'd benchmark earlier next time to cut the debate short. For Productboard's Ruby to Kotlin work, I'd add one thing I didn't think about then: a boundary with an explicit contract and a short doc next to it is exactly what makes an AI coding agent useful inside that module, so the migration and the agent-readiness work can share the same plan.

---

## 3. Getting two teams to adopt AI tooling without a mandate

**Likely questions:** "Tell me about influencing without authority." / "How do you drive adoption of a new practice?" / "How would you make AI code review stick across teams?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted code review and generation would help two engineering teams that didn't report to me, and a mandate wasn't on the table.

**Task.** Change how those engineers worked day to day, using nothing but persuasion and results.

**Action.** I started with three engineers who were already curious and built small internal demos with them, showing real time saved on their own pull requests rather than on toy examples. Lunch-and-learn sessions followed, purely voluntary. The prompt templates that worked went into a shared repo where anyone could reuse or improve them, and I wrote up concrete wins as they came in, things like a review cycle that dropped by around two hours.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because people who adopted on their own terms became the advocates. Productboard's AI Champions program looks like the structured version of what I did informally, and I'd want to work with it rather than around it. What I'd do differently is measure from the start. My evidence was mostly anecdotes, and a before/after on review turnaround would have made the case to leadership much faster.

---

## 4. Joining a much larger distributed platform after the acquisition

**Likely questions:** "Tell me about a time you had to work in an unfamiliar system." / "How do you build trust in a new org?" / "Tell me about cross-team architecture work."

**Situation.** After the 2021 acquisition I joined Benevity as a Senior Staff Engineer. The org was roughly ten times the size of Alaya, the stack was Java microservices instead of our Node.js platform, and the processes were completely different.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the speed we'd had as a startup.

**Action.** For the first month I mostly mapped how the existing services talked to each other before proposing any change. I got to know the platform and infra teams before pushing technical opinions on them. Once I understood where Alaya's features fit, I worked through the migration piece by piece, and over time I became the cross-team architecture contact for the Europe-facing part of the product.

**Result.** We migrated Alaya's core features onto Benevity's platform. I contributed to three major cross-team architecture decisions along the way and kept product work moving during the integration.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Slowing down and listening made me far more effective, and it's the approach I'd take at Productboard: learn why the Ruby and Kotlin pieces look the way they do before deciding where the agent-friendly boundaries should go.

---

## 5. Building a multi-agent workflow for my own work

**Likely questions:** "Tell me about your hands-on LLM experience." / "How do you manage context for an agent?" / "How do you know the output is any good?"

Be precise in this one about scale. This is personal tooling, not a production system with customers, so say so upfront, then show the depth of thinking.

**Situation.** Over the past year I've moved my own development onto multi-agent workflows with Claude CLI and OpenClaw. One concrete example is the system I use for my job search, which runs search, scoring, reporting and drafting as separate agents on a daily schedule.

**Task.** Get reliable, repeatable output from several agents running unattended, where a vague prompt or a bloated context quietly produces bad results.

**Action.** I split the work into agents with narrow jobs, each with its own instruction file, and kept a single structured profile as shared context instead of letting every agent improvise its own. Rules that kept getting broken, such as tone and formatting constraints, moved out of individual prompts into one project-level file every agent reads. Outputs go into dated folders under version control, so I can diff a day's run against the previous one and see when a prompt change made things worse.

**Result.** The pipeline runs daily and produces scored offers and draft documents that need editing rather than rewriting. More useful for this role, it taught me where agents fail: missing context, instructions that conflict across files, and output that looks right but isn't checked against anything.

**Reflection.** My evaluation is still mostly manual review and git diffs. The next step is proper evals, which is why the Braintrust and Pydantic AI parts of your stack interest me; I'd like to learn how you score agent output at product scale, where nobody can read every response.

---

## Questions to ask them

1. How far along is the Ruby to Kotlin modernization, and who decides where module boundaries land?
2. What does an eval look like for a Spark feature today, and who owns it?
3. How does this Staff role split time between shipping features and setting standards for the rest of engineering?
4. Where has AI code review helped so far, and where has it been noise?
