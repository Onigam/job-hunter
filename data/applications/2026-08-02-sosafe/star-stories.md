# STAR Stories: SoSafe, Staff IT Engineer (Automation & AI Transformation)

Picked for: driving AI-native adoption without formal authority, moving workflows from experimental to production-grade, mentoring existing teams, and making pragmatic architecture calls under pressure.

---

## 1. Driving AI tooling adoption across two teams with no mandate

This one maps directly to "advocate, mentor, enable early adopter teams" and working with citizen coders.

At Benevity I was a senior staff IC with no direct reports, and I wanted two engineering teams that didn't report to me to actually change how they worked day to day, not just try a tool once and drop it. Nobody had asked me to do this, and I had no authority to make it happen top down, so I didn't try. I found three engineers who were already curious about AI-assisted development and just worked with them first, building small internal demos that showed real time saved on things like PR review cycles instead of pitching the idea in the abstract. From there I ran a few informal lunch sessions, no calendar invite from a manager, just people showing up because the demos were useful, and I put together a shared repo of prompt templates so the habit could spread without me being in the room. Within three months about seventy percent of both teams were using AI-assisted review and generation as part of their normal workflow, and I'd become the person people came to before rolling out anything new in that space. It was slower than a top-down rollout would have been, but it stuck, because people adopted it because it worked for them, not because someone told them to. If I'd tried to mandate it, I think it would have generated the usual malicious compliance and quietly died within a quarter.

---

## 2. Building a platform from a blank page under real business pressure

Relevant to architecting a toolchain from nothing while the business keeps moving.

In 2016 I co-founded Alaya with literally nothing built yet, no customers signed, and the pressure to get to a first demo fast because the business side was already talking to enterprise prospects. My job was to make the architecture calls alone at first, and make them fast enough that they wouldn't need to be redone six months later. I picked Node.js, React and PostgreSQL specifically because none of them required me to solve problems we didn't have yet, and I got the core product to a first demo inside three months. From there I kept expanding deliberately, multi-tenant architecture, an API layer, impact reporting, always adding the next layer only once the current one was solid, and I hired and onboarded the first three engineers while setting up the CI/CD and code review habits that let the team grow without the codebase degrading. That platform ended up with over fifty enterprise clients across Switzerland and France and got acquired by Benevity in 2021, which is about as strong a signal as you can get that the early calls held up. The thing I'd do differently is invest in observability sooner. We didn't have proper APM until fairly late, and there were a few incidents where I was debugging blind that real instrumentation would have caught in minutes.

---

## 3. A hard build-versus-extract call, backed by data instead of opinion

Relevant to the pragmatic mindset the role asks for, balancing speed against cost through hybrid approaches rather than all-or-nothing rewrites.

At Alaya the monolith started showing real scaling cracks right as investors were pushing hard for new features, not a rewrite. The team was split between a full microservices rewrite and just patching the monolith further, and both investors and engineers had strong opinions that weren't really backed by anything concrete. I ran a two-week technical spike comparing both approaches with actual prototype load tests, then presented the trade-offs to the CTO and investors using those numbers instead of arguing from conviction. What we landed on was a strangler fig approach: extract only the two highest-traffic modules first, leave the rest of the monolith alone, and set clear criteria for when it would be worth extracting anything else. The first extracted module shipped in six weeks and cut load on our busiest endpoints by roughly 40 percent, and the remaining monolith stayed stable all the way through the acquisition, so we never needed the big-bang rewrite people were originally pushing for. Looking back, the hardest part wasn't the technical work, it was convincing people that not rewriting everything was actually the disciplined choice. I'd do the load-test benchmarking even earlier next time, since the data ended up cutting the debate short far faster than any argument did.

---

## 4. Mapping an unfamiliar system before touching it, then earning the right to change it

Relevant to mentoring and leveling up an existing IT engineering team without steamrolling how they already work.

When Benevity acquired Alaya in 2021, I landed on a team roughly ten times the size of what I'd worked with before, running a Java microservices codebase that had nothing in common with what I'd built. My instinct early on was to start fixing things that looked wrong to me, and that instinct was mostly wrong, because plenty of those things weren't actually broken, they were just unfamiliar. So I spent the first month doing nothing but mapping how the existing architecture actually worked and building relationships with the platform and infrastructure teams before I proposed a single change. Once people trusted that I understood the system rather than just showing up with opinions, I ended up contributing to three major cross-team architecture decisions and became a go-to person for AI tooling adoption across two teams. The lesson that stuck with me is that credibility with an existing team has to be earned by understanding their system on its own terms first. Moving fast to "fix" things before that happens just reads as arrogance, even when some of the underlying instincts turn out to be right.
