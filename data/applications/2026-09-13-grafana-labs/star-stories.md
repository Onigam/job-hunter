# STAR Stories - Grafana Labs, Staff Software Engineer, Grafana Cloud k6

Tailored for: operational excellence and DevOps/SRE standard-setting, reliability frameworks (SLIs/SLOs, error budgets), large-scale distributed systems, and driving change across teams without formal authority.

---

## Story 1: Building Production Infrastructure from Zero

**Best for:** "Tell me about a time you owned a production system end to end" / "How do you approach reliability when there's no framework yet?"

In 2016 I co-founded Alaya, a purpose and engagement platform for enterprise clients. There was no codebase, no infrastructure, and no team yet, and my job was to design and build the whole thing while the business was already signing its first enterprise contracts. That meant whatever I shipped would be running under real SLAs almost immediately, with no room to treat reliability as a later concern.

I picked a stack that could reach production fast without over-engineering: Node.js, React, and PostgreSQL with a multi-tenant schema from day one. The first few months were mostly solo, so every architectural call had to hold up under scrutiny later. I set up CI/CD early and kept staging and production close to identical, because the alternative is finding out about drift during an incident. As the team grew I hired the first three engineers and put in place code review norms and architecture docs that let new hires ramp without pulling me into every decision.

By 2021 we had over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired the company. That was a real test of whether the early architecture choices held up under five years of production load, and they did.

If I'm honest, the thing I'd change is timing on observability. We didn't have proper APM until about eighteen months in, and every unexpected production behavior before that took far longer to diagnose than it should have. It's why I now push for instrumentation before it's needed rather than after, which is exactly the kind of standard k6's reliability framework work is trying to establish early.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you define reliability targets or SLOs for a system under debate?"

By 2019, Alaya's monolith was showing scaling cracks. Two modules handled most of the traffic and were making the whole system brittle whenever they degraded. Half the team wanted a full microservices rewrite, the other half wanted a modular monolith, and investors wanted new features, not months of rewrite work. There wasn't an obviously correct answer, just a lot of pressure to pick something and move.

I ran a two-week spike comparing both approaches against realistic load patterns, then brought concrete numbers to the CTO and investors instead of opinions: migration risk, time to first value, projected performance under load. I framed the debate around where the actual risk lived rather than "monolith versus microservices" as an ideology. What I proposed was a strangler fig migration, extracting the two highest-traffic modules first while leaving the rest stable, with explicit criteria for when a module earned its own extraction.

The first extracted module shipped in six weeks and gave us roughly a 40% improvement on the busiest endpoints. The rest of the monolith held through the acquisition two years later without ever needing the big rewrite everyone had been dreading.

Convincing people that not rewriting everything was the right call turned out to be harder than the technical work itself. The spike data is what actually moved the room. Next time I'd front-load even more of that benchmarking, specifically around defining the SLOs I wanted the new architecture to hit, so the debate has less room to run in circles.

---

## Story 3: Leading Technical Change Without Formal Authority

**Best for:** "How do you set standards or drive adoption across teams that don't report to you?" / "Describe your operating model as a Staff engineer"

At Benevity I was a Senior Staff IC with no direct reports, but part of my job was raising the bar on how two engineering teams worked day to day. In late 2022 I decided to push AI-assisted development practices across both teams. GitHub Copilot had gotten genuinely useful by then, but most engineers were skeptical or hadn't tried it seriously, and a top-down mandate tends to produce compliance rather than real change.

So I started small. I found three engineers who were naturally curious and worked closely with them for two weeks, building internal demos with numbers attached, a PR review cycle that normally ran two hours coming down to about forty-five minutes with AI assistance in the loop. Once I had real examples, I ran informal lunch-and-learn sessions with no attendance mandate, published a shared prompt template library so there was zero setup friction, and posted short write-ups of results in the team Slack.

Within three months roughly 70% of engineers across both teams were using AI-assisted review and generation as part of their normal workflow, and several had extended the prompt library on their own initiative. I ended up as the informal AI tooling lead for the org, which wasn't the goal going in, just what happened once the approach worked.

The lesson that stuck: adoption without a mandate is slower to start but far stickier once it takes, because people who opt in on their own terms end up defending the practice to their peers in ways you can't manufacture from the top.

---

## Story 4: Navigating a Complex Cross-Team Integration

**Best for:** "Tell me about working across organizational boundaries" / "How do you operate inside a large distributed system you didn't build?"

When Benevity acquired Alaya in 2021, I went from a team of about twelve engineers to an organization ten times that size, with a different stack (Java microservices), different incident processes, and different norms around how decisions got made. I was now embedded in a platform I hadn't designed and didn't yet understand well enough to have opinions about.

My first move was to spend a full month just mapping the existing architecture before proposing anything: reading design docs, sitting in on incident postmortems as an observer, tracing how failures actually propagated through the system rather than how the diagrams said they should. Only after that did I start building relationships with the platform and infra teams, because pushing technical opinions before people trust you tends to backfire regardless of how correct you are.

From there I acted as the architecture liaison between the Europe-facing product team and Benevity's platform engineers, migrating Alaya's core features into the larger platform in phases rather than one large cutover. I contributed to three significant cross-team architecture decisions over the following year.

I moved too fast early on, trying to fix things that weren't actually broken in the new org, just unfamiliar to me. Slowing down and mapping failure modes first, before touching anything, is the habit I'd apply immediately to a new system like k6's, especially one running at the scale and region spread this role covers.

---

_These four stories cover build-from-zero ownership, reliability trade-offs under pressure, standard-setting without authority, and operating inside someone else's distributed system. All map directly onto what the k6 role description asks for._
