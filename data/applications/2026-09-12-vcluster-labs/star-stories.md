# STAR Stories, vCluster Labs (Senior/Staff Backend Engineer)

Prepared for behavioral rounds. Picked for fit with the role: ownership without a mandate, architecture trade-offs under pressure, and building in an unfamiliar codebase.

## 1. Building Alaya from a blank page

Best for: "tell me about a time you owned something end to end" / autonomy and builder-mentality questions.

In 2016 I co-founded Alaya with no product, no customers, and no team yet. My job for the first few months was basically to be the entire engineering department: pick a stack that wouldn't need a rewrite in a year, and get something demoable in front of the first enterprise prospects fast. I went with Node.js, React, and Postgres, mostly because I could move in all three without context-switching cost, and I had the core platform ready for a first demo inside three months. From there it was a steady expansion: multi-tenant data model, an API layer, impact reporting, campaign tooling, and eventually hiring the first three engineers and setting up the CI/CD and review habits that let the team grow without the codebase turning into a mess. By the time Benevity acquired us in 2021, we had 50-plus enterprise clients across Switzerland and France running on that platform. If I did it again, I'd bring in real observability much earlier. We bolted on proper APM late, and it cost us some painful debugging sessions that better tooling would have shortened.

## 2. Choosing a strangler-fig migration over a full rewrite

Best for: "tell me about a hard technical trade-off" / systems design and multi-tenancy questions.

A couple of years into Alaya, our monolith started showing real cracks under enterprise-scale load, and the team was split between a full microservices rewrite and just patching the monolith further. Neither was right, and the investors were pushing hard for new features, not a quarter spent on internal plumbing. I ran a two-week spike comparing both approaches with actual load tests instead of opinions, then brought the CTO and investors a proposal to extract just the two highest-traffic modules first and leave the rest of the monolith alone until we had a concrete reason to touch it. We shipped the first extracted module in six weeks, latency on those endpoints dropped by roughly 40%, and the remaining monolith stayed stable all the way through the acquisition, no big-bang rewrite ever needed. The hard part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Looking back, I'd have run the load-test spike even earlier, since the data ended the debate a lot faster than argument did.

## 3. Landing in a codebase ten times the size of anything I'd touched

Best for: "how do you ramp into a new system" / working across teams that don't report to you.

When Benevity acquired Alaya in 2021, I went from a five-person engineering team I'd built myself to a Java microservices codebase run by a team ten times our size, with different conventions and a different release cadence. My instinct was to start proposing changes right away, and I caught myself doing that too early, before I actually understood why things were built the way they were. I spent the first month mostly reading and mapping the architecture and deliberately held off on strong opinions until I'd built some working relationships with the platform and infra teams. Once I had that context, I became the person those teams pulled in for cross-team architecture calls on the Europe-facing surface, and contributed to three decisions that shaped how Alaya's capabilities got folded into the bigger platform. What I'd change: I'd compress that listening period a bit. A month was probably longer than needed once I actually had the relationships in place.

## 4. Getting a practice adopted with no authority to mandate it

Best for: "how do you drive change without being someone's manager" / ownership and initiative.

At Benevity I was an individual contributor with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked day to day by bringing AI-assisted development into their workflow. I didn't have the standing to just tell anyone to use it, so I started with three engineers who were already curious, built small internal demos that showed concrete time saved on real PRs, and ran informal lunch sessions instead of anything with a mandate behind it. I wrote up the wins as they happened, one story was a PR review cycle that dropped by about two hours, and put reusable prompt templates in a shared repo anyone could pull from. Within three months, something like 70% of both teams were using it regularly, and I'd become the person people asked when they wanted to get started. It was slower than a top-down rollout would have been, but the engineers who picked it up on their own terms were the ones telling other engineers about it, which a policy memo never would have done.
