---
public: "true"
slug: "federated-identity"
tags: [Decentralized]
title: "Federated Identity"
---
# Federated Identity

> Referenced by: [Commune](/garden/commune/index.md), [Fedi v2](/garden/fedi-v2/index.md), [Weird](/garden/weird/index.md)

> Tags: [Decentralized](/garden/decentralized/index.md)

Allow for validating one's identity without relying on a specific centralized server

Implementations:
- Private and public keypairs
- [IndieAuth](https://indieweb.org/IndieAuth) by [The IndieWeb](/garden/the-small-web/index.md)
	- Supported by [Rauthy](https://github.com/sebadob/rauthy) which the [Commune](/garden/commune/index.md) community endorses

Self hosted identity providers are NOT enough to be considered federated identity
- OIDC and OAuth require the service owner to have pre-configured with explicitly allowed identity providers

[Incremental Social](/garden/incremental-social/index.md) uses Zitadel which does NOT support IndieAuth and probably won't