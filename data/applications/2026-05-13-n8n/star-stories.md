# STAR Stories — n8n Senior AI Engineer

_Tailored for behavioral questions likely at an AI-focused senior engineering role._

---

## 1. Driving AI Tooling Adoption Without Authority

**Best for:** "How do you influence without formal authority?" / "Tell me about championing a new technology." / "How have you improved team productivity?"

In 2023 at Benevity, the engineering organization had no shared practice around AI-assisted development. GitHub Copilot existed, a few engineers were experimenting individually, but there was no structure and no buy-in at the team level. My task was to change that across two teams that didn't report to me, with no mandate and no budget authority.

I started small. Three engineers were already curious, so I worked with them first and built concrete demos showing actual time savings on real tasks: a PR review cycle that normally took two hours going through in thirty minutes with the right prompt patterns. I ran informal lunch sessions, nothing mandatory, just "here's what I found, come if you're interested." Alongside that, I committed reusable prompt templates to a shared repo so anyone could pick them up without starting from scratch. Each time someone got a result they'd have missed otherwise, they'd mention it to a colleague. That's the mechanism I was actually betting on.

Within three months, roughly 70% of engineers on both teams had integrated AI-assisted code review and generation into their workflow. I became the informal AI tooling lead across the org. What I learned is that a mandate-free approach is slower but the adoption sticks. Engineers who choose it on their own terms advocate for it in a way you can't manufacture with a top-down push.

---

## 2. Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a time you built something from scratch." / "How do you handle full ambiguity?" / "Founding engineer / early-stage" roles.

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had a blank page, no customers, and no product. My co-founder was running business development. I was alone on engineering.

The task was to architect and ship a working platform fast enough that the first enterprise client conversations had something real to demonstrate, then keep building as the business signed contracts. I had to make stack decisions that would hold without over-engineering them on day one.

I chose Node.js, React, and PostgreSQL: pragmatic, well-supported, and flexible enough to support multi-tenancy later without a full rewrite. The first working demo was ready in three months. From there I iterated constantly: added the API layer, impact reporting, postal campaign infrastructure, and multi-tenant access controls as each client's requirements made them necessary. When the team grew, I hired the first three engineers, set up CI/CD, and built a code review culture so they could ship independently.

By 2021 the platform had 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn with $1B+ valuation, acquired the company. The acquisition due diligence examined every architecture decision we'd made from day one. Nothing broke. Looking back, I'd have invested in observability earlier; we added proper APM late and it cost us debugging time. I'd also have designed explicitly for multi-tenancy from day zero rather than retrofitting it at month eight.

---

## 3. The Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated." / "How do you handle technical debt?" / "How do you make decisions under uncertainty?"

At Alaya around 2019, our monolith was showing scaling cracks. The team was debating a full microservices rewrite versus a modular monolith approach. Investors were pushing for new features on a tight roadmap. It was the worst possible moment for a big architectural argument.

My task was to make a defensible call that balanced long-term scalability with the reality that a full rewrite would kill our velocity for six months minimum.

I ran a two-week technical spike comparing both approaches with prototype load tests on our actual traffic patterns. Then I presented the trade-offs to the CTO and our investors with concrete numbers rather than opinions. The pitch was a "strangler fig" approach: extract only the two highest-traffic modules first, keep the rest of the monolith stable, and define clear criteria for when additional modules would justify extraction. No big-bang rewrite.

We shipped the first extracted module in six weeks. Performance improved roughly 40% on the busiest endpoints. The remaining monolith stayed stable all the way through Benevity's acquisition two years later. The hardest part wasn't the engineering, it was convincing people that "not rewriting everything" was actually the right call. Data helped. I'd do more early benchmarking next time to cut the debate phase shorter.

---

## 4. Navigating Post-Acquisition Integration

**Best for:** "Tell me about navigating a major change." / "How do you work in a new organization?" / "Cross-functional collaboration at scale."

After Benevity acquired Alaya in 2021, I joined an engineering organization roughly ten times the size of what I'd known. Different culture, different primary language, different codebase (Java and microservices), different release processes. I went from being the person who made all the architecture calls to being one voice among many.

My task was to integrate Alaya's core capabilities into Benevity's platform while continuing to ship features, without losing the product velocity we'd built, and without breaking things by charging in with opinions about how everything should be different.

I spent the first month listening. No proposals, no "well at Alaya we did it this way." I mapped the existing architecture, built relationships with the platform and infra teams, and tried to understand why decisions had been made before questioning them. Once I had enough context, I started contributing to cross-team architecture decisions and drove AI tooling adoption using the same slow, demo-first approach I'd refined at Alaya.

Over the following year I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two engineering teams. What I got wrong early was moving too fast, trying to fix things that weren't actually broken from the outside. Slowing down and listening first made me more effective than any technical opinion I had in month one.

---

## 5. Shipping an LLM Integration Under Tight Constraints

**Best for:** "Tell me about a time you shipped an AI feature." / "How do you approach prompt engineering in production?" / "Working with LLM reliability issues."

At Benevity in 2023, I was asked to build an AI-assisted code review tool that could summarize PR diffs and flag common issues, integrated into our existing GitHub workflow. The constraint was tight: the tool had to work reliably enough that engineers would trust it, not just try it once and ignore it.

The task was to build something production-ready, not just a demo. That meant handling the cases where the model output was wrong or hallucinated in ways that could mislead a reviewer.

I started by defining what "reliable enough" meant with the engineers who'd use it. We agreed on a threshold: the tool should add value on 80% of PRs and fail gracefully (not silently) on the rest. I built the integration in TypeScript against the OpenAI API, designed the prompt structure with explicit output constraints to reduce hallucination surface, and added an evaluation harness that ran against a set of real historical PRs we'd labeled as ground truth. Every prompt change had to pass the eval before it went live.

Within six weeks the tool was live and integrated into the standard PR workflow. The adoption rate was above 70% within a month, without any mandate. What I learned is that LLM features live or die on trust, and trust comes from failing loudly rather than confidently wrong. Building the eval harness first rather than retrofitting it was the decision I'm most glad I made.
