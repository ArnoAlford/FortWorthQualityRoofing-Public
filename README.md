<p align="center"><a href="https://fortworthqualityroofing.com/"><img src="public/brand/fwqr-logo.png" alt="Fort Worth Quality Roofing" width="210"></a></p>

# A clearer next step for your roof.

Fort Worth Quality Roofing helps Fort Worth homeowners explore roof inspection, repair, replacement, and storm-damage services.

**[Explore the official website →](https://fortworthqualityroofing.com/)**

## A focused public showcase

This is a small, static reference implementation inspired by the public-repository treatment used for [ArcVelocity](https://github.com/ArnoAlford/ArcVelocity-Page-Demo-Public) and [HailKing](https://github.com/ArnoAlford/HailKing-Public).

It includes a branded homepage, a synthetic residential example, and a design-system reference. It is **not the production website source**, does not receive service requests, and has no production integrations.

[![Desktop preview of this public showcase](public/screenshots/desktop.png)](https://fortworthqualityroofing.com/)

<details><summary>Mobile preview</summary>
<img src="public/screenshots/mobile.png" alt="Mobile preview of this public showcase" width="320">
</details>

## Explore
- `/` — promotional overview and link to the official website
- `/examples/residential/` — explicitly fictional service-navigation scenarios
- `/design-system/` — public color, typography, and interaction foundations

No customer reviews, property imagery, credentials, environment files, analytics, lead forms, or production history are included. See [PUBLIC-SCOPE.md](PUBLIC-SCOPE.md).

## Local development

Use Node.js 24 LTS and npm. No environment setup or credentials are required.

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run safety
npm run safety -- --staged
npm run lint
npm run build
npm audit --audit-level=high
```

The index check expects the intended files to have been staged with Git. The build creates a static export in `out/`. Build output is not committed. This repository has no deployment workflow, production domain binding, or automated production sync.

Media is integrity-locked in [the asset manifest](public/asset-manifest.json). The showcase is marked noindex to distinguish it from the official site.

## Security and ownership

Report sensitive findings privately using [SECURITY.md](SECURITY.md), not public issues. Public visibility does not grant a reuse license: see [LICENSE.md](LICENSE.md) and [TRADEMARKS.md](TRADEMARKS.md).

Built by [ArcVelocity](https://arcvelocity.com/).
