# STAR+R Stories: Motion, Executive IC, Engineering

Motion wants a former founder or exec who still writes the code, sets the bar by example rather than by managing, and makes AI coding agents part of how the whole org works. Expect questions about ownership, influence without authority, big technical calls you also implemented, and why you'd take an IC seat after running a company. These five stories cover that ground.

---

## 1. Building Alaya from a blank page to acquisition

**Likely questions:** "Tell me about something you built from scratch." "Walk me through a product surface you owned end to end."

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, just a business partner signing early enterprise conversations and a deadline for the first demo.

**Task.** As Head of Technologies, I had to design and build the whole platform, first on my own and then with a small team, while sales was promising features to clients we didn't have yet.

**Action.** I picked a stack I knew could carry us a long way without ceremony: Node.js, React and PostgreSQL. The core features were in front of prospects within about three months, which mattered more than anything else that year. From there I grew it piece by piece, adding multi-tenancy, a proper API layer, impact reporting and eventually postal campaigns. When we hired the first three engineers, I set up CI/CD, code review habits and architecture docs, mostly by doing the reviews myself until the team had absorbed the standard and didn't need me in every PR.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity in 2021. The architecture survived due diligence and became the base for the integration work that followed.

**Reflection.** I'd add observability much earlier; we brought in proper APM late and spent time guessing that we didn't need to. I also retrofitted multi-tenancy, and it cost more than designing for it on day one would have. Those are the two things I now push for early on any product surface I own.

---

## 2. Choosing a strangler fig over a rewrite

**Likely questions:** "Tell me about a major technical decision you made and then built." "How do you handle tech debt against feature pressure?"

**Situation.** Alaya's monolith was starting to crack under load. Half the team wanted a full microservices rewrite, and the investors wanted new features, not a rewrite.

**Task.** I needed a decision I could defend with numbers, and one that wouldn't stop delivery for months.

**Action.** Rather than argue in meetings, I ran a two-week spike that prototyped both approaches and load-tested them. The data pointed to a middle path, so I proposed a strangler-fig migration: pull out the two highest-traffic modules, leave the rest monolithic, and write down explicit criteria for when any further module would earn its own service. I presented the trade-offs to my cofounders and the investors in terms of latency and delivery risk, then led the first extraction myself.

**Result.** The first module shipped in about six weeks, and the busiest endpoints got roughly 40% faster. The remaining monolith stayed stable all the way through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The engineering was the easy part. Convincing people that not rewriting everything was the ambitious choice took longer, and benchmarking earlier would have shortened that debate by weeks. It's the same instinct I'd bring to Motion: make the call, but put the evidence on the table and then write the first version yourself.

---

## 3. Getting two teams onto AI-assisted development without a mandate

**Likely questions:** "How do you raise the bar for engineers who don't report to you?" "How have you used AI tooling to change how a team works?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I was convinced AI-assisted development would change how fast we shipped, but the two teams I worked with had no reason to change their habits because I said so.

**Task.** Shift how engineers actually worked day to day, using nothing but influence.

**Action.** I started with three engineers who were already curious and worked with them on real tickets, not toy examples. Once we had concrete wins, like a PR review cycle that dropped by about two hours, I turned them into short demos and informal lunch sessions. There was never a mandate. Instead I wrote reusable prompt templates, committed them to a shared repo where anyone could improve them, and kept a running log of where the tools helped and where they produced confident garbage, because engineers trust honest failure cases more than a sales pitch.

**Result.** Within about three months, roughly 70% of engineers across both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead for the org.

**Reflection.** It was slower than a top-down rollout, but it stuck, because the people who adopted it on their own terms became its advocates. Today the tooling is far more capable; I write most of my own code through Claude Code, so the conversation has moved from "should we use this" to "what review standard do agent-written PRs need." That's the question I'd want to help Motion answer.

---

## 4. Joining a company ten times bigger and slowing down first

**Likely questions:** "Why would a former founder join a company with established momentum?" "Tell me about adapting to a new environment."

**Situation.** After the acquisition I joined Benevity as Senior Staff Engineer. The engineering org was about ten times the size of Alaya's, with a Java microservices estate, different processes and a culture I didn't know.

**Task.** Fold Alaya's capabilities into Benevity's platform while still shipping new features, and do it without the integration eating all our velocity.

**Action.** My first instinct was to fix things, and in the first few weeks I pushed a couple of opinions before I'd earned them. It didn't land. So I spent the next month mapping the architecture properly and building relationships with the platform and infra teams before proposing anything. Once I understood why certain things were the way they were, my proposals got sharper and people started bringing me into decisions rather than defending against them. I ended up as the cross-team architecture liaison for the Europe-facing product surface.

**Result.** We migrated Alaya's core features onto Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** I learned that momentum is an asset you can damage. As a founder you're used to being the person who knows why everything exists; in someone else's company you have to earn that context. It's a big part of why Motion's line about preferring established momentum over founding resonated with me.

---

## 5. Why an IC seat after running engineering at a startup

**Likely questions:** "You've been a cofounder. Why not a VP or CTO role?" "What does leading by example look like for you?"

**Situation.** By the end of Alaya I'd done the parts of a head-of-engineering job that pull you away from code: hiring, investor updates, client escalations. After the acquisition I chose to stay an IC at Benevity rather than chase a management title.

**Task.** Figure out how to have org-level impact without managing people, and whether that was really the job I wanted.

**Action.** I concentrated on the things that spread beyond my own commits: architecture decisions across teams, review standards, and the AI tooling work in story 3. I kept owning real features so my opinions stayed grounded in code that shipped, and I treated every review as a chance to show the standard rather than describe it.

**Result.** Over five years I influenced decisions across several teams while still shipping, and I came out of it fairly certain that hands-on IC work with reach across teams is where I do my best.

**Reflection.** The honest answer for Motion is that I've done the founder job and liked most of it, but the part I'd keep is owning a product surface and writing the code that sets the bar. An Executive IC role is close to the best parts of being a founding engineer, without the parts I don't miss.
