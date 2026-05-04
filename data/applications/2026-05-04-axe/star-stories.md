# STAR Stories — Axe, Founding Engineer

Role context: forward-deployed founding engineer at an early-stage AI voice agent startup in logistics. Stories prioritized around: building from scratch, customer-facing technical work, AI system design, ambiguity tolerance.

---

## 1. Building Alaya from zero to acquisition

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no existing codebase. My role was to architect and build the entire platform while the business was signing its first enterprise clients, which meant making foundational technical decisions with almost no information about what would actually matter six months later.

I chose a stack I could move fast with and that could grow: Node.js, React, PostgreSQL. The first three months were about getting to a working demo, not building the perfect system. From there I iterated: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling. As the product matured I hired and onboarded the first three engineers, introduced CI/CD, and established a lightweight code review culture. At no point did the pace of feature work pause for it.

By 2021, the platform had 50+ enterprise clients across Switzerland and France. Benevity acquired us, which validated the technical bets made from day one: we'd stayed on a monolith longer than fashionable, kept the stack small, and shipped constantly.

What I'd change: I added observability too late, and multi-tenancy came in as a retrofit rather than a design principle. Both cost real time. I'd design for those from day zero next time.

---

## 2. Making a hard architecture call under delivery pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs feature velocity?"

A couple of years into Alaya, the monolith was starting to show cracks under load. The team was split: full microservices rewrite, or modular monolith. Investors wanted new features, not internal rewrites. It was a genuine tension.

My job was to make a defensible decision and ship it, not just facilitate a debate. I ran a two-week technical spike comparing both approaches with prototype load tests on our actual traffic patterns. Then I brought the trade-offs to the CTO and to investors with concrete numbers, not architecture diagrams. What I proposed was a strangler fig approach: extract the two highest-traffic modules first, hold the rest in the monolith, and define explicit criteria for when to extract more.

The first module shipped in six weeks. Performance on those endpoints improved ~40%. The rest of the monolith held stable through the acquisition two years later, with no big-bang rewrite.

The hardest part wasn't the engineering, it was convincing people that "not rewriting everything" was the right call. That required showing data early and framing the decision around risk, not elegance. I'd front-load the benchmarking even more aggressively next time to cut the debate shorter.

---

## 3. Driving AI tooling adoption without a mandate

**Best for:** "How do you influence without authority?" / "Tell me about leading a technical change"

At Benevity, I was a Senior Staff IC with no direct reports. I'd seen that AI-assisted development (code review, generation, test writing) was meaningfully faster in practice, but two engineering teams that didn't report to me had no reason to change how they worked. I needed adoption without being able to mandate it.

I started with three engineers who were already curious. With them I built internal demos showing concrete, measurable time savings: how long a PR review cycle took before and after, for example. Then I ran informal lunch-and-learns, no slides, just live demos. I committed reusable prompt templates to a shared repo so the tooling was immediately usable, not theoretical.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation regularly. I became the informal AI tooling lead across the org, which wasn't a title I was given, it was something that emerged from the work.

The lesson: mandate-free adoption is slower but stickier. Engineers who chose it on their own terms became advocates. A top-down decree would have produced compliance, not enthusiasm.

---

## 4. Forward-deployed problem solving: understanding the customer before building

**Best for:** "Tell me about a time you worked directly with customers" / "How do you translate customer pain into technical decisions?"

In the early months at Alaya, I was simultaneously the sole engineer and the person doing customer discovery calls with HR directors and CSR leads at large enterprises. There was no product manager between me and the customer.

One client kept escalating frustration with our campaign module even though, technically, it was working as designed. I sat on a video call with their team to watch how they actually used it. In 20 minutes I saw three workflows that we'd never anticipated: they were exporting data to Excel, reformatting it, then reimporting it just to match their internal reporting templates. The feature was correct but the job it was being hired for was completely different from what I'd assumed.

I scrapped the planned sprint backlog and rebuilt the export layer around their actual reporting format. The escalation stopped. More importantly, three other clients had the same problem, they just hadn't told us.

What I took from it: early-stage software often has a gap between what users say they need and what their workflow actually requires. The only reliable way to close that gap is to watch someone use the thing. I've done that ever since, and it's made me faster, not slower, because I build the right thing on the first pass more often.

---

## 5. Post-acquisition integration: new org, new codebase, maintain velocity

**Best for:** "Tell me about navigating organizational change" / "How do you onboard to a large, unfamiliar codebase?"

After the Benevity acquisition in 2021, I joined a team roughly 10x larger than Alaya, with a Java microservices codebase I'd never touched, processes I didn't know, and a different engineering culture. The risk was that I'd either move too fast and break things, or slow down so much I'd stop shipping.

I spent the first month not proposing anything. I mapped the existing architecture, read decision records, and had 1:1s with platform and infrastructure leads before forming any opinions. This was uncomfortable for me because I'm used to moving fast, but it was the right call.

Once I had enough context, I started contributing to cross-team architecture decisions and drove adoption of AI-assisted development practices across two engineering teams. Over the following year I was involved in three major cross-team architecture calls and became the go-to person for LLM tooling questions across the org.

The mistake I made early was trying to "fix" things that weren't actually broken, just different. Slowing down and listening made me more effective than I would have been otherwise. In a new technical environment I now give myself an explicit listening period before pushing any opinions.
