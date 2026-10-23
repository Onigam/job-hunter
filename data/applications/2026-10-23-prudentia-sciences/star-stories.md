# STAR+R Stories: Prudentia Sciences, Forward Deployed Engineer (Basel)

The posting asks for three things: shipping code that clients depend on, judgment about whether AI output is good enough, and turning field one-offs into product. These stories cover those, plus the "ambiguity and ownership" line. Each one is sourced from the story bank; don't add details in the interview that aren't true.

---

## 1. Building for enterprise clients from a blank page (Alaya)

**Likely questions:** "Tell me about a time clients depended on code you shipped." / "How do you handle ambiguity?" / "Walk me through taking something from discovery to go-live."

In 2016 I cofounded Alaya, an employee purpose and engagement platform. There was no product, no customers and no team, only a business side that was already talking to its first enterprise prospects. My job was to build the whole platform, alone at first, fast enough that the sales conversations had something real to show.

I picked a stack I knew would carry us without much ceremony, Node.js, React and PostgreSQL, and got the core features to a demo in about three months. After that the product grew out of what clients actually asked for: a multi-tenant architecture, an API layer, impact reporting and even postal campaigns, which nobody had on the roadmap until a client needed them. As the client list grew I hired and onboarded the first three engineers and put CI/CD, code review and architecture docs in place so the platform didn't depend on my memory.

We reached 50+ enterprise clients across Switzerland and France, and Benevity, a Canadian unicorn valued above $1B, acquired Alaya in 2021. That acquisition was the clearest outside check on the technical decisions we'd made early.

Looking back, two things cost us. We added proper APM late, so for a while we learned about problems from clients before our dashboards told us. And we retrofitted multi-tenancy instead of designing for it on day one, which was painful. For a forward-deployed role that's the lesson I'd bring: tenant isolation and observability are part of the first deployment, not something you add on the third.

---

## 2. Integrating into someone else's systems (Benevity, post-acquisition)

**Likely questions:** "Tell me about integrating with a system you didn't build." / "How do you earn trust with a new stakeholder group?" / "Describe working across engineering and other teams."

After the acquisition I joined Benevity as a Senior Staff Engineer. The org was roughly ten times the size of Alaya, the codebase was Java and microservices, and the processes were nothing like ours. We had to bring Alaya's capabilities into Benevity's platform without losing the product velocity we'd built as a small team.

My first instinct was to start fixing things, and in the first weeks I pushed a few changes that weren't needed. So I changed approach. I spent most of a month mapping the existing architecture before proposing anything, and I built relationships with the platform and infra teams before I pushed technical opinions on them. That groundwork made me the cross-team architecture contact for the Europe-facing product surface.

We migrated the core Alaya features into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

It's the closest thing I have to walking into a client's environment: their systems, their constraints, their security rules. What I learned is that listening first is faster in the end. People will open doors for you once they believe you understand why things are the way they are.

---

## 3. Getting engineers to trust AI tooling, without authority (Benevity)

**Likely questions:** "How do you decide whether LLM output is good enough?" / "Tell me about influencing without authority." / "How would you help build the forward-deployed playbook?"

At Benevity I was an IC with no reports, and I wanted two teams that didn't report to me to work AI-assisted code review and generation into how they worked. A mandate wasn't an option, and engineers are rightly suspicious of tools that produce plausible-looking output.

So I started small with three engineers who were already curious. I built demos on our own code showing where the tooling actually saved time and where it didn't, ran informal lunch-and-learn sessions, and committed reusable prompt templates to a shared repo so nobody had to start from scratch. Whenever something worked I wrote it down with the concrete gain, for example a PR review cycle that came in about two hours shorter.

Within three months around 70% of engineers on both teams were using AI-assisted review and generation, and I'd become the informal AI tooling lead across the org.

The lesson that maps to Prudentia is about trust. People adopted the tools because they'd seen the failure modes as well as the wins, and they could judge for themselves when the output was good enough. Diligence teams will be the same, only stricter, so I'd treat evals and honest limits as part of the deliverable rather than an internal detail. The templates repo was also a small version of a playbook: what got repeated, got written down.

---

## 4. Deciding what to build properly and what to leave alone (Alaya)

**Likely questions:** "When do you productize a one-off versus keep it configurable?" / "Tell me about a technical trade-off under commercial pressure."

At Alaya our monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half a modular monolith, and investors wanted new features, not a rewrite. I needed a decision I could defend that didn't stall delivery.

Rather than argue it out, I ran a two-week spike with prototype load tests for both approaches and took the results to the CTO and the investors as numbers. My proposal was a strangler-fig migration: extract the two highest-traffic modules, leave everything else in the monolith, and agree written criteria for when any further module would earn its own extraction.

The first extracted module shipped in six weeks, the busiest endpoints got roughly 40% faster, and the rest of the monolith stayed stable all the way through the acquisition. We never needed a big-bang rewrite.

The written criteria were what made it work, because they turned every later "should we extract this?" into a short conversation. It's the same kind of call the posting describes when it says productize, keep configurable, or decline. Next time I'd benchmark earlier and cut the debate shorter.

---

## Gaps to be ready for

- **Life sciences and deal data.** No direct experience. Say so plainly, then point to Alaya: learning a client's domain quickly was the job. Read up on clinical trial registries, the typical biotech data room layout and how a licensing deal gets valued (rNPV) before the interview.
- **Formal consulting or solutions title.** Not on the CV. The answer is Alaya: as cofounder and Head of Technologies, Magino built and owned the platform 50+ enterprise clients ran on. Be concrete about which client-facing work (onboarding, integrations, escalations) was done personally, and don't stretch it.
- **SSO/SAML, security questionnaires.** Be specific and truthful about what was done hands-on at Alaya or Benevity versus what was owned by other teams.
