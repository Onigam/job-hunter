# STAR Stories: Soda, VP of Engineering

Picked for a role that's ~50% hands-on, reports to a CPO, and expects someone to own the gap between architecture and roadmap velocity while still shipping. Leading with founding-team and cross-functional stories, since Soda is small and VC-backed like Alaya was.

## 1. Building Alaya from zero to acquisition

Best for: "tell me about building something from scratch," hands-on leadership, ambiguity.

In 2016 I co-founded Alaya, an employee purpose and impact platform, starting from a blank page with no customers and no product. My job was to architect and build the whole thing myself at first, then grow a team, while the business was already signing its first enterprise clients, so there wasn't room for a slow ramp-up. I picked Node.js, React, and PostgreSQL because they let us move fast without locking us into anything exotic, got a working demo out in the first three months, then expanded iteratively into multi-tenant architecture, an API layer, and impact reporting. I also hired and onboarded the first three engineers and set up CI/CD and a review culture before the team got big enough that we'd have had to retrofit it. The platform reached production with over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above a billion dollars, acquired us in 2021. Looking back, I'd invest in observability much earlier since we bolted on proper monitoring late, and I underestimated how expensive it would be to retrofit multi-tenancy instead of designing for it from day one.

## 2. A hard architecture call under investor pressure

Best for: technical trade-offs, balancing delivery pressure against long-term scalability, staying hands-on as a leader.

At Alaya our monolith started showing real scaling cracks right as investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and something more conservative, and I needed a defensible call, not just an opinion. I ran a two-week spike comparing both approaches with actual load tests, brought concrete numbers to the CTO and investors instead of a slide of trade-offs, and proposed a strangler-fig migration: pull out the two highest-traffic modules first and leave the rest of the monolith alone until we had a clear reason to touch it. We shipped the first extracted module in six weeks and saw about a 40% performance gain on our busiest endpoints, and the rest of the monolith stayed stable straight through the acquisition. No big-bang rewrite ever happened. The hard part wasn't the technical work, it was convincing people that not rewriting everything was actually the disciplined choice. I'd do more upfront benchmarking next time so that argument doesn't take as long to win.

## 3. Integrating into a much bigger org after acquisition

Best for: navigating change, working across a larger engineering org, adapting leadership style.

When Benevity acquired Alaya in 2021, I landed on a team roughly ten times the size of what I'd known, with a different codebase in Java and microservices, and different processes than the ones I'd built. My task was to fold Alaya's capabilities into Benevity's platform while still shipping new features, without losing the velocity that had made Alaya work in the first place. I spent the first month just mapping the existing architecture before proposing anything, and built relationships with the platform and infra teams before pushing any technical opinions their way. From there I drove adoption of AI-augmented workflows across the org and became a cross-team architecture liaison for the Europe-facing product surface. We migrated the core Alaya features successfully, I contributed to three major cross-team architecture decisions, and I became the person people came to for AI tooling questions across two engineering teams. Early on I moved too fast trying to fix things that weren't actually broken in the new org, and slowing down to listen first is what made the rest of it work.

## 4. Driving adoption without formal authority

Best for: influence without authority, rolling out new practices across teams you don't manage, a preview of how I'd approach engineering culture at Soda.

As a Senior Staff IC at Benevity I had no direct reports, but I wanted two teams that didn't report to me to actually adopt AI-assisted development instead of just hearing about it in an all-hands. I started with three curious engineers instead of announcing anything company-wide, built small internal demos that showed real time saved on their own tickets, and ran informal lunch-and-learn sessions with no mandate behind them. I also put together reusable prompt templates and committed them to a shared repo so the habit could outlive the demo. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation regularly, and I ended up as the informal lead for AI tooling across the org. It was slower than a top-down rollout would have been, but it stuck, because the engineers who picked it up were the ones telling their peers to try it, not me.

## 5. Translating between product roadmap and architecture reality

Best for: the CPO reporting line, balancing velocity with technical debt, operational excellence in engineering.

At Benevity I regularly sat between product leadership pushing for feature velocity and platform teams flagging architectural risk, and my task was to keep both moving without either side feeling steamrolled. Rather than defending engineering's position in the abstract, I started translating roadmap asks into concrete technical cost, what a given feature would require in migration work or added complexity, and brought that framing into planning conversations early instead of after estimates were already locked. That gave product a real menu of trade-offs instead of a binary yes or no, and it meant architecture decisions got made with the roadmap in view rather than in isolation. Over time this became one of the reasons I was pulled into cross-team architecture decisions as a matter of course rather than being looped in after the fact. If I'm honest, I could have formalized that translation process earlier instead of doing it ad hoc conversation by conversation, which would have scaled better as more teams got involved.
