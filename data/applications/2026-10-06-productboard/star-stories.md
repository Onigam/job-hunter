# STAR+R Stories: Productboard, Staff Backend Product Engineer

The posting leans on four things: 0-to-1 founder experience, architecture standards in a codebase mid-migration (Ruby to Kotlin), AI tooling in the daily engineering loop, and Staff-level influence without a reporting line. These stories map to those, roughly in the order they're likely to come up.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about something you built from zero." / "What does owning outcomes, not just code, mean to you?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no codebase, just a business co-founder already talking to enterprise prospects who wanted a demo.

**Task.** My job was to build the whole platform, first alone and later with a small team, fast enough that sales had something real to show without painting ourselves into a corner.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I wanted to spend my novelty budget on the product rather than the infrastructure. The first three months went into the core flows needed for a demo. After that it was steady expansion: an API layer, impact reporting, postal campaigns, and eventually multi-tenancy once enterprise clients started asking for isolation. When we could afford to hire, I brought in the first three engineers and set up the things I wish I'd had on day one, CI/CD, code review as a habit rather than a gate, and short architecture notes for every decision that would be expensive to undo.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired Alaya in 2021. Their technical due diligence went through the architecture we'd built, which was the most honest review it ever got.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM after we'd already lost hours debugging blind. And multi-tenancy retrofitted is far more painful than multi-tenancy designed in, so today I'd put tenant boundaries in the data model from the first migration. Both lessons feel relevant to agent-native standards too: the boundaries you write down early are the ones that hold.

---

## 2. Splitting a monolith without a rewrite

**Likely prompts:** "Tell me about a hard technical trade-off." / "How would you approach the Ruby to Kotlin migration?" / "How do you handle tech debt against feature pressure?"

**Situation.** A few years into Alaya, the monolith was showing cracks on the busiest endpoints. Half the team wanted a full microservices rewrite. Investors wanted features, not a rewrite, and they weren't wrong to worry.

**Task.** I needed a decision we could defend to both groups, one that fixed the real bottleneck without freezing the roadmap for a quarter.

**Action.** Rather than argue it out, I ran a two-week spike that prototyped both directions and load-tested them against our actual traffic patterns. The numbers made the case better than I could. I proposed a strangler-fig approach: pull out the two highest-traffic modules behind clear interfaces, leave everything else in the monolith, and write down explicit criteria for when the next module would earn its own extraction. That last part mattered most, since it turned an endless debate into a checklist.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Most of the effort went into persuading people that not rewriting everything was the right call. Earlier benchmarking would have shortened that. For Productboard, I'd apply the same idea to Ruby and Kotlin: explicit extraction criteria plus written module contracts, so that both engineers and coding agents know which boundary is authoritative while the migration is in flight.

---

## 3. Getting two teams onto AI-assisted development with no mandate

**Likely prompts:** "How do you influence without authority?" / "How do you use AI tools day to day?" / "How would you improve AI code review here?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams that didn't report to me to work AI-assisted review and generation into their daily workflow, and plenty of people there were sceptical.

**Task.** The goal was to change habits, which is much harder than changing tools, and to do it without any authority to tell anyone what to use.

**Action.** I started with three engineers who were already curious and worked alongside them on real tickets, not toy examples. Once we had a few concrete wins, like a PR review cycle that dropped by a couple of hours, I ran informal lunch sessions that were demos only, with no slides about the future of engineering. The prompt templates that worked went into a shared repo where anyone could copy or improve them. I also wrote down where the tools failed, because people trust a pitch more when it admits the edges.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation, and I became the informal go-to for AI tooling across the org.

**Reflection.** Going mandate-free was slower, but it stuck, since the engineers who adopted it on their own terms became its best advocates. What I'd add now is measurement from day one: tracking which review comments the AI caught that humans then agreed with. That's the same question the Productboard posting asks about catching issues before human review, and I'd want an eval set (Braintrust or similar) before tuning anything.

---

## 4. Joining a much bigger org after the acquisition

**Likely prompts:** "Tell me about a time you had to adapt to a new environment." / "How do you earn trust as a new Staff engineer?"

**Situation.** After the 2021 acquisition I joined Benevity as Senior Staff Engineer. The engineering org was around ten times the size of Alaya's, with a Java microservices codebase, its own processes and a culture I didn't know yet.

**Task.** I had to get Alaya's capabilities into Benevity's platform and keep shipping new work, without losing the speed we'd had as a startup or burning goodwill on day one.

**Action.** For the first month I mostly read code and mapped how the existing architecture actually behaved, which wasn't always how the diagrams said it did. I spent time with the platform and infra teams before I pushed any technical opinion. Once I had context, I started acting as a cross-team architecture liaison for the Europe-facing product surface, and that role grew naturally from there.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and the AI tooling work in story 3 grew out of relationships built in this period.

**Reflection.** Honestly, I moved too fast at first and tried to fix things that weren't broken. Slowing down to listen made me more effective, and it's the approach I'd take joining Productboard: learn why the Ruby core looks the way it does before proposing standards for it.

---

## Prepare honestly for: "Have you shipped agentic systems in production?"

There's no story in the bank for this, so don't invent one. The honest answer is that production LLM work at Benevity was on the engineering-workflow side (AI-assisted review and generation across teams), while multi-step agent workflows and embedding search are things I build in Python and TypeScript outside a production customer setting. Follow that with something concrete about how I'd approach their self-healing incident workflow: start with read-only agents that propose a diagnosis and runbook step, measure how often on-call agrees, and only then grant write actions behind a human approval. It's better to show judgement about where agents fail than to overclaim.

The same goes for Kotlin. Say plainly that it would be new in production, point to Java experience at Sagemcom and in Benevity's microservices, and mention any Kotlin written before the interview, provided that's actually true by then.
