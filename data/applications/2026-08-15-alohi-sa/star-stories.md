# STAR Stories: Alohi SA, Head of Engineering

Prepared for behavioral rounds. Selected for leadership, hiring, coaching and technical trade-off questions, given Alohi's stage (29 people, bootstrapped, multi-product).

---

## 1. Building Alaya from a blank page to an acquisition

**Likely prompt:** "Tell me about building something from scratch" or "How do you approach scaling an engineering org from zero?"

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, with no customers and no product yet, just an idea and a small founding team. My job was to architect and build the whole platform myself at first, then grow a team around it while the business was closing its first enterprise clients. I picked a pragmatic stack, Node.js, React, PostgreSQL, that could scale without over-engineering for a company that didn't exist yet, and got the core features to a first demo inside three months. From there it was iterative: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling, and hiring the first three engineers while setting up CI/CD and a code review culture that would hold as we grew. By the time Benevity acquired us in 2021, we had fifty-plus enterprise clients across Switzerland and France running on that platform, which felt like the clearest validation the early technical calls were right. If I did it again, I'd invest in observability much earlier, we bolted on proper APM late, and I'd design for multi-tenancy from day zero instead of retrofitting it under load.

---

## 2. Choosing a strangler-fig migration over a full rewrite

**Likely prompt:** "Tell me about a technical trade-off you had to defend" or "How do you handle technical debt against delivery pressure?"

At Alaya, our monolith started showing real scaling cracks just as investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and a more modest modular monolith, and I needed to make a call that wouldn't blow up either the roadmap or the system. I ran a two-week spike comparing both approaches with actual load tests instead of opinions, then took the numbers to the CTO and investors and proposed a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest monolithic, and define clear criteria for when to extract anything else. We shipped the first extracted module in six weeks, performance on the busiest endpoints improved about 40%, and the remaining monolith stayed stable all the way through the acquisition without ever needing the big-bang rewrite. The hard part wasn't the technical work, it was convincing people that not rewriting everything was still a serious decision. Looking back, I'd push for more upfront benchmarking so that debate resolves faster next time.

---

## 3. Getting two teams to adopt AI tooling with no authority to mandate it

**Likely prompt:** "Tell me about leading without formal authority" or "How do you drive adoption of a new practice across teams that don't report to you?"

At Benevity I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't answer to me to start using AI-assisted development in their daily workflow. Mandating it wasn't an option, so I started small: three engineers who were already curious became early adopters, and I built internal demos that showed concrete time saved rather than making abstract claims. From there it was informal lunch-and-learn sessions with no mandate attached, just working examples, plus a shared repo of reusable prompt templates so people didn't have to start from nothing. I documented real wins as they happened, one engineer saved close to two hours on a single PR review cycle, and let that spread on its own. Within about three months, something like 70% of engineers across both teams were using AI-assisted review and generation regularly, and I'd become the informal go-to for AI tooling questions across the org. The approach was slower than a top-down rollout would have been, but it stuck, because people had adopted it on their own terms and were the ones advocating for it internally, which I couldn't have manufactured with a directive.

---

## 4. Slowing down before pushing changes after the Benevity acquisition

**Likely prompt:** "Tell me about integrating into a much larger organization" or "How do you build trust with a new team quickly?"

When Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I'd been running, with a different culture, a Java-plus-microservices codebase I didn't know, and processes that had nothing to do with how we'd worked at Alaya. My task was to get Alaya's capabilities integrated into their platform while still shipping new features, without losing the speed that had gotten us acquired in the first place. I spent the first month just mapping the existing architecture before proposing a single change, and built relationships with the platform and infra teams before I brought any technical opinions to the table. That groundwork is what let me drive adoption of AI-augmented engineering practices across the org later and become an architecture liaison for the Europe-facing product surface. We got the core Alaya features migrated, I contributed to three major cross-team architecture decisions, and became the reference point for AI tooling adoption across two teams. My first instinct after the acquisition was to move fast and fix things that weren't actually broken in the new org, and dialing that back to listen first is what made the rest of it work.
