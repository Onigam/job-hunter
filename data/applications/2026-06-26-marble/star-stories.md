# STAR Stories — Co-Founder, CTO (Industrial Intelligence Platform) at Marble

Prepared for behavioral interview questions most likely to come up for a technical co-founder role in an early-stage, domain-heavy startup.

---

## Story 1: Building from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "Why should I trust you as a technical co-founder?" / "Have you done this before?"

When I co-founded Alaya in 2016, the company was a blank page. We had a whiteboard, a vague thesis about corporate purpose programs, and no customers. My job was to make the platform real before the business side ran out of runway.

The first decision was stack. I chose Node.js, React, and PostgreSQL, not because they were fashionable but because the three of us could move fast and hire for them. I had the core MVP up in roughly three months. From there it was iterative: multi-tenant architecture, an API layer for enterprise integrations, impact reporting dashboards, postal campaign tooling. As we brought on the first engineers, I set the code review culture, the CI/CD pipeline, and the architectural conventions that would survive past me. None of that felt like "architecture work" at the time. They were just decisions that had to be made before anyone else could make them.

By the time Benevity acquired us in 2021, we had 50+ enterprise clients across Switzerland and France. The platform had held up. The technical decisions from day one hadn't needed to be undone. What I'd do differently: add proper APM from the start. We bolted on observability later, which was painful. I'd also design for multi-tenancy from day zero rather than retrofitting it, which cost us weeks we didn't have.

---

## Story 2: Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle tech debt?" / "Tell me about a time you had to choose between velocity and correctness"

At Alaya, around year three, the monolith was starting to show stress. Load on certain endpoints was spiking, the codebase was getting hard to navigate, and investors were pushing for new features, not rearchitecture. The team was split: full microservices rewrite versus leaving things alone and hoping for the best.

My job was to make the call with data, not opinions. I ran a two-week technical spike comparing both approaches with prototype load tests on our highest-traffic endpoints, then presented the trade-offs to the CEO and our investors with concrete metrics. My recommendation was neither of the two options on the table: a "strangler fig" migration where we'd extract the two highest-traffic modules first and keep the rest monolithic, with clear criteria for when to extract additional modules.

The first extracted module shipped in six weeks. Performance improved by roughly 40% on the busiest endpoints, and the remaining monolith stayed stable through the Benevity acquisition without needing major surgery. The hardest part wasn't the engineering. It was convincing the team that "not rewriting everything" was the right call. What I'd do next time: front-load the benchmarking even more aggressively. The data was what won the argument, and I should have had it faster.

---

## Story 3: Driving Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about driving change in an organization" / "How do you get engineers to change how they work?"

This one is particularly relevant for industrial intelligence because getting operators on a factory floor to trust and use a new system requires the same dynamics as getting engineers to trust and use new tooling.

At Benevity post-acquisition, I was a Senior Staff engineer with no direct reports. I could see that AI-assisted development tools would substantially change how our engineers worked, but I had no mandate to make anyone adopt them. A top-down approach wouldn't have worked anyway.

I started with three engineers who were already curious. For them, I built internal demos showing concrete time savings: a PR review cycle shortened from two hours to about thirty minutes, a test generation workflow that removed a full afternoon per sprint. I ran informal lunch sessions, no pressure, just live demos and time for questions. I committed reusable prompt templates to a shared repo so people could pull and use them without having to think through the setup themselves. I documented results as short stories rather than metrics reports, because engineers read stories.

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly. I became the informal AI tooling lead across the org, which wasn't a title anyone gave me. What I'd do differently: document the "before" state more carefully from the start. We had the after-metrics but reconstructed the baseline from memory, which made the case less crisp than it could have been.

---

## Story 4: Bridging Domain Expertise and Platform Thinking

**Best for:** "Tell me about working with experts who know more than you" / "How do you operate in a domain you don't fully own?" / "Have you worked with scientists or engineers outside software?"

This story is the one that maps most directly to what the CTO role at Marble requires: being the software and platform person alongside a domain expert who has deep technical knowledge you don't share.

When Benevity acquired Alaya in 2021, I joined a company with a 10x larger team and a completely different technical culture. The product domain was similar enough, corporate purpose and impact programs, but the Benevity product and domain teams had years of institutional context I simply didn't have. My instinct in the first week was to start proposing things. That was wrong.

I spent the first month mapping the existing architecture and building relationships with the people who actually knew the system before I said anything about how it should change. When I did eventually push a technical opinion, I had enough credibility and context to be heard. Over the following year, I contributed to three major cross-team architecture decisions without owning any of them outright.

The reflection: moving into a new domain as the technical person requires patience that doesn't come naturally to builders. The right instinct is to understand the domain constraints first, then apply the software craft. The platform engineer who shows up with strong opinions about how the system should work before they understand the domain is usually wrong in ways they don't yet know.

---

## Story 5: Scaling a Team Through Hypergrowth

**Best for:** "Tell me about hiring and growing an engineering team" / "How did you build engineering culture from scratch?"

At Alaya, the early engineering team went from zero to five over about two years, which doesn't sound like much but was significant relative to the company's size. Every hire mattered; the wrong person at that stage would have cost us months.

I set three hiring principles early: hire for intellectual honesty over confidence, hire people who ask good questions about problems rather than immediately proposing solutions, and don't hire anyone I wouldn't want doing my own code reviews. The first three engineers I brought in were all mid-level, not seniors, because I could shape their habits and they'd grow with the product. That turned out to be right for the stage; they became strong seniors by the time of the acquisition.

For culture, I kept it informal but intentional. Code review was the main mechanism: I reviewed everything in the early days, left detailed comments, and expected the same in return. No culture deck, no engineering manifesto, just a consistent standard applied consistently. By the time the team was five people, the norms were self-reinforcing.

What I'd do differently: I'd hire for written communication earlier. Two of the engineers were technically strong but struggled with async communication across time zones, which became a constraint as we grew beyond Switzerland. I now consider written clarity a hard requirement, not a nice-to-have.
