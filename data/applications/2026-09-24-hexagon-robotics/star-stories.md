# STAR+R Stories: Senior Staff MLOps & Cloud Platform Engineer, Robotics @ Hexagon Robotics

Four stories picked for what this panel will probably probe: owning platform architecture end to end, making infrastructure calls with data, getting R&D teams to actually adopt a platform, and working inside a large group after being the small team. A short note on handling the MLOps and robotics gaps is at the end.

---

## 1. Building a production platform from nothing (Alaya)

**Likely questions:** "Tell me about a system you architected end to end." / "How do you handle ambiguity?" / "What does production-grade mean to you?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customer and no code, only a business side that was already talking to enterprise prospects.

**Task.** My job was to design and build the whole technical platform, alone at first, and to make it solid enough that large companies would trust it with their employee data.

**Action.** I went with a stack I knew would hold up without heroics, Node.js, React and PostgreSQL, because the risk was in the product and not in the tooling. The first version was demoable within about three months. From there the platform grew in layers: an API layer, multi-tenancy, impact reporting, postal campaigns. Once I hired the first three engineers, I put CI/CD, code review and written architecture docs in place early, since I'd seen what happens when a small team skips that and then tries to scale.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued at over $1B, acquired Alaya in 2021. Their technical due diligence went through the platform I'd designed, which is about as honest a review as an architecture gets.

**Reflection.** Two things I'd change. Observability came too late; we only added proper APM once problems were already hurting. And retrofitting multi-tenancy cost far more than designing for it on day one would have. For a robotics data platform I'd treat lineage, tracing and dataset versioning the same way, as day-zero concerns, because you can't add reproducibility after the fact to data you've already lost track of.

---

## 2. An architecture call under delivery pressure (Alaya)

**Likely questions:** "Tell me about a technical trade-off." / "How do you choose between frameworks or vendors?" / "How do you handle tech debt?"

**Situation.** Alaya's monolith was starting to crack under load. Half the team wanted a full microservices rewrite, while the investors wanted new features and had no appetite for a rewrite.

**Task.** I needed a decision I could defend to both sides, one that fixed scaling without freezing the roadmap.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and prototyped both approaches with load tests on our real traffic patterns. The numbers pointed to a middle path, so I proposed a strangler fig migration: pull out the two highest-traffic modules first and leave the rest as a monolith. I also wrote down explicit criteria for when any further module would earn its own service, so the next debate would start from a rule and not from taste.

**Result.** The first extracted module shipped in about six weeks, and latency on the busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the acquisition, and nobody had to live through a big-bang rewrite.

**Reflection.** Convincing people that not rewriting everything was the right answer turned out to be the hard part, and the data did most of the persuading. I'd benchmark even earlier next time. It's the same approach I'd bring to picking an orchestration or experiment-tracking stack here: a short, time-boxed spike against real workloads, with operational cost counted from the start.

---

## 3. Getting teams to adopt a platform they didn't ask for (Benevity)

**Likely questions:** "How do you lead without authority?" / "How do you get R&D teams to use the infrastructure you build?" / "Tell me about mentoring."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams that didn't report to me to change how they worked day to day by adding AI-assisted review and code generation.

**Task.** Engineers had to actually change their habits, and I had no power to mandate anything.

**Action.** I started with three engineers who were already curious and built demos around their real tasks, not toy examples. Lunch-and-learn sessions followed, all optional. The prompt templates and patterns that worked went into a shared repo so nobody had to start from scratch, and I wrote up concrete wins, like a PR review cycle that got about two hours shorter, because a specific example travels further than a slide.

**Result.** Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and generation, and I became the informal lead for AI tooling across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who opted in became the ones advocating for it. A platform team serving ML researchers is in the same position. Researchers route around infrastructure that slows them down, so the golden path has to be the easiest path, with docs and examples written from their workflow outward.

---

## 4. Joining a much bigger organisation after an acquisition (Benevity)

**Likely questions:** "Tell me about working in a large, matrixed company." / "How do you get up to speed in an unfamiliar system?"

**Situation.** After the acquisition I joined an engineering org about ten times the size of Alaya's, with a Java microservices codebase, different processes and a different culture. Hexagon is a similar shape: a large group with a division moving at startup speed inside it.

**Task.** I had to fold Alaya's capabilities into Benevity's platform while we kept shipping features, without losing the speed we'd had as a small team.

**Action.** For the first month I mostly mapped the existing architecture and listened, and I built relationships with the platform and infrastructure teams before pushing any opinions. After that I took on a cross-team architecture liaison role for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling across two teams.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Slowing down made me more effective. In a new domain like robotics I'd deliberately spend the first weeks sitting with the researchers and the robot data before redrawing any architecture.

---

## Handling the gap questions honestly

Expect direct questions on GPU scheduling, Azure ML, Terraform, PyTorch training pipelines and ROS 2. Don't stretch the truth. My direct experience is cloud platform and CI/CD on AWS with Docker and Kubernetes, Python, and LLM, embeddings and multi-agent work. I haven't operated GPU training clusters or robotics stacks. What transfers is designing a platform from scratch for reproducibility, multi-tenancy and adoption, and making infrastructure decisions with data. If they ask how I'd ramp up, I'd give concrete first steps: read the current data flow from robot to storage to training, run one training job end to end myself, then list where reproducibility breaks today.
