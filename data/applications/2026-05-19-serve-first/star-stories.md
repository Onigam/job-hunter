# STAR Stories — Serve First / Staff AI Backend Engineer

---

## 1. Navigating a Monolith-to-Microservices Migration Under Delivery Pressure

**Best for:** "Tell me about a hard architectural trade-off" / "How do you handle technical debt?" / "Monolith to microservices" (directly maps to Serve First's current migration)

At Alaya around 2019, we had a Node.js monolith that was starting to buckle. Latency on the impact-reporting module was spiking during batch jobs, and we'd get occasional request timeouts on the API during high-traffic campaign periods. The team was split: half wanted a full microservices rewrite, half argued for a modular monolith refactor. Meanwhile the business wanted three new features before the next sales cycle.

My job was to make a call we could actually execute on, not just a call that looked good on a whiteboard. I ran a two-week technical spike, built two small prototypes, and ran load tests on both. I then put the data in front of the CTO and the investors directly: here's the throughput delta, here's the delivery risk, here's what we'd lose if we big-bang rewrote the whole thing. I proposed what I called a strangler fig approach: extract the two highest-traffic modules into standalone services first, leave the rest monolithic, and define clear migration criteria for anything else.

We shipped the first extracted module in about six weeks. Performance on those endpoints improved ~40%. The rest of the monolith stayed stable through three more major feature releases and all the way through the Benevity acquisition, without any structural emergency. We never did a big-bang rewrite.

Looking back, I'd have done the benchmarking in week one instead of week three. The debate burned time that the data could have cut short. Having concrete numbers on the table earlier would have made the decision faster and less political.

---

## 2. Building a Production LLM Integration Without a Playbook

**Best for:** "Tell me about a time you worked with AI/ML in production" / "How do you approach something you haven't done before?"

At Benevity around 2023, I took on integrating LLM capabilities into our internal engineering workflows. Nothing formal: no mandate, no dedicated team, no precedent inside the org. The context was that GitHub Copilot was already floating around, but no one had actually thought through where LLMs could help at the infrastructure or pipeline level, not just autocomplete.

I started with code review. I built a lightweight wrapper around the OpenAI API that could read a PR diff and return structured feedback keyed to our internal style guide. Nothing clever, just a prompt template with some context injection and a JSON output schema so the results were parseable by our CI pipeline.

The first version was rough. Hallucinated issues, false positives on performance-sensitive paths. I iterated over a few weeks: added retrieval of the relevant module's existing patterns before generating the review, introduced confidence thresholds below which the tool stayed silent rather than noise-generating. Within three months, two teams were running it on every PR and it was surfacing real issues that humans were missing, mostly around error propagation edge cases in async flows.

What I learned: the failure mode for production LLM integrations isn't usually the model, it's the evaluation layer. You need a test set of known-good and known-bad cases before you ship anything to a real pipeline. I built that retrospectively and it made every subsequent iteration much faster.

---

## 3. Driving AI Tooling Adoption Without a Mandate

**Best for:** "How do you lead without authority?" / "Tell me about influencing an engineering team" / Staff+ behavioral questions

After the Benevity acquisition I was a Senior Staff IC with no direct reports but a strong opinion that the engineering org was leaving productivity on the table by not using AI tooling systematically. The tricky part: I couldn't mandate anything. Both teams had their own leads, their own processes, and a fair amount of skepticism toward anything that felt like top-down evangelism.

I started small. I found three engineers who were already curious about AI tools and ran informal demos with them, not presentations, just "here's what I built this week and how much time it saved." I committed a shared repo of prompt templates and showed concrete examples: a PR review cycle that used to take four hours reduced to about two. I ran optional lunch sessions, no slide decks, just live tooling.

Within three months, roughly 70% of engineers on both teams had adopted at least one AI-assisted step in their regular workflow. More importantly, the adoption was self-sustaining: people who'd tried it were now demoing it to people who hadn't, which I couldn't have engineered from the top down. I became the informal AI tooling lead across the org without ever being assigned to it.

The lesson was straightforward: in a culture that values autonomy, showing is more effective than telling, and early adopters do more conversion work than any mandate ever will.

---

## 4. Designing for Multi-Tenancy from Scratch at Alaya

**Best for:** "Tell me about a key infrastructure decision you made early on" / "How do you design for scale from the start?" / SaaS architecture questions

When I started building Alaya in 2016, we had one design constraint that everything else flowed from: we were selling to enterprises, meaning multiple large organizations would share the same platform, and each one expected full data isolation without knowing the others existed. I had to make a multi-tenancy call before we had a single paying customer.

The two main options were schema-per-tenant in PostgreSQL or a shared schema with tenant IDs everywhere. Schema-per-tenant gives better isolation and simpler queries but makes migrations expensive at scale. Shared schema is harder to get right early but far cheaper operationally as you grow. With a one-person engineering team and an early sales pipeline that could reach 20+ tenants quickly, I chose shared schema with strict row-level filtering baked into every query layer.

I built a middleware layer that injected the tenant context at the request boundary and validated it on every database call. We had an integration test that would fail if any query path could return rows from a different tenant, even in error states. It caught three real bugs during development that would have been serious incidents in production.

By the time we reached 50+ enterprise clients, the architecture held without structural changes. When Benevity ran due diligence, the data isolation model was one of the things they flagged as unusually solid for a company our size.

What I'd do differently: I should have added observability to the tenant layer earlier. We flew blind on per-tenant performance until fairly late, and a slow query that was fine at one tenant's data volume became a problem at another's. Instrumentation per tenant from day one would have surfaced that much sooner.

---

## 5. Post-Acquisition Integration: Moving from Startup Pace to Enterprise Scale

**Best for:** "Tell me about navigating change" / "Working across large, distributed teams" / "How do you operate in ambiguity?"

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering organization ten times that size, distributed across multiple continents, running a Java-based microservices platform that had nothing in common with what I'd built. The culture was different, the codebase was different, the decision-making cadence was different.

My first instinct was to push for changes. I could see architectural patterns that looked inefficient, processes that created unnecessary friction. I resisted that instinct and spent the first month just mapping: how did decisions get made, who owned what, what was the informal power structure that the org chart didn't show. I built relationships with the platform and infra leads before forming any opinions out loud.

That patience paid off. When I did start proposing changes, I had context for why things existed the way they did, and I could address objections before they were raised. I drove three major cross-team architecture decisions over the following year, including how Alaya's API surface would be exposed inside Benevity's platform, and contributed to the migration plan for the Europe-facing product surface.

The reflection is simple: in a large distributed org, trust is the infrastructure. You can't ship architecture decisions without it, and you can't build it quickly by being right out loud from day one. Slowing down in month one made me faster in months two through twelve.
