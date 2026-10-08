# STAR+R Stories: Artificial Intelligence Engineer, AI Platform Team (via Sigma Suisse)

The brief is about shared platform capabilities: RAG services, agent workflows, MCP/A2A standards, reusable libraries for product and forward-deployed teams, plus evaluation and safety. Expect questions on building shared infrastructure other teams depend on, getting engineers to adopt standards, quality/latency/cost trade-offs, and working inside a large organisation. The four stories below cover those. At the end there are short honest answers for the two gaps they'll probably probe (named agent frameworks and LLM evaluation).

---

## 1. Building a platform other teams depend on (Alaya, from zero to acquisition)

**Likely questions:** "Tell me about a platform you built from scratch." / "How do you design shared components that many consumers rely on?" / "Proven delivery in production, not PoCs."

**Situation.** In 2016 I co-founded Alaya, a purpose and employee engagement platform. There was no product, no customers and no code, just a business partner already talking to enterprise prospects.

**Task.** My job was to build the whole platform, alone at first and then with a small team, while the first enterprise clients were being signed. Whatever I built had to survive real customers from the first demo onwards.

**Action.** I picked a stack I knew could carry us without heroics (Node.js, React, PostgreSQL) and got the core features to a demo in about three months. From there the platform grew in layers: a multi-tenant architecture, an API layer, impact reporting, then features like postal campaigns that clients kept asking for. Once I hired the first three engineers, the work shifted. I set up CI/CD, a code review habit and architecture docs, because the platform now had to be understandable by people who hadn't written it.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian unicorn valued above $1B, in 2021. The technical due diligence held up, which was the best outside check on the early decisions I could have asked for.

**Reflection.** Two things I'd change. Observability came late; we added proper APM well after we needed it, and on an AI platform that would be traces and evals from day one. And retrofitting multi-tenancy cost more than designing for it upfront would have. For a shared RAG service the equivalent is tenancy, access control and data boundaries per consumer, which I'd put in the first design, not the third.

---

## 2. Getting engineers to adopt a standard without a mandate (Benevity, AI tooling)

**Likely questions:** "How do you get product teams to adopt your platform's standards?" / "Tell me about influencing without authority." / "How would you roll out reference architectures?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of which reported to me, to start using AI-assisted development in their daily work.

**Task.** Change how people actually worked, with no authority to tell them to, and make it stick past the novelty phase.

**Action.** I didn't start with a proposal or a policy. I found three engineers who were already curious and worked with them directly, building small internal demos that showed concrete time saved on real tasks, like cutting a couple of hours out of a PR review cycle. Then came informal lunch-and-learns, no attendance expected, just demos. The part that mattered most was making the good path easy: I wrote reusable prompt templates and committed them to a shared repo, so anyone could pick up something that already worked instead of starting from a blank prompt.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead across the org, mostly because people kept coming back with questions.

**Reflection.** It was slower than a top-down rollout would have been, but it stuck, because the people who adopted it on their own terms argued for it better than I could. That's how I'd approach reference architectures and MCP/A2A conventions on a platform team: ship a library or template that's easier to use than rolling your own, get two or three product teams on it, and let the standard follow from usage.

---

## 3. Choosing a trade-off with data, not opinions (Alaya, monolith vs. microservices)

**Likely questions:** "Tell me about a hard technical trade-off." / "How do you balance quality, latency and cost?" / "How do you handle pressure from stakeholders who want features?"

**Situation.** At Alaya the monolith was starting to crack under load. The team was split between a full microservices rewrite and staying put, and investors wanted features, not a rewrite.

**Task.** Find an answer we could defend on scalability and still keep shipping.

**Action.** Rather than settle it in a meeting, I ran a two-week spike that prototyped both directions and load-tested them. I took the numbers, not opinions, to the leadership team and investors. My proposal was a strangler-fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and write down explicit criteria for when another module would earn its own service.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got around 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part was convincing people that not rewriting everything was the right call, and data is what ended the debate. I'd benchmark earlier next time to shorten it. The same habit carries over to LLM systems: when someone wants a bigger model or a fancier retrieval pipeline, I'd want a regression set and latency and cost numbers on the table before anything changes.

---

## 4. Joining a much larger organisation (post-acquisition integration at Benevity)

**Likely questions:** "How do you work inside a large international group?" / "Tell me about adapting to a new codebase and culture." / "How do you work with infra and security teams?"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was roughly ten times the size of Alaya's, with a Java microservices codebase, different processes and a different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, without losing the speed we'd had as a startup.

**Action.** I spent most of the first month mapping how the existing architecture actually worked before suggesting any changes. I also made a point of getting to know the platform and infrastructure teams before I had opinions to push on them. Once I had that context, I became the cross-team architecture contact for the Europe-facing product surface and started on the AI tooling work from story 2.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person two teams went to for AI tooling.

**Reflection.** Early on I moved too fast and tried to fix things in the new org that weren't broken. Slowing down and listening first made me a lot more useful. In a large group with security, compliance and data owners, that's even more true; on an AI platform team, the people who own the internal APIs and data your agents touch are the ones you need on your side early.

---

## Honest answers for the likely gap questions

**"Which agent frameworks have you used? LangGraph, LangChain, LlamaIndex?"**
My day-to-day multi-agent work is with OpenClaw and Claude CLI, so I've dealt with the same problems those frameworks address: tool definitions, orchestration, context handling, what happens when an agent calls the wrong thing. I haven't shipped LangGraph in production. I'd expect to be productive in it quickly, since the concepts are familiar, but I'd rather say that plainly than have it come up later.

**"How do you evaluate LLM and agent quality?"**
This is the area I'd be growing into. I'd start with what worked on the architecture work above: a fixed regression set built from real queries, run on every prompt, model or retrieval change, with quality, latency and cost tracked side by side, plus traces so failures can be explained, not just counted. Human review would cover the cases where automated scoring isn't trustworthy. I haven't run a formal golden-dataset eval pipeline at scale yet, and I'd want to learn how the team does it today before proposing changes.
