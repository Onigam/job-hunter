# STAR+R Stories, Magino Marveaux-Cochet
## Prepared for: Director of Engineering, n8n

---

## 1. Building the first engineering org from zero (Alaya)

**Likely question:** "Tell me about building or scaling an engineering team from scratch."

In 2016 I cofounded Alaya, an employee purpose and impact platform, and for the first few months it was just me and a blank page. There was no product, no customers yet, and the business was already out talking to enterprise prospects, so I had to build something real fast without boxing myself into decisions I'd regret a year later. I picked a pragmatic stack, Node.js, React, PostgreSQL, that wouldn't force a rewrite the moment we got traction, and got the core product to a first demo in about three months. Once we had signed our first clients, I hired and onboarded our first three engineers, and that's really where the job changed for me. I stopped being the person who wrote every line and became the person who decided how the team wrote code together: I set up CI/CD, put a real code review process in place, and started writing down architecture decisions instead of keeping them in my head. By the time we were acquired by Benevity in 2021, the platform was running for over 50 enterprise clients across Switzerland and France, which told me the early calls, technical and organizational, had mostly been right. If I'm honest, I'd have brought in proper observability much earlier; we were flying a bit blind for longer than I'd like to admit, and multi-tenancy was something I retrofitted instead of designing for from day one. Next time that's a day-zero decision, not a year-two one.

---

## 2. Driving change across teams with no formal authority (Benevity)

**Likely question:** "How do you influence engineering managers or teams that don't report to you?"

After the acquisition I went from cofounder to a Senior Staff IC on a team about ten times the size of what I'd run before, and I had zero direct reports. What I wanted to change was how people worked day to day: getting AI-assisted development tooling into the workflow of two engineering teams that had never heard of me before the deal closed. I could have gone the top-down route and asked a VP to mandate it, but that felt like the fastest way to get compliance without adoption. Instead I found three engineers who were genuinely curious, built small demos that showed concrete time saved rather than talking in the abstract, and ran informal lunch sessions with no attendance requirement attached. I wrote down the wins as they happened, things like a two-hour PR review cycle that shrank to twenty minutes, and put together a shared repo of prompt templates so people didn't have to reinvent them. Within about three months, roughly 70% of engineers across both teams were using the tooling on their own, and I'd become the person people asked when they wanted to get something similar going elsewhere in the org. Looking back, the slow, mandate-free approach cost me a few weeks I could have saved with a memo, but the adoption stuck in a way a memo never would have, and that's the trade I'd make again in a manager-of-managers context where you're multiplying through people, not commands.

---

## 3. Choosing not to rewrite (a hard architecture call under pressure)

**Likely question:** "Tell me about a technical trade-off you had to defend to non-technical stakeholders."

At Alaya our monolith was starting to strain as we scaled, and the team was split between a full microservices rewrite and just living with what we had. Investors wanted new features shipped, not months spent on plumbing, so I couldn't just disappear into an architecture project. I ran a two-week spike comparing both paths with actual load tests instead of opinions, then took the results to the CTO and investors in numbers they could argue with. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and set clear criteria for when we'd extract the next piece. The first module shipped in six weeks and performance on our busiest endpoints improved by around 40%, and we never did the big-bang rewrite the team had been debating for months. The part I'd change is how long it took to get everyone aligned; the benchmarking data cut the argument short once it existed, so if I were doing this again inside a bigger org I'd run that spike in week one instead of after weeks of debate, because data ends these arguments faster than consensus-building does.

---

## 4. Rebuilding trust after joining a much larger, different org

**Likely question:** "Tell me about a time you had to earn credibility somewhere new" / relevant to Berlin-timezone remote leadership.

Joining Benevity meant landing on a team roughly ten times the size of Alaya, with a different language in the codebase, Java instead of what I'd built with, and a different set of processes I hadn't written. My instinct in the first weeks was to point out things that looked wrong by Alaya's standards, and I caught myself doing exactly that a couple of times before I stopped. Instead I spent the first month mapping the existing architecture and just listening before I proposed anything, and I made a point of building relationships with the platform and infra teams before I pushed a single technical opinion their way. That groundwork is what let me contribute to three major cross-team architecture decisions later and become the go-to architecture liaison for the Europe-facing product surface, work that never would have landed if I'd shown up trying to "fix" a team that wasn't asking to be fixed. The lesson that stuck: moving fast on trust-building work is slower up front and faster everywhere after, especially the first time you're leading across teams you didn't build yourself, which is most of what a Director role is.
