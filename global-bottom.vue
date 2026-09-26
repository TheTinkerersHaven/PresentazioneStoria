<template>
  <footer v-if="$nav.currentLayout !== 'cover'" class="deck-footer">
    <span class="deck-src">«Telai e carbone: donne e uomini nella rivoluzione industriale» · U5C1 · pp. 352-368</span>
    <span class="deck-folio">{{ String($nav.currentPage).padStart(2, '0') }} / {{ String($nav.total).padStart(2, '0') }}</span>
  </footer>
</template>

<style scoped>
.deck-footer {
  position: absolute; left: 0; right: 0; bottom: 0;
  display: flex; align-items: center; justify-content: space-between; gap: .75rem;
  padding: .35rem .9rem;
  border-top: 1px solid color-mix(in srgb, var(--ink) 60%, transparent);
  background: var(--paper, #faf6ee);
  font-size: .68rem; color: var(--ink-faint, #8d8172);
  pointer-events: none;
}
.deck-src { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; min-width: 0; }
.deck-folio { font-variant-numeric: tabular-nums; font-weight: 600; flex-shrink: 0; }
</style>
