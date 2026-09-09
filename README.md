# Pranto's GRC — ISO/IEC 42001:2023 AI Management Register

A single-page, dependency-light dashboard for tracking an ISO/IEC 42001:2023
AI Management System (AIMS) gap assessment: import a workbook, and every
chart, table, and report rebuilds instantly, entirely in the browser.

Built as a portfolio piece with **plain HTML, CSS, and JavaScript** — no build
step, no framework, no backend.

Click to visit the live demo : https://mizanpranto.github.io/ISO-IEC-42001-2023-AI-management-compliance-register/

You are welcome to make any contribute. 

![Pranto Shield dashboard](assets/screenshot-dashboard.png)
![Remediation roadmap](assets/screenshot-roadmap.png)
![History & trend](assets/screenshot-history.png)

## Why ISO/IEC 42001

ISO/IEC 42001:2023 is the first certifiable management-system standard for
AI governance — the "ISO 27001 of AI." It shares the same Harmonized
Structure (clauses 4–10) as ISO 27001, but adds an AI-specific requirement
with no equivalent in information-security standards: the **AI system
impact assessment** (established at clause 6.1.4, performed at clause 8.4),
which asks not just "what could go wrong for us" but "who could be harmed,
and how." Annex A swaps ISO 27001's 93 security controls for 38 AI-specific
controls across 9 objectives (A.2–A.10): policy, internal organisation,
resources, impact assessment, the AI life cycle, data, information for
interested parties, use of AI systems, and third-party relationships.

## Features

- **Compliance register (dashboard)** — KPI summary, a 9-point Annex A
  control-objective radar, a status donut, weighted-compliance bars per
  clause and objective, a full compliance matrix, and a "needs attention"
  table — all rendered with hand-rolled SVG, no charting library.
- **Import workbook** — drag-and-drop or browse for a `.xlsx` / `.xls` /
  `.csv` gap-assessment file. Headers are matched flexibly against a
  documented expected structure, with a parse log that flags blank
  references, duplicates, and unrecognised compliance values.
- **Clauses 4–10 / Annex A objectives** — the real ISO/IEC 42001:2023
  structure (32 clause sub-requirements including 6.1.4 and 8.4, plus all 38
  Annex A controls across A.2–A.10), each showing requirement, status,
  owner, priority, and notes.
- **Control explorer** — search/filter every clause and control, with CSV
  export.
- **Gap analysis** — transparent, rule-based findings (weakest sections,
  unassessed controls, high-priority gaps). No external AI/LLM call is made
  — the irony of an AI-governance tool calling an opaque AI model to grade
  itself was not lost on us.
- **Remediation roadmap** — every open gap becomes a Kanban card (Backlog /
  In Progress / Resolved), scored by likelihood × impact into a Low–Critical
  risk rating, with an assignable due date. Persisted in `localStorage`,
  independent of whatever workbook is currently loaded.
- **History & trend** — save timestamped snapshots of the assessment and
  watch overall compliance move over time on a line chart, with a
  point-to-point delta table.
- **Backup & restore** — export the full local state (dataset + roadmap +
  snapshot history) as one portable JSON file, and restore it later or on
  another machine.
- **Executive report** — a print-ready, one-page compliance summary
  (`window.print()` → Save as PDF).
- **Light / dark theme**, persisted with `localStorage`.

## Getting started

No build tooling required.

```bash
git clone <this-repo>
cd pranto-shield
python3 -m http.server 8080   # or any static file server
# open http://localhost:8080
```

You can also just open `index.html` directly in a browser — the only
network calls are two font/library CDNs (Google Fonts and SheetJS via
cdnjs); everything else, including all data processing, runs locally.

A ready-to-import example file is included at
`sample-data/iso42001-sample-assessment.csv`, or click **Load sample
assessment** on the Import Workbook screen.

## Project structure

```
index.html            Page shell + all views
css/styles.css         Design system & layout
js/catalog.js          Canonical ISO/IEC 42001:2023 clause & Annex A control list
js/data.js              Fictional demo dataset used for "Load sample assessment"
js/charts.js            Dependency-free SVG radar/donut/line chart helpers
js/app.js               State, parsing, rendering, roadmap, history, navigation
sample-data/            Downloadable example workbook (CSV)
```

## Workbook format

Pranto Shield looks for a sheet with these columns (flexible header
matching):

| Column | Notes |
|---|---|
| Category | `Mandatory Clauses` or `Annex A Controls` |
| Section | e.g. `4 - Context of the organization`, `A.5 - Assessing impacts of AI systems` |
| Standard Ref | clause or control number, e.g. `6.1.4`, `A.7.4` |
| Assessment Question | the requirement text |
| Compliance | `Fully Compliant` / `Partially Compliant` / `Not Compliant` / `Not Applicable` |
| Notes, Owner, Priority | optional |

Any catalog control not present in the uploaded file is shown as **Not
Assessed** rather than being dropped — the register always reflects the full
38-control / 32-clause ISO/IEC 42001:2023 structure.

## What makes this more than a viewer

A gap-assessment dashboard that only ever reflects whatever file is loaded
right now is useful for a single review meeting and not much else. Pranto
Shield adds the two things a GRC/AI-governance team actually needs between
assessments:

- a place to **act** on gaps (the roadmap), with risk scoring so the list is
  triaged rather than flat, and
- a way to **prove progress** over time (snapshots + trend), so "we improved
  compliance from 61% to 84% over two quarters" is a chart, not a claim.

Both are backed by nothing more than `localStorage` and a JSON export, on
purpose — no server, no accounts, no lock-in.

## Notes

- This is an independent portfolio project inspired by the concept of
  browser-based ISO gap-assessment dashboards. It is not affiliated with
  ISO/IEC, and the bundled sample data is entirely fictional.
- Control and clause titles follow the published ISO/IEC 42001:2023
  numbering and short names for reference purposes; assessment question
  text is original wording, not reproduced from the standard.

## License

MIT — do whatever you like with it.
