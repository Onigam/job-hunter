What stands out about naiian isn't the AI angle. It's the premise that auditability and human approval on sensitive tasks are foundational, not optional layers you add after the first enterprise client complains. That constraint changes how you design everything: the schema, the API contracts, the async processing layer, the audit trail. You need someone who's built that kind of system before and understands that retrofitting it under load costs far more than getting it right from day one.

The closest parallel is Alaya, the company I co-founded in 2016. Starting from nothing, I designed the multi-tenant architecture, chose the stack (Node.js, PostgreSQL), and built the core platform alone before bringing in engineers. When we hit scaling pressure, I ran a technical spike, settled on a strangler fig extraction rather than a full rewrite, and shipped the first extracted module in about six weeks at roughly 40% latency improvement on the busiest endpoints. The platform reached 50+ enterprise clients before Benevity acquired us in 2021. My Python background and direct experience building async job systems (retries, idempotency, backpressure) match the technical requirements you've described.

I'm based in Geneva, so the in-office Madrid requirement means a relocation conversation. I'm open to it for the right fit, and I'm available to move fast on next steps. Happy to connect at the details below.

Magino Marveaux-Cochet
[email]
[phone]
