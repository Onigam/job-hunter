# STAR+R Stories: Chief Technology Officer @ Toptal

Toptal's CTO interview will probably come back to four themes: running agentic AI in production, modernizing a large codebase without breaking the business, building and sizing teams, and whether you're still a real individual contributor. The stories below cover those themes. Taso Du Val is known for being direct, so keep each answer to about two minutes and let him ask follow-ups.

---

## 1. Building Alaya from zero to acquisition

**Likely questions:** "Tell me about something you built from scratch." / "Walk me through your CTO-level experience." / "How did you decide who to hire and when?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and engagement platform. There was no product, no customers and no code, and the business side was already talking to large companies who wanted a demo.

**Task.** As head of technology I had to build the whole platform, alone at first, then with a team, while sales signed the first enterprise clients. Every architecture decision was also a hiring decision, because whatever I chose, I'd need to find people who could work in it.

**Action.** I went with a stack I knew would hold up without clever tricks, Node.js, React and PostgreSQL, and got to a working demo in about three months. After that I grew the product one piece at a time: the API layer, impact reporting, postal campaigns and eventually a multi-tenant architecture once it was clear enterprise clients needed isolation. I held off on hiring until I couldn't keep up, and then brought on three engineers, one at a time. Before the second one arrived, CI/CD, code review and written architecture docs were in place, so onboarding didn't depend on me explaining everything in person.

**Result.** We reached 50+ enterprise clients in Switzerland and France, and Benevity, a Canadian unicorn valued at over $1B, acquired Alaya in 2021. Their technical due diligence went through the codebase and the platform survived it, which I still count as the fairest review my decisions have had.

**Reflection.** I added proper observability far too late, and retrofitting multi-tenancy cost us more than designing for it on day one would have. At Toptal's size the lesson carries over: the things that feel optional early on, like tracing, evals and cost attribution, are the ones that get very expensive later.

---

## 2. Modernizing a codebase without stopping the business

**Likely questions:** "How have you dealt with technical debt at scale?" / "Tell me about a big architecture call you made under pressure." / "How would you modernize our platform without disrupting operations?"

**Situation.** A few years into Alaya, our monolith was starting to crack under load. Half the team wanted a full microservices rewrite. Our investors wanted new features and didn't want to hear the word "rewrite" at all.

**Task.** I needed a decision I could defend with numbers, one that fixed the scaling problems without freezing the roadmap for a quarter.

**Action.** Rather than settle it in a meeting, I ran a two-week spike and prototyped both approaches under load tests. I took the results to the CTO and our investors, focusing on measured latency and the engineering weeks each path would cost, not on anyone's opinion about architecture. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and write down clear criteria for when another module would earn its own extraction.

**Result.** The first extracted module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable all the way through the acquisition. Nobody had to do a big-bang rewrite.

**Reflection.** Getting people to accept "we're not rewriting everything" was harder than the engineering. Data settled the argument, but it took too long, and I'd benchmark earlier next time. Toptal's posting asks for someone who has modernized large codebases without business interruption. My honest answer is that I've done it at a smaller scale, and the same approach, working on the parts with the most traffic first and setting explicit extraction criteria, is how I'd go about it there.

---

## 3. Getting engineers to adopt AI-assisted development without authority

**Likely questions:** "How would you rebuild how we develop software around AI tools?" / "How do you drive change across teams?" / "Tell me about influencing without authority."

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how we worked, but the two teams I wanted to bring along didn't report to me and had seen plenty of tooling fads come and go.

**Task.** Change how engineers actually worked day to day, with no mandate and no budget line behind me.

**Action.** I started with three engineers who were already curious. We built small internal demos around real work, like a PR review cycle that dropped by about two hours, rather than vendor slides. Next came informal lunch-and-learn sessions, and I put reusable prompt templates in a shared repo so people didn't have to start from zero. Whenever someone saved real time, I wrote it down and shared it, because a colleague's concrete result was more convincing than any argument from me.

**Result.** Within three months about 70% of engineers on both teams were using AI-assisted review and code generation, and I'd become the informal AI tooling lead for that part of the org.

**Reflection.** Going without a mandate was slower, but the change stuck. The people who adopted the tools on their own terms became the ones advocating for them. As CTO I'd have the authority to mandate it, and I'd still start the same way, then use the early adopters' numbers to justify changing process for everyone. One more point for Toptal: adoption numbers aren't enough. I'd want throughput and defect rates measured before and after, which is the same eval discipline the posting asks for on the agent side.

---

## 4. Joining a much larger organization after the acquisition

**Likely questions:** "Tell me about leading through change." / "How do you work with a CEO and peers who see things differently?" / "What do you do in your first 90 days?"

**Situation.** After the acquisition in 2021, I went from running technology at a small startup to being one Senior Staff Engineer in an organization roughly ten times bigger. Everything was different: the culture, the codebase (Java and microservices instead of our Node.js stack) and the process.

**Task.** Bring Alaya's capabilities into Benevity's platform while we kept shipping, without losing the speed that had made Alaya worth buying.

**Action.** Honestly, I started badly. In the first weeks I pushed to fix things that weren't broken, just because they weren't how I'd have done them. Once I saw that wasn't working, I spent about a month mapping the existing architecture and getting to know the platform and infrastructure teams before I pushed any opinion. That work led to me becoming the cross-team architecture contact for the Europe-facing product.

**Result.** The core Alaya features were migrated into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the person both teams came to about AI tooling.

**Reflection.** My first 90 days as a CTO at Toptal would look like my second month at Benevity, not my first. That means listening and mapping before proposing anything, then choosing one visible, measurable win, most likely an agent on a single step of vetting or matching with an eval suite behind it, before any reorganization.

---

## 5. Prepare an answer: "You haven't been a CTO at our scale. Why you?"

This question will come up, so don't dodge it. A version to adapt:

"You're right. The largest team I've run as head of technology was at Alaya, and that's small next to Toptal. What I've done is own a platform end to end, from the first line of code to an acquirer's due diligence, and since then I've spent five years at a much larger company seeing what happens to architecture and teams at scale. I'm also still hands-on with the part of the job that's new for everyone: agents, evals, and deciding which model to run where and what it costs. Nobody has fifteen years of that. I'd rather be judged on how I'd run your first agent in production than on my headcount history."

Keep it factual and don't oversell. If he pushes on workforce planning, say the truth: you sized and sequenced Alaya's first hires against revenue, you haven't planned headcount across hundreds of people, and you'd want a strong VP Engineering or Head of People as a partner on that.
