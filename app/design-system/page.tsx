import type { Metadata } from "next";
export const metadata: Metadata = { title: "Design system" };
const colors = [["Navy", "#1c2a31"], ["Orange", "#a94b25"], ["Soft orange", "#edaa87"], ["White", "#ffffff"]];
export default function DesignSystem() {
  return <main id="main" className="shell document">
    <p className="eyebrow">Design foundations</p>
    <h1>Clear hierarchy. Recognizable identity.</h1>
    <p className="lead">Navy provides the structure. Orange identifies an action. White gives the content room to breathe.</p>
    <section className="palette" aria-label="Color palette">{colors.map(([name, hex]) => <div key={name}><div className="swatch" style={{ background: hex }} /><h2>{name}</h2><code>{hex}</code></div>)}</section>
    <section className="type-specimen"><h2>Readable at every size.</h2><p>The showcase uses a local system font stack: no external font request and no font credentials. Large headings identify the subject; comfortable body text explains the next step.</p></section>
    <section className="closing"><h2>Actions say where they go.</h2><p>The primary action opens the official website. This showcase has no lead form or inactive submit button.</p><a className="button" href="https://fortworthqualityroofing.com/">Visit the official website ↗</a></section>
  </main>;
}
