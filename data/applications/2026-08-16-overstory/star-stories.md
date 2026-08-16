# STAR+R Stories: Overstory (Chief Technology Officer)

Prepared for interviews on technical vision, distributed team leadership, and scaling engineering through growth stages. Sourced from `profile/star-bank.md`, framed for the Overstory context.

---

## Story 1: Building Alaya from zero to acquisition

In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement. We started with nothing, no product, no customers, and the business was already out signing its first enterprise clients while I was still deciding on a stack. My job was to architect and build the whole thing, alone at first and then with a small team, without slowing the sales side down.

I picked Node.js, React and PostgreSQL because they'd scale without forcing us into infrastructure work we didn't need yet, and I pushed to get a working demo in front of a client within three months. From there it was a steady expansion: multi-tenant architecture, an API layer, impact reporting, postal campaign tooling. I hired and onboarded our first three engineers and set up code review and CI/CD before we had any pressure to.

We got to production with more than 50 enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian company valued north of a billion dollars, acquired us. That's about as direct a validation of the early technical calls as I could ask for.

If I did it again I'd invest in observability much earlier, we added real APM too late and it cost us debugging time we didn't have. I also underestimated what retrofitting multi-tenancy would cost; next time I'd design for it from day zero instead of bolting it on.

---

## Story 2: Integrating into Benevity after the acquisition

Joining Benevity in 2021 put me on a team roughly ten times the size of Alaya, running Java microservices instead of the Node stack I'd built, with processes I hadn't shaped. I needed to fold Alaya's capabilities into their platform without losing the product speed we'd built our reputation on, and without becoming the person who shows up and tries to fix everything on day two.

I spent my first month just mapping the existing architecture before I proposed a single change, and I made a point of building relationships with the platform and infra teams before pushing any technical opinion their way. Once I had that footing, I started driving adoption of AI-augmented workflows, Copilot, prompt patterns, across the wider engineering org, and I became the informal architecture liaison for the Europe-facing side of the product.

Alaya's core features made it into Benevity's platform, I contributed to three major cross-team architecture decisions, and I ended up the go-to person for AI tooling across two teams that had nothing to do with my formal role.

I moved too fast in the first few weeks trying to fix things that weren't actually broken in the new org, just different. Slowing down and listening first is what made the rest of it work, and it's a lesson I'd apply immediately in a new, larger org like this one.

---

## Story 3: Choosing a strangler-fig migration under investor pressure

At Alaya, our monolith was starting to crack under scale, and the team was split between a full microservices rewrite and staying modular within the monolith. Investors wanted new features, not a multi-month rewrite, so the pressure to just ship was real. My task was to make a technical call that would hold up under both the scaling need and the delivery pressure.

I ran a two-week spike comparing both approaches with actual load tests rather than architecture diagrams, then took the trade-offs to the CTO and investors with numbers instead of opinions. The path I proposed was a strangler-fig migration: pull out the two highest-traffic modules first, leave the rest of the monolith alone, and set clear criteria for when we'd extract more.

The first extracted module shipped in six weeks, and the busiest endpoints saw about a 40% performance gain. The rest of the monolith stayed stable all the way through the acquisition, no big-bang rewrite required.

Convincing people that not rewriting everything was the right call was the hardest part of this, harder than the technical work itself. The data made the argument for me, and if I ran this again I'd front-load even more benchmarking to shorten that debate.

---

## Story 4: Driving adoption without formal authority

At Benevity I was a Senior Staff IC with no direct reports, but I wanted two teams that didn't report to me to actually change how they worked day to day by adding AI tooling into their normal flow. There was no mandate behind this, just an idea I thought was worth spreading.

I started small, with three engineers who were curious enough to try it, and built internal demos that showed real time saved rather than abstract claims. I ran informal lunch sessions with no agenda beyond showing what worked, put together reusable prompt templates in a shared repo, and documented concrete wins, like a case where AI-assisted review cut two hours off a PR cycle.

Within three months, about 70% of engineers across both teams were using AI-assisted review or generation as part of their normal workflow, and I'd become the informal lead on AI tooling for the org.

Going mandate-free was slower than a top-down rollout would have been, but it stuck. People who opted in on their own terms ended up advocating for it to others, which isn't something a decree from above would have produced. For a role setting technical direction across teams that don't share a manager, that's the model I'd default to again.
