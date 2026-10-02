# STAR+R Stories: Vocca, Senior Product Engineer (TypeScript), Platform

The process is four steps: Talent (45 min), Head of Engineering (45 min), the engineering team (1h30, live coding plus architecture), then the CTO (30 min). The posting stresses four things: turning manual processes into product, scaling a configuration model across thousands of clinics, judgment about AI-generated code, and explaining decisions briefly to founders. The stories below are picked for those.

---

## 1. Turning a hand-run setup into a product (Alaya, zero to acquisition)

**Likely questions:** "Tell me about a time you turned a manual process into a product." / "How do you handle ambiguity?" / "What would you do in your first 90 days?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, and the business side was already in conversations with its first enterprise clients.

**Task.** My job was to build the whole platform, alone at first, and to keep it shippable while those clients kept asking for things that only fit their own company.

**Action.** I picked a stack I knew would hold without being clever about it: Node.js, React and PostgreSQL. We had the core features demo-ready within about three months. After that, most of the work was taking things we'd been doing per client and turning them into the product itself, which meant a multi-tenant architecture, an API layer, impact reporting and postal campaigns. Once there was enough to maintain, I hired and onboarded our first three engineers and set up CI/CD, code review and architecture docs so they weren't relying on my memory.

**Result.** We reached production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021.

**Reflection.** Multi-tenancy cost us far more as a retrofit than it would have as a day-one decision, and that's exactly the trap Vocca's scenario engine has to avoid. Every clinic-specific rule that lives in a prompt today is a tenant config that hasn't been modelled yet. We also added proper APM late; I'd put observability in from the start now.

---

## 2. A migration without a big-bang rewrite (strangler fig at Alaya)

**Likely questions:** "Walk us through a technical trade-off." / "How would you approach the Python to TypeScript migration?" / "How do you explain a technical decision to founders?"

**Situation.** Our monolith at Alaya was starting to show cracks under load. Half the team wanted a full microservices rewrite, the other half wanted to tidy up the monolith, and the investors wanted new features rather than either.

**Task.** I had to make a call we could defend, one that kept delivery going and still fixed the scaling problem.

**Action.** Rather than argue it out, I ran a two-week spike comparing both approaches, with prototype load tests on each. Then I took the trade-offs to our CTO and investors as numbers, not opinions. My proposal was a strangler fig: extract the two highest-traffic modules first, leave everything else in the monolith, and write down clear criteria for when another module earns its extraction.

**Result.** The first extracted module shipped in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big rewrite.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting everything was the right answer, and the benchmark data is what ended the debate. I'd run that benchmarking earlier next time. For Vocca, I'd apply the same approach to the Python services: move them across one at a time, starting with whatever's on the onboarding path, with an exit criterion for each.

---

## 3. Getting engineers to adopt AI tooling, carefully (Benevity)

**Likely questions:** "How do you think about the risks of AI-generated code?" / "How do you influence without authority?" / "How would you set code quality standards on a small team?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to start using AI-assisted development.

**Task.** The goal was to change how people worked day to day without any mandate, and without lowering the review bar while doing it.

**Action.** I started with three engineers who were already curious. We built small internal demos that showed real time saved, like a PR review cycle that came in about two hours shorter. Lunch-and-learns followed, all optional. The prompt templates went into a shared repo so they could be reviewed and versioned like any other code. A lot of the conversation was about where the tools go wrong: confident code that compiles and misses an edge case, tests that only confirm the implementation, plausible imports of things that don't exist. We agreed that generated code gets the same review as anyone else's, and a bit more scrutiny on anything that touches data.

**Result.** Within about three months, roughly 70% of engineers across both teams were using AI-assisted review and generation, and I became the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it stuck. People who adopted it on their own terms ended up defending it internally. With Claude Max for everyone at Vocca, adoption won't be the problem; the work will be in review norms and in tests that actually catch what the model gets wrong.

---

## 4. Joining an established team and listening first (post-acquisition at Benevity)

**Likely questions:** "Tell me about joining a new team." / "Tell me about a mistake you made." / "How do you collaborate across teams?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer, in an org about ten times the size of Alaya, with a different culture, a Java microservices codebase and its own processes.

**Task.** We needed to bring Alaya's capabilities into Benevity's platform while still shipping new features at the pace we'd had before.

**Action.** I spent the first month mapping the existing architecture before proposing anything, and built relationships with the platform and infra teams before pushing technical opinions. Over time I became the architecture liaison for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into the Benevity platform. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two engineering teams.

**Reflection.** Honestly, my first instinct was to fix things that weren't broken. Slowing down and listening made me more useful, not less. At Vocca I'd do the same in week one: read the existing prompts and onboarding runbooks and sit next to whoever onboards clinics today, before designing the configuration model.

---

## Short answers worth having ready

**"Why a Senior Product Engineer role after Staff and cofounder?"** Because the scope in the posting is what I enjoy most: owning a hard platform problem end to end, from the data model to the dashboard, at a company early enough that the decisions still matter. The title matters less to me than owning the scenario engine.

**"How would you design the scenario engine?"** Start from the clinics that onboard today and write their rules out as data: typed, versioned config validated with a schema, with the prompt generated from that config rather than the config being hidden in the prompt. Add a test harness that replays real call transcripts against a clinic's config before it goes live. Ship the narrowest version that onboards one standard clinic with no developer, then widen it.

**"Explain a technical decision to a founder in two minutes."** Use the strangler fig story: the decision, the one number that justified it (about 40% faster on the busiest endpoints), what we deliberately didn't do, and the criterion for revisiting it.
