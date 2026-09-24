# STAR+R Stories: Founding Engineer (path to CTO), AI infra startup via Jobgether

Picked for a first-engineer role where the founders already have a working agentic product with revenue and need someone to make it production-grade, own architecture end to end, and set the engineering culture. Expect questions on ownership, prototype-to-production, trade-offs under delivery pressure, and building a team's habits from scratch.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from zero." / "Why should we trust you as our first engineer?" / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no team.

**Task.** My job was to build the whole platform, alone at first, while the business side was signing its first enterprise clients, without painting us into a corner we'd pay for later.

**Action.** I went with a boring, pragmatic stack, Node.js, React and PostgreSQL, because I wanted every hour going into the product rather than the tooling. We had something demo-able in about three months. From there I grew it piece by piece: an API layer, impact reporting, postal campaigns, and eventually a multi-tenant architecture once it was clear that each new client couldn't be a special case. When the work outgrew me, I hired the first three engineers and put the basics in place before the team got bigger: CI/CD, code review as a real habit, and short architecture docs so decisions didn't only live in my head.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above a billion dollars, acquired Alaya in 2021.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM once customers were already telling us something was slow, and that's backwards. And I underestimated how painful it is to retrofit multi-tenancy, so now I'd design for it from day one. Both apply directly here: on an agent system, tracing every run and knowing which customer it belongs to is the first thing I'd put in.

---

## 2. Taking a stressed system to production scale without a rewrite

**Likely questions:** "How would you productionize a prototype?" / "Tell me about a hard technical trade-off." / "How do you handle tech debt when founders want features?"

**Situation.** A few years into Alaya, our monolith was showing cracks under load. The team was split between a full microservices rewrite and keeping things as they were, and investors wanted new features, not a rebuild.

**Task.** I had to make a call I could defend to both engineers and investors, one that fixed the scaling problem without freezing delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike comparing the two approaches with prototype load tests. The numbers showed that most of the pain came from two high-traffic modules, not the whole system. So I proposed a strangler-fig migration: pull those two out first, keep everything else in the monolith, and write down explicit criteria for when any other module would earn its own service. I presented it to leadership and investors with the load-test data rather than opinions, and then led the extraction myself.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the ambitious option was harder than the engineering. The data ended the debate; I'd benchmark earlier next time to cut it short. It's also how I'd approach your current agent: measure where it actually fails under growth, rebuild those pieces first, and keep shipping to customers throughout.

---

## 3. Setting engineering habits without being anyone's boss

**Likely questions:** "How would you build engineering culture as the first hire?" / "Tell me about influencing without authority." / "How do you get people to adopt new tools?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how we worked, but the two teams I wanted to bring along didn't report to me and had no reason to change their habits.

**Task.** Get engineers to actually use AI tooling in their daily workflow, not because it was mandated, but because it helped them.

**Action.** I started small, with three engineers who were already curious. We built demos around real work from our own backlog rather than toy examples, and I ran informal lunch-and-learn sessions with no attendance pressure. What mattered most was making the good practice cheap to copy: reusable prompt templates committed to a shared repo, plus short write-ups whenever someone saved real time, like the PR review cycle that went about two hours faster.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own became its advocates. As a founding engineer I'd have more authority than I did then, and I'd still use it sparingly: write the standards down, make the right path the easy one, and let the second and third hires shape them too.

---

## 4. Joining a much bigger system and listening before changing it

**Likely questions:** "Tell me about a time you were wrong." / "How do you work with founders who built the first version?" / "How do you get up to speed on an unfamiliar codebase?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times Alaya's size, with a Java microservices codebase, different processes and a different culture from the one I'd built.

**Task.** Integrate Alaya's capabilities into Benevity's platform and keep building new features, without losing the delivery speed we'd had as a startup.

**Action.** Early on I was too quick to try fixing things that weren't broken. What worked was slowing down: I spent the first month mapping the existing architecture properly and building relationships with the platform and infrastructure teams before pushing technical opinions. Once I understood why things were the way they were, my proposals got a lot better, and people listened to them.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I ended up as the architecture liaison for the Europe-facing product surface.

**Reflection.** This one matters for your role. The founders built the current agent, and it already makes money, so it's doing plenty right. My first month would be reading code, traces and customer tickets, and asking why before proposing what to change.

---

## Prep note: production agent story

The job description asks for "demonstrated experience building and operating LLM/AI agent systems in production." That'll be probed hard, and the bank doesn't have a dedicated story yet. Before the first interview, write one from real Benevity or personal work on LLM integration and multi-agent workflows: what the agent did, how it was orchestrated, how outputs were checked, what broke in production and what you changed. Use only real details and real numbers. If the honest answer is that most of it was internal tooling rather than customer-facing, say so and lean on stories 1 and 2 for the production-scale side.
