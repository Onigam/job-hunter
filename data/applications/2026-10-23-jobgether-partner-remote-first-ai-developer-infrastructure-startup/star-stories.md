# STAR+R Stories: Senior+ Full-Stack Engineer, AI Developer-Infrastructure Startup (via Jobgether)

This posting points at a few things the interviewers will probe. Can you own API and platform design end to end? Can you make architecture calls with performance and distributed-systems trade-offs in mind? Do you understand developers (and agents) as users of a product? Can you work autonomously and still shape the roadmap? The four stories below cover those. Aim for about two minutes each when spoken, and let the follow-up questions pull out the detail.

---

## 1. Building Alaya's platform from a blank page

**Likely questions:** "Tell me about something you built from scratch." "How do you work with high autonomy?" "Walk me through an API you designed."

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. We had no product, no customers and no codebase, and the business side was already chasing its first enterprise clients.

**Task.** I had to build the whole platform, alone at first, fast enough to demo and solid enough that real companies could run their employees through it without it falling over.

**Action.** I went with a stack I knew would carry us without heroics, Node.js, React and PostgreSQL, and had the core features demo-ready in roughly three months. After that the product grew wherever clients pulled it. We added multi-tenancy, an API layer that partners and internal tools both built on, impact reporting, and at one point even postal campaigns. Once there was enough work to justify it, I hired and onboarded the first three engineers and put CI/CD, code review habits and architecture docs in place so nobody depended on what was in my head.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. Decisions I'd made in the first few months were still running in production at the time of the acquisition.

**Reflection.** I'd add observability much earlier; we bolted APM on late and spent too long debugging blind. And I'd design for multi-tenancy from the first day, because retrofitting it cost far more than building it in would have. For a developer-infrastructure product the same lesson applies to API surface: the first version of an endpoint quietly becomes the contract every SDK and agent integration depends on, so it's worth slowing down on that part.

---

## 2. Strangler fig instead of a rewrite

**Likely questions:** "Tell me about a hard technical trade-off." "How do you approach performance problems?" "How do you handle tech debt against feature pressure?"

**Situation.** At Alaya our monolith started to show cracks under load. Part of the team wanted a full microservices rewrite, others wanted to keep a modular monolith, and our investors wanted new features, not a rewrite.

**Task.** I needed a decision we could defend, one that fixed the scaling problems without freezing the roadmap for months.

**Action.** Rather than settle it in a meeting, I ran a two-week spike and prototyped both approaches with load tests against our busiest paths. The numbers made the conversation with the leadership team and investors much shorter, because we were arguing about data and not taste. I proposed a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and agree on explicit criteria for when any further module would earn its own service.

**Result.** The first extracted module shipped in six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical, it was convincing people that not rewriting everything was the ambitious option. I'd benchmark earlier next time to cut that debate down. The exit criteria turned out to be the most useful artifact, since they stopped the same argument from coming back every quarter.

---

## 3. Getting engineers to adopt a new tool without a mandate

**Likely questions:** "How do you think about developer experience?" "Tell me about influencing without authority." "How do you drive adoption of something new?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would save the engineers around me real time, but the two teams I wanted to bring along didn't report to me and had no reason to change how they worked.

**Task.** Get engineers to actually use AI tooling in their daily workflow, without anyone ordering them to.

**Action.** I started with the three engineers who were already curious and worked with them on their real tickets, not toy examples. When one of them shaved about two hours off a PR review cycle, that became the story I told everyone else. I ran informal lunch-and-learn sessions that were mostly live demos, and I put reusable prompt templates in a shared repo so people could try things in five minutes instead of an afternoon. Nobody was asked to commit to anything.

**Result.** Within about three months, ~70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** The no-mandate route was slower, but it stuck, because the people who adopted it on their own terms argued for it better than I could. It also taught me what developer tooling lives or dies on: time to first useful result. That's the bar I'd hold an SDK, a CLI or an MCP integration to, whether the user is an engineer or an agent.

---

## 4. Landing inside a much bigger system after the acquisition

**Likely questions:** "How do you get productive in an unfamiliar codebase?" "Tell me about working across teams." "Tell me about a time you were wrong."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was around ten times the size of Alaya, the stack was Java microservices instead of our Node.js platform, and the culture and processes were completely different.

**Task.** I had to integrate Alaya's capabilities into Benevity's platform while our existing clients kept expecting new features.

**Action.** My first instinct was to start fixing things, and I did push a couple of changes before I really understood why the system looked the way it did. That didn't go well. I backed off and spent most of the first month mapping how the architecture actually behaved, and I got to know the platform and infra teams before arguing for any design. By the time I proposed something, it was coming from someone they'd already worked with. Over time I became the architecture liaison for the Europe-facing product surface, translating between what European clients needed and what the core teams were willing to own.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Moving fast in a system you don't understand mostly creates noise. In a customer-facing infrastructure role it's the same discipline: understand how someone's auth, data flows and failure modes really behave before telling them what to change.

---

## Questions worth asking them

- Who are the main users today, human developers or agents calling the platform directly, and how does that split show up in the roadmap?
- How are SDKs, CLI and MCP server kept in sync with the core API? Generated from a spec, or hand-maintained?
- What does "customer-facing" mean day to day for this role, and roughly how many hours a week?
- What's the biggest architecture decision the team expects to make in the next six months?
