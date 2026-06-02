# STAR Stories — AI Data Infrastructure Startup (via Pragmatike)

Founding Full Stack AI Engineer — Behavioral Interview Prep

---

## Story 1: Building Alaya from Zero to Acquisition

**Best for:** "Tell me about a founding engineer experience" / "How do you handle ambiguity at day one?"

**Situation:** In 2016, my co-founder and I had an idea for an employee engagement platform and no product. I was the only engineer, and the business was already in conversations with enterprise clients in Switzerland. The pressure was real: we needed something to demo within a few months, but the architecture also had to support multi-tenancy and data isolation those clients would require on day one.

**Task:** Design, build, and deliver the entire platform on my own to start, then grow a small team without slowing down delivery.

**Action:** I made a pragmatic stack choice upfront and committed to it: Node.js backend, React frontend, PostgreSQL with row-level multi-tenancy. Rather than building for perfect scale, I built for the first 50 clients with clean abstraction boundaries so modules could be extracted later. The first demo was live in about 10 weeks. Over the following four years I added async pipelines for impact reporting, postal campaign dispatch, and contribution processing — essentially a job queue system with states, retry logic, dead-letter handling, and monitoring. I hired the first three engineers, ran code review, established CI/CD, and kept architecture docs current.

**Result:** The platform reached 50+ enterprise clients across Switzerland and France. Benevity, a $1B+ Canadian unicorn, acquired us in 2021. During acquisition diligence, their engineers validated the data model and API layer, which was its own kind of stress test and confirmed the architectural bets we'd made in year one.

**Reflection:** I'd invest in observability from week one. We added proper APM and distributed tracing late, and there were painful debugging sessions early on that better tooling would have cut short significantly. I also underestimated the cost of retrofitting multi-tenancy on one module we added quickly under client pressure. Next time, that constraint gets baked in before a single line is written.

---

## Story 2: Architecture Decision Under Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you make hard architecture calls with business pressure?"

**Situation:** Around 2019 at Alaya, we started hitting scaling limits on the main API layer. Some impact reporting jobs were blocking request threads, which was fine at 20 clients but started causing cascading failures at 40. The team debated a full microservices migration vs. patching the monolith. Investors were asking for new features, not rewrites.

**Task:** Make a defensible architectural decision that balanced long-term scalability with short-term delivery pressure, without losing the team's confidence either way.

**Action:** I ran a two-week technical spike to get data rather than opinions. I built minimal prototypes of both approaches, put them under synthetic load, and measured. The results were clear: full extraction would take 3-4 months with high delivery risk, while a strangler-fig approach on the two highest-traffic modules would take 6 weeks and address 80% of the problem. I presented the trade-offs to the founders and investors with concrete numbers and an honest risk profile for each path.

**Result:** We went with the strangler fig. The first module shipped in 6 weeks. Throughput on those endpoints improved about 40%. The rest of the monolith stayed stable through the Benevity acquisition. No big-bang rewrite was ever needed.

**Reflection:** I'd run the benchmarks earlier in the first signs of trouble rather than waiting until things were urgent. The data was always the convincing argument; building it sooner would have cut the debate in half and let us act before the situation got stressful.

---

## Story 3: Introducing AI Tooling Without a Mandate

**Best for:** "Tell me about establishing engineering standards" / "How do you drive adoption of new tools or practices?"

**Situation:** At Benevity post-acquisition, around 2022-2023, I had a hypothesis that AI-assisted code review and generation could meaningfully reduce feedback cycle time and cut repetitive scaffolding work. The two teams I wanted to reach had no obligation to change anything, and I had no direct reports.

**Task:** Change how a group of engineers worked, without a mandate, and make it stick.

**Action:** I didn't start with a proposal. I started with a specific demo: I took a real PR that had taken about 2 hours to review and walked through how AI-assisted review cut it to 30 minutes, step by step. Three engineers started experimenting on their own after that first session. Over the following weeks, I codified the most useful patterns into shared prompt templates, committed them to our internal shared repo, and documented before/after on a handful of real examples so people could see exactly what they were getting.

**Result:** Within three months, about 70% of engineers on both teams were using some form of AI-assisted tooling regularly. That number wasn't from a survey; I could track it in PR activity and commit patterns. Engineers who adopted it themselves started advocating for it internally, which I couldn't have manufactured with a top-down decree.

**Reflection:** The mandate-free approach was slower but significantly stickier. Engineers who adopt something on their own terms become its internal advocates. If I'd pushed a formal rollout earlier, I'd have gotten faster nominal adoption and shallower real usage. The sequencing mattered more than the speed.

---

## Story 4: Async Pipeline Reliability — Going from Silent Failures to Zero Unreported Incidents

**Best for:** "Tell me about building reliable async systems" / "How do you handle failure modes in a data pipeline?"

**Situation:** At Alaya, we ran async jobs for all data-heavy operations: impact report generation, postal campaign dispatch, contribution processing. The initial job queue was simple and worked fine at small scale. As client count grew, we started seeing silent failures: jobs that would enqueue successfully but never complete, with no alert and no visibility. We'd find out when a client complained they hadn't received their monthly report.

**Task:** Redesign the async layer to turn invisible failures into detectable, actionable incidents before they reached clients.

**Action:** I took about three weeks to rebuild the async infrastructure properly. I introduced explicit job states (queued, processing, failed, completed), a dead-letter queue for failed jobs with exponential backoff on retries, and a sentinel job that periodically swept for tasks stuck in the processing state beyond a configurable timeout. I added structured logging per job execution so we could trace the failure cause without reproducing it. The redesign also included alerting on dead-letter queue depth above a threshold.

**Result:** After the redesign, we went from discovering failures via client complaints to catching them within minutes. Over the following 6 months, we had zero unreported failures in the campaign dispatch pipeline. The monitoring overhead was minimal; the reliability improvement was immediate.

**Reflection:** The core lesson was that async failures are silent by design. If you don't build visibility in from the start, you're operating blind and won't know it until a client tells you. On any new pipeline now, dead-letter handling and job state tracking are on the spec before any business logic.
