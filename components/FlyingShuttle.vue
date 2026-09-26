<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const STEPS = [
  'Apertura del passo (licci)',
  'Corsa della navetta',
  'Battuta del pettine',
  'Scambio dei licci'
]

// Pianta del telaio vista dall'alto (coordinate SVG, viewBox 0 0 560 250).
// L'ordito scorre in verticale (dal subbio al tessuto), la navetta lo
// attraversa in orizzontale depositando la trama a 90 gradi.
const WARP_X0 = 70, WARP_X1 = 490, WARP_TOP = 48, FELL_Y = 176
const WARP_COUNT = 17, RACE_Y = 138, SHUTTLE_W = 80
const FLY_X0 = 60, FLY_X1 = 500 - SHUTTLE_W
const warpX = (i: number) => WARP_X0 + (i * (WARP_X1 - WARP_X0)) / (WARP_COUNT - 1)

const isPlaying = ref(true)
const speedMode = ref<'normal' | 'slow' | 'step'>('normal')
const cycleStep = ref(0)
const shuttleSide = ref<'left' | 'right'>('left')
const shuttleProgress = ref(0)
const reedAngle = ref(0)
const heddlesPhase = ref(0)
const clothPicksCount = ref(42)
const showTechnicalDetails = ref(false)

const animRef = ref<number | null>(null)
let mounted = true
const lastTime = ref(0)
const s = ref({ step: 0, side: 'left' as 'left' | 'right', progress: 0, reed: 0, heddle: 0, picks: 42, timer: 0 })

const getCycleTimes = () => speedMode.value === 'slow'
  ? { shedTime: 600, flyTime: 700, beatTime: 600, advanceTime: 400 }
  : { shedTime: 250, flyTime: 320, beatTime: 260, advanceTime: 180 }

const advanceSingleStep = () => {
  const st = s.value
  st.step = (st.step + 1) % 4
  if (st.step === 1) {
    st.side = st.side === 'left' ? 'right' : 'left'
    st.progress = st.side === 'right' ? 1 : 0
  } else if (st.step === 2) {
    st.reed = 18
    st.picks += 1
  } else if (st.step === 3) {
    st.reed = 0
    st.heddle = st.heddle === 0 ? 1 : 0
  } else {
    st.reed = 0
  }
  cycleStep.value = st.step
  shuttleSide.value = st.side
  shuttleProgress.value = st.progress
  reedAngle.value = st.reed
  heddlesPhase.value = st.heddle
  clothPicksCount.value = st.picks
}

const loop = (now: number) => {
  if (!mounted) return
  const dt = now - lastTime.value
  lastTime.value = now
  const st = s.value
  st.timer += dt
  const { shedTime, flyTime, beatTime, advanceTime } = getCycleTimes()

  if (st.step === 0) {
    st.reed = 0
    if (st.timer >= shedTime) { st.timer = 0; st.step = 1 }
  } else if (st.step === 1) {
    const p = Math.min(1, st.timer / flyTime)
    st.progress = st.side === 'left' ? p : 1 - p
    if (st.timer >= flyTime) {
      st.timer = 0; st.step = 2
      st.side = st.side === 'left' ? 'right' : 'left'
      st.progress = st.side === 'right' ? 1 : 0
      st.reed = 20; st.picks += 1
    }
  } else if (st.step === 2) {
    const p = st.timer / beatTime
    st.reed = 20 * Math.sin(p * Math.PI)
    if (st.timer >= beatTime) { st.timer = 0; st.step = 3; st.reed = 0 }
  } else if (st.step === 3) {
    if (st.timer >= advanceTime) { st.timer = 0; st.step = 0; st.heddle = st.heddle === 0 ? 1 : 0 }
  }

  cycleStep.value = st.step
  shuttleSide.value = st.side
  shuttleProgress.value = st.progress
  reedAngle.value = st.reed
  heddlesPhase.value = st.heddle
  clothPicksCount.value = st.picks
  animRef.value = requestAnimationFrame(loop)
}

