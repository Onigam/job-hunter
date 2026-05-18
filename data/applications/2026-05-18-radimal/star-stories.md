# STAR Stories — Staff Platform Engineer at Radimal

---

## Story 1: Building Alaya's Platform from Zero
**Best for:** "How would you approach platform work at a 10-person company?" / "Tell me about a time you built infrastructure from scratch" / founding engineer questions

In 2016, I co-founded Alaya with a blank page. No product, no customers, no team. The company had started signing early conversations with enterprise clients, and my job was to build everything from scratch: the architecture, the AWS infrastructure, the CI/CD pipeline, and eventually the engineering team itself. There was no inherited codebase and no playbook for what the platform needed to become.

I chose Node.js, React, and PostgreSQL. Not because they were fashionable, but because they were pragmatic choices I could move fast with and hire for. Within three months I had a working demo. From there I kept expanding: multi-tenant architecture, an API layer, impact reporting, postal campaigns. As the team grew I hired the first three engineers, set up code review culture and architecture documentation, and built the deployment pipeline so they could ship without me being a bottleneck. I tried to make good decisions about what to over-engineer and what to leave simple.

By the time Benevity acquired us in 2021, the platform was running 50+ enterprise clients across Switzerland and France. The technical foundations held under acquisition scrutiny, which I take as the most honest validation of the early decisions.

In retrospect I added observability too late. APM went in well after the platform was in production, which meant we were flying blind during some early performance investigations. Next time I'd instrument from day one, even when it feels premature. The data you don't collect is always the data you need six months later.

---

## Story 2: Making a Hard Architecture Call Under Delivery Pressure
**Best for:** "How do you handle technical debt vs. feature pressure?" / "Walk me through a difficult infrastructure decision" / "How do you make defensible technical choices?"

At Alaya, we hit the point where the monolith was starting to creak. Query times were climbing, a few endpoints were clearly bottlenecked, and the team had the classic debate: full microservices rewrite or keep pushing. Investors wanted features, not rewrites. I needed to make a call that was defensible to both the technical team and the business side.

Rather than argue from intuition, I ran a two-week spike: prototype load tests, concrete performance comparisons, a real look at what a full rewrite would cost in time and risk versus a more surgical approach. I presented the findings to the CTO and investors with actual metrics, not opinions.

The call I made was a strangler fig migration: extract the two highest-traffic modules first, leave the rest of the monolith stable, and define clear criteria for when to extract additional services. No big-bang rewrite, no multi-month freeze, no promises we couldn't keep.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by around 40%. The monolith stayed stable all the way through the acquisition two years later. We never did a full rewrite, and we never needed to.

The thing I'd change: I should have run the benchmarks earlier in the debate. The data was what cut through the philosophical arguments, so I wasted time letting the debate run before I had numbers. Getting to empirical evidence faster turns an argument about preferences into an engineering decision.

---

## Story 3: Driving Change Without a Mandate
**Best for:** "How do you influence without authority?" / "Tell me about leading a cross-team initiative" / Staff+ and principal engineer questions

At Benevity I was a Senior Staff IC with no direct reports, but I was asked to drive AI-assisted development practices across two engineering teams that didn't report to me. The challenge wasn't technical. It was cultural. Engineers were skeptical, busy, and nobody likes being told their workflow needs to change by someone who isn't their manager.

I didn't start with a mandate or a rollout plan. I started with the handful of engineers on both teams who were already curious, and I showed them something concrete: a demo of AI-assisted code review that saved a measurable amount of time on a PR cycle they recognized. No slide deck, just a working example with a number attached.

From there I ran informal sessions with no attendance requirements, just demos over lunch. I built reusable prompt templates and committed them to a shared repository so people could copy and adapt rather than start from scratch. The early adopters started talking about it, and that word-of-mouth was more effective than anything I could have said myself.

Within three months, roughly 70% of engineers on both teams had integrated AI tooling into their regular workflow. I became the informal AI tooling lead across the org without ever having a title that said so.

What stuck with me: change that happens by mandate tends to be shallow and resented. Change that happens because someone saw it working and chose it themselves actually holds. The slower path turned out to be the more durable one.

---

## Story 4: Joining a 10x Larger Organization After Acquisition
**Best for:** "Tell me about navigating a major transition" / "How do you operate in a new, larger technical environment?" / "How do you build credibility quickly?"

When Benevity acquired us in 2021, I moved from a 12-person company into an engineering organization roughly ten times larger. Different codebase (Java and microservices instead of Node.js), different deployment processes, different architecture review conventions, and a culture I didn't know at all.

My first instinct was to start proposing changes immediately. I had fresh eyes on a codebase that had accumulated years of decisions, and some of them looked obviously suboptimal from where I was standing. That was exactly the wrong instinct, and I caught myself about a week in.

I spent the first month mapping the existing architecture before touching anything. I made a point of building relationships with the platform and infrastructure teams before pushing any opinions, because those opinions needed credibility first. I focused on understanding why things were built the way they were, not just what looked different from what I'd done at Alaya.

Over the following year I contributed to three major cross-team architecture decisions, became the go-to person for AI tooling adoption on the Europe-facing product surface, and helped migrate core Alaya capabilities into the Benevity platform without losing product velocity.

The lesson that came out of that first month: moving too fast to "fix" things I didn't fully understand nearly cost me the relationships I needed to actually change the things that were genuinely broken. Slowing down and listening first made every subsequent contribution land better than anything I could have pushed through in week two.
