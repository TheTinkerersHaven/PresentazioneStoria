<script setup lang="ts">
import FigureShell from './FigureShell.vue'

const rows: [string, string][] = [
  ['1779 · Filatura', 'Prima filatura multipla a energia idraulica, con torsione più stretta del filo: filato resistente in grande quantità.'],
  ['1785 · Tessitura', 'Primo telaio azionato dall’energia idrica: smette di essere l’elemento che rallenta la produzione.'],
  ['Il distretto', 'Tutto accade nel Lancashire: Hargreaves, Arkwright, Crompton e Cartwright lavorano nella stessa contea.'],
]
</script>

<template>
  <FigureShell
    kicker="L’ultima parte della catena"
    footer="Bolton, contea del Lancashire: la stessa città del tessitore con cui si apre il capitolo."
  >
    <div
      v-for="([label, text], i) in rows" :key="label" class="rrow"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 600 + i * 700, duration: 450 } }"
    >
      <span class="rrow-label">{{ label }}</span>
      <p class="rrow-text">{{ text }}</p>
    </div>
  </FigureShell>
</template>

<style scoped>
.rrow { padding: .3rem 0; }
.rrow + .rrow { margin-top: .35rem; }
.rrow-label {
  display: block; font-size: .72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .12em; color: var(--accent);
}
.rrow-text {
  margin: .15rem 0 0; padding-top: .3rem;
  border-top: 1px solid var(--rule, #d9cdb2);
  font-size: .92rem; line-height: 1.5; color: var(--ink);
}
</style>
