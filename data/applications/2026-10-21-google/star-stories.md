# STAR+R Stories: Google, Senior Forward Deployed Engineer, GenAI, Google Cloud (Zürich)

The posting points to four things the loop will probe: taking AI work from prototype to production, building the integration layer into a customer's existing systems, running discovery with business and engineering people at once, and turning field friction into reusable modules or product requests. The stories below map to those. Every fact comes from `profile/star-bank.md` and `profile/context.md`. Don't add numbers in the room that aren't written here.

---

## 1. From a blank page to production at enterprise customers

**Likely prompts:** "Tell me about taking something from prototype to production." / "Walk me through something you owned end to end." / "How do you deal with ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. We had no product, no customers and no team, while the business side was already in conversations with enterprise prospects who wanted to see something that worked.

**Task.** My job was to architect and build the whole platform, on my own at first, and get it to a state where large companies would run it in production while the first contracts were being signed.

**Action.** I went with a stack I knew would hold up without heroics, Node.js, React and PostgreSQL, because speed mattered more than novelty. The core features were demo-ready in about three months. After that, most of what we built came straight from customer asks: multi-tenancy, an API layer, impact reporting, even postal campaigns. When traction justified it I hired and onboarded the first three engineers, and put CI/CD, code review and architecture docs in place so the system stopped living in my head.

**Result.** Alaya grew to 50+ enterprise clients across Switzerland and France and was acquired in 2021 by Benevity, a Canadian unicorn valued above $1B. The platform came through technical due diligence, which is the best evidence I have that the early calls were sound.

**Reflection.** Observability came far too late; we only added proper APM once things hurt. With agentic systems I wouldn't make that mistake, since an agent you can't trace is an agent you can't improve, so evals and tracing go in with the first prototype. I'd also design for tenant isolation from day zero. Retrofitting it was expensive, and once customer data flows through an LLM's context it stops being a nice-to-have.

---

## 2. A trade-off decided with data, in front of investors and engineers

**Likely prompts:** "Tell me about leading a technical discovery or a hard trade-off with senior stakeholders." / "How do you handle disagreement over architecture?"

**Situation.** Our monolith at Alaya was starting to crack under load. Half the conversation was about a full microservices rewrite, the other half about a modular monolith, and the investors were clear that they wanted features, not a rewrite.

**Task.** I had to land a decision that balanced scalability against delivery pressure, and that both the team and the investors would actually stand behind.

**Action.** Rather than debate it, I ran a two-week spike with prototype load tests on both options. The results went to leadership and investors as numbers. What I proposed was a strangler fig approach: extract the two highest-traffic modules first, leave everything else alone, and write down ahead of time the criteria that would justify pulling out the next one. Those written criteria ended up mattering as much as the first extraction, because they closed the debate rather than postponing it.

**Result.** The first module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable right through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Convincing people that not rewriting everything was the right call was harder than the engineering. Benchmarks did that job better than any argument I could make. In a customer discovery today I'd bring measured latency and cost per request to the first meeting, because that's when the scope of a pilot gets decided.

---

## 3. Working inside someone else's stack after the acquisition

**Likely prompts:** "Tell me about integrating with systems you didn't build." / "How do you build trust with a team that isn't yours?" / "Tell me about adapting to a new environment."

**Situation.** After Benevity acquired Alaya in 2021, I joined as a Senior Staff Engineer in an organisation about ten times our size. The codebase was Java and microservices, the processes were different and so was the culture.

**Task.** Alaya's capabilities had to move into Benevity's platform, and we needed to keep shipping new features while it happened.

**Action.** For the first month I mostly mapped the existing architecture before proposing anything. I spent time with the platform and infrastructure teams early, well before I had opinions to push, because I'd need their help later. Once I understood where the boundaries were, I became the cross-team architecture contact for the Europe-facing product surface, which put me in the middle of the integration decisions instead of on the edge of them.

**Result.** Alaya's core features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Slowing down and listening first made me more effective, and it's the same posture I'd take walking into a customer's environment as an FDE: learn their constraints, their legacy data and their security boundaries before suggesting a single change.

---

## 4. Getting engineers to adopt AI tooling without a mandate

**Likely prompts:** "How do you influence without authority?" / "Tell me about mentoring engineers." / "Tell me about turning a one-off into something reusable."

**Situation.** As a Senior Staff IC at Benevity I had no direct reports, yet I wanted two teams that didn't report to me to adopt AI-assisted development.

**Task.** Changing how people work day to day, without being anyone's manager and without a mandate from above.

**Action.** I started with three engineers who were already curious. With them I built small internal demos that showed time saved on real work, then ran informal lunch-and-learn sessions where the only pitch was the demo. The prompt templates that worked went into a shared repo so anyone could reuse them, and I wrote up concrete results, like a PR review cycle that came out about two hours shorter.

**Result.** Within three months roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but adoption stuck, because people who chose the tools on their own terms went on to recommend them. The shared template repo is the part I'd point to for this role: it's the same move as turning a repeated field pattern into a reusable module, and I'd do it earlier and more deliberately next time.

---

## Questions to have ready

The posting lists LangGraph, CrewAI, ADK, ReAct and hierarchical delegation. Be ready to talk honestly about the multi-agent workflows Magino runs today (OpenClaw, Claude CLI), what state management and tracing look like there, and how they'd approach a RAG pipeline over a customer's mixed structured and unstructured data. Where the experience is AWS rather than Google Cloud, say so and map it to the Vertex AI equivalent instead of bluffing.
