# STAR+R Stories: Founding Software Engineer (2nd engineer), energy-infrastructure startup via BAO

Picked for a second-engineer seat at a ~10-person startup automating admin, financial and regulatory work for renewable projects. Expect questions on 0 to 1 ownership, trade-offs under delivery pressure, working with legacy and third-party systems, and how you use AI without trusting it blindly. Keep each answer around two minutes out loud.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." "How do you handle ambiguity?" "Why a founding role again?"

**Situation.** In 2016 I co-founded Alaya, a platform that helped companies run employee purpose and impact programmes. There was no product, no customers and no code; the business side was already talking to the first enterprise prospects, so the clock was running from day one.

**Task.** My job was to build the whole platform, alone at first, and then grow a team around it without letting the product slow down while enterprise clients were signing.

**Action.** I went with a stack I knew could carry us without heroics: Node.js, React and PostgreSQL. The first three months were about getting to a demo we could actually put in front of a buyer, so I cut anything that didn't serve that. Once clients arrived, the work shifted to the unglamorous parts, a multi-tenant model, an API layer, impact reporting, even postal campaigns that one client needed. When we could afford it I hired our first three engineers, and before they wrote much code I set up CI/CD, a code review habit and short architecture notes so they weren't guessing why things were the way they were.

**Result.** The platform grew to 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021. A lot of the original technical choices survived due diligence and the integration that followed, which is the part I'm proudest of.

**Reflection.** Two things I'd change. Observability came late; we added proper APM well after we needed it. And multi-tenancy was something I retrofitted rather than designed in, which cost us more than doing it up front would have. For a company serving many developers and operators on one platform, I'd model tenancy and audit trails in the first weeks.

**Bridge to this role.** You're at roughly the stage Alaya was at when I hired engineer number two. I know what that person needs to own, and what they shouldn't have to inherit.

---

## 2. Not rewriting the monolith

**Likely questions:** "Tell me about a hard technical trade-off." "How do you deal with tech debt when the business wants features?"

**Situation.** A few years into Alaya, the monolith was showing cracks on its busiest endpoints. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted features, not a rewrite.

**Task.** I had to land a decision we could defend to both the engineers and the investors, one that fixed the real performance problems without freezing delivery for months.

**Action.** Rather than argue it out, I ran a two-week spike and prototyped both directions with load tests, then took the numbers to the CTO and investors. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first and leave everything else where it was. We also wrote down the criteria that would justify extracting anything else later, so the debate wouldn't restart every quarter.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and nobody had to sit through a big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was persuading people that not rewriting everything was the right call. Data settled it. Next time I'd benchmark earlier and cut the debate shorter.

**Bridge to this role.** With Next.js, Node and Postgres on Vercel plus Inngest for background work, you'll hit the same question soon: what stays in the main app and what becomes its own job or service. I'd rather answer it with load numbers than taste.

---

## 3. Working inside someone else's systems after the Benevity acquisition

**Likely questions:** "Tell me about integrating with a system you didn't design." "How do you handle legacy code?" "Cross-functional collaboration?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organisation was about ten times bigger than Alaya, ran on Java and microservices, and had its own processes and history.

**Task.** We needed Alaya's capabilities to live inside Benevity's platform while still shipping new features, without losing the speed we'd had as a small team.

**Action.** I spent most of the first month mapping how the existing architecture actually behaved before suggesting any change. I got to know the platform and infra teams before I pushed opinions on them, which turned out to matter more than any diagram. Over time I became the cross-team architecture contact for the Europe-facing product surface, so a lot of integration questions came through me.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Early on I moved too fast trying to fix things that weren't broken. Slowing down and listening first made me more useful, and it's how I'd approach the integrations you're dealing with, where a grid operator portal or a bank API won't change just because it's awkward for us.

**Bridge to this role.** Third-party and legacy integrations, banking included, are a big part of this job. Most of that work is understanding the other side's constraints before writing the adapter.

---

## 4. Getting engineers to use AI tooling without a mandate

**Likely questions:** "How do you think about AI in engineering?" "Tell me about influencing without authority." "How would you approach the AI agent features?"

**Situation.** At Benevity I was an IC with no direct reports, but I wanted two teams that didn't report to me to adopt AI-assisted development.

**Task.** I had to change how people worked day to day without being anyone's manager and without a top-down decree.

**Action.** I started with three engineers who were already curious and built small internal demos that showed real time saved on real work. Then came informal lunch-and-learn sessions, just demos, no obligation. The prompt templates that worked went into a shared repo, and I wrote up concrete wins, like a PR review cycle that took about two hours less. A good part of the conversation was also about where generated code shouldn't be merged without a closer look.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Doing it without a mandate was slower but it stuck. People who adopted it on their own terms argued for it internally, which I couldn't have bought with a directive.

**Bridge to this role.** Your document pipelines and agent features have the same problem in product form: LLM output is useful until it's confidently wrong on a permit or a bank detail. I'd want eval sets, confidence thresholds and a clear human review path built in from the start.

---

## Questions to ask them

- Of the 900+ projects, which step still eats the most human hours per project, and is it the same across customer types?
- How are AI-extracted fields validated today before they reach a bank or a regulator?
- What did the first engineer build that they'd do differently now?
- How does the founding team split product decisions between the founders and engineering?
- What does the €4M round need to prove by the next raise, in product terms?
