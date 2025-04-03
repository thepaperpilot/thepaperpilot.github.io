---
title: "Federated Identity"
wordCount: 68
published:
  hash: abc
  timestamp: 1000
tags:
  Decentralized: /garden/decentralized
referencedBy:
  Commune: /garden/commune
  Fedi v2: /garden/fedi-v2
  Weird: /garden/weird
---

Allow for validating one's identity without relying on a specific centralized server

Implementations:
- Private and public keypairs
- [IndieAuth](https://indieweb.org/IndieAuth) by [The IndieWeb](/garden/the-small-web)
	- Supported by [Rauthy](https://github.com/sebadob/rauthy) which the [Commune](/garden/commune) community endorses

Self hosted identity providers are NOT enough to be considered federated identity
- OIDC and OAuth require the service owner to have pre-configured with explicitly allowed identity providers

[Incremental Social](/garden/incremental-social) uses Zitadel which does NOT support IndieAuth and probably won't