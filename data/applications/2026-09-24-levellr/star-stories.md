# STAR+R Stories: Principal Applied AI Engineer @ Levellr

Picked for what a principal-level, remote, AI-heavy seed startup will probe: building from nothing under ambiguity, making database and architecture calls with data, getting a team to adopt AI tooling without authority, and adapting inside a new organisation. The last section flags the question you don't yet have a banked story for.

---

## 1. Building Alaya from zero to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you handle ambiguity?" / "What does ownership look like for you?"

**Situation.** In 2016 we started Alaya, an employee purpose and engagement platform, with no product, no customers and no code. I was the technical cofounder, which meant the whole platform was my problem.

**Task.** I had to get something in front of enterprise prospects fast, while the business side was already trying to sign them, and not paint us into a corner we'd pay for later.

**Action.** I went with Node.js, React and PostgreSQL because I could move quickly in them and they'd hold up if we grew, and I had the core features demo-ready in about three months. From there it was iteration driven by what customers actually asked for: a multi-tenant architecture, an API layer, impact reporting, even postal campaigns. When we could afford to hire, I brought in the first three engineers and set up the boring things that make a team work, like CI/CD, code review habits and architecture docs people actually read.

**Result.** We got to 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021. The platform went through due diligence without surprises, which I took as a decent verdict on the early choices.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM once problems were already hurting. And retrofitting multi-tenancy cost more than designing for it would have. At Levellr's volume I'd want tracing and cost metrics on every LLM call from the first week, not after the first incident.

---

## 2. Strangler fig instead of a rewrite

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you deal with scaling problems in a database-backed system?" / "How do you handle technical debt when the business wants features?"

**Situation.** A few years into Alaya, our monolith on PostgreSQL started showing cracks on its busiest endpoints. Half the team wanted a full microservices rewrite. Investors, understandably, wanted features, not a rewrite.

**Task.** I needed a decision we could defend to both groups, one that fixed the real bottleneck without freezing the roadmap for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and load-tested prototypes of both approaches. I took the numbers to the CTO and to investors, which changed the conversation from opinions to trade-offs. We went with a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any other module would earn its own service.

**Result.** The first extracted module shipped in about six weeks and latency on the busiest endpoints improved by ~40%. The rest of the monolith stayed stable right through the acquisition, and nobody had to live through a big-bang rewrite.

**Reflection.** Persuading people that not rewriting everything was the right call took longer than the engineering did. Benchmarking earlier would have ended that debate faster. It's the same instinct I'd bring to a Postgres plus ClickHouse setup: measure where the load actually is before moving data between stores.

---

## 3. Getting two teams to adopt AI tooling without being their manager

**Likely questions:** "How do you influence without authority?" / "How have you shaped the way a team uses AI?" / Anything principal/staff about raising the bar.

**Situation.** At Benevity I was a Senior Staff IC with no reports. I was convinced AI-assisted development would change how we worked, but the two teams I wanted to bring along didn't report to me and had plenty of reasons to be sceptical.

**Task.** Change daily engineering habits across both teams with no mandate behind me.

**Action.** I started with three engineers who were already curious and worked with them until we had concrete wins, like cutting a PR review cycle by roughly two hours. Then came informal lunch-and-learns, which were really just live demos with no slides and no pitch. I wrote reusable prompt templates and put them in a shared repo so nobody had to start from a blank prompt, and I kept a running note of real time savings so the case rested on evidence rather than enthusiasm.

**Result.** Within about three months, ~70% of engineers on both teams were using AI-assisted review and code generation, and I ended up as the informal AI tooling lead for the org.

**Reflection.** The no-mandate route was slower, but it stuck, because the people who adopted it on their own terms became its advocates. What I'd add now is a proper way to measure output quality, not just adoption. That's the same gap Levellr has to close with evals: usage tells you people like it, not that it's right.

---

## 4. Joining a much larger org after the acquisition

**Likely questions:** "Tell me about a time you had to adapt." / "How do you get up to speed in an unfamiliar codebase?" / "Tell me about a mistake."

**Situation.** After Benevity bought Alaya in 2021, I went from a small team where I knew every line to an engineering org roughly ten times the size, with a Java microservices codebase, different processes and a very different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new work, and without losing the speed that had made Alaya worth buying.

**Action.** My first instinct was to start fixing things, and a few early suggestions landed badly because I hadn't understood why things were the way they were. So I stepped back and spent about a month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams first, and technical opinions came later. Over time I became the architecture liaison for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the person people came to for AI tooling across two teams.

**Reflection.** Moving fast is a strength until it isn't. Listening first made me more effective. Joining Levellr as a principal on an existing 34-person team, I'd spend the first weeks reading code and incident history before redrawing anything.

---

## Gap to prepare: "Walk me through an LLM system you shipped to production"

The job ad asks for production AI/LLM systems that real end users tested, plus evaluation, quality, observability and cost control. The star bank doesn't have a story for this yet, and it's the question most likely to decide the interview.

Before the first technical call, write a fifth story from your actual Benevity work on LLM integration and embeddings-based search. Cover: what the feature did for users, which model(s) and why, how you judged output quality (golden sets, human review, A/B, user feedback), what broke in production, and what it cost per request or per month. Use real numbers only, approximate where needed. If some of it was prototype rather than production, say so plainly and pivot to how you'd build the eval loop for Levellr's sentiment and anomaly detection. An honest answer will do better with Ben Barbersmith (CTO, ex-YouTube) than an inflated one.
