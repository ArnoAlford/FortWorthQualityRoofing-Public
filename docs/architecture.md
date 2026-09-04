# Architecture

Three statically exported Next.js App Router pages share a presentation-only layout. Content is authored in the public repository; the production app is not a dependency.

No API routes, server actions, remote fetches, forms, trackers, or environment-dependent features are present. Links to the official website are ordinary user-initiated navigation. Fonts are system-local and media is local.

The npm lockfile pins dependency resolution. CI checks, but does not deploy. `out/`, dependencies, and local build caches are excluded from Git.

Internal navigation uses ordinary anchors so the export works on a plain static server without special client-router payload rewrites.
