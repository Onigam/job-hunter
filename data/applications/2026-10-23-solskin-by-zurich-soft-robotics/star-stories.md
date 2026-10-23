# STAR+R Stories: Solskin by Zurich Soft Robotics, Lead Software Engineer

The posting asks for a short document instead of a classic cover letter, covering five things: who you are, one accomplishment you're proud of, why you fit a startup, where software and hardware meet in your work, and a time you juggled many hats. The stories below map onto those questions, and onto what a CEO/CTO pair will probe in the interview.

---

## 1. The accomplishment I'm proudest of: Alaya, from blank page to acquisition

**Maps to:** "One accomplishment you're really proud of", "Why you fit a startup"

**Situation.** In 2016 I cofounded Alaya, a purpose and impact platform for employee engagement. There was no product, no customer and no code, just a business partner who was already talking to large companies.

**Task.** My job was to build the whole platform, on my own at first, while the business side was trying to sign its first enterprise clients. Whatever I built had to be demoable fast and still hold up once real companies were using it.

**Action.** I picked a stack I knew could carry us without heroics: Node.js, React and PostgreSQL. The first three months went into getting the core features to a state where we could put them in front of a client. After that the work came in layers as the customers asked for things, a multi-tenant architecture, an API layer, impact reporting, postal campaigns. Once we had traction I hired and onboarded the first three engineers and put the basics in place for them: CI/CD, a code review habit and written architecture docs, so the knowledge didn't live only in my head.

**Result.** Alaya went to production with 50+ enterprise clients across Switzerland and France, and in 2021 Benevity, a Canadian company valued at over $1B, acquired it.

**Reflection.** Two things I'd change. I added proper monitoring and APM far too late, and for a system running on physical buildings that lesson matters even more: you want to know something is wrong before the facility manager calls. I also underestimated how painful it is to retrofit multi-tenancy, so now I design for it from day one.

---

## 2. Juggling many hats in a small team

**Maps to:** "An example of juggling many hats", "Why you fit a startup"

**Situation.** For most of Alaya's life the engineering team was me plus a handful of people. In the same weeks I was the architect, the main developer, the person on call, the one hiring, and the one sitting in client meetings explaining what the product could and couldn't do.

**Task.** Keep the product moving and the platform up, while enterprise clients kept asking for new features and the business needed answers on what was feasible and by when.

**Action.** What worked was being blunt about priorities. Production problems came first, always, because a broken platform in front of an enterprise client cost more than any feature. After that I'd pick the one or two things the business really needed that quarter and say no, or "not yet", to the rest, with a reason. Features like impact reporting and the postal campaigns touched sales, operations and the clients' own teams, so I'd spend time with those people before writing code rather than after. And when I hired, I hired people who could own a whole area, which let me hand off chunks of the work instead of reviewing every line.

**Result.** We kept shipping through the growth to 50+ enterprise clients, the first three hires grew into owners of real parts of the system, and the platform was in good enough shape to come through an acquisition.

**Reflection.** I held on to too much for too long. The moment things got better was when I started handing over whole areas rather than tasks. In a team the size of yours I'd push for that earlier.

**Prep note.** Before the interview, add one concrete week from Alaya with a specific mix of incident, hire and client issue. A real example beats this summary every time.

---

## 3. A hard architecture call under delivery pressure

**Maps to:** "Architect and lead the future sensor-to-data platform", "Fast and pragmatic"

**Situation.** At Alaya the monolith was starting to crack under load. The team was split between a full microservices rewrite and keeping a modular monolith, and investors wanted new features, not a rewrite.

**Task.** Make a call we could defend, one that fixed the scaling problem without freezing the roadmap.

**Action.** I ran a two-week spike comparing both approaches, with prototype load tests, so the discussion was about numbers rather than taste. I took the trade-offs to the leadership and the investors and proposed a strangler-fig migration: pull out the two highest-traffic modules first and leave everything else in the monolith. We also agreed on clear criteria for when any further module would be worth extracting, which stopped the debate from coming back every sprint.

