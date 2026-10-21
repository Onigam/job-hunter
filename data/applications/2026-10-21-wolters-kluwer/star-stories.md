# STAR+R Stories: Wolters Kluwer, Principal Full Stack Engineer, AI Platform & Agents

Role signals from the posting: "manager of one" ownership, full-stack delivery from concept to production, platform components that let hundreds of teams build and ship agents, evals and canary/rollback as first-class tooling, secure SDLC and privacy by design, mentoring, and cross-functional work with product, UX and clinical or legal domain experts. The interview loop includes two live coding rounds, a systems design round and a past-work presentation. They ask candidates not to use AI tools during interviews, so rehearse these out loud without notes.

One honest gap to own early: Magino hasn't shipped a customer-facing LLM agent with formal safety evals in a regulated domain. The stories below don't claim that. They show the platform, ownership and AI-adoption experience, and each one ends with a bridge to what the team actually does.

---

## 1. Statement of Exceptional Work: Alaya, from blank page to acquisition

**Likely questions:** "Walk us through the project you are proudest of." / "Tell me about something you owned end to end." / This is also the backbone of the past-work presentation.

**Situation.** I co-founded Alaya in 2016. There was no product and no customers, and the business side was already talking to enterprise prospects who expected to see something working.

**Task.** My job was to build the whole platform, alone at first, and get it in front of clients fast enough that sales had something real to sell.

**Action.** I picked a stack I knew could carry us without heroics, Node.js, React and PostgreSQL, and got the core features to a demo in roughly three months. From there it was steady expansion: multi-tenancy, an API layer, impact reporting, postal campaigns. Once the company outgrew a solo engineer I hired and onboarded the first three engineers, and put in the things I'd want on any team, CI/CD, code review, and architecture docs people actually read.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021. Their technical due diligence went through the platform I'd built, which is about as direct a validation of early decisions as you can get.

**Reflection.** Proper APM came far too late, and retrofitting multi-tenancy cost more than designing for it from day one would have. Both lessons carry straight over to an agent platform: cost and quality telemetry need to exist before the first agent ships, and tenant boundaries between product teams belong in the data model, not in a later cleanup.

**Bridge to Wolters Kluwer.** A central GenAI platform used by hundreds of product teams is a multi-tenant platform first. I've lived with the consequences of getting that boundary wrong, which is a useful thing to bring to a team that has 20+ agents live and more coming.

---

## 2. A hard architecture call with data instead of opinions

**Likely questions:** "Tell me about a technical trade-off you made." / "How do you handle tech debt when the business wants features?" / Good warm-up for the systems design round.

**Situation.** With a few dozen enterprise clients on Alaya, our monolith was cracking on its busiest endpoints. The team was split between a full microservices rewrite and leaving things alone, and our investors had made it clear they wanted features, not a rewrite.

**Task.** It was on me to make a call the team could stand behind without freezing the roadmap for a quarter.

**Action.** Rather than argue it out in meetings, I ran a two-week spike, prototyped both directions and load tested them against our real traffic patterns. The numbers made the conversation with the CTO and investors much shorter than I'd feared. What I proposed was a strangler fig: extract the two highest-traffic modules, keep everything else in the monolith, and write down the criteria that would justify pulling out anything further. That written criteria turned out to matter more than I expected, because every later debate started from it instead of from zero.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got ~40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the right answer was harder than the engineering. Next time I'd benchmark earlier and shorten the debate.

**Bridge to Wolters Kluwer.** Agent work is full of this kind of decision: routing to a cheaper model, adding a retrieval step, swapping a framework. The posting talks about lowering latency and cost per query while improving trust and safety metrics. That's the same habit, measure both options against real traffic and agree on the criteria before arguing about the answer. Evals are the load tests of this world.

---

## 3. Changing how engineers work without being their manager

**Likely questions:** "How do you influence without authority?" / "Tell me about mentoring." / "How do you drive adoption of a platform?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two teams that didn't report to me to adopt AI-assisted development, and nobody had asked for it.

