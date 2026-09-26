<script setup lang="ts">
const items = [
  { n: 2, roman: 'I', title: 'Il sistema artigianale nel Lancashire' },
  { n: 3, roman: 'II', title: 'Dai telai in casa ai cotton mills' },
  { n: 4, roman: 'III', title: 'Perché proprio la Gran Bretagna' },
  { n: 5, roman: 'IV', title: 'Il cotone e la botta e risposta' },
  { n: 6, roman: 'V', title: 'Navetta volante, jenny e water frame' },
  { n: 7, roman: 'VI', title: 'La mule e il telaio meccanico' },
  { n: 8, roman: 'VII', title: 'Il costo umano del sistema di fabbrica' },
]
</script>

<template>
  <nav class="toc" aria-label="Indice della presentazione">
    <span class="toc-kicker">Presentazione per la classe</span>
    <ol class="toc-list">
      <li v-for="it in items" :key="it.n" class="toc-row">
        <span class="toc-roman">{{ it.roman }}.</span>
        <Link :to="it.n" class="toc-link">{{ it.title }}</Link>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.toc { display: flex; flex-direction: column; justify-content: center; height: 100%; min-height: 0; }
.toc-kicker {
  font-size: .7rem; font-weight: 600; text-transform: uppercase;
  letter-spacing: .22em; color: var(--accent);
}
.toc-list { margin: .6rem 0 0; padding: 0; list-style: none; border-top: 1px solid var(--rule, #d9cdb2); }
.toc-row {
  display: flex; align-items: baseline; gap: .6rem;
  padding: .42rem 0; border-bottom: 1px solid var(--rule, #d9cdb2);
}
.toc-roman {
  font-family: 'Source Serif 4', Georgia, serif; font-weight: 700;
  color: var(--accent); font-size: .85rem; width: 1.6rem; flex-shrink: 0;
}
.toc-link { font-size: .98rem; line-height: 1.35; }
.toc-link:hover { color: var(--accent); }
</style>
