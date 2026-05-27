# STAR Stories — Lakera, Senior Product Engineer

---

## Story 1: Building Alaya from Zero to Acquisition

*Best for: "Tell me about a time you built something from scratch" / founding engineer questions / handling ambiguity*

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had a blank page, no customers, no product, and the clock was already ticking because the first sales conversations had started before the first line of code was written.

My job was to architect and build the entire platform, alone at first, while the business was signing its first enterprise clients. There was no time to overthink the stack; I needed something I could ship fast that could also scale without falling apart. I went with Node.js, React, and PostgreSQL, a pragmatic choice that let me move quickly without over-engineering for problems we didn't have yet. Within three months I had a working demo. From there I built out the core features iteratively: multi-tenant architecture so we could serve multiple companies from a single codebase, an API layer for third-party integrations, impact reporting, postal campaigns. Once we hit product-market fit, I hired and onboarded the first three engineers, set up CI/CD, established code review culture, and started writing architecture docs so the team could make decisions without me being in every room.

Five years later, Alaya had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued at over $1B, acquired us in 2021. That acquisition was the most concrete validation of the technical decisions made in those first chaotic months.

Looking back, I'd have added proper observability earlier. We added APM late and paid for it with some painful production debugging sessions. And I'd design for multi-tenancy from day zero rather than retrofitting it; the refactor cost us several weeks at a critical growth period.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"*

At Alaya around year three, the monolith was starting to show stress. The team was split: full microservices rewrite versus a modular monolith approach. Investors were pushing for new features, not internal rewrites. The pressure to not touch the architecture while obviously needing to was real.

I was the one who had to make the call. I ran a two-week technical spike comparing both approaches with prototype load tests to get real numbers rather than opinions. Then I presented the trade-offs to the CTO and investors with those concrete metrics, not gut feeling. The result was a middle path: a strangler fig migration, extracting the two highest-traffic modules first while keeping the rest of the monolith stable. I defined clear criteria for when we'd extract additional modules so the decision wouldn't be re-litigated every sprint.

The first extracted module shipped in about six weeks. Performance improved by roughly 40% on the busiest endpoints, which gave everyone confidence in the approach. The remaining monolith stayed stable all the way through the acquisition in 2021. We never needed the big-bang rewrite that half the team had been lobbying for.

The hardest part was convincing people that "not rewriting everything" was the right answer. Data made that conversation much shorter than it would have been otherwise. Next time I'd run the benchmarks even earlier to cut the debate off before it became political.

---

## Story 3: Driving AI Adoption Without Formal Authority

*Best for: "How do you influence without authority?" / AI-adjacent roles / Staff+ IC questions*

At Benevity I was a Senior Staff IC with no direct reports. I wanted to change how engineers worked across two teams by getting them to adopt AI-assisted development practices, specifically GitHub Copilot and structured prompt engineering for code review and generation. The challenge was that I had no mandate; I couldn't just tell people to do it.

So I didn't try. I started by finding three engineers who were already curious about AI tools and worked with them closely. I built internal demos showing concrete time savings, not theoretical ones: a side-by-side of a PR review done manually versus with AI assistance, showing where the tool caught things and where it didn't. I ran informal lunch-and-learn sessions where attendance was optional and the format was demos, not slides. I created a shared repo of reusable prompt templates with real examples from our own codebase and wrote up one case study of a time the tooling saved about two hours on a PR review cycle.

Within three months, roughly 70% of engineers on both teams were using AI-assisted workflows regularly. I became the informal AI tooling lead across the org, and some of the early skeptics became the loudest internal advocates.

The mandate-free approach was slower at the start but it stuck. Engineers who adopted it on their own terms defended it when others pushed back. I couldn't have manufactured that with a top-down decree.

---

## Story 4: Navigating Post-Acquisition Integration

*Best for: "Tell me about navigating change" / cross-functional collaboration / working in a larger org than you're used to*

When Benevity acquired Alaya in 2021, I went from a team of eight to an org of eighty. Different culture, different codebase in Java and microservices, different processes, different timezones.

My task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd built. The instinct was to move fast and start proposing architecture changes right away; I had five years of opinions about the system we were integrating.

I made myself slow down instead. I spent the first month mapping the existing architecture before suggesting anything. I focused on building relationships with the platform and infra teams before pushing technical opinions, which meant a lot of conversations where I was mostly listening. When I did start proposing changes, I had enough context to frame them in terms that made sense to the people who owned those systems.

The integration worked. Core Alaya features migrated into Benevity's platform without major incidents. I contributed to three major cross-team architecture decisions and became the liaison for the European-facing product surface.

What I learned: in a new org, listening first isn't just politically smart; it actually produces better technical decisions. The first month of apparent slowness paid dividends for two years.
