# STAR Stories: Glass Health, Founding Software Engineer (Backend)

Picked for a backend-heavy founding role with an on-call rotation and real production stakes: building from zero, making architecture calls that hold up under scale, and driving technical change without formal authority.

---

## 1. Building Alaya's backend from zero to acquisition

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, with nothing but a blank page and no customers yet. I had to architect and build the whole backend myself while the business was closing its first enterprise clients, so there wasn't room for a slow ramp-up. I picked Node.js and PostgreSQL because they let me move fast without boxing me into a rewrite later, got the core services to a first demo inside three months, and kept expanding from there: multi-tenant data model, an API layer, impact reporting pipelines. Once the product had traction I hired and onboarded our first three engineers and put in place CI/CD and a real code review culture, because a backend only one person understands doesn't survive that person taking a vacation. We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired the company in 2021, which felt like the clearest validation the early technical calls could get. If I did it again I'd invest in observability much earlier; we bolted on proper APM late and paid for it in debugging time, and I'd design the multi-tenancy model from day zero instead of retrofitting it under load.

---

## 2. Making a hard architecture call under pressure

At Alaya, our monolith was starting to show scaling cracks right as investors wanted new features, not a rewrite. I had to make a defensible call that balanced long-term scalability against short-term delivery pressure, so instead of arguing opinions in a room I ran a two-week technical spike with prototype load tests comparing a full microservices rewrite against a modular monolith. The data pointed to a strangler fig approach: extract the two highest-traffic modules first, leave the rest monolithic, and set clear criteria for when to pull out the next piece. We shipped the first extracted module in six weeks and saw a roughly 40% performance improvement on the busiest endpoints, and the remaining monolith stayed stable all the way through the acquisition with no big-bang rewrite ever needed. The hardest part honestly wasn't the technical work, it was convincing people that not rewriting everything was the disciplined choice. Concrete numbers cut that argument short, and next time I'd run the benchmarking even earlier so the debate doesn't eat into build time.

---

## 3. Owning platform reliability after the acquisition

Joining Benevity as Senior Staff Engineer meant inheriting a team ten times the size of Alaya, a different codebase built in Java and microservices, and a much higher bar for uptime than a startup with 50 clients ever needed. My task was to integrate Alaya's capabilities into that platform without breaking the reliability guarantees Benevity's larger customer base expected, on-call rotation included. I spent the first month mapping the existing architecture before proposing anything, because showing up with opinions before understanding why things were built a certain way tends to burn trust fast. From there I built relationships with the platform and infra teams, contributed to three major cross-team architecture decisions, and became the liaison for the Europe-facing product surface when something broke at 2am and needed someone who understood both sides of the system. The features migrated cleanly and I ended up as the person both sides pulled in for architecture questions that crossed the old boundary. I moved too fast early on trying to fix things that weren't actually broken in the new org, and slowing down to listen first is what actually made the integration land.

---

## 4. Leading without formal authority

I was a Senior Staff IC at Benevity with no direct reports, but I needed two teams that didn't report to me to actually change how they worked day to day around AI-assisted development. Mandating it wasn't an option and probably wouldn't have stuck anyway, so I started small: three curious engineers, a few internal demos showing real time saved, and informal lunch-and-learn sessions with no agenda attached. I documented specific wins, like a two-hour cut on a PR review cycle, instead of making abstract claims about productivity. Adoption spread from there without any decree behind it, and within three months about 70% of engineers across both teams were using the practices on their own. I ended up being the informal AI tooling lead for the org almost by accident. The lesson that stuck with me is that the slower, mandate-free path produced advocates who argued for the change themselves, which a top-down rollout never would have gotten me.
