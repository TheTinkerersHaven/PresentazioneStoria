<script setup lang="ts">
import FigureShell from './FigureShell.vue'

const rows: [string, string][] = [
  ['Crescita che non basta', 'Popolazione in aumento, capitali dei traffici, cultura scientifica illuminista: presenti anche altrove, da soli non fanno scattare nulla.'],
  ['Enclosures → mercato interno', 'Recinzioni e terra coltivata per profitto: i contadini senza terra lavorano per un salario e comprano beni di prima necessità.'],
  ['Il vertice degli scambi', 'Al centro del commercio triangolare: importa le materie prime — prima fra tutte il cotone — ed esporta il prodotto finito.'],
  ['«Officina del mondo»', 'Solo qui Illuminismo e sistema politico liberale promuovono l’impresa: la chiamerà così Disraeli nel 1838.'],
]
</script>

<template>
  <FigureShell
    kicker="Perché qui e non altrove"
    footer="La triangolazione decisiva — popolazione, mercato interno, manodopera — scatta soltanto in Gran Bretagna."
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
.rrow { padding: .25rem 0; }
.rrow + .rrow { margin-top: .3rem; }
.rrow-label {
  display: block; font-size: .72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: .12em; color: var(--accent);
}
.rrow-text {
  margin: .15rem 0 0; padding-top: .3rem;
  border-top: 1px solid var(--rule, #d9cdb2);
  font-size: .88rem; line-height: 1.45; color: var(--ink);
}
</style>
