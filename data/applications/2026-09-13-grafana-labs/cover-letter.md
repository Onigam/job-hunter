Grafana Cloud k6 sits at an interesting point: open source at the core, but the actual product is the operational layer on top, running distributed load tests across 15+ regions with virtual users in the hundreds of thousands. The posting says k6 is a product for engineers, built by people who care about tool quality. That's a harder bar than building for end users who'll tolerate rough edges, and it's close to how I've approached every internal platform I've built.

My background is mostly startup-to-scale platform work. At Alaya I was the founding engineer, architecting a multi-tenant PostgreSQL platform from a blank page to 50+ enterprise clients before Benevity, a Canadian unicorn, acquired us in 2021. We ran under real SLAs with a small team well before we had proper observability, so I've felt the cost of instrumenting late instead of early. After the acquisition I moved into a Senior Staff role at Benevity, drove cross-team architecture decisions, and pushed AI-assisted engineering practices across two teams that didn't report to me. That's close to the standard-setting-without-authority this role describes.

I'd like to talk through where the reliability framework for k6 stands today, SLIs, SLOs, error budgets, and where the actual gaps are versus the roadmap. I'm based in Geneva, comfortable with the EU/UK-heavy team overlap, and available to start within a few weeks.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
