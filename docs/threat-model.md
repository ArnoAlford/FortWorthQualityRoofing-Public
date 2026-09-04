# Publication threat model

Primary risks: accidental copying of production files/history, sensitive strings embedded in source, media metadata, malicious contributions, and dependency changes.

Controls: fresh Git initialization; exact file allowlist; text pattern scans on working tree and index; independently scanned full history; checksummed, metadata-stripped assets; no backend integrations; least-privilege CI; dependency audit and update proposals.

Limitations: pattern scanning cannot identify every secret. Asset hashes prove integrity, not rights. Review new data manually, and keep sensitive vulnerability reports private.