**Task.** The goal was to change daily habits across both teams without a mandate behind me.

**Action.** I started with the three engineers who were already curious and built small internal demos around their real work, so the time savings were visible on tickets they recognised. Then came informal lunch-and-learn sessions, no slides about the future of AI, just live demos. Reusable prompt templates went into a shared repo so nobody had to start from scratch, and I wrote up concrete results as they came in, like a PR review cycle that dropped by about two hours.

**Result.** Within three months roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower but it stuck. The engineers who adopted it on their own terms became its advocates, which no top-down decree would have produced. If I did it again I'd measure the baseline before starting, so the before and after numbers were cleaner.

**Bridge to Wolters Kluwer.** A central platform only matters if product teams choose to build on it. Getting hundreds of teams to use shared agent tooling, eval harnesses and deployment paths is an adoption problem as much as a technical one, and it's the same playbook: make the first win obvious, make the second one cheap.

---

## 4. Joining a much larger org after acquisition

**Likely questions:** "Tell me about a time you had to adapt." / "How do you work across teams?" / "Tell me about a mistake."

**Situation.** After the 2021 acquisition I joined Benevity on an engineering org about ten times the size of Alaya, with a different culture, a Java microservices codebase and processes I didn't know.

**Task.** I had to bring Alaya's capabilities into Benevity's platform while keeping the product velocity we'd built as a startup.

**Action.** My first instinct was to fix things quickly, and that was a mistake I caught within weeks. So I stepped back and spent about a month mapping the existing architecture before proposing changes, and I built relationships with the platform and infra teams before pushing any opinions. Over time I became the cross-team architecture contact for the Europe-facing product surface, which gave me a seat in the decisions that mattered.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Moving too fast on things that weren't actually broken cost me some early credibility. Listening first made everything after it easier.

**Bridge to Wolters Kluwer.** The Central GenAI Platform team sits between 100 engineers and product groups in healthcare, legal, tax and compliance, each with domain experts who know things I don't. The habit of mapping before proposing is how I'd approach the first month there, especially around something like UpToDate where clinical guideline fidelity sets the bar.

---

## 5. Working with agents every day (use if asked about LLM experience directly)

**Likely questions:** "What's your hands-on experience with LLMs and agents?" / "How do agents fail?"

**Situation.** Over the last couple of years my own work has shifted from writing every line myself to orchestrating multi-agent workflows with Claude CLI and OpenClaw for real engineering tasks.

**Task.** I wanted that setup to produce work I'd actually merge, not demos.

**Action.** Most of the effort went into structuring context: what each agent sees, what tools it's allowed to call, and how its output gets checked before anything lands. I've also built LLM integrations with semantic search and embeddings, which is where I learned that retrieval quality usually matters more than the prompt.

**Result.** It's now my default way of working and it noticeably raises how much I can ship alone.

_Note: keep this qualitative. There is no clean measured number, so don't invent one._

**Reflection.** The failure modes are real and they're quiet: agents confidently filling gaps, drifting from instructions on long tasks, or passing a check that tested the wrong thing. That's exactly why I don't trust an agent change without an eval behind it.

**Bridge to Wolters Kluwer.** Be upfront that this is internal engineering use, not a production customer-facing agent with formal safety evals and A/B tests. Then talk about how you'd close that gap: LangGraph and MCP are learnable quickly, and the instincts around context, tool permissions and evaluation already carry over.

---

## Questions to ask them

1. For UpToDate Expert AI, how is guideline fidelity measured today, and who owns the eval sets, engineering or clinical experts?
2. What does a product team need to do to ship a new agent on the platform, and where does that path hurt most right now?
3. How do canary and rollback work for a prompt or model change compared with a code change?
4. What does "manager of one" look like in practice for a principal on a sub-team of under ten?
5. Can the role be employed from Switzerland, and through which entity?
