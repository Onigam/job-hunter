# STAR Stories — Staff Product Engineer @ Prefect

---

## 1. Building a Platform from Zero (End-to-End Ownership)

*Best for: "Tell me about a time you owned something end-to-end" / "How do you approach a blank page?"*

In 2016, we had nothing: no product, no customers, no team. My co-founder and I had signed the first enterprise client before writing a single line of code, so the pressure was immediate. My job was to architect and build the entire platform alone while the business was figuring out what it actually needed.

I chose a pragmatic stack: Node.js, React, PostgreSQL. I resisted the urge to over-engineer for hypothetical scale, built a working demo in three months, and then iterated from there. Multi-tenant architecture, an API layer, impact reporting, postal campaigns, admin tooling. I hired the first three engineers around month six and had to do that while still shipping features, so I built onboarding into the process rather than treating it as a separate activity. We had code review culture and CI/CD from day one because retrofitting those later is expensive.

By 2021 we had 50+ enterprise clients across Switzerland and France and Benevity acquired us. The acquisition was a direct validation that the technical decisions made early held up under five years of growth pressure.

Looking back, I'd have invested in observability earlier. We added APM late and paid for it in incident response time. I'd also design for multi-tenancy on day zero next time rather than retrofitting it at month eight.

---

## 2. Shipping a Hard Architecture Decision Under Investor Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle competing priorities?"*

Around 2019, our Alaya monolith was starting to show strain. Response times on the busiest endpoints were degrading and the team was split on a solution. One camp wanted a full microservices rewrite. Another thought we should stay monolithic and just add caching. The business side wanted neither conversation and just wanted new features shipped. I was the one who had to break the tie.

I ran a two-week technical spike: load tests on both approaches, a prototype extraction of the highest-traffic module, concrete numbers on engineering cost and timeline for each path. Then I presented trade-offs to the CTO and investors with the data rather than with opinions. What I proposed was a strangler fig migration: extract the two highest-traffic modules first, define clear criteria for when it makes sense to extract more, and leave the rest monolithic until those criteria are met.

The first extracted module shipped in six weeks. We saw a ~40% improvement on those endpoints. The remaining monolith stayed stable through the acquisition without needing additional surgery.

The hardest part wasn't the technical work. It was convincing people that "not rewriting everything" was the defensible answer. The data cut the debate short. I'd run the benchmarks even earlier next time so I'm not spending the first week of the spike just setting up the experiment.

---

## 3. Driving Adoption Without Authority

*Best for: "How do you influence without a mandate?" / Staff+ / "Tell me about leading cross-team change"*

After joining Benevity post-acquisition, I was a Senior Staff IC with no direct reports but a clear sense that our engineering teams were leaving significant productivity on the table by not using AI tooling. The problem was that two separate teams didn't report to me and had no particular reason to listen to my suggestions.

I started with three engineers who were already curious: the natural early adopters. Rather than writing a policy or a proposal, I built demos showing concrete time savings, a 2-hour PR review cycle reduced to 40 minutes, test scaffolding generated from a spec in under 5 minutes. I ran informal lunch sessions, no calendar invite required, just showed up with a working demo. Then I created reusable prompt templates and committed them to a shared repo so adoption had low friction.

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation. I became the informal AI tooling lead across the org. More importantly, engineers were advocating for the tools internally because they'd chosen to adopt them on their own terms.

The key insight I took from this: mandates create compliance, not adoption. If you want people to actually change how they work, the ask has to be smaller than the value you're demonstrating. I'd still start with early adopters next time, but I'd document the results more systematically from the start so the internal advocacy has concrete numbers behind it.

---

## 4. Post-Acquisition Integration Under Culture Shock

*Best for: "Tell me about navigating a major organizational change" / "How do you work across teams with different cultures?"*

When Benevity acquired Alaya in 2021, I went from being one of five people who built everything to being one engineer on a team of fifty, with a Java-heavy microservices codebase and a product process I hadn't been part of designing. The culture was different, the tooling was different, and I had strong opinions from five years of building things my own way.

My instinct in the first week was to point out everything that could be better. I learned quickly that was the wrong approach. I spent the first month mapping the architecture before proposing anything. I invested in building relationships with platform and infra teams before pushing technical opinions. I framed contributions as questions rather than recommendations until I understood the constraints.

The work I ended up contributing to was meaningful: I was involved in three major cross-team architecture decisions over the following eighteen months and became the bridge between the Europe-facing product surface and the North American engineering org. The AI tooling adoption work above came out of this period too.

The reflection is simple: I initially moved too fast trying to fix things that weren't broken. Slowing down in the first 30 days made me more effective for the following 24 months. Speed of trust matters more than speed of delivery in that transition window.

---

## 5. Owning a Full Product Slice from Signal to Production

*Best for: "Tell me about a feature you owned fully" / "How do you work with non-technical stakeholders?"*

At Alaya we built a postal campaign feature: physical mailings to employees at home, integrated with the platform's impact data. It came from a client request that initially sounded niche, but when I talked to four other clients, three of them had the same underlying need: reaching employees who weren't engaging through digital channels.

I owned the feature completely from that customer discovery to the spec to the backend service and the UI. I scoped it in two weeks, built a prototype to test the core logistics integration in week three, and iterated with the client who'd originally requested it before opening it to others. The UI went through three rounds of feedback before it shipped.

The feature became one of our higher-retention drivers, something clients mentioned specifically when we were in renewal conversations. It also taught me something about product instincts: the clients who ask for a specific thing are often pointing at a real problem even when the specific thing they asked for isn't quite right. The job is to find the underlying problem, not just build the request.

If I were doing it again, I'd do the multi-client discovery earlier and more formally. I got lucky that the solution generalized. A more deliberate process would have given me confidence faster.