onMounted(() => { lastTime.value = performance.now(); animRef.value = requestAnimationFrame(loop) })
onUnmounted(() => { mounted = false; if (animRef.value) cancelAnimationFrame(animRef.value) })

watch(isPlaying, (v) => {
  if (v && speedMode.value !== 'step') { lastTime.value = performance.now(); animRef.value = requestAnimationFrame(loop) }
  else if (animRef.value) { cancelAnimationFrame(animRef.value); animRef.value = null }
})
watch(speedMode, (v) => {
  if (v === 'step') { if (animRef.value) cancelAnimationFrame(animRef.value); animRef.value = null }
  else if (!isPlaying.value) { isPlaying.value = true; lastTime.value = performance.now(); animRef.value = requestAnimationFrame(loop) }
})

const shuttleX = () => FLY_X0 + shuttleProgress.value * (FLY_X1 - FLY_X0)
const shedOpen = () => (cycleStep.value === 0 || cycleStep.value === 1) ? 1 : 0.12
const shaft1Up = () => heddlesPhase.value === 0
const reedDy = () => reedAngle.value * 0.55
</script>

<template>
  <div class="shuttle">
    <!-- Header -->
    <div class="shuttle-head">
      <div class="min-w-0">
        <h3 class="font-display">La navetta volante di John Kay</h3>
        <span class="label">Pianta vista dall'alto · Lancashire · Brevetto 1733</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="phase">{{ cycleStep + 1 }} di 4 — {{ STEPS[cycleStep] }}</span>
        <button class="info-btn" title="Dettagli storici e tecnici" @click="showTechnicalDetails = !showTechnicalDetails">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span class="hidden sm:inline">Dettagli</span>
        </button>
      </div>
    </div>

    <!-- Loom plan -->
    <div class="loom-wrap">
      <svg viewBox="0 0 560 250" class="loom">
        <defs>
          <linearGradient id="woodBeam" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#78350f"/><stop offset="50%" stop-color="#451a03"/><stop offset="100%" stop-color="#291102"/>
          </linearGradient>
          <linearGradient id="shuttleWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#713f12"/><stop offset="25%" stop-color="#d97706"/><stop offset="50%" stop-color="#fbbf24"/><stop offset="75%" stop-color="#d97706"/><stop offset="100%" stop-color="#713f12"/>
          </linearGradient>
          <linearGradient id="steelTip" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f8fafc"/><stop offset="50%" stopColor="#94a3b8"/><stop offset="100%" stop-color="#334155"/>
          </linearGradient>
          <pattern id="wovenCloth" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="#efe5cf"/>
            <line x1="0" y1="4" x2="8" y2="4" stroke="#8c2f1b" stroke-width="1.5" opacity="0.8"/>
            <line x1="4" y1="0" x2="4" y2="8" stroke="#b3541e" stroke-width="1.5" opacity="0.8"/>
          </pattern>
        </defs>

        <!-- Telaio -->
        <rect x="8" y="8" width="20" height="234" fill="url(#woodBeam)" rx="2" stroke="#221a12" stroke-width="1.5"/>
        <rect x="532" y="8" width="20" height="234" fill="url(#woodBeam)" rx="2" stroke="#221a12" stroke-width="1.5"/>
        <rect x="8" y="8" width="544" height="18" fill="url(#woodBeam)" rx="2" stroke="#221a12" stroke-width="1.5"/>
        <rect x="8" y="224" width="544" height="18" fill="url(#woodBeam)" rx="2" stroke="#221a12" stroke-width="1.5"/>

        <!-- Subbio -->
        <rect x="44" y="32" width="472" height="13" rx="6" fill="url(#woodBeam)" stroke="#221a12" stroke-width="1.5"/>
        <text x="280" y="42" fill="#faf6ee" style="font-size:9px;letter-spacing:1px" text-anchor="middle" font-weight="bold">SUBBIO DELL'ORDITO</text>

        <!-- Ordito -->
        <g v-for="i in WARP_COUNT" :key="'w'+i">
          <line :x1="warpX(i)" :y1="WARP_TOP" :x2="warpX(i)" :y2="FELL_Y"
            :stroke="i%2===0?'#8c2f1b':'#575046'" stroke-width="1.6"/>
          <circle :cx="warpX(i)" :cy="i%2===0?92:108" r="2.6"
            :fill="i%2===0?'#8c2f1b':'#575046'"
            :style="{opacity: (shaft1Up() && i%2===0)||(!shaft1Up()&&i%2!==0)?1:0.35, transition:'opacity .25s'}"/>
        </g>

        <!-- Licci -->
        <g :style="{opacity: shaft1Up()?1:0.35, transition:'opacity .25s'}">
          <rect x="56" y="87" width="448" height="9" rx="2" fill="#221a12" stroke="#575046" stroke-width="1"/>
          <text x="62" y="94" fill="#faf6ee" style="font-size:8px;letter-spacing:.5px" font-weight="bold">LICCIO 1 · FILI PARI</text>
        </g>
        <g :style="{opacity: shaft1Up()?0.35:1, transition:'opacity .25s'}">
          <rect x="56" y="103" width="448" height="9" rx="2" fill="#221a12" stroke="#575046" stroke-width="1"/>
          <text x="62" y="110" fill="#faf6ee" style="font-size:8px;letter-spacing:.5px" font-weight="bold">LICCIO 2 · FILI DISPARI</text>
        </g>

        <!-- Binario -->
        <rect x="60" :y="RACE_Y-8" width="440" height="16" fill="#8c2f1b" :opacity="0.05+0.06*shedOpen()"/>
        <line x1="60" :y1="RACE_Y-8" x2="500" :y2="RACE_Y-8" stroke="#8c2f1b" stroke-width="1" stroke-dasharray="8 4" opacity="0.55"/>
        <line x1="60" :y1="RACE_Y+8" x2="500" :y2="RACE_Y+8" stroke="#8c2f1b" stroke-width="1" stroke-dasharray="8 4" opacity="0.55"/>

        <!-- Cassetti -->
        <rect x="30" y="120" width="34" height="36" rx="3" fill="#221a12" stroke="#8c2f1b" stroke-width="2"/>
        <circle cx="47" :cy="RACE_Y" r="5.5" fill="#ea580c" stroke="#faf6ee" stroke-width="1"/>
        <line :x1="cycleStep===1&&shuttleSide==='left'?'70':'42'" :y1="RACE_Y" x2="47" :y2="RACE_Y" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>
        <rect x="496" y="120" width="34" height="36" rx="3" fill="#221a12" stroke="#8c2f1b" stroke-width="2"/>
        <circle cx="513" :cy="RACE_Y" r="5.5" fill="#ea580c" stroke="#faf6ee" stroke-width="1"/>
        <line :x1="cycleStep===1&&shuttleSide==='right'?'490':'518'" :y1="RACE_Y" x2="513" :y2="RACE_Y" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>

        <!-- Cordino di Kay -->
        <path :d="`M 47 120 Q 280 ${cycleStep===1?112:104} 513 120`" fill="none" stroke="#8c2f1b" stroke-width="2" stroke-dasharray="5 3"/>
        <g :transform="`translate(280, ${cycleStep===1?112:104})`">
          <circle cx="0" cy="0" r="8" fill="#8c2f1b" stroke="#221a12" stroke-width="2"/>
          <rect x="-40" y="10" width="80" height="14" rx="3" fill="#221a12"/>
          <text x="0" y="20" fill="#faf6ee" style="font-size:8px" text-anchor="middle" font-weight="bold">CORDINO DI KAY</text>
        </g>

        <!-- Tessuto depositato -->
        <line v-if="shuttleSide==='left'" x1="60" :y1="RACE_Y" :x2="shuttleX()+8" :y2="RACE_Y" stroke="#8c2f1b" stroke-width="2.5"/>
        <line v-else x1="500" :y1="RACE_Y" :x2="shuttleX()+SHUTTLE_W-8" :y2="RACE_Y" stroke="#8c2f1b" stroke-width="2.5"/>

        <!-- Navetta -->
        <g :transform="`translate(${shuttleX()}, ${RACE_Y-14})`">
          <path d="M 10 14 L 20 2 L 60 2 L 70 14 L 60 26 L 20 26 Z" fill="url(#shuttleWood)" stroke="#291102" stroke-width="1.5"/>
          <polygon points="0,14 12,6 12,22" fill="url(#steelTip)" stroke="#221a12" stroke-width="1.2"/>
          <polygon points="80,14 68,6 68,22" fill="url(#steelTip)" stroke="#221a12" stroke-width="1.2"/>
          <rect x="24" y="7" width="32" height="14" rx="4" fill="#221a12" stroke="#78350f" stroke-width="1"/>
          <ellipse cx="40" cy="14" rx="14" ry="5" fill="#d97706" stroke="#8c2f1b" stroke-width="1.5"/>
          <circle cx="40" cy="14" r="3" fill="#faf6ee"/>
          <circle cx="22" cy="25" r="3" fill="#8c2f1b" stroke="#221a12" stroke-width="1"/>
          <circle cx="58" cy="25" r="3" fill="#8c2f1b" stroke="#221a12" stroke-width="1"/>
          <g v-if="cycleStep===1" class="pulse">
            <circle :cx="shuttleSide==='left'?-6:86" cy="14" r="4" fill="#8c2f1b"/>
            <path :d="shuttleSide==='left'?'M -14 14 L -4 14':'M 94 14 L 84 14'" stroke="#8c2f1b" stroke-width="3"/>
          </g>
        </g>

        <!-- Pettine -->
        <g :transform="`translate(0, ${reedDy()})`">
          <rect x="56" y="158" width="448" height="9" rx="2" fill="#221a12" stroke="#575046" stroke-width="1"/>
          <line v-for="i in 36" :key="'r'+i" :x1="64+i*12" y1="167" :x2="64+i*12" :y2="FELL_Y-2" stroke="#575046" stroke-width="1.6"/>
          <text x="498" y="165" fill="#faf6ee" style="font-size:8px;letter-spacing:.5px" font-weight="bold" text-anchor="end">PETTINE</text>
        </g>

        <!-- Tessuto già formato -->
        <line x1="64" :y1="FELL_Y" x2="496" :y2="FELL_Y" stroke="#221a12" stroke-width="1.5" stroke-dasharray="6 3"/>
        <rect :x="WARP_X0" :y="FELL_Y" :width="WARP_X1-WARP_X0" height="32" fill="url(#wovenCloth)" stroke="#8c2f1b" stroke-width="1.5"/>
        <rect x="210" :y="FELL_Y+8" width="140" height="16" rx="2" fill="#221a12" fill-opacity="0.9"/>
        <text x="280" :y="FELL_Y+19.5" fill="#faf6ee" style="font-size:9px" text-anchor="middle" font-weight="bold">Tessuto: {{ clothPicksCount }} passate</text>
      </svg>
    </div>

    <!-- Legenda -->
    <div class="legend">
      <span><span class="sw" style="border-color:var(--accent)"></span>fili pari dell'ordito</span>
      <span><span class="sw" style="border-color:var(--ink-soft)"></span>fili dispari</span>
      <span><span class="sw" style="background:var(--accent)"></span>trama depositata</span>
    </div>

    <!-- Details drawer -->
    <div v-if="showTechnicalDetails" class="drawer">
      <p><strong>Prima del 1733:</strong> per tele molto larghe servivano due tessitori, che si passavano a mano la navetta da un'estremità all'altra dell'ordito.</p>
      <p><strong>Con Kay (1733):</strong> un solo tessitore tira una corda e la navetta corre su un binario: stoffe più larghe delle braccia, con cospicuo aumento della produttività.</p>
      <p><strong>La conseguenza (Landes):</strong> la tessitura accelerata spinge a meccanizzare anche la filatura — la Jenny nel 1764, il Water Frame nel 1769.</p>
    </div>

    <!-- Controls -->
    <div class="ctrls">
      <div class="flex gap-2">
        <button class="play" @click="isPlaying = !isPlaying">
          {{ isPlaying ? 'Pausa' : 'Riproduci' }}
        </button>
        <button class="step" @click="advanceSingleStep" :disabled="isPlaying">Passo singolo →</button>
        <div class="speeds">
          <button @click="speedMode='normal'" :class="{on:speedMode==='normal'}">1×</button>
          <button @click="speedMode='slow'" :class="{on:speedMode==='slow'}">Rallentatore</button>
        </div>
      </div>
      <span class="picks">Passate battute: <b>{{ clothPicksCount }}</b></span>
    </div>
  </div>
