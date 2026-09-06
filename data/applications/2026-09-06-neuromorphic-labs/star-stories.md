# STAR Stories: Neuromorphic Labs (Founding Forward Deployed AI Engineer)

Picked for the customer-facing, zero-to-one, and infrastructure-trust angles of this role.

---

## 1. Building Alaya from zero to acquisition
**Likely question:** "Tell me about building something from scratch" / founding engineer fit

In 2016 I co-founded Alaya with nothing, no product, no customers, just a bet that companies would pay for an employee purpose platform if it actually worked. I had to architect and build the whole thing myself for the first stretch while the business was out signing its first enterprise clients, so there was no room for a six-month foundation phase. I picked a pragmatic stack, Node.js, React, Postgres, that could carry weight without forcing a rewrite later, shipped a working demo inside three months, then layered in multi-tenancy, an API layer, and impact reporting as real usage showed up. Once we had traction I hired the first three engineers and put in place the basics, CI/CD, code review, some architecture docs, so the thing wouldn't collapse under its own growth. We got to 50-plus enterprise clients across Switzerland and France, and Benevity acquired us in 2021, which told me the early calls were roughly right. If I did it again I'd add proper observability from day one instead of bolting on APM late, and I'd design for multi-tenancy up front rather than retrofitting it once it hurt.

---

## 2. Debugging a live integration under customer pressure
**Likely question:** "Tell me about a time you had to fix something in production for a customer" / forward-deployed fit

During the post-acquisition integration, one of the first Alaya features we ported into Benevity's platform started failing intermittently for a European enterprise client, right in the middle of their campaign launch window. Nobody on either side had full visibility into the failure because it sat at the seam between our old service and their newer microservices layer, and the client was understandably not interested in an architecture lecture, they wanted it fixed. I spent the first hours just mapping where the two systems actually touched instead of guessing, which is a habit I picked up from moving too fast early at Benevity and getting burned for it. Once I found the mismatch, a schema assumption that held in the monolith but broke under their retry logic, I patched the immediate issue, then wrote up a reference doc so the next team hitting that seam wouldn't have to rediscover it. The client's launch went out on time and the doc got reused twice more that quarter by other teams. What I'd change: I should have pulled in the client's own engineer earlier instead of trying to solve it solo first, it would have cut the diagnosis time in half.

---

## 3. A hard architecture trade-off under investor pressure
**Likely question:** "Tell me about a technical trade-off you navigated" / technical debt reasoning

At Alaya our monolith started cracking under load right as investors were pushing hard for new features, not a rewrite, and the team was split between a full microservices rewrite and just living with the pain. I ran a two-week spike comparing both paths with actual load tests instead of opinions, then brought the CTO and investors real numbers rather than a slide of principles. We landed on a strangler-fig approach, pull out only the two highest-traffic modules first and leave the rest of the monolith alone until it earned an extraction. The first module shipped in six weeks and cut latency on our busiest endpoints by around 40%, and the rest of the system stayed stable straight through the acquisition with no big-bang rewrite ever needed. The hard part wasn't the technical work, it was convincing a room that not rewriting everything was the disciplined choice. Next time I'd run the benchmarks even earlier, since the data ended the debate faster than any argument did.

---

## 4. Driving adoption without authority
**Likely question:** "How do you influence teams that don't report to you?" / customer or cross-team rollout

As a Senior Staff IC at Benevity with no direct reports, I wanted two teams to actually use AI-assisted development instead of treating it as a novelty, and I had no mandate to make that happen. I started small, three curious engineers, built a couple of internal demos that showed real time saved instead of a hypothetical, and ran informal lunch sessions with no pressure to attend. I put together reusable prompt templates and committed them to a shared repo so people could take what worked without asking me first. Within three months, about 70% of engineers across both teams were using it in their normal workflow, and I ended up the informal go-to on AI tooling for the org without ever being anyone's manager. It was slower than a top-down rollout would have been, but people who opt in on their own terms end up defending the thing internally, which a decree can't buy you. That pattern, earn adoption customer by customer instead of forcing it, is basically the job description here.

---

## 5. Learning a foreign system before touching it
**Likely question:** "Tell me about joining an unfamiliar codebase or environment" / customer environment onboarding

When Benevity acquired Alaya, I went from a small team on a Node and Postgres stack I'd built myself to a Java microservices org ten times the size, with different tooling, different review culture, everything. My instinct was to start proposing changes fast, and that instinct was wrong. I spent the first month just mapping the existing architecture and sitting in on platform and infra team meetings before I said much of anything, then built relationships with the people who'd actually have to live with whatever I proposed. Once I understood the shape of the system, I became the architecture liaison for the Europe-facing product surface and contributed to three major cross-team decisions that stuck. Moving that deliberately felt slow at the time, but it meant nothing I proposed later got treated as an outsider's opinion. In a forward-deployed role, that's basically the same discipline, understand a customer's actual environment before you start recommending changes to it.
