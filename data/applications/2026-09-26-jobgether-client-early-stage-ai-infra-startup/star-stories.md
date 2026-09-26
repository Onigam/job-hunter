# STAR+R Stories: Founding Engineer, AI Infrastructure (Jobgether client)

What this role cares about, based on the posting: turning a working agentic prototype into production infrastructure (target of up to a million users), owning the whole stack as the first engineering hire, setting standards and hiring, and growing into a CTO seat. The founders will probe ownership, judgment under ambiguity, and whether I've actually shipped AI to real users.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from zero." / "What does being a founding engineer mean to you?" / "How do you pick a stack when everything is uncertain?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, and the business side was already chasing its first enterprise clients.

**Task.** My job was the whole technical side. Build the platform alone at first, get it in front of those first clients fast, and put foundations in place that wouldn't have to be torn up once more engineers joined.

**Action.** I went with Node.js, React and PostgreSQL because I could move fast in them and they'd carry us a long way without clever infrastructure. The first three months went into the core features needed for a real demo, and nothing else. Once clients started signing, the work shifted to what made the product sellable to enterprises: a multi-tenant architecture, a proper API layer, impact reporting. When I hired our first three engineers I set up CI/CD, a code review culture and architecture docs before they arrived, so they joined a codebase with habits already in it rather than having to invent them.

**Result.** The platform went into production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021.

**Reflection.** Two things I'd change. Observability came far too late; we added real APM only once problems were already hurting us, and for an agent system that would be even worse, since you can't debug what you can't trace. I also treated multi-tenancy as something to add later, and retrofitting it cost a lot more than designing for it from the start. For this role I'd put tracing and tenant isolation into the runtime on day one.

---

## 2. Scaling without a rewrite: the strangler fig decision

**Likely questions:** "How would you take our prototype to a million users?" / "Tell me about a hard architecture trade-off." / "Rewrite or refactor?"

**Situation.** Later at Alaya, the monolith started cracking under load on a few endpoints. The team was split between a full microservices rewrite and staying put, and our investors wanted new features, not a rewrite.

**Task.** I had to make a call we could defend on both fronts: fix the scaling problem for real, without freezing the roadmap for months.

**Action.** Rather than argue opinions, I ran a two-week spike and prototyped both approaches with load tests. I took the numbers to the leadership team and the investors and proposed a strangler fig migration. We'd extract the two highest-traffic modules first and leave the rest of the monolith alone. I also wrote down explicit criteria for when any other module would earn its own extraction, so the question wouldn't get reopened every sprint.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. What remained of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Most of the effort went into convincing people that not rewriting everything was the right move, and data is what settled it. I'd benchmark earlier next time to shorten that debate. It's also how I'd approach your agent system: find where it actually breaks under load, whether that's orchestration, memory retrieval or model calls, and pull those parts out first instead of redesigning everything at once.

---

## 3. Getting two teams to adopt AI-assisted workflows without authority

**Likely questions:** "What's your hands-on experience with LLMs?" / "How do you set engineering norms?" / "How do you influence people who don't report to you?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how we worked, but the two teams I wanted to bring along didn't report to me, and plenty of people were skeptical.

**Task.** Change daily engineering practice across both teams without a mandate.

**Action.** I started with three engineers who were already curious and worked with them directly. We built small internal demos that showed real time saved on real tasks, like cutting a PR review cycle by a couple of hours. After that came informal lunch-and-learn sessions with no attendance pressure, and I committed reusable prompt templates to a shared repo so anyone could pick them up without starting from scratch. I kept a written record of what worked and what didn't, because a skeptic trusts a concrete result far more than enthusiasm.

**Result.** Within about three months roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms went on to defend it. As a first engineer, and later the person building a team, I'd set norms the same way: show it working, write it down, and let the early adopters do the persuading.

**Honesty note for the interview.** This story is about AI in the engineering workflow, not an agent product serving external users at scale. If they ask directly about LLM or agent systems in production, answer with the specific LLM integration, multi-agent and semantic search work I've built myself, state plainly what scale it ran at, and don't stretch it. Then show how I'd think about orchestration, memory, evals and verification. The cover letter already names the gap, so stay consistent with it.

---

## 4. Joining an organisation ten times bigger after the acquisition

**Likely questions:** "Tell me about a time you were wrong." / "How do you work with founders or leadership you don't agree with?" / "How do you handle change?"

**Situation.** After the 2021 acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times Alaya's size, with a different stack (Java and microservices), different processes and a different culture.

**Task.** I had to fold Alaya's capabilities into Benevity's platform while continuing to ship, without losing the pace we'd had as a small team.

**Action.** My first instinct was to push fixes for things I thought were wrong, and it didn't go well. So I changed approach. I spent my first month mapping the existing architecture before proposing anything, and I built relationships with the platform and infrastructure teams before offering technical opinions. After that I took on the role of cross-team architecture liaison for the Europe-facing product.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the person both teams came to on AI tooling.

**Reflection.** I moved too fast at first and tried to fix things that weren't broken. Listening first made me far more effective. It's relevant here because I'd be joining founders who already built something that works, so the first weeks should go to understanding why the system is shaped the way it is before I start redesigning it.

---

## 5. Short answer to have ready: "Why path to CTO, and why you?"

I've already been the person who picks the stack, hires the first engineers and lives with those decisions through an acquisition, so I know what the first year of that job actually involves. After five years inside a much larger company I also know what the team at 50 people needs from the decisions made at 5. The CTO title matters less to me than owning the technical outcome, and I'd rather earn it by shipping the runtime than have it written into the offer.
