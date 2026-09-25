# STAR+R Stories: Clera, Staff Engineer (founding), Munich

Picked for what a founding Staff Engineer interview at a seed-stage AI company will probe: building from zero, architecture calls that avoid dead-ends, raising standards without slowing the team, mentoring, and hands-on AI work.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "How do you handle ambiguity as the first engineer?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no codebase, just a business team that was already talking to large companies in Switzerland and France.

**Task.** I had to build the whole platform, alone at first, and get it in front of enterprise buyers quickly enough that the sales conversations didn't go cold.

**Action.** I went with a boring stack on purpose: Node.js, React and PostgreSQL, things I knew would hold up and that I could hire for. The first three months went into the core features we needed for a real demo, and nothing else. Once clients signed, I grew it out in layers: multi-tenancy, a proper API, impact reporting, and later postal campaigns, which nobody had planned for but customers kept asking about. When I hired the first three engineers, I set up CI/CD, code review and short architecture docs early, because I didn't want everything living in my head.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021. Their technical due diligence went through the stack we'd built from day one.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM once problems were already hurting customers. And retrofitting multi-tenancy cost us more than designing for it would have. At a company that already has several products, I'd make tenancy and tracing decisions in the first weeks, not the first year.

---

## 2. Choosing not to rewrite: the strangler-fig migration

**Likely questions:** "Tell me about an architecture decision you owned." / "How do you avoid long-term dead-ends?" / "How do you deal with tech debt under delivery pressure?"

**Situation.** A few years into Alaya, the monolith was showing cracks on its busiest endpoints. Half the team wanted a full microservices rewrite. Investors wanted features, not a rewrite, and they weren't wrong to worry about one.

**Task.** I needed to make a call we could defend on both fronts: fix the scaling problem without freezing the roadmap for months.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and built rough prototypes of both approaches, then load-tested them. The numbers made the case better than I could. I took the trade-offs to the leadership team and investors, and proposed extracting only the two highest-traffic modules while leaving the rest of the monolith alone. We also wrote down clear criteria for when another module would be worth pulling out, so the question wouldn't come back every sprint.

**Result.** The first extracted module shipped in six weeks, and performance on those endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was convincing people that not rewriting was the ambitious option. I'd bring benchmarks in even earlier next time; the debate lasted longer than the spike did.

---

## 3. Raising engineering standards without a mandate

**Likely questions:** "How do you raise the bar on a team?" / "How do you influence engineers who don't report to you?" / "Tell me about mentoring."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I thought AI-assisted development could save the teams around me real time on reviews and routine code, but two of those teams had no reason to change how they worked because I said so.

**Task.** Get engineers to actually adopt better practices, and keep them, without any authority to require it.

**Action.** I started with three engineers who were already curious and worked alongside them on their own PRs, so the gains were theirs rather than mine. From there I ran informal lunch sessions that were only demos, no slides and no mandate. We put reusable prompt templates in a shared repo, and I wrote up concrete wins as they happened, like a review cycle that dropped by a couple of hours. A lot of the mentoring happened in code review and pairing, which is where people actually pick up habits.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation regularly, and I became the informal go-to for AI tooling across the org.

**Reflection.** It was slower than a top-down rollout would have been, but it stuck. The engineers who adopted it on their own terms became its best advocates. That's how I'd approach raising standards in a small team too: show, pair, and let the results speak.

---

## 4. Joining a much larger engineering org after the acquisition

**Likely questions:** "Tell me about a time you were wrong." / "How do you work across teams?" / "How do you land in an existing codebase?"

**Situation.** After the acquisition in 2021 I moved from a small team I'd built to an engineering org roughly ten times larger, with a Java microservices codebase and processes that looked nothing like ours.

**Task.** Bring Alaya's capabilities into Benevity's platform while keeping the product moving.

**Action.** My first instinct was to fix things quickly, and I pushed a few opinions too early on systems I didn't fully understand yet. That didn't land well. So I changed approach: I spent about a month mapping the existing architecture, built relationships with the platform and infrastructure teams, and only then started proposing changes. Over time I became the architecture liaison for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into the Benevity platform, and I contributed to three major cross-team architecture decisions during that period.

**Reflection.** Listening first made me far more effective than being right early. For a founding role it cuts the other way, since you have to make calls quickly, but I'd still spend the first weeks reading the code and asking why before proposing to change anything.

---

## 5. Hands-on LLM work in production (prep notes)

**Likely questions:** "What have you built with LLMs?" / "How would you design our LLM pipeline?"

This one isn't a full story in the bank yet, so prepare it before the interview with a specific example from Benevity: an LLM integration, a semantic search or embeddings feature, or a multi-agent workflow you worked on. Be ready to talk through how you evaluated output quality, what you did about latency and cost, and where you kept a human in the loop. For a sales automation product, expect follow-ups on prompt versioning, evaluation sets built from real customer conversations, and what happens when the model sends something wrong to a prospect. Stick to what you actually shipped; don't stretch it.
