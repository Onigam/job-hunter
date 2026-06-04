# Behavioral Interview Stories — SwissFlow Technical Co-Founder/CTO

---

## Story 1: Building Alaya from Zero to Acquisition
*Best for: "Tell me about building a product from scratch" / "Walk me through your founding experience"*

In early 2016, my co-founder and I had a name, a pitch, and no code. We were building Alaya, a purpose and employee engagement platform for Swiss and French enterprises. I was the sole engineer for the first twelve months while we were signing our first clients simultaneously.

The job was to architect and build the full platform fast enough to support sales conversations without accumulating so much debt that we'd need a full rewrite at 50 clients. I chose a pragmatic stack: Node.js on the backend, React on the frontend, PostgreSQL for persistence. The most critical early choice was designing for multi-tenancy from day one, even when we had a single client. I'd seen what retrofitting multi-tenancy looks like mid-hypergrowth and didn't want that.

Over the next four years I hired and onboarded our first three engineers, built out an impact reporting layer, a postal campaign system, and an API integration layer that enterprise HR systems could connect to. We grew to 50+ enterprise clients across Switzerland and France.

In 2021 Benevity, a Canadian unicorn at $1B+ valuation, acquired us. The core architecture survived due diligence without significant rewrites. The thing I'd do differently is invest in observability earlier. We added proper APM late and flew blind longer than we needed to during peak growth.

---

## Story 2: The Architecture Decision that Held Through the Exit
*Best for: "Tell me about a critical technical trade-off" / "How do you handle pressure to move fast vs. doing it right?"*

Two years into building Alaya, the monolith was showing cracks. Parts of the codebase that handled the highest-traffic workflows were getting brittle, and a growing team meant mounting merge conflicts and coordination overhead. Two camps formed: full microservices rewrite, or stay in the monolith and add structure.

I was responsible for making a defensible call while investors were pushing for new features, not rewrites. I ran a two-week technical spike comparing both approaches with prototype load tests. The recommendation I brought to the founders and investors was a strangler fig migration: extract the two highest-traffic modules first, keep the rest monolithic, and define clear criteria for when to extract more. I presented it with data, not opinions.

Six weeks later the first extracted module was in production. Performance on those endpoints improved roughly 40%. The remaining monolith stayed stable through the acquisition two years later. No big-bang rewrite ever happened.

The hardest part was convincing the team that not rewriting everything was the right call. Data made it possible. If I did it again I'd front-load the benchmarking to compress the debate from weeks to days.

---

## Story 3: Getting AI Adoption Without a Mandate
*Best for: "How do you lead without formal authority?" / "Tell me about changing how a team works"*

When I joined Benevity post-acquisition, I was a Senior Staff IC with no direct reports. I'd seen the productivity gains from AI-assisted development and wanted to bring them to two engineering teams that had no structural reason to follow my lead.

Rather than pushing a formal initiative, I started with three engineers who were already curious. I built demos showing concrete, unglamorous time savings: a PR review cycle that dropped from roughly two hours to 30 minutes, a boilerplate generator that eliminated a recurring setup headache. I ran informal lunch-and-learns, no mandatory attendance, no slide decks. I also committed reusable prompt templates to a shared repo so early adopters had something tangible to point colleagues to.

Within three months, roughly 70% of engineers on both teams were using AI tooling regularly. I ended up as the informal AI tooling lead across the org without ever holding the title.

The mandate-free approach was slower at the start, but the adoption stuck because engineers chose it on their own terms and then advocated internally. A top-down decree would have gotten compliance, not buy-in.

---

## Story 4: Integrating After the Acquisition
*Best for: "Tell me about adapting to a new environment" / "How do you operate in a larger organization?"*

After Benevity acquired Alaya in 2021, I went from a ten-person startup to an org roughly ten times larger, with a Java microservices codebase and processes I'd never seen before. My first instinct was to move fast and start improving things.

It was the wrong instinct. I spent my first month mapping the existing architecture before proposing changes, and building relationships with the platform and infra teams before expressing opinions. That investment paid off: the recommendations I made in month two landed differently because people could see I'd taken the time to understand their constraints first.

Over the following years I drove the migration of core Alaya features into Benevity's platform, contributed to three major cross-team architecture decisions, and became the go-to person for AI tooling adoption across two engineering teams.

The lesson: in a new context, listening is faster than talking, even when you genuinely know things. The engineers who became my strongest allies were the ones I'd asked good questions of, not the ones I'd tried to teach something in week one.
