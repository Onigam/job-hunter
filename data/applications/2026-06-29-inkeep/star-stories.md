# STAR Stories — Inkeep, Member of Technical Staff (Principal TypeScript Engineer)

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Describe a system you designed end-to-end" / "What's the hardest technical decision you've made?"

When I co-founded Alaya in 2016, I was the only engineer. The business was signing early enterprise pilots while I was still deciding on the data model. The stack question came first: Node.js, React, and PostgreSQL, chosen not because they were the most interesting at the time but because I could move fast in them without surprises. I got a working demo in front of paying customers within three months.

The harder problem turned out to be multi-tenancy. We had enterprise clients from the start, which meant data isolation wasn't optional, and I underestimated the complexity of it early on. I retrofitted tenant scoping into a schema that was already in production six months after launch. That was a painful few weeks, and it shaped how I make architectural decisions with downstream propagation. If I did it again, I'd treat multi-tenancy as a first-class constraint at the schema level before writing the first migration, not after.

The platform grew to serve 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian unicorn at a $1B+ valuation, acquired Alaya. The codebase we handed over had held up through four years of iteration and team growth. That survival record is the real test of day-one decisions.

---

## Story 2: Making a Hard Architecture Call Under Investor Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle competing priorities between speed and quality?" / "When did data change your mind?"

By 2019, the Alaya monolith was showing strain. The team was split between a full microservices rewrite and staying put. Investors wanted new features, not an infrastructure pause. I was the one who had to make a call.

I ran a two-week spike. We prototyped the two highest-traffic modules as standalone services, ran load tests against them, and measured coordination overhead under realistic concurrency. The numbers didn't support a full microservices split at our traffic level: service-to-service latency outweighed the scaling benefit for our p95 targets. What the data did support was extracting those two specific modules where we were hitting real bottlenecks.

I presented the findings to the CTO and investors with the actual benchmarks. Not a recommendation based on architectural preference, but one grounded in what our production load actually showed. The proposal was a strangler fig approach: extract the two high-traffic modules, define criteria for when to extract more, leave the rest as a modular monolith. We shipped the first extracted module in six weeks. Performance on those endpoints improved roughly 40%. The monolith stayed stable through the acquisition eighteen months later, without needing the rewrite.

The hardest part wasn't the technical work. It was convincing people that "not rewriting everything" was the defensible call. Data that runs on your actual traffic is worth more than architectural theory, and I've leaned on that lesson several times since.

---

## Story 3: Influencing Without Authority

**Best for:** "How do you lead when you don't have direct authority?" / Principal/Staff engineer roles / "Tell me about a time you changed how your team works"

When I joined Benevity after the acquisition, I was a Senior Staff IC with no direct reports and no mandate over how other teams worked. I'd been using AI-assisted developer tooling heavily during my last year at Alaya and thought it could save meaningful time in code review and generation cycles. The question was how to get two engineering teams to actually try it without a top-down push.

I started with three engineers who were already curious. I showed them concrete examples on real code: a PR review cycle that dropped from roughly two hours to forty minutes, a one-shot test scaffold for a complex module that would have taken an afternoon. I built reusable prompt templates and committed them to a shared repository so the work didn't disappear when the conversation ended. I ran optional lunch sessions, no mandate, no slides, just live demos on code the team recognized.

Within three months, about 70% of engineers on both teams were using some form of AI-assisted tooling. Not because anyone told them to, but because they'd seen it help someone they trusted. I ended up as the informal AI tooling lead across the org. The advocates who adopted it on their own terms were more convincing than any mandate I could have pushed through, and the adoption stuck because it was their decision.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating change" / "How do you work across teams with different cultures?" / "What would you do differently if you were new to a team again?"

The Benevity acquisition put me in an organization roughly ten times the size of Alaya. Different culture, different codebase (Java and microservices where we'd been Node.js), different norms around code review, deployment, and architectural decision-making.

My instinct in the first few weeks was to move fast. I saw things I thought could be improved and started putting forward suggestions early. That didn't land well. People didn't know me yet, and suggestions from a newcomer read as criticism of decisions they'd made deliberately. The feedback I got was indirect, but it was clear.

I reset after about a month. I spent the next few weeks doing almost nothing except mapping the existing architecture and building relationships with platform and infra teams. I asked questions rather than proposing solutions, and I worked on understanding the constraints that had shaped the current design before offering any alternatives.

By the time I started putting technical opinions on the table, I had enough context to frame them in terms of the existing system rather than what I would have done instead. Over the following year, I contributed to three major cross-team architecture decisions and successfully migrated core Alaya features into Benevity's platform without losing the product velocity we'd built. What I'd do differently: start in listening mode on day one, not month two.
