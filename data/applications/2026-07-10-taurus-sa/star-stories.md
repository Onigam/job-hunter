# STAR Stories: Taurus SA, Platform Engineer / DevOps Engineer

---

## Story 1: Building and Owning Infrastructure From Zero
*Best for: "Tell me about owning production infrastructure end to end" / "How do you handle ambiguity?"*

In 2016 I co-founded Alaya with an idea about employee purpose and engagement, and not much else. No customers, no code, no infrastructure. I picked Node.js, React and PostgreSQL because they were boring in the right way, and had a working demo inside three months. From there the platform grew into a proper multi-tenant SaaS product, and I was the one who set up hosting, CI/CD and the first monitoring, because there was nobody else to do it.

By 2021 we had 50-plus enterprise clients across Switzerland and France, and the whole stack had stayed up through every one of their onboarding pushes. That track record is a big part of why Benevity, a Canadian unicorn, went through with the acquisition; their technical due diligence looked hard at operational history, not just code quality.

If I'm honest, I added real observability too late. Early on I could debug production issues from memory because I'd built everything myself, and that habit meant proper APM and alerting came later than they should have. It's the mistake that shaped how seriously I take monitoring now, before something breaks rather than after.

---

## Story 2: A Reliability Trade-off Under Commercial Pressure
*Best for: "Tell me about a technical trade-off" / "How do you balance uptime against feature pressure?"*

A few years into Alaya, our monolith started cracking under load right as investors were pushing hard for new features, not infrastructure work. The team split between a full microservices rewrite and just patching things as they broke, and neither option was going to hold for long.

I ran a two-week spike, built the two highest-traffic modules as standalone prototypes, and load-tested both approaches against real traffic patterns instead of arguing from opinion. The numbers pointed to a strangler-fig approach: extract the two busiest modules first, leave the rest of the monolith alone, and set clear thresholds for when to pull out the next one. I took that plan to the CTO and the investors together, so nobody found out about it secondhand.

The first extracted module shipped in six weeks, response times on the busiest endpoints improved by roughly 40%, and the rest of the system stayed stable all the way through the acquisition without another emergency intervention.

What I'd change is timing. The benchmarking data is what actually ended the debate, and I let the debate run longer than it needed to before I had numbers in hand.

---

## Story 3: Joining an Established Ops Culture Without Breaking It
*Best for: "How do you integrate into an existing infrastructure team?" / "Tell me about working within someone else's processes"*

When Benevity acquired Alaya in 2021, I went from being the only person who understood our infrastructure to one engineer on a team ten times the size, with a different stack, Java and microservices instead of my Node monolith, and existing on-call rotations I hadn't built.

I spent the first month reading runbooks and sitting in on incident reviews before proposing anything. Only after that did I start working with the platform and infra teams to migrate Alaya's services onto their standards, matching their deployment pipelines and monitoring conventions rather than asking them to accommodate mine. I also picked up AI-assisted tooling early and started sharing patterns that saved real review time, which is a smaller thing but it's how I built credibility with people who had no reason to trust the new acquisition's engineer yet.

The migration went through without a production incident, and within a few months I'd become one of the people other teams pulled in on Europe-facing architecture questions.

Looking back, I moved a little too fast trying to improve things that weren't actually broken in my first few weeks. Slowing down and mapping the existing system first is what made the rest of it work.

---

## Story 4: Driving Tooling Adoption With No Mandate
*Best for: "How do you push for change without formal authority?" / "Tell me about improving a process nobody asked you to fix"*

At Benevity I had no direct reports and no mandate, but I wanted two engineering teams to adopt AI-assisted workflows that I thought would meaningfully cut review and incident-response time. Nobody had asked me to lead that.

I started with three engineers who were curious rather than trying to convince the skeptics first. We ran informal sessions on their actual pull requests, no slide decks, and I put together a small set of reusable templates in a shared repo so people had something to try instead of a pitch to evaluate. When the tooling caught a bug that had been sitting unnoticed in production code for months, I wrote it up and let that story spread on its own instead of pushing it top-down.

Within three months, about 70% of engineers across both teams were using some version of the workflow regularly, and I'd become the informal go-to person for it across the org.

The slower, no-mandate approach cost me a few weeks up front, but it stuck because people adopted it on their own terms and then defended it to their peers. That's the same instinct I'd bring to any DevOps tooling or process change at Taurus, start small, show the time saved, let it spread.
