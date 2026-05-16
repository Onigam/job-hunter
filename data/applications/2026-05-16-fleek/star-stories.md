# STAR Stories — VP Engineering and Data @ Fleek

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about building something from scratch" / "Describe your founding experience" / "How do you handle ambiguity at the start?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. No product, no customers, nothing beyond the founding team's conviction. As head of technology, the first decision was to resist over-engineering. I chose Node.js, React, and PostgreSQL specifically because we needed to get to a first demo in three months without painting ourselves into a corner. The stack was boring on purpose.

The early work blurred the line between product and platform decisions constantly. Building multi-tenant architecture meant making calls about how enterprise clients would use the system before they'd ever seen it. I hired the first three engineers about a year in, put CI/CD and code review practices in place immediately, and pushed for architecture documentation so that I wasn't the single point of failure for every technical question.

By 2021 we had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us. That outcome validated the technical decisions, but it also revealed two mistakes I'd made: observability came late, and multi-tenancy required painful retrofitting I should have designed for from day one. The next time I start from zero, both go in before the first feature.

---

## Story 2: Post-Acquisition Integration at Benevity

**Best for:** "Tell me about navigating organizational change" / "How do you earn trust in a new environment?" / "Describe a time you had to work across teams you don't control"

After the Benevity acquisition in 2021 I went from co-founder of a 15-person company to Senior Staff Engineer at an org ten times that size, with a Java and microservices codebase, different processes, and a culture I hadn't built. My instinct was to arrive with opinions. I deliberately didn't act on it.

The first month was almost entirely listening: mapping the existing architecture, understanding which teams owned which surfaces, building relationships with platform and infra engineers before I had any credibility to propose changes. Once that foundation was in place I started contributing to cross-team architecture decisions and became the liaison for the Europe-facing product surface. That took about six months.

The AI tooling work was harder. I had no mandate and no budget, just a clear view that AI-assisted development would change how productive the team could be. So I started with three engineers who were already curious, ran demos showing concrete time savings in their actual work, and built a shared repo of prompt templates specific to our codebase. Informal lunch sessions grew from there. Within three months roughly 70% of engineers across two teams had adopted the workflows. The lesson I took away: moving too fast with "fixes" in a new organization creates resistance. Earning the right to lead first made the adoption far stickier than any mandate would have.

---

## Story 3: Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Describe a decision you made under uncertainty"

At Alaya around 2019 the monolith was showing strain. Response times were degrading on our busiest endpoints, engineers were stepping on each other's changes, and we'd just signed contracts with larger clients that would put real load on the system. The team was split between a full microservices rewrite, which would have cost six months at minimum, and staying monolithic and just optimizing. Investors wanted features, not rewrites.

I was skeptical of both positions. A full rewrite was too risky given our timeline. Doing nothing just deferred the problem. So I ran a two-week technical spike: prototype load tests on two candidate architectures, concrete metrics rather than gut feelings. What the data showed was that extracting the two highest-traffic modules into independent services would recover most of the performance headroom without touching anything else.

I presented the trade-offs with those numbers, proposed the strangler fig approach, and got alignment. We shipped the first extracted module in six weeks. Performance on the heaviest endpoints improved by roughly 40%. The rest of the monolith held stable all the way through the acquisition two years later. What I'd do differently: the benchmarking spike should have been one week, not two. Most of the time went to convincing people we needed data at all, not to actually gathering it. I'd run the first small test and show the output before asking for approval to do the full spike.

---

## Story 4: Leading Without Formal Authority

**Best for:** "How do you lead when you're not someone's manager?" / "Tell me about driving adoption at scale" / "Describe influencing a team's practices without a mandate"

At Benevity I was a Senior Staff IC with no direct reports, no budget, and no seat at the leadership table. But I could see that AI-assisted development was going to compound productivity for the engineering team, and I thought we should be ahead of it rather than catching up to it.

There was no program to launch. I started where I had natural credibility: a small group of three engineers on my immediate team who were already curious. I didn't frame it as an initiative. I just showed them specific things I'd done faster with the tools, pull request reviews in half the time, boilerplate generation for our API patterns, test scaffolding. Then I built a shared repo of prompt templates specific to our codebase and pushed it to the org's GitHub so the value was tangible, not theoretical.

The informal sessions grew on their own. Engineers who'd been skeptical came once and came back. After three months about 70% of engineers across two teams were using the tools regularly. No mandate, no budget, no title. The thing that made it work was making the first step trivially easy: pull this repo, run this prompt, see what happens. Abstract advocacy for AI tooling goes nowhere. Showing someone 45 minutes back on a task they were going to spend two hours on is a different conversation entirely.

---

## Story 5 (Shorter): Data-Driven Decision Making Under Investor Pressure

**Best for:** "Tell me about a time you pushed back on leadership" / "How do you handle competing priorities?" / "Describe a time data changed a decision"

During Alaya's growth phase we hit a period where investor pressure for new features was directly competing with the platform stability work we knew we needed to do. The CTO was caught between both sets of demands and wanted a recommendation.

I spent a week instrumenting the parts of the system we hadn't been watching closely, generating real load data, and mapping which technical debt items were most likely to cause customer-visible failures in the next six months. Then I turned that into a concrete proposal: two months of platform stabilization work, with specific acceptance criteria, after which we'd resume the feature roadmap. The key was making the cost of not doing it visible, not just arguing for engineering hygiene in the abstract.

The CTO brought it to the investors with the data. They agreed. We did the stabilization work, and we didn't have a major incident for the following year. What I learned was that "we need to slow down" is almost impossible to sell. "Here is what will fail and when if we don't" is a different argument, and it's one that data can support.
