---
aspectRatio: 16/9
canvasWidth: 1280
fonts:
  provider: none
style: style.css
info: 'Unità 5, Capitolo 1 — «Telai e carbone: donne e uomini nella rivoluzione industriale», pp. 352-368'
author: 'Presentazione per la classe'
transition: fade-out
layout: cover
# La palette è chiara e fissa: forza il tema chiaro così le variabili
# di Slidev (--slidev-code-background ecc.) non diventano scure.
colorSchema: light
---

**La Rivoluzione Industriale — L’Industria Tessile e le sue Precondizioni**

# La Rivoluzione Industriale: tessile e fabbrica

*Dal laboratorio in casa ai cotton mills: mercanti, cotone, invenzioni e operai.*

<div class="cover-grid">
<div>

<CoverToc />

</div>
<div>

<CoverTimeline />

</div>
</div>

---
layout: two-cols
---

**1. Il Sistema Artigianale — Il mercante e il telaio**

# Il sistema artigianale nel Lancashire

*La lana del mercante, lavorata in casa col suo telaio.*

<ul>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 450 } }"><strong>Il mercante</strong> — <em>Fornisce la lana e perfino il telaio</em>: Il tessitore non potrebbe comprarlo; il mercante riacquista il panno finito e lo rivende sul mercato internazionale, via Liverpool.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 1300, duration: 450 } }"><strong>La famiglia</strong> — <em>Tutti lavorano per non perdere il passo</em>: La moglie fila e sa usare il telaio quando il marito è malato; cinque figli — presto sei — e il maggiore, a otto anni, comincia a imparare.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 2200, duration: 450 } }"><strong>Il ritmo</strong> — <em>Più panno, più denaro</em>: Filatura e tessitura si alternano al lavoro della terra; se il ritmo cresce, si chiede al mercante un secondo telaio.</li>
</ul>

::right::
<FigClothCircuit />

---
layout: two-cols
---

**2. Il Rovesciamento — Bolton, 1830**

# Dai telai in casa ai cotton mills

*Nel 1830 gli artigiani non esistono più: ci sono gli operai.*

<ul>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 450 } }"><strong>Operai, non artigiani</strong> — <em>Addetti alle macchine</em>: Nessuno gestisce più il proprio ritmo: si controllano i telai meccanici 12-14 ore al giorno, per un salario prefissato.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 1300, duration: 450 } }"><strong>Meno personale</strong> — <em>Donne e bambini alle macchine</em>: Per le mansioni semplici o di fine manualità bastano mani agili e poca esperienza: l’artigiano esperto non serve più.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 2200, duration: 450 } }"><strong>La città esplode</strong> — <em>Attorno agli stabilimenti</em>: Bolton passa da borgo rurale a città di quasi 170.000 abitanti; Manchester supera i 300.000 con più di cento cotton mills: Cottonopolis.</li>
</ul>

::right::

<FigStats kicker="I numeri" note="1770 → 1850" :blocks="[{ value: '5.000 → 170.000', label: 'Bolton, 1770 → metà Ottocento', note: 'Poco più di un borgo rurale nel 1770; quasi 20.000 abitanti già a inizio Ottocento.' }, { value: '8×', label: 'Manchester, in cinquant’anni', note: 'Da meno di 10.000 abitanti a metà Settecento a seconda città della Gran Bretagna, poi oltre i 300.000.' }, { value: '100+', label: 'cotton mills a Manchester', note: 'Tanto da guadagnarsi il soprannome di Cottonopolis.' }]" />

---
layout: two-cols
---

**3. Le Precondizioni — Perché la Gran Bretagna**

# Perché proprio la Gran Bretagna

*Fattori comuni altrove; decisivi soltanto qui.*

<ul>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 450 } }"><strong>Fattori comuni</strong> — <em>Non bastano da soli</em>: Popolazione in crescita, capitali dei traffici, cultura scientifica illuminista: presenti anche altrove, altrove non cambia nulla.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 1300, duration: 450 } }"><strong>Rivoluzione agraria</strong> — <em>Nasce il mercato interno</em>: Con le enclosures la terra si coltiva per profitto; i contadini senza terra lavorano per un salario e comprano beni di prima necessità.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 2200, duration: 450 } }"><strong>Commercio triangolare</strong> — <em>Al centro del mondo</em>: Vertice degli scambi mondiali: importa le materie prime — prima fra tutte il cotone — ed esporta il prodotto finito.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 3100, duration: 450 } }"><strong>Istituzioni</strong> — <em>Liberali e pro-impresa</em>: Solo qui l’Illuminismo si affianca per tempo a un sistema politico ed economico liberale, favorevole all’impresa.</li>
</ul>

::right::

<FigCauses />

---
layout: two-cols
# Citazione + 3 punti: zoom leggermente ridotto per stare nei 720px.
zoom: 0.9
---

**4. Cotone e Meccanismo — Botta e risposta**

# Il cotone e la botta e risposta

*Una fibra economica e un processo che si inceppa di volta in volta.*

