/*
THESIS: A compact, residential-only brand showcase; not a production service funnel.
OWN-WORLD: Established navy, restrained orange, generous white space, rounded controls.
STORY: Recognize the brand, explore a service-navigation sample, visit the official site.
FIRST VIEWPORT: Large decision-led headline beside the approved logo, with a visible live-site action.
FORM: User-pinned reference-repository format; no new visual identity or concept tournament.
*/
import Image from "next/image";

const services = [
  ["Roof inspection", "Start with the condition of the roof, not a guess about the work."],
  ["Roof repair", "Explore service information for leaks, missing shingles, and local damage."],
  ["Roof replacement", "Understand the questions that matter when planning a new roof."],
  ["Storm damage", "Find a clear starting point after hail or high wind."],
];

export default function Home() {
  return <main id="main">
    <section className="shell hero">
      <div className="hero-copy">
        <p className="eyebrow">Fort Worth, Texas</p>
        <h1>A clearer next step for your roof.</h1>
        <p className="lead">A leak, storm damage, or an aging roof can leave you unsure where to start. Explore Fort Worth Quality Roofing for residential service information and roof assessment requests.</p>
        <a className="button" href="https://fortworthqualityroofing.com/">Explore the official website ↗</a>
        <p className="caption">This is a public design showcase, not a booking website.</p>
      </div>
      <figure className="brand-panel">
        <Image src="/brand/fwqr-logo.png" width={520} height={520} alt="Fort Worth Quality Roofing shield logo" priority />
        <figcaption>Local identity. A straightforward service experience.</figcaption>
      </figure>
    </section>
    <section className="service-section">
      <div className="shell split">
        <div><h2>Start with what you see.</h2><p>The live website organizes residential roofing information around the concern that brought you there.</p><a className="text-link" href="/examples/residential/">Explore the residential example →</a></div>
        <ul className="service-list">{services.map(([title, detail]) => <li key={title}><h3>{title}</h3><p>{detail}</p></li>)}</ul>
      </div>
    </section>
    <section className="shell scope-section">
      <div><h2>A small public window into the work.</h2><p>This repository demonstrates responsive layouts, accessible navigation, and the brand’s navy-and-orange design language. The example content is synthetic.</p></div>
      <div><h3>Presentation only</h3><p>No lead capture, customer records, production integrations, or operational source. Service requests belong on the official website.</p><a className="text-link" href="/design-system/">View the design foundations →</a></div>
    </section>
  </main>;
}
