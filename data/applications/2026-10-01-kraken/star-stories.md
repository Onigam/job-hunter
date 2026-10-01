# STAR+R Stories: Kraken, Senior Software Engineer, Agent Systems

The posting leans on five things: 0→1 ownership, rapid prototyping with a clear path to production, systems thinking about failure modes and observability, hands-on LLM work, and driving automation across teams you don't control. The stories below map to those. Keep each spoken answer to about two minutes and let the interviewer pull on the details.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from zero." "How do you work when nothing is defined yet?" "How do you decide what to build first?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code. The business side was already talking to enterprise prospects, so the clock started before the first commit.

**Task.** My job was to build the whole platform, alone at first and then with a small team, and to do it in a way that wouldn't collapse once real companies started using it.

**Action.** I picked a stack I could move fast on without painting us into a corner: Node.js, React and PostgreSQL. The first three months went into getting a demo that a client could actually click through, and nothing else. Once we had people using it, I expanded in the order customers pulled us: an API layer, impact reporting, multi-tenancy, then postal campaigns. When I hired the first three engineers, I put CI/CD, code review and short architecture docs in place early, because I knew I wouldn't be able to hold every decision in my head for much longer.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued above $1B, acquired Alaya. Their diligence went through the codebase and the architecture, so it was a fairly direct check on the technical choices.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM after we'd already had incidents we couldn't explain quickly. And multi-tenancy was retrofitted, which cost more than designing for it on day one would have. For agent systems that maps cleanly: I'd put tracing and per-action logging in from the first prototype, since debugging an agent after the fact without them is mostly guesswork.

---

## 2. Prototyping first, then productionizing: AI-assisted development at Benevity

**Likely questions:** "Tell me about bringing AI into a real workflow." "How do you validate an idea before investing in it?" "How do you get adoption without authority?"

**Situation.** After the acquisition I was a Senior Staff IC at Benevity with no direct reports. I was convinced AI-assisted review and code generation could save real time, but the two teams I wanted to bring along didn't report to me, and plenty of engineers were skeptical, with good reason given how noisy early tools were.

**Task.** Change how two teams worked day to day without a mandate, and without burning trust on a tool that might not deliver.

**Action.** I treated it like a prototype rather than a rollout. I started with three engineers who were already curious and worked with them on real PRs, not toy examples, so we could see where the tools helped and where they just produced confident nonsense. What worked got written down as prompt templates and committed to a shared repo where anyone could read, fork and fix them. Then I ran informal lunch sessions that were just demos on our own code. One example that travelled well internally was a review cycle that went about two hours faster. I didn't push anyone; the early adopters did most of the convincing.

**Result.** Within roughly three months, about 70% of engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** The slow, opt-in approach stuck better than a decree would have, but I'd add measurement earlier. We had anecdotes and a few timed examples, not a proper baseline. For an internal agent team I'd define the success signal before building anything, something like time-to-resolution on a ticket type, so the "productionize what proves valuable" decision rests on numbers rather than enthusiasm.

---

## 3. A hard architecture call under delivery pressure

**Likely questions:** "Tell me about a technical trade-off." "How do you handle tech debt when the business wants features?" "Describe a decision you made with incomplete information."

**Situation.** At Alaya our monolith was starting to crack under load. The team was split between a full microservices rewrite and keeping things as they were, and investors wanted features, not a rewrite.

**Task.** Get to a decision we could defend, one that fixed the scaling problem without freezing delivery for months.

**Action.** Instead of letting the debate run, I spent two weeks on a spike with prototype load tests for both directions. I took the numbers to the leadership team and investors and framed it as trade-offs, not opinions. The proposal was a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when another module would be worth extracting.

**Result.** The first extracted module shipped in about six weeks. Latency on the busiest endpoints improved by roughly 40%, the rest of the monolith stayed stable through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part was social, not technical: persuading people that not rewriting everything was the right call. Data ended the argument, so next time I'd benchmark earlier and shorten the debate. The same instinct applies to agents. Pick the one or two workflows where automation clearly pays, ship those properly, and set a rule for when the next one earns its place.

---

## 4. Joining a much larger organization and listening before changing things

**Likely questions:** "Tell me about working across many teams." "How do you handle a new codebase or culture?" "Tell me about a mistake."

**Situation.** Joining Benevity meant going from a small team I'd built to an engineering org roughly ten times bigger, running Java microservices with its own processes and history.

**Task.** Bring Alaya's capabilities into Benevity's platform while we kept shipping new features.

**Action.** Early on I moved too fast and started proposing fixes to things that weren't actually broken; they just worked differently from what I was used to. I corrected course. I spent about a month mapping the existing architecture and getting to know the platform and infra teams before pushing opinions. Once people knew I'd done the homework, I took on the role of cross-team architecture contact for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into the Benevity platform, I contributed to three major cross-team architecture decisions, and that groundwork is what made the later AI tooling adoption possible.

**Reflection.** Listening first made me more effective, not slower. For a team whose agents will touch CRM, support and analytics systems owned by other people, I'd start the same way: understand who owns each system and what they're afraid of before an agent writes anything into it.

---

## Questions worth asking them

1. Which internal workflow is the team automating first, and how will you know it worked?
2. Today, what does an agent need before it's allowed to write to a production system: human approval, a sandbox, scoped credentials?
3. How do you evaluate agent behavior before and after release? Is there an eval harness yet, or is that part of the job?
4. How does the team work with compliance, given that Kraken already uses GPT-based tools for KYC and SAR drafting?
5. How large is Agent Systems today, and how is it expected to grow over the next year?
