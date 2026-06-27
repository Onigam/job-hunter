# STAR Stories — Tech Lead @ Sastrify

---

## 1. Building a Platform from Zero to Acquisition

**Best for:** "Tell me about building something from scratch" / "Describe your founding engineer experience" / "How do you handle ambiguity at the start of a project?"

In 2016, I co-founded Alaya with a partner who handled business development while I owned everything technical. We had no product, no customers, and no team. My task was to architect and ship a working platform fast enough for the sales side to demo to the first enterprise clients, and then keep building while we were simultaneously signing contracts.

I made early stack choices with sustainability in mind: Node.js, React, PostgreSQL, a multi-tenant API from the start. The temptation was to defer multi-tenancy until we had customers, but I'd seen that retrofitting it later is far more expensive, so I built it in from week one. Within three months we had a working demo; by the end of year one we had the first paying clients. I hired the first three engineers, set up CI/CD, introduced code review culture, and kept writing production code alongside them throughout.

The platform reached production with over 50 enterprise clients across Switzerland and France, and Benevity acquired Alaya in 2021. That outcome was a direct validation of the technical bets made at the start.

What I'd do differently: I underestimated how soon we'd need proper observability. We added APM late and paid for it in debugging hours. I'd instrument from day one next time.

---

## 2. Making a Hard Architecture Call Under Delivery Pressure

**Best for:** "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?" / "Describe a time you disagreed with the team on a technical decision"

At Alaya, as client volume grew, the monolith started showing scaling cracks. Engineers were debating a full microservices rewrite versus staying modular. Investors were pushing for new features, not internal rewrites. I had to make a call that was defensible to both the engineering team and the business.

Rather than argue from instinct, I ran a two-week technical spike with load tests on both approaches and built lightweight prototypes. The data made the trade-offs concrete: a full rewrite would take six-plus months with no feature output, while a targeted extraction of the two highest-traffic modules could be done in about six weeks. I presented both scenarios with actual numbers, not opinions, and proposed what's now called a strangler fig migration: extract the two bottlenecks, keep the rest of the monolith stable, and define explicit criteria for future extractions rather than a vague "we'll migrate over time."

The first extracted module shipped in six weeks. Performance on the busiest endpoints improved by roughly 40%. The monolith held stable all the way through the Benevity acquisition without a big-bang rewrite.

The hard part wasn't the technical decision; it was convincing people that not rewriting everything was the right move. The benchmark data ended that debate faster than any argument would have.

---

## 3. Driving AI Tooling Adoption Without Formal Authority

**Best for:** "How do you influence without authority?" / "Tell me about leading change" / "How do you get engineers to adopt new practices?" — directly relevant for a role pioneering AI-augmented workflows

At Benevity post-acquisition, I was a Senior Staff IC with no direct reports. I'd been using AI coding tools seriously for about a year and could see they were genuinely saving time on PR review cycles, boilerplate, and test generation. I wanted to get two engineering teams using them, but I had no mandate to require anything.

I started with three engineers who were already curious. Instead of sending documentation or writing up a proposal, I did short demos showing concrete time savings on tasks they recognized: "here's a PR review cycle that took two hours, here's the same thing with an AI-assisted pass that took 45 minutes." I built reusable prompt templates and committed them to a shared repo so people could see exactly how to replicate what I was doing. I ran optional lunch sessions with no pressure to attend. When someone found a workflow that worked for them, I made sure others heard about it from them, not from me.

Within three months, roughly 70% of engineers on both teams had integrated AI tools into their regular workflow. More importantly, they were advocating for it internally in ways I couldn't have mandated. I became the informal AI tooling lead across the org.

The lesson: adoption without a mandate is slower but far stickier. Engineers who chose it themselves became the best advocates for it.

---

## 4. Navigating a Post-Acquisition Integration

**Best for:** "Tell me about navigating change" / "How do you work with large teams?" / "Describe adapting to a new technical environment"

When Benevity acquired Alaya in 2021, I joined an engineering org roughly ten times the size of what I'd been working in. The codebase was Java and microservices; at Alaya we'd been TypeScript and a modular monolith. The culture, the processes, the team structure were all different.

My first instinct was to start fixing things. I knew our Alaya platform well and could see areas where Benevity's approach had technical debt I'd have handled differently. I made the mistake of moving too fast in the first few weeks, pushing opinions before I'd built relationships or fully understood why decisions had been made the way they were.

I caught myself after about a month and reset. I spent the next few weeks mapping the existing architecture and the people behind it before proposing anything. I invested time in building relationships with the platform and infra teams before bringing technical opinions. That shift made a real difference: the same ideas I'd tried to introduce in week three landed much better in month three, because people trusted that I understood the context.

From there I was able to contribute to three major cross-team architecture decisions and drive AI tooling adoption across two teams. The lesson was simple and uncomfortable: in a new org, listening is faster than moving fast.

---

## 5. Translating Product Vision into Technical Roadmap

**Best for:** "How do you work with product?" / "Tell me about bridging technical and business priorities" / "How do you handle competing demands on engineering time?"

At Benevity, one of my ongoing responsibilities as Senior Staff was acting as architecture liaison between the Europe-facing product surface and the central platform team. Product managers had priorities; the platform team had constraints. My job was to translate between them without creating false promises on either side.

A recurring friction point was feature requests that seemed simple on the product side but required significant platform changes underneath. My approach was to get upstream early, before specs were written, so I could shape estimates and identify architectural implications while there was still room to adjust scope. I introduced a lightweight technical feasibility review step before any feature entered sprint planning.

The result was fewer mid-sprint surprises and better trust between product and engineering. Estimates became more credible because the team had already poked at the hard parts. It sounds procedural, but the real value was that product managers started treating engineering input as a design resource rather than a bottleneck, which changed how those conversations went.

What I'd refine: the process added overhead, and in a fast-moving startup context you have to be careful that lightweight doesn't drift into heavyweight. I'd keep it leaner next time.
