# STAR Stories: VP of Engineering, SonarSource

---

## Story 1: Building an Engineering Org from Zero to Acquisition
**Likely question:** "Tell me about a time you built an engineering team or organization from scratch."

In 2016 I co-founded Alaya with a co-founder and a blank page. We had signed our first enterprise client before we had a single line of production code, which meant I was making architecture decisions that would need to hold for years under deadline pressure almost immediately. The task was to build not just a platform but an engineering function: hiring discipline, code review culture, deployment practices, all of it.

I made the deliberate choice to start with a pragmatic but extensible stack, Node.js, React, and PostgreSQL, and to design for multi-tenant data isolation from day one, even when we only had one client. I hired our first three engineers within the first year, set the hiring bar myself, and ran the first round of architecture reviews to establish a shared technical vocabulary across the team. Over five years we shipped a postal campaign engine, an impact reporting module, and a full API layer, all while keeping the on-call burden manageable.

By 2021 the platform was running with 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us in part because of the technical due diligence we passed. The codebase held up to external scrutiny, which was the most honest validation I could have asked for.

What I'd do differently: I underestimated how expensive it would be to retrofit observability. We added proper APM late in the lifecycle, and it cost us debugging time and credibility with clients who hit unexplained latency spikes. I'd make it a day-one constraint next time.

---

## Story 2: Navigating Post-Acquisition Integration
**Likely question:** "Describe a time you had to adapt to a major organizational change or lead a team through significant disruption."

When Benevity acquired Alaya in 2021, I went overnight from co-founder with full context to Senior Staff IC in a company ten times larger, with a different codebase (Java, heavy microservices), different engineering processes, and a culture I didn't know. My task was to integrate Alaya's features into the Benevity platform without losing the product velocity we'd built, and to do it without the founder authority I was used to.

The first thing I did was spend a month just mapping the architecture and building relationships before making any proposals. That felt slow, but it was the right call. I identified three platform team leads whose alignment I needed before I could move anything, and I invested in those relationships first. When I eventually came with a migration proposal for Alaya's core modules, I had people in the room who'd already stress-tested the assumptions with me in informal conversations.

We successfully migrated the core features, contributed to three major cross-team architecture decisions, and I became the go-to contact for the Europe-facing product surface. The integration didn't cause any customer-facing incidents, which in retrospect was a genuine achievement given the complexity.

The reflection: I initially moved too fast, trying to fix things that weren't broken from my perspective. Slowing down and listening longer made me more effective. The lesson for VP work is that the first three months in any new org are for building trust, not for proving what you know.

---

## Story 3: Making a Hard Architecture Decision Under Investor Pressure
**Likely question:** "Tell me about a significant technical trade-off you navigated. How did you decide?"

At Alaya, around year three, we had a monolith that was starting to crack at the seams. The team was split between a full microservices rewrite and a modular monolith approach. Investors were pushing for new features, not internal rewrites. My task was to make a defensible call and execute it without losing the team or the roadmap.

I ran a two-week spike where we built small prototypes of both approaches and did load tests on the two highest-traffic modules. Instead of presenting an opinion, I brought concrete metrics to the CTO and investors: here's what each approach costs in weeks, here's the risk profile, here's the point at which we'd need to revisit. Nobody could argue with the data in the same way they could argue with a judgment call.

I proposed a strangler-fig migration: extract the two busiest modules first, keep everything else in the monolith until there was clear evidence of need. We shipped the first extracted module in six weeks. Performance on those endpoints improved roughly 40%. The rest of the monolith stayed stable all the way through the acquisition.

The hardest part wasn't the technical decision; it was convincing people that choosing not to rewrite everything was a decision, not a deferral. The benchmarking data was what made that argument stick. I'd front-load that kind of evidence even more aggressively next time.

---

## Story 4: Driving Org-Wide Adoption Without Formal Authority
**Likely question:** "How have you influenced change across an organization you didn't control?" or "Tell me about a time you drove a significant shift in how your team worked."

At Benevity, I was a Senior Staff IC with no direct reports and a clear goal: get AI-assisted development tools adopted across two engineering teams. There was no mandate, no budget for an official rollout, and the teams were already busy. My task was to change how engineers worked on their own time by making the change compelling, not compulsory.

I started small, deliberately. I found three engineers who were already curious about GitHub Copilot and spent a week working closely with them, not to teach them prompting tricks, but to co-develop reusable patterns specific to our codebase. Then I committed those patterns to a shared repo with documented results, things like "this prompt cut the PR review cycle for API changes by roughly two hours." I ran informal lunch-and-learn sessions with no attendance requirement.

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation as part of their normal workflow. The adoption held because the engineers who came in early became internal advocates. I couldn't have gotten that stickiness with a top-down directive.

The reflection: the mandate-free approach is slower but far more durable. For a VP role, the implication is that the most important org changes are the ones where the team convinces itself, and your job is to engineer the conditions for that rather than to push.
