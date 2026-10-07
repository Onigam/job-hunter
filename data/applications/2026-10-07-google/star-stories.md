# STAR+R Stories: Google, Senior Staff Forward Deployed Engineer, GenAI (Zurich)

Google's FDE loop will test three things more than anything else: can you ship production code inside someone else's environment, can you run discovery with executives and engineers in the same room, and do you turn one-off field work into something reusable. These stories are picked for those three. All facts come from `profile/star-bank.md` and `profile/context.md`; nothing here is invented, so don't add numbers in the room that aren't on this page.

---

## 1. Shipping a product to enterprise customers from a blank page

**Likely prompts:** "Tell me about taking something from prototype to production." / "How do you handle ambiguity?" / "Walk me through something you owned end to end."

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no team, and the business side was already talking to enterprise prospects who wanted to see something real.

**Task.** I had to architect and build the whole platform, alone at first, and get it to a point where large companies would trust it in production while the commercial side signed the first contracts.

**Action.** I picked a deliberately boring stack, Node.js, React and PostgreSQL, because I needed to move fast without painting myself into a corner. We had the core features demo-ready in about three months. From there the platform grew in response to what customers actually asked for: a multi-tenant architecture, an API layer, impact reporting, even postal campaigns. Once there was enough traction I hired and onboarded the first three engineers and put the basics in place, CI/CD, code review, architecture docs, so the system didn't depend on my memory.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian unicorn valued at over $1B, in 2021. The technical due diligence held up, which I take as the clearest validation of those early calls.

**Reflection.** Two things I'd change. I added proper APM far too late, and for agentic systems that lesson is even sharper: you can't improve what you can't observe, so I'd build evaluation and tracing in from the first prototype now. I also underestimated how expensive it is to retrofit multi-tenancy. Designing for isolation on day zero is cheaper, and with customer data flowing through LLM context it's not optional.

---

## 2. Running a technical decision with executives and engineers in the room

**Likely prompts:** "Tell me about leading a discovery or a hard trade-off with senior stakeholders." / "How do you handle disagreement about architecture?"

**Situation.** At Alaya our monolith was starting to crack under load. The engineers were split between a full microservices rewrite and a modular monolith, and our investors wanted new features, not a rewrite.

**Task.** I needed a decision everyone could defend, one that balanced scalability with the pressure to keep shipping, and I needed the investors and the team to actually agree with it rather than just tolerate it.

**Action.** Instead of arguing it out, I ran a two-week spike with prototype load tests on both approaches. I then put the trade-offs in front of the leadership and the investors as numbers, not opinions. My proposal was a strangler fig migration: pull out the two highest-traffic modules first, leave the rest alone, and agree in advance on the criteria that would justify extracting anything else. Having those criteria written down mattered as much as the first extraction, since it ended the debate instead of postponing it.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition. We never needed a big-bang rewrite.

**Reflection.** The hardest part wasn't technical. It was convincing people that not rewriting everything was the right call, and data did that far better than I could. In a customer discovery session I'd now bring the benchmark to the first meeting rather than the second, because executives decide faster when the trade-off is already measured.

---

## 3. Turning one-off work into reusable patterns, without authority

**Likely prompts:** "How have you influenced teams you don't manage?" / "Tell me about co-building with another team and leaving them better off." / "How do you scale yourself?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of which reported to me, to adopt AI-assisted development, and nobody had asked for it.

**Task.** Change how those engineers worked day to day without being able to tell anyone to do anything.

**Action.** I started small, with three engineers who were already curious. With them I built demos on our real code that showed concrete time savings, and ran informal lunch-and-learn sessions with no mandate attached. The part that made it stick was packaging. I turned what worked into reusable prompt templates in a shared repo, so the next person didn't have to rediscover it, and wrote up specific results, like a PR review cycle that went about two hours faster.

**Result.** Within roughly three months, about 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** The no-mandate approach was slower but much stickier, because the people who adopted it on their own terms became its advocates. That's basically the FDE motion as I understand it: co-build with the customer's engineers until they own it, then pull the repeatable bits back into something everyone can use.

---

## 4. Embedding in an unfamiliar environment and earning the right to change it

**Likely prompts:** "Tell me about working inside a large, complex organisation." / "How do you ramp up in a codebase you didn't write?" / "Tell me about a mistake."

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organisation was about ten times larger than Alaya, with a different culture, a Java microservices codebase and much heavier process.

**Task.** I had to bring Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the velocity we'd had as a startup.

**Action.** My first instinct was to fix things, and I moved too fast on a couple of them. I corrected course by spending the first stretch mapping the existing architecture before proposing changes, and by building relationships with the platform and infrastructure teams before pushing technical opinions. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** Alaya's core features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the person both teams came to for AI tooling.

**Reflection.** Some of what I wanted to fix in that first month wasn't broken; it just wasn't how I'd have done it. Listening first made me more effective. In a customer's environment that's doubly true, since you're a guest in their systems and their politics.

---

## Gap to prepare for (not a story)

The minimum qualifications ask for production AI solutions shipped from conception to launch, vector databases and RAG, and the preferred list names LangGraph or CrewAI and LLM cost metrics like tokens per second and cost per request. The profile lists LLM integration, multi-agent workflows, semantic search and embeddings, but the star bank has no dedicated story about shipping an LLM system to users. Before the interview, write one real story from that work (what was built, which retrieval and model choices, how quality was evaluated, what it cost per request) and add it to `profile/star-bank.md`. Expect a system design round on an enterprise RAG or multi-agent workflow on Google Cloud, so a quick refresh on Vertex AI, ADK and the A2A protocol is worth an evening.
