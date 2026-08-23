# STAR Stories: Lakera, Staff ML Engineer (Zürich)

Picked for a Staff ML Engineer role at an AI security company: shipping models that hold up under real, adversarial traffic, handling the long tail of edge cases, working inside a team that went through an acquisition, and driving technical change across teams that don't report to you.

---

## 1. Making a hard architecture call under pressure

At Alaya, our monolith was starting to show scaling cracks right as investors wanted new features, not a rewrite. I had to make a defensible call that balanced long-term scalability against short-term delivery pressure, so instead of arguing opinions in a room I ran a two-week technical spike with prototype load tests comparing a full microservices rewrite against a modular monolith. The data pointed to a strangler fig approach: extract the two highest-traffic modules first, leave the rest monolithic, and define clear criteria for when to pull the next piece. We shipped the first extracted module in six weeks and saw a roughly 40% performance improvement on the busiest endpoints, and the remaining monolith stayed stable all the way through the acquisition, no big-bang rewrite ever needed. The hardest part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Concrete numbers cut that argument short, and next time I'd run the benchmarking even earlier so debate doesn't eat into build time.

---

## 2. Post-acquisition integration at Benevity

After the Benevity acquisition in 2021, I joined as Senior Staff Engineer on a team ten times the size of Alaya, different culture, different codebase, Java and microservices instead of the stack I'd built. The task was to integrate Alaya's capabilities into Benevity's platform while still shipping new features, without losing the product velocity we'd had as a small team. I spent the first month mapping the existing architecture before proposing anything, then built relationships with platform and infra teams before pushing technical opinions on their turf. I also started driving adoption of AI-assisted workflows, prompt patterns and tooling, across the org, and became a cross-team architecture liaison for the Europe-facing product surface. We migrated the core Alaya features into Benevity's platform and I contributed to three major cross-team architecture decisions along the way. Early on I moved too fast trying to fix things that weren't actually broken in the new org; slowing down and listening first is what made the rest of it work.

---

## 3. Shipping LLM-backed features into an existing platform

One of my main threads at Benevity has been pushing LLM-backed features and embeddings-based semantic search into a platform and codebase that predates any of it. The task wasn't wiring an API to a model, it was figuring out where a probabilistic system actually helped versus where it just added latency and cost for a party trick, and then thinking through what happens when the model gets an input it wasn't expecting. I favored narrow first versions with heavy instrumentation over ambitious ones, because with this kind of system you learn far more from watching real inputs fail than from a design doc. That approach is part of why I became the person other engineers pulled in when a new LLM idea needed a reality check on scope and risk, alongside the AI-assisted tooling rollout I'd already been driving. What I took from it is that the interesting engineering with probabilistic features isn't the happy path, it's building enough visibility to catch the long tail before your users do.

---

## 4. Leading without formal authority

I was a Senior Staff IC at Benevity with no direct reports, but I needed two teams that didn't report to me to actually change how they worked day to day. Mandating it wasn't an option and probably wouldn't have stuck anyway, so I started small: three curious engineers, a few internal demos showing real time saved, informal lunch-and-learn sessions with no agenda attached. I documented specific wins, like a two-hour cut on a PR review cycle, instead of making abstract claims about productivity. Adoption spread from there without any decree behind it, and within three months about 70% of engineers across both teams were using the practices on their own. I ended up the informal AI tooling lead for the org almost by accident. The lesson that stuck: the slower, mandate-free path produced people who argued for the change themselves, which a top-down rollout never would have gotten me.
