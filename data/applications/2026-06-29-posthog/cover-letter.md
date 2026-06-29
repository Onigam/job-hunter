PostHog's ingestion pipeline already does something interesting: using Rust for the capture service specifically to maximize reliability before anything hits Kafka, then handing off to Node.js for the complex person-processing and transformation work. The separation of concerns there is deliberate, and the fact that you're now pulling person processing into PersonHog as a proper service with defined SLAs signals that the team is at the inflection point where informal guarantees don't hold anymore. That's the kind of infrastructure work I find most interesting.

My background is building systems under that same pressure. At Alaya, I architected the full platform from zero while the company was signing enterprise clients, and the multi-tenant decisions I made in those early months had to hold up through four years of growth and 50+ enterprise clients across Switzerland and France. The hardest part wasn't scaling the happy path; it was the edge cases in distributed state: out-of-order events, person identity merges, and writes that needed to stay consistent across services. Those aren't hypothetical problems for me. After Benevity acquired us in 2021, I moved into cross-team architecture work on a 10x-larger platform, which added the coordination layer that startup engineering often skips.

I'm based in Geneva and have been working in European timezones with distributed teams since 2021. The timezone fit is real. Happy to talk through the Ingestion team's roadmap if it's useful.

Magino Marveaux-Cochet
magino.marveaux-cochet@gmail.com
+41 79 000 00 00
