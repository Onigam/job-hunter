# STAR Stories — PlaynVoice, Head of Engineering

_Prepared for behavioral interviews. Stories are in first-person prose, past tense._

---

## 1. Building Alaya from zero to acquisition

**Best for:** "Tell me about building a product from scratch" / "What's your founding engineer experience?" / "How do you handle ambiguity?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had a blank page, no customers, no product, and a rough product direction. My co-founder handled the business side; I owned everything technical from day one.

The first thing I decided was not to over-engineer the stack. I picked Node.js, React, and PostgreSQL because I knew them well enough to move fast and because they'd survive to the scale we were targeting. The first three months I built mostly alone, focused on getting to a demo-able product. Once we had early clients, I hired the first three engineers. That was a real test because when you're still five people, a bad hire doesn't just slow you down, it can fracture the culture before it exists. I was deliberate about hiring for curiosity and ownership rather than for specific technology familiarity.

We reached 50+ enterprise clients across Switzerland and France. Benevity acquired us in 2021, which validated the technical and product decisions made from the start. The thing I'd do differently: I'd design for multi-tenancy from day one rather than retrofitting it later, and I'd add proper observability earlier. We added APM late and were mostly flying blind on performance until that point.

---

## 2. Making a hard architecture decision under pressure

**Best for:** "Tell me about a technical trade-off you had to navigate" / "How do you handle technical debt?" / "Tell me about a time you disagreed with the team on a technical direction."

At Alaya, as we scaled, the monolith started showing cracks under load. The team split roughly in two: some wanted a full microservices rewrite, others thought we should stay in the monolith. Meanwhile, investors were pushing for new features. It wasn't a comfortable position to be in.

I ran a two-week spike to get actual data before forming an opinion. We prototyped the extraction of two high-traffic modules and ran synthetic load tests against both the monolith and the extracted services. I presented the results to the board alongside concrete trade-offs: timeline, risk, and what we'd be giving up in delivery velocity if we chose the full rewrite.

The recommendation I made was a strangler fig approach: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract more. We shipped the first extracted service in about six weeks. Performance on those endpoints improved by roughly 40%. The monolith held together through the acquisition without incident.

The hardest part was convincing people that "don't rewrite everything now" was the right call, not the lazy one. The load test data helped cut the debate short. If I'd had to do it again, I'd run that benchmarking earlier, before opinions had time to calcify.

---

## 3. Driving AI tooling adoption across engineering teams

**Best for:** "Tell me about leading without formal authority" / "How do you get teams to adopt new practices?" / "What's your approach to AI in engineering?"

At Benevity post-acquisition, I was a Senior Staff IC with no direct reports. I wanted to drive adoption of AI-assisted development across two engineering teams that didn't report to me and had no mandate to change how they worked.

I started small. I found three engineers who were already curious about LLM tooling and worked with them first. Rather than evangelising in the abstract, I built demos showing concrete time savings: a PR review summary that used to take 45 minutes took 10 with the right prompt setup. I ran informal lunch sessions, never mandatory, and committed a set of reusable prompt templates to a shared repo so the bar to getting started was low.

Within three months, roughly 70% of engineers on both teams had incorporated AI-assisted code review or generation into their regular workflow. I became the informal AI tooling lead across the org, which was not a title that existed before. The approach was slower than a top-down mandate would have been, but the adoption stuck because engineers chose it themselves. The ones who adopted early became internal advocates in a way I couldn't have manufactured.

---

## 4. Navigating a post-acquisition integration

**Best for:** "Tell me about navigating change" / "How do you work in a large or unfamiliar organisation?" / "What did you learn about company culture transitions?"

When Benevity acquired Alaya in 2021, I went from being a technical cofounder on a team of twelve to a Senior Staff Engineer in a company of several hundred. Different codebase (Java, microservices), different processes, different communication norms.

My first instinct was to move fast and fix things. I noticed patterns that looked inefficient and had opinions from day one. That was a mistake. I spent the first month just mapping the architecture and asking questions rather than pushing ideas. I made a deliberate effort to build relationships with the platform and infra teams before I proposed anything. The goal was to understand what trade-offs people had already made and why, before forming opinions about what needed to change.

That approach paid off. Once I had context and credibility, I contributed to three major cross-team architecture decisions and eventually became the go-to person for AI tooling across two engineering orgs. The lesson I carried: in a new environment, speed of understanding matters more than speed of action in the first 30 to 60 days. Showing up with answers before you understand the questions loses people fast.
