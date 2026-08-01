# STAR Stories, Marble Co-Founder CTO (Physical AI, Process Industries)

Selected for a founding CTO conversation inside a venture studio: building from zero, making physics-vs-speed trade-offs, leading without a title, and adapting to a new domain fast.

---

## 1. Building Alaya from zero to acquisition

I co-founded Alaya in 2016 to build a purpose and impact platform for employee engagement. There was no product, no customers, just a blank page and a deadline to sign our first enterprise clients. My job was to architect and build the whole thing, alone at first, while the business side was already selling something that didn't exist yet.

I picked a pragmatic stack, Node.js, React, PostgreSQL, because we needed to ship something a sales team could demo within three months, not something theoretically elegant. Once the first version was live I kept expanding it: multi-tenant architecture so we could onboard clients without custom deployments, an API layer, impact reporting, campaign tooling. As the team grew past me I hired the first three engineers and put in CI/CD and a real code review culture before that became a fire I had to put out later.

We reached production with over 50 enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian company valued north of a billion dollars, acquired us. That's about as direct a validation of the early architecture calls as you can get.

If I'm honest, I'd invest in observability earlier next time. We didn't have real APM until fairly late, and multi-tenancy was retrofitted rather than designed in from day one, which cost us more than it should have. That's exactly the kind of lesson I'd bring into building a platform for process plants, where the data model has to be right before the second customer, not the fifth.

---

## 2. Making a hard architecture call under investor pressure

At Alaya, our monolith started showing real scaling cracks, and the team split into two camps: rewrite as microservices, or keep pushing a modular monolith. Investors wanted new features, not months spent on a rewrite nobody outside engineering would see. I had to make a defensible call that didn't just please whichever room I was standing in.

I ran a two-week spike prototyping both approaches with actual load tests instead of arguing from intuition, then brought the CTO and investors numbers instead of opinions. What came out of that was a strangler-fig migration: extract the two highest-traffic modules first, leave the rest as-is, and set clear criteria for when to pull out the next piece.

The first extracted module shipped in six weeks, and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable straight through the acquisition. No rewrite, no six-month detour.

The hard part wasn't the technical design, it was convincing people that not rewriting everything was the disciplined choice. Data shortened that argument considerably. For a process industries platform, where physics-based models and ML pipelines both have to earn their place, I'd run that same kind of early benchmarking before committing to an architecture, rather than debating it in the abstract.

---

## 3. Leading adoption without formal authority

At Benevity I was a Senior Staff engineer with no direct reports, but I wanted two teams that didn't answer to me to start using AI-assisted development in their day-to-day work. There was no mandate I could hand down, so persuasion had to do the work that a manager's decision usually does.

I started small, three engineers who were already curious, and built internal demos that showed concrete time saved rather than abstract promises. I ran informal lunch-and-learn sessions with no obligation to attend, put together reusable prompt templates in a shared repo, and wrote up specific wins, like a two-hour review cycle that dropped to twenty minutes.

Within three months, about 70% of engineers across both teams were using AI-assisted review and generation as part of their normal workflow, and I'd become the person people asked when they wanted to get started.

It was slower than a top-down rollout would have been, but it stuck better, because people who opt in on their own terms end up defending the practice to their peers. Building an engineering team from the ground up at a venture-studio company means doing a version of this constantly, since there's no existing culture to fall back on.

---

## 4. Navigating a post-acquisition integration

After Benevity acquired Alaya in 2021, I joined an engineering org roughly ten times the size of what I'd worked in, with a different codebase, mostly Java microservices, and different processes for basically everything. My task was to fold Alaya's capabilities into Benevity's platform without losing the speed we'd built our reputation on.

I spent the first month mostly listening, mapping how the existing architecture actually worked before proposing anything, and building relationships with the platform and infra teams before pushing a single technical opinion. Once I had context, I helped drive the migration and became a de facto architecture liaison for the Europe-facing side of the product, on top of pushing AI tooling adoption org-wide.

We migrated the core Alaya features successfully, I contributed to three major cross-team architecture decisions, and became the go-to person for AI tooling across two teams that had nothing to do with my original scope.

I moved too fast at first, trying to fix things in the new org that weren't actually broken, just unfamiliar. Slowing down to understand context before acting made me noticeably more effective, and it's the instinct I'd bring into a new plant deployment where the operators know the process better than any model does on day one.
