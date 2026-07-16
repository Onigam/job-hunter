# STAR Stories: Staff DevOps Engineer (Runware)

Selected for an infrastructure-heavy, production-ownership role. Prose, first person, casual but precise.

---

## 1. Choosing a migration path instead of a rewrite when the monolith started cracking

This is the story I'd lead with for an infrastructure role, since it's the clearest case of a technical trade-off with real consequences attached. At Alaya, our monolith was starting to show scaling cracks right as investors were pushing hard for new features, not a rewrite. My task was to make a defensible call between a full microservices rewrite and something less dramatic, without either stalling the roadmap or letting the platform degrade under load. I ran a two-week technical spike comparing both approaches with actual prototype load tests, then presented the trade-offs to the CTO and investors with numbers instead of opinions. What I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and set clear criteria for when to extract anything further. The first extracted module shipped in six weeks and cut latency on our busiest endpoints by roughly 40%. The rest of the monolith held up fine through the acquisition, no big-bang rewrite needed. If I did it again, I'd push for the load-test benchmarking even earlier, since the data ended the debate faster than any argument did.

---

## 2. Building operational discipline before anyone asked for it

Early at Alaya, I was the only engineer, and there was real pressure to just ship features since the business was closing its first enterprise clients. My task was to build a platform that wouldn't fall over as we scaled, which meant making infrastructure calls nobody was asking me to make yet. I picked a pragmatic stack that could grow without over-engineering for scale we didn't have, and once I hired the first three engineers, I put in CI/CD, code review, and basic architecture documentation before it was strictly necessary, because retrofitting that kind of discipline onto a team that's already moving is much harder than building it in from the start. The platform reached production, scaled to over 50 enterprise clients across Switzerland and France, and held together well enough that Benevity's technical due diligence didn't turn up anything that stalled the acquisition. The part I'd change: I added proper observability later than I should have, and multi-tenancy retrofitting cost more time than designing for it from day one would have. That's a lesson I now apply by default, instrument first, before I'm tempted to skip it.

---

## 3. Mapping a system before touching it, after joining a team ten times the size

After Benevity acquired Alaya in 2021, I joined a team about ten times larger than what I was used to, working across Java and microservices instead of the Node.js monolith I'd built myself. My task was to help integrate Alaya's capabilities into Benevity's platform without losing the product velocity we'd had, and without assuming my old opinions about how things should work still applied. I spent the first month just mapping the existing architecture and asking questions before proposing any changes, and I built relationships with the platform and infra teams before pushing technical positions on them. That groundwork paid off: I became a cross-team architecture liaison for the Europe-facing product surface and contributed to three major architecture decisions over the following year. Early on I moved too fast trying to fix things that weren't actually broken, just unfamiliar to me, and slowing down to listen first made every opinion I offered afterward land better. That's the instinct I'd bring to a new infrastructure stack now, understand the failure modes before changing anything.

---

## 4. Getting engineers to adopt new tooling without any authority to require it

At Benevity I was a senior IC with no direct reports, and I was asked to get AI-assisted development practices adopted across two teams that didn't report to me. Nobody was going to follow a mandate from someone without a management title, so the task was really about proving value on a small scale before asking for anything bigger. I started with three engineers who were already curious, built internal demos around their actual work instead of synthetic examples, ran informal sessions with no attendance requirement, and put reusable templates into a shared repo so the practice didn't depend on me being in the room. I tracked results as they came in, hours saved on a PR review cycle, rather than waiting for a big rollout moment to claim success. Within three months, about 70% of engineers across both teams were using the workflows I'd introduced. It was slower than a top-down rollout would have been, but it stuck, since people who'd opted in on their own terms ended up advocating for it themselves. That's the approach I'd use again for pushing any new tooling or process, on-call practices included, onto a team that doesn't have to listen to me.
