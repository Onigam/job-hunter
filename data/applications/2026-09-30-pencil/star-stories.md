# STAR+R Stories: Pencil, Head of Agent Architecture (EMEA, Remote)

These are picked for what the posting weighs most: owning a shared agent architecture across 1,000+ brands, "evaluation obsession", leading and hiring a small team of Agent Architects, being the escalation point for hard client deployments, and working inside an acquired company (Pencil has been part of The Brandtech Group since 2023).

All facts come from `profile/star-bank.md`. Where a story needs a detail you haven't written down yet, it's flagged in brackets. Fill those with real specifics before the interview and don't improvise them.

---

## 1. Building a multi-tenant platform from zero (Alaya)

**Likely questions:** "Tell me about something you built from scratch." "How would you design a system that serves 1,000 brands with different voices?" "How do you handle ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, while the business side was already talking to its first enterprise clients.

**Task.** My job was to architect and build the whole platform, alone at first, and then grow a team around it without slowing the sales conversations down.

**Action.** I picked a stack that wouldn't need heroics to scale: Node.js, React and PostgreSQL. The first demo-ready version took about three months. From there we grew it in layers, adding a multi-tenant architecture, an API layer, impact reporting and postal campaigns as clients asked for them. Once the product had real users, I hired and onboarded the first three engineers and put the basics in place so they could move without me in every decision, which meant CI/CD, a code review culture and written architecture docs.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France. Benevity, a Canadian company valued above $1B, acquired Alaya in 2021, and the technical decisions from those early years held up through due diligence.

**Reflection.** Two things I'd change. We added proper APM late, and I'd put observability in from the start. The bigger one is multi-tenancy: we retrofitted it, and that cost far more than designing for it on day one would have. That's the part I'd bring straight to Pencil. A brand's voice, guardrails and approval rules are tenant configuration, and if they end up hardcoded into forked prompts you get a thousand libraries nobody can evaluate.

---

## 2. A hard architecture call, settled with measurement (Alaya)

**Likely questions:** "Tell me about a technical trade-off you made." "How do you decide when something is ready to ship?" "How do you present trade-offs to senior stakeholders?"

**Situation.** Alaya's monolith was starting to crack under load. The team was split between a full microservices rewrite and keeping a modular monolith, and the investors wanted new features, not a rewrite.

**Task.** I had to make a call we could defend on both fronts: long-term scalability and the delivery pressure we were under right then.

**Action.** Instead of letting the debate run on opinion, I set up a two-week spike where we prototyped both approaches and load-tested them. I took the numbers, not a preference, to the leadership and the investors. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. We also wrote down explicit criteria for when any further module would earn its extraction, so the same argument wouldn't come back every quarter.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hardest part was convincing people that not rewriting everything was the right answer, and the data is what made that possible. I'd benchmark even earlier next time to cut the debate short. It's the same instinct behind "unmeasured prompts shouldn't ship": for agent workflows I'd want failure rate, token cost, latency and a brand-alignment score on a fixed eval set before anyone argues about which orchestration pattern is better.

---

## 3. Changing how two teams work, without authority (Benevity)

**Likely questions:** "How do you influence without authority?" "How do you get a new core agent or pattern adopted across the platform?" "Tell me about leading people."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams, neither of which reported to me, to adopt AI-assisted development.

**Task.** The goal was to change daily habits across both teams without a mandate and without being anyone's manager.

**Action.** I started small, with three engineers who were already curious. For them I built internal tooling demos that showed time saved on real work rather than on toy examples. Then came informal lunch-and-learn sessions, purely demos with no obligation attached. The prompt templates that worked went into a shared repo so people could reuse them instead of starting from nothing, and I wrote up concrete results as we went, for example a PR review cycle that came out about two hours shorter.

**Result.** Within three months, about 70% of engineers on both teams were using AI-assisted code review and generation. I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. Engineers who picked it up on their own terms defended it to their peers, which a top-down decree wouldn't have produced. The posting lists "core agent adoption across the platform" as a success metric, and I'd treat it the same way: make the shared agents and prompt library measurably better than what teams build alone, publish the numbers, and let adoption follow.

---

## 4. Working inside an acquisition (Alaya into Benevity)

**Likely questions:** "Tell me about navigating big organizational change." "How do you work across Product, Engineering and Sales leadership?" "How would you approach your first 90 days here?"

**Situation.** After the 2021 acquisition I joined Benevity as a Senior Staff Engineer, on a team roughly ten times the size of Alaya. The culture was different, the processes were different and the codebase was different too, Java and microservices rather than what we'd built.

**Task.** We needed Alaya's capabilities running inside Benevity's platform while new features kept shipping, and without losing the delivery speed we'd had as a startup.

**Action.** For the first month I mostly mapped how the existing architecture worked before proposing anything. I spent time with the platform and infra teams and got to know them before I started pushing technical opinions. Over time I became the cross-team architecture contact for the Europe-facing product surface, and I also drove the AI-assisted workflow adoption from story 3.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person both teams went to for AI tooling.

**Reflection.** At first I moved too fast and tried to fix things that weren't broken in the new org. Slowing down and listening first made me much more effective. Pencil sits inside Brandtech in a similar way, with agencies and sister products around it, so my first weeks would look alike: understand how deployments actually fail today and who the escalation paths already run through, then propose changes.

---

## 5. Hiring and setting the bar for a first team (Alaya)

**Likely questions:** "Tell me about hiring and developing technical talent." "How would you build a team of Agent Architects?" The posting asks for a hiring track record explicitly, so expect this one.

**Situation.** Once Alaya had paying clients, I couldn't carry the platform alone anymore, and the first hires were going to set the culture for everyone who came after.

**Task.** My job was to hire the first three engineers and make them productive quickly, without the codebase depending on what was in my head.

**Action.** I ran the hiring myself. [Add: how you sourced candidates, what the interview or exercise looked like, and what you screened for.] When each of them started, the onboarding rested on the things I'd put in place for this reason: CI/CD so nobody was scared to ship, a code review culture that was about learning rather than gatekeeping, and architecture docs that explained why decisions were made, not only what they were. [Add: one concrete moment where you developed someone, such as a person you gave ownership of a module to.]

**Result.** The three of them made up the core team that took the platform to 50+ enterprise clients and through the acquisition. [Add: whether they stayed through the acquisition and what they went on to own.]

**Reflection.** [Write your own. One honest angle: what you'd screen for differently when hiring Agent Architects, who need to be half engineer and half consultant, able to turn a creative brief into a spec and defend it in front of a client.]

---

## Prep notes for the harder questions

**"The role asks for 8+ years of direct GenAI experience."** Don't stretch this. Say it plainly: 17 years of architecture and distributed systems, with the last few focused on LLM integration, embeddings, semantic search and multi-agent workflows. Then argue that the hard parts of this job, meaning multi-tenant design, evaluation discipline, adoption across teams and client escalations, are architecture and leadership problems more than model problems.

**"2+ years leading people or a function."** You were Head of Technologies at Alaya for about five years and hired the first team, and you then led AI tooling as a function at Benevity without formal authority. Keep the two clearly separate and don't present the Benevity period as people management.

**Client-facing work.** The posting wants someone to lead discovery on high-stakes engagements. The best material is early Alaya, when you were building while the business signed its first enterprise clients. [Add a specific client situation if you have one: a difficult requirement, a deployment that went wrong, a trade-off you explained to a client's leadership.]

**Location.** The LinkedIn listing says remote within the European Union. Switzerland isn't in the EU, so raise it early with the recruiter and have an answer ready (contractor, EOR, or a UK or EU entity through Brandtech).
