# STAR+R Stories, Connectome (CTO)

Selected for the CTO mandate at Connectome: owning full-stack delivery, standing up secure data pipelines, guiding AI/LLM implementation, and building a team from close to nothing.

---

## Building Alaya from a blank page to acquisition

**Best for:** "Tell me about building something from scratch" / ownership at an early-stage startup

In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement, and the starting point was genuinely nothing: no customers, no product, no codebase. My job was to architect and build the whole thing while the business was out signing its first enterprise clients, so there wasn't room for a slow ramp-up. I picked a pragmatic stack, Node.js, React, PostgreSQL, that could scale without forcing an early rewrite, and got the core features live for a first demo inside three months. From there I kept expanding the platform into multi-tenant architecture, an API layer, and impact reporting, while hiring and onboarding the first three engineers and putting basic CI/CD and code review habits in place before the team got big enough to need them. By the time Benevity acquired the company in 2021, we had over 50 enterprise clients across Switzerland and France running on what I'd built. Looking back, I'd invest in observability much earlier, we didn't add proper APM until it was already overdue, and I'd design for multi-tenancy from day zero instead of retrofitting it later.

---

## A hard architecture call under investor pressure

**Best for:** "Tell me about a technical trade-off you navigated" / balancing scalability against delivery speed

At Alaya, our monolith started showing real scaling cracks around the same time investors were pushing hard for new features rather than a rewrite. The team was split between a full microservices rewrite and something more incremental, and I needed a decision that would hold up technically without stalling the roadmap. I ran a two-week spike comparing both approaches with actual load tests, then took the trade-offs to the CTO and investors as numbers rather than opinions. What I proposed was a strangler-fig migration: extract just the two highest-traffic modules first, leave the rest of the monolith alone, and define clear criteria for when to peel off the next piece. The first extracted module shipped in six weeks and performance on our busiest endpoints improved by roughly 40%, and the remaining monolith stayed stable all the way through the acquisition, no big-bang rewrite ever needed. The hard part wasn't the technical work, it was convincing people that not rewriting everything was the right call; having the benchmark data ready made that conversation much shorter than it would have been otherwise.

---

## Driving AI tooling adoption with no mandate

**Best for:** "How do you guide AI/LLM adoption" / influence without formal authority

As a Senior Staff engineer at Benevity I had no direct reports, but I wanted two teams that didn't report to me to actually start using AI-assisted development instead of treating it as a novelty. Rather than pushing a top-down policy, I started with three engineers who were already curious, built small internal demos that showed concrete time saved on real PRs, and ran informal lunch-and-learn sessions with no attendance requirement attached. I put together reusable prompt templates and committed them to a shared repo so people could just take what worked instead of reinventing it, and I documented specific wins, like a PR review cycle that dropped by two hours, so the value was visible rather than anecdotal. Within three months, about 70% of engineers across both teams had adopted AI-assisted review and generation into their normal workflow, and I ended up as the informal go-to person for AI tooling across the org. It was slower than a mandate would have been, but people who opted in on their own terms kept advocating for it internally in a way a decree never would have produced, which is exactly the kind of adoption a small team like Connectome's would need for something as sensitive as AI-driven health insights.

---

## Integrating into a much larger org without losing velocity

**Best for:** "Tell me about navigating change" / defining technical standards as a company scales

After Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I'd worked in before, with a different codebase, Java and microservices instead of what I'd built, and different processes end to end. The task was to fold Alaya's capabilities into Benevity's platform while still shipping new features, without losing the speed that had made Alaya worth acquiring in the first place. I spent the first month just mapping the existing architecture before proposing anything, and deliberately built relationships with the platform and infra teams before pushing my own technical opinions. That groundwork let me contribute to three major cross-team architecture decisions and become the liaison for the Europe-facing product surface. I moved too fast early on trying to "fix" things that weren't actually broken in the new org, and slowing down to listen first is what turned that around; it's the same instinct I'd bring to setting technical standards at a company that's about to grow past its first ten people.

---

## Building the first engineering team from scratch

**Best for:** "How do you recruit and mentor engineers" / early-stage hiring

Alaya's early hiring wasn't handled by a recruiting function, it was me deciding who our first three engineers would be while I was still writing most of the code myself. The task was to bring people in who could operate with almost no process and still leave the codebase better than they found it, since there was no senior engineer around to catch mistakes but me. I interviewed for judgment more than for specific stack experience, paired closely with each new hire on their first few weeks of tickets, and introduced code review and lightweight architecture docs right as the second engineer joined, before habits could calcify without them. Within a year the team was shipping independently on the multi-tenant and reporting work that mattered most to our enterprise clients, and two of those early hires stayed through the acquisition. What I'd change is documenting decisions earlier, a lot of context lived only in my head for longer than it should have, which is a mistake I wouldn't want to repeat at a company building on data as sensitive as brain scans and health records.
