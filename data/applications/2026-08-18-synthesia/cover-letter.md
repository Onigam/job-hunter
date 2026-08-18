Nvidia's venture arm backing your Series E tells me the GPU story at Synthesia isn't a side detail, it's the constraint the ML Platform team is built around. A platform meant to let researchers train, serve, and deploy generative models reliably, built so both engineers and autonomous agents can operate it, is a different problem than most "ML infra" postings describe. That's the part worth working on.

Five years as the founding engineer at Alaya taught me what that constraint really costs: I chose a stack that could scale without over-engineering, then lived with every consequence of that choice as the platform grew to 50-plus enterprise clients before Benevity acquired the company in 2021. The harder call came later. When our monolith started cracking under load and investors wanted features, not a rewrite, I ran a two-week load-test spike, then led a strangler-fig migration that pulled the two highest-traffic modules out first. Latency on those endpoints dropped about 40%, and the rest of the system held through the acquisition with no big-bang rewrite. Since joining Benevity I've stayed close to GPU-adjacent and AI-agent tooling, pushing LLM-assisted workflows into production across teams I don't manage.

I'm Geneva-based, comfortable remote or with time in your Zurich office, and free to start a conversation this week if the GPU scheduling and agent-operable tooling problems are as unsolved internally as the posting suggests.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
