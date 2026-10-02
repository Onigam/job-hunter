# STAR+R Stories: Kuro, Head of Engineering

Kuro is 16 people, five of them engineers, with two repeat founders and a €10M round led by UVC Partners. The posting asks for a player-coach who owns the roadmap, infrastructure and architecture, builds AI and document pipelines by hand, hires the team, and sits in strategy calls with Lea and Jonas. They also mention a Railway to AWS migration that's already under way. The stories below map to those needs. Keep each spoken answer to about two minutes and let them pull on the details.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from zero." "Have you scaled a B2B SaaS team from nothing?" "What would you do in your first 90 days here?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. We had no product, no customers and no code, and the business side was already talking to enterprise prospects, so the clock was running before the first commit.

**Task.** I had to build the whole platform, alone at first and then with a small team, in a way that would hold up once real companies started depending on it.

**Action.** I chose a stack I could move fast on without boxing us in: Node.js, React and PostgreSQL. The first three months went into a demo a client could actually click through, and very little else. After that I expanded in the order customers pulled us, which meant an API layer, impact reporting, multi-tenancy and then postal campaigns. When I hired the first three engineers, I set up CI/CD, code review and short architecture docs right away, because I knew I couldn't keep every decision in my own head for much longer and didn't want the team waiting on me.

**Result.** The platform ran in production for 50+ enterprise clients across Switzerland and France. In 2021 Benevity, a Canadian unicorn valued above $1B, acquired Alaya, and their diligence went through the codebase and architecture, so it was a fairly direct check on the technical calls.

**Reflection.** Observability came too late. We added proper APM only after a few incidents we couldn't explain quickly. Multi-tenancy was also retrofitted, which cost more than designing for it on day one would have. At Kuro both lessons apply directly: enterprise contractors will expect clean tenant isolation of their project data, and the Langfuse and Datadog setup you already have is the right instinct, so I'd keep investing there rather than treat it as overhead.

---

## 2. A hard architecture call under delivery pressure

**Likely questions:** "Walk me through a big technical trade-off." "How would you run the AWS migration without stalling the roadmap?" "How do you handle tech debt with founders who want features?"

**Situation.** A few years into Alaya, our monolith was starting to show cracks under load. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted new features, not a rewrite.

**Task.** Make a call we could defend on both fronts, long-term scalability and the delivery pressure in front of us.

**Action.** Rather than settle it by argument, I ran a two-week spike that prototyped both approaches and load-tested them. I took the results to the CTO and the investors as numbers, not opinions. What I proposed was a strangler fig: pull out the two highest-traffic modules first, leave everything else in the monolith, and write down the criteria that would justify extracting anything further. That last part mattered, because it turned future debates into a checklist instead of a fight.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Convincing people that not rewriting everything was the right call was harder than the engineering. Data settled it, and I'd benchmark earlier next time to shorten the debate. For the Railway to AWS move I'd use the same shape: migrate the piece with the clearest payoff first, probably the document processing workers where compute cost and scaling control matter most, keep the API where it is until there's a reason to move it, and agree the exit criteria with the founders upfront.

---

## 3. Joining a much bigger organization after the acquisition

**Likely questions:** "Tell me about a time you had to adapt to a new environment." "How do you work with founders and non-engineering stakeholders?" "Tell me about a time you were wrong."

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, with a Java and microservices codebase, different processes and a different culture.

**Task.** Bring Alaya's capabilities into Benevity's platform while still shipping new features, and without losing the speed we'd had as a small company.

**Action.** My first instinct was to start fixing things, and I did push a few changes too early on things that weren't actually broken. I corrected course and spent the first month mapping the existing architecture before proposing anything else. I also made a point of building relationships with the platform and infra teams before arguing technical positions with them. Over time that turned into a role as the cross-team architecture contact for the Europe-facing product surface.

**Result.** We migrated Alaya's core features into Benevity's platform. I contributed to three major cross-team architecture decisions and became the person people came to for AI tooling across two engineering teams.

**Reflection.** Listening first made me more effective, and it's what I'd do in the first weeks at Kuro too. Five engineers have already built a product that 12 enterprise customers use daily. They know where the bodies are buried, and a new Head of Engineering who rewrites their decisions in month one loses the team fast.

---

## 4. Changing how engineers work without a mandate

**Likely questions:** "How do you bring AI into the engineering workflow?" "How do you lead people who don't report to you?" "How would you raise the bar on a small team without slowing it down?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted review and code generation could save real time, but the two teams I wanted to bring along didn't report to me, and a lot of engineers were reasonably skeptical given how noisy the early tools were.

**Task.** Change how two teams worked every day without a mandate, and without burning trust on a tool that might not deliver.

**Action.** I treated it as a prototype rather than a rollout. Three engineers who were already curious worked with me on real PRs, not toy examples, so we could see where the tools helped and where they just produced confident nonsense. Whatever worked became a prompt template in a shared repo that anyone could read, fork or fix. Then came informal lunch sessions that were simply demos on our own code. One example that travelled well was a review cycle that went about two hours faster. I never pushed anyone, and the early adopters did most of the convincing.

**Result.** Within roughly three months, about 70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** The opt-in approach stuck better than a decree would have, but I'd measure earlier. We had anecdotes and a few timed examples, not a proper baseline. At Kuro the same discipline belongs on the product side: define the signal before building, for example how often a contractor corrects an extracted spec value or how many hours a bid estimate takes, so model and prompt changes get judged on numbers rather than on how the demo felt.

---

## Gaps to prepare for honestly

**Team size.** The posting says "ideally scaled a B2B SaaS company from 0 to 10 people." At Alaya I hired the first three engineers. Don't inflate that. Frame it as having built the engineering function and its habits from nothing, and be ready to talk about how you'd hire from five to ten or more: what profile comes first (likely a senior infra or platform engineer for the AWS move, then applied AI), how you'd run the four-hour technical challenge fairly, and how you'd keep the founders in the loop without making them the bottleneck.

**AI document pipelines in production.** Your hands-on AI work is LLM integration, multi-agent workflows, semantic search and embeddings, plus the tooling adoption at Benevity. Be specific about what you've built and curious about how they run extraction, evals and model routing across Azure, OpenAI, Gemini and Cohere. Ask how corrections flow back into the system, since "it learns from corrections" is central to their pitch.

**On-site in Berlin.** Decide before the first call what you'd actually accept (full relocation, or something like three weeks a month in Berlin) so the answer is clear and consistent.
