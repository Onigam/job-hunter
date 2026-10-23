# STAR+R Stories: Google, Staff Software Engineer, Shopping Graph (Feeds Features, Zürich)

Google's behavioral round ("Googleyness and Leadership") at Staff level leans on four themes: technical trade-offs with cost and latency in the picture, leading across teams you don't manage, setting direction over several quarters, and handling ambiguity. The stories below map to those. Each one runs about two minutes out loud. Keep the numbers as approximate as they're written here; don't sharpen them in the room.

---

## 1. Strangler fig instead of a rewrite (trade-off under pressure)

**Likely prompts:** "Tell me about a hard technical decision." / "How do you balance latency, throughput and cost?" / "Tell me about technical debt."

**Situation.** At Alaya the monolith was starting to crack under load, and the team had split into two camps. Half wanted a full microservices rewrite, the other half wanted to keep going and patch. Meanwhile our investors were asking for features, not infrastructure work, so whatever we chose had to coexist with a delivery roadmap.

**Task.** It was my call to make, and it had to be one I could defend with something better than taste.

**Action.** I ran a two-week spike where we prototyped both approaches and put them under load tests that mimicked our real traffic. What came out of it was pretty clear: most of the pain sat in two modules, the ones with the most traffic, and the rest of the system was fine. So I brought the CTO and the investors a comparison with numbers on it and proposed a strangler-fig migration, pulling out only those two modules and leaving everything else in the monolith. I also wrote down explicit criteria for when any other module would earn its own extraction, so the debate wouldn't restart every sprint.

**Result.** The first extracted module shipped in about six weeks. Latency on the busiest endpoints improved by roughly 40%, the remaining monolith stayed stable all the way through the Benevity acquisition, and we never needed the big-bang rewrite.

**Reflection.** The engineering part was easier than the persuasion. "Don't rewrite everything" sounds unambitious until there's data behind it, and if I did it again I'd benchmark earlier and shorten the argument by a few weeks. For Shopping Graph I'd frame it the same way: find where the cost and latency actually concentrate before redesigning a pipeline end to end.

---

## 2. Getting two teams onto AI-assisted workflows without authority (influence, LLM tooling)

**Likely prompts:** "Tell me about influencing people who don't report to you." / "How do you mentor engineers?" / "Have you worked with prompt engineering or multi-agent systems?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how fast we shipped, but the two teams I wanted to bring along didn't report to me and had no reason to change their habits on my say-so.

**Task.** Get real adoption, not a slide deck and a mandate nobody follows.

**Action.** I started small, with three engineers who were already curious, and worked with them on their actual tickets rather than toy examples. Once we had a few concrete wins (one PR review cycle dropped by about two hours, which people remembered), I ran informal lunch-and-learn sessions where I just showed the work. There was never a mandate. I wrote reusable prompt templates and put them in a shared repo so anyone could pick them up, and I kept a running log of where the tools helped and where they produced confident nonsense, because the second list mattered as much as the first for trust.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, and the engineers who adopted it on their own became its best advocates. That log of failure cases is the part I'd emphasize here: an LLM is only useful in a quality loop if you know where it breaks, which is basically what an autorater for product data has to prove too.

---

## 3. Building Alaya from a blank page to acquisition (ambiguity, multi-quarter direction)

**Likely prompts:** "Tell me about something you built from scratch." / "How do you set a technical roadmap?" / "How do you deal with ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no team, just a business partner starting to talk to enterprises who'd want a demo soon.

**Task.** Design and build the whole platform, alone at first, in a way that wouldn't need to be thrown away once real enterprise clients arrived.

**Action.** I picked a deliberately boring stack (Node.js, React, PostgreSQL) that I knew could scale without much ceremony, and got the core features in front of prospects within about three months. After that the work was sequencing: multi-tenancy, a proper API layer, impact reporting, postal campaigns, each one tied to what the next set of clients needed. When we could hire, I brought on the first three engineers and set up CI/CD, code review and architecture docs so the decisions didn't live only in my head.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired us in 2021.

**Reflection.** Two things I'd change. I added proper observability far too late, and I underestimated how painful it is to retrofit multi-tenancy, so today I'd design both in from the first week. At Google's scale, I'd expect the first lesson to matter even more; you can't run a pipeline that refreshes billions of records an hour on intuition.

---

## 4. Joining a ten-times-larger org after the acquisition (matrixed organizations)

**Likely prompts:** "Tell me about working in a complex, cross-functional organization." / "Tell me about a time you were wrong." / "How do you ramp up in a new codebase?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organization was about ten times the size of Alaya, the codebase was Java and microservices instead of our Node.js stack, and the processes were nothing like a startup's.

**Task.** Fold Alaya's capabilities into Benevity's platform while still shipping new work, and without losing the speed that had made Alaya worth buying.

**Action.** My first instinct was to start fixing things, and frankly I pushed a couple of opinions too early. I corrected course by spending most of the first month mapping the existing architecture and getting to know the platform and infra teams before proposing anything. That changed the conversations. By the time I suggested changes, people knew I'd read their code. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into the Benevity platform, I contributed to three major cross-team architecture decisions, and the AI tooling work in story 2 grew out of the trust built here.

**Reflection.** I was wrong to treat unfamiliar as broken. In a big org there's usually a reason behind a strange design, even if the reason has expired, and asking first is faster overall. I'd bring that straight into Google: the Merchant Center ingestion stack has years of history, and I'd want to understand it before redrawing it.

---

## Gaps to prepare for honestly

- **Google-scale data pipelines and ML inference serving.** Nothing in this background matches billions of records per hour. Say so plainly, then pivot to the reasoning in story 1 (find where cost and latency concentrate, measure first) and to recent multi-agent work.
- **Go / C++.** Java (Sagemcom, Benevity), Python and TypeScript are the real languages. Don't claim more.
- **Autoraters.** Prepare a short, concrete answer on how you'd validate an LLM judge: a human-labelled golden set, agreement rates tracked over time, sampling of disagreements, and alerting when agreement drifts. Tie it back to the failure log in story 2.
