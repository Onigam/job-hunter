# STAR Stories — Engineering Manager Interview
**Sonar · Platform Team · Geneva**

Prepared for: behavioral round and hiring manager screen.
Role emphasis: team building, delivery at scale, technical credibility, cross-functional collaboration.

---

## Story 1 — Building an Engineering Team from Zero
**Best for:** "Tell me about building a high-performing team" / "What's your approach to growing engineers?" / "How did you hire and onboard your first engineers?"

**Situation:**
In 2016 I co-founded Alaya, an employee purpose platform. For the first several months I was the only technical person. As we signed our first enterprise clients, we needed to hire — fast — without sacrificing quality or culture.

**Task:**
Build an engineering team from scratch: define the hiring bar, write the first technical standards, set up code review culture, and onboard engineers in a way that didn't slow delivery.

**Action:**
- Wrote the hiring process myself: take-home projects calibrated to the seniority level, structured debrief templates, a clear "bar" for what we'd accept
- Onboarded the first 3 engineers with a paired coding week before they touched production
- Introduced architecture decision records (ADRs) early so decisions were documented and debatable, not tribal knowledge
- Set up weekly 1:1s focused on growth, not status — each engineer had an explicit skill development goal per quarter
- When a mid-level hire wasn't working out (6 months in), addressed it directly with a structured PIP, extended support for 6 weeks, then made the call

**Result:**
Scaled to a 6-engineer team that delivered monthly releases and handled the technical due diligence of a $1B+ acquisition. Zero unplanned attrition in 4 years. Two of the engineers I hired became senior leads by the time of acquisition.

**Reflection:**
I would have documented the onboarding process earlier — the third hire took twice as long to ramp as the first two because I hadn't written anything down. Creating a structured 30/60/90 from day one would have saved weeks.

---

## Story 2 — Navigating Post-Acquisition Integration
**Best for:** "Tell me about a time you navigated significant organizational change" / "How do you earn trust in a new environment?" / "Cross-functional collaboration under ambiguity"

**Situation:**
In 2021, Alaya was acquired by Benevity. I joined as Senior Staff Engineer into a company 10x larger: different codebase (Java + microservices), different engineering culture, different processes, four time zones. I had no formal authority and no direct reports.

**Task:**
Integrate Alaya's product capabilities into Benevity's platform without losing velocity, while establishing credibility fast enough to influence technical decisions that mattered.

**Action:**
- Spent the first 4 weeks in pure "listen and map" mode — drew the architecture before proposing anything
- Built relationships with platform and infra leads before raising technical opinions in cross-team meetings
- Picked one small, visible win (migrated a critical data pipeline to AWS) and delivered it in 3 weeks to establish credibility
- Then proposed the larger integration roadmap with data to support it, not opinions

**Result:**
Led 3 major cross-team architecture decisions within 12 months of joining. Became the go-to technical point of contact for Europe-facing product across two Benevity engineering teams.

**Reflection:**
My instinct early on was to fix things that looked broken. That was wrong — some of those things were "broken" for reasons I didn't understand yet. Slowing down and earning the right to change things made me 3x more effective than I would have been moving fast.

---

## Story 3 — Hard Technical Decision Under Delivery Pressure
**Best for:** "Tell me about a significant technical trade-off you navigated" / "How do you balance technical debt with product delivery?" / "Tell me about a time you had to convince stakeholders on a technical direction"

**Situation:**
At Alaya, we had a monolith that was showing performance cracks at scale. The team was split: full microservices rewrite (6–9 months minimum) vs. keep it as-is. Investors were watching the roadmap. New enterprise features were already committed.

**Task:**
Make a defensible technical call — fast — that balanced long-term scalability with the reality that a 9-month freeze would kill the business.

**Action:**
- Ran a 2-week spike: built two minimal prototypes and load-tested both approaches
- Translated results into business terms for the CEO and investors: "Option A costs 9 months of new features. Option B costs 6 weeks and gets us 80% of the benefit."
- Proposed a strangler-fig migration: extract the two highest-traffic modules first, keep the rest monolithic, define clear criteria for future extractions
- Led the extraction of the first module personally to set the pattern

**Result:**
First extraction shipped in 6 weeks. The affected endpoints saw a 40% performance improvement. The remaining monolith stayed stable through the acquisition 18 months later. No big-bang rewrite was ever needed.

**Reflection:**
The hardest part was convincing people that "not rewriting everything" was technically sound and not laziness. Prototype data cut the debate from weeks to a 90-minute meeting. I'd run the benchmarks even earlier next time — kill the debate before it starts.

---

## Story 4 — Driving Adoption Without Formal Authority
**Best for:** "How do you lead and influence peers?" / "Tell me about change management in engineering" / "How do you introduce new practices to a team that didn't hire you?"

**Situation:**
At Benevity, I was a Senior Staff IC — no direct reports. I wanted to introduce AI-assisted development practices (LLM-based code review, prompt templates, GitHub Copilot patterns) across two teams. The engineers hadn't asked for it and their managers hadn't mandated it.

**Task:**
Change how 15+ engineers worked, with no org chart authority, no budget for tooling mandates, and without creating a compliance burden.

**Action:**
- Started with 3 engineers who expressed curiosity — ran small demos showing concrete time savings on real tasks they'd done that week
- Built reusable prompt templates and committed them to a shared repo anyone could fork
- Ran 4 informal "lunch & learn" sessions — optional, no slides, just live demos and Q&A
- Documented wins in a Slack thread: "saved 2h on a PR review cycle," "caught a null-pointer pattern before code review" — made the value tangible
- Never mandated. Let engineers choose their own tooling entry point.

**Result:**
Within 3 months, 70% of engineers across both teams were using at least one AI-assisted workflow. I became the informal AI tooling lead for the engineering org without a title change.

**Reflection:**
The mandate-free approach was slower but the adoption was much stickier. Engineers who adopted on their own terms became internal advocates — something I couldn't have engineered top-down. For a future rollout, I'd still avoid mandating but would identify the advocates earlier to accelerate the peer-to-peer spread.

---

## Story 5 — Balancing Delivery with Team Development
**Best for:** "How do you keep delivery on track while also investing in your team?" / "Tell me about a time you had to make a tradeoff between speed and quality" / "How do you avoid burning out your engineers?"

**Situation:**
At Alaya, we committed to a major enterprise client demo in 8 weeks. The feature set required work from every engineer simultaneously. Two engineers were mid-ramp (less than 3 months in). One senior engineer was working through a difficult stretch and showing signs of burnout.

**Task:**
Deliver the demo on time without destroying team morale or skipping the onboarding investment for the newer engineers.

**Action:**
- Broke the 8-week target into 2-week checkpoints with visible progress each time — reduced anxiety and gave everyone a clear near-term target
- Gave the new engineers scoped, bounded work (own a specific API module end-to-end) rather than ad-hoc tasks — they grew faster and blocked delivery less
- Had a direct conversation with the burned-out senior engineer: adjusted their scope, pulled one project off their plate, added explicit no-meeting Fridays for two months
- Did a daily 15-minute stand-up plus a weekly 30-minute "what's blocking you" async doc — low overhead, high signal

**Result:**
Delivered the demo on time. The client signed a contract worth 6x our prior ACV. The burned-out engineer stayed and recovered — they were still with the company at acquisition. The two newer engineers delivered their modules with minimal rework.

**Reflection:**
I cut the on-call rotation for those 8 weeks to protect focus time. In hindsight I should have rotated it more formally rather than just pausing it — we got lucky that nothing critical broke. I'd be more explicit about on-call backup plans during high-pressure sprints in the future.
