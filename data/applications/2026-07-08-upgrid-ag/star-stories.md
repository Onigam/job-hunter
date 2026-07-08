# STAR Stories: UpGrid AG CTO / Lead Engineer / Co-Founder

---

## Story 1: Building Alaya from Zero to Acquisition
*Best for: "Tell me about a time you built something from scratch" / "Founding engineer" questions / "How do you handle ambiguity?"*

Back in 2016 I co-founded Alaya with a co-founder, an idea about employee purpose and engagement, and nothing else. No customers, no code, no team. My job was to turn that idea into a working product fast enough to keep the first enterprise conversations alive, because we were signing letters of intent before we had anything to show.

I picked Node.js, React, and PostgreSQL on purpose, nothing exotic, nothing I'd regret in a year. Within about three months we had a real demo. From there it grew into a proper multi-tenant SaaS platform: an API layer, impact reporting, campaign tooling for postal and digital channels. As revenue came in I hired the first three engineers and put in place the basics that keep a codebase sane, code review, CI/CD, some architecture documentation, so growth wouldn't turn into chaos.

By 2021 we had over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian company that had reached unicorn status, acquired us. Their technical due diligence went through the codebase line by line, and it held up.

If I did it again, I'd add observability much earlier. We bolted on proper monitoring later than we should have, and it made a few production incidents harder to diagnose than necessary. I'd also design the multi-tenant model from day one instead of retrofitting it once the second big client showed up.

---

## Story 2: A Hard Architecture Call Under Commercial Pressure
*Best for: "Tell me about a technical trade-off" / "How do you handle technical debt?" / "Describe a decision you made under uncertainty"*

Around year three at Alaya, our monolith started showing real strain under load, and the team split into two camps: rewrite everything as microservices, or leave it alone and keep shipping features. Investors wanted the second option and had no patience for a rewrite story. I had to pick a path that wouldn't blow up either the platform or the relationship with the board.

I ran a two-week spike where we built the two highest-traffic modules as standalone prototypes and load-tested both approaches against realistic traffic. Then I took the numbers, not opinions, to the team and to the investors. We agreed on a strangler-fig approach: pull out the two busiest modules first, leave the rest of the monolith intact, and set clear thresholds for when the next module gets extracted.

The first module shipped in six weeks. Response times on the busiest endpoints improved by roughly 40%, and the remaining monolith stayed stable all the way through the acquisition without another major intervention.

The hard part was never the architecture itself, it was convincing people that not rewriting everything was the disciplined choice rather than the timid one. Data settled that argument faster than any amount of debate would have. I'd run the benchmarking even earlier next time, since it's what actually ended the back-and-forth.

---

## Story 3: Leading Two Teams With No Formal Authority
*Best for: "How do you lead without being a manager?" / "Tell me about driving adoption of something new" / staff-plus and founder-adjacent roles*

After Benevity acquired Alaya, I moved into a Senior Staff IC role with no direct reports, on a team ten times the size of anything I'd worked on before. I wanted two engineering teams that didn't report to me to adopt AI-assisted development workflows, and I had zero mandate to make that happen.

I started with three engineers who were already curious and ran informal lunch sessions, no slides, just live demos on their actual pull requests. I built a small set of reusable prompt templates and committed them to a shared repo so people had something concrete to try instead of a vague pitch. When one AI-assisted review caught a bug that had sat unnoticed in the codebase for months, I wrote it up and let it circulate internally rather than pushing it top-down.

Within three months roughly 70% of engineers across both teams were using some form of AI-assisted workflow regularly, and I became the informal go-to person for AI tooling across the org.

Looking back, the mandate-free approach was slower to start but stuck better. People who chose it themselves ended up defending it to their peers, which a top-down decree never would have produced. That's the model I'd bring to building an engineering culture from the ground up somewhere like UpGrid.

---

## Story 4: Choosing the Right Technical Foundation Under a Brutal Deadline
*Best for: "How do you balance speed and quality?" / "Tell me about an early decision that shaped everything after" / founder and CTO interviews specifically*

Early at Alaya, an investor introduced us to a potential enterprise client, and the demo timeline that followed was tight enough that one of my co-founders wanted to build the MVP on a low-code platform to hit the date. I pushed back hard, which was uncomfortable given the deadline pressure everyone else felt.

My argument was straightforward: a B2B product for HR and compliance teams needs proper multi-tenant access control and audit trails from the start, and a low-code tool would get us to a demo faster but collapse under those requirements within months. Rather than argue it in the abstract, I spent three days building a rough prototype of both approaches against a realistic enterprise data model and showed exactly where the low-code path would hit its ceiling.

The founding team went with the custom build. Three years later, during Benevity's due diligence, their engineering team specifically flagged the clean data model and API design as reasons the integration timeline was workable at all.

That decision is invisible when it's right and expensive when it's wrong, which is exactly why I still think those three days of prototyping were worth more than almost anything else I did that year. It's also the instinct I'd bring to UpGrid's IoT and metering integrations, where the same kind of shortcut looks tempting early and gets very costly later.

