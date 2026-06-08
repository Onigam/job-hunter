# STAR Stories — Senior Platform Engineer @ bunch

---

## 1. Building a Platform from Zero (Founding Engineer)

*Best for: "Tell me about building infrastructure from scratch" / "How do you approach a greenfield platform?"*

In 2016, when we started Alaya, I was the only engineer. We had a product idea, a few early customers committed in principle, and nothing else. My task was to architect and build the entire platform before the first enterprise client went live, while simultaneously interviewing candidates for the first engineering hires.

The decisions I made in those first months had to last. I chose Node.js, React, and PostgreSQL because they were pragmatic for our team size and the problem domain, not because they were fashionable. I built for multi-tenancy from day one, having made the mistake of retrofitting it in a previous project and knowing how painful that is. I stood up CI/CD early, set up basic observability with APM before we had significant traffic, and wrote architecture docs so the first hires could onboard without me explaining everything manually.

Within three months we had a working demo. Within a year we had production enterprise clients. By 2021 we had 50+ clients across Switzerland and France, and Benevity acquired the company. The technical validation was real: the architecture held through the acquisition and Benevity kept it running rather than replacing it.

Looking back, I'd have invested in observability even earlier. We added proper alerting later than we should have, and we had a few incidents that better monitoring would have caught sooner. I'd also have been more conservative about the number of features in v1. Scope discipline is a platform engineering superpower.

---

## 2. Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt vs. delivery pressure?"*

At Alaya, around 2019, we had a monolith that was starting to creak. Traffic was growing, the codebase had accumulated debt, and the team was debating whether to do a full microservices rewrite or stay with what we had. Investors were pushing for new features, not rewrites. The CTO wanted a clear recommendation, not a committee decision.

My task was to make a defensible call that balanced long-term scalability with the reality that we had a product roadmap to deliver and a small team.

I ran a two-week technical spike. We built prototypes for both approaches and ran load tests to generate concrete numbers rather than debating opinions. I presented the results to leadership with a clear framing: full rewrite would take six months minimum and pause feature delivery; a modular extraction of the two highest-traffic modules would take six weeks and deliver most of the performance benefit. I proposed what's sometimes called the strangler fig pattern, with explicit criteria for when to extract additional modules so it wouldn't become an endless migration.

We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by around 40%. The rest of the monolith stayed stable all the way through the Benevity acquisition, three years later. No big-bang rewrite was ever needed.

The hardest part was convincing people that "not rewriting everything" was the right call. Data helped more than arguments. If I were doing it again, I'd front-load the benchmarking even earlier to cut the debate shorter.

---

## 3. Post-Acquisition Integration: Adapting to a Much Larger System

*Best for: "Tell me about working in a new codebase or environment" / "How do you get up to speed in a complex system?"*

When Benevity acquired Alaya in 2021, I went from a 10-person engineering team that I'd built from scratch to an organization of over 100 engineers. Different culture, different stack (Java microservices at scale), different processes. My task was to integrate Alaya's capabilities into Benevity's platform and keep contributing at a senior level, without the context advantage I'd had at Alaya.

The first thing I did was slow down. I spent the first month just mapping the existing architecture before proposing anything. I talked to platform and infra engineers, read the docs, traced through the code. I built relationships before I built opinions.

Once I understood the landscape, I focused on two things: first, driving the actual migration of Alaya's core features into Benevity's platform, which required negotiating API contracts with multiple teams and navigating a fairly complex IaC and deployment environment. Second, finding ways to be useful beyond the Alaya scope, which led me to taking on cross-team architecture liaison work and eventually leading the AI tooling adoption across two engineering teams.

The integration took longer than expected, but it held. The features we migrated are still running. More importantly, I learned how to be an effective senior IC in a large org where I couldn't rely on context I'd accumulated over years.

The reflection is about pace. I initially moved too fast, trying to fix things that weren't broken in the new environment. Slowing down and listening first made me significantly more effective.

---

## 4. Leading Platform Adoption Without Formal Authority

*Best for: "How do you drive change as an IC?" / "Tell me about influencing without authority"*

At Benevity, I was a Senior Staff Engineer with no direct reports. I wanted to introduce AI-assisted development practices across two engineering teams, but neither team reported to me and there was no mandate from leadership. My task was to change how roughly 30 engineers worked, with no authority to require anything.

I started with three engineers who seemed curious. Rather than running a formal rollout, I built internal demos that showed concrete time savings: here's a PR review that took me 90 minutes, here's the same task with AI assistance taking 25 minutes. Real numbers from real work, not marketing claims. I ran informal lunch-and-learn sessions with no attendance requirement. I committed shared prompt templates to a public repo so people could use them without asking me.

Within three months, roughly 70% of engineers across both teams were using AI-assisted workflows regularly. The adoption spread on its own because early adopters became internal advocates. I couldn't have achieved the same stickiness with a top-down mandate.

The broader lesson I took from this is that platform changes succeed when engineers feel like they're choosing them. Mandate-free adoption is slower, but it compounds. The engineers who adopted it voluntarily ended up contributing improvements back to the shared templates, which a mandated rollout would never have produced.

---

## 5. Scaling Infrastructure Under Hypergrowth Pressure

*Best for: "Tell me about a time infrastructure was at risk" / "How do you handle scaling challenges?"*

Around 2018-2019, Alaya was growing fast. We'd gone from a handful of pilot clients to 20+ enterprise accounts, and the platform was showing strain. Longer response times, occasional downtime on month-end reporting runs when everyone hit the system at once, and a database that was growing faster than we'd modeled.

My task was to stabilize the platform without a full architectural rebuild, while the product team was simultaneously shipping new features.

I started by instrumenting everything we hadn't already. We had basic APM but not enough visibility into the slow paths. Once I could see where the time was going, the biggest wins were index optimization on the reporting queries (which shaved about 60% off the worst-case response times), introducing a Redis caching layer for the most-read data, and moving the heavy month-end jobs to an async queue so they stopped competing with live traffic.

None of this was glamorous work, but it bought us 18 months of runway before we needed to consider deeper architectural changes. By then we had a bigger team and could approach the structural work more carefully.

The reflection: I should have built the async job queue earlier. We knew month-end load spikes were coming. That's the kind of predictable bottleneck worth getting ahead of rather than reacting to.
