# STAR Stories — Lead Fullstack Engineer (Pragmatike)

---

## Story 1: Building Alaya from Zero to Acquisition

*Best for: "Tell me about a time you built something from scratch" / "How do you approach greenfield projects?" / "Founding engineer" roles*

In 2016, I co-founded Alaya, an employee engagement and impact platform. My co-founder handled the business side; I was the sole engineer from day one. We had no clients, no infrastructure budget for mistakes, and a hard deadline: something demoable before our first enterprise client signed a contract.

The task was to design and build the entire product while the business was still finding its shape. Every architectural decision would either hold for years or come back expensive.

I chose Node.js, React, and PostgreSQL, not because they were trendy but because I knew them deeply and they'd be easy to hire for later. In the first three months I built the core: multi-tenant data model, authentication, the first domain features (volunteering campaigns, impact reporting), and a basic CI/CD pipeline. Once clients started signing, I hired the first three engineers, wrote the architecture documentation, and set the code review culture that the team would follow for years.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn at over $1B valuation, acquired us. In due diligence, the architecture held. None of the big early calls needed unwinding.

Looking back, I'd design multi-tenancy even more rigidly from day one. I added it early, but retrofitting it for a 15th client on a shared database still cost us two sprints. That's the expensive lesson I carry into every new system.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

*Best for: "Describe a technical tradeoff you navigated" / "How do you handle disagreement on architecture?" / "What's a technical decision you're proud of?"*

By 2019, Alaya's monolith was showing cracks. We had five engineers, 30+ clients, and the highest-traffic features were starting to affect each other's latency. Two camps formed inside the team: a full microservices rewrite (ambitious, risky, expensive in time) or doing nothing meaningful (safe, unsustainable). Investors wanted new features, not a six-month engineering freeze.

My task was to make a defensible call and get everyone aligned, including non-technical co-founders who were nervous about schedule impact.

I ran a two-week technical spike. I extracted the two highest-traffic modules into prototypes and ran load tests against both the prototype and the monolith under realistic conditions. Then I presented the results to the team and the investors: not opinions, metrics. I proposed a strangler fig migration: extract the two most stressed modules first, define clear criteria for when to extract others, and keep the rest of the monolith stable. No big bang.

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable through the Benevity acquisition in 2021, two years later, without ever needing the full rewrite.

The hardest part wasn't the engineering decision; it was convincing people that restraint was the right call. Having data cut the debate in half. Next time I'd run the benchmarks even earlier, before opinions calcify.

---

## Story 3: Post-Acquisition Integration at Scale

*Best for: "Tell me about navigating a major change" / "How do you work in a larger organization?" / "How do you influence without authority?"*

When Benevity acquired Alaya in 2021, I went from being the main technical decision-maker at a 10-person startup to a Senior Staff IC inside a team roughly ten times larger. Different stack (Java plus microservices), different release cadence, different culture. My instinct was to come in with strong opinions, because I'd spent five years knowing exactly how the system worked.

My task was to integrate Alaya's capabilities into Benevity's platform and contribute to cross-team architecture decisions, without burning credibility by moving too fast.

I spent the first month listening. I mapped the architecture before touching anything, built relationships with platform and infrastructure teams before proposing changes, and found the places where my experience was genuinely useful versus where I needed to defer. When I started advocating for changes, the groundwork made the conversations easier. Separately, I drove AI tooling adoption across two teams: GitHub Copilot, prompt engineering templates in a shared repo, informal demo sessions. No mandate, just showing real time savings on real work.

Within three months, around 70% of engineers on both teams had adopted at least one AI-assisted workflow. I contributed to three major cross-team architecture decisions and became the informal go-to for AI tooling across the org.

The main lesson: in a new organization, moving fast starts with slowing down to understand the system. The month I spent listening compounded into much faster progress six months in.

---

## Story 4: Leading Without Formal Authority

*Best for: "How do you lead without a reporting line?" / "Tell me about driving adoption of something new" / "How do you influence engineers?"*

At Benevity, I was a Staff IC with no direct reports. In late 2022 I wanted to change how the engineering teams wrote code, specifically by introducing AI-assisted workflows and prompt engineering practices. Nobody asked me to do this. I saw the productivity opportunity and decided to try.

The risk was that top-down mandates don't stick, especially for tools that require real behavioral change. If I pushed too hard, engineers would comply during a demo and then revert.

I started with three engineers who were already curious. I built a concrete demo showing a PR review cycle cut from roughly two hours to under forty minutes. I ran informal open sessions, no mandatory attendance, with a real example rather than a pitch deck. I committed reusable prompt templates to a shared repo so anyone could try them without needing to figure out the basics first. I documented actual time savings from real work, not vague productivity claims.

After three months, about 70% of engineers on both teams were using at least one AI-assisted workflow regularly. Several of them became internal advocates, which spread it further and faster than I could have managed alone.

The key insight was that the goal wasn't adoption metrics; it was changing how engineers felt about the tools. Voluntary, interest-driven adoption produced engineers who actually used and improved the workflows, not just engineers who could say they'd been trained.

---

## Story 5: Scaling a Team During Product Hypergrowth

*Best for: "Tell me about hiring and growing a team" / "How do you set up engineering culture?" / Lead/Head of Engineering roles*

At Alaya between 2018 and 2020, the product was growing faster than the team. We'd gone from one engineer (me) to a point where I needed to hire quickly without sacrificing the code quality and architecture discipline that had kept us stable.

The task was to grow the engineering team from two to five people while maintaining velocity and not introducing regressions into a platform with paying enterprise clients.

I wrote down the engineering practices we'd been following informally: PR review expectations, architecture decision records, deployment checklists, on-call rotation. Getting them out of my head and into a shared doc was step one. For hiring, I focused on engineers who asked good questions about tradeoffs rather than engineers who had used the exact same stack. I structured the onboarding around pairing on real tickets within the first week, not a series of internal documentation sessions.

The team scaled to five engineers without a major production incident during the transition period. The architecture documentation I wrote became the reference point for decisions for the next two years, including post-acquisition when Benevity engineers needed to understand the Alaya codebase during integration.

The thing I'd do differently is start writing those informal practices down earlier. By the time I wrote the documentation, I'd already made a few decisions that were hard to explain in writing because I'd forgotten the original reasoning.
