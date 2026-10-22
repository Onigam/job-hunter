# STAR+R Stories: Google, Principal Engineer, Hybrid Cloud Environment (Zürich)

This is a principal-level role, so the loop will lean on four things: setting multi-year technical direction, influencing across organisations you don't control, making architecture calls under uncertainty, and leading senior engineers. The posting also cares a lot about bounded access for AI agents, policy and isolation. Every fact below comes from `profile/star-bank.md` and `profile/context.md`. Don't add numbers in the room that aren't written here, and don't claim control plane or policy engine experience that isn't real. Frame isolation and multi-tenancy as the nearest proof, and say plainly where it stops.

---

## 1. Setting the architecture for a platform that had to pass enterprise scrutiny

**Likely prompts:** "Tell me about a long-term technical strategy you set." / "Walk me through a system you owned end to end." / "How do you handle ambiguity?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no team, and the business side was already talking to large companies that would put the platform through security and procurement reviews before signing anything.

**Task.** I had to architect and build the whole platform, alone at first, so that it could run in production for enterprise clients while the first contracts were still being negotiated, and so that it wouldn't need rebuilding once we grew.

**Action.** I picked a stack I trusted to hold up without heroics, Node.js, React and PostgreSQL, and got the core features to a demo in about three months. From there the roadmap was driven by what enterprise buyers needed: a multi-tenant architecture, an API layer, impact reporting. Once traction justified it, I hired and onboarded the first three engineers and put CI/CD, code review and architecture docs in place, so the design stopped living only in my head and other people could make decisions consistent with it.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France and was acquired in 2021 by Benevity, a Canadian unicorn valued above $1B. The platform came through the acquisition, which is the clearest evidence I have that the early architecture calls held up.

**Reflection.** Multi-tenancy was retrofitted rather than designed in on day one, and that cost us more than I'd expected. It's the lesson I'd bring straight to HCE: isolation and access boundaries are cheap at the start and painful to bolt on, and the same goes for what an AI agent is allowed to touch. Observability also came too late; we only added proper APM once things hurt.

---

## 2. A hard architecture call, made with data instead of opinions

**Likely prompts:** "Tell me about a technical trade-off with senior stakeholders." / "How do you settle a disagreement over architecture?" / "Tell me about technical debt."

**Situation.** Alaya's monolith was starting to crack under load. The team was split between a full microservices rewrite and a modular monolith, and our investors wanted new features, not a rewrite.

**Task.** I needed a decision that balanced long-term scalability against short-term delivery and that both the engineers and the investors would actually stand behind.

**Action.** Instead of arguing it out, I ran a two-week spike with prototype load tests on both approaches and took the trade-offs to leadership and investors as numbers. My proposal was a strangler fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and write down in advance the criteria that would justify extracting anything else. Those written criteria mattered as much as the first extraction, because they ended the debate instead of postponing it.

**Result.** The first module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Convincing people that not rewriting everything was the right call was harder than the engineering. Earlier benchmarking would have cut the debate shorter. At principal level I think the written criteria are the real deliverable, since they let teams make the next ten decisions without me in the room.

---

## 3. Joining a much larger organisation without breaking what worked

**Likely prompts:** "Tell me about navigating organisational change." / "How do you work across Product Areas with different priorities?" / "Tell me about a time you were wrong."

**Situation.** After the 2021 acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times larger than Alaya, and it had a different culture, a Java and microservices codebase and its own processes.

**Task.** I had to integrate Alaya's capabilities into Benevity's platform while we kept shipping new features, without losing the velocity we'd had as a small team.

**Action.** My first month went into mapping the existing architecture before proposing changes. I built relationships with the platform and infrastructure teams before pushing technical opinions, which wasn't my instinct at first. Over time I became the cross-team architecture liaison for the Europe-facing product surface, and that role gave me a seat in decisions that cut across several teams.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions, and I became the person two engineering teams came to for AI tooling.

**Reflection.** Early on, I moved too fast trying to fix things that weren't broken. Slowing down and listening first made me far more effective. A role like this one, which has to resolve disputes between Core and Product Areas, depends on that kind of credibility more than on being right.

---

## 4. Changing how engineers work, with no authority to make them

**Likely prompts:** "How do you influence without authority?" / "Tell me about driving adoption of a platform or standard." / "How do you mentor senior engineers?"

**Situation.** At Benevity I was an IC with no direct reports. I wanted to bring AI-assisted development practices into two teams that didn't report to me, and nobody had asked for it.

**Task.** The goal was to change day-to-day engineering habits across both teams without a mandate.

**Action.** I started with three engineers who were already curious and built internal demos around time they could actually save. Then came informal lunch and learn sessions, with no mandate and just demos, and reusable prompt templates committed to a shared repo so people could copy something that already worked. I wrote down concrete results as they came in. One of them was a PR review cycle that got about two hours shorter, and that example did more than any slide.

**Result.** Within three months, around 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** It was slower than a top-down rollout but it stuck, because the people who adopted it on their own terms went on to advocate for it. I'd apply the same thinking to platform adoption here: HCE has to drive GCP adoption, and a paved road that engineers choose beats a policy they route around.

---

## 5. Bounding what AI agents can do (use only if asked, and keep it honest)

**Likely prompts:** "What's your experience with agentic workflows?" / "How would you think about hosting autonomous agents safely?"

There's no single polished story here, so answer from current practice rather than inventing one. Most of my own engineering now runs through multi-agent workflows built on tools like OpenClaw and Claude CLI, and the problem I keep hitting is scope: an agent that can provision or change things is useful for exactly the same reason it's risky. In practice I give agents narrow permissions, keep their actions reviewable and treat structured context as part of the system rather than an afterthought. Be clear that this is personal and team-scale practice, not a zero-trust control plane at Google scale, and then move to how I'd approach it: short-lived credentials tied to one environment's lifetime, attestation of what the agent is, and drift detection that treats agent-made changes like any other change.

**Reflection to offer.** The gap between "an agent can do this" and "an agent should be allowed to do this here" is mostly a policy problem, which is a big part of why this role interests me.
