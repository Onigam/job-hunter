# STAR Stories — Inkeep Principal TypeScript Engineer

---

## 1. Building the Alaya Platform from Zero

**Best for:** "Tell me about a time you designed a system end-to-end" / "Describe your API design approach" / "Founding engineer" questions

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product, no customers, and no team. My job was to build everything.

I made the call to go with TypeScript and Node.js on the backend, React on the frontend, and PostgreSQL as the primary store. The reasoning was pragmatic: the stack had to be one person's full mental model first, then learnable by the engineers I'd eventually hire. I built the core features in the first three months to reach a demo-able state, then iterated outward: multi-tenant data isolation, the external API layer, webhooks for third-party integrations, impact reporting, and finally a CI/CD culture and code review standards before the second hire joined. The API design required particular care because enterprise clients were connecting their own HRIS systems to it, so mistakes there were contractual issues, not just bugs.

By 2021 we had 50+ enterprise clients across Switzerland and France, and Benevity acquired us. The technical decisions from day one held up through the acquisition review. Looking back, I'd have instrumented the system for observability earlier and designed the multi-tenant layer explicitly from the start instead of layering it on at month four. Both cost time later that didn't need to be spent.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Principal engineer" design thinking

At Alaya around 2019, the monolith was starting to show cracks: deploys were getting riskier, the two highest-traffic modules were causing contention, and the team was debating between a full microservices rewrite and staying modular within the monolith. Investors were pushing for feature delivery, not architecture work.

My job was to make a defensible call and own the outcome. I ran a two-week spike: prototyped both approaches, wrote load tests against each, and put together a concrete comparison with numbers rather than opinions. Then I proposed a strangler fig migration: extract the two noisiest modules first, define clear criteria for when it made sense to extract more, and leave the rest of the monolith stable.

The first extracted module shipped in six weeks. Latency on the busiest endpoints dropped by roughly 40%. The remaining monolith stayed stable through the Benevity acquisition two years later, with no big-bang rewrite ever required. The hardest part wasn't the technical work; it was convincing engineers who wanted to rewrite everything that "not rewriting everything" was the right call. The benchmarks did most of the convincing. Next time I'd do the benchmarking earlier so the debate is shorter.

---

## 3. Driving API and Tooling Adoption Without a Mandate

**Best for:** "How do you influence without authority?" / "Tell me about leading a technical initiative across teams" / Staff/Principal IC roles

At Benevity after the acquisition, I was a Senior Staff engineer with no direct reports but a clear goal: get two engineering teams to adopt AI-assisted development practices. Both teams had backlogs, skeptical leads, and no appetite for anything that felt like extra overhead.

I started with the three engineers who were already curious. We built working demos together, not slide decks: a concrete example where AI-assisted code review cut a PR cycle by two hours, and a prompt template library committed to a shared repo that anyone could pull and modify. Then I ran informal lunch sessions, attendance optional. No mandate, no forced rollout.

Within three months, roughly 70% of engineers across both teams had integrated AI tooling into their regular workflow. More importantly, several of them had started advocating for it internally to other teams, which is a different kind of spread. The mandate-free approach was slower than a top-down decree would have been, but the adoption was stickier and I didn't burn any political capital. At Inkeep, where the platform's success depends on developers genuinely wanting to use it, that kind of organic adoption dynamic matters.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about working in a large, established codebase" / "Cross-team collaboration" / "Handling ambiguity in complex systems"

When Benevity acquired Alaya in 2021, I went from a six-person engineering team to an org more than ten times that size. Different language (Java instead of Node.js for most services), different architecture conventions, different code review culture, different definition of "done."

My first instinct was to push opinions fast. I'd built a working platform, I knew what good looked like, and I wanted to help. That instinct was mostly wrong. I spent the first month just mapping: reading the existing architecture docs, sitting in on team syncs for teams I wasn't assigned to, and building relationships with the platform and infra leads before ever proposing a change. When I did start contributing opinions, they landed better because people already had a read on me.

Over three years I contributed to three major cross-team architecture decisions, successfully migrated Alaya's core features into Benevity's platform, and became the go-to person for AI tooling questions across the engineering org. The reflection is simple: moving slower at the start made me faster over the full arc. Understanding the existing constraints before proposing solutions is not patience, it's information gathering.

---
