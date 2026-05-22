# STAR Stories — Jua.ai Interview Prep

---

## 1. Building Alaya from scratch

**Best for:** "Tell me about a time you built backend infrastructure from zero" / "How do you approach architectural decisions early in a product's life?"

In early 2016 I co-founded Alaya, a purpose and employee engagement platform, and I was the only engineer for the first several months. We had no customers, no codebase, and no real certainty about what the product would become. My job was to build something that could get to a first demo in three months and survive the pressure of signing enterprise clients.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Not glamorous, but each piece had known failure modes I could reason about. Within three months we had a working demo. I then built out the multi-tenant architecture, an API layer, impact reporting, and postal campaign tooling, hiring the first three engineers along the way and setting up CI/CD, code review culture, and architecture docs from the start.

By 2021 the platform was running 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us. That outcome was a direct test of those early decisions.

Looking back, I'd have built observability in from day one. We added proper APM too late and spent weeks debugging production issues we could have spotted in minutes. I'd also have designed for multi-tenancy from the start rather than retrofitting it, which cost us more than it should have.

---

## 2. Bridging research and production at Benevity

**Best for:** "Tell me about deploying ML models to production" / "How do you work with ML engineers?"

After the acquisition in 2021 I joined Benevity as Senior Staff Engineer on a team about ten times the size of Alaya. The codebase was Java and microservices, the culture was different, and I had to earn credibility before pushing any technical opinions. I spent the first month just listening and mapping the architecture.

My task was to integrate Alaya's capabilities into Benevity's platform while also driving the adoption of AI-assisted development workflows across the engineering org. These were really two different challenges running in parallel.

On the ML side, I became the go-to bridge between the teams building models and the teams running production systems. The recurring problem was that a model performing well in a research environment would behave differently at scale or with real-world data distributions. I built internal tooling to monitor inference pipelines, set up canary deployments for model updates, and documented failure patterns we kept seeing. I drove three major cross-team architecture decisions around how we served model outputs to the product layer.

Within 18 months, the core Alaya features were live inside Benevity's platform and our ML deployment patterns had been adopted by two engineering teams. The canary process we built caught two regressions before they hit production.

What I'd do differently: I initially tried to impose patterns from Alaya too quickly. Slowing down and building trust first made me far more effective once I did start proposing changes. The technical opinions landed much better when people believed I understood the existing system.

---

## 3. Architecture decision under pressure: monolith vs. microservices

**Best for:** "Tell me about a hard technical trade-off" / "How do you handle technical debt at a growing startup?"

At Alaya, around 2019, the platform was showing scaling cracks. The monolith that had gotten us to market was struggling under increased load on a few specific endpoints. The team had grown to four engineers and everyone had an opinion: full microservices rewrite versus modular monolith versus something in between. Investors were pushing for new features, not rewrites.

My task was to make a defensible call that balanced long-term scalability with the reality that we couldn't pause delivery for six months to rebuild.

I ran a two-week technical spike, testing both approaches with prototype load tests on our actual data volumes. I built a simple benchmark comparing the two highest-traffic modules extracted as services versus refactored in place. Then I presented the results to the CTO and investors: concrete numbers, not architectural opinions. The data pointed toward a strangler-fig migration: extract the two most stressed modules as services, keep the rest monolithic, and define clear criteria for when to extract additional pieces.

We shipped the first extracted module in six weeks. Performance improved ~40% on those endpoints. The rest of the monolith stayed stable through the acquisition two years later. We never needed a big-bang rewrite.

The hardest part wasn't the technical decision; it was convincing people that "not rewriting everything" was the right answer. That's where the benchmarks did the real work. I'd start with quantitative data even earlier next time, before the debate picks up momentum.

---

## 4. Driving adoption without a mandate

**Best for:** "How do you influence without authority?" / Staff/principal-level questions about technical leadership

At Benevity, I was a Senior Staff IC with no direct reports. I wanted to change how the engineering teams worked, specifically by getting AI-assisted tooling into their day-to-day workflow. The two teams involved didn't report to me, and there was no company mandate pushing them in that direction.

I started with three engineers who were already curious about it, people I'd noticed experimenting on their own. I built internal demos showing concrete time savings: a PR review that took 90 minutes now took 20. I ran informal lunch sessions, no obligation, just "here's what I've been doing, try it if you want." I also created reusable prompt templates and committed them to a shared internal repo so people didn't have to figure it out from scratch.

The key was letting the early adopters do the selling. Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation regularly. The practice spread because colleagues were showing each other, not because anyone told them to.

Looking back, the mandate-free approach was slower at first but much stickier. When engineers choose to adopt something on their own terms, they become internal advocates. A top-down decree would have gotten faster initial compliance and much more resistance underneath.

---

## 5. Joining a new environment and earning credibility

**Best for:** "Tell me about adapting to a new team or codebase" / "How do you ramp up quickly?"

This is adjacent to Story 2 but worth having separately. After the Benevity acquisition the cultural gap was real: a 300-person company running Java microservices, with formal architecture review processes and multi-continent teams, compared to the five-person startup where I'd been making all the calls.

My instinct was to start fixing things. I could see patterns I thought were suboptimal within the first few weeks. That instinct was wrong. I spent the first month doing almost nothing except reading code, attending planning meetings without speaking much, and asking questions rather than proposing solutions. By the end of that month I understood why things were built the way they were, which constraints were load-bearing and which were just legacy choices no one had cleaned up.

When I did start proposing changes, they landed because I could reference the history behind existing decisions and explain why the new approach handled those original constraints better. Within six months I was being included in cross-team architecture discussions as a peer, not as the person from the acquired company.

The lesson was uncomfortable to learn: context is a prerequisite for credibility. Moving fast in a new environment usually means moving slowly at first.
