# STAR Stories: Lab0 (Founding Engineer)

Prepared for behavioral rounds. Picked for fit with founding-engineer ownership, agent evaluation and context engineering, ambiguity, and cross-team influence without authority.

---

## 1. Building Alaya from a blank page to acquisition

*Best for: "tell me about building something from scratch" / founding engineer questions / how I handle ambiguity*

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, and there was nothing to inherit. No customers, no product, no codebase, and the business was already trying to sign its first enterprise clients while I figured out what to build. My job was to architect and ship the whole thing, alone at first and then with a small team, without slowing the sales conversations already underway. I picked a pragmatic stack, Node.js, React, and Postgres, that wouldn't require a rewrite in a year but also wouldn't waste months over-engineering for scale we didn't have yet. I got a working demo in front of the first prospects within three months, then layered in multi-tenancy, an API layer, and impact reporting as real usage told me what mattered. Once we had traction I hired the first three engineers and set up CI/CD and a review culture before the team got big enough that skipping it would hurt. We ended up with over fifty enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued north of a billion dollars, acquired the company in 2021. Looking back, I'd invest in observability much earlier than we did, we didn't have real APM until things were already painful, and I'd design for multi-tenancy from day zero instead of retrofitting it once the first big client demanded it.

---

## 2. Building the eval loop before trusting the agent

*Best for: agent evaluation / context engineering / how I judge whether AI output is good enough to ship*

At Benevity I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't report to me to actually adopt AI-assisted development instead of treating it as a novelty. The task was to change how people worked without a mandate, since a top-down directive from someone outside their chain would have gotten polite nodding and nothing else. I started with three engineers who were already curious, built small internal demos that showed concrete time saved rather than talking about potential, and ran informal lunch sessions with no attendance requirement. The part that mattered most was building reusable prompt templates and committing them to a shared repo so people could steal working patterns instead of reinventing prompts from scratch, and documenting specific wins like shaving two hours off a PR review cycle so the value was legible, not anecdotal. Within three months about 70% of engineers across both teams were using AI-assisted review and generation daily, and I became the informal AI tooling lead for the org without ever holding the title. What I'd do differently is build a lighter evaluation rubric earlier, in the early weeks I was judging output quality by feel, and having even a rough scoring framework from week one would have made the case faster and more defensible.

---

## 3. Choosing the strangler fig over the rewrite under investor pressure

*Best for: technical trade-offs / handling technical debt / decisions under pressure*

At Alaya our monolith started showing real scaling cracks right as investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and patching the monolith, and I needed to make a call that wouldn't blow up delivery for the next two quarters. I ran a two-week spike with actual load tests on both approaches instead of letting it become an opinion contest, then brought the CTO and investors numbers instead of a recommendation dressed up as a fact. From there I proposed a strangler fig migration, extract the two highest-traffic modules first and leave the rest of the monolith alone, with explicit criteria for when we'd extract the next one. The first module shipped in six weeks, latency on our busiest endpoints dropped about 40%, and the rest of the monolith held together fine all the way through the acquisition. No big-bang rewrite ever happened. The hardest part honestly wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice rather than the lazy one, and having the load test numbers up front is what would have cut that debate shorter if I did it again.

---

## 4. Learning an unfamiliar codebase before touching it

*Best for: navigating ambiguity / troubleshooting unfamiliar systems / cross-functional collaboration*

When Benevity acquired Alaya in 2021 I went from a five-person engineering team I'd built myself to a team ten times the size, a different language, Java instead of Node, and a microservices architecture I hadn't touched. My task was to integrate Alaya's capabilities into their platform while keeping up the product velocity we'd had, without becoming the outsider who shows up and tries to fix things that aren't broken. I spent the first month doing nothing but reading their architecture, tracing request paths, and asking platform and infra engineers questions before I proposed a single change. Once I understood how their systems actually worked, not how I assumed they worked, I started building relationships with the platform team and earned enough trust to push technical opinions that people would actually consider. That groundwork paid off: I contributed to three major cross-team architecture decisions and became the architecture liaison for the Europe-facing product surface. My honest reflection is that I moved too fast in the first couple of weeks trying to apply Alaya patterns before I understood why Benevity's systems looked the way they did, and slowing down to listen first is what actually made me effective later.
