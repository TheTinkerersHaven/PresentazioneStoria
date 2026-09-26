<script setup lang="ts">
import FigureShell from './FigureShell.vue'

const steps = [
  'Lana grezza',
  'Filatura in casa',
  'Tessitura in casa',
  'Panno finito',
  'Porto di Liverpool',
  'Mercato internazionale',
]
</script>

<template>
  <FigureShell
    kicker="Il circuito del panno"
    note="Lancashire"
    footer="Dal racconto iniziale del capitolo: la lana del Lancashire, verso il porto di Liverpool."
  >
    <div
      v-for="(s, i) in steps" :key="s" class="flow-row"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 600 + i * 700, duration: 450 } }"
    >
      <div class="flow-step">
        <span class="flow-n">{{ i + 1 }}</span>
        <span class="flow-t">{{ s }}</span>
      </div>
      <span v-if="i < steps.length - 1" class="flow-link" aria-hidden="true" />
    </div>
  </FigureShell>
</template>

<style scoped>
.flow-row { display: flex; flex-direction: column; }
.flow-step { display: flex; align-items: center; gap: .6rem; }
.flow-n {
  width: 1.5rem; height: 1.5rem; flex-shrink: 0;
  border: 1px solid color-mix(in srgb, var(--accent) 55%, transparent);
  border-radius: 999px; display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: .8rem; color: var(--accent);
  font-variant-numeric: tabular-nums;
}
.flow-t { font-size: .95rem; line-height: 1.35; color: var(--ink); }
.flow-link { margin: .15rem 0 .15rem .75rem; height: .8rem; width: 1px; background: color-mix(in srgb, var(--accent) 55%, transparent); }
</style>
