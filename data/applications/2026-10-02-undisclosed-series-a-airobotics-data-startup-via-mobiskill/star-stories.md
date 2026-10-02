# STAR+R Stories: Founding Engineer, Series A AI/robotics data startup (via Mobiskill)

The founder interview will probe three things: can you own the whole stack alone, can you ship fast without making a mess you'll regret, and do you actually work with AI agents day to day (the homework is a session log, so they'll ask about it). There's also an unspoken fourth question, since the posting targets 1 to 5 years: will a 17-year engineer still write code at founding-team speed? Every story below should quietly answer that one too.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about something you built from scratch." "How do you deal with ambiguity?" "Why should we trust you with the whole stack?"

**Situation.** In 2016 I co-founded Alaya, a platform for employee purpose and engagement. There was no product, no customers and no code, just a business side that was already talking to enterprise prospects and needed something to show them.

**Task.** My job was to build the whole platform, on my own at first, and keep it ahead of what sales was promising while we signed our first clients.

**Action.** I picked a stack I knew could carry us without heroics, Node.js, React and PostgreSQL, and resisted anything fancier. The first version of the core features was demo-ready in about three months. After that it grew in layers as clients asked for things: multi-tenancy, an API layer, impact reporting, postal campaigns. Once there was money for it, I hired and onboarded our first three engineers and set up CI/CD, code review and architecture docs so that the codebase could survive me not being the only one who understood it.

**Result.** We got to 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. The platform held up through due diligence, which is a fairly blunt test of early technical decisions.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM long after we needed it. And multi-tenancy was a retrofit, which cost far more than designing for it on day one would have. For a contributor network paying people in many countries, the equivalent today would be fraud signals and payout auditing: cheap to design in, painful to bolt on.

---

## 2. Choosing not to rewrite: a modular extraction under investor pressure

**Likely prompts:** "Tell me about a hard technical trade-off." "How do you balance speed and tech debt?" "Describe a decision you had to defend."

**Situation.** A few years into Alaya, the monolith was starting to crack on its busiest endpoints. Half the team wanted a full microservices rewrite, while investors wanted new features and had no appetite for anything called a rewrite.

**Task.** I had to pick a direction that fixed the scaling problem without freezing the roadmap, and make it defensible to people who didn't read code.

**Action.** Rather than argue, I ran a two-week spike, prototyping both approaches and load testing them. I took the numbers to the CTO and the investors and proposed a strangler fig approach: pull out the two highest-traffic modules, leave everything else in the monolith, and write down explicit criteria for when any further module would earn its own service. That last part mattered more than I expected, since it ended the debate instead of postponing it.

**Result.** The first extracted module shipped in six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical; it was persuading people that not rewriting everything was the ambitious choice. Data settled it. Next time I'd benchmark earlier and cut the argument short. It's the same instinct I'd bring to a Series A company scaling fast: find the two places that actually hurt and fix those first.

---

## 3. Getting two teams to work with AI agents, without being their manager

**Likely prompts:** "Walk me through how you use AI agents." "How do you influence people who don't report to you?" Also a good bridge into discussing the session log homework.

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how fast we shipped, but the two teams I wanted to bring along didn't report to me and had no reason to change their habits.

**Task.** Get engineers to actually adopt AI tooling in their daily workflow, with no mandate and no authority.

**Action.** I started small, with three engineers who were already curious. We built demos on real tickets from our own backlog, so the time savings were concrete rather than theoretical; one of the early ones cut about two hours from a single PR review cycle. Then came informal lunch sessions, no slides and no obligation. I wrote reusable prompt templates and committed them to a shared repo, so anyone could try them without asking me. Just as much effort went into the other side: being clear about when generated code shouldn't be merged, and what a reviewer still has to check by hand.

**Result.** Within about three months, around 70% of engineers on both teams were using AI-assisted review and code generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** The bottom-up approach was slower but it stuck, because the people who adopted it on their own terms became its advocates. Today I work agent-first myself, with Claude Code for most of my implementation work. What I've kept from that period is the discipline around review: an agent makes it cheap to produce code, so the expensive part becomes deciding what's correct.

---

## 4. Joining a team ten times larger, and learning to listen first

**Likely prompts:** "Tell me about a mistake." "How do you handle change?" "How would you work with founders who've already made a lot of decisions?"

**Situation.** After the acquisition in 2021, I went from running Alaya's engineering to being a Senior Staff Engineer in an organisation about ten times larger, with a Java microservices codebase, different processes and a different culture.

**Task.** I needed to bring Alaya's capabilities into Benevity's platform while keeping up the delivery pace we'd had as a startup.

**Action.** My first instinct was wrong. I came in moving fast and trying to fix things that, it turned out, weren't broken; they just worked differently from how I'd have done them. I slowed down. I spent the first month properly mapping the existing architecture and got to know the platform and infrastructure teams before pushing opinions. Once I understood why things were the way they were, my proposals started landing, and I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Founders who've built something have usually made decisions for reasons that aren't visible in the code. Joining as an early engineer at a company that already has traction, I'd spend the first weeks shipping small things and asking why before proposing anything structural.

---

## Gaps to prepare honest answers for

**Computer vision, 3D and multimodal pipelines.** My background is platforms, APIs and data-heavy product, not CV research. Say so directly, then explain that the founding engineer's job here is mostly the system around the models: ingestion, storage, queuing, QA, and making pipelines observable and replayable. That's the part you've done for years.

**Payments and anti-fraud at volume.** Don't overclaim. Talk about how you'd design it: idempotent payout ledger, append-only events, holds until QA clears, per-contributor risk signals, and a manual review queue whose size you watch as a core metric.

**Python (FastAPI) and React Native.** Python is in your toolbox and the backend concepts transfer directly; your deepest production experience is Node.js and TypeScript. React Native is close enough to React that you'd ramp in days, especially working agent-first.

**"Why a 1 to 5 year role?"** Keep it short and true: you want founding-team scope and ownership again, not a title, and you've done this exact phase before, including what happens after it.
