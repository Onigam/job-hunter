# STAR Stories — Ultravionix / Late Co-Founder & CTO

---

## 1. Building a Platform from Zero to Acquisition
*Best for: "Tell me about founding something" / "How do you handle ambiguity?" / "How do you make technical bets early?"*

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement. There was no product, no customers, no codebase. My task was to architect and build the entire platform, starting as the sole engineer while the business was signing its first enterprise deals, and then grow and lead a small technical team as we scaled.

I made a deliberate choice to stay pragmatic on the stack: Node.js, React, PostgreSQL, with multi-tenant architecture from the first sprint rather than retrofitting it later. The goal was to get to a working demo in three months, which we did, then iterate aggressively. Over the following years I built out the API layer, impact reporting features, postal campaign tooling, and eventually onboarded and mentored the first three engineers, setting up CI/CD and code review culture along the way.

By 2021, the platform was running for 50+ enterprise clients across Switzerland and France. Benevity acquired us in 2021, a Canadian unicorn at over $1B valuation, which was a direct validation of the technical choices made from day one.

Looking back, I'd invest in observability from month one rather than treating it as a later concern, and I'd design the multi-tenancy model more explicitly upfront rather than evolving it. Both are things I'd install as defaults in a new founding context.

---

## 2. Making a Hard Architecture Decision Under Pressure
*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "How do you make a case to non-technical stakeholders?"*

At Alaya, around 2019, we hit a point where the monolith was showing scaling cracks on our busiest endpoints. The team was split between a full microservices rewrite and keeping the modular monolith but cleaning it up. Investors were pushing for new features, not rewrites, and there was real pressure to just ship things and sort it out later.

My task was to make a defensible decision that balanced long-term scalability with the short-term delivery commitments we'd made. Picking wrong would mean either slowing down for a big-bang rewrite at the worst possible time, or accumulating enough debt that we'd regret it later.

I ran a two-week technical spike comparing both approaches, including prototype load tests on the two highest-traffic modules. Then I presented the trade-offs to our investor-facing stakeholders with concrete performance numbers rather than opinions. The proposal was a strangler fig migration: extract the two most-trafficked modules first, keep the rest of the monolith stable, and define explicit criteria for future extractions.

The first extracted module shipped in six weeks. Performance improved about 40% on those endpoints. The rest of the monolith held up through the acquisition without needing the rewrite. No drama.

The hardest part wasn't the engineering, it was convincing people that "not doing the full rewrite" was a real decision and not a cop-out. Having the load test data made that conversation much shorter. I'd do even more upfront benchmarking next time to cut the debate before it polarizes.

---

## 3. Navigating a Post-Acquisition Integration
*Best for: "Tell me about adapting to a new environment" / "How do you work across cultures?" / "Tell me about joining an existing team at a senior level"*

After the Benevity acquisition in 2021, I joined a company roughly ten times the size of Alaya, with a different tech stack (Java, microservices), different processes, and a very different culture. My task was to integrate Alaya's capabilities into Benevity's platform while keeping product velocity up, and to do it without imposing the Alaya way of doing things on a team that hadn't asked for it.

The first thing I did was spend about a month just mapping the existing architecture and relationships before suggesting anything. Then I focused on building relationships with the platform and infra teams, understanding what they valued, before bringing any technical opinions to the table. From that foundation, I was able to drive a few meaningful changes, including the adoption of AI-assisted development workflows across two engineering teams, which became one of my main focuses.

Within three months of starting that AI tooling initiative, about 70% of engineers on both teams were using AI-assisted code review and generation. I also contributed to three major cross-team architecture decisions and became the go-to person for the AI tooling rollout across the engineering org.

The reflection is obvious in hindsight: I initially moved too fast trying to fix things that weren't broken in the new org. Slowing down and listening first made me significantly more effective. In a new environment, trust is the prerequisite for influence, not the other way around.

---

## 4. Leading Without Formal Authority
*Best for: "How do you influence without authority?" / "Tell me about building culture on a team you don't manage"*

At Benevity, I was a Senior Staff IC with no direct reports. My task was to change how two engineering teams worked, specifically by getting them to adopt AI-assisted development practices, without being their manager or having any mandate to push it.

Starting with a top-down decree wasn't an option I had, and honestly wasn't one I wanted. Instead I identified three engineers who were genuinely curious about AI tooling and started with them. We built internal demos together showing concrete time savings on real tasks, things like cutting PR review cycles by two hours or generating boilerplate in seconds. I ran informal lunch-and-learn sessions, no slides, no mandate, just live demos. I also built reusable prompt templates and committed them to a shared internal repo so engineers could adopt them without needing me to explain everything each time.

Within three months, ~70% of engineers on both teams had integrated AI tools into their daily workflow. More importantly, the early adopters were advocating for it internally, which I couldn't have engineered through a mandate.

The thing I'd apply in a founding context is the same principle: culture comes from what people choose to do when nobody is watching, not from what they're told to do. Building adoption through pull rather than push is slower at first but far more durable.

---

## 5. First Time Building and Leading a Team (Derived from Alaya)
*Best for: "Tell me about hiring and leading engineers" / "How do you build a technical team?" / "What's your approach to engineering culture?"*

At Alaya, after the first year of building solo, we reached a point where the product was mature enough to need more engineering capacity than one person. My task was to hire and onboard the first engineers, which sounds straightforward but is a high-stakes decision at an early startup: wrong hires at that stage slow you down more than no hires.

I set two filters early: I wanted people who could operate with low supervision and who cared about code quality as a practice, not as a checkbox. We were a small team with no bandwidth for heavy onboarding. I conducted practical technical interviews around real system design problems from our own codebase rather than algorithm puzzles, which filtered for the right instincts pretty quickly.

Once the first three engineers were onboarded, I established lightweight but consistent practices: CI/CD from day one, code review on every PR, architecture decision records for anything consequential. Not heavy process, just enough structure that new people could ramp quickly.

The team built Alaya's most complex features from there, including the multi-tenant impact reporting layer and the postal campaign engine, without me having to be the bottleneck on every decision.

In retrospect, I'd document the architectural reasoning behind our early decisions more explicitly. We held a lot of it informally, which caused some onboarding friction for later hires who couldn't reconstruct why certain choices had been made.
