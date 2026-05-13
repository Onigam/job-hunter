# STAR Stories — ClickUp Staff AI Engineer (AI Product)

Prepared for behavioral interview questions likely in a Staff AI Engineer round:
"Tell me about a time you shipped AI features in production," "How do you drive adoption without authority," "Tell me about a hard technical trade-off," "How do you mentor other engineers?"

---

## Story 1: Driving AI Tooling Adoption Across Two Teams

**Best for:** "Tell me about leading AI adoption" / "How do you influence without authority?" / "Tell me about mentoring engineers"

In 2022, I was a Senior Staff IC at Benevity, with no direct reports but a mandate to help the engineering org work smarter using AI tooling. Two teams, about 20 engineers total, most of whom were skeptical that tools like GitHub Copilot or LLM-assisted workflows would save them time rather than create more review work.

My task was to shift that behavior without being anyone's manager, which meant I couldn't mandate anything. I started by finding three engineers who were already curious and willing to experiment. Rather than running a formal training, I built small internal demos that showed concrete time savings in contexts those engineers actually cared about: one was a reduction in the time spent writing boilerplate test cases, another was using a prompt template to speed up PR descriptions. I committed those templates to a shared repo, documented a real example ("saved roughly 2 hours on a PR review cycle"), and ran a few informal lunch sessions where attendance was optional and there was no slide deck.

Within three months, roughly 70% of engineers across both teams were using some form of AI-assisted workflow. More importantly, the early adopters became internal advocates, which I couldn't have manufactured through a top-down rollout.

What I'd do differently: I spent too long building the demos before getting any external feedback. Getting one engineer to try a rough prototype earlier would have saved me two weeks of building the wrong thing.

---

## Story 2: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you shipped a product from scratch" / "How do you handle ambiguity?" / "Tell me about a founding engineer role"

In early 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no team. The business was moving fast, signing its first enterprise pilots before we had anything production-ready, which meant I was building the core architecture while the sales cycle was already running.

I chose a stack deliberately constrained to what I could move quickly with alone: Node.js, React, and PostgreSQL. The goal wasn't to pick the best theoretical architecture; it was to reach a first demo in three months. I built multi-tenant data isolation, an API layer, impact reporting, and a postal campaign module. As the first hires joined, I set up CI/CD, a code review process, and lightweight architecture documentation to make onboarding faster.

By the time of our acquisition by Benevity in 2021, the platform was running for 50+ enterprise clients across Switzerland and France. Benevity's acquisition was a direct signal that the technical decisions held up through five years of iteration.

The thing I'd go back and change is observability. We added proper APM late, which meant debugging production issues early on was slower than it needed to be. I'd also design multi-tenancy explicitly from day one rather than retrofitting it as client volumes grew.

---

## Story 3: Navigating a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you've had to make" / "How do you handle technical debt?" / "How do you communicate technical decisions to non-technical stakeholders?"

At Alaya, around 2019, we were running a monolith that was starting to show stress under growing traffic. The engineering team was split: some wanted a full microservices rewrite, others thought we should hold the line and add capacity. Meanwhile, investors were pushing for new features, not rewrites. I needed to make a call that was technically defensible and didn't put us six months behind on the roadmap.

Rather than arguing from instinct, I ran a two-week technical spike. I built small prototypes of both approaches and ran load tests that gave us real numbers to compare, not theoretical ones. I then put together a concrete trade-off summary for the CTO and two investors that showed what each path cost in time, risk, and likely maintenance burden.

The proposal I landed on was a strangler fig migration: extract the two highest-traffic modules first, leave the rest of the monolith stable, and define explicit criteria for when to extract additional pieces. The first module shipped in six weeks. Performance on those endpoints improved by roughly 40%. The monolith stayed stable all the way through the Benevity acquisition.

The hardest part wasn't the technical work; it was convincing people that "not rewriting everything now" was the right answer. Having data from actual load tests, not just opinions, made that conversation short.

---

## Story 4: Post-Acquisition Integration at Scale

**Best for:** "Tell me about navigating change" / "How do you work in a large engineering org?" / "How do you earn credibility in a new environment?"

When Benevity acquired Alaya in 2021, I moved from a team of eight to a company with hundreds of engineers. The codebase was Java-heavy and microservice-based, which was different from what I'd been building. The culture was more process-heavy and consensus-driven. I needed to integrate Alaya's capabilities into the larger platform while building enough credibility to have influence on cross-team architecture decisions.

I made a deliberate choice to spend my first month listening rather than proposing changes. I mapped the existing architecture, read the ADRs that existed, and had informal conversations with engineers on the platform and infra teams before I expressed any strong opinions publicly. That groundwork let me show up in cross-team discussions with context rather than just opinions.

Over the next year, I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two teams. The integration of Alaya's core features into Benevity's platform shipped without a major incident.

The thing I'd warn someone about: I moved too fast in the first few weeks trying to "fix" things that weren't actually broken. What looked like inefficiency from the outside often had a reason behind it. Slowing down and asking why before proposing alternatives made me significantly more effective once I started doing it consistently.

---
