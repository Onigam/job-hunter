# STAR Stories: Nexthink, Chief Architect

Picked for this one because the role is leadership through credibility over a team of senior architects, hands-on architecture at platform scale, and a live AI initiative all at once. These four map to that combination directly.

---

## 1. Making a hard architecture decision under pressure (platform-scale trade-offs)

**Likely question:** "How do you set architectural direction when the business wants features, not a rewrite?" or "tell me about a technical trade-off with real stakes."

At Alaya our monolith started cracking under load right as investors were pushing hard for new features, not a rewrite. The team split between a full microservices rewrite and a more conservative modular monolith, and somebody had to make a defensible call under real time pressure, which at that point was mine to make. I ran a two-week spike with load tests on both approaches and brought the CTO and investors concrete numbers instead of opinions, since nobody was going to sign off on a rewrite that size on trust alone. What I proposed was a strangler-fig approach: pull out only the two highest-traffic modules first, leave the rest of the monolith alone, and set clear criteria for when the next module earned extraction. The first module shipped in six weeks and cut latency by roughly 40% on our busiest endpoints, and the rest of the monolith stayed stable straight through the acquisition, no big-bang rewrite required. The harder part wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice; next time I'd front-load the benchmarking so that argument takes days instead of weeks.

---

## 2. Leading without formal authority (credibility over hierarchy)

**Likely question:** "This role leads through credibility, not a reporting line. Tell me about influencing engineers who don't answer to you."

At Benevity I was a Senior Staff IC with no direct reports, and I wanted two teams outside my org to actually change how they worked by folding AI-assisted development into their daily routine. A mandate wasn't on the table, so I started small: three engineers who were already curious got early access and honest feedback sessions. I built internal demos that showed real time savings on real pull requests rather than a scripted example, ran informal lunch-and-learns with no attendance requirement, and put together a shared repo of prompt templates people could reuse instead of reinventing on their own. I also wrote down results as they landed, a specific PR review cycle that dropped by two hours, because a story with a number in it travels further than a slide deck. Within three months about 70% of engineers across both teams were using AI-assisted review or generation regularly, and I ended up the informal AI tooling lead for the org without anyone appointing me to it. It was slower than a top-down rollout, but people who opt in on their own terms keep advocating for the thing afterward, which a decree never gets you.

---

## 3. Building a platform from zero to acquisition (vision plus hands-on ownership)

**Likely question:** "Tell me about owning architecture end to end" or "how do you balance long-term vision with what has to ship this quarter."

In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement, with nothing to build on: no customers yet, no product, no team. My job was to architect and build the whole thing from scratch while the business closed its first enterprise clients, so the ground kept shifting under whatever I was building that week. I picked a pragmatic stack, Node.js, React, Postgres, that could scale without forcing early over-engineering, and got a working demo in the first three months because that unlocked the next round of client conversations. From there I built out multi-tenancy, an API layer, and reporting iteratively, and hired the first three engineers once there was enough surface area to justify a team, setting up CI/CD and a review culture as I went. The platform ended up serving over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired the company in 2021, which told me the early architecture calls held up under real load. If I did it again I'd invest in observability sooner, since we bolted on proper APM late and paid for it in debugging time, and I'd design the multi-tenant model from day zero instead of retrofitting it once the pain showed up.

---

## 4. Integrating into a much larger organization (aligning architecture across teams)

**Likely question:** "How do you align architecture decisions across teams and with the product roadmap?" or "tell me about working across large, unfamiliar orgs."

When Benevity acquired Alaya in 2021 I joined a team roughly ten times the size of what I'd worked in before, running a different stack, Java and microservices instead of what I knew, with different processes and a culture I hadn't built. The task was to fold Alaya's capabilities into Benevity's platform while still shipping new features, without losing the velocity that had gotten us acquired in the first place. I spent the first month mapping the existing architecture before proposing anything, and made a point of building relationships with the platform and infra teams before pushing any technical opinion their way, since showing up with answers before questions tends to backfire in a bigger org. That groundwork paid off: I contributed to three major cross-team architecture decisions and became the go-to person bridging Europe-facing product work with the platform and infra sides. My honest reflection is that I moved too fast early on trying to fix things that weren't actually broken in the new context; slowing down and listening first made me noticeably more effective once I course-corrected.
