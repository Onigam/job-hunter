# STAR Stories — SonarSource CodeNext, Staff Software Engineer

_Prepared for behavioral interviews. Stories selected for relevance: AI infrastructure, technical architecture decisions, building systems from scratch, leading without formal authority._

---

## Story 1: Building the AI Tooling Infrastructure at Benevity (Leading Without Authority)

**Best for:** "Tell me about a time you drove adoption of new technology" / "How do you influence without a mandate?"

When I joined Benevity as a Senior Staff IC in 2021, AI-assisted development was a concept people nodded at in conference talks but nobody had actually wired into a real engineering workflow. I had no direct reports, no budget line, and no mandate from above. I just thought it was the right problem to work on.

I started small: identified three engineers who were already curious, ran a working session with them, and built a concrete internal demo showing time saved on a PR review cycle. Not a slide deck, an actual before-and-after with real commits. From there I created a shared library of reusable prompt templates, committed it to a team repo, and ran informal lunch sessions where engineers could see it working without any obligation to adopt it. I also built lightweight benchmarking tooling to evaluate LLM output quality so we had something more defensible than vibes when people asked whether it was actually better.

Within three months, roughly 70% of engineers on both teams had integrated AI tooling into their review and generation workflows. More importantly, they'd adopted it on their own terms, which meant they advocated for it internally. I couldn't have created that with a top-down directive.

What I'd do differently: I'd instrument the adoption metrics from day one instead of reconstructing them retrospectively. It made the business case harder to tell than it needed to be.

---

## Story 2: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / "How do you make technical decisions under uncertainty?"

In 2016, I co-founded Alaya with a blank page, no customers, and no product. My co-founder handled the business side; I was the only engineer for the first year. The pressure was real: we were signing enterprise clients while I was still writing the data model.

I chose a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering and where I could move fast alone. I built the core features in the first three months to get to a first demo, then iterated: multi-tenant architecture, API layer, impact reporting, postal campaign tooling. When I started hiring, I set up CI/CD and code review culture from the beginning rather than treating it as something to retrofit later.

By 2021, the platform was serving 50+ enterprise clients across Switzerland and France. Benevity, a $1B+ Canadian unicorn, acquired us. The technical choices held up through due diligence, which is the real validation test.

The thing I'd change: I added observability too late. We were flying blind on performance issues for longer than we should have been. The second time I'm doing this, APM goes in at week two.

---

## Story 3: A Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Tell me about a time you had to convince stakeholders of a technical direction"

At Alaya, our monolith was starting to show scaling cracks around the highest-traffic features. The engineering team was divided: full microservices rewrite versus modular monolith. Investors wanted new features, not a rewrite. I needed to make a defensible call.

I ran a two-week technical spike comparing both approaches with prototype load tests on the actual production bottlenecks. Then I presented the trade-offs to the CTO and our investors with concrete numbers, not opinions. The proposal I landed on was a strangler fig migration: extract the two highest-traffic modules first, keep the monolith stable for everything else, and define explicit criteria for when to extract additional services.

The first extracted module shipped in six weeks. Performance improved roughly 40% on the busiest endpoints. The remaining monolith stayed stable all the way through the Benevity acquisition. We never had to do the big-bang rewrite everyone was afraid of.

The hardest part wasn't the architecture, it was convincing people that "not rewriting everything" was the right answer. Data helped a lot. I'd invest in the benchmarking earlier next time to cut the debate shorter.

---

## Story 4: Post-Acquisition Technical Integration at Benevity

**Best for:** "Tell me about navigating organizational change" / "How do you work in a large engineering org?" / "Tell me about cross-functional collaboration"

After the Benevity acquisition in 2021, I went from a 15-person startup to an engineering org roughly ten times larger. Different culture, different codebase (Java microservices), different deployment practices, different everything. I had opinions about things, but I'd learned enough in my career to know that showing up with a list of improvements in week one is a good way to become the person nobody wants to work with.

I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infra teams before I pushed any technical opinions into cross-team discussions. When I did start contributing to architecture decisions, I had enough context to be useful instead of just being loud. Over the following year I became the cross-team architecture liaison for the Europe-facing product surface and drove three major cross-team decisions.

The lesson from that experience: the quality of your technical judgment is only as useful as the trust you've built with the people who have to act on it. Moving slower at the start made me significantly more effective at the six-month mark than if I'd pushed hard from day one.

---

## Story 5: Defining What "Good" Looks Like for LLM Output

**Best for:** "Tell me about building evaluation systems" / "How do you approach quality for AI systems?"

_Derived from experience at Benevity, 2023-2024_

When we started integrating LLM-based tools into our engineering workflows at Benevity, we ran into a problem that I suspect CodeNext knows well: "does this output quality?" is not a question a general benchmark answers in a way engineers actually trust. Pass@k scores don't tell you whether the suggested change is safe to apply in your codebase.

I built internal evaluation pipelines specifically designed around our actual use cases: code review suggestions, PR description generation, and test scaffolding. For each, I defined a small set of quality criteria that senior engineers agreed on, then built automated checks for the objective ones (does it compile, does it pass existing tests, does it introduce a known bad pattern) and a sampling process for the subjective ones. We ran every new model version through the pipeline before rolling it out.

It wasn't sophisticated by ML research standards. But it gave engineers a reason to trust the tooling, which turned out to be the harder problem. The technical bar for "good enough to ship" is lower than most teams assume; the bar for "good enough that engineers stop second-guessing it" is much higher.

What I'd build differently now: I'd instrument the feedback loop from the beginning so that engineer rejections of suggestions could flow back into the evaluation criteria automatically, rather than relying on manual retrospectives.
