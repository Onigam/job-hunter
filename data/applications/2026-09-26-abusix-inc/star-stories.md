# STAR+R Stories: Abusix, Head of Engineering in Network Security

Picked for what this listing stresses: a player-coach who still writes code, building a team from the ground up, owning architecture, tightening the product-to-engineering handoff, and bringing AI into daily development. The values (Own It, Push Forward, Be Real) are worth naming out loud when a story fits one.

---

## 1. Building the platform and the team from zero (Alaya)

**Likely questions:** "Tell me about building a team from the ground up." / "How do you stay hands-on while leading?" / "Own It"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, and the business side was already talking to its first enterprise prospects.

**Task.** My job was to build the whole platform, first on my own and then with a team, fast enough that sales had something real to show without painting us into a corner we'd pay for later.

**Action.** I went with a stack I knew could carry us for years without much ceremony: Node.js, React and PostgreSQL. The first three months went into getting to a demo we could put in front of clients. After that the work widened into multi-tenancy, an API layer, impact reporting and postal campaigns. When it was time to hire, I set up CI/CD, a code review habit and architecture docs before the first engineer started, because I'd seen how hard it is to add those once people have already formed their own routines. I hired and onboarded the first three engineers and kept writing production code the whole time.

**Result.** The platform went into production and grew to 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021, and a good part of their due diligence was the platform itself.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM once problems were already hurting, and for a company like Abusix processing live network data that would be the first thing I'd check. I also underestimated how painful it is to retrofit multi-tenancy, so today I'd design for it from day one.

---

## 2. Picking the boring architecture option under delivery pressure (Alaya)

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you handle tech debt versus features?" / "Push Forward"

**Situation.** A few years into Alaya, the monolith was showing cracks on the busiest endpoints. Half the team wanted a full microservices rewrite. Our investors wanted new features, not a rewrite, and they weren't wrong to worry.

**Task.** I needed a decision we could defend on both sides: something that fixed the scaling problem without stopping delivery for months.

**Action.** Rather than arguing it out in meetings, I ran a two-week spike comparing both approaches with prototype load tests. Then I took the numbers to the CTO and the investors and put the trade-offs on the table instead of opinions. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave the rest as a monolith, and write down clear criteria for when any other module would earn its own service.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never had to do the big-bang rewrite.

**Reflection.** The technical part was easier than the persuasion. People hear "we're not rewriting it" as a lack of ambition. Data settled it, and next time I'd benchmark earlier so the debate is shorter. With a 15-year-old codebase like Abusix's, I'd expect this same conversation to come up, and I'd want to have it with numbers from week one.

---

## 3. Bringing AI into the team's workflow without a mandate (Benevity)

**Likely questions:** "How would you improve engineering practices?" / "How do you use AI in your own work?" / "How do you drive change?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development for code review and generation.

**Task.** Change how people worked day to day, without the authority to tell anyone to do it.

**Action.** I started with three engineers who were already curious and worked with them until they had real time savings to point at. From there I ran informal lunch-and-learn sessions that were basically live demos, no slides and no mandate. The prompt templates we found useful went into a shared repo so nobody had to start from scratch, and I wrote up concrete wins as they happened, like one PR review cycle that got about two hours shorter.

**Result.** Within three months around 70% of the engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own became the ones arguing for it. As Head of Engineering I'd have the authority to mandate it at Abusix, and I'd still mostly not use it. What I'd do differently is measure from the start (cycle time, review turnaround) so the case doesn't rest on anecdotes.

---

## 4. Joining a much bigger org after the acquisition (Benevity)

**Likely questions:** "Tell me about working closely with product and leadership." / "A time you got something wrong." / "Be Real"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times Alaya's size, with a Java microservices codebase, different processes and a different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while keeping up the product delivery pace we'd had as a startup.

**Action.** My first instinct was to start fixing things, and I did push a few changes too early on things that weren't actually broken. I noticed it wasn't landing and changed approach: I spent time mapping the existing architecture, then built relationships with the platform and infra teams before pushing technical opinions. Over time I became the cross-team architecture contact for the Europe-facing product surface, which meant a lot of translating between what product was promising and what the platform could realistically do.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person two teams came to for AI tooling.

**Reflection.** I moved too fast at first, and I'd say that plainly in an interview. Walking into a 10-person team at Abusix that's been working for 15 years, I'd spend the first month listening and reading code before changing much, and I'd tell the team that's the plan so they know what to expect.

---

## Prep note: the question I'll almost certainly get

"You haven't worked in network security. Why should we hire you?"

Answer honestly and don't oversell. Something along these lines: the domain is new to me, and I'd expect to spend the first weeks learning it from the team and from customers. What I bring is the rest of the job description: I've built a platform and a team from zero, kept writing production code while doing it, and got a product through acquisition due diligence. Then show you did the homework. Mention ContactDB, XARF, the three Guardian products, and how real-time blocklists make latency and data freshness a product feature rather than an ops metric. Close by asking which part of the platform the team thinks is most fragile right now.

Other questions to prepare for: how I'd run 1:1s and growth conversations (little formal management history, so be concrete about how I mentored the first Alaya hires), how I'd make releases predictable, and how I'd split my week between code and management with 10 reports.
