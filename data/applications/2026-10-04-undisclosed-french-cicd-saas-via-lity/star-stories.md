# STAR+R Stories: Staff Engineer AI & Dev Tools (Python), via LITY

The posting asks for four things: scalable architecture for real-time data flows, leading LLM integration into an automation engine, owning code quality and mentoring, and staying close to customers (support included). These four stories cover that ground. All are drawn from `profile/star-bank.md`; nothing here goes beyond it.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompt:** "Tell me about something you built from scratch" / "How do you work in a small team where everyone touches the product?"

In 2016 I co-founded Alaya, an employee purpose and impact platform, and on day one there was no product, no customers and no code. My job was to architect and build the whole thing, alone at first, while the business side was trying to close its first enterprise clients, so a long design phase wasn't an option. I went with a stack I knew I could move fast in without painting us into a corner (Node.js, React, PostgreSQL) and got the core features to a demoable state in about three months. After that it was steady expansion: multi-tenant architecture, an API layer, impact reporting, postal campaigns. Along the way I hired and onboarded the first three engineers and put CI/CD, code review habits and architecture docs in place, which mattered more than I expected once there were people other than me shipping. We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired us in 2021.

**Reflection.** Two things I'd change. We added proper APM late and spent too long guessing about performance. And retrofitting multi-tenancy cost a lot more than designing for it from the start would have. For an LLM-driven automation engine the equivalent is evaluation and tracing: if you can't see what the model decided and why, on which event, you're debugging customer tickets blind.

---

## 2. Strangler fig instead of a rewrite

**Likely prompt:** "Tell me about a hard technical trade-off" / "How do you scale an architecture without stopping delivery?"

A few years into Alaya, the monolith was showing cracks under load and the team had split into two camps: rewrite as microservices, or stay put and patch. Investors, meanwhile, wanted features, not a rewrite. I needed a decision we could defend with something better than opinions. So I ran a two-week spike, prototyping both directions and load testing them, then took the numbers to the CTO and investors. What I proposed was a strangler fig migration: pull out the two highest-traffic modules first, leave everything else in the monolith, and agree upfront on the criteria that would justify extracting anything further. The first extracted module shipped in six weeks, the busiest endpoints got roughly 40% faster, and the remaining monolith stayed stable all the way through the acquisition. There was never a big-bang rewrite.

**Reflection.** The hardest part wasn't technical; it was convincing people that not rewriting everything was the right answer. The data settled it. Next time I'd benchmark earlier and cut the debate short. For a product processing high-volume GitHub event streams, I'd apply the same rule: extract the hot path that's actually hurting, measure, and stop there until the numbers say otherwise.

---

## 3. Getting two teams onto AI-assisted workflows without authority

**Likely prompt:** "How have you worked with LLMs?" / "How do you influence engineers who don't report to you?" / "How do you mentor?"

At Benevity I was a Senior Staff IC with no reports, and I wanted two teams that didn't report to me to start using AI-assisted development in their daily work. Mandating it wasn't possible, and honestly it wouldn't have worked anyway. I started with three engineers who were already curious and built small internal demos showing real time saved on real tasks. Then came informal lunch-and-learn sessions with no attendance pressure, plus reusable prompt templates committed to a shared repo so people didn't have to start from zero. When something worked, like a PR review cycle that came in about two hours shorter, I wrote it down and shared it. Within about three months, roughly 70% of the engineers on both teams were using AI-assisted review and code generation, and I'd become the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but the adoption stuck, because the engineers who opted in on their own terms became the ones advocating for it. It also taught me where LLM output fails quietly, which is the part I'd bring to integrating models into an automation engine: the useful work is deciding where a suggestion can act on its own and where a human checkpoint has to stay.

---

## 4. Post-acquisition integration at Benevity

**Likely prompt:** "Tell me about joining an established codebase" / "Tell me about a time you were wrong"

After the acquisition in 2021 I joined Benevity as Senior Staff Engineer, in an engineering org roughly ten times Alaya's size, with a different culture, a Java and microservices codebase, and processes I didn't know. The job was to bring Alaya's capabilities into Benevity's platform while keeping the product velocity we'd built. I spent my first month mapping the existing architecture before proposing anything, and built relationships with the platform and infra teams before pushing technical opinions. Over time I became the cross-team architecture liaison for the Europe-facing product surface. We migrated Alaya's core features into the platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** I didn't get this right at first. Early on I moved too fast trying to fix things that weren't actually broken in the new org, and it cost me credibility I then had to rebuild. Slowing down and listening first made me far more effective. Joining a compact, profitable team with six years of decisions already baked in, I'd start the same way: read the code, sit in on support, then propose.

---

## Prep notes

- **Python depth will come up.** Be direct: TypeScript has been the daily language; Python has been used for LLM and AI pipeline work. Don't oversell. Be ready to talk about async Python, typing, and profiling at a conversational level, and brush up on asyncio and queue-based event processing before the technical round.
- **Customer support participation** is in the posting. The Alaya story covers working close to enterprise clients; don't invent support-rotation specifics beyond that.
- **Questions to ask them:** How is LLM output evaluated before it touches a customer repo today? What does the event volume look like at peak (webhooks per second)? How is support rotation split among engineers?
