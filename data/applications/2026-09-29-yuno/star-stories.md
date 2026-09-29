# STAR+R Stories: Yuno, Staff Engineer (Client Experience)

What the posting weights most: system design at scale, mentoring, leading delivery across teams, performance on high-throughput paths, and code quality in CI/CD. The gaps they'll probe are Go/Kotlin and payments. Stories 1 to 4 come from the star bank. Story 5 is the answer to "you've never used our stack", built from the Benevity move.

---

## 1. Splitting a monolith under delivery pressure

**Likely questions:** "Walk me through a hard architecture trade-off." / "How do you handle performance problems on a hot path?" / "Tech debt vs. features?"

**Situation.** At Alaya, the monolith was starting to crack under load on a couple of endpoints, and the team was split between a full microservices rewrite and staying as we were. Investors wanted features, not a rewrite.

**Task.** I had to get us to a decision we could defend, one that fixed the scaling problem without freezing the roadmap for a quarter.

**Action.** Rather than argue it out in meetings, I ran a two-week spike and built prototypes of both approaches, then load tested them. When I took it to the CTO and the investors, it was numbers on a slide, not opinions. What I proposed was a strangler fig: pull out the two highest-traffic modules, leave everything else in the monolith, and write down the criteria that would justify extracting the next one, so the question didn't get reopened every sprint.

**Result.** The first extracted module shipped in about six weeks, and response times on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable all the way through the acquisition, and we never needed the big-bang rewrite.

**Reflection.** Most of the effort went into convincing people that not rewriting was the right call. I'd benchmark earlier next time, because data ended the debate faster than anything I said. For Yuno, the same thinking applies to a payment path: find the two places where latency actually costs approvals, fix those, and leave the rest alone until the numbers say otherwise.

---

## 2. Building a platform that enterprise clients ran on

**Likely questions:** "Tell me about something you built from scratch." / "How do you think about the customer's experience of a platform?" / "Handling ambiguity."

**Situation.** In 2016 I cofounded Alaya, an employee purpose and engagement platform. We had no product and no customers, and the business side was already talking to enterprise prospects.

**Task.** I needed to design and build the whole platform, alone at first, fast enough to demo to those first clients and solid enough that we wouldn't have to throw it away once they signed.

**Action.** I went with a stack I knew would hold (Node.js, React, PostgreSQL) and didn't over-engineer it. The core features were demo-ready in about three months. After that it grew one client need at a time: multi-tenant architecture, an API layer, impact reporting, postal campaigns. When the first three engineers joined, I set up CI/CD, code review habits and architecture docs so the quality bar didn't depend on me reviewing everything.

**Result.** We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn, acquired Alaya in 2021.

**Reflection.** Two things I'd change. We added proper APM late, and I'd put observability in from the first month. Retrofitting multi-tenancy also cost more than I'd expected, so today I design for it from day zero. Both lessons map straight onto a merchant-facing payments platform, where tenant isolation and tracing aren't optional.

---

## 3. Getting two teams onto a new way of working without authority

**Likely questions:** "How do you influence as a Staff IC?" / "Tell me about mentoring." / "Driving engineering standards across teams."

**Situation.** At Benevity I was a Senior Staff IC with no reports. I wanted two engineering teams, neither of them mine, to start using AI-assisted development.

**Task.** The goal was to change daily habits for people I had no say over, and to make it stick after I stopped pushing.

**Action.** My starting point was three engineers who were already curious, and I worked with them first. I built small demos that showed the time saved on real tasks, and ran informal lunch sessions with no mandate attached. The prompt templates that worked went into a shared repo so anyone could reuse them, and I wrote up concrete wins, such as a PR review cycle that dropped by about two hours.

**Result.** Within three months about 70% of engineers on both teams were using AI-assisted review and generation. I ended up as the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own became its advocates. That's also how I approach mentoring: make the better path visible and easy, then let people own it.

---

## 4. Joining a much bigger engineering org after the acquisition

**Likely questions:** "Tell me about a time you had to adapt." / "Cross-functional collaboration." / "Leading cross-team delivery."

**Situation.** After the acquisition I joined Benevity as a Senior Staff Engineer, on a team roughly ten times the size of Alaya's, with a Java microservices codebase and processes I didn't know.

**Task.** I had to fold Alaya's capabilities into Benevity's platform while we kept shipping new features.

**Action.** For the first month I mostly read code and mapped the architecture before proposing anything. I also got to know the platform and infra teams before pushing technical opinions at them. Once I understood the system, I took on the role of cross-team architecture liaison for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** Early on I moved too fast and tried to fix things that weren't broken. Slowing down and listening made me far more effective, and it's how I'd start at Yuno, where I'd be the new person on a platform processing volume for brands like McDonald's.

---

## 5. "You haven't worked in Go, Kotlin or payments"

**How to answer:** don't get defensive, and don't overclaim. Use story 4 as the evidence.

The honest version: my backend work has been in Java, Node.js and TypeScript, and I've never worked on a payments platform. When I joined Benevity it was a Java microservices estate much bigger than anything I'd built, and within a few months I was contributing to cross-team architecture decisions there. Kotlin runs on the JVM, and Spring Boot and PostgreSQL are familiar ground, so that part is a short step. Go is a small language, and I'd expect to be reviewing it usefully within weeks and writing it well within a couple of months. On payments, the domain problems I've seen in the posting and Yuno's announcements (routing, retries, approval rates, merchant-facing reporting) are distributed systems and client platform problems I know well; the acquirer and scheme specifics are what I'd need to learn, and I'd start with the team's incident history.

**Reflection to offer if asked:** the thing that carried over at Benevity wasn't the language, it was the habit of mapping a system before changing it.
