# STAR Stories

## 1. Tell me about a time you built a product from scratch in a high-ambiguity environment

**Situation:** In 2016, I co-founded Alaya. There was no product, no team, and no established process. We had a business idea, early customer conversations, and pressure to get from concept to something real very quickly.

**Task:** I had to turn that into a production platform, choose a stack that would let us move fast without boxing us in later, and create enough technical credibility for early enterprise clients to trust us.

**Action:** I chose a pragmatic stack around Node.js, React, PostgreSQL, and AWS rather than over-designing for a scale we did not have yet. I built the first core flows myself, then expanded the platform iteratively into multi-tenant workflows, API layers, reporting, and operational tooling. As the company grew, I hired and onboarded the first engineers, set up CI/CD, code review habits, and lightweight architecture documentation so we could scale execution without turning into chaos.

**Result:** The platform reached production, served more than 50 enterprise clients across Switzerland and France, and became strong enough to pass technical due diligence when Alaya was acquired by Benevity in 2021.

**Reflection:** I would invest in observability earlier next time. We added stronger APM and deeper operational visibility later than I would have liked, and that cost us time when the product started to scale.

## 2. Tell me about a hard architecture decision you made under delivery pressure

**Situation:** At Alaya, the product was growing and parts of the monolith were starting to show strain. There was a strong temptation to do a full microservices rewrite while the business was still pushing for aggressive feature delivery.

**Task:** I needed to make a decision that improved scalability and reliability without freezing product work or burning months on architecture theater.

**Action:** I ran a short technical spike, compared a full rewrite with a modular extraction path, and brought the discussion back to evidence rather than opinion. Instead of rewriting everything, I proposed a strangler-style approach: keep the monolith where it was still serving us, then extract the highest-traffic modules first and define explicit criteria for future extraction. That let us deal with the real bottlenecks while keeping the team shipping.

**Result:** We shipped the first extracted module in about six weeks, improved performance on the busiest endpoints by roughly 40%, and avoided a big-bang rewrite that would have delayed the roadmap for little practical gain.

**Reflection:** The technical answer was not the hard part. The hard part was persuading people that a partial solution was the right one. I learned to benchmark earlier and use data sooner when architecture debates start becoming ideological.

## 3. Tell me about a time you influenced technical change without formal authority

**Situation:** After the Alaya acquisition, I joined Benevity as a Senior Staff Engineer. I had no direct reports, but I wanted to improve how teams used AI in day-to-day engineering work because the opportunity was obvious and the initial workflows were still immature.

**Task:** I needed to change behavior across teams that did not report to me, without turning it into a top-down mandate that people would resist or ignore.

**Action:** I started with engineers who were curious rather than skeptical. I built concrete demos, shared prompt patterns that were actually useful in code review and implementation work, and ran informal sessions around real engineering tasks instead of generic AI evangelism. I also documented examples where the tools saved time or improved iteration quality, so the conversation stayed grounded in engineering outcomes.

**Result:** Within about three months, most engineers across the two teams were using AI-assisted workflows in some form, and I became the informal point person for how to use those tools in a way that improved throughput without lowering the bar.

**Reflection:** Adoption moved more slowly than it would have with a formal mandate, but it stuck because engineers felt they were choosing useful practices rather than complying with a trend.

## 4. Tell me about a time you had to adapt after a major company change

**Situation:** When Benevity acquired Alaya, I moved from a small founder-led environment into an organization that was much larger, more distributed, and operating with a different stack, process model, and decision cadence.

**Task:** I had to help integrate product capabilities into a broader platform while keeping enough velocity for the acquired product and building trust in a new environment.

**Action:** I spent the first stretch mapping the architecture and understanding the people side before trying to change anything. Once I had that context, I worked as a bridge between teams, contributed to cross-team design decisions, and focused on places where I could add useful force quickly: platform integration, developer workflows, and pragmatic architecture guidance.

**Result:** Core Alaya capabilities were integrated into Benevity's platform, I contributed to several cross-team architecture decisions, and I was able to stay effective in a much larger organization without losing the builder mindset that had been useful in startup mode.

**Reflection:** I pushed too fast in a few early conversations because I was still operating with startup instincts. The lesson was simple: in a larger organization, listening first is not passivity, it is part of execution.
