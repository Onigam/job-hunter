# STAR Stories — Technical Lead Backend (DeFi Startup via ALBEDIS)

Prepared for: Magino Marveaux-Cochet
Role: Technical Lead Backend (TypeScript / Rust)
Date: 2026-06-25

---

## Story 1: Building a Backend Platform from Zero

**Best for:** "Tell me about a time you built something from scratch" / "How do you approach greenfield architecture?"

When I co-founded Alaya in 2016, the company had nothing: no product, no customers, no codebase. My job was to build the entire technical platform while the business was simultaneously signing its first enterprise clients. The pressure wasn't theoretical.

I made the initial stack choices alone: TypeScript and Node.js for the API layer, PostgreSQL for the data model, React on the frontend. I deliberately avoided over-engineering at the start because we didn't yet know which parts of the system would take the most load. The first version of the platform was up and running in three months, which gave us something to show prospects. After that, I expanded iteratively: multi-tenant architecture, an API layer built for external integrations, impact reporting, a postal campaign engine. I brought on the first three engineers about eight months in, set up CI/CD, established code review culture, and started writing architecture docs as a forcing function for clarity.

By the time of the acquisition in 2021, the platform had 50+ enterprise clients across Switzerland and France and was running stably on AWS with no major incidents. Benevity's due diligence validated the architecture choices; there was no "rewrite everything" mandate post-acquisition, which I took as a good signal.

Looking back, I'd have invested in observability earlier. We added proper APM late, which meant debugging production issues by inference longer than necessary. I'd also have designed for multi-tenancy from day zero instead of retrofitting it at month six.

---

## Story 2: Making a Hard Architecture Call Under Pressure

**Best for:** "Tell me about a technical trade-off you had to navigate" / "How do you handle technical debt while shipping?"

At Alaya, around year three, the monolith we'd built pragmatically at the start was showing cracks. The team was split: full microservices rewrite versus a modular monolith approach. Investors were watching and pushing for feature delivery, not rewrites. I had to make a defensible call.

The task was to pick a direction and get the team behind it, fast, without burning two months on debate and without guessing wrong.

I ran a two-week technical spike. We prototyped both approaches and ran load tests against each. I presented the results to the CTO and a few key stakeholders with concrete numbers, not arguments. The case I made was for a strangler-fig migration: extract the two highest-traffic modules first, leave the rest of the monolith stable, and define explicit criteria for when additional modules would warrant extraction. No big-bang rewrite, no indefinite feature freeze.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition two years later. We never needed the big rewrite.

The hardest part wasn't the technical work; it was convincing engineers who wanted the cleaner abstraction that "not rewriting" was the right call. Data helped more than opinion. Next time I'd front-load the benchmarking even more to cut the debate window shorter.

---

## Story 3: Navigating a Post-Acquisition Integration

**Best for:** "Tell me about working in a large, complex organization" / "How do you adapt to a new environment?"

When Benevity acquired Alaya in 2021, I went from a 12-person engineering team to an organization ten times that size. Different culture, different codebase (Java plus a microservices architecture I hadn't touched), different release processes. The question was how to contribute without bulldozing.

My task was to integrate Alaya's capabilities into Benevity's platform and keep shipping features, while also figuring out where I could add genuine value beyond just my product area.

I spent the first month mapping the existing architecture before proposing anything. Then I started building relationships with the platform and infrastructure teams before pushing technical opinions. When I felt I understood the lay of the land, I introduced AI-assisted development practices: GitHub Copilot, internal prompt templates, documented workflows for code review. I ran informal demo sessions, no mandate, just showing concrete time savings. I also took on a cross-team architecture liaison role for the Europe-facing product surface, which gave me visibility without overstepping.

Within three months, roughly 70% of the engineers on two teams had adopted AI-assisted code review and generation workflows. I contributed to three major cross-team architecture decisions that shipped to production. Benevity's leadership recognized me as the informal AI tooling lead across the org.

What I got wrong initially was moving too fast. I came in trying to improve things before I'd earned the credibility to suggest improvements. Slowing down and listening for the first few weeks made everything after that more effective.

---

## Story 4: Leading Technical Direction Without a Management Title

**Best for:** "How do you lead without formal authority?" / "Tell me about influencing a team as an IC"

At Benevity, I was a Senior Staff Engineer with no direct reports. I needed to change how two engineering teams worked by getting them to adopt AI-assisted development practices. I couldn't mandate anything.

I started small. I found three engineers on the teams who were curious about the tools and worked with them first. I built internal demos showing specific, measurable improvements: one example was a PR review cycle where AI-assisted tooling saved about two hours per cycle. I created a shared repo of reusable prompt templates so the overhead of starting was low. I ran lunch sessions, not training, just working demos.

Over three months, adoption spread without a top-down push. Engineers who picked it up voluntarily became advocates internally, which meant I wasn't the only voice promoting it anymore. By the end, 70% of engineers on both teams were using the tooling regularly.

The mandate-free approach was slower to start, but the adoption stuck. Engineers who choose to use something defend it; engineers who are told to use something look for exceptions. That distinction mattered for an org where culture was strong and change from outside was often met with friction.

---

## Story 5: Choosing a Technical Stack for a High-Stakes Product

**Best for:** "How do you make technology choices?" / "Tell me about a bet you made on a stack or architecture"

In 2016, when I was setting up Alaya's technical foundation, one of the first real decisions was stack selection. The choices I made then would constrain the team for years.

The pressure was real: we had no engineers yet besides me, no existing patterns to follow, and the business was moving fast. I needed a stack that I could ship quickly with alone, that would hire well, and that wouldn't become a liability at scale.

I went with TypeScript and Node.js for the backend and React for the frontend. At the time, TypeScript was not as universally adopted as it is now, but I chose it specifically because the type system forces clarity in API contracts, and I knew we'd eventually have a team where untyped code would become a coordination problem. PostgreSQL for the primary database because relational data with strong consistency constraints was the right fit for an impact-tracking system where financial reporting was involved.

The choices held. The stack scaled through the acquisition. Benevity's due diligence team reviewed the codebase and found it clean and navigable. We never needed to rewrite the core in something else.

What I'd change: I underestimated how much time a TypeScript monorepo setup would cost as the codebase grew. I'd invest earlier in monorepo tooling and clear module boundaries to avoid the dependency spaghetti that crept in around year three.
