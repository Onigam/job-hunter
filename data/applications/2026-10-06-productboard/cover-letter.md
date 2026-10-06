Productboard is moving new services to Kotlin while the Ruby core keeps running, and the posting asks for agent-native architecture standards on top of that. An agent dropped into a codebase mid-migration has the same problem a new hire does: it can't tell which module boundary is real and which is a historical accident. Writing those contracts down so that engineers and your Pydantic AI workflows can both rely on them is work I keep coming back to.

Most of that habit comes from Alaya, which I co-founded in 2016 and built from a blank page to 50+ enterprise clients and an acquisition by Benevity in 2021. When the monolith started cracking, we chose a strangler-fig extraction over a rewrite, and the busiest endpoints got roughly 40% faster. At Benevity, as Senior Staff in a Java microservices estate, I got about 70% of engineers on two teams using AI-assisted review and generation without any mandate. Outside work I build multi-agent workflows and embedding search in Python and TypeScript. Kotlin would be new to me in production, though after years of Java it's a short step.

I'm based in Geneva, which sits outside the EU, so let's confirm early that remote from Switzerland works for you. If it does, I'd like to spend a first call sketching how I'd structure the context layer for your code-review agent.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
