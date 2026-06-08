# STAR Stories — BVNK Staff Engineer (Backend)

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / founding engineer questions / "How do you handle ambiguity at scale?"

In 2016, I co-founded Alaya, a purpose and impact platform for enterprise employee engagement. There was no codebase, no team, no customers. The business was signing its first enterprise contracts while I was still architecting the data model, and both things had to move in parallel.

I chose a pragmatic stack: Node.js, React, and PostgreSQL. The priority in the first three months was getting to a working demo, not a perfect architecture. I built the core features, the multi-tenant data layer, and a basic API surface, then iterated based on what clients actually needed: impact reporting, postal campaigns, integrations with third-party HR tools. Once the product was stable enough, I hired and onboarded the first three engineers, set up CI/CD pipelines, and established code review culture and architecture documentation from the start.

By 2021, the platform had over 50 enterprise clients across Switzerland and France. Benevity, a Canadian company with a $1B+ valuation, acquired us. The acquisition was direct confirmation that the early technical decisions had held up under real-world scale.

If I did it again, I'd invest in observability earlier. We added proper APM relatively late, which made diagnosing production issues harder than it should have been. I'd also design for multi-tenancy from day zero; retrofitting it cost us roughly six weeks of engineering time that could have gone elsewhere.

---

## Story 2: Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Tell me about a time you had to convince stakeholders"

At Alaya, our monolith was starting to crack under load. Two failure modes were appearing in production, and the engineering team was split between a full microservices rewrite and a more incremental approach. Investors were pushing for new features on a short timeline. Someone needed to make a call.

My task was to turn what was becoming an opinion-based debate into a data-driven decision and get alignment across the team and leadership. I ran a two-week technical spike, built prototypes of both approaches, ran load tests against them, and measured actual latency and error rates rather than speculating. I put together a document with concrete metrics for each path, including estimated engineering cost and regression risk, then presented it to the CTO with a recommendation.

The proposal was a strangler fig migration: extract the two highest-traffic modules first, keep the rest of the monolith intact, and define explicit criteria for when additional modules should be extracted. I ran the first extraction myself to refine the pattern before handing it to the rest of the team.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved roughly 40%. The remaining monolith stayed stable through the acquisition, with no big-bang rewrite needed. The hardest part was convincing people that choosing not to rewrite everything was the right engineering call, not a compromise. Having benchmark data made that argument credible. Next time I'd front-load that benchmarking even further to cut the debate shorter.

---

## Story 3: Post-Acquisition Integration at Benevity

**Best for:** "Tell me about navigating change" / "Working with large teams" / "Cross-functional collaboration" / joining a new organization

After the Benevity acquisition in 2021, I joined a team about ten times the size of Alaya. Different engineering culture, a Java microservices codebase I didn't know, and processes that felt slow compared to what I was used to. My job was to integrate Alaya's capabilities into Benevity's platform while keeping feature delivery moving.

The instinct was to jump in and start fixing things. The smarter move, which I took, was to spend the first month mapping the existing architecture before proposing anything. I paired with platform and infra engineers to understand load patterns, dependency graphs, and the history behind decisions I initially disagreed with. That context turned out to matter: several changes I would have pushed quickly would have caused downstream breakages that weren't visible from the outside.

Once I had the lay of the land, I became a cross-team architecture liaison for the Europe-facing product surface and drove three major cross-team architectural decisions. I also piloted AI-assisted development workflows: GitHub Copilot, internal prompt templates, a PR summary tool. Within three months, roughly 70% of engineers on two teams had adopted them. The informal adoption was slower than a mandate would have been, but significantly stickier.

What I took from this: slowing down at the start of a new context makes you faster overall. Influence without authority requires building credibility through demonstrated understanding before pushing opinions.

---

## Story 4: Leading Without Formal Authority

**Best for:** "Tell me about leading a team without being the manager" / Staff+ / principal engineer roles / "How do you drive change across teams?"

At Benevity, I was a Senior Staff IC with no direct reports and no formal mandate to change how teams worked. The company was starting to talk about AI tooling, but nothing was moving. I wanted to change the development workflow across two teams that didn't report to me.

Rather than asking for permission, I started small. I identified three engineers who seemed curious about the tools rather than resistant, and built concrete demos with them: a GitHub Actions integration for AI-assisted PR summaries, a prompt template library checked into a shared repo, examples of test generation. I ran informal sessions, opt-in only, framed as "here's how I saved two hours this week" rather than "here's the future of engineering."

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation as part of their regular workflow. More importantly, they'd adopted it voluntarily, which meant they were advocating for it themselves rather than waiting for me to push them.

The lesson: mandate-free adoption is slower but stickier. Engineers who chose the tools on their own terms became internal advocates I couldn't have manufactured top-down. If I were doing it again, I'd document the time savings more systematically from the start to have better data when making the case to leadership.
