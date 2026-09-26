<script setup lang="ts">
import FigureShell from './FigureShell.vue'

defineProps<{
  kicker: string
  note: string
  blocks: { value: string; label: string; note: string }[]
}>()
</script>

<template>
  <FigureShell :kicker="kicker" :note="note">
    <div
      v-for="(b, i) in blocks" :key="b.value + b.label" class="stat"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 600 + i * 700, duration: 450 } }"
    >
      <div class="stat-value">{{ b.value }}</div>
      <div class="stat-label">{{ b.label }}</div>
      <p class="stat-note">{{ b.note }}</p>
    </div>
  </FigureShell>
</template>

<style scoped>
.stat { padding: .25rem 0; }
.stat-value {
  font-family: 'Source Serif 4', Georgia, serif; font-weight: 700;
  font-size: 1.9rem; line-height: 1; color: var(--ink);
  font-variant-numeric: tabular-nums; overflow-wrap: break-word;
}
.stat-label {
  margin-top: .25rem; font-size: .7rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .12em; color: var(--accent);
}
.stat-note { margin: .2rem 0 0; font-size: .85rem; line-height: 1.5; color: var(--ink-soft, #5c5347); }
</style>
