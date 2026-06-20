# STAR Stories — SonarSource Principal Platform Engineer

---

## 1. Building the Platform from Zero

**Best for:** "Tell me about building foundational platform infrastructure" / "Have you bootstrapped a product end-to-end?"

In 2016, I co-founded Alaya with no existing codebase, no customers, and a founding team of two. My job was to design and build the entire technical platform fast enough to demo to enterprise clients within months, while the business was still figuring out its go-to-market.

I chose a pragmatic stack: Node.js, React, PostgreSQL, and AWS. Nothing exotic, nothing that would require specialists to maintain. I built the core features in the first three months and got us to a working demo. As we started signing enterprise clients, I iterated: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling. I also set up CI/CD, code review culture, and onboarding docs as we grew the team from just me to four engineers.

The platform went live with 50+ enterprise clients across Switzerland and France. The technical architecture held through the 2021 acquisition by Benevity with no major rework required on the core. That felt like the real validation: not that we'd been clever, but that we'd made decisions that stayed defensible for five years.

Looking back, I'd invest in observability much earlier. We added proper APM late and it cost us debugging time we could have spent on product. I'd also design for multi-tenancy from day zero instead of retrofitting it, which turned out to be expensive.

---

## 2. The Strangler Fig Decision

**Best for:** "Tell me about a hard technical trade-off" / "How do you approach technical debt?" / Tracer bullet / Architecture under pressure

Around 2019 at Alaya, our monolith was showing scaling cracks. The team split into two camps: full microservices rewrite vs. keeping a modular monolith. Investors were pushing for new features, not an internal rewrite. As the technical co-founder, the call was mine to make and defend.

My task was to find a path that balanced long-term scalability with the reality of a four-engineer team under real delivery pressure.

I ran a two-week technical spike, building lightweight prototypes of both approaches and running load tests to generate actual numbers. Then I presented the trade-offs to the CTO and investors with data, not opinions. My proposal was a "strangler fig" migration: extract the two highest-traffic modules first, keep the rest of the monolith stable, and set explicit criteria for when we'd extract additional modules. The criteria part mattered because it made the decision feel principled rather than arbitrary.

We shipped the first extracted module in six weeks. Response time on the busiest endpoints improved roughly 40%. The rest of the monolith stayed stable through the acquisition. No big-bang rewrite was ever needed.

The hardest part wasn't the technical decision, it was convincing people that "not rewriting everything" was the right call. Data helped enormously. Next time I'd get to the benchmarking phase faster, to cut the debate shorter rather than letting the opinion war run.

---

## 3. Driving Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about elevating the technical bar" / Force multiplier

At Benevity in 2022-2023, I was a Senior Staff IC with no direct reports. I'd noticed that AI-assisted tooling could meaningfully improve developer productivity, but nobody had made it a priority, and I had no budget or authority to mandate anything.

I started with three engineers who were already curious. Rather than writing a standards doc, I built concrete demos: a GitHub Copilot workflow that cut a specific PR review cycle by about two hours, with a before/after comparison they could actually see. I ran informal lunch sessions, no slides, no mandate. I built reusable prompt templates and committed them to a shared repo so anyone could start in ten minutes without needing to ask me.

Within three months, roughly 70% of engineers across two teams were using AI-assisted code review and generation as part of their regular workflow. I became the informal AI tooling lead across the engineering org without ever being assigned to the role.

The mandate-free approach was slower than a top-down rollout but stickier. Engineers who adopted voluntarily became advocates internally, and that social proof is worth more than any decree. I'd still do it the same way, but I'd document the results more systematically earlier, so the case for scaling it was already built by the time leadership asked.

---

## 4. Navigating Post-Acquisition Integration

**Best for:** "Tell me about a time you had to operate in a much larger organization" / Cross-functional work / Navigating ambiguity

When Benevity acquired Alaya in 2021, I went from a five-person engineering team to one that was roughly ten times that size. Different culture, a Java and microservices codebase I didn't know, different processes, different ways of making decisions.

My task was to help integrate Alaya's capabilities into Benevity's platform while maintaining the product velocity that had made Alaya attractive in the first place.

I spent my first month just mapping the existing architecture and meeting people rather than immediately proposing changes. I built relationships with platform and infra teams before pushing any technical opinions. Once I had enough context, I drove three major cross-team architecture decisions and established myself as the liaison for the Europe-facing product surface. I also introduced AI-augmented development practices that eventually spread to two teams.

Core Alaya features were successfully integrated without disrupting Benevity's existing product lines. The cross-team architecture work contributed to two significant performance improvements in the integrated product.

I initially moved too fast, trying to "fix" things that weren't actually broken in the new context. Slowing down to listen first made me far more effective. In a new environment, understanding the social architecture matters as much as understanding the technical one.

---

## 5. Defining a "Golden Path" for Service Creation

**Best for:** "Tell me about platform-as-a-product thinking" / "How do you raise engineering standards?" / "Developer experience"

At Benevity after the acquisition, there was no consistent standard for how new services should be scaffolded, tested, or deployed. Different teams had wildly different approaches to the same problems, which made cross-team work slow and onboarding expensive for anyone new.

Without having an official platform team mandate, I wanted to define and get engineers to actually adopt a consistent starting point for service creation.

Rather than writing a standards document and hoping for adoption, I documented the patterns that already worked well across the org. Then I built a working template: a starter repo with CI/CD wired up, observability defaults configured, and testing patterns already in place. I piloted it with one willing team, spent three weeks gathering their feedback, iterated, and only then proposed it as a default. The key was having something real to show, not a proposal.

Two teams adopted the template in the first quarter. Onboarding time for a new engineer dropped from about a week of environment setup to under a day. The template became the de-facto starting point for new services in those teams, without anyone being told they had to use it.

I'd get buy-in from tech leads earlier in the design phase. I built most of the template before soliciting their input, which meant I threw away a few decisions I could have avoided with a thirty-minute conversation upfront.
