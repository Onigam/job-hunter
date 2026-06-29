# STAR Stories — Better Stack / Founding Product Engineer

---

## 1. Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "What does extreme ownership look like for you?"*

In 2016, I co-founded Alaya with a business partner. We had the idea, a potential first customer, and no product. My job was to build the platform while the business side was signing contracts, which meant I was shipping features before we had a stable spec, designing a multi-tenant architecture before we knew how many tenants we'd have, and making infrastructure decisions that would have to survive an acquisition five years later.

The first year I was the only engineer. I chose Node.js, React, and PostgreSQL because I wanted a stack I could move fast in without painting myself into a corner, not because it was fashionable. In the first three months I shipped the core product: user profiles, the impact campaign engine, reporting. Then I started hiring: our first three engineers joined over the following year, and I set up CI/CD, code review processes, and architecture documentation while still being the primary committer.

By 2021, we had 50+ enterprise clients across Switzerland and France. Benevity acquired us that year, and during due diligence it became clear that the technical decisions made in 2016 had held up. The multi-tenant data model, the API layer, the reporting infrastructure: all of it migrated intact into Benevity's platform.

If I'm honest about what I'd do differently, it's observability. We added proper APM very late, which made debugging production issues in year three harder than it needed to be. Better Stack's product would have been useful from day one.

---

## 2. Making a Hard Architecture Decision Under Investor Pressure
*Best for: "Tell me about a technical trade-off" / "How do you handle competing priorities?" / "Describe a time you pushed back on stakeholders"*

At Alaya around year three, the monolith was starting to show cracks. Traffic had grown, certain endpoints were sluggish, and the engineering team was debating a full microservices rewrite. Meanwhile, investors were asking for new features every quarter, not rewrites.

My job was to make a decision that both solved the real problem and didn't cost us a year of velocity. I was skeptical of a full rewrite, but I couldn't just say "trust me" to the team. So I ran a two-week technical spike: prototype load tests on both approaches, with concrete metrics comparing latency, deployment complexity, and estimated delivery time.

The results were clear enough to take to the CTO and investors directly. A full rewrite would take six-plus months and introduce significant risk right before a major client onboarding. A strangler fig approach, extracting the two highest-traffic modules first while keeping the rest of the monolith stable, would take six weeks for the first extraction with a measurable performance improvement.

We went with the strangler fig. The first extracted module shipped in six weeks, and the busiest endpoints got roughly 40% faster. The monolith stayed stable through the acquisition without ever needing a big-bang rewrite.

The hardest part wasn't the technical work. It was convincing people that "not rewriting everything" was the right call. Data helped considerably. If I'd had benchmark numbers earlier, I'd have cut the debate in half.

---

## 3. Driving Adoption Without a Mandate
*Best for: "How do you lead without formal authority?" / "Tell me about influencing a team" / founding engineer roles where you need to shift how people work*

After the Benevity acquisition in 2021, I joined a team roughly ten times larger than Alaya, with no direct reports and no formal authority over anyone. One of my goals was to get engineers across two teams to adopt AI-assisted development workflows. The problem was that mandates don't work well for tool adoption, especially when the tools are new and the engineers are skeptical.

I started with three engineers who were already curious. I built internal demos that showed concrete time savings: a before/after of a PR review cycle that went from two hours to forty-five minutes with AI-assisted code review. No deck, just a screen share. Then I ran informal lunch-and-learn sessions, optional, no agenda, just demos and questions. I also created a shared repo of reusable prompt templates that anyone could grab and use immediately.

Within three months, around 70% of engineers on both teams were using AI-assisted code generation and review as part of their regular workflow. More importantly, they were advocating for it internally on their own terms, which meant the adoption stuck instead of quietly dying when I stopped pushing.

The lesson I took from it is that the mandate-free approach is slower but more durable. Engineers who choose a tool because they saw it save their own time become your best advocates. You couldn't manufacture that with a top-down directive.

---

## 4. Navigating a Post-Acquisition Integration
*Best for: "Tell me about navigating change" / "How do you handle ambiguity at scale?" / working at a company going through transition*

When Benevity acquired Alaya, I went from a team of six to an organization of several hundred people, a Java microservices codebase I'd never seen, and processes that were very different from how we'd operated. The risk was that I'd try to move fast and break things in ways that would damage relationships before I'd built any.

I spent the first month mapping the existing architecture before proposing anything. I scheduled one-on-ones with engineers on the platform and infra teams, not to pitch ideas but to understand how decisions were made and where the real pain points were. I tried to listen more than I talked in that first period, which wasn't natural after five years of being the technical decision-maker at Alaya.

After two months I had enough context to start contributing to architecture decisions. I ended up being involved in three major cross-team proposals over the following year, and I became the go-to person for AI tooling questions across the engineering org.

What I'd do differently: I initially underestimated how much cultural context matters in a larger org. Technical credibility travels, but it travels slower when you're new and the codebase is unfamiliar. The time I spent listening in month one paid back significantly in months three through twelve.
