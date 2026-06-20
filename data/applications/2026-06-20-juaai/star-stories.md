# STAR Stories — Staff AI Engineer at Jua.ai

---

## 1. Building Alaya from Zero to Acquisition

*Best for: "Tell me about a time you built something from scratch" / "How do you approach ambiguity at the start of a project?"*

In 2016, I co-founded Alaya, an employee purpose platform targeting enterprise clients in Switzerland and France. We had nothing: no product, no customers, no codebase. My job was to design and build the full technical platform from scratch while the business was signing its first contracts.

The first thing I resisted was over-engineering the initial stack. I chose Node.js, React, and PostgreSQL, tools I could ship fast and extend sensibly later. In the first three months I built enough of the core to demo to enterprise clients. Then the real architectural work started: multi-tenant isolation, a reporting layer, postal campaign infrastructure, a third-party API. I hired the first three engineers, introduced CI/CD and code review culture from day one, and wrote the architecture documentation that became the foundation for everything that followed.

By 2021, we had 50+ enterprise clients and a platform that had never needed a big-bang rewrite. Benevity, a Canadian unicorn with a $1B+ valuation, acquired us. That outcome was a direct validation of the technical decisions made from the beginning: pragmatic stack choices, multi-tenancy by design rather than retrofit, and a disciplined approach to not building what wasn't needed yet.

What I'd do differently: I'd invest in observability much earlier. We added proper APM late and paid for it with painful debugging sessions. Structured logging from day zero would have saved us weeks.

---

## 2. Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt under delivery pressure?"*

Around year three at Alaya, the monolith was showing real cracks. High-traffic endpoints were slowing under load, and the engineering team was split: full microservices rewrite, or a modular monolith approach. Investors were pushing for new features, not technical rewrites. I had to make a call that was defensible both technically and commercially.

I ran a two-week technical spike. We built small prototypes for both approaches, ran load tests, and compared numbers rather than opinions. The data showed that a full microservices migration would take at least four months with high integration risk, while extracting just the two most heavily loaded modules would recover most of the performance cost in about six weeks. I presented the trade-off to the CTO and investors with actual metrics: latency distributions, projected delivery timelines, specific failure modes for each path.

We went with the strangler fig approach. The first module shipped in six weeks. Performance improved roughly 40% on our busiest endpoints, and the remaining monolith stayed stable all the way through the acquisition two years later. No big-bang rewrite was ever needed.

The hardest part wasn't the engineering, it was convincing people that not rewriting everything was the right call. Having data rather than gut feelings made that conversation much shorter. I'd front-load that kind of empirical work even earlier next time, before the debate starts rather than mid-argument.

---

## 3. Driving AI Tooling Adoption Without Formal Authority

*Best for: "How do you influence without authority?" / "Tell me about leading a change initiative" / Staff+ roles*

At Benevity, I was a Senior Staff IC with no direct reports but a strong conviction that AI-assisted development could meaningfully change how our engineering teams worked. The challenge: two teams that hadn't asked for this, in an organisation that had just absorbed an acquisition and had plenty of change fatigue already.

I didn't try to get a mandate. I started with three engineers who seemed curious and had some slack in their sprints. We ran a few experiments, I built internal tooling demos that showed concrete time savings on PR review and code generation tasks, and then ran informal lunch sessions with no attendance requirement. I also committed reusable prompt templates directly into a shared repository, so the value was accessible even to people who didn't come to a session.

Three months in, roughly 70% of engineers across both teams were using AI-assisted workflows regularly. The adoption was sticky because it was voluntary. Engineers who came to it on their own terms became internal advocates, which a top-down rollout couldn't have produced in the same way.

What I'd do differently: stand up the shared repository on day one, before any demos, so early adopters have something concrete to take back with them immediately. The artefact matters more than the presentation.

---

## 4. Navigating Post-Acquisition Integration

*Best for: "Tell me about navigating a major change" / "How do you work in a new team or culture?"*

After Benevity acquired Alaya in 2021, I joined a company ten times the size, with a different codebase, different processes, and a different culture. The technical environment shifted from a Node.js monolith I had built myself to a large Java-based microservices platform built by teams I had never worked with.

My first instinct was to map before proposing. I spent the first month understanding the existing architecture rather than pushing changes, and building relationships with the platform and infrastructure teams before forming opinions. That slowed my initial velocity but meant that when I did start offering technical input, it was grounded in how things actually worked rather than how I assumed they did.

Over the following year, I contributed to three major cross-team architecture decisions, successfully migrated core Alaya capabilities into Benevity's platform, and became the go-to person for AI tooling adoption across two engineering teams.

The thing I'd change: I initially moved too fast trying to fix things that weren't broken. Learning to distinguish genuine technical debt from unfamiliar patterns that were intentional took longer than it should have. Asking "why is this built this way?" before "this should be different" would have saved me some credibility early on.

---
