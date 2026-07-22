# STAR Stories: Nexthink, Staff Software Engineer

Selected for this role because Nexthink is looking for someone who can drive distributed, high-throughput systems, integrate generative AI as a real product feature, and mentor across teams without necessarily having authority over them. These are the four stories I'd lean on.

---

## Story 1: The strangler fig migration at Alaya

Good for: technical trade-offs under pressure, how I handle technical debt, architecture decisions at scale.

By the time Alaya had signed its first wave of enterprise clients, the monolith I'd built in the first few months was starting to show cracks. Response times on the busiest endpoints were creeping up, and the engineering instinct in the room was to rewrite the whole thing as microservices. Investors weren't interested in a rewrite though, they wanted new features shipping on schedule, so I had to find a path that satisfied both. I spent two weeks running a spike, prototyping both a microservices version and a more surgical extraction, and load tested each against real traffic patterns instead of guessing. The data made the case for me: I proposed pulling out just the two highest traffic modules using a strangler fig pattern and leaving the rest of the monolith alone until it actually needed to move. We shipped the first extracted module in about six weeks, and the busiest endpoints got roughly 40% faster. The monolith stayed stable all the way through the Benevity acquisition, no big rewrite ever happened. Looking back, the hard part wasn't the technical work, it was convincing a room full of smart people that not rewriting everything was the disciplined choice. I'd push for even more upfront benchmarking next time, mostly to shorten that debate.

---

## Story 2: Getting AI tooling to stick without a mandate

Good for: driving generative AI adoption, influence without authority, cross-team technical leadership.

After the Benevity acquisition, I ended up as a Senior Staff IC with no direct reports, but I cared a lot about getting AI assisted development working across two teams that had no reason to listen to me. Rather than pushing a top down rollout, I started small: three engineers who were already curious about the tooling. I built a few internal demos that showed concrete time saved, ran informal lunch and learn sessions with no mandate attached, and put together a shared repo of prompt templates people could actually reuse instead of reinventing. One engineer told me it saved them two hours on a single PR review cycle, and that story traveled faster than any announcement I could have sent. Within three months, about 70% of engineers across both teams were using AI assisted review and generation on their own. It was slower than a top down decree would have been, but it stuck, because people adopted it on their own terms and then told their teammates why. That's roughly the playbook I'd bring to helping Flow's engineering org build real confidence in agent driven executions rather than just shipping a feature nobody trusts yet.

---

## Story 3: Building Alaya's platform from a blank page

Good for: ambiguity, founding engineer instincts, ownership at zero to one.

In 2016 I co-founded Alaya with no product, no customers, and no team, just a decision to build a purpose and impact platform for employee engagement. My job was to architect and build the whole thing largely alone at first, while the business side was already out signing enterprise clients on a platform that didn't exist yet. I picked a pragmatic stack, Node.js, React, and Postgres, deliberately avoiding anything clever, and got a working demo in front of investors within three months. From there I kept expanding: multi-tenant architecture, an API layer, impact reporting, and eventually postal campaign features, while hiring and onboarding the first three engineers and setting up CI/CD and a real code review culture. The platform ended up running for more than 50 enterprise clients across Switzerland and France, and Benevity, a Canadian company valued north of a billion dollars, acquired us in 2021, which felt like the clearest possible validation of those early technical calls. If I did it again I'd invest in observability much earlier, we bolted on proper monitoring later than we should have, and I'd design for multi-tenancy from day one instead of retrofitting it under pressure.

---

## Story 4: Integrating into Benevity's engineering org post-acquisition

Good for: navigating change, working inside a much larger org, cross-functional collaboration.

Going from a ten person startup to a team ten times that size at Benevity meant everything changed at once, a Java based microservices codebase I didn't know, unfamiliar processes, and a culture that didn't move the way Alaya's had. My task was to fold Alaya's capabilities into Benevity's platform without losing the product velocity we'd built our reputation on. I spent the first month mostly listening, mapping out the existing architecture before I proposed a single change, and built relationships with the platform and infra teams before pushing any technical opinions. That patience paid off. I ended up contributing to three major cross-team architecture decisions and became the informal architecture liaison for the Europe facing side of the product. The AI tooling adoption work grew out of the same period, once people trusted my judgment on the existing system, they were more open to trying something new with me. My honest reflection is that I moved too fast in the first few weeks trying to fix things that weren't actually broken, just different. Slowing down and listening first is what made the rest of it work, and it's the same instinct I'd bring into a hybrid team split across product, UX, security, and AI/ML.
