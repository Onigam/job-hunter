# STAR+R Stories: Wolters Kluwer, Lead/Staff Full Stack Engineer, AI Platform & Agents

The loop is a 15-minute screen, two live coding rounds, one system design round and a presentation of past work. Wolters Kluwer states that interviews must be done without AI assistance and that AI-generated responses lead to disqualification, so treat these as notes to rehearse out loud until they sound like you, not as scripts to read. Story 1 doubles as the backbone of the past-work presentation and the "Statement of Exceptional Work" in the application.

---

## Story 1: Building Alaya from a blank page to acquisition

**Likely prompts:** "Present a project you're proud of." / "Tell me about delivering software in a small, fast-moving team." / "How do you handle ambiguity?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. We had no product, no customers and no code, while the business side was already talking to its first enterprise prospects.

**Task.** My job was to design and build the whole platform, alone at first, and get it in front of customers fast enough that those conversations turned into contracts, without painting us into a corner we'd pay for later.

**Action.** I went with a stack I knew could carry us for years without heroics: Node.js, React and PostgreSQL. The core features were built in roughly three months so we had something real to demo. After that it was a steady expansion, adding multi-tenancy, an API layer, impact reporting and postal campaigns as clients asked for them. Once there was enough traction, I hired and onboarded the first three engineers and put the basics in place that let other people ship safely: CI/CD, code review as a habit, and architecture docs someone could actually read on their first week.

**Result.** The platform went to production and grew to 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian company valued above $1B, acquired Alaya, which was about as clear a signal as you can get that the technical and product bets had held up.

**Reflection.** Two things I'd change. Observability came too late; we added proper APM once problems were already visible to customers, and I'd now put it in from the first deploy. Multi-tenancy was retrofitted, and that cost more than designing for it upfront would have. For an AI platform the equivalent lesson is evaluation and tracing: if you can't see what an agent did and why, you're debugging from customer complaints.

---

## Story 2: Choosing a strangler fig over a rewrite

**Likely prompts:** "Tell me about an architecture decision you led." / "How do you balance delivery pressure against technical debt?" / Good lead-in for the system design round.

**Situation.** A few years into Alaya, the monolith was showing cracks under load on its busiest endpoints. Inside the team, people were split between a full move to microservices and a modular monolith. Investors, meanwhile, wanted new features and had little appetite for anything that sounded like a rewrite.

**Task.** I needed to land on a decision we could defend to both groups, one that fixed the scaling problem without stopping feature delivery for months.

**Action.** Rather than arguing it out in meetings, I ran a two-week spike and built small prototypes of both approaches, then load tested them. The numbers went to the CTO and investors as trade-offs, not as a recommendation dressed up as fact. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. We also wrote down the criteria that would justify extracting the next module, so the question wouldn't get relitigated every sprint.

**Result.** The first extracted module shipped in six weeks, and performance on the busiest endpoints improved by about 40%. The rest of the monolith stayed stable all the way through the acquisition, and nobody had to sit through a big-bang rewrite.

**Reflection.** Convincing people that "don't rewrite everything" was the ambitious option took longer than the engineering did. Data settled it. Next time I'd benchmark earlier and shorten the debate. The written extraction criteria turned out to be the most useful artifact, and I'd use the same approach for deciding when a capability belongs in a shared AI platform versus inside a single agent team.

---

## Story 3: Driving AI-assisted development without authority

**Likely prompts:** "How do you mentor or influence engineers who don't report to you?" / "Tell me about introducing a new practice." / Staff-level leadership questions.

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how our engineers worked, but the two teams I wanted to bring along didn't report to me and had no reason to take my word for it.

**Task.** Get engineers to change their daily workflow voluntarily, and make it stick past the novelty.

**Action.** I started with three engineers who were already curious and worked with them on their real tickets, not toy examples. When we had concrete wins, like cutting about two hours off a PR review cycle, I wrote them down. From there it spread through informal lunch-and-learn sessions where I just demoed what worked, with no mandate attached. The prompt patterns that kept proving useful went into a shared repo as templates, so people could pick them up without needing me in the room.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation. I ended up as the informal AI tooling lead for the org, a role nobody assigned.

**Reflection.** It was slower than a top-down rollout would have been, but it held. The engineers who adopted it on their own terms became the ones advocating for it. What I'd add now is a more rigorous way of measuring quality, not just usage, because adoption alone doesn't tell you whether the output is getting better.

---

## Story 4: Joining a much larger org after the acquisition

**Likely prompts:** "Tell me about a time you had to adapt to a new environment." / "How do you work across product, UX and other engineering teams?" / "Tell me about a mistake."

**Situation.** After Benevity acquired Alaya in 2021, I went from a small team I'd built to an engineering org around ten times bigger, with a Java and microservices codebase, different processes and a very different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while keeping up the feature velocity we'd had as a startup.

**Action.** My first instinct was to start fixing things, and some of that early push landed badly because I was fixing things that weren't broken. So I reset. I spent about a month mapping the existing architecture before proposing changes, and I invested time with the platform and infrastructure teams before pushing technical opinions at them. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became a go-to person for AI tooling across two engineering teams.

**Reflection.** Listening first made me far more effective than being right early. That's directly relevant to a central platform team: you serve teams that don't report to you, and they'll route around a platform they don't trust.

---

## Gaps to be ready for (answer honestly)

**Rust.** I haven't shipped Rust in production. Say so plainly and point to how quickly you've moved across stacks before (GWT at Sagemcom, desktop and hybrid apps at Castr, Node.js and React at Alaya, Java microservices at Benevity).

**LangChain/LangGraph, MCP, A2A, OpenSearch.** Only claim what you've actually built. If your multi-agent and semantic search work at Benevity used these, prepare one concrete example. If it didn't, describe the patterns you used (tool calling, retrieval over embeddings, routing between agents) and how they map onto these frameworks.

**Regulated domains (SOC2, HIPAA, clinical safety).** Frame around what you've done on secure delivery and enterprise client requirements at Alaya and Benevity, and ask how the team runs safety evaluations for UpToDate Expert AI. It's a good question in its own right.

**System design practice.** A likely prompt is something close to their real product: design a platform that lets teams build and evaluate grounded agents over a proprietary content corpus. Practice covering retrieval and citation, routing and tool use, offline eval sets plus online A/B testing, tracing and observability, guardrails for hallucination, and multi-cloud model access (Azure OpenAI, Anthropic on AWS, Gemini). Do it on a whiteboard, without AI help, at least twice before the round.
