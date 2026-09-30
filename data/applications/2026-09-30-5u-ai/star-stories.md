# STAR+R Stories: 5U AI, Founding AI Engineer

Their process is short: one technical interview on depth, judgment and fit, a 60-minute build with AI assistance, then a founder conversation. These stories are for the first and last rounds. They'll push on three things: can you own an entire platform alone, can you pick between speed and durability without dithering, and have you run AI in production for real.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about something you built from scratch." "What does owning the whole stack mean to you?" "How do you handle ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, and the business side was already talking to enterprise prospects who expected to see something working.

**Task.** I had to build the whole platform myself at first, then turn it into something a small team could work on, without slowing down the sales conversations that kept the company alive.

**Action.** I picked a boring stack on purpose: Node.js, React and PostgreSQL, things I could debug at midnight without a search engine. The first three months went into the core features we needed for a real demo, and nothing else. Once clients signed, I grew it out piece by piece into a multi-tenant architecture, an API layer, impact reporting and postal campaigns. When I hired the first three engineers, I set up CI/CD, code review habits and architecture docs, mostly so they could ship without asking me every time.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021. The platform held up through their technical due diligence, which was the first outside audit of decisions I'd made alone years earlier.

**Reflection.** Two things I'd change. Observability came far too late; we only added proper APM once problems were already hurting customers, and for 5U that's the lesson I'd bring first, since agents making decisions across inboxes and TMS systems need tracing from day one. I also bolted multi-tenancy on after the fact, and the retrofit cost more than designing for it would have. At 5U, where every forwarder has its own quirks, I'd model per-customer configuration from the start.

**Tie to 5U.** The JD's line about turning customer deployment patterns into reusable product capabilities is exactly what we did at Alaya with postal campaigns and reporting: one client's odd request became a feature everyone could use once I saw it twice.

---

## 2. Choosing a strangler fig over a rewrite

**Likely prompts:** "Tell me about a trade-off between speed and durability." "How do you handle technical debt?" "Describe a decision you made with incomplete information."

**Situation.** A few years into Alaya, the monolith was starting to crack under load. Half the team wanted a full microservices rewrite, and investors wanted new features, not a pause for plumbing.

**Task.** Somebody had to make a call that the team, the leadership and the investors could all live with, and it fell to me as Head of Technologies.

**Action.** Rather than argue from opinion, I ran a two-week spike comparing a full split against a modular approach, with prototype load tests on both. I brought the numbers to the leadership team and investors and proposed a strangler fig migration: pull out the two highest-traffic modules first and leave the rest alone. We also wrote down explicit criteria for when any other module would earn its own service, so the debate wouldn't restart every quarter.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable right through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part was social, not technical. Convincing people that not rewriting was the right call took longer than the spike did. Next time I'd benchmark earlier and cut the debate short. For a pre-seed team with one or two engineers, I'd apply the same instinct: keep the agent runtime in one deployable until a specific workflow proves it needs isolation.

---

## 3. Getting two teams to adopt AI tooling without a mandate

**Likely prompts:** "How have you used AI in your engineering work?" "Tell me about influencing without authority." "How would you set engineering standards here?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development, and some of them were skeptical, fairly so.

**Task.** Change daily habits across both teams without being anyone's manager and without a top-down decree that would've been resented.

**Action.** I started with three engineers who were already curious. We built small internal tooling demos showing real time saved on real tasks, then ran informal lunch-and-learn sessions where I just showed the work. I wrote reusable prompt templates and put them in a shared repo so people could copy what worked instead of starting cold. When something saved time, like about two hours cut from one PR review cycle, I wrote it down so the evidence was concrete.

**Result.** Within about three months roughly 70% of engineers on both teams were using AI-assisted review and code generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower but it stuck, because the people who adopted it on their own became its advocates. For 5U, where the interview itself asks for an AI coding session log, I'd use the same approach to set standards for the first hires: shared prompts and patterns in the repo, reviewed like code, rather than rules nobody reads.

---

## 4. Joining a much bigger org after the acquisition

**Likely prompts:** "Tell me about a time you were wrong." "How do you work with people who've built things differently?" "Tell me about a hard integration."

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer on a team about ten times the size of Alaya's. The codebase was Java microservices, the processes were heavier, and the culture was different.

**Task.** Fold Alaya's capabilities into Benevity's platform while still shipping new features, without losing the pace we'd had as a startup.

**Action.** Honestly, I started badly. My first instinct was to move fast and fix things that weren't actually broken. What turned it around was spending the next stretch mapping the existing architecture properly and building relationships with the platform and infra teams before offering opinions. After that I took on the role of cross-team architecture liaison for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person two teams came to for AI tooling.

**Reflection.** Listening first made me more effective, and it's the lesson I'd bring to 5U's customers. Every forwarder runs its operation in a way that looks wrong from outside and usually has a reason. An AI Worker that ignores that reason will get switched off.

---

## Gaps to prepare for (be honest, don't dodge)

**Logistics domain.** I haven't worked in freight. Say it plainly and point to Alaya, where I learned enterprise HR and CSR workflows from scratch by sitting with clients. Read up before the interview on quote-to-booking flow, what a TMS does, and common EDI message types so the conversation isn't abstract.

**LLM systems in production.** The JD wants hands-on agent workflows, tool use and observability in production. Be precise about what was production at Benevity and what was internal tooling or prototypes; don't inflate it. Have one concrete answer ready on how you'd evaluate an AI Worker that reads a quote request email and fills in a TMS record: golden set, field-level accuracy, and a human-review path for low-confidence cases.

**Async reliability.** Expect a question on idempotency and retries. Good concrete answer: idempotency keys on every external side effect (booking, invoice post), an outbox table in PostgreSQL, and dead-letter handling that lands in a human queue rather than silently dropping.

**Munich onsite.** The posting says clearly that it's not remote and not 9-to-5. Decide your position on relocating before the founder call, and say it early.

**AI coding session log.** They ask for one with the application. Pick a real session that shows judgment (rejecting a bad suggestion, writing tests first), not just speed.
