<script setup lang="ts">
import FigureShell from './FigureShell.vue'

const span: [string, string, string][] = [
  ['1650-1780', 'Lavoro domestico', 'Lana, famiglie e mercanti nel Lancashire.'],
  ['1733-1785', 'Le invenzioni', 'Cinque macchine fra filatura e tessitura.'],
  ['Fine ’700', 'Il sistema di fabbrica', 'Cotton mills e città industriali.'],
  ['1830', 'Operai e salari', 'Turni, quartieri e nuove classi sociali.'],
]
</script>

<template>
  <FigureShell kicker="L’arco del percorso" note="Lancashire, 1650-1840">
    <ol class="tl">
      <li v-for="[year, label, desc] in span" :key="year" class="tl-row">
        <span class="tl-year">{{ year }}</span>
        <div class="tl-body">
          <h4 class="tl-label">{{ label }}</h4>
          <p class="tl-desc">{{ desc }}</p>
        </div>
      </li>
    </ol>
  </FigureShell>
</template>

<style scoped>
.tl { margin: 0; padding: 0; list-style: none; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
.tl-row { display: flex; gap: .7rem; padding: .3rem 0; }
.tl-year {
  font-family: 'Source Serif 4', Georgia, serif; font-weight: 700;
  color: var(--accent); font-size: 1rem; width: 5.8rem; flex-shrink: 0;
  font-variant-numeric: tabular-nums; white-space: nowrap;
}
.tl-label { margin: 0; font-size: .98rem; font-weight: 700; line-height: 1.3; color: var(--ink); }
.tl-desc { margin: .1rem 0 0; font-size: .88rem; line-height: 1.45; color: var(--ink-soft, #5c5347); }
</style>
