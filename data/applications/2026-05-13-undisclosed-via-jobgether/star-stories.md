# STAR Stories — VP Engineering Leader (Undisclosed via Jobgether)

Tailored for: leading a 50-person engineering org, AI strategy, P&L ownership, high accountability culture.

---

## Story 1: Building Alaya from Zero to a Unicorn Acquisition
*Best for: "Tell me about a time you built something from scratch" / "What's your biggest technical achievement?"*

In 2016 I co-founded Alaya with a single sentence of product vision and no engineers. The task was to architect and ship a purpose platform for enterprise employee engagement fast enough that the business could sign real clients before we ran out of money. I chose a stack deliberately: Node.js, React, PostgreSQL, nothing exotic. Got a working demo in under three months, then spent the next four years iterating in public. We built multi-tenancy, an API layer, impact reporting, and postal campaign tooling. I hired the first three engineers myself, set the code review culture, wrote the architecture docs. By 2021 the platform had over 50 enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn with a $1B+ valuation, acquired us. The acquisition was the clearest possible signal that the technical decisions we'd made from day one actually held up under scrutiny. Looking back, I'd have invested in observability earlier. We added APM late, and there were a few painful weeks where we were debugging production issues nearly blind. I'd also have designed for multi-tenancy from the start rather than retrofitting it, which cost us about two months of engineering time mid-growth.

---

## Story 2: Defining AI Strategy Across an Engineering Org Without a Mandate
*Best for: "How do you drive change?" / "Tell me about executing an AI strategy" / "Influence without authority"*

At Benevity I was a Senior Staff IC — no direct reports, but I saw a clear opportunity to reshape how our engineering teams worked with AI tooling. The problem was real: developers were spending hours on PR reviews and boilerplate code that AI could handle in minutes, but adoption was zero because no one had made the case concretely. I started small. Found three engineers who were curious, ran a workshop with live demos showing exactly how much time we were recovering on specific types of tasks. Then I built reusable prompt templates and committed them to a shared repo so the investment compounded. I ran informal sessions — no mandate, attendance optional — and documented time savings in plain language that non-engineers could follow. Within three months, roughly 70% of engineers across two teams were using AI-assisted code review and generation daily. I'd become the informal AI tooling lead across the org without a single top-down directive. What I learned: adoption that comes from curiosity is stickier than adoption that comes from policy. Engineers who chose it themselves became its internal advocates. If I were doing it again I'd instrument the tooling earlier so I had adoption metrics to show leadership, not just anecdotes.

---

## Story 3: Making a Hard Architecture Call Under Investor Pressure
*Best for: "Tell me about a technical trade-off" / "How do you handle debt vs. velocity?" / "Decision-making under uncertainty"*

Midway through Alaya's growth, we hit a wall. The monolith was showing scaling cracks, and the team was split between a full microservices rewrite and a modular monolith approach. Investors were asking for new features every quarter, not rewrites. My task was to make a call that the whole team could commit to, with real data behind it. I ran a two-week technical spike: prototypes, load tests, concrete numbers comparing both paths. Then I presented the trade-offs to the CTO and our investors with metrics, not opinions. The recommendation was a strangler-fig migration: extract the two highest-traffic modules first, keep everything else stable, define explicit criteria for when to extract more. We shipped the first extracted module in six weeks. Performance on the busiest endpoints improved by about 40%. The rest of the monolith stayed stable through the Benevity acquisition without a big-bang rewrite. The hardest part wasn't the technical decision, it was convincing people that "not rewriting everything" was the right answer. Data cut that debate short. Next time I'd run the benchmarks even earlier to get ahead of the opinion wars.

---

## Story 4: Navigating Post-Acquisition Integration at Scale
*Best for: "Tell me about a time you joined a much larger org" / "Cross-functional collaboration" / "Managing change"*

When Benevity acquired Alaya in 2021, I went from a team of eight to an engineering organization more than ten times that size. Different culture, different codebase — Java microservices rather than our Node.js monorepo — and different processes for everything from deployment to RFC reviews. My task was to integrate Alaya's capabilities into Benevity's platform while keeping product velocity alive. I spent the first month doing almost nothing but listening and mapping: understanding the existing architecture before proposing changes, building relationships with platform and infra teams before pushing opinions. When I did start advocating for technical positions, I had enough context to frame them in terms the existing org recognized. I drove adoption of AI-assisted development practices, became a cross-team architecture liaison for the Europe-facing product surface, and contributed to three major cross-team architecture decisions. I moved too fast initially. I came in with a "fix it" mindset and nearly burned goodwill in the first two weeks by suggesting changes to things that worked fine. Slowing down made me more effective, not less. In a large org, trust is the multiplier. I'd prioritize building it earlier next time.

---

## Story 5: Building Engineering Culture and Accountability Without a VP Title
*Best for: "How do you create a high-performance culture?" / "Tell me about developing other engineers"*

At Alaya, as the team grew from one to eight engineers, I had to figure out how to keep quality high without becoming a bottleneck myself. I wasn't formally "VP Engineering" but I was doing the job: hiring, setting standards, creating the conditions for people to do their best work. I introduced a light RFC process for any significant technical decision, mandatory code review with documented feedback (not just approvals), and a quarterly "architecture review" where we looked at what had aged well and what hadn't. The outcome was a team where junior engineers could make real architectural contributions within six months of joining, and where we almost never had production incidents from decisions made without adequate review. Two of the engineers I onboarded at Alaya went on to senior roles after the acquisition. The thing I'd do differently: I established the RFC process too late, after some costly decisions had already been made by individuals without enough input. If I were growing an engineering team from scratch again, the process scaffolding would come before the first hire.
