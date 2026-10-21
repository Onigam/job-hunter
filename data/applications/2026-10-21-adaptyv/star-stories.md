# STAR+R Stories: Software Engineer, Lab Automation @ Adaptyv

Role context: on-site in Lausanne, building the orchestration layer that coordinates liquid handlers, plate readers, incubators and robot arms. Instrument drivers, multi-step protocols, failure handling, monitoring. Python/TypeScript, Supabase, Modal, PyLabRobot. Claude Code is expected as the default workflow. The posting is tagged entry level, so expect questions about why a Senior Staff Engineer wants an IC seat; see the note at the end.

---

## Story 1: Building Alaya from a blank page

**Likely questions:** "Tell me about something you built from scratch." / "How do you work when nobody tells you what to do next?" / "How self-directed are you?"

In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, and the business side was already talking to enterprise prospects who expected a demo soon. My job was to build the whole platform, alone at first, and then grow a team around it without slowing down.

I picked a stack I knew would hold up without heavy upfront engineering: Node.js, React and PostgreSQL. The first three months went into getting the core features good enough to demo. After that the platform grew piece by piece, with multi-tenancy, an API layer, impact reporting and eventually physical postal campaigns, which was the first time the product had to coordinate with something outside our own servers. When we hired, I brought in and onboarded the first three engineers and set up CI/CD, code review and architecture docs so they weren't relying on my memory.

The platform went into production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021.

Looking back, I'd have added proper observability much earlier. We bolted on APM late, and for a long time we were diagnosing production problems from logs and guesswork. For a lab where a failed run costs reagents and days, I'd treat monitoring as part of the first version and not a later improvement. Multi-tenancy was the other lesson; retrofitting it cost far more than designing for it would have.

---

## Story 2: Choosing a migration path under delivery pressure

**Likely questions:** "Tell me about a technical trade-off." / "How do you make decisions when the team disagrees?" / "How do you avoid one failure taking everything down?"

At Alaya our monolith started cracking under load. Half the team wanted a full microservices rewrite, the other half wanted to keep patching, and investors wanted features, not a rewrite. I had to make a call that wouldn't stall delivery but would also stop the platform from getting slower every month.

Rather than argue it out, I ran a two-week spike comparing both approaches with prototype load tests, then took the numbers to the CTO and investors. What I proposed was a strangler-fig migration: extract the two highest-traffic modules, keep everything else in the monolith, and write down clear criteria for when another module would earn its own service. That last part mattered, because it turned future arguments into a checklist.

The first extracted module shipped in six weeks and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable through the acquisition, and we never needed a big-bang rewrite.

The hardest part was social, convincing people that not rewriting everything was the ambitious option. Data won that argument, so next time I'd benchmark earlier and shorten the debate. There's an obvious parallel with instrument orchestration, too: isolating the parts most likely to fail, so a problem stays local, is the same instinct whether it's a hot endpoint or a flaky plate reader.

---

## Story 3: Making AI coding agents the default, without a mandate

**Likely questions:** "How do you use AI tools in your work?" / "Tell me about changing how a team works." / "Claude Code is our default workflow; what does that look like for you?"

At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how fast we shipped, but the two teams I wanted to bring along didn't report to me, and nobody likes being told to change their tools.

So I skipped the mandate. I started with three engineers who were already curious and built small internal demos that showed real time saved on real tasks. Then I ran informal lunch-and-learns and put reusable prompt templates in a shared repo, and whenever someone saved time, like the PR review cycle that came out about two hours shorter, I wrote it down so the next person had something concrete to look at.

Within about three months, ~70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org. Since then my own work has moved further toward orchestrating agents (Claude CLI, multi-agent workflows), and that's how I work day to day now.

It was slower than a top-down rollout would have been, but it stuck. People who chose the tools defended them. What I've learned since is that agents are only as good as the context and guardrails you give them, which matters a lot more when the code they write ends up moving a robot arm.

---

## Story 4: Learning a large unfamiliar system before changing it

**Likely questions:** "How do you get up to speed on something you've never touched?" / "How do you approach reverse-engineering or undocumented systems?" / "Tell me about working with people outside engineering."

After the acquisition I joined Benevity on a team roughly ten times the size of Alaya, with a different culture, a Java microservices codebase and processes I didn't know. I still had to get Alaya's capabilities into their platform and keep shipping new features while doing it.

My first instinct was to start fixing things, and in the first few weeks I pushed on a few areas that turned out not to be broken; they just worked differently from what I was used to. So I stopped proposing and spent the rest of that first month mapping how the system actually behaved before suggesting any changes. I also built relationships with the platform and infra teams before giving technical opinions, which made it much easier to be heard later.

We migrated Alaya's core features into Benevity's platform, I contributed to three major cross-team architecture decisions, and I ended up as the architecture contact for the Europe-facing product.

What I took from it is that observed behavior beats documentation every time. That's basically the job when you're reverse-engineering an instrument protocol over serial or TCP; you watch what the device does, write it down, and only then build the abstraction. I'd also bring the same habit to working with Adaptyv's scientists, which is to understand how they run a protocol by hand before automating it.

---

## Prep note: "Why this role, given your seniority?"

The posting is tagged entry level, so this will come up. The honest answer: I want to be hands-on with hard systems problems again, and coordinating physical instruments with real failure modes is harder and more interesting than another SaaS platform role. I'm not after a title. Be ready to say plainly that I'm comfortable taking direction from a lead who knows lab automation better than I do, and that the comp conversation will reflect experience rather than the label on the posting (see negotiation-script.md).

Gaps to own openly instead of covering up: I haven't used PyLabRobot, PyHamilton or Opentrons, and I've no biology background (the posting says that isn't required). Before interviews, clone PyLabRobot, read the backend abstraction for one liquid handler, and be able to talk about how it models resources and errors.
