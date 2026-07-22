# STAR Stories: Shook Digital, Founding Engineer, ShookAI Platform

Prepared for a founding/first engineer role building an AI-native, self-serve video advertising platform. Stories chosen for relevance to zero-to-one building, AI tooling adoption, and shipping under ambiguity.

---

## 1. Building Alaya from a blank page

This is the one I'd lead with for a founding engineer conversation. In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement, and there was nothing there yet, no product, no customers, just an idea the business side wanted to sell. My job was to architect and build the whole thing, alone at first, while the company was already trying to close its first enterprise clients. I picked a pragmatic stack, Node and React and Postgres, specifically because it wouldn't force me into decisions I couldn't walk back later, and I had core features working within three months so we could put a demo in front of investors. From there I kept expanding, multi-tenant architecture, an API layer, impact reporting, and I hired and onboarded the first three engineers once the product needed more than one person. By the time Benevity, a Canadian company valued north of a billion dollars, acquired us in 2021, we had over 50 enterprise clients running across Switzerland and France. Looking back, I'd have put real observability in place earlier since we bolted on APM late, and I underestimated how expensive it would be to retrofit multi-tenancy after the fact rather than designing for it from day one. That's exactly the kind of lesson I'd bring to ShookAI's early architecture calls.

---

## 2. Driving AI-assisted engineering adoption without a mandate

At Benevity I was a senior IC with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked and bring AI tooling into their daily flow. Telling people to use a tool rarely works, so instead I started with three engineers who were already curious, built small internal demos that showed concrete time saved, and ran informal lunch sessions with no requirement to attend. I put together reusable prompt templates and committed them to a shared repo so the value was one click away rather than theoretical. Within about three months, something like 70% of engineers across both teams had adopted AI-assisted code review and generation as part of their normal workflow, and I'd become the person people asked when they wanted to get more out of it. The tradeoff was speed, this took longer than a top-down decree would have, but the adoption stuck because people chose it rather than had it handed to them. For a role that leans on Claude Code and Cursor from day one, that experience of making AI tooling actually usable, not just available, feels directly relevant.

---

## 3. Choosing not to rewrite under investor pressure

At Alaya, our monolith was starting to strain as we scaled, and the team was split between a full microservices rewrite and something more modest. Investors wanted new features shipped, not months spent on plumbing, so I had to make a call that would hold up under both technical and business scrutiny. I ran a two-week spike comparing both paths with actual load tests rather than opinions, then presented the trade-offs to the CTO and investors with numbers on the table. What I proposed was a strangler fig approach: pull out the two highest-traffic modules first, leave the rest alone, and set clear criteria for when we'd extract more. The first module shipped in six weeks and performance on our busiest endpoints improved around 40%, and the rest of the monolith stayed stable straight through the acquisition. The hardest part honestly wasn't the technical work, it was convincing people that not doing the dramatic rewrite was the disciplined choice. If I did it again I'd run the benchmarks even earlier, since the data is what actually ended the debate, not the argument itself.

---

## 4. Working across functions on unfamiliar ground

After Benevity acquired Alaya, I landed on a team ten times the size of what I'd worked in before, with a different codebase (Java, microservices instead of our Node stack) and a different culture entirely. My task was to help fold Alaya's capabilities into Benevity's platform without slowing down the product velocity we'd built up. I spent the first month just mapping their existing architecture before I proposed anything, and I made a point of building relationships with the platform and infra teams before pushing any technical opinions on them. That groundwork paid off, I ended up contributing to three major cross-team architecture decisions and became a go-to liaison for the Europe-facing product surface. Where I stumbled early on was trying to fix things in the new org that weren't actually broken, just different from what I was used to. Slowing down and listening first made me far more effective once I adjusted, and it's a habit I'd carry into a small, fast-moving team like ShookAI's where trust gets built quickly or not at all.

---

## 5. Shipping fast with ambiguous, moving requirements

Early at Alaya, before we had a real product team, requirements shifted week to week because we were learning what enterprise clients actually wanted as we signed them. There wasn't a spec to build against, just conversations with prospective customers and a rough sense of what "purpose and impact reporting" needed to look like. I treated the first three months as a single sprint toward one goal, a demo good enough to raise money on, and cut scope aggressively anywhere it didn't serve that goal directly. That discipline is what got a working platform in front of investors on schedule, and it's the same instinct I'd bring to building ShookAI's first self-serve workflows, where the fastest path to a real MVP usually means saying no to features that feel important but aren't load-bearing yet. In hindsight, I was sometimes too quick to cut things that mattered later, like basic usage analytics, so now I try to separate "not now" from "never" more deliberately when I'm making that call.
