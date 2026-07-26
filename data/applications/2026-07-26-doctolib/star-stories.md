# STAR Stories: Doctolib, Senior Staff Engineer (x/f/m)

Prepared for the BMS/EHR modularization role. Picked for relevance to monolith decomposition, API-first design, and influence-without-authority, since the job description leans heavily on all three.

---

## 1. Splitting the Alaya monolith without a rewrite

This is the story I'd lead with, since it maps almost directly onto what Doctolib is doing with the Ruby monolith right now. At Alaya we'd built the platform as a single Node.js monolith, which was the right call early on, but by year three the busiest endpoints were straining and the team split into two camps: rewrite everything as microservices, or leave it alone and keep shipping features. Investors wanted the second option and engineering wanted the first, and neither side had real data to back their position. I asked for two weeks to run a spike instead of a debate. We built load-test prototypes of both approaches against our actual traffic patterns and I brought the numbers, not opinions, to the CTO and the board. What came out of it was a strangler-fig plan: extract only the two highest-traffic modules first, keep the rest of the monolith as is, and define clear criteria for when to extract the next one. The first module shipped in six weeks and cut latency on those endpoints by about 40%. No big-bang rewrite happened, the monolith stayed stable all the way through the acquisition, and the business kept shipping features the whole time. Looking back, I'd have pushed for the benchmarking step even earlier. The data ended the debate faster than any argument could have, and I should have reached for it on day one instead of after weeks of going in circles.

---

## 2. Driving AI-assisted engineering adoption with no formal authority

At Benevity I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked day to day, specifically by adopting AI-assisted development practices. A mandate from above would have been faster on paper and would have died in a week. Instead I started with three engineers who were already curious, built small internal demos that showed real time saved on real PRs, and ran informal lunch sessions with no obligation to attend. I wrote up prompt templates and committed them to a shared repo so people could just take what worked without asking me first. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation as part of their normal workflow, and I'd become the person people pinged when they wanted to try something new with the tooling. It was slower than a top-down rollout would have been on paper, but it stuck, because people adopted it on their own terms and then explained it to each other, which carries more weight than anything I could have said in a meeting. I'd probably still start the same way if I did it again.

---

## 3. Integrating into a much larger codebase after the Benevity acquisition

When Benevity acquired Alaya in 2021 I went from a five-person team on a codebase I knew line by line to one IC on a Java microservices org roughly ten times the size, with different tooling and a different review culture. My first instinct was to start proposing changes to things that looked wrong to me. I caught myself and spent the first month just mapping how the existing architecture actually worked and why, before I said anything about how it should change. That patience paid off: I built enough trust with the platform and infra teams that when I did raise architectural concerns, people already knew I understood the constraints they were working under. I ended up contributing to three cross-team architecture decisions and became the go-to person bridging Alaya's former capabilities into the new platform. The lesson that stuck with me is that being right early is often worse than being right once people trust you're worth listening to. I moved too fast in week one and it cost me some credibility I had to rebuild.

---

## 4. Deciding what not to build during Alaya's first enterprise year

In our first year signing enterprise clients at Alaya, one of our first large customers asked for a custom SSO integration that would have taken roughly a month of engineering time we didn't have, with a launch date already public. I had to tell the sales team, and eventually the client, that we'd ship a simpler auth flow first and revisit SSO after the initial rollout proved out. That's an uncomfortable conversation to have as a cofounder when the revenue is sitting right there. I put together a short technical brief showing exactly what SSO would touch across the multi-tenant layer we hadn't fully built yet, and proposed a phased plan with a real date for phase two instead of a vague promise. The client accepted it, launched on the simpler flow, and we delivered SSO about six weeks later without it derailing anything else on the roadmap. What I'd change is documenting that kind of tradeoff conversation as a repeatable process sooner. I ended up having a version of the same conversation with three more clients before I turned it into an actual internal playbook.
