# STAR+R Stories: Staff Full Stack Engineer, Series B energy startup (via Immersum)

The posting stresses four things: technical vision across the whole system, integration-heavy design, 0-to-1 work in high ambiguity, and putting agentic workflows into production. These four stories map to those, in roughly the order they're likely to come up.

---

## 1. Building Alaya from a blank page to acquisition

**Likely question:** "Tell me about something you built from scratch" / "How do you handle ambiguity?" / "Have you done a 0-to-1 launch?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customer and no codebase, just a business side that was already talking to its first enterprise prospects.

**Task.** My job was to design and build the whole platform, alone at first, and get it to something a large company would actually sign for, while the requirements were still moving every week.

**Action.** I picked a stack I knew we could run without a platform team: Node.js, React and PostgreSQL. Getting to a first demo took about three months, and after that the work was mostly expanding in the order customers forced on us. Multi-tenancy came next, then a proper API layer, then impact reporting and postal campaigns. Once there was enough to hire for, I brought in the first three engineers and set up CI/CD, code review habits and architecture docs, so the knowledge wasn't only in my head.

**Result.** The platform went to production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021. The technical choices held up through their due diligence.

**Reflection.** Two things I'd change. Observability came too late; we only added proper APM well after it would have saved us debugging time. And retrofitting multi-tenancy cost more than designing for it on day one would have. On a 0-to-1 product now I'd put tenancy boundaries and tracing in before the first customer, even if it slows the first demo slightly.

---

## 2. Choosing not to rewrite the monolith

**Likely question:** "Walk me through a big architecture decision" / "How do you set technical vision when the business wants features?"

**Situation.** At Alaya, the monolith was starting to crack under load. Half the team wanted a full move to microservices, and investors wanted new features, not a rewrite.

**Task.** I had to make a call we could defend on both sides: scale where it hurt, without stopping delivery for months.

**Action.** Rather than settle it in meetings, I ran a two-week spike that prototyped both approaches and load-tested them. I took the numbers, not opinions, to the leadership team and the investors. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. We also agreed written criteria for when any further module would earn its own service, so the debate wouldn't restart every quarter.

**Result.** The first extracted module shipped in six weeks. The busiest endpoints got about 40% faster, the rest of the monolith stayed stable all the way through the acquisition, and nobody had to do a big-bang rewrite.

**Reflection.** Convincing people that "not rewriting everything" was the ambitious option took longer than the engineering. Benchmarking earlier would have shortened that argument. It's also the approach I'd bring to tendering and risk tooling: find the two flows that actually carry the volume, harden those, and leave the rest alone until there's evidence.

---

## 3. Integrating Alaya into Benevity's platform

**Likely question:** "Tell me about an integration-heavy system you designed" / "How do you work in a codebase you didn't build?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The organisation was about ten times bigger than Alaya, the stack was Java microservices instead of what I'd built, and the processes were completely different.

**Task.** Alaya's capabilities had to land inside Benevity's platform, and we still needed to ship new features while it happened.

**Action.** For the first month I mostly read: I mapped how the existing services talked to each other before proposing anything. Then I spent time with the platform and infrastructure teams so that when I did push a technical opinion, it came from someone they'd already worked with. From there I took on the role of architecture liaison for the Europe-facing product surface, which meant a lot of contract and boundary work between services owned by different teams.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Early on I tried to fix things that weren't actually broken, just unfamiliar. Slowing down and listening first made me far more effective, and it's what I'd do in the first month at a Series B company too, even with pressure to move fast.

---

## 4. Getting engineers to adopt AI tooling without authority

**Likely question:** "How do you lead without direct reports?" / "Tell me about deploying AI or agentic workflows."

**Situation.** At Benevity I was an IC with no reports, but I wanted two teams that didn't report to me to start using AI-assisted development in their daily work.

**Task.** Change how people worked without being able to mandate it.

**Action.** I started with three engineers who were already curious and built small internal demos showing time saved on real tasks, not toy examples. Lunch-and-learn sessions followed, with no mandate attached. The prompt templates that worked went into a shared repo so anyone could reuse them, and I wrote up concrete outcomes, like a PR review cycle that came down by about two hours.

**Result.** Within three months, around 70% of engineers on both teams were using AI-assisted review and generation, and I became the informal AI tooling lead across the org. Since then I've pushed further: most of my own engineering now runs through multi-agent workflows with Claude CLI and OpenClaw.

**Reflection.** The voluntary route was slower but it stuck, because people who chose the tools defended them to their peers. The lesson I'd carry into deal-gating tooling is about trust. Agents in a risk workflow get used only when the people relying on them can see why they flagged something, so I'd design the human review step and the audit trail before tuning the agent itself.

---

## Gaps to prepare for

- **AWS serverless depth.** The posting asks for deep Python and AWS serverless expertise. Be straight about which parts are hands-on (AWS, Python, event-driven integration) and which are transferable. Don't claim Lambda/Step Functions production depth that isn't there; talk about how you'd ramp, and ask what their current serverless footprint looks like.
- **Energy domain.** No direct energy background. The bridge is integration-heavy B2B platforms and enterprise contracting at Alaya. Ask about the tendering flow early in the conversation and show you've thought about it.
