# STAR Stories: Crossref, Head of Infrastructure Services

Picked for this role because it leans on team leadership, incident response, roadmap ownership, and influence without full authority. Five stories below.

---

## 1. Building Alaya's infrastructure from a blank page

In 2016 I co-founded Alaya, a purpose and impact platform for employee engagement, and there was nothing to start from: no servers, no pipeline, no customers yet. I had to architect and stand up the whole platform myself before we could even get a demo in front of anyone. I picked a stack we could run without a dedicated ops person early on, Node.js and PostgreSQL, and got the core features live within about three months so we could start showing it to prospective clients. From there it kept growing: multi-tenant architecture, an API layer, the beginnings of proper CI/CD, and eventually a small team I hired and onboarded myself, three engineers who needed someone to set code review norms and write the first architecture docs. By the time Benevity acquired us we were running enterprise infrastructure for over 50 clients across Switzerland and France, on a system I'd built alone at the start. Looking back, I'd invest in observability much earlier; we didn't have real APM until things were already big enough that debugging without it hurt. That's part of why "observable" jumped out at me in this role's description, it's the piece I learned to value the hard way.

---

## 2. Mapping someone else's system before touching it

When Benevity acquired Alaya in 2021, I went from being the person who knew every corner of our infrastructure to joining a team ten times the size, running Java microservices I hadn't designed and didn't fully understand yet. My instinct was to start proposing changes right away, the same way I would have at Alaya, but I caught myself and spent the first month just mapping how the existing architecture actually worked before opening my mouth about what should change. That patience paid off: I built real relationships with the platform and infra teams first, and once I did start contributing technical opinions, people actually listened, because I'd shown I understood the system rather than just critiquing it from outside. I ended up becoming a cross-team architecture liaison for the Europe-facing product surface and contributed to three major architecture decisions over the following year. If I'm honest, I moved too fast in the first couple of weeks trying to fix things that weren't broken, and slowing down is what actually made me effective. For a role like this one, walking into an existing infrastructure team and roadmap, that's probably the most directly relevant lesson I have.

---

## 3. A strangler-fig migration instead of a rewrite

At Alaya, our monolith started showing real scaling cracks right as investors were pushing hard for new features, not a rewrite. The team was split between doing a full microservices rewrite and something more incremental, and I needed to make a call that wouldn't blow up either the timeline or the system. I ran a two-week spike comparing both approaches with actual load tests rather than opinions, then presented the trade-offs to the CTO and investors with real numbers. Instead of the rewrite, I proposed extracting just the two highest-traffic modules first and leaving the rest of the monolith alone, with clear criteria for when we'd extract more later. We shipped the first extracted module in six weeks, and performance improved by around 40% on the busiest endpoints. The rest of the monolith stayed stable straight through the acquisition, so the big-bang rewrite never had to happen. The hardest part honestly wasn't the technical work, it was convincing people that not rewriting everything was the responsible choice. With more upfront benchmarking I could have cut that debate shorter, and that's the main thing I'd change.

---

## 4. Driving adoption of AI-assisted engineering without a mandate

At Benevity I was a senior staff IC with no direct reports, but I wanted to get two teams that didn't report to me to actually adopt AI-assisted development practices, and a top-down mandate wasn't an option I had access to anyway. I started small, with three engineers who were already curious, and built internal demos that showed concrete time saved rather than just talking about the potential. From there I ran informal lunch-and-learn sessions, no requirement to attend, just a demo and free food, and put together reusable prompt templates in a shared repo anyone could pull from. Within about three months, roughly 70% of engineers across both teams were using AI-assisted review and generation in their regular workflow, and I'd become the informal go-to person for that kind of tooling across the org. It was slower than a mandate would have been, but it stuck, because people who opted in on their own terms ended up advocating for it to their peers in a way I couldn't have engineered from the top down. For a role that involves mentoring a team and influencing a broader Tech Leadership Group, that experience of earning buy-in rather than assuming it is probably my strongest example.

---

## 5. Owning an incident with no one else to escalate to

Early at Alaya, before we had any kind of formal on-call rotation, a production outage hit right in the middle of an enterprise client's reporting cycle, and I was the only engineer who could actually debug it. I had to triage under real pressure, figure out that a database connection pool was exhausting under a traffic pattern we hadn't tested for, and ship a fix while also managing the client conversation myself since we didn't have anyone else to do it. We got the client's reporting back online within a few hours and I followed up afterward with a short writeup of what happened and what we'd change, which became the seed of what eventually turned into an actual postmortem habit as the team grew. What I'd do differently is exactly what I mentioned in the first story: build in the monitoring that would have caught the connection pool issue before a client noticed it, rather than after. That gap between reacting well to an incident and preventing the next one is something I think about a lot now, and it's a big part of why postmortem culture and disaster recovery planning matter to me beyond just being a checklist item.
