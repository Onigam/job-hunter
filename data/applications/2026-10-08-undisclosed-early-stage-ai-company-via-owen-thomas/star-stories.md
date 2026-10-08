# STAR+R Stories: Lead Product Engineer → CTO (AI & Data Infrastructure)

_Undisclosed early-stage AI company, via Owen Thomas. Interview loop: intro call, short take-home (AI use encouraged), 60 min technical discussion, 30 min culture conversation._

The brief says they care more about "what you've owned and the decisions you've made" than about titles. Every story below is built around a decision and the consequences of it.

---

## 1. Owning a platform from zero to acquisition

**Likely prompts:** "Tell me about something you owned end to end." / "How do you turn an ambiguous problem into a working system?" / "Why do you think you could grow into the CTO seat?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, and the business side was already in conversations with its first enterprise prospects.

**Task.** My job was to build the whole platform, alone at first, and get it in front of those prospects quickly without painting us into a corner we'd regret once the clients started piling up.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I wanted something I could scale without over-engineering and that future hires would already know. The first demo-able version took about three months. From there it grew in layers: an API layer, impact reporting, postal campaigns, and eventually a multi-tenant architecture once it was obvious that enterprise clients needed hard separation. When the team started to grow, I hired and onboarded the first three engineers and put the basics in place for them, meaning CI/CD, a code review habit and written architecture docs so nobody had to reverse-engineer my head.

**Result.** The platform went to production and reached 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian unicorn valued at over $1B, acquired Alaya, and the tech went through their due diligence and into their platform.

**Reflection.** Two things I'd change. I added proper APM late, and for a while we were debugging production from logs and guesswork. And I underestimated what retrofitting multi-tenancy would cost; it touched almost every table. For a company whose product is the dataset, I'd settle tenancy, provenance and schema ownership in the first weeks, not the second year.

---

## 2. Choosing not to rewrite: an architecture call under pressure

**Likely prompts:** "Walk me through a hard technical trade-off." / "How do you handle tech debt when the business wants features?" / Technical discussion opener.

**Situation.** At Alaya the monolith was starting to crack under load. Half the team wanted a full microservices rewrite, others wanted to keep going as we were, and our investors wanted new features, not a rebuild.

**Task.** I had to make a call I could defend to both engineers and investors, one that fixed the scaling problems without freezing delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and prototyped both approaches with load tests, so the debate was about numbers instead of taste. I took the trade-offs to leadership and the investors with those numbers in hand. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. I also wrote down the criteria a module had to meet before we'd extract it, so the next decision wouldn't need another two-week debate.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The technical part was easier than convincing people that not rewriting everything was the right answer. Data settled it. Next time I'd benchmark earlier and cut the debate shorter. At a seed-stage company rebuilding its team, the same instinct applies: the rebuild should earn every piece it replaces.

---

## 3. Getting engineers to use AI tools properly, without authority

**Likely prompts:** "How do you use AI coding tools, and how do you keep quality up?" / "How do you set engineering standards?" / "Tell me about influencing without authority."

_This one maps straight onto their line about engineers using AI coding tools while still being expected to understand and test what they ship._

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to adopt AI-assisted development, and most of them were sceptical, some for good reasons.

**Task.** I had to change how people actually worked day to day, with no mandate to lean on, and do it in a way that didn't trade review quality for speed.

**Action.** Three engineers were already curious, so I started with them instead of pitching the whole org. I built small internal demos that showed real time saved on real tasks, then ran informal lunch-and-learn sessions where the point was to show, not sell. The prompt templates that worked went into a shared repo so people could reuse and improve them. And I wrote down concrete outcomes, like a PR review cycle that came out about two hours shorter, because "it feels faster" convinces nobody.

**Result.** Within about three months, around 70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going mandate-free was slower but it stuck. People who adopted it on their own terms became the ones defending it in their teams. The thing I'd push harder on now is the review side: AI makes it cheap to produce code, so the standard has to be that you can explain and test every line you merge. That's also how I'd run the take-home.

---

## 4. Walking into someone else's architecture

**Likely prompts:** "You'd be inheriting a platform and rebuilding the team. How would you approach your first 90 days?" / "Tell me about a time you had to adapt."

**Situation.** After the 2021 acquisition I joined Benevity as a Senior Staff Engineer. The org was about ten times the size of Alaya, the codebase was Java microservices, and none of the processes looked like ours.

**Task.** I needed to fold Alaya's capabilities into Benevity's platform and keep shipping new features without losing the speed we'd had as a startup.

**Action.** My first month went on mapping the existing architecture before I proposed anything. I spent time with the platform and infra teams to understand why things were the way they were, so that when I did push an opinion it came with context. Over time I became the cross-team architecture liaison for the Europe-facing product surface.

**Result.** The core Alaya features migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person people came to for AI tooling across two engineering teams.

**Reflection.** Honestly, I moved too fast at the start and tried to fix things that weren't broken. Slowing down to listen made me far more effective. If I joined this company, I'd spend the first few weeks reading the data model, the pipelines and the customer contracts before touching the roadmap, because in a data company the schema is the history of every decision made so far.

---

## Prep notes (not a story)

**Python depth.** The listing asks for strong Python backend engineering, and most of the production history here is TypeScript and Node. Say so plainly and early, then show it: be ready to talk through how you'd structure a Python service (FastAPI or similar, typed models, async I/O, migrations against PostgreSQL) and do the take-home in Python.

**RAG and semantic search.** Embeddings, semantic search and LLM integration are on the profile, but the story bank has no dedicated story for them yet. Before the technical round, write one from real work (what was indexed, how chunks and embeddings were chosen, how retrieval quality was judged) rather than improvising one in the room. Don't stretch it beyond what was actually built.

**Questions to ask them.** How is the proprietary dataset collected and curated, and who owns its schema today? What happened to the previous engineering team? What would have to be true for the CTO step to happen, and is it written down anywhere?
