# PS Awake

Awake PlanetScale database using CloudFlare Worker.

### Prerequisite

You will need to create CloudFlare `kv:namespace` and `kv:key`(s) for `endpoint` and `token` _(in my case)_
As your case may be very different, feel free to tweak it as needed.

### Why

I needed this for personal use, but I'm sharing it publicly so that anyone can use it. Tweak it as needed.
In my case, it will hit POST & DELETE request once in a 15 days, keeping my PlanetScale database awake at all times.
