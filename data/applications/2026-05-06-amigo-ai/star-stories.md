# STAR Stories — Amigo AI / Applied AI Engineer

## Story 1: Introducing AI Workflows That Actually Stuck in Production

**Likely question:** "Tell me about a time you deployed an AI system that engineers depended on in production."

At Benevity, after the Alaya acquisition, I saw that the engineering org had no shared practice around AI tooling even though it was clearly becoming table stakes. The risk wasn't that people were against it; it was that previous attempts had been demos with no follow-through. My task was to make AI-assisted workflows real and durable across two teams that didn't report to me, with no mandate and no dedicated time budget.

I started with three engineers who were already curious. Rather than pitching the concept, I showed concrete outcomes: one example I documented saved roughly two hours on a PR review cycle. I built reusable prompt templates and committed them to a shared repo so the value persisted even if I wasn't in the room. I ran informal sessions on our actual codebase, not toy examples, so people could see what it felt like to use the tooling on real code they were responsible for. Critically, I made it opt-in. No requirement, no decree.

Within three months, about 70% of engineers across both teams had integrated AI-assisted code review and generation into their regular workflow. The voluntary adopters became the best internal advocates. That wouldn't have happened any other way.

What I'd do differently: I tracked adoption but not quality. Did the AI suggestions actually make the code better? That's the metric that matters in the long run, and I'd instrument it from day one rather than retrofitting measurement later.

---

## Story 2: Building Alaya from Zero with Real Reliability Constraints

**Likely question:** "Tell me about a time you built a production system under pressure with real stakes."

In 2016, I co-founded Alaya, an enterprise employee engagement platform. We had no product, no team, and customers who'd been promised delivery timelines. The situation was straightforward in the worst way: build something that works, on time, that enterprise compliance teams won't reject, and that can scale when you eventually need it to.

I was the only engineer for the first several months. I chose Node.js, React, and PostgreSQL not because they were the most impressive options, but because they gave me the fastest path to a reliable first version with a credible scaling story. I designed for multi-tenancy from the start, having seen too many platforms retrofit it later at enormous cost. I built the core feature set in roughly three months to get to a real demo. Once things were stable, I brought on engineers, set up CI/CD and code review culture, and started instrumenting for observability, though later than I should have.

By 2021, when Benevity acquired us, we had 50+ enterprise clients and a platform that had never had a major outage. Benevity's engineering team did due diligence on the codebase and didn't find surprises. For me, that was the real validation: not the acquisition number, but the fact that the system held up under scrutiny.

Reflection: I added proper APM at month twelve or so. We went nearly a year without good visibility into where the system was slow, which cost us debugging time we could have avoided. Observability goes in at week two if I'm doing it again.

---

## Story 3: Architecture Decision Under Competing Pressures

**Likely question:** "Tell me about a technical trade-off you navigated where reasonable people disagreed."

At Alaya, around year three, the monolith was starting to show scaling cracks on our busiest endpoints. The engineering team wanted a full microservices rewrite. Investors wanted new features shipped. Both had real arguments. My task was to make a defensible technical call that didn't bet the company on a rewrite, didn't ignore the actual problem, and could be explained clearly to people who weren't going to read an architecture doc.

I ran a two-week technical spike: built small prototypes of both approaches, did load tests on the modules we knew were problematic, and put actual numbers in front of people rather than opinions. Then I proposed a strangler fig migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define clear criteria for when additional extraction was warranted. The framing mattered as much as the decision. "Not rewriting everything" had to read as a deliberate engineering choice, not a compromise, or the team wouldn't trust it.

We shipped the first extracted module in six weeks. The busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition without a big-bang rewrite.

If I did this again, I'd have started the load tests on day one of the debate rather than day eight. We spent a week arguing from intuition before I suggested actually measuring things. That week was wasted.

---

## Story 4: Collaborating with Domain Experts to Build Something I Didn't Fully Understand

**Likely question:** "Tell me about a time you had to rely heavily on non-engineering expertise to build the right thing."

When I joined Benevity post-acquisition, I found myself contributing to architecture decisions for a domain I didn't know: corporate philanthropy and employee giving at enterprise scale. The product team had years of customer context I didn't have. If I designed from first principles without that context, I'd build the wrong thing confidently.

I made a deliberate call to spend the first month not proposing changes. I mapped the existing architecture, had long conversations with product managers and customer success people who knew the domain, and built a mental model of what the system actually needed to do for users before touching anything. When I did start contributing to architecture discussions, I tried to frame things in the product team's language rather than engineering abstractions, which made the conversations more productive.

Three major architecture decisions I contributed to during that first year shipped without requiring significant rework. And the product team started treating me as a collaborator rather than a translator, which only happened because I'd built trust by listening first. Two years in, I was the cross-team liaison for the Europe-facing product surface.

What I'd do differently: I'd ask naive questions earlier. There's specific domain knowledge you only get by being willing to say "explain this to me like I don't understand the product" and I waited too long before doing that.
