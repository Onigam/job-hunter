# STAR Stories — PostHog / Technical Ex-Founder

---

## Story 1: Building Alaya from Zero to Acquisition

**Likely questions:** "Tell me about something you built from scratch." / "What does owning a product end-to-end mean to you?" / "How do you navigate ambiguity?"

In 2016, my co-founder and I started Alaya with a blank page. No product, no customers, no inherited codebase. The idea was an employee purpose and impact platform for enterprises: companies would use it to manage volunteer programs, donations, and team challenges. The business had a few early conversations with prospects, but nothing was signed. My job was to build the thing.

I made the first call on the stack alone: Node.js, React, PostgreSQL. Not glamorous, but pragmatic. I wanted us to be able to hire easily, iterate fast, and not spend our first six months fighting the framework. The first three months were heads-down building: authentication, multi-tenant data model, the activity feed, the basics. We got to a first demo in week twelve.

From there it became an iterative loop. I was doing customer calls in the morning, writing code in the afternoon, and reviewing architecture trade-offs in the evening. When we had our first paying clients, I hired three engineers, set up CI/CD, introduced code review, and started writing the architecture docs that would let someone else understand the system without me in the room.

We reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian company with a $1B+ valuation, acquired us. Looking back, the acquisition validated most of the early technical bets, but I'd do two things differently: I'd design for multi-tenancy from day zero instead of retrofitting it at month eighteen, and I'd add proper observability (APM, tracing) in the first quarter, not the last.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Likely questions:** "Tell me about a technical trade-off you had to navigate." / "How do you handle technical debt?" / "Describe a time you had to say no to a rewrite."

About two years into Alaya, the monolith was showing cracks. We had a few endpoints that were slow under load, and the team was starting to argue about a full microservices rewrite. Investors were pushing for new features, not rewrites. The debate had been going for three weeks without resolution, which was starting to cost us velocity.

My task was to make a defensible call: full rewrite, modular monolith, or something else, and then actually move us forward.

I ran a two-week technical spike. I built prototypes for both the microservices extraction approach and the modular monolith approach, ran load tests on each, and documented the results. Then I presented the trade-offs to the CTO and investors with concrete numbers, not opinions. What I proposed was a "strangler fig" migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define clear criteria for when additional extraction was worth the cost.

We shipped the first extracted module in six weeks. Performance improved ~40% on the busiest endpoints. The rest of the monolith held up fine through the acquisition. No big-bang rewrite happened, and we didn't lose a quarter of product velocity to infrastructure.

The hardest part was convincing people that "not rewriting everything" was the right call. What helped was having data. I'd do more early benchmarking in the future to cut the debate shorter; three weeks of arguing before I ran the spike was three weeks of lost time.

---

## Story 3: Driving AI Adoption Without a Mandate

**Likely questions:** "How do you influence without authority?" / "Tell me about leading change in a team that didn't report to you." / "How do you get people to adopt new tools?"

After the Benevity acquisition, I was a Senior Staff IC on a team ten times the size of Alaya. No direct reports. I wanted to introduce AI-assisted development practices (code review, generation, prompt engineering) across two engineering teams, but I had no mandate to do so.

If I'd pushed top-down, engineers would have complied on paper and ignored it in practice. So I started small. I found three engineers who were already curious about AI tooling and ran informal demos with them, showing concrete time savings on things they were already doing: PR reviews, boilerplate generation, documentation drafts. I built a few reusable prompt templates and committed them to a shared internal repo so they weren't trapped in my head.

Once those three engineers had real stories to tell, I organized lunch-and-learn sessions. No mandate, no required attendance. People came because colleagues they trusted were saying it worked. I documented specific results: one team member saved about two hours on a PR review cycle using a prompt template I'd written. That kind of concrete evidence was more persuasive than any slide deck.

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly. I became the informal AI tooling lead across the org.

The reflection I'd take into PostHog's context: the mandate-free approach is slower to start but much stickier. Engineers who adopt something on their own terms will advocate for it internally. A decree from above gets you compliance; peer-driven adoption gets you actual behavior change.

---

## Story 4: Post-Acquisition Integration at Benevity

**Likely questions:** "Tell me about navigating a major organizational change." / "How do you operate in a new, unfamiliar codebase or team?" / "Describe a time you had to earn trust quickly."

When Benevity acquired us in 2021, I joined a company with a Java-based microservices platform, formal agile processes, and a team structure I'd never worked in before. Alaya had been five engineers. Benevity had fifty-plus, with dedicated platform, infra, and QA teams.

My task was to integrate Alaya's capabilities into Benevity's platform without losing the speed we'd built, and without burning bridges in a new organization where I had no existing relationships.

I spent the first month just mapping the existing architecture. I read code, attended architecture reviews, and asked questions without pushing opinions. I built relationships with platform and infra engineers before I proposed anything. When I finally had suggestions, I framed them in terms of their constraints, not mine.

From there I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two engineering teams. The core Alaya features were successfully migrated into Benevity's platform within the first year.

The lesson I'd carry forward: I initially moved too fast trying to "fix" things that weren't broken in the new org. Once I slowed down and listened, I became more effective. A new environment is a context-gathering exercise first, not a place to immediately demonstrate your opinions.
