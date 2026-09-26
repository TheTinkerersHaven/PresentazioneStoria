# Presentazione — Slidev

- `pnpm dev` → editor + presentazione su http://localhost:5173
- `pnpm build` → build statica in `dist/`
- `pnpm export` → PDF in `dist/`
- Contenuto: `slides.md` · Stile: `style.css` · Footer globale: `global-bottom.vue`
- Componenti in `components/`: `FlyingShuttle.vue` + figure (`FigureShell`, `FigClothCircuit`, `FigCauses`, `FigChain`, `FigLastChain`, `FigStats`) + cover (`CoverToc`, `CoverTimeline`)
- Comparsa automatica: `v-motion` con `enter`+`delay` su punti e figure (niente click, niente voci in cronologia); in export/stampa tutto visibile subito
- Tema chiaro forzato (`colorSchema: light`): la palette è fissa, non segue il sistema

Font self-hosted in `assets/fonts/`: funziona senza rete.
