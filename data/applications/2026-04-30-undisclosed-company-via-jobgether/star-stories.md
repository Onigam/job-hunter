# STAR Stories — Staff Software Engineer (Remote EU) via Jobgether

---

## 1. Building a Platform from Zero to Acquisition
*Best for: founding engineer / technical ownership / ambiguity / architecture from scratch*

When I co-founded Alaya in 2016, I was the only technical person on the team. We had a product concept, a few enterprise prospects, and no runway to get the architecture wrong. My job was to build something real fast enough to close the first clients, and solid enough to survive growth once we did.

I spent the first two weeks on stack selection and data modeling before writing a line of application code. Node.js, React, PostgreSQL: pragmatic, well-understood, hiring-friendly. Multi-tenant from day one, because retrofitting it later would have been brutal. I had the core platform running in three months. Over the following year I added the API layer, impact reporting, postal campaign workflows, and the first enterprise HR integrations. When the team grew, I hired and onboarded the first three engineers, set up the CI/CD pipeline and code review culture, and wrote the architectural docs that let people move independently.

By 2021 we had 50+ enterprise clients across Switzerland and France, and Benevity, a $1B+ Canadian unicorn, acquired us. The acquisition was the validation: the technical decisions from day one held up through hypergrowth and an integration into a ten-times-larger engineering org.

What I'd do differently: I'd instrument the system much earlier. We added proper APM late, which meant too many production incidents where we were debugging blind. I'd also treat multi-tenancy as a first-class architectural concern in week one rather than the first sprint, because "I'll do it properly soon" is almost always a lie.

---

## 2. A Hard Architecture Decision Under Pressure
*Best for: technical trade-offs / handling debt / navigating uncertainty / stakeholder alignment*

Around 2018, Alaya's monolith was starting to crack. Two high-traffic modules were causing latency spikes that affected the whole platform. The team was split: some wanted a full microservices rewrite, others wanted to stay monolithic and just optimize. Investors were pushing for new features, not architecture work. Everyone had strong opinions and no data.

My task was to make a decision that could actually be defended, and get both the engineering team and leadership to commit to it.

I pushed for a two-week technical spike before any decision was made. We built lightweight prototypes and ran load tests against both approaches on realistic data volumes. Then I put together a comparison for the CTO and investors: not opinions about microservices versus monolith, but projected delivery timelines, risk profiles, and concrete performance numbers. The recommendation was a strangler fig migration: extract the two most-stressed modules first, keep everything else monolithic, define explicit criteria for when to extract more.

We shipped the first extracted module six weeks later. Performance on those endpoints improved by roughly 40%. The rest of the monolith stayed stable through the acquisition. No big-bang rewrite was ever needed.

What the data actually does is end debates. The harder lesson: "don't rewrite everything" is a much tougher sell than it should be. I'd have the benchmarks ready earlier next time to shorten that conversation.

---

## 3. Post-Acquisition Integration in a Larger Org
*Best for: navigating change / cross-functional collaboration / working in large teams / influence without authority*

After Benevity acquired Alaya in 2021, I joined an engineering org roughly ten times larger than what I'd built. Different culture, Java microservices instead of Node.js, formal review gates instead of our scrappy process. The pressure was to integrate Alaya's core features into Benevity's platform without stalling the product roadmap.

My instinct was to move fast and fix things. It took about a month of friction before I recognized that was the wrong approach.

What worked: I spent the first four weeks mapping the architecture and meeting people before making any technical proposals. I built relationships with the platform and infra teams before pushing opinions. When I did start contributing to architecture discussions, I already understood the real constraints, not the ones I'd assumed. Over the following year I contributed to three major cross-team architecture decisions and migrated the core Alaya features into Benevity's platform without a major incident. I also became the go-to person for AI tooling adoption across two teams, which wasn't in anyone's original plan but happened because I'd taken the time to understand what people actually needed.

The integration succeeded and the teams ended up working well together. More concretely, I shipped something that required buy-in from five different teams by making the relationships before I needed them.

What I'd do differently: ask for a formal 30/60/90-day ramp plan on day one instead of figuring it out alone. New-org context is expensive to recover if you don't front-load the investment.

---

## 4. Driving Adoption Without a Mandate
*Best for: leading without authority / change management / Staff/principal IC influence / AI tooling*

At Benevity in 2023, I was a Senior Staff IC with no direct reports. I wanted two engineering teams to adopt AI-assisted code generation and review as part of their daily workflow. Neither manager had mandated anything, and most engineers were skeptical about whether these tools actually saved meaningful time on real production codebases.

I decided not to push for a mandate. Instead I started with three engineers who were curious. I built internal demos using actual PRs from our codebase, not toy examples, and focused on showing concrete time savings on tasks people already found tedious. I ran informal lunch-and-learn sessions, no agenda beyond "here's something that worked for me." I committed a shared repo of reusable prompt templates for our most common engineering tasks and documented real results: "saved two hours on a PR review cycle," "caught a class of null-pointer we'd been missing."

Within three months, around 70% of engineers on both teams were using AI-assisted review and generation regularly. The mandate-free approach was slower, but the stickiness was much better. Engineers who adopt something on their own terms become advocates; engineers who are told to adopt it look for reasons it doesn't work.

The reflection: the key was starting with people who were already curious and letting the results speak before expanding the scope. A top-down decree would have created compliance, not adoption.
