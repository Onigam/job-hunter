# STAR Stories - Swayable, Staff Engineer: AI and Scientific Computing

Picked for a role that's part architecture, part mentoring, part "convince people with data, not opinions." Source: profile/star-bank.md, adapted in first person for this interview.

---

## 1. Making a hard architecture call with data instead of opinions

Best for: "How do you make technical decisions?" / "Tell me about using data to settle a disagreement," maps directly to the scientific-method requirement in the JD.

At Alaya, we hit the point every growing platform hits: the monolith was starting to show scaling cracks, and half the team wanted a full microservices rewrite while the other half wanted to just keep shipping features, since investors were pushing hard for the latter. I needed a decision that would hold up technically and that I could defend to non-engineers with something better than "trust me." So I ran a two-week spike, built prototypes of both approaches, and load-tested them instead of debating them in the abstract. When I presented to the CTO and investors, I brought numbers, not preferences, and proposed a middle path: a strangler-fig migration that pulled out only the two highest-traffic modules and left the rest of the monolith alone. We shipped the first extracted module in six weeks, and the busiest endpoints got about 40% faster. The rest of the system stayed stable straight through the acquisition, so there was never a big-bang rewrite to justify. What I'd do differently is start the benchmarking earlier. Half the debate would have ended sooner if I'd had the numbers on day one instead of after two weeks of arguing.

---

## 2. Building the platform from a blank page

Best for: "Tell me about building something from scratch" / architecture ownership / founding-engineer type roles.

In 2016 I co-founded Alaya with nothing on the table, no product, no customers, just an idea about employee purpose and engagement. I was the only engineer for the first stretch, so every architectural choice was mine to make and mine to live with. I picked a stack that was boring on purpose, Node.js, React, Postgres, because we needed to move fast without accumulating debt we couldn't pay down later. The first three months went into getting something demoable in front of a first enterprise client, and from there it was constant iteration: multi-tenancy, an API layer, impact reporting, and eventually a team to help carry it. By the time we were acquired by Benevity, a Canadian unicorn valued north of a billion dollars, we had over 50 enterprise clients across Switzerland and France running on a system I'd designed from the first commit. Looking back, I'd have put real observability in place much earlier than we did, and I'd design for multi-tenancy from day zero instead of retrofitting it once it started to hurt.

---

## 3. Leading a team that didn't report to me

Best for: "How do you influence without authority?" / mentoring engineers and data scientists, which the JD calls out directly.

At Benevity I was a senior IC with no direct reports, but I wanted to get two teams that didn't answer to me to actually adopt AI-assisted development instead of treating it as a novelty. Mandating it wasn't an option, so I started small: three engineers who were already curious, a few internal demos that showed real time saved rather than a slide deck about the future of AI. I ran informal lunch-and-learn sessions with no agenda beyond "here's what this looks like on a real PR," and I committed a set of reusable prompt templates to a shared repo so the habit could spread on its own. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation day to day, and I'd become the person people came to when they wanted to get better at it. It was slower than just announcing a policy, but it stuck, because people who adopt something on their own terms end up defending it to their peers in a way a top-down memo never gets you.

---

## 4. Working inside a much bigger, unfamiliar system

Best for: "Tell me about joining a new team or codebase" / cross-functional collaboration across engineering, data science, and product, which this role sits at the center of.

When Benevity acquired Alaya in 2021, I went from being the architect of a small platform to one senior engineer among many on a team ten times the size, with a different language, Java instead of Node, a different codebase, and different habits around how decisions got made. My task was to fold Alaya's capabilities into Benevity's platform without losing the product speed we'd had as a five-person startup. I spent the first month mostly listening, mapping out the existing architecture and the reasons behind decisions that looked odd to me at first glance, before I proposed anything. Once I understood the shape of the system, I focused on building relationships with the platform and infra teams before pushing any technical opinion their way. That groundwork paid off: I ended up contributing to three major cross-team architecture decisions and became the informal bridge for the Europe-facing side of the product. My honest reflection is that I moved too fast early on trying to fix things that weren't actually broken, just unfamiliar. Slowing down and listening first is what made the rest of it work.
