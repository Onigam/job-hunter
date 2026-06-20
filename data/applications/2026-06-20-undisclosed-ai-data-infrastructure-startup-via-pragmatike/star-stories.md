# STAR Stories — Founding Full Stack AI Engineer (Undisclosed AI Data Infrastructure Startup)

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch" / founding engineer roles / "How do you handle ambiguity?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had a blank page, no customers, no product, and no certainty we'd find a market. My job was to architect and build the entire platform from zero, first alone and then growing a team, while the business was actively signing its first enterprise clients.

I chose a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering anything prematurely. Core features were ready in three months for the first client demo. From there I built iteratively: multi-tenant architecture, an API layer, impact reporting pipelines, postal campaigns. I hired and onboarded the first three engineers, set up CI/CD, code review culture, and architecture documentation. Every decision was made with the knowledge that there'd be no easy way to undo a bad architectural call once clients were depending on it.

The platform reached production with 50+ enterprise clients across Switzerland and France. In 2021, Benevity, a Canadian unicorn valued at over $1B, acquired the company. That acquisition was a direct validation of the technical decisions made from day one.

Looking back, I'd have invested in observability earlier. We added proper APM late and it cost us debugging time during the final growth phase. I'd also design for multi-tenancy from day zero; retrofitting it as the client base scaled was painful and avoidable.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle scaling pressure?" / async pipeline design

At Alaya, we hit a point where the monolith was showing cracks, particularly on the async side: notification pipelines, bulk CSV exports, impact data aggregations queuing up. The team was split between a full microservices rewrite and staying with a modular monolith. Investors were pushing for new features, not rewrites. My job was to make a defensible call that balanced long-term scalability with real delivery pressure.

I ran a two-week technical spike comparing both approaches, including prototype load tests and honest engineering cost estimates. I presented the trade-offs to the CTO and investors with concrete metrics, not opinions. The proposal I landed on was a strangler fig migration: extract the two highest-traffic modules first, keep the rest stable as a monolith, and define clear criteria for when to extract more.

We shipped the first extracted module in six weeks. Performance on those endpoints improved by ~40%, and the rest of the monolith stayed stable all the way through the acquisition. No big-bang rewrite required, and the team's velocity never dipped.

The hardest part was convincing people that not rewriting everything was the right call. People tend to equate "doing something big" with "solving the problem." The data carried the argument. I'd run the benchmarks earlier next time, before the debate gets entrenched.

---

## Story 3: Driving AI Adoption Across Teams Without a Mandate

**Best for:** "How do you influence without authority?" / AI-native team fit / Staff+ roles

At Benevity I was a Senior Staff IC with no direct reports. I could see that AI-assisted development tools, GitHub Copilot, Claude-based review pipelines, custom prompt libraries, were materially changing the quality and speed of my own work. The challenge was getting two other engineering teams to adopt them without triggering the usual resistance that comes with top-down tooling mandates.

I started with three engineers who were already curious. Instead of a presentation, I built working demos showing real time savings: a PR review cycle that used to take two hours, now done in 45 minutes with an LLM-assisted workflow. I ran optional lunch-and-learn sessions, no slides, just live demonstrations with honest caveats about where the tools fell short. I committed reusable prompt templates to a shared repo with before-and-after documentation so anyone could pick them up independently.

Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation regularly. Several of them became internal advocates, explaining the tooling to newer teammates in ways I couldn't from the outside. I ended up as the informal AI tooling lead for the broader engineering org.

The mandate-free approach is slower, but it's stickier. Engineers who adopt something voluntarily will sell it internally. A top-down decree gets compliance, not advocacy. That's a distinction I'd apply again anywhere I land.

---

## Story 4: Integrating Into a 10x Larger Organization Post-Acquisition

**Best for:** "Tell me about navigating a big change" / cross-functional collaboration / culture fit in fast-scaling environments

When Benevity acquired Alaya in 2021, I went from a team of ten to an organization of 100+. Different codebase (Java, microservices), different culture, different decision rhythm. My task was to integrate Alaya's product capabilities into Benevity's platform while continuing to ship, without losing the velocity we'd built.

My first month I deliberately proposed nothing. I spent it mapping the existing architecture, understanding who owned what, and building relationships with platform and infrastructure teams before I had any opinions worth sharing. It felt slow at the time. It paid off: when I eventually brought proposals, I had enough context to make them credible and enough relationships to get them considered.

Over the following year I contributed to three major cross-team architecture decisions, drove AI tooling adoption across the engineering organization, and became the cross-team liaison for the Europe-facing product surface.

I moved too fast at first, with the founder instinct that things needed fixing and I knew how. Slowing down and listening made me more effective. The approach that works in a five-person startup, just ship it, needs recalibration when the org is ten times larger. I learned to tell the difference between things that were genuinely broken and things that were simply different from what I was used to.
