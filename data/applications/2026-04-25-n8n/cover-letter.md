n8n's workflow engine has a constraint most SaaS automation tools never have to solve: it has to guarantee execution correctness on infrastructure it doesn't control. With over half a million developers self-hosting the product, the engine can't assume centralized state, reliable database performance, or predictable failure patterns. Idempotency, durable state, and recovery from partial failures have to be first principles, not retrofits. That's the engineering problem I want to work on.

At Alaya, I built the multi-tenant Node.js and TypeScript platform from zero and owned the architecture through five years of growth, reaching 50+ enterprise clients before Benevity, a $1B+ Canadian company, acquired us in 2021. One decision that held well under pressure was a modular extraction from a scaling monolith: rather than commit to a full rewrite during feature crunch, I ran a two-week spike, extracted the two highest-traffic modules first, and validated the pattern before touching the rest. Performance improved ~40% on those endpoints and the core platform held through acquisition-level due diligence without a big-bang rewrite. Post-acquisition at Benevity, I've contributed to cross-team architecture decisions on a larger distributed microservices platform, driven platform improvements, and adopted AI engineering practices across teams without formal authority.

I'm in Geneva, fully remote within European timezones. Happy to connect and see whether the background maps to what you're building.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
