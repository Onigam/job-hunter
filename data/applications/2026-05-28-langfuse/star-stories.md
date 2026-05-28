# STAR Stories — Langfuse Senior Forward Deployed Engineer

---

## Story 1: Being the Technical Partner for 50+ Enterprise Clients at Alaya

**Best for:** "Tell me about managing a strategic customer relationship" / "How do you guide customers through a complex technical onboarding?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. For the first few years there was no solutions team, no technical account manager, no customer success function. That was all me. Every enterprise client we signed, from Swiss SMEs to large French corporations, came with a technical onboarding that I ran personally: architecture deep dives to fit Alaya into their SSO and HR data flows, instrumentation sessions to get their first data into the platform, and production readiness reviews before go-live.

What made it hard wasn't the technology. It was managing the gap between what clients wanted to do immediately and what the platform could support reliably. A large client in France wanted to instrument their entire HR data pipeline in the first week. I had to explain, concretely, why we'd start with one integration and validate it before expanding, and what the risk was of skipping that step. They agreed, and the rollout went cleanly. Clients who ignored that sequencing always ran into issues.

By 2021 we had 50+ enterprise clients across Switzerland and France and were acquired by Benevity, a Canadian unicorn at $1B+ valuation. The customer relationships I'd built over those five years were part of what transferred. Several clients specifically asked that I stay involved post-acquisition.

Looking back, I'd have built more self-service onboarding materials earlier. Too much was in my head, which created a bottleneck as we scaled.

---

## Story 2: Driving AI Tooling Adoption Across Two Engineering Teams Without Authority

**Best for:** "How do you scale your impact to a large group?" / "How do you enable people who don't report to you?" / "Tell me about creating documentation or enablement materials."

At Benevity, where I joined as Senior Staff Engineer after the acquisition, I was an individual contributor with no direct reports. The engineering org had two teams I worked closely with, about 20 engineers total, and neither team had adopted AI-assisted development workflows beyond some ad-hoc Copilot usage.

My task was to change that, without any mandate and without ownership of their roadmaps. I started by finding three engineers who were already curious about the tooling. I spent a week building concrete demos with them: a PR review cycle that went from two hours to 20 minutes using a specific prompt pattern, a boilerplate generation flow for their test harness, an automated documentation pass for a module they'd been meaning to document for months. Real examples from their actual codebase, not toy demos.

From there I ran informal lunch sessions, no attendance required. The engineers who showed up became internal advocates. I committed a shared repo of prompt templates and wrote short docs on each workflow pattern we'd validated. The goal was that any engineer could pick up the workflow without me in the room.

Within three months, roughly 70% of engineers on both teams were using the practices regularly. I became the informal AI tooling lead across the org, but the stickiness came from engineers adopting it on their own terms, not from any top-down push.

What I'd do differently: invest in measurement earlier. I had anecdotal evidence that the workflows saved time, but no systematic tracking. Hard data would have accelerated the remaining 30%.

---

## Story 3: Choosing Between Microservices and a Modular Monolith Under Investor Pressure

**Best for:** "Tell me about a technical architecture decision you had to defend" / "How do you communicate complex tradeoffs to non-technical stakeholders?"

At Alaya, around 2019, the platform was starting to show scaling cracks in the highest-traffic parts of the system. The team had grown to four engineers, and we were debating a full microservices rewrite versus staying with the monolith and modularizing it. At the same time, investors were pushing hard for new features, not rewrites.

I had to make a decision I could defend to the CTO, to investors, and to the engineering team, with real constraints on all three sides. I ran a two-week technical spike: prototyped the extraction of our two busiest modules, measured latency and throughput on each approach, and documented the migration cost for each path. Then I presented the results, not as a recommendation wrapped in opinions, but as a table: approach A does this, costs this, risks this; approach B does that.

The recommendation was a strangler-fig migration. Extract the two highest-traffic modules first, leave the rest monolithic, and define explicit criteria for when to extract additional modules. First extracted module shipped in six weeks. Performance on those endpoints improved roughly 40%. The rest of the monolith held stable all the way through the acquisition in 2021 without needing a rewrite.

The hardest part was convincing people that "not rewriting everything" was the right call. Engineers wanted the clean-slate architecture. Investors were nervous about anything that sounded like a pause. Concrete benchmarks cut through both sets of objections faster than any argument would have.

---

## Story 4: Navigating a Post-Acquisition Integration at Scale

**Best for:** "Tell me about a time you had to adapt quickly to a new environment" / "How do you build relationships in a new organization?"

When Benevity acquired Alaya in 2021, I went from a 10-person startup to a company ten times that size, with a different codebase (Java, microservices), different tooling, and a very different organizational culture. My first instinct was to start proposing improvements immediately. I'd spent five years building a platform from scratch and had strong opinions about architecture.

That instinct was wrong. I caught it early enough to correct it. The first month I spent almost entirely listening: mapping the existing architecture, sitting in on planning sessions without speaking much, meeting with platform and infra teams before forming any opinions about what to change. I built relationships before pushing technical views, which meant that when I did raise issues, people already trusted the judgment behind them.

Over the following year I contributed to three major cross-team architecture decisions and became the go-to technical liaison for the Europe-facing product surface. The AI tooling adoption work came out of that trust, not out of any formal role.

The reflection is simple: speed of trust matters more than speed of ideas in a new environment. The engineers who pushed hard to change things in the first 90 days were ignored; the ones who listened first were the ones who got listened to later.

---

## Story 5: Responding to a Production Incident With a Client on the Call

**Best for:** "Tell me about handling a high-severity production incident" / "How do you manage technical escalations under pressure?"

At Alaya, we had a multi-tenant architecture serving Swiss and French enterprise clients. During a routine deployment in 2019, a misconfigured background job began processing data across tenant boundaries. It wasn't a data breach, but it was data contamination: one client's impact metrics were being partially attributed to another client's dashboard.

I was the first to spot it, mid-morning, after a client flagged anomalous numbers in their reporting. Within ten minutes I had a rough hypothesis; within twenty I had the root cause. The harder problem was that three clients were affected and their account managers were already fielding calls.

I joined those calls directly rather than delegating the communication upward. I gave each client a factual summary: what happened, what data was affected, what we'd already rolled back, and what the remediation timeline was. No hedging, no vague "we're looking into it." I had the incident resolved and all affected data corrected within four hours.

The postmortem led to two permanent changes: tenant-boundary assertions added to every background job, and a deployment checklist that included a 10-minute data integrity check before marking a deploy complete. Neither of those existed before that incident. I would have built them earlier if I'd thought more systematically about the failure modes of multi-tenant architectures from the start.
