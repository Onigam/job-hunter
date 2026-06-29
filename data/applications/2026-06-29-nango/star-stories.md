# STAR Stories — Nango / Backend Engineer (Americas & Europe)

---

## 1. Building Alaya from Zero to Acquisition

*Best for: "Tell me about a time you built something from scratch" / "What does owning a platform end-to-end look like for you?"*

In 2016, I co-founded Alaya, a purpose and employee engagement platform. We had no product, no customers, and no engineers besides me. The business was already talking to enterprise prospects, which meant I was designing the architecture for a multi-tenant SaaS while simultaneously trying to ship something demo-ready in three months.

The choices I made early, picking Node.js and PostgreSQL with a modular REST API layer, had to survive four years of growth without a rewrite. I built the core platform alone, then hired and onboarded the first three engineers, set up CI/CD from the start, and introduced code review and architecture documentation as the team grew. We expanded iteratively: multi-tenancy, reporting pipelines, postal campaign tooling, integrations with HR systems.

By 2021, the platform was serving 50+ enterprise clients across Switzerland and France. Benevity, a Canadian unicorn valued at over $1B, acquired us that year. That acquisition was a direct signal that the technical bets had held up.

Looking back, I'd have invested in observability much earlier. We added proper APM late, which made debugging production issues harder than it needed to be. I also underestimated how expensive multi-tenancy is to retrofit; next time I'd design for it from day zero.

---

## 2. Making a Hard Architecture Decision Under Pressure

*Best for: "Tell me about a technical trade-off you navigated" / "How do you handle technical debt?"*

At Alaya, around 2019, the monolith was starting to show real strain. Traffic was growing, and two high-usage modules were causing cascading latency. The team was split between a full microservices rewrite and a more conservative modular approach. Investors wanted features, not rewrites. I had to make a defensible call without endless debate.

I ran a two-week spike comparing both paths with real load tests on a staging environment. Rather than presenting an opinion, I came to the CTO and investors with concrete numbers: latency profiles, estimated migration cost in engineering weeks, and failure scenarios for each approach. The case for a full rewrite didn't hold up under that scrutiny.

I proposed and led a "strangler fig" migration: extract the two highest-traffic modules first, keep the rest of the monolith intact, and define explicit criteria for when further extraction was justified. The first extracted module shipped in six weeks. Performance improved by roughly 40% on the busiest endpoints. The remaining monolith stayed stable through the acquisition two years later without a big-bang rewrite.

The hardest part wasn't the engineering; it was convincing people that "not rewriting everything" was the right call. Data cut the debate short. I'd do more early benchmarking next time to get to that data faster.

---

## 3. Designing an API Layer That Needed to Last

*Best for: "Tell me about a technical decision that had long-term consequences" / "How do you think about API design?" — highly relevant for Nango*

At Alaya, the first version of the API was internal: the frontend called it, and that was the only consumer. Then enterprise clients started asking to build their own integrations, reporting dashboards, and HR system sync workflows on top of our data. We had a decision to make before the first external integration was live: keep the internal API as-is, or design a proper external API layer.

I pushed for doing it right before we had external consumers, not after. That meant API versioning from day one, authentication scoped to external tokens separate from session auth, rate limiting, and documentation. It took an extra three weeks before we could hand credentials to the first integrating client.

What that investment bought us was that onboarding subsequent clients went from something exploratory and hand-held to something repeatable. The API design became a selling point in enterprise deals; prospects could look at the documentation and self-serve their integration scoping. It also meant that when Benevity's engineering team evaluated the platform during acquisition diligence, the API surface was clean and readable.

The reflection is that the pressure to ship fast almost won that argument. An undocumented internal API exposed externally would have been a technical liability within a year. The three-week investment paid for itself many times over.

---

## 4. Leading Without Formal Authority

*Best for: "How do you influence without authority?" / "What does Staff-level impact look like for you?"*

When I joined Benevity post-acquisition in 2021, I was a Senior Staff IC with no direct reports. I'd identified that AI-assisted development tooling could meaningfully improve the teams' velocity. The problem: I had no mandate to make it happen, and skepticism was high.

I started small. Three engineers who were already curious about GitHub Copilot agreed to try it with me. I built internal demos showing concrete time savings on tasks they actually did, not hypothetical ones. I ran informal lunch sessions, no slide decks, just screen sharing and showing what was possible. I also built a shared repo of prompt templates for common engineering tasks and committed it to the internal tooling repository so anyone could pick it up.

Within three months, roughly 70% of engineers across the two teams I worked with were using AI-assisted code review and generation in their daily workflow. I became the informal AI tooling lead across the org without ever asking for the title.

The lesson was that mandate-free adoption is slower but stickier. Engineers who chose it on their own terms became internal advocates. A top-down decree would have created compliance, not adoption.
