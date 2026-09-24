# STAR+R Stories: Chief Technology Officer, Swiss SaaS (via Jobgether)

This is a hands-on CTO role: owning the tech vision and R&D budget, making a small senior team more product-focused, rolling out AI-assisted development, running multi-region Kubernetes, and reporting to the CEO and board. These stories match the questions most likely to come up. Tell them in your own words; the text below is a base to work from, not a script to recite.

---

## 1. Building a platform and a team from zero (Alaya → Benevity)

**Likely questions:** "Tell me about your leadership experience." / "Have you owned the whole technical side of a company?" / "How do you build an engineering team?"

**Situation.** In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. We had no product and no customers, and the business side was already talking to enterprise prospects who'd expect something real within a few months.

**Task.** As Head of Technologies I owned everything technical: architecture, delivery, hiring, and the trade-offs between what sales wanted next and what the platform could carry.

**Action.** I picked a boring, pragmatic stack (Node.js, React, PostgreSQL) because the risk was in the product, not the technology, and got a demoable core out in about three months. After that I grew it step by step: multi-tenancy, an API layer, impact reporting, postal campaigns. When it was time to hire, I brought on the first three engineers and set up the things I didn't want to retrofit later, like CI/CD, code review as a habit rather than a gate, and short architecture docs that new people could actually read.

**Result.** The platform ran in production for 50+ enterprise clients in Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021. Technical due diligence went through without surprises, which I took as the best review the early decisions could get.

**Reflection.** Two things I'd change. Observability came far too late; we added proper APM once customers were already feeling the problems. And I treated multi-tenancy as something to add later, which cost us more than designing for it from the start would have. As a CTO now, I'd put both on the roadmap in month one, even with a small team.

---

## 2. Getting faster without a rewrite (delivery speed vs. tech debt, with investors in the room)

**Likely questions:** "How would you improve delivery speed?" / "Tell me about a hard technical trade-off." / "How do you explain engineering investment to a board?"

**Situation.** A few years into Alaya, our monolith was showing cracks. The busiest endpoints were slowing down, the team was split between a full microservices rewrite and leaving things alone, and our investors wanted features, not a rewrite.

**Task.** I had to make a decision I could defend to engineers and investors alike, one that fixed the real bottleneck without freezing the roadmap.

**Action.** Instead of letting the debate run on opinions, I ran a two-week spike and prototyped both approaches, with load tests on each. I took the numbers to the leadership team and investors and framed it in terms they cared about: customer-facing latency, what each option would cost in delayed features, and what could go wrong. We chose a strangler-fig approach. We pulled the two highest-traffic modules out first, left the rest alone, and wrote down clear criteria for when another module would earn its own extraction.

**Result.** The first extracted module shipped in about six weeks, and those endpoints got roughly 40% faster. Feature work kept going the whole time, and the remaining monolith stayed stable right through the acquisition. We never needed the big rewrite.

**Reflection.** The hard part was social, not technical. People had to accept that not rewriting everything was the ambitious choice. Data ended the argument, so these days I benchmark earlier, before positions harden. It's how I'd approach your infrastructure costs, too: measure first, then pick the one or two changes that matter.

---

## 3. Rolling out AI-assisted development without a mandate

**Likely questions:** "How would you introduce AI-assisted development here?" / "How do you drive change in an engineering org?" / "How do you influence people who don't report to you?"

**Situation.** At Benevity I was a Senior Staff Engineer with no direct reports. I was convinced AI-assisted development could save real time across two teams, but neither team reported to me, and some engineers were openly skeptical.

**Task.** I wanted to change how people worked every day without being able to tell anyone to do it.

**Action.** I started with three engineers who were already curious and worked on their real tickets, not toy examples. When something saved time, we wrote it down; one early note was a PR review cycle that went about two hours faster. I ran informal lunch-and-learn sessions that were mostly live demos, and put the prompt templates and patterns that worked into a shared repo so anyone could pick them up. I didn't hide the failures, either. Showing where the tools produced confident nonsense did more for trust than any success story.

**Result.** Within about three months, around 70% of engineers on both teams were using AI-assisted code review and generation regularly, and I'd become the informal AI tooling lead for the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it went on to advocate for it themselves. As a CTO I'd have the authority to mandate it, and I'd still mostly avoid doing so. I'd set the guardrails centrally (security, data handling, review expectations) and let adoption come from demonstrated wins. I'd also measure earlier, with cycle time and review turnaround, so the board gets numbers instead of anecdotes.

---

## 4. Joining a much larger org after the acquisition

**Likely questions:** "How do you approach your first 90 days?" / "Tell me about a time you had to adapt." / "How would you transform an existing team?"

**Situation.** After the acquisition in 2021, I went from running Alaya's technology to being one Senior Staff Engineer at Benevity, in an org about ten times bigger, with a different stack (Java, microservices), different processes and a different culture.

**Task.** My job was to bring Alaya's capabilities into Benevity's platform while keeping up the product pace our clients were used to.

**Action.** Honestly, I started badly. In the first weeks I pushed to fix things that I saw as broken but that had good reasons behind them. Then I changed approach. I spent about a month mapping the architecture and the people before proposing anything, and built relationships with the platform and infrastructure teams before giving technical opinions. I only pushed where I could point to a specific cost to the product.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and became the architecture contact for the Europe-facing part of the product.

**Reflection.** It's the most useful lesson I've got for a CTO stepping into an existing team. The team already knows where it hurts, and my job is to find out before I start changing things. For this role, my first month would be listening and measuring (deploy frequency, lead time, cloud spend per customer), and only then deciding what to change.

---

## Gaps to prepare for (not stories; answer honestly)

**"5+ years in VP, Director or CTO roles."** My direct technology leadership is the five years as cofounder and Head of Technologies at Alaya (2016 to 2021), with full ownership of the platform, the budget and hiring. At Benevity I led at Staff+ level without formal authority. Present it as it is, and point to the acquisition as the outcome.

**"SOC 2 / ISO 27001."** I haven't owned a certification program myself. A good answer: explain how you'd approach it (gap assessment first, a compliance automation tool, controls built into CI/CD instead of spreadsheets, an external auditor from the start), and ask where theirs currently stands. Don't claim experience you don't have.

**"Board communication."** Use Story 2. I've presented engineering trade-offs to investors in terms of cost, risk and delivery, not architecture.
