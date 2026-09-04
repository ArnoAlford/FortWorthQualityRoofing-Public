import type { Metadata } from "next";
export const metadata: Metadata = { title: "Residential example" };
const scenarios = [
  ["A new ceiling stain", "An illustrative visitor notices a stain after rain.", "The example routes them toward roof inspection and leak information. It does not diagnose a roof or prescribe a repair."],
  ["A roof showing its age", "An illustrative visitor is considering a replacement.", "The example helps them prepare questions about existing conditions, material choices, and the written scope."],
  ["Questions after a storm", "An illustrative visitor wants to understand visible damage.", "The example directs them toward storm-damage information and an assessment on the official site."],
];
export default function ResidentialExample() {
  return <main id="main" className="shell document">
    <p className="eyebrow">Residential example</p>
    <h1>From a roofing concern to a useful question.</h1>
    <p className="lead">These fictional scenarios demonstrate service navigation. They are not customer stories, inspection findings, or advice about a real property.</p>
    <section aria-label="Synthetic visitor scenarios" className="scenarios">
      {scenarios.map(([title, context, detail]) => <details key={title}><summary>{title}</summary><p>{context}</p><p>{detail}</p></details>)}
    </section>
    <section className="closing"><h2>Need help with an actual roof?</h2><p>Use the official Fort Worth Quality Roofing website to explore services or request an assessment.</p><a className="button" href="https://fortworthqualityroofing.com/residential-roofing-fort-worth-tx/">Visit residential roofing services ↗</a></section>
  </main>;
}
