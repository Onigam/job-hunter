# STAR+R Stories: Ecair, Staff Engineer (first Platform hire)

Interview loop per the posting: recruiter screen with a TypeScript check (Julien), open engineering conversation with the CTO (Théo), 90-minute technical writing homework, three technical interviews (React + TypeScript, code review, system design), then a half-day onsite with the founders and product team. The stories below are aimed mostly at the CTO conversation and the founders' half-day, where the questions will be about building a platform team from nothing, trade-offs between velocity and rigor, and how coding agents change the way a team works.

---

## Story 1: Building Alaya's platform from a blank page

**Likely questions:** "You'd be the first person on this team. How do you decide what to build first?" / "Tell me about a time you built something from zero."

**Situation.** In 2016 I co-founded Alaya, a platform for employee purpose and engagement. There was no product, no customer and no codebase, just a business side that was already talking to large companies and needed something to show them.

**Task.** My job was to build the whole platform, on my own at the start and then with a small team, without designing for a scale we didn't have yet but also without painting us into a corner once enterprise clients arrived.

**Action.** I picked a stack I knew would hold up and that I could hire for, Node.js, React and PostgreSQL, and I resisted anything more exotic. The first three months went into getting to a demo the business could put in front of prospects, because until then every architecture discussion was hypothetical. Once we had real clients I widened the platform step by step: a multi-tenant model, an API layer, impact reporting, postal campaigns. When I hired the first three engineers I put the boring things in place early, CI/CD, a code review habit and short architecture docs, so that the team could move without me being in every decision.

**Result.** The platform went into production and grew to more than 50 enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian unicorn valued above $1B, acquired Alaya, and the platform's technical choices held up through their due diligence.

**Reflection.** Two things I'd change. I added proper APM far too late, and for months we were guessing about performance when we could have been measuring it. And multi-tenancy cost a lot more to retrofit than it would have cost to design in from the start. For Ecair that translates directly: Datadog is already in place, so as a first platform hire I'd start by making sure every product team actually reads it, and I'd treat the partner API and tenant boundaries as day-one concerns.

---

## Story 2: Choosing a strangler fig over a rewrite

**Likely questions:** "Tell me about a technical trade-off under delivery pressure." / "How do you deal with tech debt when the business wants features?" / System design warm-up.

**Situation.** A few years into Alaya, our monolith was showing cracks under load. The team was split between a full microservices rewrite and keeping a modular monolith, and investors were clearly more interested in new features than in a rewrite.

**Task.** I had to make a call the team and the investors could both live with, one that bought us scalability without stopping delivery for months.

**Action.** Instead of letting the debate run on opinion, I set up a two-week spike: prototypes of both approaches and load tests against them. I brought the numbers to the CTO and the investors and proposed a strangler fig migration, where we'd extract the two modules carrying the most traffic and leave everything else in the monolith. We also wrote down explicit criteria for when any other module would earn its own extraction, so the conversation wouldn't restart every quarter.

**Result.** The first extracted module shipped in about six weeks. Response times on the busiest endpoints improved by around 40%, the rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical; it was persuading people that not rewriting everything was the right answer. Data ended the argument, and next time I'd benchmark earlier to shorten it. Ecair's posting says velocity and rigor aren't mutually exclusive, and this is the clearest example I have of that being true in practice.

---

## Story 3: Getting two teams onto AI-assisted workflows without authority

**Likely questions:** "How do you use coding agents, and how do you keep quality up?" / "How do you influence engineers who don't report to you?" / "What would you do about Claude-authored PRs?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how we worked, but the two teams I wanted to bring along didn't report to me and had no reason to take my word for it.

**Task.** I needed to change day-to-day habits in those teams, adding AI tooling to code review and generation, without any mandate behind me.

**Action.** I started small, with three engineers who were curious anyway. With them I built internal demos on our own code, so the time savings were visible on work people recognised rather than on toy examples. I ran informal lunch-and-learn sessions that were demos, not presentations, and I committed reusable prompt templates to a shared repo so nobody had to start from scratch. Whenever something concrete happened, such as a PR review cycle that came in about two hours shorter, I wrote it down and shared it.

**Result.** Within roughly three months around 70% of the engineers on both teams were using AI-assisted review and generation, and I ended up as the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but the adoption stuck, because the people who came on board on their own terms did the advocacy for me. At Ecair the adoption problem is already solved, with about a quarter of PRs shipped entirely by Claude, so the platform question shifts to guardrails: what review, tests and observability should a PR need when no human wrote it, especially on code that moves money and handles subsidy files.

---

## Story 4: Listening first after the Benevity acquisition

**Likely questions:** "How would you spend your first 90 days?" / "Tell me about joining an existing team and changing how it works." / Founders' half-day.

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya, with a Java and microservices codebase, different processes and a different culture.

**Task.** I had to fold Alaya's capabilities into Benevity's platform while we kept shipping new features, and I didn't want to lose the speed we'd had as a startup.

**Action.** My first instinct was to fix things, and I did push too quickly on a few of them early on. Once I noticed it, I changed approach. I spent about a month mapping the existing architecture before proposing anything, and I put time into getting to know the platform and infra teams before arguing technical positions with them. That groundwork is what later let me act as the architecture liaison for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the reference person for AI tooling across two teams.

**Reflection.** Moving too fast in a new organisation cost me credibility I had to win back. Slowing down to listen made me more effective, not less. As Ecair's first platform engineer, my first weeks would look similar: sitting with the Product Engineers and the operations team, who use the same web app as clients, before deciding what the platform team should own.

---

## Notes for the system design and writing rounds

The homework is a technical document for a specific use case, and Story 2 is the best material for it: a decision framed with data, explicit criteria, and a migration path rather than a big bang. For system design, expect something close to Ecair's core flow, such as an installer uploading a quote or a MaPrimeRénov' file that's processed asynchronously (BullMQ on Redis), checked by an agent, reviewed by operations and turned into an advance or a credit offer. Be ready to talk about idempotent jobs, retries and dead-letter queues, audit trails for every agent decision, how to keep p95 under 600ms on the synchronous path by pushing heavy work onto queues, and how the public Hono API for partners such as installer software (Solteo, Reonic) is versioned separately from the internal tRPC API.

Honest gaps to own if asked: no production experience with Drizzle, Hono, tRPC or BullMQ specifically, and no fintech or lending background. The answer is that the underlying patterns (typed APIs, ORMs over PostgreSQL, Redis-backed queues) are familiar, and that the regulatory side is something I'd learn from the ops team in the first weeks.
