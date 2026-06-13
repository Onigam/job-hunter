# STAR Stories — Nexthink Staff Software Engineer (AI-Native Automation)

---

## 1. Building under ambiguity: Alaya from zero to acquisition
*Best for: "Tell me about a time you built something from scratch" / "How do you handle ambiguity?"*

In 2016, I co-founded Alaya, an employee purpose platform, with a blank page and no customers. The task was to architect and build the entire product alone at first, then scale the team, all while the business was closing its first enterprise contracts. I chose a stack that could grow without over-engineering, got the core product to a first demo in three months, and then iterated: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling. By the time I'd hired and onboarded the first three engineers, we had a CI/CD culture and architecture documentation in place.

The result was a platform running in production with 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at $1B+ valuation, acquired us in 2021. In retrospect, I'd have invested in observability much earlier; we added proper APM late and it cost us debugging time we didn't have. I also underestimated how expensive retrofitting multi-tenancy would be once the schema had hardened. Next time, I'd design for it from day zero.

---

## 2. Hard architecture decision under pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"*

At Alaya, around 2019, we had a monolith that was starting to show scaling cracks under load. The team was split between a full microservices rewrite and keeping a modular monolith. Investors were pushing for new features, not rewrite cycles. My job was to make a defensible call that balanced long-term scalability with the reality of a startup runway.

I ran a two-week spike comparing both approaches with prototype load tests on realistic data volumes, then presented the trade-offs to the CTO and investors with concrete metrics rather than opinions. The proposal I landed on was a strangler-fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and define clear criteria for when further extraction would be warranted. We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition with no big-bang rewrite ever needed.

The hardest part wasn't the technical decision; it was convincing people that "not rewriting everything" was the right call. Data made that argument better than persuasion ever would have. If I ran that process again, I'd do the benchmarking in week one and cut the debate shorter.

---

## 3. Driving AI adoption across teams without formal authority
*Best for: "How do you influence without a reporting line?" / Staff+ / principal engineer roles*

At Benevity, I was a Senior Staff IC with no direct reports but a clear need to move two engineering teams toward AI-assisted development workflows. No one had asked me to do this; I just saw the gap and decided to fill it.

Rather than pushing a mandate from above, I started with three engineers who were already curious. I built internal demos showing concrete time savings on real tasks: a PR review cycle that went from two hours to under thirty minutes with the right prompts. I ran informal lunch-and-learn sessions, nothing mandatory, and committed reusable prompt templates to a shared repo so the friction of adoption was as low as possible. I documented outcomes in a shared channel so skeptics could see real data from people they worked with.

Within three months, roughly 70% of engineers across both teams were using AI-assisted code review and generation in their daily workflow. I became the informal AI tooling lead for the org. The lesson I took from it was that adoption earned through results is stickier than adoption enforced through policy; engineers who chose it on their own terms became the best advocates internally.

---

## 4. Navigating enterprise culture after an acquisition
*Best for: "Tell me about working with large cross-functional teams" / "Navigating organizational change"*

When Benevity acquired Alaya in 2021, I moved from a ten-person team to an organization ten times larger, with a different codebase (Java microservices), different processes, and a different culture. The task, on paper, was to integrate Alaya's features into Benevity's platform while keeping delivery moving. In practice it was as much about organizational navigation as engineering.

My first month was deliberately quiet. I mapped the existing architecture before proposing anything, and I spent time building relationships with platform and infra teams before pushing technical opinions. That patience paid off when I eventually needed to drive three cross-team architecture decisions; I'd already built the trust that made those conversations productive rather than territorial. One of those decisions set the pattern for how Europe-facing product surfaces integrated with Benevity's global platform.

What I'd do differently: I moved too fast in the first few weeks trying to "improve" things that weren't actually broken. The instinct to fix things you know how to fix is strong coming from a founding role, and it can look like arrogance to a team that built what you're critiquing. Slowing down and listening first made me meaningfully more effective for the two years after.

---

## 5. Integrating generative AI as a measurable product capability
*Best for: "Tell me about shipping AI in a real product" / "How do you evaluate AI effectiveness?"*

At Benevity, I led the effort to embed AI-assisted workflows into the engineering practice itself, treating the AI tooling as a product capability that needed measurable effectiveness criteria, not just a novelty. The question I kept coming back to was: how do you know if the AI is actually helping, and how do you make that legible to engineering leadership?

I built a lightweight framework: define the before state (time on a task, error rate, rework cycles), instrument the after state with the same metrics, and document individual stories from engineers in their own words rather than aggregating everything into a single number that could be gamed. This let me show nuanced results: AI review caught a specific class of bugs consistently, but hallucinated on domain-specific API patterns, so we built prompt templates that grounded it in our internal docs.

The result was a measurable reduction in PR review cycle time and a set of reusable tooling patterns that became part of our engineering onboarding. The reflection: I'd involve skeptics earlier in defining the success criteria. The engineers who were initially resistant became much more engaged once they had a hand in deciding what "working" meant.
