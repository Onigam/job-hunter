# STAR+R Stories: Co-Founding CTO, pre-seed AI smart-home platform (via Clera)

The role is a co-founder seat, so expect founder-fit questions more than classic behavioural ones: "have you done 0 to 1 before", "how do you decide what to build", "how do you hire the first engineers", "how do you talk to investors", and a direct probe on IoT and hardware. The stories below cover those, plus a straight answer for the hardware gap.

---

## 1. Building Alaya from a blank page to acquisition

**Likely question:** "Tell me about something you built from zero." / "Why should we believe you can be our technical co-founder?"

**Situation.** In 2016 I cofounded Alaya, an employee purpose and impact platform. There was no product, no customers and no code, just a business cofounder with a few enterprise conversations going.

**Task.** My job was the entire technical side: pick the stack, build the first version on my own, then grow a team without slowing down while the business side signed its first enterprise clients.

**Action.** I went with a boring, pragmatic stack (Node.js, React, PostgreSQL) because I wanted something I could move fast in and that wouldn't need replacing at the first sign of traction. The core features were ready for a first demo in about three months. From there it grew in layers as customers asked for things: multi-tenancy, an API layer, impact reporting, even postal campaigns. When it was clear I couldn't carry it alone, I hired and onboarded the first three engineers and put the basics in place early, meaning CI/CD, code review as a habit and short architecture docs that people actually read.

**Result.** The platform reached 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian unicorn valued at over $1B, acquired Alaya. Their due diligence went through the codebase and architecture, so the acquisition was also a fairly concrete check on the technical choices.

**Reflection.** Two things I'd do differently. Observability came too late; we added proper APM only once problems were already hurting. And multi-tenancy was retrofitted, which cost more than designing for it on day one. For a smart-home product the equivalent is fleet observability and device identity. I'd build both before the tenth install, not after the hundredth.

---

## 2. Choosing a strangler fig over a rewrite, with investors watching

**Likely question:** "Tell me about a hard technical trade-off." / "How do you explain technical decisions to investors?"

**Situation.** At Alaya the monolith was starting to crack under load. Half the team wanted a full microservices rewrite, the other half wanted to leave it alone, and our investors wanted features, not a rewrite.

**Task.** I had to make a decision I could defend to both the engineers and the investors, one that kept us shipping while fixing what was actually breaking.

**Action.** Rather than argue from opinion, I ran a two-week spike and prototyped both directions with load tests. What the numbers showed was that most of the pain came from two high-traffic modules. So I proposed a strangler fig: pull those two out first, keep everything else in the monolith, and write down clear criteria for when any other module would earn its own extraction. When I presented it to the leadership team and investors I talked about latency, cost and delivery dates, not architecture diagrams.

**Result.** The first extracted module shipped in about six weeks, and response times on the busiest endpoints improved by roughly 40%. The rest of the monolith stayed stable right through the acquisition, and we never needed a big-bang rewrite.

**Reflection.** Getting people to accept "don't rewrite everything" was harder than the technical work. The data ended the debate, so next time I'd benchmark earlier and skip a couple of weeks of discussion. It's the same instinct I'd bring to an IoT platform: decide what has to run on the device and what can live in the cloud based on measurements, not taste.

---

## 3. Hiring and shaping the first engineering team

**Likely question:** "How would you build our engineering team from scratch?" / "Tell me about your first hires."

**Situation.** After the first version of Alaya was live, the product roadmap and the customer requests outgrew what one person could ship. There was no process, no team and a limited budget.

**Task.** I needed to hire the first engineers, get them productive fast and set up a way of working that would still hold at ten people, without dumping big-company process on a startup.

**Action.** I hired three engineers, one at a time, and looked for people who were comfortable owning something end to end, not people who wanted a tidy ticket queue. Onboarding meant pairing on real features from week one. Around them I added only what we needed: CI/CD so nobody was afraid to deploy, code review as a teaching tool rather than a gate, and lightweight architecture notes so decisions didn't live only in my head. I kept writing production code the whole time, which helped; it's hard to set standards you don't follow yourself.

**Result.** The team kept up with a growing enterprise client base (50+ by the time of the acquisition), and the practices we'd set up were solid enough that integration into Benevity's much bigger engineering organisation went through without a rewrite of how we worked.

**Reflection.** I'd write down the hiring bar earlier. Early on it was mostly gut feel, and I got lucky more than once. For this role I'd make the first hire an embedded or hardware-leaning engineer to cover my weakest side, and I'd say that openly to the founders.

---

## 4. Getting two teams to adopt AI-assisted engineering without authority

**Likely question:** "How do you bring AI into a product or team in a way that sticks?" / "How do you lead people who don't report to you?"

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams to start using AI-assisted development, and neither reported to me.

**Task.** Change how engineers worked day to day, without a mandate and without making it feel like a top-down initiative.

**Action.** I started with the three engineers who were already curious and built small internal demos showing real time saved on real work. Then came informal lunch-and-learns with no slides and no obligation, just live demos on our own codebase. Along the way I collected the prompt patterns that worked, put them in a shared repo as templates, and wrote up concrete wins, like the time an AI-assisted review saved about two hours on a single PR cycle.

**Result.** Within about three months, roughly 70% of engineers across both teams were using AI-assisted review and generation regularly, and I ended up as the informal AI tooling lead for the org.

**Reflection.** It was slower than a mandate, but it stuck because the people who adopted it on their own became the advocates. The lesson for a smart-home product is similar: AI features earn trust by being demonstrably useful in small, visible ways, like a heating schedule that learns and explains itself, long before anyone trusts a model to run the whole house.

---

## 5. Post-acquisition: learning a system ten times bigger before changing it

**Likely question:** "Tell me about a time you were wrong." / "How do you work with partners and teams bigger than you?"

**Situation.** After the acquisition in 2021 I joined Benevity as Senior Staff Engineer. The engineering org was about ten times Alaya's size, the codebase was Java microservices, and the culture and processes were completely different.

**Task.** Integrate Alaya's capabilities into Benevity's platform while keeping the product moving.

**Action.** My first instinct was to fix things quickly, and I pushed a few opinions too early on things that weren't actually broken. That didn't land well. So I changed approach: I spent the next weeks mapping the existing architecture properly and building relationships with the platform and infra teams before proposing anything. Over time I became the cross-team architecture contact for the Europe-facing product surface.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions along the way.

**Reflection.** Listening first made me far more effective than being right early. For a co-founder role that matters on day one, since I'd be joining founders who already have context I don't, and partners (installers, hardware vendors, energy providers) whose constraints I'd need to understand before designing around them.

---

## Straight answer for the hardware/IoT question

They will ask this, and it's the biggest gap against the posting. Don't oversell it.

> "My hardware-adjacent experience is three years at Sagemcom as a software architect on telecom set-top boxes, so I've worked on software that ships inside a device in someone's home, with real update and support constraints. I haven't shipped Raspberry Pi gateways or written production firmware. What I'd bring is the cloud side, the AI side and the 0-to-1 platform side, which I've done end to end. I'd make an embedded-leaning engineer one of the first hires, and I'd spend my first weeks on the gateway code and in a few real installs until I know it properly."
