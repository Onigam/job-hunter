# STAR Stories - Tsenta (Founding Engineer)

Prepared for a founding engineer conversation at a very early, two-founder YC company. Picked for 0-to-1 ownership, hard technical calls under pressure, and driving adoption of AI tooling without a mandate, since all three map directly onto what building the matching engine, resume tailoring, and ATS auto-fill at Tsenta would actually require.

---

## Story 1: Building Alaya from Zero to Acquisition

I cofounded Alaya in 2016 with basically nothing, no product, no customers, just a belief that companies needed a better way to run employee purpose and impact programs. I was the only engineer for the first stretch, and the business was already trying to sign its first enterprise clients while I was still deciding on a stack.

I picked Node.js, React, and Postgres because they'd let me move fast without boxing me into an architecture I'd regret later, and I got the core features to a demo-able state in about three months. From there it was constant iteration: multi-tenant support, an API layer, impact reporting, postal campaign tooling, and eventually hiring the first three engineers and setting up the basics of a real engineering culture, code review, CI/CD, some architecture docs so decisions didn't just live in my head.

By the time Benevity acquired us in 2021, we had over 50 enterprise clients across Switzerland and France running on the platform. That acquisition, by a company valued north of a billion dollars, was about as clear a validation of the early technical calls as I could have asked for.

If I'm honest, I'd have invested in observability much earlier. We bolted on proper APM late, and there were a couple of incidents where I was debugging blind that didn't need to happen. I also underestimated how expensive it would be to retrofit multi-tenancy after the fact. Next time I'd design for it from day zero, even if it slows the first few weeks down.

---

## Story 2: Making a Hard Architecture Call Under Investor Pressure

At Alaya, our monolith started showing real scaling cracks right around the time investors were pushing hard for new features, not a rewrite. The team was split: some wanted a full microservices rewrite, others wanted to just keep patching the monolith and hope.

I owned making the call, and I didn't want it to come down to opinion versus opinion in a room. So I ran a two-week technical spike, built prototypes of both approaches, and load-tested them against realistic traffic patterns. Then I took the results, not a slide deck of feelings, to the CTO and investors. What I proposed was a strangler-fig migration: pull the two highest-traffic modules out first, leave the rest of the monolith alone, and define clear criteria for when we'd extract the next piece.

We shipped the first extracted module in about six weeks. Performance on the busiest endpoints improved roughly 40%, and the remaining monolith stayed stable straight through the acquisition. No big-bang rewrite, no six-month feature freeze.

The hardest part honestly wasn't the technical work, it was convincing a room that "we're not rewriting everything" was the disciplined choice, not the timid one. Data closed that argument faster than any amount of talking would have. If I did it again, I'd front-load even more benchmarking so that debate never had room to drag on.

---

## Story 3: Driving AI Tooling Adoption Without Being Anyone's Manager

At Benevity I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked and start using AI-assisted development seriously. Decree wasn't an option, and honestly I don't think it would have worked even if it had been.

I started small: three engineers who were already curious signed up as early adopters. I built internal demos that showed concrete time saved, not abstract promises, and ran informal lunch-and-learn sessions with no mandate attached, just "here's what this looks like on a real PR." I put together reusable prompt templates and committed them to a shared repo so people could take what worked and skip the trial and error I'd already done. When something worked, like shaving a couple hours off a review cycle, I wrote it down and shared it.

Within about three months, something like 70% of engineers across both teams were using AI-assisted review and generation regularly. I ended up becoming the informal go-to person for AI tooling across the org, without ever having authority over either team.

The slower, no-mandate approach turned out to be stickier than a top-down rollout would have been. Engineers who opted in on their own terms became the ones advocating for it to their peers, which isn't something you can order into existence. I'd use the same playbook again, though I'd probably document the early wins a little faster than I did.

---

## Story 4: Ramping Into an Unfamiliar Codebase Fast, Post-Acquisition

When Benevity acquired Alaya in 2021, I joined a team roughly ten times the size of what I'd been running, with a different codebase, Java and microservices instead of the Node stack I knew, and different processes end to end. The task wasn't just "integrate Alaya's features," it was doing that without losing the product velocity we'd built while learning an entirely unfamiliar system.

I spent the first month mostly reading and mapping the existing architecture before I proposed a single change, and I made a point of building relationships with the platform and infra teams before pushing any technical opinions their way. That groundwork is what let the actual migration work land well later.

We successfully moved Alaya's core capabilities into Benevity's platform, I contributed to three major cross-team architecture decisions in that first year, and I became the person Europe-facing teams came to for architecture questions.

I moved too fast early on trying to "fix" things in the new org that honestly weren't broken, just unfamiliar. Slowing down and listening first is what actually made me effective, and it's the instinct I'd lean on again dropping into any codebase I didn't build.
