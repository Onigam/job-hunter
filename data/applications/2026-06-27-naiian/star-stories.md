# STAR Stories — naiian Founding Principal Backend Engineer

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Founding engineer" roles / "How do you handle ambiguity?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. There was no codebase, no customers, no prior technical decisions. My task was to architect and build the entire platform from scratch while the business side was simultaneously closing the first enterprise clients, which meant the system had to be production-ready, not a prototype, from the first real demo.

I started by choosing a pragmatic stack: Node.js on the backend, React on the front, PostgreSQL for data persistence. Multi-tenancy was a core requirement from day one since we'd be serving multiple enterprise clients on shared infrastructure, so I designed tenant isolation into the data model from the beginning rather than bolting it on later. I built the first version of the API layer, authentication, and workspace management alone over about three months, then onboarded the first two engineers with written architecture docs and a CI/CD pipeline already in place. As the product expanded into impact reporting, volunteering campaigns, and HR system integrations, I grew the team and iterated the data model without breaking existing clients.

By 2021, the platform served 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn with over $1B valuation, acquired us that year. The fact that they integrated our architecture rather than replacing it was the clearest signal that the early decisions had held up under real load.

What I'd do differently: I'd instrument the system for observability from month one rather than adding APM late. I also underestimated the cost of multi-tenancy when not designed at the database level from the start. Next time, row-level security policies from day zero.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Describe a time you had to choose between competing approaches"

Around 2019 at Alaya, we started hitting real scaling friction. Response times were climbing on our most-used API endpoints, and the team was stepping on each other's work in the monolith. Two camps formed: rewrite the whole thing as microservices, or stay with the monolith and modularize. Investors wanted new features, not a six-month internal rewrite with nothing visible to show for it.

My job was to make a defensible call and get everyone aligned. I ran a two-week technical spike comparing both approaches with prototype load tests on our busiest endpoints. What the data showed was that the bottleneck wasn't the monolith architecture itself; it was two specific high-traffic modules that could be extracted independently without disturbing the rest. A full microservices migration would have taken months and delivered minimal user-facing improvement in the interim.

I proposed a strangler fig approach: extract those two modules first, define explicit criteria for when to extract more, leave the rest alone. I presented the trade-offs to the CTO and investors with benchmark numbers, not architectural opinions. We shipped the first extracted module in about six weeks. Latency on those endpoints dropped roughly 40%. The remaining monolith stayed stable all the way through the acquisition two years later.

The hardest part wasn't the technical work. It was convincing people that "partial" was the right answer. Data cuts through that debate faster than any argument I've found.

---

## Story 3: Influencing Technical Change Without Authority

**Best for:** "How do you drive change without formal authority?" / "Tell me about leading a team you don't manage" / Staff+ / principal roles

At Benevity after the acquisition, I was a Senior Staff IC with no direct reports but a clear objective: get two engineering teams to adopt AI-assisted development practices. Neither team reported to me and there was no top-down mandate. The easy path was to send a Slack message with a tool recommendation. That approach almost never sticks.

Instead, I started with three engineers who were already curious. I built internal demos on actual work we were doing rather than toy examples, showing concrete time savings on specific workflows: PR review cycles, test generation, database migration scripts. I ran informal lunch sessions where engineers could try the tools with low stakes. I committed reusable prompt templates to a shared repo so the activation energy to experiment was as low as possible, and I kept a running document of concrete outcomes ("saved 2h on the payment processor migration PR").

Within three months, roughly 70% of engineers on both teams were using AI-assisted tooling as part of their regular workflow. More importantly, they were advocating for it internally rather than tolerating it. That organic advocacy is stickier than anything a top-down mandate would have produced.

What I'd change: get explicit backing from at least one engineering manager early. The grassroots path worked, but having even informal manager support would have removed some friction points faster.

---

## Story 4: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about adapting to a large or different organization" / "How do you handle change?" / "Describe working cross-functionally"

When Benevity acquired Alaya in 2021, I moved from a 10-person startup into an organization ten times larger. Different codebase (Java microservices), different tools, different decision-making culture, different everything. My first instinct was to move fast and propose improvements immediately. That turned out to be the wrong instinct.

I spent the first full month mapping the existing architecture and understanding how decisions got made before suggesting anything. I built relationships with the platform and infra teams before expressing technical opinions. That slowed me down initially, but when I did start contributing, I had the context to make proposals that actually landed. Over the following months I drove the migration of core Alaya features into Benevity's platform without a painful hard cutover, contributed to three major cross-team architecture decisions that are still running in production, and became the informal AI tooling lead across two engineering teams.

The parallel wasn't obvious at the time, but joining Benevity taught me the same thing that building Alaya taught me: the first thing you build is relationships and context, not systems. The systems follow.
