# STAR Stories — Jam.dev, Staff Fullstack Engineer

---

## 1. Building a Product from Zero (Founding Engineer)

*Best for: "Tell me about a time you built something from scratch" / "What's your biggest technical achievement?"*

In 2016 I co-founded Alaya, an employee purpose platform, with no codebase, no customers, and no team. The first enterprise clients were signing letters of intent while I was still building the thing they'd been promised. The task was simple to state and impossible to rush: architect a production-ready multi-tenant SaaS platform while the business was selling it.

I chose Node.js, React, and PostgreSQL not because they were trendy but because I could move fast with them without accumulating hidden debt. The first three months were about getting to a demo we weren't embarrassed by. After that, I went feature by feature: the multi-tenant data model, the API layer, impact reporting, postal campaigns. When it came time to grow the team, I onboarded the first three engineers and put in place the things that tend to be skipped at that stage: CI/CD, a code review culture, architecture documentation that someone new could navigate without asking me for context.

By 2021, Alaya had 50+ enterprise clients across Switzerland and France. Benevity acquired the company that year at a valuation north of $1B.

What I'd do differently: I added proper APM late, and there were months where diagnosing performance issues meant reading logs manually and guessing. I'd also design for multi-tenancy from day zero; retrofitting it cost us real engineering time. Both of those lessons live in the decisions I make now before the first PR is merged.

---

## 2. Making a Hard Architecture Call Under Pressure

*Best for: "Tell me about a trade-off you navigated" / "How do you handle technical debt when the business wants features?"*

Around 2019 at Alaya, the monolith started showing strain. A few high-traffic endpoints were slow enough that users noticed, and the team split between a full microservices rewrite and a modular restructure of the existing codebase. Investors were pushing for features, not architectural work nobody would see in the product.

My job was to make a defensible call and execute it without stalling the product roadmap. I ran a two-week technical spike: prototype load tests for both approaches, estimated engineering cost in months, and a risk assessment I could put in front of both technical and non-technical stakeholders. The data pointed clearly toward a strangler-fig migration: extract the two highest-traffic modules first, keep the rest of the monolith intact, define specific metrics that would trigger future extractions so we weren't relitigating the same decision every quarter.

We shipped the first extracted module in six weeks. Latency on the busiest endpoints dropped by around 40%. The monolith held through the acquisition two years later without needing the big rewrite anyone had feared.

The hardest part wasn't the technical work. It was convincing people that "don't rewrite everything" was the right call when stress was high and the rewrite felt like the more decisive option. Data helped more than any argument. I'd run the benchmarks even earlier next time to cut the debate before it becomes political.

---

## 3. Scaling Developer Tooling Adoption Without a Mandate

*Best for: "Tell me about leading without formal authority" / "How do you drive change in an engineering org?"*

At Benevity in 2022, I was a Senior Staff IC with no direct reports. GitHub Copilot was available to every engineer, but real uptake was close to zero. Most engineers were skeptical, some were actively resistant, and nobody had been asked to change. My goal was to get two teams (neither of which reported to me) actually using AI-assisted tooling in a way that lasted past a company announcement.

I started with three engineers who were already curious. I sat with each of them through a real PR using Copilot so they could see the workflow in actual context rather than a contrived demo. Then I built a small internal walkthrough showing time saved on a code review cycle we'd all been through recently. I ran optional lunch sessions, kept them short, and committed a library of reusable prompt templates to a shared internal repo so the work outlasted any individual session.

Within three months, roughly 70% of engineers on both teams had incorporated AI tooling into their regular workflow. I became the informal AI tooling lead across the org without anyone having to designate me as such.

The mandate-free approach was slower to start but produced more durable adoption. Engineers who chose it on their own terms became internal advocates I couldn't have manufactured through a top-down decree.

---

## 4. Integrating Into a 10x-Larger Organization Post-Acquisition

*Best for: "Tell me about navigating a major change" / "How do you build credibility in a new environment?"*

When Benevity acquired Alaya in 2021, I went from a team of six to an engineering organization roughly ten times that size. Different primary language (Java, microservices), different processes, different culture. My job was to integrate Alaya's features into Benevity's platform without losing the pace we'd built, and without crashing into the existing org.

I deliberately spent my first month not proposing anything. I mapped the architecture, read incident postmortems, and built relationships with platform and infrastructure teams before I showed up with opinions. By the time I started driving technical conversations, I already knew whose input mattered and where previous attempts at similar work had stalled. I also brought something that Benevity hadn't standardized yet: AI-augmented development workflows, which I introduced through the same bottom-up approach I'd learned worked better than mandate.

Core Alaya features were migrated into Benevity's platform over 12 months. I contributed to three major cross-team architecture decisions on the European product surface and became the go-to person for AI tooling questions across two engineering teams.

I moved too fast in the first few weeks trying to fix things that weren't mine to fix yet. Listening first made the subsequent months significantly more effective. I'd front-load that patience even more next time.

---

## 5. Shipping Under Real Constraints (First Demo, Blank Page)

*Best for: "Tell me about a time you delivered something under pressure" / "How do you work when requirements are unclear?"*

The first six months at Alaya were all constraint. We had enterprise clients signed on the promise of a product that didn't exist yet, no team besides me, and a runway that made every week matter. The requirement was roughly: build something these companies will actually pay for.

I treated it as a forcing function rather than a problem. No time for over-engineering meant I made decisions fast and documented the reasoning so I could revisit them rather than relitigate them. I shipped a working demo in three months by ruthlessly deferring everything that wasn't on the critical path for the first client's use case. That demo became the sales tool that brought in the next three clients, which bought us the runway to keep building.

The thing that surprised me was how much of what I deferred in month one stayed deferred for a year without costing us. Some of what felt like shortcuts turned out to be the right permanent decision. Others came back as debt at exactly the wrong moment. Knowing which is which before you defer is the skill I've been building since.
