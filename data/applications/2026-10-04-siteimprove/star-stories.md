# STAR+R Stories: Siteimprove, Principal Software Engineer (Search Insights)

The posting puts weight on four things: cross-team architecture decisions, end-to-end ownership after release, hands-on use of coding agents in production, and mentoring without formal authority. These stories map to those.

---

## 1. Rolling out AI-assisted engineering without a mandate

**Likely questions:** "How have you used coding agents in a real team?" / "How do you influence engineers who don't report to you?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted review and generation could save the teams real time, but the two teams I wanted to reach didn't report to me, and plenty of people were skeptical for good reasons.

**Task.** My job was to change how engineers actually worked day to day, without being anyone's manager and without turning it into a top-down rollout that people would quietly ignore.

**Action.** I started small, with three engineers who were already curious. We used the tools on real pull requests, and I built short internal demos that showed concrete time saved instead of a slide about productivity. From there I ran informal lunch-and-learn sessions with no attendance pressure. The piece that made it stick was committing reusable prompt templates to a shared repo, so nobody had to start from a blank prompt and the good patterns spread on their own. I also wrote down specific wins as they happened, like a PR review cycle that went about two hours faster, because anecdotes from peers persuade better than anything I could say.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation. I became the informal AI tooling lead across the org, and the shared templates became the starting point for new joiners.

**Reflection.** Going mandate-free was slower, but it was much stickier, because the people who adopted it chose to and then advocated for it themselves. If I did it again I'd put more structure around testing and context files earlier. That's exactly the scaffolding your posting talks about, and it's where agent output either becomes trustworthy or doesn't.

---

## 2. Choosing a strangler fig over a rewrite

**Likely questions:** "Tell me about an architecture decision you drove." / "How do you balance tech debt against delivery pressure?"

**Situation.** At Alaya our monolith was starting to crack under load on a few busy paths. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted features, not a rewrite.

**Task.** I had to land a decision we could defend, one that fixed the scaling problem without stalling delivery for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike that prototyped both approaches and load-tested them. I brought the results to the CTO and investors as metrics, which changed the tone of the conversation quickly. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down explicit criteria for when any further module would earn its own service. That last part mattered, because it stopped the debate from restarting every quarter.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got around 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting everything was the right call. Data won that argument, and next time I'd benchmark even earlier to shorten the debate.

---

## 3. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you owned end to end." / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no code.

**Task.** I was responsible for the whole technical side: architecture, building it, running it in production, and later hiring the people who'd help me do that, all while the business was signing its first enterprise clients.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed something that would scale without me over-engineering it on day one. The core features were ready for a first demo in about three months. After that it was steady iteration driven by what customers actually used: multi-tenancy, an API layer, impact reporting. As the team grew I hired and onboarded the first three engineers and put in place the basics that let other people own things too, CI/CD, code review habits and architecture docs.

**Result.** The platform went into production with 50+ enterprise clients across Switzerland and France, and in 2021 Alaya was acquired by Benevity, a company valued above $1B. The acquisition process put our technical choices under real scrutiny, and they held up.

**Reflection.** I'd invest in observability much earlier; we added proper APM late, and it's the first thing I'd build now. I also underestimated how expensive it is to retrofit multi-tenancy. For a product like Search Insights, where customers trust the numbers, I'd treat monitoring and data quality checks as part of the first version, not a later hardening phase.

---

## 4. Joining a much larger organization after the acquisition

**Likely questions:** "Tell me about working across distributed teams." / "Tell me about a time you had to adapt."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, with a different stack built on Java and microservices, different processes and teams spread across Europe and North America.

**Task.** We needed to bring Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the speed we'd had as a startup.

**Action.** My first instinct was to start fixing things, and that was a mistake I caught fairly quickly. So I spent the first month mapping the existing architecture and building relationships with the platform and infrastructure teams before I pushed any technical opinions. Once people knew me, I took on the role of cross-team architecture liaison for the Europe-facing product surface, which mostly meant translating constraints between teams in different time zones and writing proposals people could review asynchronously.

**Result.** We migrated Alaya's core features into Benevity's platform, and I contributed to three major cross-team architecture decisions. That work also built the trust that later made the AI tooling rollout possible.

**Reflection.** Listening first made me far more effective than arriving with answers. In a new principal role I'd do the same thing on purpose: spend the first weeks reading code, design docs and incident history before proposing anything big.

---

## Gaps to prepare for

**C# and .NET.** Be direct. My production work has been TypeScript, Node.js and Java-adjacent services at Benevity. The honest pitch is that the design principles carry over, and coding agents make picking up a new language's idioms faster, but I shouldn't claim depth I don't have.

**Search, SEO and crawling.** This is a preferred qualification, not a requirement. The relevant angle is data trustworthiness: Alaya's impact reporting meant customers made decisions from our numbers, which is the same problem shape as Search Insights.

**Terraform.** Comfortable with AWS, Docker, Kubernetes and CI/CD; I haven't been the Terraform owner. Say so plainly.
