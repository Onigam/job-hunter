# STAR Stories — PostHog Backend Engineer (Ingestion)

---

## 1. Building a Multi-Tenant Event Pipeline from Zero

**Likely question:** "Tell me about a system you designed for scale" / "Have you built anything at high throughput?"

When I co-founded Alaya in 2016, events were central to the data model from day one: every user action on the platform needed to be captured, attributed to the right person and tenant, and made available for impact reporting. We had zero infrastructure, zero customers, and I was the only engineer for the first few months.

The first thing I got right was separating capture from processing. The API surface stayed lightweight, writing events to a message queue before returning, while async workers handled the expensive work: person resolution, multi-tenant attribution, and reporting rollups. That decision was driven by a simple constraint — campaign launches would produce bursts of activity, and I couldn't afford the capture layer to slow down or drop events under load. I chose Node.js and PostgreSQL as the core stack, with Redis for caching person lookups that were otherwise hitting the database on every event.

The platform held up through four years of growth: 50+ enterprise clients across Switzerland and France, eventually processed and acquired by Benevity in 2021. The architecture didn't need a major rewrite before the acquisition.

What I'd do differently: I added structured logging and distributed tracing late, around year three. For the first two years we were flying blind on processing failures, and we only caught a data integrity issue because a client noticed a discrepancy in their reports. I'd build observability in from month one now, not retrofit it later.

---

## 2. Making a Hard Architecture Decision Under Pressure

**Likely question:** "Tell me about a technical trade-off you navigated" / "How do you handle tech debt vs feature pressure?"

At Alaya, around year three, the monolith was showing scaling cracks. Two modules were responsible for the majority of write load: the event ingestion worker and the impact reporting aggregator. The team had grown to four engineers and the debate was full microservices rewrite versus a modular monolith approach. Investors were pushing for new features, not rewrites.

I ran a two-week spike comparing both approaches with prototype load tests rather than arguing from architecture principles. The numbers showed that extracting those two high-traffic modules and leaving the rest monolithic would cover 80% of our scaling problem at 20% of the rewrite cost. I presented that to the CTO and investors as concrete data: here's the bottleneck, here's the cost of each option, here's what we get in each case.

We shipped the first extracted module, the event worker, in six weeks. Performance on our busiest endpoints improved by roughly 40%. The remaining monolith stayed stable all the way through the acquisition. No big-bang rewrite was ever needed.

The reflection is that the hardest part wasn't the engineering, it was convincing people that "don't rewrite everything" was a responsible call and not laziness. The load test data was what cut that debate short. I'd do more early benchmarking in the future rather than waiting for everyone to agree on architecture principles.

---

## 3. Improving a Reliability Problem I Didn't Own

**Likely question:** "Tell me about a time you improved a system outside your team's scope" / "How do you work cross-functionally on infrastructure?"

At Benevity post-acquisition, the platform I joined had a shared PostgreSQL infrastructure layer that several teams depended on. One recurring issue was lock contention caused by a batch background job that was holding write locks on a high-traffic table for too long. The symptoms showed up as API latency spikes during business hours, but the teams experiencing the slowdown didn't own the job causing it, and the team that did had other priorities.

I spent two weeks instrumenting the contention path properly: EXPLAIN ANALYZE on the slow queries, pg_stat_activity snapshots during peak hours, then correlating lock wait times with the API response data from our observability stack. Once I had numbers tying the job's lock windows to specific API latency spikes, I scheduled a session with the backend and infra leads from the relevant teams.

The framing I used wasn't "this job is broken" but "here's what this costs us in user-facing latency, with data." We redesigned the job to use shorter transactions with a batch-and-release pattern. Lock contention dropped noticeably within a week, and API latency on the affected endpoints improved by around 35%.

What I took from that: in multi-team environments, the framing of a fix in terms of downstream user impact is what gets it scheduled. Engineers care about their own components; they respond to data about what's happening to customers.

---

## 4. Driving Adoption Without a Mandate

**Likely question:** "Tell me about influencing without authority" / "How do you lead as a senior IC without direct reports?"

At Benevity, I was a Senior Staff IC with no direct reports but a goal of getting AI-assisted development tooling adopted across two engineering teams that didn't report to me. The teams were skeptical: they'd seen tool mandates come and go, and the pitch of "this will make you faster" is easy to dismiss without proof.

I started with three engineers who were already curious, built a few concrete demos showing measurable time savings on tasks they actually did, and ran informal lunch sessions with no mandate attached. I also created a shared repo of reusable prompt templates and committed the first batch myself, so there was something real to build on.

Within three months, roughly 70% of engineers on both teams had incorporated AI-assisted code review and generation into their workflow. The engineers who adopted it on their own terms became internal advocates, which I couldn't have manufactured top-down.

The lesson was that the mandate-free approach is slower in the first month but far stickier. People who choose a tool advocate for it. People who are assigned a tool look for the first opportunity to stop using it.

---

## 5. Navigating a Post-Acquisition Integration

**Likely question:** "Tell me about a major organizational change" / "How do you operate in a new environment?"

When Benevity acquired Alaya in 2021, I went from being a founding engineer on a team of five to a Senior Staff Engineer inside an organization ten times larger. Different codebase (Java + microservices), different tooling, different culture, different expectations of what "Staff" means.

My instinct was to move fast and fix the things I could see were wrong. I held back on that deliberately. I spent the first month mapping the existing architecture and understanding why decisions had been made before I proposed changes. I built relationships with platform and infra teams before I pushed technical opinions. That felt slow, but it meant that when I did weigh in, I had context and people trusted my read on things.

Over the following year, I became a cross-team architecture liaison for the Europe-facing product surface and drove adoption of AI tooling across two teams. I contributed to three major cross-team architecture decisions.

What I learned: in a large org, your first job after a transition is to understand the system you're joining, including the social and organizational system, not just the technical one. Moving too fast to "fix" things before you understand why they exist is how you lose credibility quickly.
