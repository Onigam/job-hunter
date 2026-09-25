# STAR+R Stories: Lead Engineer, AI for Clinical Genomics (Invenia client)

Picked for an early core-team seat where the job is owning the stack end to end, setting architecture and shaping engineering culture, in a domain (clinical genomics) that's new to me. Expect questions on building from zero, trade-offs under pressure, influencing people, and how fast I get up to speed in unfamiliar territory.

---

## 1. Building a platform and a team from zero (Alaya)

**Likely prompt:** "Tell me about something you built from scratch." / "How do you set up engineering culture as one of the first hires?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, while the business side was already talking to its first enterprise prospects.

**Task.** My job was to build the whole platform, alone at first, and then grow a team around it without slowing the company down while it signed those first clients.

**Action.** I picked a boring, pragmatic stack (Node.js, React, PostgreSQL) because I wanted something I could scale without spending months on infrastructure nobody needed yet. We had a working demo about three months in. From there I grew it step by step: a multi-tenant architecture, an API layer, impact reporting, even postal campaigns. When I hired the first three engineers, I put CI/CD, code review and short architecture docs in place from their first week, since habits set early tend to stick and are painful to add later.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021. For me that was the clearest sign the early technical calls had held up.

**Reflection.** Two things I'd change. Observability came too late; we only added proper APM once problems were already visible to customers. And I underestimated how expensive it is to retrofit multi-tenancy. For a clinical genomics product I'd go further: audit trails, data lineage and versioning of every model and reference dataset belong in the first design, because in a regulated lab you can't bolt traceability on afterwards.

---

## 2. A hard architecture call under delivery pressure (Alaya)

**Likely prompt:** "Tell me about a technical trade-off you made." / "How do you handle tech debt when the business wants features?"

**Situation.** At Alaya our monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half wanted to keep patching, and investors were clear they wanted new features, not a rewrite.

**Task.** I had to make a call I could defend on both fronts: something that would hold up as we scaled, without freezing delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and prototyped both approaches with load tests. I took the numbers to the leadership team and investors, and proposed a strangler fig migration: pull out the two highest-traffic modules first and leave the rest of the monolith alone. We also wrote down explicit criteria for when any further module would earn its own service, so the next debate would be shorter.

**Result.** The first extracted module shipped in six weeks. Response times on the busiest endpoints improved by roughly 40%, and what remained of the monolith stayed stable all the way through the acquisition. Nobody had to do a big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting everything was the right answer, and data did that far better than opinion. I'd benchmark earlier next time. It's the same instinct I'd bring to ML systems here: measure the pipeline you already have before replacing pieces of it, especially when the current version is already validated in a lab.

---

## 3. Leading without formal authority (Benevity)

**Likely prompt:** "How do you influence engineers who don't report to you?" / "How would you shape culture as a lead?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to adopt AI-assisted development in their day-to-day work.

**Task.** Change how people worked without being anyone's manager, and without it turning into a mandate that people would quietly ignore.

**Action.** I started with three engineers who were already curious and worked with them until they had real wins. Then I built small internal demos that showed actual time saved on actual tasks, and ran informal lunch sessions where the only agenda was showing what worked. I committed reusable prompt templates to a shared repo so nobody started from nothing, and I wrote up concrete examples, like a PR review cycle that went about two hours faster.

**Result.** Within three months around 70% of engineers across both teams were using AI-assisted code review and generation. I ended up as the informal AI tooling lead across the org, which nobody had assigned.

**Reflection.** Going without a mandate was slower but it lasted, because the people who adopted it on their own terms became its advocates. As a lead in a small team I'd hold the same line: show it working, make it easy, then let the team own the standard. In a clinical setting I'd pair that with clear rules on where AI-generated code needs a second human review.

---

## 4. Walking into an unfamiliar system and domain (Benevity integration)

**Likely prompt:** "You don't have a genomics background. How do you ramp up?" / "Tell me about joining something much bigger or different than you're used to."

**Situation.** After the acquisition in 2021 I joined Benevity, an org about ten times the size of Alaya, with a Java microservices codebase, different processes and a very different culture from the one I'd built.

**Task.** Integrate Alaya's capabilities into Benevity's platform while still shipping new features, so we didn't lose the pace we'd had as a startup.

**Action.** My first instinct was to start fixing things, and I did push a couple of changes too early. I corrected course and spent most of the first month mapping how the existing architecture actually worked and why, before proposing anything. I built relationships with the platform and infra teams, asked a lot of basic questions, and only then brought forward technical opinions. Over time I became the architecture contact across teams for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into Benevity's platform. I contributed to three major cross-team architecture decisions and became the reference person for AI tooling across two teams.

**Reflection.** I moved too fast at the start trying to fix things that weren't broken, and listening first made me more useful. For genomics I'd apply that directly: sit with the bioinformaticians and lab users early, learn why the pipeline is built the way it is (variant calling, annotation, reporting), and earn the right to change it. I'm not going to pretend to be a domain expert in month one.

---

## Quick answers for likely follow-ups

**"Your background is mostly TypeScript. How strong is your Python?"** I use Python regularly for LLM and data work, but most of my production years are Node.js and TypeScript. I'd be honest about that gap and point to how quickly I picked up Java well enough to make cross-team architecture calls at Benevity.

**"Why healthcare, and why now?"** Most of my career has been purpose-driven products. Alaya was about employee impact, and Benevity is corporate giving. Software that helps an oncologist choose a treatment is a more direct version of the same motivation, and the engineering constraints (traceability, validation, reproducibility) are the kind of problems I like.
