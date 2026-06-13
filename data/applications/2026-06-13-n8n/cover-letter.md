What's interesting about n8n's AI architecture is that it's not one model doing one thing: it's a graph of nodes, some deterministic, some probabilistic, coordinated by state that the user defined in a visual editor. Getting evaluation right across that kind of pipeline is genuinely hard, and it's the kind of problem that requires engineers who've thought seriously about how LLM outputs fail at the component level, not just the end-to-end level. The AI Agent node, through successive memory and tool sub-node releases, has design decisions that are sharper than most of what's shipped under the "agents" banner this year.

The relevant proof points: I built and shipped the full Alaya platform in TypeScript and Node.js from a blank page, scaling to 50+ enterprise clients through multi-tenant architecture and the first engineering hires, until Benevity acquired us in 2021. Since then at Benevity, I've built prompt templates and evaluation benchmarks for LLM features, driven AI tooling adoption to roughly 70% coverage across two teams in three months, and contributed to cross-team architecture decisions on production systems. I've worked with vector stores, RAG pipelines, and agent orchestration in real systems, not proofs of concept.

Geneva-based, remote-first, available now. Happy to connect this week to talk through what the AI team is working on next.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