> «L’accelerazione di una fase del processo di fabbricazione sottoponeva a un grosso sforzo i fattori di produzione di una o più altre fasi, e suscitava innovazioni per correggere lo squilibrio.»
>
> <cite>— David S. Landes · storico dell’economia</cite>

<ul>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 450 } }"><strong>Fibra regina</strong> — <em>Il cotone vince sulla lana</em>: Nel Settecento costa meno, è più resistente alle sollecitazioni delle macchine e ha un mercato in continua espansione.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 1300, duration: 450 } }"><strong>Primo squilibrio</strong> — <em>La tessitura corre più della filatura</em>: Con la navetta volante il telaio corre più dei filatori a mano: il filo non basta più, servono macchine nuove.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 2200, duration: 450 } }"><strong>Secondo squilibrio</strong> — <em>I filatoi superano i telai</em>: Quando è il filatoio a produrre più di quanto il telaio sappia lavorare, tocca alla tessitura accelerare a sua volta.</li>
</ul>

::right::

<FigChain />

---
layout: two-cols
---

**5. Le Invenzioni I — Lancashire, 1733-1769**

# Navetta volante, jenny e water frame

*Prima la tessitura accelera, poi la filatura rincorre.*

<ul>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 450 } }"><strong>Tessitura</strong> — <em>1733: la navetta volante di John Kay</em>: Prima servivano due tessitori per le tele larghe; ora uno solo tira una corda e la navetta corre su un binario: stoffe più larghe delle braccia, produttività in forte aumento.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 1300, duration: 450 } }"><strong>Filatura</strong> — <em>1764: la spinning jenny di James Hargreaves</em>: Un filatoio multiplo manovrato a mano, ideato da un tessitore analfabeta: un solo operatore aziona fino a sei o sette fusi insieme.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 2200, duration: 450 } }"><strong>Acqua</strong> — <em>1769: il water frame di Richard Arkwright</em>: Un filatoio a spinta idraulica che, pur con un solo fuso, produce un filo molto più resistente di quello della jenny.</li>
</ul>

::right::

<FlyingShuttle />

---
layout: two-cols
---

**6. Le Invenzioni II — Lancashire, 1779-1785**

# La mule e il telaio meccanico

*Il filo abbonda di nuovo: la tessitura rientra in equilibrio.*

<ul>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 450 } }"><strong>Filatura</strong> — <em>1779: la mule di Samuel Crompton</em>: A Bolton il giovane filatore combina i princìpi di jenny e water frame: prima filatura multipla a energia idraulica, molto filo resistente.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 1300, duration: 450 } }"><strong>Tessitura</strong> — <em>1785: il telaio meccanico di Edmund Cartwright</em>: Un curato di campagna, ispirato da Arkwright, brevetta il primo telaio azionato dall’energia idrica: la tessitura si meccanizza a sua volta.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 2200, duration: 450 } }"><strong>Esito</strong> — <em>L’equilibrio torna</em>: La serie di invenzioni aperta nel 1733 si chiude nel 1785 — tutto nel Lancashire.</li>
</ul>

::right::

<FigLastChain />

---
layout: two-cols
# Citazione + 3 punti lunghi: zoom leggermente ridotto per stare nei 720px.
zoom: 0.9
---

**7. Trasformazione Sociale — Cotonifici e degrado**

# Il costo umano del sistema di fabbrica

*Competenze superate, donne e bambini, quartieri sovraffollati.*

> «Il grande obiettivo del moderno imprenditore manifatturiero è [...] quello di ridurre le mansioni dei suoi lavoranti all’esercizio della vigilanza e della destrezza.»
>
> <cite>— Andrew Ure · ai primi anni Trenta dell’Ottocento</cite>

<ul>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 450 } }"><strong>De-specializzazione</strong> — <em>Le competenze artigianali non servono più</em>: Basta un controllore attento e svelto, facile da rimpiazzare: un giovane vale più di qualsiasi uomo di mestiere.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 1300, duration: 450 } }"><strong>Manodopera</strong> — <em>Donne e bambini alle mansioni delicate</em>: Nel 1832 Frances Trollope trova nei cotton mills di Manchester bambini di soli sei anni, dodici ore al giorno in cambio di una paga irrisoria.</li>
<li v-motion :initial="{ opacity: 0, y: 14 }" :enter="{ opacity: 1, y: 0, transition: { delay: 2200, duration: 450 } }"><strong>Condizioni di vita</strong> — <em>Quartieri nati attorno alle fabbriche</em>: Case affastellate in sobborghi precari e fangosi; «imprigionato in fabbriche alte otto piani», scrive un filatore nel 1818.</li>
</ul>

::right::

<FigStats kicker="Il costo umano in cifre" note="Rapporti dell’epoca" :blocks="[{ value: '6', label: 'anni', note: 'L’età dei più piccoli trovati da Frances Trollope nei cotton mills di Manchester, nel 1832.' }, { value: '12', label: 'ore al giorno', note: 'In un ambiente rumoroso e soffocante, in cambio di una paga irrisoria.' }, { value: '8', label: 'piani', note: '«Imprigionato in fabbriche alte otto piani»: un filatore di Manchester, nel 1818.' }]" />
