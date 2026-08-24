# STAR Stories: Gusto, Staff Software Engineer, AI Developer Tools

Picked for a Staff role on an AI developer tools team: driving AI tooling adoption across teams that don't report to you, shipping LLM-backed and RAG-adjacent features into a real codebase, and the systems depth and architectural judgment the 8+ years bar is checking for.

---

## 1. Driving AI tooling adoption across teams with no formal authority

This is the one I'd lead with for this role. After the Benevity acquisition I ended up a Senior Staff IC with no direct reports, and at some point I decided the org needed to actually use AI-assisted development, not just talk about it in an all-hands. The two teams I wanted to change didn't report to me, so mandating anything was never an option. I started small: three engineers who were already curious, a handful of internal demos showing concrete time saved on real PRs, informal lunch-and-learn sessions with no agenda beyond "here's what this looks like." I built a shared repo of prompt templates so people didn't have to reinvent them, and wrote up specific wins, like shaving two hours off a review cycle, instead of making abstract claims about productivity. Within about three months, something like 70% of engineers across both teams were using AI-assisted review and generation as part of their normal workflow, and I'd become the person people pinged when that workflow broke. Looking back, the slower, no-mandate approach is what made it stick, people who opted in on their own terms ended up defending the practice to their own teammates. If I did it again I'd instrument usage from week one instead of relying on anecdotes to track how it spread.

---

## 2. Shipping LLM-backed features into an existing platform

One of my main threads at Benevity has been pushing LLM-backed features and embeddings-based semantic search into a codebase that predates any of it. The hard part was never wiring an API to a model, it was figuring out where a probabilistic system actually helped versus where it just added latency and cost for a party trick, and thinking through what happens when the model gets an input it wasn't expecting. I favored narrow first versions with heavy instrumentation over ambitious ones, because you learn more from watching real inputs fail than from a design doc. That's part of why I became the person other engineers pulled in when a new LLM idea needed a reality check on scope and risk, alongside the tooling adoption work above. What stuck with me is that the interesting engineering with probabilistic features isn't the happy path, it's building enough visibility to catch the long tail before users do, which is close to what "self-healing" AI infrastructure actually requires under the hood.

---

## 3. Building an AI-augmented practice inside a much larger, unfamiliar org

When Alaya got folded into Benevity in 2021, I went from a five-person team I'd built from scratch to one team among many inside a company running Java microservices at a scale Alaya never touched. My job was to keep shipping while helping integrate what we'd built, without pretending I already understood how the new org worked. I spent the first month mostly listening, mapping their architecture and sitting in on reviews before proposing anything. Once I had that picture, I started pushing AI-assisted workflows as one of the ways to close the velocity gap between what a five-person team could do and what a much larger org needed, work that fed directly into the tooling adoption story above. I ended up the informal architecture liaison for the Europe-facing product surface, contributing to three cross-team architecture decisions along the way. My first instinct, honestly, was to move fast and start fixing things that weren't actually broken, they just looked unfamiliar. Slowing down and mapping the system first is the discipline I'd bring to understanding Gusto's existing developer workflows before proposing changes to them.

---

## 4. Choosing a strangler-fig migration over a full rewrite under investor pressure

At Alaya we hit the point every growing platform hits: the monolith was starting to strain under load, half the team wanted a full microservices rewrite, and investors wanted new features, not months of internal plumbing. I ran a two-week spike, built prototypes of both approaches, and load-tested them so the comparison to the CTO and investors could be about numbers instead of opinions. Rather than a full rewrite, I proposed extracting just the two highest-traffic modules with a strangler-fig pattern and leaving the rest alone, with explicit criteria for when we'd extract anything further. The first extracted module shipped in six weeks and cut latency on the busiest endpoints by about 40%, and the remaining monolith stayed stable all the way through the acquisition. The hard part wasn't the technical call, it was convincing people that not rewriting everything was the disciplined choice. Data did more of that convincing than I did. Next time I'd run the early benchmarks even sooner, since they were what actually ended the debate.

---

## 5. Building a platform from a blank page to acquisition

In 2016 I co-founded Alaya with no customers, no product, and no team, just an idea about employee purpose and impact. I owned the architecture and the first working version, alone at first, while the business side was already trying to sign enterprise clients on a promise. I picked a stack, Node.js, React, PostgreSQL, that could scale without forcing premature complexity, and got a working demo out inside three months because that's what the first sales conversations needed. From there it was continuous expansion: multi-tenant architecture, an API layer, impact reporting, plus hiring and onboarding the first three engineers and setting up the CI/CD and review culture that let more than one person touch the codebase safely. By the acquisition in 2021, the platform was running in production for more than 50 enterprise clients across Switzerland and France, about as direct a validation of those early architecture calls as you can get. If I'm honest, I underestimated the cost of retrofitting multi-tenancy after the fact, and I put observability in place later than I should have. Both are things I'd design for from day zero now, which matters for a role where the AI infrastructure itself needs to be observable from the start, not bolted on once something breaks in production.
