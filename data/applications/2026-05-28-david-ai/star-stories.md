# STAR Stories — Head of Engineering at David AI

---

## 1. Building from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "Founding engineer experience" / "How do you handle ambiguity"*

In 2016, I co-founded Alaya, a purpose and engagement platform for enterprise employees. We had a blank page, no customers, no product, and no team. My job was to architect and build the entire platform while the business was simultaneously signing its first clients.

I chose a pragmatic stack built around Node.js, React, and PostgreSQL. The first three months were heads-down, shipping enough to get to a working demo. After that, I layered in the things that would matter later: multi-tenant architecture, a proper API layer, impact reporting, campaign tooling. When I hired the first engineers, I set up CI/CD, code review practices, and architecture documentation from day one, not as a luxury but because the cost of skipping that always shows up later. By the time we reached 50+ enterprise clients, the platform had never needed a big-bang rewrite.

We were acquired by Benevity in 2021, a Canadian unicorn with $1B+ valuation. The acquisition validated both the product decisions and the technical ones made over five years from a blank page.

I'd have invested in observability earlier. We added proper monitoring late, and debugging production issues without it cost us real time. I also underestimated how expensive it is to retrofit multi-tenancy. Next time I'd design for it from day one, even at the cost of slower initial delivery.

---

## 2. Making a Hard Architecture Call Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Describe a time you influenced a difficult decision"*

At Alaya, around year three, our monolith started showing cracks. Pages were slow, deployments were getting risky, and the team was debating whether to rewrite everything as microservices. Investors wanted new features, not a rewrite. The debate was consuming engineering energy without converging.

I needed to make a call that balanced real scalability concerns with the very real cost of a full rewrite, and do it in a way the team and the business could get behind.

I ran a two-week technical spike. We built prototypes of both approaches and load-tested them with real traffic patterns. I brought the results to the CTO and investors with concrete numbers rather than opinions. The conclusion was a strangler fig migration: extract the two highest-traffic modules first, keep the rest of the monolith stable. I also defined clear criteria for when to extract additional modules so the team knew the boundaries.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith held stable all the way through the acquisition two years later. No big rewrite was ever needed.

The hardest part wasn't the technical work. It was convincing the team that "not rewriting everything" was the right answer. The load test data cut through the debate faster than any argument could have. I'd benchmark earlier next time to shorten the deliberation phase.

---

## 3. Navigating a Post-Acquisition Integration
*Best for: "Tell me about navigating change" / "How do you work across teams?" / "Describe leading in a large organization"*

After Benevity acquired Alaya in 2021, I joined their engineering organization as Senior Staff Engineer. The team was ten times larger than what I'd been running. Different culture, different codebase (Java microservices vs. our Node.js stack), different ways of making decisions.

I needed to integrate Alaya's capabilities into Benevity's platform without losing velocity, in an org where I had no formal authority over anyone.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions. When I did push, I used written proposals with explicit trade-offs rather than Slack opinions. Over time I became the cross-team architecture liaison for the Europe-facing product surface and drove AI-assisted development practices across two teams.

Core Alaya features were successfully migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the informal AI tooling lead across the org, all without direct reports.

I initially moved too fast, trying to fix things that weren't broken. Slowing down and listening first made me more effective. In a new org, trust is the prerequisite for influence, not the other way around.

---

## 4. Growing AI Tooling Adoption Without a Mandate
*Best for: "How do you lead without formal authority?" / "Tell me about driving change in an organization" / "How do you get engineers to adopt new practices?"*

At Benevity, I was a Senior Staff IC with no direct reports. I could see that AI-assisted development tooling would change how our teams shipped, but nobody was asking me to drive it, and I had no authority to require anything.

My goal was to change how roughly 20 engineers worked, without being able to mandate the change.

I started with three engineers who were already curious. We ran small experiments and I documented the time savings concretely: "saved two hours on this PR review cycle." From there I ran informal lunch-and-learn sessions with no mandate attached. I built reusable prompt templates and committed them to a shared repo so adoption had zero friction. The early adopters became internal advocates on their own terms.

Within three months, roughly 70% of engineers on both teams had integrated AI tooling into their regular workflow. What started as informal experiments became a formal engineering practice.

The mandate-free approach was slower but stickier. Engineers who adopted on their own terms advocated for it internally. I couldn't have manufactured that with a top-down directive. When changing behavior in an org, letting people arrive at the conclusion themselves is often more durable than pushing.

---

## 5. Building and Scaling a Team Through Hypergrowth
*Best for: "How do you build an engineering team?" / "What's your philosophy on hiring?" / "How do you maintain quality as a team scales?"*

At Alaya, I went from being the sole engineer to managing a team of five in about eighteen months. The business was growing faster than I'd planned for, and I had to build a hiring and onboarding process while still shipping product.

The task was to hire people who could operate with a lot of autonomy, onboard them quickly without slowing down delivery, and keep the codebase from degrading as more hands touched it.

I defined clear technical standards before the first hire: what "good" looked like in a PR, what our architecture constraints were, and where engineers had full latitude vs. where they needed alignment. I wrote it down rather than carrying it in my head. For hiring, I ran technical interviews that focused on judgment calls rather than trivia. For onboarding, I built a structured first-week checklist and paired every new engineer with a senior for two weeks. I also made sure the first few tickets for a new hire were challenging but well-scoped.

All five engineers stayed through the acquisition. None of the early hires needed significant management overhead once they were ramped. The codebase quality held even as the team doubled.

I underestimated how much of my job would shift from coding to writing. Specs, architecture decisions, onboarding docs, feedback. The earlier I accepted that the writing was the job, the better I got at it.
