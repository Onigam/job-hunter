# STAR Stories — Ashby / Staff Product Engineer, EU

---

## Story 1: Building Alaya from Zero to Acquisition

**Likely questions:** "Tell me about a project you owned end to end." / "How do you work with minimal process?" / "What does product ownership mean to you as an engineer?"

In 2016, my co-founder and I started Alaya with a blank page. No product, no customers, no inherited codebase, no PM or designer handing me a spec. The idea was an employee purpose and impact platform for enterprises, and for the first stretch I was the only engineer, which meant every product call, every design call, and every line of code ran through me. I picked Node.js, React, and PostgreSQL early on, mostly because I wanted to hire easily later and not fight the framework in the meantime. We got to a first demo in about twelve weeks.

After that it became a loop: customer calls in the morning, code in the afternoon, architecture decisions in the evening, with no separation between "product" and "engineering" because there was no one else to do the product part. When the first paying clients came in, I hired three engineers, set up CI/CD, and wrote the architecture docs that let someone else understand the system without me in the room.

We reached production with 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian company valued north of a billion dollars, acquired us in 2021. Looking back, the acquisition was a real test of whether product-and-engineering-in-one-head actually produces something sound, and it did. What I'd do differently: design for multi-tenancy from day zero instead of retrofitting it eighteen months in, and add real observability much earlier than we did.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Likely questions:** "Tell me about a technical trade-off you had to defend." / "How do you handle technical debt when the business wants features?" / "Describe a time you balanced speed with quality."

About two years into Alaya, the monolith was showing cracks under load, and the team had been arguing for three weeks about a full microservices rewrite versus staying the course. Investors wanted new features, not an infrastructure project, so the debate itself was costing us velocity.

I ran a two-week technical spike, building prototypes for both the extraction approach and a modular monolith approach, and load-tested each one. Then I presented the trade-offs to the CTO and investors with numbers instead of opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest monolithic, and define clear criteria for when further extraction would actually pay off.

We shipped the first extracted module in six weeks. Performance improved about 40% on the busiest endpoints, and the rest of the monolith held up fine through the acquisition. No big-bang rewrite happened, and we didn't lose a quarter of product velocity to an infrastructure project nobody could point to a clear win from.

The hardest part was convincing people that not rewriting everything was the right call. Data made that argument for me. Next time I'd run the spike in week one instead of week three, since most of the three weeks of debate could have been skipped entirely.

---

## Story 3: Driving AI Tooling Adoption Without a Mandate

**Likely questions:** "How do you influence a team you don't manage?" / "Tell me about introducing a new practice with no formal authority." / "How do you create leverage for a whole team?"

After Benevity acquired Alaya, I was a senior staff IC with no direct reports, on a team ten times the size of what I was used to. I wanted engineers to start using AI-assisted development, code review, generation, prompt patterns, but I had no mandate to make anyone do anything.

Pushing it top-down would have gotten compliance on paper and nothing in practice, so I started with three engineers who were already curious, ran small demos on things they were already doing, PR reviews and boilerplate mostly, and built a handful of reusable prompt templates that I committed to a shared repo instead of keeping in my head.

Once those three had real stories to tell, I ran informal lunch-and-learn sessions, no required attendance, and let word of mouth do the rest. I documented concrete outcomes where I could, like one engineer saving roughly two hours on a review cycle using a template I'd written.

Within three months, around 70% of engineers on both teams were using AI-assisted workflows regularly, and I'd become the informal go-to person for it across the org. What stuck with me: mandate-free adoption is slower to start but much stickier, because people who adopt something on their own terms end up advocating for it themselves.

---

## Story 4: Post-Acquisition Integration at Benevity

**Likely questions:** "How do you operate in an unfamiliar codebase or team?" / "Tell me about earning trust in a new organization." / "Describe navigating a lot of ambiguity."

When Benevity acquired Alaya in 2021, I went from a five-person team to a company with fifty-plus engineers, a Java microservices platform I'd never touched, and dedicated platform, infra, and QA teams I'd have to work through rather than around.

My task was to get Alaya's capabilities integrated into Benevity's platform without losing the speed we'd built, and without burning bridges in an org where nobody knew me yet.

I spent the first month just reading code and sitting in architecture reviews, asking questions instead of pushing opinions. I built relationships with the platform and infra engineers before I proposed anything, and when I did have suggestions, I framed them around their constraints rather than mine.

The core Alaya features migrated into Benevity's platform within the first year, and I ended up contributing to three major cross-team architecture decisions. The thing I'd carry into any new team: a new environment is a listening exercise first. I moved too fast trying to fix things that weren't actually broken, and slowing down is what made people willing to work with me at all.
