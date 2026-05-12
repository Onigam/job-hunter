# STAR Stories — Lobby / Founding Engineer [Full Stack / Product]

---

## 1. Building a Platform from Zero (Founding Engineer context)

**Best for:** "Tell me about a time you built something from scratch" / "What does founding engineer mean to you?"

In 2016, I co-founded Alaya, an employee purpose and impact platform. There was no product, no codebase, and the business had just signed its first letter of intent with an enterprise client who expected a demo in three months. My task was straightforward in scope but wide open in execution: architect and build the entire platform from nothing, alone at first, while the sales conversation was already in motion.

I made a deliberate call to stay pragmatic on the stack. Node.js, React, PostgreSQL. Not because it was fashionable but because I knew it well and could move fast without surprises. The first three months were heads-down: core data model, authentication, multi-tenant isolation, a basic UI that looked credible enough to demo. From there I iterated in tight loops with our first clients, adding impact reporting, postal donation campaigns, and an API layer as the business needs clarified themselves.

When we started growing the team, I hired the first three engineers, set up CI/CD, introduced code review culture, and wrote architecture docs. By 2021, the platform had 50+ enterprise clients across Switzerland and France and we were acquired by Benevity, a Canadian unicorn with a $1B+ valuation.

Looking back, I would have built observability in earlier. We added proper APM late and paid for it in debugging time. I'd also design for multi-tenancy from day zero rather than retrofitting it. That said, the core call to stay boring on the stack and ship fast was the right one.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt under delivery pressure?"

At Alaya, the monolith was starting to crack under load. We had a team debate between a full microservices rewrite and a modular monolith, and investors were pushing for new features, not architecture work. My task was to make a decision that was both technically defensible and politically palatable.

I ran a two-week technical spike. I built prototypes for both approaches, ran load tests, and gathered concrete numbers. Then I presented the trade-offs to the founders and investors as data, not opinions. The case I made was for a "strangler fig" migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and define explicit criteria for when to extract more.

We shipped the first extracted module in six weeks. Performance improved by roughly 40% on the busiest endpoints, which was enough to make the argument stick. The remaining monolith stayed stable through the acquisition with no major incidents. No big-bang rewrite was ever needed.

The hardest part wasn't the technical work; it was convincing people that not rewriting everything was actually the right call. Data helped. I'd do more upfront benchmarking next time to cut the debate shorter.

---

## 3. Shipping Something "Hacky" That Actually Worked

**Best for:** "Tell me about a time you shipped fast despite constraints" / Lobby specifically asks for this

At Alaya, we had a client demo scheduled for a Monday and the email notification system wasn't ready. It was a core part of the demo flow. On Friday afternoon I had two options: delay the demo or find a way to simulate the notifications well enough to show the concept.

I built a thin wrapper that intercepted our internal event bus and pushed the notifications through a free-tier SendGrid account I'd set up in about an hour, with hardcoded templates and zero retry logic. It wasn't production code and I knew it. But it was convincing enough for the demo, it worked reliably for two days, and it bought me the time to build the real thing the following week.

The real notification system took about a week to build properly with queuing, retries, and multi-tenant template management. The hacky version served its purpose exactly. I've held onto that instinct: know when you're building for a demo and when you're building for production, and don't mix them up.

---

## 4. Leading Without Formal Authority

**Best for:** "How do you drive change without being a manager?" / Staff+ / founding engineer roles

At Benevity after the acquisition, I was a Senior Staff IC with no direct reports. I needed to drive adoption of AI-assisted development practices across two engineering teams that didn't report to me and had no particular reason to change how they worked.

I started small. Three engineers who seemed curious about the tooling became my early adopters. I built internal demos showing concrete time savings, framed around things they already found annoying, like long PR review cycles. I ran informal lunch-and-learn sessions with no mandate attached. I committed reusable prompt templates to a shared repo so the tooling was easy to pick up without asking me anything.

Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation in their daily flow. I became the informal AI tooling lead across the org without ever being assigned the role.

The mandate-free approach was slower than a top-down directive would have been, but it was stickier. Engineers who adopted it on their own terms ended up advocating for it internally, which I couldn't have engineered from the top down.

---

## 5. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating change" / "How do you work in a large, unfamiliar organisation?"

When Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I'd been used to. Different culture, different codebase (Java and microservices), different processes, different timezone distribution. My task was to integrate Alaya's capabilities into Benevity's platform while continuing to ship new features, without losing the product velocity we'd built.

I spent the first month mapping the existing architecture before proposing anything. I made a conscious decision to build relationships with the platform and infra teams before pushing technical opinions. It was slower than I wanted, but it meant that when I did start driving architecture decisions, I had enough context to propose things that actually fit.

I ended up contributing to three major cross-team architecture decisions in the first year and became the go-to point of contact for AI tooling adoption across two engineering teams. The core Alaya features were successfully migrated into Benevity's platform.

In retrospect, I initially moved too fast trying to fix things that weren't broken in the new context. Slowing down and listening first made me more effective, not less. That lesson has stuck.
