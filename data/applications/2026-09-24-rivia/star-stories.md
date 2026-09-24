# STAR+R Stories: Senior AI Engineer @ Rivia (Zurich)

Rivia's interview has four stages: a meet and greet, a technical screen, a coding interview and a 3 to 4 hour team visit in Zurich. Their values ("In it to Win it", "Embrace change", "Why not?", "Find the gap", "Collective accountability", "Value add solutions") point to the behavioral angles they'll probe: end-to-end ownership, pragmatic delivery under ambiguity, decisions backed by measurement, and working across Product, Sales and Customer teams. The four stories below cover those. Each is told in first person and meant to be spoken, not read.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about something you owned end to end." / "How do you work in a fast-moving startup?" / "In it to Win it"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, only a business side that was already talking to its first enterprise prospects.

**Task.** My job was to build the whole platform, first on my own and then with a small team, fast enough that sales had something real to show, but without painting us into a corner we'd pay for later.

**Action.** I picked a stack I knew would hold up without heroics: Node.js, React and PostgreSQL. The first three months went into getting a demo-ready core, because until a client could click through it, every architecture conversation was theoretical. After that I grew it piece by piece, adding multi-tenancy, an API layer, impact reporting and postal campaigns as clients asked for them. When we could hire, I brought on the first three engineers and set up the basics I didn't want to retrofit later: CI/CD, code review as a habit rather than a gate, and architecture notes that someone new could actually read.

**Result.** The platform reached production with 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued above $1B, acquired us. The technical choices went through their due diligence and held up.

**Reflection.** Two things I'd do differently. Observability came too late; we only added proper APM once problems were already hurting. And retrofitting multi-tenancy cost far more than designing for it on day one would have. For Rivia the parallel is obvious: in a regulated domain, tracing and evaluation aren't something you bolt on after the first customer, they're part of the first version.

---

## 2. Settling a monolith vs. microservices debate with data

**Likely prompts:** "Tell me about a technical trade-off." / "How do you decide when evidence is incomplete?" / "Find the gap"

**Situation.** At Alaya, our monolith was starting to crack under load on a few busy endpoints. The team was split between a full microservices rewrite and staying put, while investors wanted new features, not a rewrite.

**Task.** I needed a decision we could defend to engineers and investors alike, one that fixed the scaling problem without stopping delivery for months.

**Action.** Instead of letting the debate run on opinions, I ran a two-week spike and prototyped both directions with load tests against realistic traffic. I brought the numbers to the leadership team and investors and proposed a middle path: a strangler fig migration where we'd pull out only the two highest-traffic modules and leave everything else in the monolith. We also agreed in writing on the criteria that would justify extracting anything further, so the question wouldn't reopen every sprint.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable through the acquisition, and nobody had to live through a big-bang rewrite.

**Reflection.** The hard part wasn't technical; it was convincing people that not rewriting everything was the ambitious choice. Measurement ended the argument. That's the same instinct I'd bring to Rivia's eval work: set up the gold set and the metric first, then let the experiment decide which model, prompt or retrieval strategy wins.

---

## 3. Getting two teams to adopt AI-assisted engineering without authority

**Likely prompts:** "How do you stay current with the LLM ecosystem?" / "Tell me about influencing without authority." / "Embrace change" / "Why not?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced that LLM tooling could change how our engineers worked, but the two teams I wanted to reach didn't report to me, and plenty of people were skeptical.

**Task.** I wanted AI-assisted development to become part of the daily workflow for those teams, and I couldn't order anyone to use it.

**Action.** I started small, with three engineers who were already curious. With them I built internal demos on real tasks from our backlog, rather than toy examples, so the time savings were visible on work people recognized. Then came informal lunch-and-learn sessions with no mandate attached. I wrote reusable prompt templates, committed them to a shared repo so they were versioned and reviewable like any other code, and kept track of concrete wins, like a PR review cycle that went about two hours faster.

**Result.** Within three months, roughly 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck. People who adopted it on their own became its advocates, which no top-down decree would have produced. I also learned to treat prompts like code: versioned, reviewed, and measured against what they were supposed to improve. That habit maps straight onto LLMOps.

---

## 4. Integrating Alaya into Benevity after the acquisition

**Likely prompts:** "Tell me about working across teams and functions." / "Collective accountability" / "Describe a time you had to adapt."

**Situation.** After the 2021 acquisition, I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times larger than Alaya's, with a Java microservices codebase, different processes and a different culture.

**Task.** Alaya's capabilities had to be folded into Benevity's platform while new features kept shipping, and we couldn't lose the delivery speed that made the acquisition worth doing.

**Action.** I spent the first month mapping the existing architecture before proposing anything. I built relationships with the platform and infrastructure teams before pushing technical opinions, which bought me credibility when I did push. Over time I became the cross-team architecture liaison for the Europe-facing product surface, sitting between product, platform and the teams consuming our work.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling across two teams.

**Reflection.** Early on I moved too fast, trying to fix things that weren't actually broken in the new org. Slowing down and listening first made me far more effective. Joining Rivia would be a smaller version of that shift: a new domain (clinical data), people who know it far better than I do, and a clear case for learning the workflow before redesigning it.

---

## Handling the gap question honestly

Expect some version of "Tell me about a production agentic system you shipped in a complex domain." Don't stretch the record. My hands-on AI work covers LLM integration, multi-agent workflows, embeddings and semantic search, and AI-augmented engineering at org scale; clinical trials and GxP-style regulation are new to me. A good answer names that directly, then shifts to what carries over: owning systems end to end with nobody to escalate to, putting measurement ahead of opinion (story 2), and treating prompts and evals as versioned engineering artifacts (story 3). Close with a real question, like how they build gold sets when clinical reviewers disagree, or how they trace an agent's output back to source data for an auditor.
