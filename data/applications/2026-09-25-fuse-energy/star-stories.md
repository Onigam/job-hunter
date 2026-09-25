# STAR+R Stories: Fuse Energy, Senior/Lead Backend Engineer

The posting asks for three things above all: defining and building complex systems, shipping highly available production systems, and owning projects while driving change. These four stories cover that ground. Energy is a gap, so expect a question on how you'd ramp into a new domain; story 2 is the best answer to that.

---

## 1. Building a platform from zero

**Likely question:** "Tell me about a complex system you defined and built end to end." / "How do you handle ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, and the business side was already talking to its first enterprise prospects.

**Task.** My job was to design and build the whole platform, alone at first and then with a small team, fast enough to support those first deals without painting us into a corner later.

**Action.** I picked a stack I knew would hold up without heroics: Node.js, React and PostgreSQL. The first three months went into getting the core features to a state we could demo. After that the work was mostly about widening the foundations as clients arrived, so we added an API layer, impact reporting and eventually a multi-tenant architecture. Once there was enough work to justify it, I hired the first three engineers and put the basics in place for them: CI/CD, a real code review habit, and architecture docs someone could read on their first day.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired Alaya in 2021. The technical due diligence held up, which I took as a fair verdict on the early decisions.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM once problems were already hurting, and I'd put it in from week one now. Multi-tenancy was also retrofitted, and that cost more than designing for it upfront would have. For something like Fuse's consumption pipelines, I'd make the equivalent calls early: tracing and data quality checks from day one, and a clear model for late or corrected data before the first reading lands.

---

## 2. Joining a much larger system after the acquisition

**Likely question:** "Tell me about working in an unfamiliar codebase or domain." / "How do you drive change in an organisation?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, the stack was Java microservices rather than our Node.js platform, and the processes were completely different.

**Task.** We had to fold Alaya's capabilities into Benevity's platform while still shipping new features, and I didn't want us to lose the speed we'd had as a startup.

**Action.** I spent the first month mostly mapping the existing architecture and asking questions before proposing anything. I also made a point of getting to know the platform and infrastructure teams before I started pushing technical opinions at them. Once I understood how things fitted together, I became the architecture contact for the Europe-facing product surface, which meant sitting between several teams and making sure decisions were joined up.

**Result.** Alaya's core features were migrated into the Benevity platform, and I contributed to three major cross-team architecture decisions during that period.

**Reflection.** Early on I moved too fast and tried to fix things that weren't actually broken; they just weren't how I'd have done them. Slowing down and listening made me more useful. It's also how I'd approach energy: learn how settlement, metering and the third-party flows actually work before having strong opinions about the data model.

---

## 3. Choosing incremental extraction over a rewrite

**Likely question:** "Tell me about a significant technical trade-off." / "How do you balance delivery pressure with long-term architecture?"

**Situation.** At Alaya our monolith was starting to crack under load. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted new features, not a rewrite.

**Task.** I needed to make a call we could defend on both fronts: something that fixed the scaling problems without freezing delivery for months.

**Action.** Rather than argue it out, we ran a two-week spike with prototype load tests for both approaches. I took the numbers, not opinions, to the leadership team and investors. The proposal was a strangler fig migration: extract the two highest-traffic modules first, leave everything else in the monolith, and agree written criteria for when any other module would earn its own service.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part was persuading people that not rewriting everything was the right answer. Data settled it, but I'd benchmark earlier next time and cut the debate short. The same thinking applies to high-volume pipelines: split out the hot path when the numbers say so, not because the diagram looks cleaner.

---

## 4. Leading without formal authority

**Likely question:** "Tell me about a time you led people who didn't report to you." / Anything probing the "Lead" half of the title.

**Situation.** At Benevity I was an IC with no direct reports, but I wanted two teams that didn't report to me to adopt AI-assisted development practices.

**Task.** Change how engineers worked day to day without having any authority to tell them to.

**Action.** I started with three engineers who were already curious and worked with them until they had real results. From there I built small internal demos showing time saved on actual tasks, ran informal lunch-and-learn sessions with no mandate attached, and put reusable prompt templates in a shared repo so people could pick them up on their own. When someone saved a couple of hours on a PR review cycle, I wrote it down and shared it.

**Result.** Within about three months, around 70% of the engineers on both teams were using AI-assisted review and code generation, and I'd become the informal lead for AI tooling across the org.

**Reflection.** It was slower than a top-down rollout would have been, but it stuck. The engineers who came to it on their own terms ended up arguing for it better than I could have. I'd lead a small backend team at Fuse the same way: set the direction clearly, then let people own how they get there.
