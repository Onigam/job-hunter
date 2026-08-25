# STAR Stories: Nexthink, Staff Software Engineer (AI-native Automation)

Picked for this role because Flow is a greenfield AI initiative inside an established product, which means ambiguity, architecture trade-offs, cross-team influence, and real generative AI adoption all come up in the same job. These four cover that spread.

---

## 1. Building Alaya from zero (greenfield ambiguity)

**Likely question:** "Tell me about navigating a greenfield project with evolving priorities" or "how do you handle ambiguity."

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, and there was nothing to build on: no customers yet, no product, no team. My job was to architect and build the whole thing from scratch while the business was closing its first enterprise clients, which meant the ground kept shifting under whatever I was building that week. I picked a pragmatic stack, Node.js, React, Postgres, that could scale without forcing early over-engineering, and got a working demo in the first three months because that's what unlocked the next round of client conversations. From there I built out multi-tenancy, an API layer, and reporting iteratively, and hired the first three engineers once there was enough surface area to justify a team, setting up CI/CD and a review culture as I went. The platform ended up serving over 50 enterprise clients across Switzerland and France and Benevity, a Canadian unicorn, acquired the company in 2021, which told me the early calls held up under real load. If I did it again I'd invest in observability sooner; we bolted on proper APM late and paid for that in debugging time, and I'd design the multi-tenant model from day zero instead of retrofitting it once the pain showed up.

---

## 2. Choosing a strangler-fig migration over a rewrite (architecture under pressure)

**Likely question:** "Tell me about a technical trade-off you navigated" or "how do you handle technical debt."

At Alaya our monolith started showing scaling cracks right as investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and a more conservative modular monolith, and somebody had to make a defensible call under real time pressure. I ran a two-week spike with load tests on both approaches and brought the CTO and investors concrete numbers instead of opinions, since "trust me" wasn't going to fly with a rewrite that size. What I proposed was a strangler-fig approach: extract only the two highest-traffic modules first, leave the rest of the monolith alone, and define clear criteria for when the next module earned extraction. The first module shipped in six weeks and cut latency by roughly 40% on our busiest endpoints, and the rest of the monolith stayed boring and stable straight through the acquisition, no big-bang rewrite required. The harder part honestly wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice; next time I'd front-load the benchmarking so that argument takes days instead of weeks.

---

## 3. Driving AI tooling adoption with no direct reports (generative AI, mentorship)

**Likely question:** "Tell me about integrating generative AI into a team's workflow" or "how do you influence without authority."

At Benevity I was a Senior Staff IC with no direct reports, and I wanted two teams that didn't answer to me to actually change how they worked by folding AI-assisted development into their daily routine. A mandate wasn't an option, so I started small: three engineers who were already curious got early access and honest feedback sessions. I built internal demos that showed real time savings on real PRs rather than a scripted example, ran informal lunch-and-learns with no attendance requirement, and put together a shared repo of prompt templates people could actually reuse instead of reinventing per person. I also wrote down results as they came in, things like a specific PR review cycle that dropped by two hours, because a story with a number in it travels further than a slide. Within three months about 70% of engineers across both teams were using AI-assisted review or generation regularly, and I ended up the informal AI tooling lead for the org without anyone appointing me to it. It was slower than a top-down rollout would have been, but people who opt in on their own terms keep advocating for the thing afterward, which a decree doesn't get you.

---

## 4. Integrating into a much larger org post-acquisition (cross-functional partnership)

**Likely question:** "Tell me about working across large, unfamiliar teams" or "navigating organizational change."

When Benevity acquired Alaya in 2021 I joined a team roughly ten times the size of what I'd worked in before, running a different stack, Java and microservices instead of what I knew, with different processes and a culture I hadn't built. The task was to fold Alaya's capabilities into Benevity's platform while still shipping new features, without losing the velocity that had gotten us acquired in the first place. I spent the first month just mapping the existing architecture before proposing anything, and made a point of building relationships with the platform and infra teams before pushing any technical opinion their way, since arriving with answers before questions tends to backfire in a bigger org. That groundwork paid off: I contributed to three major cross-team architecture decisions and became the go-to person bridging Europe-facing product work with the platform and infra sides. My honest reflection is that I moved too fast early on trying to fix things that weren't actually broken in the new context; slowing down and listening first made me noticeably more effective once I course-corrected.
