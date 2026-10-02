# STAR+R Stories: Engineering Manager, Foundations & Enablement (via Jobgether)

The listing doesn't name the employer, but the text matches Storyblok's own posting for the same title almost word for word. Storyblok is the headless CMS company from Linz, Series C ($80M led by Brighton Park Capital, ~$138M raised in total), with 300-odd people working remotely across 45+ countries. Confirm with the Jobgether recruiter before the first call.

The role is a people manager running a cross-functional team that owns CI/CD, security practices, developer experience and shared platform capabilities for every other team. The posting asks for 2+ years of engineering leadership, stakeholder management across many product teams, incident response and "demonstrated AI literacy". The stories below map to those. Keep each spoken answer to about two minutes.

**Honest gap to prepare for.** Your formal people management is the Alaya period (2016 to 2021), where you hired and led the first engineers. At Benevity you were a Senior Staff IC with no reports. Expect them to probe performance reviews, underperformance conversations and incident ownership. Answer those from what you actually did at Alaya, and say plainly where your recent experience is IC leadership rather than line management. Don't stretch it.

---

## 1. Getting two teams to adopt AI tooling without a mandate

**Likely questions:** "How do you drive adoption of a new standard or tool?" "Show us your AI literacy." "How do you influence teams that don't report to you?"

**Situation.** At Benevity I was a Senior Staff Engineer with no direct reports. I was convinced AI-assisted development would save real time on code review and routine generation, but the two teams I wanted to bring along didn't report to me and had no reason to change how they worked.

**Task.** Get those engineers to actually use AI tooling day to day, not just sit through a presentation about it, and do it without anyone ordering them to.

**Action.** I started small, with three engineers who were already curious. We built a few internal demos around their own work, so the time savings showed up on tasks they recognised rather than on toy examples. From there I ran informal lunch and learn sessions, purely demos, no slides about the future of engineering. The part that made it stick was committing reusable prompt templates to a shared repo, which meant nobody had to start from a blank prompt. I also wrote down concrete wins as they happened, things like a PR review cycle that came in about two hours shorter, because a specific story travels further than a percentage.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead across the org, which nobody had planned.

**Reflection.** Going without a mandate was slower, but it lasted, because people who chose it defended it to their peers. A foundations team works the same way: a standard that's easy to adopt and visibly useful beats one that's enforced. As a manager I'd still keep the option of a mandate for things like security baselines, where "optional" isn't acceptable, and I'd be clear with the teams about which category a given standard falls into.

---

## 2. Building the engineering foundations at Alaya, and the first team

**Likely questions:** "Tell me about building or growing a team." "How do you onboard engineers?" "What standards do you put in place first?"

**Situation.** I co-founded Alaya in 2016 and wrote the first version of the platform myself on Node.js, React and PostgreSQL. As enterprise clients signed, it was clear I couldn't stay the only person who understood the system.

**Task.** Hire the first engineers, get them productive quickly, and put in place enough process that quality held up as more people touched the code, without slowing a small startup to a crawl.

**Action.** I hired and onboarded our first three engineers. Before they arrived I set up CI/CD and a code review practice, and I wrote short architecture docs covering the decisions a newcomer would otherwise have to ask me about. The aim was that a new engineer could ship something real in their first week without needing me in the loop for every step. Reviews were partly a teaching tool; I'd explain the why behind a comment rather than just asking for a change.

**Result.** The team carried the platform to 50+ enterprise clients across Switzerland and France, and Benevity acquired Alaya in 2021 after a diligence process that went through the codebase and architecture.

**Reflection.** Observability came too late. We only added proper APM after a few incidents we couldn't explain quickly, and those were stressful, slow investigations. If I were setting up foundations again, logging, tracing and alerting would sit next to CI/CD on day one, along with a lightweight incident routine so on-call isn't improvised. That's directly relevant here, since incident response and operational reliability are in the posting.

---

## 3. Balancing platform work against feature pressure

**Likely questions:** "How do you prioritise platform work when product teams want features?" "Tell me about a hard trade-off." "How do you make a case for technical investment?"

**Situation.** A few years into Alaya, our monolith was starting to crack under load. The team was split between a full microservices rewrite and staying with the monolith, and investors wanted new features, not a rewrite.

**Task.** Find a decision we could defend to both sides, long-term scalability and the delivery pressure in front of us.

**Action.** Instead of letting it stay a debate, I ran a two-week spike that prototyped both approaches and load-tested them. I presented the results to the CTO and investors as numbers, which changed the conversation quite a lot. My proposal was a strangler fig: extract the two highest-traffic modules, keep the rest monolithic, and write down explicit criteria for when anything else would earn extraction. Those criteria turned later arguments into a checklist.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Persuading people that not rewriting everything was right turned out harder than the engineering. Data settled it, and I'd benchmark even earlier next time. For a foundations team juggling requests from many product teams, the same idea scales: publish how you prioritise, tie platform investments to something product teams feel (build times, flaky tests, review latency), and agree the criteria upfront so each request isn't a fresh negotiation.

---

## 4. Joining a much larger org after the acquisition

**Likely questions:** "Tell me about a time you had to adapt to a new environment." "How do you work with infrastructure teams you don't control?" "What would your first 90 days look like?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer, in an engineering org roughly ten times bigger than Alaya's, with a different stack (Java and microservices), different processes and a different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform and keep shipping new features, without losing the speed we'd had as a startup.

**Action.** I spent the first month mapping the existing architecture before suggesting any changes. I also made a point of building relationships with the platform and infrastructure teams early, so that when I did push a technical opinion it came from someone they already knew. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** We migrated the core Alaya features into Benevity's platform. I contributed to three major cross-team architecture decisions and became the go-to person for AI tooling across two engineering teams.

**Reflection.** At first I moved too fast, trying to fix things that weren't actually broken. Slowing down and listening made me far more effective. That would shape my first 90 days in this role: shadow the product teams, sit in on a few incidents, read the last six months of platform requests, and only then propose a roadmap, ideally one co-written with Infrastructure since the posting puts that partnership front and centre.

---

## Questions to ask them

- How many engineers are on Foundations & Enablement today, and is the plan to grow it? What's the split between frontend tooling, backend platform and security?
- Where does the boundary sit between this team and Infrastructure? Who owns on-call for CI/CD outages?
- How do product teams request work from Foundations today, and what's the most common complaint about it?
- What does "AI literacy" look like in practice here? Are there internal AI tooling efforts this team would own?
- What would make the first six months a clear success for whoever takes this role?
