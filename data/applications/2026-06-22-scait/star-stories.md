# STAR Stories — Scait / Founding Engineer

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

Back in 2016, three of us decided to build a purpose and impact platform for employee engagement. No product, no customers, no codebase. My co-founder handled sales, I handled everything technical. The first six months it was just me writing code and making architectural decisions that I knew would either age well or haunt us later.

I chose to build on Node.js, React, and PostgreSQL because it was pragmatic and hire-able, not because it was fashionable. I modeled multi-tenancy into the schema from day one even though we had exactly zero tenants at the time. Within three months we had a working demo. Within a year we had the first enterprise clients in Switzerland and France and I was starting to hire. I onboarded the first three engineers, set up CI/CD, code review culture, and architecture documentation while still writing production features myself.

By 2021 we had 50+ enterprise clients and Benevity, a Canadian unicorn valued at over $1B, acquired us. The architecture I'd built in those early months had never needed a rewrite. It scaled, it transferred, and it held through an acquisition audit without surprises.

What I'd do differently: I'd instrument observability earlier. We added proper APM too late. And I underestimated the operational cost of retrofitting certain multi-tenancy features that I'd deferred. The lesson was that some decisions are reversible and some aren't, and it's worth slowing down enough to tell the difference.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"

At Alaya, around year three, the monolith was showing cracks. We had engineers on both sides of a debate: full microservices rewrite versus staying monolithic but cleaning it up. Investors were watching feature velocity. There was no clean answer and I had to own one.

I ran a two-week technical spike comparing both approaches with load tests. Not opinion, benchmarks. I built a small prototype of the extracted module approach to get real latency numbers. Then I went to the CTO and the board with trade-offs, not with a recommendation dressed up as trade-offs. The proposal I landed on was a strangler fig migration: extract the two highest-traffic modules first, define clear criteria for extracting more, and leave the rest of the monolith alone.

The first extracted module shipped six weeks later. The busiest endpoints improved by roughly 40% on response time. The monolith stayed stable through the acquisition, so we never paid the cost of a big-bang rewrite that was never needed.

The hardest part wasn't the technical work, it was convincing people that "not rewriting everything" was a defensible technical position. What got it across was the data. I'd run even more aggressive benchmarks earlier next time to cut the debate shorter.

---

## 3. Leading Without Formal Authority

**Best for:** "How do you drive change when you don't have direct reports?" / Staff+ / principal engineer questions

At Benevity after the acquisition, I was a Senior Staff IC. No direct reports. But I'd become convinced that AI-assisted development workflows could cut significant time from our review cycles and I wanted to push for adoption across two engineering teams that had no mandate to change anything.

The approach I took was to start very small. I found three engineers who were already curious about the tooling and worked with them first, building internal demos that showed specific time savings on tasks they actually did. Not abstract pitch decks, concrete examples: "this PR review that took two hours took 40 minutes with this approach." Then I ran informal lunch sessions, no attendance requirement, just demos and questions.

I also built reusable prompt templates and committed them to a shared repo so the knowledge wasn't locked in my head or in one person's workflow. I made it copy-paste useful, not aspirational.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation in their regular workflow. I became the informal AI tooling lead for the org. Nobody assigned that to me.

The mandate-free approach was slower but the adoption was much stickier. Engineers who adopted it voluntarily became internal advocates, and that's something no top-down directive produces.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating change" / "How do you work in a larger, more complex org?"

When Benevity acquired Alaya in 2021, I went from a team of 8 to an engineering org about 10 times that size. Different language (Java instead of TypeScript for the core platform), different processes, different culture. I'd gone from being the technical decision-maker to being one of many senior engineers with no particular status.

The first thing I did was stop. I spent the first month mostly mapping: reading architecture docs, sitting in on meetings, asking questions before I offered opinions. It was uncomfortable because I was used to moving fast, but I knew that engineers who parachute into a new org and start proposing changes immediately lose credibility quickly.

After I understood the landscape, I started building relationships with the platform and infra teams. Not to push my ideas, but to understand theirs. By the time I had a perspective worth sharing, I had enough context to make it land. I contributed to three major cross-team architecture decisions in the first year and became the go-to person for AI tooling across two teams.

The lesson I took out of it was that slowing down to listen at the start compresses the timeline overall. I moved too fast at first, pushed too hard on a couple of things that weren't broken, and lost some credibility that I had to earn back. That's a mistake I've thought about a lot since.
