# STAR Stories — DomaFlow, Technical Co-Founder

---

## Story 1: Building Alaya from Zero to Acquisition
**Best for:** "Tell me about a time you built something from scratch" / "Why should we trust you with our technical foundation?"

In 2016, I co-founded Alaya with a business co-founder, a product idea, and no code. We had signed our first letter of intent from a client before we had a single working screen. My job was to build the entire platform from a blank page while the company was already in conversations with enterprise clients, which meant I had maybe three months to get to something demo-able before we'd lose credibility.

I chose a pragmatic stack: Node.js, React, and PostgreSQL. Not the most fashionable choices, but ones I knew I could move fast in alone and ones that would let me hire competently later. The first version covered the core: impact tracking, user profiles, reporting. Then came multi-tenancy, an API layer, postal campaigns, and eventually a data model that could handle aggregated reporting across dozens of enterprise clients simultaneously. As the team grew, I hired the first three engineers, set up CI/CD and code review culture, and wrote the first architecture docs. By 2021, we had 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company with a $1B+ valuation, acquired us. Their technical due diligence validated every major decision I'd made along the way.

Looking back, I'd invest in observability earlier. We added proper APM late and spent months flying partially blind on performance issues. I'd also design for multi-tenancy from day zero instead of retrofitting it, which cost us a painful two-month refactor in year two.

---

## Story 2: A Hard Architecture Decision Under Pressure
**Best for:** "Tell me about a technical trade-off you navigated" / "How do you balance tech debt with delivery?"

Around 2019, our Alaya monolith was showing strain at the seams. Two or three highest-traffic endpoints were degrading under load, and the team was split: full microservices rewrite versus some kind of modular approach. Meanwhile, investors were pushing hard for new features, not infrastructure work. The pressure was real on both sides.

My task was to make a defensible call that balanced long-term scalability with short-term delivery. Instead of going with gut feeling, I ran a two-week technical spike: built rough prototypes of both approaches, ran synthetic load tests, and compared results with concrete numbers rather than opinions. Then I presented the trade-offs to the founding team and investors with actual latency data. My proposal was a strangler fig approach: extract the two most-loaded modules first, leave the rest monolithic, and define clear criteria for when to pull out additional services. That way we weren't betting everything on a big-bang rewrite that could take six months while the business waited.

We shipped the first extracted module in about six weeks. Performance on those endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition without requiring another major restructuring.

What I'd do differently: start the benchmarking before the debate starts, not during it. Once people have formed opinions, data is less persuasive than it would have been if it arrived first.

---

## Story 3: Driving AI Adoption Without a Mandate
**Best for:** "Tell me about leading a team without authority" / "How do you change engineering culture?"

At Benevity, I was a Senior Staff Engineer with no direct reports, but I could see clearly that AI-assisted development tools would have a real impact on how the engineering teams worked. The problem was that no one had asked me to lead anything. I had technical opinions and no org chart to back them up.

I started small: found three engineers who were already curious about GitHub Copilot and spent a few hours with each of them, working on something they were actually building at the time. No formal rollout, no slide deck. Then I built a few internal demos showing concrete time savings on real tasks: a PR review cycle that went from half a day to two hours, a refactor that took a morning instead of a week. I ran informal lunch sessions with open invites, no attendance requirements. At the same time I created a shared repository of reusable prompt templates and documented a handful of case studies in our internal wiki.

Within three months, around 70% of engineers across two teams were using AI-assisted code review and generation as part of their daily workflow. I became the informal AI tooling lead without anyone ever appointing me to the role.

The thing I took from it: mandates create compliance, not adoption. Engineers who find something useful on their own terms become internal advocates. If I'd pushed from the top, I'd have gotten surface-level usage and a lot of quiet resistance.

---

## Story 4: Navigating Post-Acquisition Integration
**Best for:** "Tell me about adapting to a much bigger organization" / "How do you work when you've lost direct control?"

When Benevity acquired Alaya in 2021, I went from being head of technology at a 20-person startup to Senior Staff Engineer at a company with well over 200 people in engineering. Different culture, different codebase (Java microservices instead of our Node.js stack), different decision-making processes. I had strong opinions about how to build things and had to figure out when to voice them and when to shut up and listen.

My job was to integrate Alaya's capabilities into Benevity's platform without losing the velocity we'd built. The temptation was to immediately flag everything I thought was wrong and propose improvements. Instead I spent the first month just mapping: the architecture, the team structures, the informal decision-making paths, who actually influenced what. I built relationships with the platform and infra teams before I tried to push any technical opinions. When I eventually proposed changes, I had enough context to frame them in Benevity's language, referencing their existing patterns, not just what we'd done at Alaya.

That approach worked better than I expected. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two teams. Not because I was the most senior person in the room, but because I'd listened long enough to understand what the actual problems were.

What I should have done faster: asked more direct questions earlier about what the teams themselves felt wasn't working. People tell you a lot if you ask plainly rather than diagnosing from the outside.
