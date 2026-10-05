# STAR+R Stories: Cloover, Staff Software Engineer (Berlin)

Cloover's posting leans on four things: setting technical direction across cross-functional work, building systems where correctness matters, championing AI tooling, and taking ownership without waiting to be told. The four stories below map to those. A short prepared answer for the GCP and Terraform gap follows at the end, because it'll come up.

---

## 1. Building Alaya from a blank page to acquisition

**Likely prompts:** "Tell me about something you owned end to end." / "How do you work when nobody is telling you what to do?"

**Situation.** In 2016 I co-founded Alaya, an employee purpose and impact platform. There was no product, no customers and no team, only a business side that was already talking to enterprise prospects.

**Task.** I had to design and build the whole platform, first alone and then with a small team, fast enough that the business could sign its first clients on something real.

**Action.** I picked a stack I knew would hold up without heroics, Node.js, React and PostgreSQL, and got the core features to a demo in about three months. From there the platform grew in layers: multi-tenant architecture, an API layer, impact reporting, postal campaigns. When we hired, I brought on the first three engineers myself and set up the basics I'd want in any team, CI/CD, a code review habit and architecture docs people actually read.

**Result.** Alaya reached 50+ enterprise clients across Switzerland and France and was acquired by Benevity, a Canadian company valued at over $1B, in 2021. The technical choices from the first months were still standing at due diligence.

**Reflection.** Observability came too late; we added proper APM well after we needed it. Retrofitting multi-tenancy also cost more than I'd guessed. For anything that touches money, like Cloover's financing flows, I'd put tracing and tenant isolation in from day one and not treat them as phase two.

---

## 2. A hard architecture call under delivery pressure

**Likely prompts:** "Tell me about a technical trade-off you made." / "How do you handle tech debt when the business wants features?"

**Situation.** Alaya's monolith was starting to crack under load. Half the team wanted a full microservices rewrite, while investors wanted new features and had little patience for rewrites. Both sides had a point, and the debate was eating weeks.

**Task.** My job was to make a call I could defend with data, one that protected scalability without freezing the roadmap.

**Action.** We ran a two-week spike with prototype load tests of both approaches. I took the numbers to the CTO and investors rather than an opinion, and proposed a strangler fig migration: pull out the two highest-traffic modules, leave everything else in the monolith, and write down the criteria that would justify extracting anything further.

**Result.** The first extracted module shipped in about six weeks and the busiest endpoints got roughly 40% faster. The rest of the monolith stayed stable through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** The hard part wasn't technical. It was persuading people that not rewriting everything was the right answer. Data ended the argument, and I'd start benchmarking even earlier next time to shorten it.

---

## 3. Getting two teams onto AI tooling without a mandate

**Likely prompts:** "How do you influence engineers who don't report to you?" / "How would you champion AI tooling here?"

**Situation.** At Benevity I was a Senior Staff IC with no reports. I was convinced AI-assisted development would change how fast the teams around me shipped, but the two teams I wanted to bring along didn't report to me, and some engineers were openly skeptical about generated code in review.

**Task.** I wanted AI tooling in people's daily workflow in a way that stuck, without a decree and without becoming the person who nags everyone about a new tool.

**Action.** Three curious engineers were my starting point, and I worked alongside them on real tickets rather than toy demos. Once we had concrete wins, like a PR review cycle that came in about two hours shorter, I ran informal lunch-and-learns where I mostly showed the work and let people poke holes in it. The prompt templates we'd refined went into a shared repo so anyone could pick them up and change them.

**Result.** Within about three months, roughly 70% of engineers on both teams were using AI-assisted review and generation, and I became the informal AI tooling lead for the org.

**Reflection.** Skipping the mandate was slower, but it lasted, because the early adopters did the advocating for me. Cloover already gives everyone enterprise AI access, so the challenge there is different: less about adoption, more about making sure generated code meets the bar for systems that move money. I'd add review guardrails and a simple way to measure the effect from the start.

---

## 4. Joining a much bigger org after the acquisition

**Likely prompts:** "Tell me about a time you had to change how you worked." / "How do you set direction in a team you've just joined?"

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer. The engineering org was about ten times Alaya's size, ran Java microservices instead of our stack, and had its own processes and politics.

**Task.** Alaya's capabilities had to move into Benevity's platform while we kept shipping new features, and I didn't want the product to lose the speed it had as a startup.

**Action.** For the first month I mostly mapped the existing architecture and listened before proposing anything. Relationships with the platform and infra teams came before technical opinions. Once I understood where things actually hurt, I took on the role of cross-team architecture liaison for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform. I contributed to three major cross-team architecture decisions and ended up as the go-to person for AI tooling across two teams.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Slowing down made me more effective, and it's the approach I'd take joining Cloover's Berlin team: learn the financing flows and the installer side first, then start setting direction.

---

## Prepared answer: the GCP and Terraform gap

> "My production cloud work has been on AWS, with Docker, Kubernetes and CI/CD. I haven't run a GCP estate or owned Terraform at production scale. The concepts carry over, IAM, networking, managed Postgres, deployment pipelines, but the specifics don't, and I'd rather say that plainly. In the first month I'd pair with whoever owns your Terraform today, read the state before touching it, and pick up an infra change end to end so I learn it by doing. What I bring is the judgment about what should be infrastructure-as-code in the first place, and the habit of reviewing changes like they can break production, because they can."

Auth0 and OAuth/OIDC are listed as nice-to-haves. Be honest about the depth: the profile shows API and platform work but no dedicated identity work, so don't overclaim.
