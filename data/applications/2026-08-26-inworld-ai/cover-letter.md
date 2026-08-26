Your listing says engineering isn't finished until it's shipped and stable, that taking a model from research to a reliably-serving production system is the actual job. That line is why I'm writing. I've spent 17 years on that exact seam between "it works on my machine" and "it holds up under real load," most recently keeping a platform stable through a post-acquisition migration while a much bigger org depended on it not breaking.

I should be direct about where I sit. My background is platform and distributed systems, not GPU kernel work; I haven't hand-tuned vLLM or written CUDA. What I have done is make hard latency calls under pressure and defend them with data. At Alaya, when a monolith started cracking under load and investors wanted features over a rewrite, I ran a two-week spike, then led a strangler-fig extraction of the two highest-traffic modules. Latency on those endpoints dropped by around 40%, and the rest held through the acquisition that followed. I'd rather flag the CUDA gap now than have it surface in a systems design round.

Based in Geneva, so timezone overlap with your team works either way. If this role needs the inference-kernel specialist first, I understand. If there's room for someone who owns the platform and orchestration layer around the serving stack, I'd like a conversation.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
