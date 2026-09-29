The line in your posting I kept coming back to was identical behavior whether an application runs serverless or as a deployed service. Customers only notice that promise when it breaks, usually during a rolling deploy with an agent twenty minutes into a task. Haystack already made pipelines portable as code. Making their execution just as predictable at enterprise scale is the harder, less visible problem, and it's the one I'd like to own.

Most of my career has been spent owning systems end to end. In 2016 I cofounded Alaya and built its platform from nothing, hired the first engineers, and lived with every decision through 50+ enterprise clients and the acquisition by Benevity in 2021. When our monolith began to strain, I pushed for extracting the two busiest modules instead of a rewrite; those endpoints got about 40% faster and nothing broke on the way to the deal. At Benevity my focus has been LLM integration and multi-agent workflows, plus getting two teams that didn't report to me onto AI-assisted development.

My Kubernetes work has sat on the product side of the cluster, not writing operators or running Knative in production, so that's where I'd ramp fastest. Happy to sketch how I'd approach checkpointing for long-running agents on a first call. I'm in Geneva, on CET, and glad to be in Berlin regularly.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
