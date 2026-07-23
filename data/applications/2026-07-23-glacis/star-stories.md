# STAR Stories: Glacis, Founding Software Engineer, Agentic AI

Prepared for a founding-engineer conversation at a nine-person startup building AI agents that take real actions in enterprise supply chains, order intake, procurement, transportation, with SOP-driven approvals and an audit trail. Stories chosen for zero-to-one building, technical ownership under ambiguity, and working directly with enterprise customers.

---

## 1. Building Alaya from a blank page

This is the one I'd lead with for a founding engineer conversation, since Glacis is asking for the same thing at a similar stage. In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement, and there was nothing there yet, no product, no customers, just an idea the business side was already trying to sell to enterprise clients. My job was to architect and build the whole platform, alone at first, while the company signed its earliest contracts around me. I picked a pragmatic stack, Node, React, Postgres, specifically because it wouldn't lock me into decisions I couldn't undo later, and I had core features working within three months so we could put a real demo in front of investors. From there I kept expanding: multi-tenant architecture, an API layer, impact reporting, and I hired and onboarded the first three engineers once the product needed more than one person. By the time Benevity, a Canadian company valued north of a billion dollars, acquired us in 2021, we had 50+ enterprise clients running across Switzerland and France. Looking back, I'd have put real observability in place earlier since we bolted on APM late, and I underestimated how expensive multi-tenancy is to retrofit versus designing for it from day one. That's exactly the kind of architectural judgment call I'd bring to Glacis's early agent infrastructure.

---

## 2. Choosing not to rewrite under pressure

At Alaya, our monolith started showing scaling cracks right as investors were pushing for new features, not months spent on plumbing, so I had to make a call that would hold up under both technical and business scrutiny. I ran a two-week spike comparing a full microservices rewrite against a more modest approach, using actual load tests instead of opinions, then presented the trade-offs to the CTO and investors with numbers on the table. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave the rest alone, and set clear criteria for when we'd extract more. The first module shipped in six weeks, performance on our busiest endpoints improved around 40%, and the rest of the monolith stayed stable straight through the acquisition. The hardest part wasn't the technical work, it was convincing people that not doing the dramatic rewrite was the disciplined choice. This maps closely to what Glacis will face integrating with a dozen different ERP and TMS systems: the temptation to build one grand unified abstraction instead of shipping the two integrations that actually matter this quarter.

---

## 3. Driving AI-assisted engineering adoption without a mandate

At Benevity I was a senior IC with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked and bring AI tooling into their daily flow. Telling people to use a tool rarely works, so I started with three engineers who were already curious, built small internal demos showing concrete time saved, and ran informal sessions with no requirement to attend. I put together reusable prompt templates and committed them to a shared repo so the value was one click away instead of theoretical. Within about three months, something like 70% of engineers across both teams had adopted AI-assisted code review and generation as part of their normal workflow. The tradeoff was speed, this took longer than a top-down decree, but the adoption stuck because people chose it. For a role designing agent behavior that other engineers and customers need to trust, I think that same instinct, show the concrete win before asking for buy-in, applies directly to getting enterprise customers comfortable letting an agent execute approved actions on their behalf.

---

## 4. Working across functions on unfamiliar ground

After Benevity acquired Alaya, I landed on a team ten times the size of what I'd worked in before, with a different codebase, Java and microservices instead of our Node stack, and a different culture entirely. My task was to help fold Alaya's capabilities into Benevity's platform without slowing the product velocity we'd built up. I spent the first month mapping their existing architecture before proposing anything, and I made a point of building relationships with the platform and infra teams before pushing technical opinions on them. That groundwork paid off: I contributed to three major cross-team architecture decisions and became a go-to liaison for the Europe-facing product surface. Where I stumbled early was trying to fix things in the new org that weren't actually broken, just different from what I was used to. Glacis's customers each run their own ERP and TMS setup, so that same discipline, map first, then propose, matters as much with a customer's ops team as it did with an internal platform team.

---

## 5. Shipping fast with ambiguous, moving requirements

Early at Alaya, before we had a real product team, requirements shifted week to week because we were learning what enterprise clients actually wanted as we signed them. There wasn't a spec to build against, just conversations with prospective customers and a rough sense of what impact reporting needed to look like for each one. I treated the first three months as a single sprint toward one goal, a demo good enough to raise money on, and cut scope aggressively anywhere it didn't serve that goal. That discipline is what got a working platform in front of investors on schedule, and it's the instinct I'd bring to Glacis's first agent workflows, where the fastest path to something enterprise customers trust with real supply chain data usually means saying no to features that feel important but aren't load-bearing yet. In hindsight I was sometimes too quick to cut things that mattered later, basic usage analytics for one, so now I separate "not now" from "never" more deliberately when I make that call.
