# STAR Stories — Strike / Staff Platform Engineer, AI Systems

---

## 1. Driving AI Tooling Adoption Without Authority
*Best for: "How do you influence without a mandate?" / "Tell me about leading change in engineering."*

At Benevity, I was a Senior Staff IC with no direct reports, but I needed to change how two engineering teams worked. The goal was to get them using AI-assisted code review, IDE agents, and LLM-augmented workflows. No one had asked them to. There was polite skepticism and the usual "we're already busy" friction.

I didn't start with a rollout plan. I found three engineers who were curious and built something concrete with them in a few weeks: a shared prompt library committed to a repo, a working demo of an IDE agent that could summarize a PR diff and flag missing tests in under ten seconds. We documented the first real win when it saved two hours on a review cycle that had been dragging.

The demos spread on their own. Within three months, about 70% of engineers on both teams had integrated some form of AI tooling into their regular workflow. I became the informal AI tooling lead for the org without ever being assigned the title.

What I'd do differently: I underestimated how much people want someone to tell them what prompt to use. The more opinionated the template, the faster the adoption. I started too open-ended and had to narrow it down later.

---

## 2. Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "Founding engineer" / "How do you handle ambiguity?"*

In 2016, I co-founded Alaya with a blank page, no customers, and no product. The first task was to make every technical decision alone while the business was signing its first enterprise clients, which meant I had to ship fast and get the architecture right enough to survive scale without knowing what scale would look like.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Nothing exotic. The priority in the first three months was getting to a demo that actually worked, not a technically perfect system. Once we had clients, I hired the first three engineers, set up CI/CD and code review culture, and started adding the infrastructure the product needed: multi-tenant architecture, an API layer, impact reporting.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity acquired Alaya that year. The acquisition was a direct external validation of the technical and product decisions made from day one.

The honest reflection: I added observability late. We had no proper APM for the first 18 months, which meant debugging production issues was painful. I also underestimated how expensive it is to retrofit multi-tenancy. Next time I'd design for it from the first line of code.

---

## 3. Making a Hard Architecture Call Under Delivery Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle tech debt?" / Platform engineering roles.*

At Alaya, the monolith was starting to show cracks under load. The team was split between a full microservices rewrite and keeping a modular monolith. Investors were pushing for new features, not architectural overhauls, and the debate was burning time we didn't have.

My job was to make a defensible call. Not the perfect one, the defensible one, because there's no perfect option under that kind of pressure.

I ran a two-week technical spike: prototype load tests for both approaches, concrete metrics on estimated migration cost and timeline. Then I presented the trade-offs to the CTO and investors with data, not opinions. The proposal was a strangler fig approach: extract the two highest-traffic modules first, leave the rest of the monolith alone, and set explicit criteria for what would trigger the next extraction.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by roughly 40%. The monolith stayed stable through the acquisition two years later. We never did the big-bang rewrite.

The hardest part wasn't the technical decision. It was convincing people that not rewriting everything was the right call. Data closed the argument faster than anything else I tried.

---

## 4. Navigating a Post-Acquisition Integration
*Best for: "Tell me about navigating organizational change" / "Working across large engineering orgs" / "Cross-functional collaboration."*

When Benevity acquired Alaya in 2021, I went from being a co-founder of a 15-person company to a Senior Staff Engineer in an org ten times larger with a different codebase, different processes, and a culture I didn't know yet.

The temptation was to immediately identify everything that was "wrong" and propose fixes. I resisted it. I spent the first month just mapping: the existing architecture, the team dynamics, who the real decision-makers were, what the unspoken constraints were. I built relationships with the platform and infra teams before I pushed any technical opinions.

Once I had enough context, I focused on a few concrete contributions: driving AI-assisted development practices across engineering, acting as a cross-team architecture liaison for the Europe-facing product surface, and participating in three major architecture decisions where I had relevant context from the Alaya side.

The Alaya features that needed to migrate into Benevity's platform got migrated without blowing up the roadmap.

What I got wrong at first: I moved too fast in the early weeks. I had opinions and I shared them before I'd earned the credibility to be heard properly. Slowing down and listening first made me more effective, not less.
