# STAR+R Stories: Senior/Staff TypeScript Engineer, AI-native startup (via Jobgether)

Four stories picked for what this posting weighs most: end-to-end ownership, product judgment with enterprise customers, architecture on a TypeScript/Postgres stack, and working with AI coding tools without giving up responsibility for the code.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you work when requirements are vague?" / "Have you been a founding engineer?"

**Situation.** In 2016 I cofounded Alaya, a platform for employee purpose and impact programs. We had no product, no customers and no code. The business side was already talking to large companies, so there was pressure to show something real quickly.

**Task.** I owned the whole technical side: architecture, the first version of the product, and later hiring the people who'd build the rest with me.

**Action.** I picked a stack I could move fast on without painting us into a corner, Node.js, React and PostgreSQL, and got the core features to a demo-able state in about three months. After that it was iterative. Enterprise clients kept asking for things we hadn't planned, so the platform grew a multi-tenant model, an API layer, impact reporting and even postal campaigns. Once the product had traction I hired and onboarded our first three engineers, and I put CI/CD, code review and written architecture notes in place early so the team wouldn't depend on what was in my head.

**Result.** Alaya went into production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued above $1B, acquired us in 2021. The due diligence was a useful outside check on the technical decisions we'd made along the way.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM once problems were already hurting, and it would have been cheap on day one. And I underestimated how painful it is to retrofit multi-tenancy. If I were starting an enterprise platform today, which is roughly what this role is, I'd design tenancy in from the first schema.

---

## 2. Choosing not to rewrite: the strangler fig decision

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you handle tech debt against feature pressure?" / "How do you design systems that scale?"

**Situation.** A few years into Alaya, the monolith was showing cracks under load. The team was split between a full microservices rewrite and staying put, and investors wanted features, not a rewrite.

**Task.** I needed a decision we could defend on both sides: something that fixed the scaling problem without freezing delivery for months.

**Action.** Rather than settle it by argument, I ran a two-week spike and built prototypes of both approaches with load tests against them. The numbers went to the leadership team and investors, trade-offs included. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and write down the criteria that would justify extracting anything else later. That last part mattered, because it turned future debates into a checklist.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed the big rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the right answer took longer than the engineering. Data settled it, so next time I'd benchmark earlier and shorten the debate. It's the same instinct I'd bring to a young serverless codebase: split along real load and ownership boundaries, not because a diagram looks cleaner.

---

## 3. Getting two teams to adopt AI-assisted development without authority

**Likely questions:** "How do you use AI coding tools, and how do you keep quality up?" / "How have you influenced engineers who don't report to you?" / "How would you set engineering standards here?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would pay off for two teams I worked with, but neither reported to me and a mandate wasn't on the table.

**Task.** Change how those engineers actually worked day to day, and do it in a way that wouldn't fade once I stopped pushing.

**Action.** I started small, with three engineers who were already curious. We built demos on real work, actual pull requests rather than toy examples, so the time saved was visible and nobody could dismiss it as a staged trick. Then came informal lunch-and-learn sessions with no attendance expectations. The prompt templates that worked went into a shared repo anyone could use or improve, and I wrote up concrete results as they came, like a PR review cycle that came in around two hours shorter.

**Result.** After three months, about 70% of engineers on both teams were using AI-assisted code review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** It was slower than a top-down rollout, but it stuck, because the people who adopted it did so on their own terms and then argued for it themselves. The question I care about more now is ownership: generated code still needs someone who understands it well enough to defend it in review and debug it at 2am. In an AI-native team I'd want that written into the standards from the start.

---

## 4. Integrating Alaya into Benevity after the acquisition

**Likely questions:** "Tell me about working across teams or organisations." / "How do you handle integrations with systems you don't control?" / "Tell me about a time you had to adapt."

**Situation.** After the 2021 acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times Alaya's size, the codebase was Java microservices instead of our Node.js stack, and the processes were completely different.

**Task.** Bring Alaya's capabilities into Benevity's platform and keep building new features at the same time, without losing the delivery pace we'd had as a startup.

**Action.** For the first month I mostly mapped the existing architecture and asked questions before proposing changes. I spent time with the platform and infrastructure teams early on, because any integration was going to depend on them, and it was better to earn some trust before arguing for anything. Over time I became the cross-team architecture contact for the Europe-facing part of the product, which meant a lot of translating between teams with different assumptions.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** At first I moved too fast and tried to fix things that weren't broken in the new organisation. Slowing down and listening made me far more effective. It's a lesson that carries over to enterprise integrations generally: the other system usually looks the way it does for a reason, and it pays to find out what that reason is before designing around it.
