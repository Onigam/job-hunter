# STAR+R Stories: Mistral, Engineering Team Lead, Sandbox

Role focus: people management (hiring, coaching, performance) plus hands-on infra work on isolation, fleet density and creation latency. Expect questions on leading a team while still coding, performance trade-offs, security boundaries, and working with product teams who consume your primitives.

---

## 1. Building and leading a team from zero (Alaya)

**Likely questions:** "Tell me about building a team." / "How do you balance managing and coding?" / "How do you set engineering culture?"

In 2016 I cofounded Alaya, an employee purpose platform, and for the first stretch I was the whole engineering department. There was no product and no customers, just a business team about to start selling to enterprises. My job was to get a platform into production fast enough for those first deals, then turn a one-person codebase into something a team could own.

I picked a stack I knew would carry us without heroics, Node.js, React and PostgreSQL, and got the core features to a demo in about three months. Once we had paying clients I hired the first three engineers, and that's when the real work changed. I set up CI/CD and code review before the second hire started, wrote architecture docs so nobody had to reverse-engineer my head, and kept writing code myself on the parts that were riskiest, like the multi-tenant layer and the API. The rule I held to was that I'd take the hard, unglamorous pieces and hand the team the areas where they could own something end to end.

We reached 50+ enterprise clients across Switzerland and France, and Benevity acquired us in 2021. The codebase and the team both survived due diligence, which is the honest test of whether the early decisions held up.

Looking back, I'd have put observability in much earlier; we added proper APM late and flew blind on some incidents we shouldn't have. I also underestimated how expensive it is to retrofit multi-tenancy. For a sandbox platform the parallel is obvious: isolation and telemetry are day-zero concerns, not features you bolt on later.

---

## 2. A performance-driven architecture call under pressure (Alaya)

**Likely questions:** "Describe a technical trade-off you made." / "How do you approach performance problems?" / "Tell me about pushing back on stakeholders."

Our monolith was starting to crack under load on a few endpoints, and the team was split between a full microservices rewrite and staying put. Investors wanted features, not a rewrite, so whatever I proposed had to be defensible with numbers rather than taste.

I ran a two-week spike where we prototyped both directions and load-tested them against our real traffic patterns. The data pointed at a small set of hot paths, so I presented the trade-offs to leadership and investors with the benchmarks in front of them and proposed a strangler fig approach: pull out the two highest-traffic modules, leave everything else in the monolith, and write down explicit criteria for when the next module would earn its own service.

The first extracted module shipped in six weeks and the busiest endpoints got around 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

What I took from it is that measuring first shortens arguments. If I did it again I'd benchmark before the debate even started instead of after two weeks of opinions. That habit matters even more on something like environment creation latency, where the gut feeling about where time goes is usually wrong until you profile it.

---

## 3. Influencing two teams without authority (Benevity)

**Likely questions:** "How do you drive change across teams?" / "How do you work with teams that don't report to you?" / "Tell me about an adoption effort."

At Benevity I was a Senior Staff IC with no direct reports, and I wanted two teams to start using AI-assisted code review and generation. Neither team reported to me, and a mandate wasn't on the table, nor would it have worked.

So I started small. Three engineers were already curious, and I worked with them first, building internal demos that showed actual time saved on real work rather than vendor slides. We ran informal lunch sessions with no attendance pressure, and I put reusable prompt templates in a shared repo so people could try things in five minutes instead of an afternoon. When someone saved a couple of hours on a PR cycle, we wrote it down and shared it.

Within about three months, roughly 70% of the engineers on both teams were using the tools in their normal workflow, and I ended up as the informal AI tooling lead for the org.

It was slower than a top-down rollout would have looked on paper, but it stuck, because the people who adopted it chose to and then argued for it themselves. As a manager I'd still use the same instinct: give the team a reason and a low-friction path, then let the early adopters carry it.

---

## 4. Integrating into a much larger org after acquisition (Benevity)

**Likely questions:** "Tell me about joining a new team or company." / "How do you partner with other teams?" / "Tell me about a mistake."

After the acquisition I went from a startup where I knew every line of code to an engineering org roughly ten times the size, with a Java microservices stack, different processes and a very different culture. The job was to fold Alaya's capabilities into Benevity's platform without losing the delivery pace we'd had.

I'll admit I started too fast. In the first weeks I was pointing at things I wanted to change before I understood why they were the way they were, and it didn't land well. I reset, spent about a month mapping the existing architecture properly, and put time into relationships with the platform and infra teams before pushing opinions. Once people trusted that I understood their constraints, I became the cross-team architecture contact for the Europe-facing product surface.

We migrated the core Alaya features into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

The lesson was simple and a bit humbling: listen first, especially when you arrive with a track record, because the track record makes you more confident than you've earned in a new context. A sandbox team serves internal product teams, and the same thing applies; you have to understand what they're actually trying to run before designing the primitive.

---

## Gap questions to prepare for (not STAR, but they will come)

**"You haven't shipped Go in production."** True, and I'd say it plainly. My production work has been TypeScript, Node.js, Python and Java, and I've picked up a new stack more than once, Java microservices at Benevity being the latest. I'd plan to be reviewing Go PRs usefully within weeks and shipping in it within the first quarter, and I'd lean on the team's senior Go engineers rather than pretend otherwise.

**"How deep is your Linux isolation knowledge?"** My hands-on experience is running Docker and Kubernetes workloads in production, so I know namespaces and cgroups from the operator side. I haven't written microVM or seccomp code. Be ready to talk about how I'd ramp: reading the Firecracker design docs, pairing with whoever owns the VMM layer, and focusing my own early contribution on fleet lifecycle, scheduling and observability, where my platform background carries over directly.
