import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Fort Worth Quality Roofing | Public Showcase", template: "%s | FWQR Showcase" },
  description: "A static showcase of residential roofing service navigation and the Fort Worth Quality Roofing visual identity.",
  robots: { index: false, follow: false },
  icons: { icon: "/brand/fwqr-logo.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <a className="skip" href="#main">Skip to content</a>
    <div className="notice">Public showcase · For roofing services, visit the official website.</div>
    <header className="shell site-header">
      <a className="brand" href="/" aria-label="Fort Worth Quality Roofing showcase home">
        <Image src="/brand/fwqr-logo.png" width={64} height={64} alt="" priority />
        <span>Fort Worth<br /><strong>Quality Roofing</strong></span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/examples/residential/">Residential example</a>
        <a href="/design-system/">Design system</a>
        <a className="button" href="https://fortworthqualityroofing.com/">Visit live website ↗</a>
      </nav>
    </header>
    {children}
    <footer className="shell site-footer">
      <p>Fort Worth Quality Roofing<br /><span>Residential roofing · Fort Worth, Texas</span></p>
      <div><a href="https://fortworthqualityroofing.com/">Official website ↗</a><a href="https://github.com/ArnoAlford/FortWorthQualityRoofing-Public">View public repository ↗</a></div>
      <small>© 2026 Fort Worth Quality Roofing. All rights reserved.<br />Static reference only. No service requests are collected here.</small>
    </footer>
  </body></html>;
}
