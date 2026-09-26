<script setup lang="ts">
import FigureShell from './FigureShell.vue'
</script>

<template>
  <FigureShell
    kicker="Il meccanismo a catena"
    footer="Due squilibri in cinquant’anni: dal 1733 al 1785."
  >
    <div
      class="cstep"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 600, duration: 450 } }"
    >
      <div class="node">
        <span class="node-year">1733 · Tessitura</span>
        <p class="node-text">La navetta volante rende il telaio più veloce.</p>
      </div>
      <div class="chain" aria-hidden="true">
        <span class="chain-arrow">↓</span>
        <span class="chain-label">Squilibrio I</span>
      </div>
    </div>
    <div
      class="cstep"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 1300, duration: 450 } }"
    >
      <div class="node">
        <span class="node-year">1764-1769 · Filatura</span>
        <p class="node-text">Jenny e water frame rendono il filatoio più veloce.</p>
      </div>
      <div class="chain" aria-hidden="true">
        <span class="chain-arrow">↓</span>
        <span class="chain-label">Squilibrio II</span>
      </div>
    </div>
    <div
      class="cstep"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 2000, duration: 450 } }"
    >
      <div class="node">
        <span class="node-year">1779-1785 · Tutte e due</span>
        <p class="node-text">Mule e telaio meccanico rimettono il sistema in pari.</p>
      </div>
    </div>
  </FigureShell>
</template>

<style scoped>
.node {
  border: 1px solid color-mix(in srgb, var(--ink) 40%, transparent);
  background: var(--paper, #faf6ee); border-radius: 3px;
  padding: .4rem .6rem;
}
.node-year {
  display: block; font-size: .72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .14em; color: var(--accent);
}
.node-text { margin: .15rem 0 0; font-size: .92rem; line-height: 1.45; color: var(--ink); }
.chain { display: flex; align-items: center; justify-content: center; gap: .4rem; padding: .2rem 0; }
.chain-arrow { color: var(--accent); font-size: 1rem; line-height: 1; }
.chain-label { font-size: .68rem; font-weight: 600; text-transform: uppercase; letter-spacing: .14em; color: var(--ink-faint, #8d8172); }
</style>
