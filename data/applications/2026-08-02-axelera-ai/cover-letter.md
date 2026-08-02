Axelera's move from single Metis accelerators to server and rack-level systems is the platform problem I find most interesting: the point where topology, host integration and memory organization choices made for one chip stop working once you're composing many of them into a system. I've spent recent years on the software side of that same problem, distributed platforms outgrowing their original assumptions, and the pattern rhymes more than people expect. Zurich is one of your offices, reachable from Geneva, which pulled me toward this one.

My track record is software platforms, not silicon, and I want to be upfront about that. At Alaya I designed the system from zero, the multi-tenant architecture, the API layer, and the calls about what stayed monolithic versus what got extracted as we scaled past fifty enterprise clients, decisions that held up well enough for Benevity to acquire the company in 2021. Inside Benevity's much larger Java microservices environment, I mapped the existing architecture before proposing changes, then became the person teams pulled in for cross-team platform decisions. Composing accelerators into one coherent system is a different domain, but defining boundaries before scale forces bad ones on you is the same discipline.

I'm in Geneva, so Zurich is a reasonable commute and relocation isn't needed; remote works too if that's how the team operates. Happy to walk through how I'd approach the first few months mapping Axelera's platform boundaries, or dig into specifics from the Alaya to Benevity transition.

Magino Marveaux-Cochet
magino.cochet@gmail.com
+41 77 439 22 27
