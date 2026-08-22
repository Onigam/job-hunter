# STAR Stories: Glass Health, Founding Product Engineer

Picked for a founding-level, product-facing AI role: building from zero, shipping gen AI features end to end, working with researchers and PMs without a big org around you, and driving adoption of AI tooling without formal authority.

---

## 1. Building Alaya from zero to acquisition

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, with nothing but a blank page and no customers yet. I had to architect and build the whole thing myself while the business was closing its first enterprise clients, so there wasn't room for a slow ramp-up. I picked Node.js, React and PostgreSQL because they let me move fast without boxing me into a rewrite later, got the core features to a first demo inside three months, and kept expanding from there: multi-tenant architecture, an API layer, impact reporting. Once the product had traction I hired and onboarded our first three engineers and put in place CI/CD and a real code review culture, because a platform only one person understands doesn't scale past that person. We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired the company in 2021, which felt like the clearest possible validation of the early technical calls. If I did it again I'd invest in observability much earlier; we bolted on proper APM late and paid for it in debugging time, and I'd design for multi-tenancy from day zero instead of retrofitting it under pressure.

---

## 2. Shipping generative AI features into an existing platform

Since joining Benevity as Senior Staff Engineer, one of my main threads of work has been pushing AI-assisted engineering practices, including LLM-backed features, into a platform and codebase that predates any of that. The task wasn't just wiring an API to a model, it was figuring out where generative AI actually helped users versus where it just added latency and cost for a party trick. I spent real time mapping the existing architecture before proposing anything, then built small, visible wins: internal tooling demos with concrete time savings, reusable prompt templates committed to a shared repo, and a couple of user-facing flows where an LLM step genuinely shortened a task instead of just decorating it. I also became the informal cross-team liaison for the Europe-facing product surface where this work landed. Within a few months, roughly 70% of engineers on the two teams I touched were using AI-assisted review or generation regularly, and I was the person people pulled in when a new gen AI idea needed a reality check on scope and risk. I learned that credibility on this kind of work comes from shipping the boring, reliable version first, not the flashiest demo.

---

## 3. Making a hard architecture call under pressure

At Alaya, our monolith was starting to show scaling cracks right as investors wanted new features, not a rewrite. I had to make a defensible call that balanced long-term scalability against short-term delivery pressure, so instead of arguing opinions in a room I ran a two-week technical spike with prototype load tests comparing a full microservices rewrite against a modular monolith. The data pointed to a strangler fig approach: extract the two highest-traffic modules first, leave the rest monolithic, and define clear criteria for when to pull out the next piece. We shipped the first extracted module in six weeks and saw a roughly 40% performance improvement on the busiest endpoints, and the remaining monolith stayed stable all the way through the acquisition with no big-bang rewrite ever needed. The hardest part honestly wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Concrete numbers cut that argument short, and next time I'd run the benchmarking even earlier so the debate doesn't eat into build time.

---

## 4. Leading without formal authority

I was a Senior Staff IC at Benevity with no direct reports, but I needed two teams that didn't report to me to actually change how they worked day to day. Mandating it wasn't an option and probably wouldn't have stuck anyway, so I started small: three curious engineers, a few internal demos showing real time saved, and informal lunch-and-learn sessions with no agenda attached. I documented specific wins, like a two-hour cut on a PR review cycle, instead of making abstract claims about productivity. Adoption spread from there without any decree behind it, and within three months about 70% of engineers across both teams were using the practices on their own. I ended up being the informal AI tooling lead for the org almost by accident. The lesson that stuck with me is that the slower, mandate-free path produced advocates who argued for the change themselves, which a top-down rollout never would have gotten me.
