# STAR Stories — Purpose:Labs Co-Founder / CTO

---

## 1. Building Alaya from Zero to Acquisition
*Best for: "Tell me about building something from scratch" / "What does your founding experience look like?"*

In 2016, I co-founded Alaya, an employee purpose and engagement platform. We had a blank page, no customers, no product, and I was the only engineer. The task was to architect and build the entire platform while the business was signing its first enterprise clients, which meant making foundational technical decisions before we had any signal on what would actually matter at scale.

I chose a pragmatic stack: Node.js, React, PostgreSQL. Nothing exotic, nothing that would make future hires struggle. I shipped the core features in the first three months to get to a first demo, then expanded iteratively from there, multi-tenant architecture, an API layer, impact reporting, postal campaigns. Around the one-year mark I hired the first three engineers and spent real time on the things that often get skipped: CI/CD, code review culture, architecture documentation. The platform reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity acquired Alaya. Benevity is a Canadian unicorn with $1B+ valuation, and the acquisition was a direct validation of the technical and product decisions made from day one.

Looking back, I would have invested in observability much earlier. We added proper APM late and paid for it. I also underestimated the cost of retrofitting multi-tenancy; that's one I'd design for from day zero next time.

---

## 2. Making a Hard Architecture Decision Under Pressure
*Best for: "Tell me about a technical trade-off" / "How do you handle technical debt?" / "How do you communicate technical decisions to non-engineers?"*

At Alaya, the monolith was starting to show cracks. The team was split: full microservices rewrite versus a modular monolith approach. Investors were pushing for new features, not rewrites, and there was real pressure to just pick something and move.

My job was to make a defensible decision that balanced long-term scalability with short-term delivery. I ran a two-week technical spike comparing both approaches with prototype load tests, then presented the trade-offs to the team and investors with concrete metrics rather than opinions. What I proposed was a strangler fig migration: extract the two highest-traffic modules first and keep the rest monolithic, with clear criteria for when to extract more. No big-bang rewrite.

We shipped the first extracted module in six weeks. Performance improved ~40% on the busiest endpoints. The remaining monolith stayed stable all the way through the acquisition, and no rewrite was ever needed.

The hardest part wasn't the technical decision itself; it was convincing people that choosing not to rewrite everything was the right call. Data helped. I'd front-load the benchmarking even more next time to cut the debate period shorter.

---

## 3. Leading Without Formal Authority
*Best for: "How do you build team culture?" / "How do you drive adoption of new practices?" / "What does technical leadership look like for you?"*

At Benevity, after the acquisition, I was a Senior Staff IC with no direct reports but a mandate to drive adoption of AI-assisted development practices across two engineering teams. Neither team reported to me, and imposing a top-down mandate for something as personal as how people write code rarely works.

I started with three engineers who were already curious about it. We ran informal experiments together, built internal demos that showed concrete time savings, and committed reusable prompt templates to a shared repo. I ran lunch-and-learn sessions with no obligation to attend and no metrics attached. I also documented results in a way engineers could point to: "saved two hours on a PR review cycle" is something you can share in a Slack message.

Within three months, around 70% of engineers on both teams had adopted AI-assisted code review and generation into their regular workflow. More importantly, they were advocating for it internally. I couldn't have manufactured that outcome with a mandate. Engineers who adopted it on their own terms became the actual change agents.

What I'd do differently: start with the second-most-senior people, not the most junior. Senior engineers who convert become much more influential advocates in a team dynamic like that.

---

## 4. Navigating a Post-Acquisition Integration
*Best for: "Tell me about navigating ambiguity" / "How do you work within a larger organization?" / "Tell me about a time you had to adapt quickly"*

After the Benevity acquisition in 2021, I joined as Senior Staff Engineer on a team roughly ten times the size of Alaya. Different culture, a different codebase (Java and microservices where we'd been Node.js), different processes, different timelines. The task was to integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd spent five years building.

My instinct, coming from a startup, was to move fast and start proposing changes. I had to actively suppress that. I spent the first month mapping the existing architecture before proposing anything, and building relationships with the platform and infrastructure teams before sharing opinions. That groundwork was slower but it made everything that came after much easier.

I drove adoption of AI-augmented workflows across the engineering org, became the cross-team architecture liaison for the Europe-facing product surface, and contributed to three major cross-team architecture decisions. The core Alaya features were successfully migrated into Benevity's platform.

The lesson I took from it: in a new organization, listening first is not passivity. It's how you earn the standing to actually change things. I moved too fast initially and hit unnecessary friction. Slowing down made me more effective, not less.

---
