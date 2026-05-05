# STAR Stories — SuperPlane Product Engineer

Tailored for a small, early-stage founding-team-style role: full-stack ownership, fast shipping, platform engineering, AI tooling.

---

## 1. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you owned a project end to end" / "Founding engineer" questions / "How do you handle ambiguity?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. The starting point was a blank Jira board, no customers, no product, and a co-founder who handled the business side while I handled everything technical. My task was to architect and build the entire platform, starting alone and eventually growing a small team, while the business was simultaneously signing its first enterprise clients and making promises I had to keep.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Nothing exotic, because exotic would have slowed me down when speed mattered most. The first working demo shipped inside three months. From there I iterated: multi-tenant architecture, API layer, impact reporting, postal campaign tooling. When the team needed to grow, I hired the first three engineers, set up CI/CD, established code review norms, and wrote architecture documentation that let them get productive quickly without me becoming a bottleneck.

We ended up with 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian company valued at over $1B, acquired us. The acquisition validated the technical decisions made from day one more concretely than any peer review could.

In retrospect, I would have added proper observability much earlier. We instrumented APM late, which made some production incidents harder to diagnose than they should have been. I'd also design multi-tenancy as a first-class constraint from the start rather than retrofitting it as the client base grew.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / Systems design discussions

At Alaya, we had a monolith that was starting to buckle under load. The engineering team was divided: some wanted a full microservices rewrite, others wanted to keep shipping features and deal with it later. Investors were watching feature velocity, not architecture debt. My job was to make a defensible technical decision that didn't blow up delivery and didn't kick the problem so far down the road that it became someone else's disaster.

I ran a two-week technical spike comparing both approaches. That meant prototype load tests, actual numbers, not architectural opinions. Then I presented the trade-offs to the CTO and to the investors with concrete metrics attached. What I proposed was a "strangler fig" approach: extract the two highest-traffic modules first, leave the rest of the monolith intact, and set explicit criteria for when additional extraction would be warranted.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the acquisition without requiring further intervention.

The hardest part wasn't the technical work. It was convincing smart people that not rewriting everything was the right call. Having data available was the difference between a weeks-long debate and a short meeting. If I did it again, I'd run the benchmarks even earlier, before the debate really started.

---

## 3. Driving AI Tooling Adoption Without a Mandate

**Best for:** "Tell me about leading without authority" / "How do you influence a team?" / Staff+ questions, cross-functional work

After the Benevity acquisition, I was a Senior Staff Engineer with no direct reports. I could see that AI-assisted development tools would meaningfully compress cycle times, but the teams didn't report to me and I had no formal authority to require anything. My task was to change how engineers worked across two teams, without a mandate and without burning trust by pushing too hard.

I started with three engineers who were already curious about AI tooling. We ran small experiments together: AI-assisted code review, prompt templates for common tasks, automated PR summaries. I documented what we observed, including time savings in concrete terms, one story I wrote up was a cycle where we cut a PR review loop from a half-day to under an hour. I shared those results in informal sessions, no mandates, no all-hands theater, just demos with real outcomes people could see.

I also committed reusable prompt templates to a shared repo so the work was accessible and reproducible rather than living in anyone's head.

Within three months, around 70% of engineers on both teams were using AI-assisted tooling as a regular part of their workflow. I became the informal AI tooling lead across the org, which I hadn't set out to be, but it followed from the work being visibly useful.

What I learned is that mandates produce compliance, not adoption. Engineers who picked up the tools on their own terms became internal advocates, which is something I couldn't have manufactured top-down.

---

## 4. Navigating a New Engineering Org After Acquisition

**Best for:** "Tell me about adapting to a new environment" / "How do you work in a large team?" / Cultural fit questions

When Benevity acquired Alaya in 2021, I went from being co-founder of a fifteen-person company to Senior Staff Engineer in an organization ten times that size. Different culture, different codebase (Java microservices instead of Node.js), different processes, different expectations around how decisions got made. My task was to integrate Alaya's capabilities into Benevity's platform while continuing to build new features, without either burning myself out trying to "fix" the new environment or losing the product velocity we'd built.

I spent the first month doing almost no coding. Instead, I mapped the existing architecture, learned who owned what, and built relationships with the platform and infrastructure teams before I proposed a single change. When I did start pushing technical opinions, I'd already established credibility as someone who understood the context rather than just parachuting in with opinions.

Over the following year I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling adoption across two teams. The core Alaya features were successfully migrated into Benevity's platform.

What I got wrong initially was moving too fast. I saw things I thought could be better and moved to change them before I'd fully understood why they were the way they were. Some of those things had good reasons behind them. Slowing down in month one made me considerably more effective in months two through twelve.

---

## 5. Scaling a Platform Through Hypergrowth

**Best for:** "Tell me about a time you had to scale quickly" / "How do you balance speed and quality?" / Platform/infrastructure discussions

Midway through Alaya's growth, we hit a point where the platform was signing new enterprise clients faster than our infrastructure could comfortably handle. The database was showing contention, certain API endpoints were timing out under concurrent load, and the team was simultaneously being asked to ship new product features. I had to stabilize production without stopping delivery.

I triaged the symptoms to find the actual bottlenecks: two or three queries responsible for most of the load, a caching layer that hadn't kept up with usage patterns, and one endpoint that was doing serial work it should have been parallelizing. Rather than proposing a broad infrastructure overhaul, I tackled each of those in order, which meant we could ship fixes incrementally without a maintenance window.

After addressing the top three bottlenecks, p95 latency on the affected endpoints dropped by around 60%. We kept shipping features throughout, with no missed client commitments.

The lesson was that "scaling issues" almost always have a handful of specific causes responsible for most of the pain, and the right move is to find those specific causes rather than reach for an architectural refactor. An overhaul might have been more satisfying to propose, but it would have taken three months and left the problem live in production the whole time.