</template>

<style scoped>
.shuttle {
  width: 100%; height: 100%;
  display: flex; flex-direction: column; justify-content: space-between;
  background: var(--paper-deep, #efe5cf); color: var(--ink, #221a12);
  border-radius: 3px; border: 1px solid color-mix(in srgb, var(--ink) 40%, transparent);
  padding: 1rem; overflow: hidden; user-select: none;
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  box-sizing: border-box;
}
.shuttle-head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: .5rem; padding-bottom: .5rem; border-bottom: 1px solid color-mix(in srgb, var(--ink) 60%, transparent); flex-shrink: 0; }
.shuttle-head h3 { font-family: 'Source Serif 4', serif; font-size: 1.15rem; font-weight: 700; line-height: 1.2; margin: 0; }
.label { font-size: .72rem; font-weight: 600; text-transform: uppercase; letter-spacing: .14em; color: var(--ink-faint, #8d8172); }
.phase { font-size: .85rem; color: var(--ink-soft, #5c5347); font-variant-numeric: tabular-nums; }
.info-btn { display: inline-flex; align-items: center; gap: .3rem; padding: .15rem .5rem; border: 1px solid color-mix(in srgb, var(--ink) 40%, transparent); border-radius: 2px; font-size: .78rem; color: var(--ink); background: transparent; cursor: pointer; }
.info-btn:hover { background: var(--ink); color: var(--paper); }
.loom-wrap { flex: 1 1 auto; min-height: 220px; display: flex; align-items: center; justify-content: center; margin: .5rem 0; background: var(--paper, #faf6ee); border: 1px solid var(--rule, #d9cdb2); border-radius: 2px; padding: .5rem; overflow: hidden; }
.loom { width: 100%; height: 100%; object-fit: contain; }
.legend { display: flex; flex-wrap: wrap; gap: .4rem 1rem; font-size: .75rem; color: var(--ink-soft, #5c5347); flex-shrink: 0; align-items: center; }
.sw { display: inline-block; width: 1.2rem; height: 0; border-top: 2px solid currentColor; vertical-align: middle; margin-right: .3rem; }
.drawer { border-top: 1px solid var(--rule, #d9cdb2); margin-top: .5rem; padding-top: .6rem; font-size: .78rem; line-height: 1.6; }
.drawer p { margin: .2rem 0; color: var(--ink); }
.drawer strong { color: var(--ink); }
.ctrls { padding-top: .6rem; border-top: 1px solid color-mix(in srgb, var(--ink) 60%, transparent); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .5rem; flex-shrink: 0; }
.play, .step, .speeds button { cursor: pointer; border-radius: 2px; font-size: .85rem; font-weight: 600; border: 1px solid color-mix(in srgb, var(--ink) 50%, transparent); padding: .25rem .75rem; color: var(--ink); background: transparent; }
.play { display: inline-flex; align-items: center; gap: .4rem; }
.step { disabled: true; }
.step:disabled { opacity: .4; cursor: default; }
.speeds button.on { background: var(--ink); color: var(--paper); font-weight: 700; }
.picks { font-size: .85rem; color: var(--ink-soft, #5c5347); font-variant-numeric: tabular-nums; }
.picks b { color: var(--ink); }
@keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:1} }
.pulse { animation: pulse .2s infinite; }
</style>