**Result.** The first extracted module shipped in six weeks and the busiest endpoints got about 40% faster. The rest of the monolith stayed stable all the way through the acquisition, and nobody had to stop feature work for a big-bang rewrite.

**Reflection.** The technical part was easy compared with convincing people that "don't rewrite everything" was the right answer. Data did that. I'd benchmark earlier next time to shorten the argument. For Solskin it's the same instinct I'd bring to the sensor-to-data platform: start from what's running on the buildings today, measure where it hurts, and move the painful parts first.

---

## 4. Leading people who didn't report to me

**Maps to:** "Leadership attitude", "Interest in growing as a leader", working as the link between software and hardware teams

**Situation.** At Benevity I was a Senior Staff IC with no direct reports. I wanted two engineering teams that didn't report to me to adopt AI-assisted development.

**Task.** Change how engineers worked day to day without being anyone's manager.

**Action.** I started with three engineers who were already curious and built small internal demos showing time saved on real work, not toy examples. Then I ran informal lunch-and-learn sessions with no mandate attached, put reusable prompt templates in a shared repo, and wrote up concrete wins as they happened, like a PR review cycle that went about two hours faster.

**Result.** Within three months around 70% of engineers on both teams were using AI-assisted code review and generation, and I became the informal AI tooling lead across the org.

**Reflection.** Going without a mandate was slower, but it stuck, because the people who adopted it on their own terms argued for it better than I could have. It's how I'd approach the software and hardware split at Solskin: earn the hardware team's trust by making their work easier before proposing to change how they do it.

---

## 5. Walking into a much bigger system after the acquisition

**Maps to:** "Keep the field-deployed system reliable and improve it", "Comfortable with plans changing"

**Situation.** After the acquisition in 2021 I joined Benevity as a Senior Staff Engineer. The organisation was about ten times the size of Alaya, with a different culture and a Java microservices codebase I didn't know.

**Task.** Get Alaya's capabilities into Benevity's platform while keeping up the product velocity we'd had as a startup.

**Action.** I spent the first month mapping the existing architecture before suggesting any change, and built relationships with the platform and infrastructure teams before pushing opinions. From there I became the cross-team architecture contact for the product surface facing Europe.

**Result.** The core Alaya features were migrated into Benevity's platform, and I contributed to three major cross-team architecture decisions.

**Reflection.** My first instinct was to fix things that weren't broken. Slowing down and listening made me far more useful. Inheriting a system that's already deployed on buildings is the same situation: it works, people rely on it, and the first job is understanding why it's built the way it is.

---

## Gaps to prepare for honestly

These are hard requirements in the posting where the profile has no matching story. Don't invent one; prepare an honest answer instead.

**C/C++ on microcontrollers (STM32), sensors and actuators.** The Sagemcom years were on telecom set-top boxes as a software architect, which is software running on consumer hardware, but not firmware. If there's any personal or side project with microcontrollers, write it up as a short story before the interview. If not, say so plainly and explain how you'd ramp up: pair with the hardware team, own the cloud and data side from week one, and learn the firmware side on the real codebase.

**Control and ML/RL with PyTorch on physical systems.** The AI experience is LLM integration, embeddings and multi-agent workflows, which is a different field. Be upfront about it. A credible angle is that the platform work (data pipelines from sensors, TimescaleDB, training and deployment infrastructure) is what makes the controller work possible, and that's where you'd add value fastest.

**Where software meets hardware.** This is one of the five points they explicitly ask for in the application document. Draft an answer from Sagemcom (constraints of shipping software onto devices you can't easily update) and be clear about its limits.

**Location.** The role is at least three days a week on-site in Zurich, sometimes at customer sites. From Geneva that's roughly 2h45 each way by train. Decide before the first call whether you'd relocate, commute weekly with a pied-à-terre, or not pursue it.
