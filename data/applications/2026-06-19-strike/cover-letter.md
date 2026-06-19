Strike's decision to draw a hard boundary between read-only advisory access and autonomous action-taking in production, treating it as a first-class design constraint from day one, is the kind of thinking I don't see often enough. Most companies building AI tooling treat blast radius as an afterthought. Framing agent access as a zero-trust problem from the start, for a platform handling real money in 100+ countries, tells me this is a serious engineering environment.

At Benevity, I've been building a version of what you're describing. Over the past two years I've shipped internal tooling connecting LLMs to engineering workflows: semantic knowledge bases, code review pipelines, IDE agents built on top of Claude. Adoption spread across two teams without any top-down mandate, just working demonstrations and documented wins. Before that, I co-founded Alaya and built the entire product from a blank page through acquisition by Benevity, a $1B+ Canadian unicorn. That founding experience gives me a direct feel for production risk. When you're the one who shipped it, you think differently about what the agent is allowed to do.

I'd want to talk through your current thinking on the tiered autonomy model and where the security-versus-capability trade-off feels most live. Happy to connect.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
