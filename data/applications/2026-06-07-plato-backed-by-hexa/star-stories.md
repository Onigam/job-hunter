# STAR Stories — Plato (Founding Engineer)

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya with two non-technical co-founders. We had a product vision and early interest from corporate clients, but no code, no infrastructure, and no other engineers. My job was to build something real fast enough to keep the momentum alive.

I started with a pragmatic stack: Node.js on the backend, React on the frontend, PostgreSQL for relational data. Not the most glamorous choices, but ones I could move quickly with and eventually hire around. The first three months were about getting to a demo that didn't embarrass us. Months four through eighteen were harder. Every new enterprise client revealed a multi-tenancy assumption I'd gotten wrong, and the data model I'd designed for a single organization started fighting back when we onboarded the second. I made a series of targeted surgical changes rather than rewriting, each one unblocking the next client without breaking the previous ones.

We reached 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian unicorn valued above $1B, acquired us. The acquisition validated the technical decisions I'd made from day one, including the ones I was most uncertain about at the start.

What I'd do differently: observability from day one. We added proper APM late and debugging production issues in year one was painful. I'd also design for multi-tenancy explicitly from the start rather than retrofitting it under pressure.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle disagreement on architectural direction?"

Around year three at Alaya, we had a growing monolith and a team split into two camps: one pushing for a full microservices migration (my estimate: nine to twelve months with no user-facing output), the other wanting to keep patching. The business context made it harder. We had a term sheet in active negotiation, and announcing a nine-month backend rewrite wasn't an option the founders were willing to consider.

I proposed a middle path and spent two weeks validating it with a technical spike. The idea was a strangler fig migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when additional modules should come out. The spike included prototype load tests, which gave me numbers to bring into the room rather than opinions.

The first extracted module shipped in six weeks. Performance on those endpoints improved by roughly 40%. The rest of the monolith stayed stable through due diligence and acquisition. We never did a big-bang rewrite.

The hardest part wasn't the technical work; it was convincing people that "not rewriting everything" was actually the right call. Data helped. I'd run the benchmarking even earlier next time to cut the debate period shorter.

---

## 3. Shipping AI Tooling Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about driving change in an engineering org"

At Benevity, I was a Senior Staff IC with no direct reports and no ability to mandate anything. The engineering culture was solid but appropriately skeptical of AI tooling, which had a reputation for producing confident, wrong output. I wanted to change how engineers on two teams actually worked, but I couldn't do it by decree.

I started with three engineers who were already curious. I ran informal demos with them and documented concrete time savings, including one example where a PR review cycle dropped from four hours to around ninety minutes. From there I built shared prompt templates, committed them to a shared repo, and ran occasional lunch sessions that were framed as "here's a thing I tried" rather than formal training. No mandates, no internal campaigns.

Three months in, roughly 70% of engineers on both teams had integrated some form of AI tooling into their daily workflow. More useful than the number: several of them had started advocating for it internally without me asking. That kind of adoption sticks in ways that top-down rollouts don't.

What I'd do differently: start the documentation earlier. Engineers trust a tool more when they can see that someone has already mapped the failure modes, not just the wins.

---

## 4. Post-Acquisition Integration at Scale

**Best for:** "Tell me about navigating ambiguity" / "Working in a large, established codebase after a startup"

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering org that was ten times that size, with a Java microservices codebase I'd never touched and processes that moved on a different cadence than what I was used to.

My first instinct was to push. I knew the product well, I had opinions about the architecture, and I could see things I thought could be improved. I spent the first month mostly resisting that instinct and mapping instead: understanding how the existing systems fit together, who owned what, and where the real pain points were versus the aesthetic ones. I built relationships with the platform and infra teams before I proposed anything.

The technical contribution I ended up being most useful for was AI tooling adoption, which became a cross-team effort that I described in the previous story. But I also contributed to three major cross-team architecture decisions and became the liaison for the Europe-facing product surface, which built on the operational context I had from Alaya.

What I learned: the biggest cost of joining a new org isn't the learning curve on the codebase. It's the learning curve on the decision-making culture. Moving slower at the start let me move faster for the following four years.

---
