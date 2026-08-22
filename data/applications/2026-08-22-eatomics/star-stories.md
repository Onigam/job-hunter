# STAR Stories: Eatomics (Technical Co-Founder / CTO)

Picked for a founding-engineer / CTO conversation: building from nothing, making architecture calls without a safety net, and leading people who don't report to you. Same shape as the Eatomics role, where I'd own the stack, the team, and the founder relationship from day one.

---

## Story 1: Building Alaya from Zero to Acquisition

**Why this one:** they'll want to know I've actually done the "one engineer, no product, go" thing before, since that's exactly what year one at Eatomics looks like.

In 2016 I co-founded Alaya, an employee purpose and impact platform, with nothing but a blank page and a couple of early conversations with prospective clients. My job was to architect and build the whole thing myself first, then grow a team while the business signed its first enterprise contracts, so there wasn't room for a slow ramp-up. I picked Node.js, React, and PostgreSQL because they'd scale without forcing me to over-engineer something nobody had validated yet, got core features live for a first demo inside three months, and kept expanding from there: multi-tenant architecture, an API layer, impact reporting, postal campaigns. Once revenue justified it I hired and onboarded the first three engineers and put in CI/CD and a real code review culture before the codebase got big enough to punish us for skipping it. The platform ended up serving 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued north of a billion dollars, acquired us, which told me the early calls had held up under real growth. If I did it again I'd invest in observability much earlier, since we didn't get proper APM in place until it was overdue, and I'd design for multi-tenancy from day zero instead of retrofitting it later.

---

## Story 2: Making a Hard Architecture Decision Under Pressure

**Why this one:** shows I can make a build-versus-rewrite call with investors breathing down my neck, which is the exact position a technical co-founder ends up in constantly.

A couple of years into Alaya, our monolith started showing real scaling cracks, and the team split into two camps: rewrite everything as microservices, or keep it as a modular monolith. Investors wanted new features shipped, not months spent on a rewrite, so I needed a decision that could survive that pressure with evidence behind it rather than just an opinion. I ran a two-week technical spike comparing both approaches with actual prototype load tests, then presented the trade-offs to the CTO and investors using those numbers instead of arguing from conviction. The path I proposed was a strangler fig migration: extract the two highest-traffic modules first, leave the rest monolithic, and define clear criteria for when the next module was worth pulling out. We shipped the first extracted module in six weeks and saw about a 40% performance improvement on the busiest endpoints, and the remaining monolith stayed stable all the way through the acquisition without ever needing the big rewrite. The hardest part wasn't the technical work, it was convincing people that not rewriting everything was the right call; the data did most of that convincing for me, and next time I'd front-load even more benchmarking to cut that debate shorter.

---

## Story 3: Leading Without Formal Authority

**Why this one:** at a two-person startup there's no org chart to lean on, so this is the closest proof point I have for getting people to change how they work through persuasion instead of a mandate.

At Benevity I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't report to me to actually adopt AI-assisted development practices, not just tolerate them. Rather than pushing a top-down initiative, I started with three engineers who were already curious, built internal demos that showed concrete time savings, and ran informal lunch-and-learn sessions with no mandate attached, just working examples. I put together reusable prompt templates, committed them to a shared repo so people could take what worked without asking permission, and wrote up results as they came in, including one story about saving roughly two hours on a single PR review cycle. Within three months about 70% of engineers across both teams were using AI-assisted review and generation day to day, and I ended up as the informal AI tooling lead for the org even though nobody assigned me that title. It was slower than a top-down rollout would have been, but it stuck, because people who adopt something on their own terms end up advocating for it themselves, which a decree never gets you.

---

## Story 4: Post-Acquisition Integration at Benevity

**Why this one:** shows I know how to align with someone else's vision and team instead of just imposing mine, which matters when the whole job is partnering with a non-technical founder.

When Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I'd worked in, with a different culture, a Java-based microservices codebase instead of the one I knew inside out, and processes I hadn't shaped. My task was to integrate Alaya's capabilities into that platform while still shipping new features, without losing the velocity we'd built as a small team. I spent the first month just mapping the existing architecture before proposing anything, built relationships with the platform and infra teams before pushing technical opinions on them, and only then started driving adoption of AI-augmented workflows across the org. That patience paid off: we migrated the core Alaya features into Benevity's platform, I contributed to three major cross-team architecture decisions, and I became the go-to person for AI tooling adoption across two engineering teams. My honest reflection is that I moved too fast early on trying to fix things that weren't actually broken in the new org, and slowing down to listen first is what turned that around.
