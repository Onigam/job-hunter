# STAR+R Stories: Staff Software Engineer, Product Engineering (Ashby, EU)

Ashby's onsite is three non-coding interviews: product thinking, technical design and infrastructure. The posting also stresses owning projects end-to-end, ambiguity, speed versus quality, building abstractions, and taking feedback well. The stories below are picked for those, and each one notes where it fits.

---

## 1. Owning a product from a blank page (Alaya)

**Likely prompts:** "Tell me about a project you owned end-to-end." / "How do you work when the problem isn't defined yet?" / Product thinking round.

**Situation.** In 2016 I co-founded Alaya, a purpose and engagement platform for employees. There was no product, no customer and no codebase, just a thesis about how companies could get their people involved in social impact.

**Task.** I was the technical cofounder, so building the whole platform was on me, first alone and then with a small team, while the business side was trying to sign its first enterprise clients. Whatever I built had to be demo-able quickly and still hold up once real companies were running on it.

**Action.** I went with a stack I knew could carry us without heroics: Node.js, React and PostgreSQL. The first three months went into getting the core flows to a point where we could put them in front of a prospect. After that the product grew in the order customers pulled it, so multi-tenancy, an API layer, impact reporting and eventually postal campaigns came one after another. Once there was enough work to justify it, I hired and onboarded our first three engineers, and set up CI/CD, code review and architecture docs so they weren't depending on what was in my head.

**Result.** Alaya went live with 50+ enterprise clients across Switzerland and France, and Benevity acquired it in 2021. The platform went through due diligence and kept running through the transition.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM after we'd already been bitten by issues we couldn't see. And multi-tenancy, which we retrofitted, cost much more than it would have if I'd designed for it on day one. Now I ask early which assumptions would be expensive to reverse, and I pay for those up front.

---

## 2. Choosing not to rewrite (Alaya)

**Likely prompts:** "Describe a technical trade-off you made." / "How do you balance speed and quality?" / Technical design round.

**Situation.** A couple of years in, Alaya's monolith was showing cracks under load. Inside the team there was a real debate between a full microservices rewrite and keeping a modular monolith. Investors, meanwhile, wanted features, not a rewrite.

**Task.** I had to make a call we could defend, one that fixed the scaling problem without stopping feature work for months.

**Action.** Rather than settle it in a meeting, I ran a two-week spike with prototype load tests for both approaches. The numbers went to leadership and the investors as trade-offs, not as my preference. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down the criteria that would justify extracting anything else later.

**Result.** The first extracted module shipped in about six weeks. Those busiest endpoints got roughly 40% faster, the rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was persuading people that not rewriting everything was the ambitious option, and the data did most of that work. Next time I'd benchmark earlier and keep the debate shorter, because two weeks of arguing cost us nearly as much as the spike did.

---

## 3. Getting two teams to change how they work, with no authority (Benevity)

**Likely prompts:** "Tell me about building something that made other engineers faster." / "How do you influence people who don't report to you?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how fast we shipped, but the two teams I wanted to bring along didn't report to me and had no reason to change their habits.

**Task.** Get engineers to actually use AI tooling day to day, without a mandate and without becoming one more process they resented.

**Action.** I started with three engineers who were already curious. Instead of slides, I built small internal demos that showed time saved on work they actually did. We ran informal lunch-and-learn sessions where I just showed things working. The prompt templates that kept proving useful went into a shared repo so anyone could pick them up. I also wrote up concrete wins, like a PR review cycle that took about two hours less than usual, so the case didn't rest on my enthusiasm.

**Result.** About three months in, roughly 70% of engineers across both teams were using AI-assisted review and code generation. I ended up as the informal AI tooling lead across the org.

**Reflection.** Doing it without a mandate was slower, but it stuck. The people who adopted it on their own terms became the ones arguing for it in their teams, which a decree wouldn't have produced. It's the same instinct as building a reusable abstraction: make the right way the easy way and people come to it.

---

## 4. Joining a much bigger org and slowing down (Benevity integration)

**Likely prompts:** "Tell me about a time you got feedback that changed how you worked." / "How do you operate in an unfamiliar codebase?" / Infrastructure round, as context for working inside a larger platform.

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times Alaya's size, with a Java and microservices codebase and processes I didn't know.

**Task.** Bring Alaya's capabilities onto Benevity's platform and keep shipping new work, without losing the velocity we'd had as a startup.

**Action.** Honestly, I started badly. I came in trying to fix things that weren't broken for the new org, and the pushback was fair. So I reset. I spent about a month mapping the existing architecture before proposing anything, and built relationships with the platform and infra teams before arguing for technical positions. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated onto Benevity's platform. I contributed to three major cross-team architecture decisions and became the person both teams came to on AI tooling.

**Reflection.** Being a founder made me fast, and in a new org that speed wasn't a virtue until I understood why things were the way they were. Listening first made me more effective, not less. Ashby says it gives a lot of feedback; this is the story I'd use to show I can take it and change course.

---

## Quick mapping to Ashby's interviews

| Round | Lead story | Backup |
|---|---|---|
| Hiring manager intro | 1 (Alaya end-to-end) | 3 |
| Product thinking | 1 | 4 |
| Technical design | 2 (strangler fig) | 1 (multi-tenancy reflection) |
| Infrastructure | 2 | 4 |

**Gaps to prepare honestly:** Ashby's stack is TypeScript, React, GraphQL, Node.js, Postgres and Redis, which lines up closely with Alaya's. For the pair-programming screen, practise reading an unfamiliar TypeScript and GraphQL codebase quickly and talking through decisions aloud. Also be ready to say, plainly, that you're fine with no sprint planning and no junior mentoring load, since the posting calls both out.
