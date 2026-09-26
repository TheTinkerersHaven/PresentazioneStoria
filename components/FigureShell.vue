<script setup lang="ts">
defineProps<{
  kicker: string
  note?: string
  footer?: string
}>()
</script>

<template>
  <div class="fig">
    <div class="fig-head">
      <span class="fig-kicker">{{ kicker }}</span>
      <span v-if="note" class="fig-note">{{ note }}</span>
    </div>
    <div class="fig-body">
      <slot />
    </div>
    <p v-if="footer" class="fig-footer">{{ footer }}</p>
    <p v-else-if="$slots.footer" class="fig-footer"><slot name="footer" /></p>
  </div>
</template>

<style scoped>
.fig {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  background: var(--paper-deep, #efe5cf);
  border: 1px solid color-mix(in srgb, var(--ink) 40%, transparent);
  border-radius: 3px; overflow: hidden; box-sizing: border-box;
}
.fig-head {
  display: flex; align-items: baseline; justify-content: space-between; gap: .5rem;
  padding: .55rem .8rem .5rem; border-bottom: 1px solid color-mix(in srgb, var(--ink) 60%, transparent);
  flex-shrink: 0;
}
.fig-kicker {
  font-size: .72rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: .16em; color: var(--ink, #221a12);
}
.fig-note { font-size: .72rem; color: var(--ink-faint, #8d8172); flex-shrink: 0; }
.fig-body {
  flex: 1 1 auto; min-height: 0; overflow: hidden;
  padding: .6rem .8rem; display: flex; flex-direction: column; justify-content: center;
}
.fig-footer {
  margin: 0 .8rem .6rem; padding-top: .45rem;
  border-top: 1px solid var(--rule, #d9cdb2);
  font-size: .72rem; line-height: 1.5; color: var(--ink-faint, #8d8172);
  flex-shrink: 0;
}
</style>
