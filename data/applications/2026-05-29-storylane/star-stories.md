# STAR Stories — Storylane / Platform Lead AI Engineer

---

## Story 1: Building a Platform from Zero (Alaya)

**Best for:** "Tell me about a time you built infrastructure from scratch" / "How do you approach a greenfield platform?"

In 2016, I co-founded Alaya with no codebase, no customers, and no team. My first job was to make architectural choices that would hold up as we grew, before I had any data on how growth would actually look. I chose Node.js, React, and PostgreSQL partly for velocity, partly because I knew I'd be hiring junior engineers who'd need to ramp up fast. The first version was a monolith by design, not by accident; I knew where the seams were and planned the eventual splits before writing a line of code.

The hardest early decision was multi-tenancy. We had one enterprise client and I was debating whether to add full tenant isolation at the data layer immediately or wait. I built it in from the start, which cost us about three weeks upfront. That turned out to be the right call: when we signed our second and third clients six months later, onboarding was a configuration step, not an engineering sprint.

By 2021 we had 50+ enterprise clients in Switzerland and France, and Benevity acquired us. The stack I'd built five years earlier survived the acquisition due diligence without any critical surprises. I'd have instrumented observability earlier, ideally from month one rather than month eight, but the core architectural decisions aged well.

---

## Story 2: Strangler Fig Migration Under Investor Pressure

**Best for:** "Tell me about a hard technical trade-off" / "How do you handle technical debt vs. delivery pressure?"

At Alaya, by 2019 the monolith was starting to crack. Two modules were eating disproportionate CPU under load, and the team was debating a full microservices rewrite. Investors wanted new features, not a rebuild. The loudest voices in the room were split between "rewrite it all now" and "ship features, fix it later."

I ran a two-week spike instead of picking a side. We benchmarked both approaches with realistic load profiles, then I presented the data: a full rewrite would take nine months minimum, with zero feature velocity in parallel. The modular monolith approach, using a strangler fig pattern on the two hottest modules, could deliver measurable performance improvement in six weeks while keeping feature work running.

We extracted the two highest-traffic modules first. Performance improved by roughly 40% on the busiest endpoints. The remaining monolith stayed stable all the way through the acquisition two years later. No big-bang rewrite was ever needed. The toughest part wasn't the engineering; it was convincing people that deliberately not rewriting everything was the responsible choice. Having concrete load test numbers, rather than architectural opinions, was what closed that debate.

---

## Story 3: Leading AI Tooling Adoption Without a Mandate

**Best for:** "How do you lead without formal authority?" / "Tell me about driving org-wide change" / Staff+ roles

When I joined Benevity post-acquisition, I was a Senior Staff IC with no direct reports, but I could see that the engineering organization was underusing AI tooling in ways that were costing real hours. My job wasn't to mandate a change; I wasn't anyone's manager. My job was to make the change attractive enough that people chose it.

I started with three engineers who were already curious about GitHub Copilot and similar tools. We ran informal sessions, not trainings, just working together on real tasks with the tools running. I built a small library of reusable prompt templates tailored to our codebase and committed them to a shared repo so people had something concrete to copy, not just a philosophy to absorb.

The key move was documenting specific time savings in terms people understood: "this PR review cycle that used to take two hours took forty minutes." Not percentages; actual workflow moments they recognized. Within three months, roughly 70% of engineers on two teams had integrated AI-assisted tools into their regular workflow. The adoption was stickier than it would have been with a top-down directive, because the engineers who adopted it became its advocates. I couldn't have engineered that dynamic through authority.

---

## Story 4: Navigating a Post-Acquisition Architecture at Scale

**Best for:** "Tell me about joining a large, complex codebase" / "How do you operate in a bigger org than you're used to?"

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering organization of 80+. The codebase shifted from my own architecture to a large Java microservices platform I'd never seen. The instinct when you're used to being the person who knows everything is to move fast and start proposing fixes. I resisted that instinct deliberately.

I spent the first month just mapping. I read code, followed data flows, sat in architecture review meetings without contributing much, and asked questions rather than pitching solutions. Only after I understood which parts of the system were actually fragile versus which just looked unfamiliar did I start making proposals.

That approach paid off in credibility. By month three I was the cross-team liaison for the Europe-facing product surface, contributing to three major architecture decisions that touched multiple teams. It's a different skill set than building something yourself: you have to earn the right to have opinions, and you earn it by understanding the system well enough that people trust your judgment on the parts they don't have time to look at themselves.

---
