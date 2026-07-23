# STAR Stories: Crystal Intelligence, VP of Engineering

Picked because the role is about owning a full platform migration to an AI-native pipeline across six products without breaking customer SLAs, rebuilding management discipline, and using AI as a real productivity lever. These four cover the migration judgment call, the cross-org integration, the AI adoption playbook, and the founder-level ownership the compensation and scope imply.

---

## Story 1: The strangler fig migration at Alaya

Good for: platform migration under pressure, architectural trade-offs, protecting customers during a transition.

By the time Alaya had signed its first wave of enterprise clients, the monolith I'd built in the first few months was starting to show cracks, and the room split into two camps: rewrite everything as microservices, or leave it alone and hope. Investors weren't interested in either extreme, they wanted new features shipping on schedule, so my task was to find a path that didn't sacrifice one for the other. I spent two weeks running a spike, prototyping a full rewrite alongside a narrower extraction, and load tested both against real traffic instead of arguing from opinion. The data pointed at pulling out just the two highest-traffic modules using a strangler fig pattern and leaving the rest of the monolith in place until it actually needed to move. We shipped the first extracted module in about six weeks, and the busiest endpoints got roughly 40% faster. The rest of the platform stayed stable straight through the Benevity acquisition; no big-bang rewrite ever happened. The hardest part wasn't the technical work, it was convincing a room of smart people that not rewriting everything was the disciplined choice, and that's close to the sequencing argument a migration like Crystal's new pipeline is going to need made over and over.

---

## Story 2: Integrating into Benevity's engineering org post-acquisition

Good for: leading through a platform transition without losing customer trust, cross-team architecture.

Going from a ten-person startup to a team ten times that size at Benevity meant everything changed at once: a Java-based microservices codebase I didn't know, unfamiliar processes, and a culture that moved differently from Alaya's. My task was to fold Alaya's capabilities into Benevity's platform while keeping the product velocity that had made the acquisition worth doing in the first place. I spent the first month mostly listening, mapping the existing architecture before proposing a single change, and built relationships with the platform and infra teams before pushing any technical opinion. That patience paid off. I ended up contributing to three major cross-team architecture decisions and became the informal architecture liaison for the Europe-facing side of the product, all without breaking anything customers depended on. Looking back, I moved too fast in the first few weeks trying to fix things that weren't actually broken, just unfamiliar. Slowing down and listening first is what made the rest of it work, and it's the instinct I'd bring into sequencing a migration that six live products and their customers depend on.

---

## Story 3: Getting AI tooling to stick without a mandate

Good for: converting an org into one that uses AI as a productivity multiplier, influence without formal authority.

After the Benevity acquisition I was a Senior Staff IC with no direct reports, but I cared about getting AI-assisted development working across two teams that had no reason to listen to me. Instead of a top-down rollout, I started with three engineers who were already curious, built a couple of internal demos showing concrete time saved, and ran informal lunch-and-learn sessions with no mandate attached. I put together a shared repo of prompt templates people could actually reuse rather than reinvent, and one engineer mentioning it saved them two hours on a single PR review cycle traveled further than any announcement I could have sent. Within three months, about 70% of engineers across both teams were using AI-assisted review and generation on their own terms. It was slower than a decree would have been, but it stuck, because people adopted it because it worked, then told their teammates why. That's roughly the playbook behind turning an engineering org into one that treats AI as an edge worth having rather than a mandate handed down from above.

---

## Story 4: Building Alaya's platform from a blank page to acquisition

Good for: founder-level ownership, budget and hiring decisions, ambiguity at zero to one.

In 2016 I co-founded Alaya with no product, no customers, and no team, just a decision to build a purpose and impact platform for employee engagement. My job was to architect and build the whole thing largely alone at first, while the business side was already out signing enterprise clients on a platform that didn't exist yet. I picked a pragmatic stack, Node.js, React, and Postgres, deliberately avoiding anything clever, and had a working demo in front of investors within three months. From there I kept expanding: multi-tenant architecture, an API layer, impact reporting, and eventually postal campaign features, while hiring and onboarding the first three engineers and setting up CI/CD and a real code review culture, effectively owning the same budget-and-hiring-plan responsibility this role describes. The platform ended up running for more than 50 enterprise clients across Switzerland and France, and Benevity, a Canadian company valued north of a billion dollars, acquired us in 2021. If I did it again I'd invest in observability much earlier, we bolted on proper monitoring later than we should have, and I'd design for multi-tenancy from day one instead of retrofitting it under pressure, the same lesson that makes me want the new pipeline's data model settled before the second product migrates, not the fifth.
