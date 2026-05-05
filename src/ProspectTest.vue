<script setup>
import { ref, computed } from 'vue'

// ── Questions ───────────────────────────────────────────────────
// Each question has: id, type ('choice'|'theory'), text, options[], correct (for theory),
// bias (label for behavioral questions), explanation
const questions = [
  {
    id: 1,
    type: 'choice',
    scenario: 'Problema 1 — Kahneman & Tversky (1979)',
    text: 'Se te ofrecen dos opciones. ¿Cuál eliges?',
    options: [
      { label: 'A', text: 'Ganar $900 con certeza (100%)' },
      { label: 'B', text: 'Un 90% de ganar $1,000 y un 10% de no ganar nada' },
    ],
    kahneman: 'A',
    bias: 'Efecto certeza',
    explanation:
      'La mayoría elige A aunque el valor esperado de B es idéntico ($900). Sobreponderamos la certeza — Kahneman lo llamó el "efecto certeza".',
  },
  {
    id: 2,
    type: 'choice',
    scenario: 'Problema 2 — Efecto reflejo',
    text: 'Imagina que ya perdiste $1,000. Ahora elige:',
    options: [
      { label: 'A', text: 'Perder $900 más con certeza' },
      { label: 'B', text: 'Un 90% de perder $1,000 más y un 10% de no perder nada' },
    ],
    kahneman: 'B',
    bias: 'Efecto reflejo / Aversión a la pérdida',
    explanation:
      'Frente a pérdidas nos volvemos buscadores de riesgo: preferimos el juego (B) esperando recuperar. En ganancias somos aversos al riesgo; en pérdidas, aventureros.',
  },
  {
    id: 3,
    type: 'choice',
    scenario: 'Problema 3 — Enmarcado (Framing)',
    text: 'Un país enfrenta una epidemia que matará a 600 personas. Elige el programa:',
    options: [
      { label: 'A', text: '"El programa A salvará 200 vidas con certeza"' },
      { label: 'B', text: '"El programa B tiene 1/3 de probabilidad de salvar 600 y 2/3 de no salvar a nadie"' },
    ],
    kahneman: 'A',
    bias: 'Efecto de enmarcado (Framing Effect)',
    explanation:
      'El 72 % elige A porque está enmarcado en ganancias ("salvar"). Si se reencuadra como pérdidas ("morirán"), la preferencia se invierte. El enmarcado distorsiona la decisión racional.',
  },
  {
    id: 4,
    type: 'theory',
    text: '¿Cuál es el ratio aproximado de pérdida/ganancia según la curva de valor de Kahneman?',
    options: [
      { label: 'A', text: 'Las pérdidas duelen 1× más que lo que placen las ganancias equivalentes' },
      { label: 'B', text: 'Las pérdidas duelen ~2× más que lo que placen las ganancias equivalentes' },
      { label: 'C', text: 'Las pérdidas duelen 5× más que lo que placen las ganancias equivalentes' },
      { label: 'D', text: 'Ganancias y pérdidas se perciben igual' },
    ],
    correct: 'B',
    explanation:
      'Kahneman & Tversky estimaron que el dolor de perder $100 es aproximadamente el doble del placer de ganar $100. Por eso vendemos ganadores demasiado pronto y aguantamos perdedores demasiado tiempo.',
  },
  {
    id: 5,
    type: 'choice',
    scenario: 'Problema 5 — Punto de referencia',
    text: 'Imagina dos traders que terminaron el mes igual, con $10,000 en cuenta.',
    options: [
      { label: 'A', text: 'Ana empezó con $9,000 y ganó $1,000 este mes' },
      { label: 'B', text: 'Bruno empezó con $11,000 y perdió $1,000 este mes' },
    ],
    kahneman: 'A',
    bias: 'Dependencia del punto de referencia',
    explanation:
      'Objetivamente ambos tienen $10,000, pero Ana se siente mejor. El bienestar no depende del estado absoluto sino del cambio respecto al punto de referencia.',
  },
  {
    id: 6,
    type: 'theory',
    text: '¿Qué describe la "ponderación de probabilidades" en la Teoría Prospectiva?',
    options: [
      { label: 'A', text: 'Evaluamos las probabilidades de forma lineal y exacta' },
      { label: 'B', text: 'Sobreponderamos probabilidades pequeñas y subponderamos las grandes' },
      { label: 'C', text: 'Ignoramos completamente las probabilidades bajas (< 10%)' },
      { label: 'D', text: 'Sólo prestamos atención a probabilidades mayores al 50%' },
    ],
    correct: 'B',
    explanation:
      'La función de ponderación w(p) es cóncava cerca de 1 y convexa cerca de 0. Sobrestimamos eventos raros (lotería, cisne negro) y subestimamos eventos casi seguros.',
  },
  {
    id: 7,
    type: 'choice',
    scenario: 'Problema 7 — Costo hundido (Sunk Cost)',
    text: 'Compraste un ticket de concierto por $80. El día del evento estás enfermo y el concierto no te emociona. Los tickets no son revendibles. ¿Vas?',
    options: [
      { label: 'A', text: 'Sí, ya pagué los $80' },
      { label: 'B', text: 'No, si me siento mal no lo disfrutaré' },
    ],
    kahneman: 'B',
    bias: 'Falacia del costo hundido',
    explanation:
      'Los $80 ya están perdidos independientemente de tu decisión. Ir "para no desperdiciar el dinero" es la falacia del costo hundido, ligada a la aversión a la pérdida. En trading: aguantar un perdedor porque "ya caí mucho".',
  },
  {
    id: 8,
    type: 'choice',
    scenario: 'Problema 8 — Disposición (Disposition Effect)',
    text: 'Tienes dos posiciones abiertas: acción A con +30% y acción B con −30%. El mercado cierra en 1 hora. Debes cerrar una. ¿Cuál?',
    options: [
      { label: 'A', text: 'Cierro la posición ganadora (+30%) para asegurar la ganancia' },
      { label: 'B', text: 'Cierro la posición perdedora (−30%) para limitar pérdidas adicionales' },
    ],
    kahneman: 'B',
    bias: 'Efecto disposición',
    explanation:
      'El 80 % cierra ganadores demasiado pronto y aguanta perdedores demasiado (Shefrin & Statman, 1985). Racionalmente deberías cerrar según perspectiva futura, no por evitar cristalizar pérdidas.',
  },
  {
    id: 9,
    type: 'theory',
    text: 'La curva de valor en la Teoría Prospectiva tiene la forma de una "S". ¿Qué significa?',
    options: [
      { label: 'A', text: 'Es cóncava (convexa hacia abajo) tanto en ganancias como en pérdidas' },
      { label: 'B', text: 'Es cóncava en ganancias (utilidad marginal decreciente) y convexa en pérdidas (sensibilidad marginal decreciente al dolor)' },
      { label: 'C', text: 'Es lineal en ambos dominios' },
      { label: 'D', text: 'Es convexa en ganancias y cóncava en pérdidas' },
    ],
    correct: 'B',
    explanation:
      'La forma en S refleja: aversión al riesgo en ganancias (cóncava) y búsqueda de riesgo en pérdidas (convexa). Además la curva es más pronunciada en el dominio de pérdidas.',
  },
  {
    id: 10,
    type: 'choice',
    scenario: 'Problema 10 — Contabilidad mental',
    text: 'Llega al teatro y descubres que perdiste un billete de $50 que ibas a usar para comprar la entrada. ¿Compras otra entrada con otro billete que tienes?',
    options: [
      { label: 'A', text: 'Sí, el billete perdido y la entrada son cuentas separadas' },
      { label: 'B', text: 'No, ya gasté $50 en ese plan de hoy, sería demasiado' },
    ],
    kahneman: 'A',
    bias: 'Contabilidad mental (Mental Accounting)',
    explanation:
      'Kahneman mostró que si pierdes la entrada (no el billete) casi nadie compra otra; si pierdes el billete, sí la compran. El dinero es fungible, pero lo mentalmente "etiquetado" cambia la decisión.',
  },
  {
    id: 11,
    type: 'theory',
    text: '¿En qué se diferencia la Teoría Prospectiva de la Teoría de la Utilidad Esperada (TUE)?',
    options: [
      { label: 'A', text: 'La TUE usa un punto de referencia; la TP no' },
      { label: 'B', text: 'La TP evalúa cambios desde un punto de referencia con ponderación no lineal de probabilidades; la TUE asume un agente racional con utilidad absoluta' },
      { label: 'C', text: 'Ambas teorías llegan a las mismas predicciones de comportamiento' },
      { label: 'D', text: 'La TP sólo aplica a decisiones bajo incertidumbre total' },
    ],
    correct: 'B',
    explanation:
      'La TUE predice un agente racional. La TP (Kahneman & Tversky, 1979) describe cómo los humanos realmente deciden: con punto de referencia, aversión a la pérdida y ponderación no lineal.',
  },
  {
    id: 12,
    type: 'choice',
    scenario: 'Problema 12 — Sesgo de confirmación + sobreconfianza',
    text: 'Llevas 5 operaciones ganadoras seguidas. ¿Cómo afecta esto a tu próxima operación?',
    options: [
      { label: 'A', text: 'Mi racha positiva indica que estoy en "zona", aumentaré el tamaño' },
      { label: 'B', text: 'Cada operación es independiente; mantendré mi gestión de riesgo habitual' },
    ],
    kahneman: 'B',
    bias: 'Sesgo del jugador / Sobreconfianza',
    explanation:
      '5 éxitos seguidos activan la "ilusión de control" y la sobreconfianza. Kahneman: el ruido estadístico se interpreta como habilidad. En trading esto lleva a over-sizing en el momento de mayor riesgo psicológico.',
  },
]

// ── State ────────────────────────────────────────────────────────
const currentIndex = ref(0)
const answers = ref({}) // { [questionId]: optionLabel }
const showResult = ref(false)
const showExplanation = ref(false)

const current = computed(() => questions[currentIndex.value])
const totalQuestions = computed(() => questions.length)
const progress = computed(() => Math.round(((currentIndex.value) / totalQuestions.value) * 100))

// ── Scoring ──────────────────────────────────────────────────────
const results = computed(() => {
  let theoryCorrect = 0
  let choiceAligned = 0 // answered like Kahneman predicted (biased)
  const biases = []

  questions.forEach((q) => {
    const ans = answers.value[q.id]
    if (!ans) return

    if (q.type === 'theory' && ans === q.correct) {
      theoryCorrect++
    }

    if (q.type === 'choice') {
      if (ans === q.kahneman) {
        choiceAligned++
        biases.push(q.bias)
      }
    }
  })

  const theoryTotal = questions.filter((q) => q.type === 'theory').length
  const choiceTotal = questions.filter((q) => q.type === 'choice').length
  const knowledgeScore = Math.round((theoryCorrect / theoryTotal) * 100)
  const biasScore = Math.round((choiceAligned / choiceTotal) * 100)

  return { theoryCorrect, theoryTotal, choiceAligned, choiceTotal, knowledgeScore, biasScore, biases }
})

const interpretation = computed(() => {
  const { knowledgeScore, biasScore } = results.value
  if (knowledgeScore >= 75 && biasScore <= 33) {
    return {
      label: '🧠 Agente casi racional',
      color: '#2cc5e8',
      desc: 'Tienes sólido conocimiento teórico Y resististe la mayoría de los sesgos conductuales. Raro y valioso para un trader.',
    }
  } else if (knowledgeScore >= 75 && biasScore > 33) {
    return {
      label: '📚 Saber sin aplicar',
      color: '#f0c040',
      desc: 'Conoces la teoría pero tus elecciones revelan los mismos sesgos que estudias. El conocimiento intelectual no basta — necesitas entrenamiento conductual.',
    }
  } else if (knowledgeScore < 50 && biasScore > 66) {
    return {
      label: '⚠️ Alto riesgo conductual',
      color: '#e85d5d',
      desc: 'Baja comprensión teórica y alta presencia de sesgos. Estudiar Kahneman puede cambiar radicalmente tu gestión de riesgo y toma de decisiones.',
    }
  } else {
    return {
      label: '📈 En desarrollo',
      color: '#8bc34a',
      desc: 'Tienes bases pero aún hay sesgos activos que pueden costar dinero real. Estudia los patrones que fallaste y revísalos regularmente.',
    }
  }
})

// ── Actions ──────────────────────────────────────────────────────
function selectAnswer(label) {
  answers.value[current.value.id] = label
  showExplanation.value = true
}

function next() {
  showExplanation.value = false
  if (currentIndex.value < totalQuestions.value - 1) {
    currentIndex.value++
  } else {
    showResult.value = true
  }
}

function restart() {
  answers.value = {}
  currentIndex.value = 0
  showResult.value = false
  showExplanation.value = false
}

const selectedAnswer = computed(() => answers.value[current.value?.id] ?? null)
const isCorrect = computed(() => {
  if (!current.value || !selectedAnswer.value) return null
  if (current.value.type === 'theory') return selectedAnswer.value === current.value.correct
  return selectedAnswer.value === current.value.kahneman
})
</script>

<template>
  <section class="prospect-shell">
    <div class="prospect-header">
      <p class="prospect-eyebrow">Psicología del Trading</p>
      <h2 class="prospect-title">Test: Teoría Prospectiva</h2>
      <p class="prospect-subtitle">
        Basado en el trabajo de <strong>Daniel Kahneman</strong> &amp; Amos Tversky
        — <em>Prospect Theory: An Analysis of Decision under Risk</em> (1979)
      </p>
    </div>

    <!-- ── Progress bar ── -->
    <div v-if="!showResult" class="prospect-progress-wrap">
      <div class="prospect-progress-bar">
        <div class="prospect-progress-fill" :style="{ width: progress + '%' }" />
      </div>
      <span class="prospect-progress-label">{{ currentIndex + 1 }} / {{ totalQuestions }}</span>
    </div>

    <!-- ── Question ── -->
    <transition name="q-fade" mode="out-in">
      <div v-if="!showResult" :key="currentIndex" class="prospect-card">
        <div v-if="current.scenario" class="prospect-scenario">{{ current.scenario }}</div>
        <div class="prospect-type-badge" :class="current.type">
          {{ current.type === 'theory' ? '📚 Teoría' : '⚖️ Decisión conductual' }}
        </div>
        <p class="prospect-question">{{ current.text }}</p>

        <div class="prospect-options">
          <button
            v-for="opt in current.options"
            :key="opt.label"
            class="prospect-option"
            :class="{
              selected: selectedAnswer === opt.label,
              correct: selectedAnswer && current.type === 'theory' && opt.label === current.correct,
              wrong: selectedAnswer === opt.label && current.type === 'theory' && opt.label !== current.correct,
              kahneman: selectedAnswer && current.type === 'choice' && opt.label === current.kahneman,
              chosen: selectedAnswer === opt.label && current.type === 'choice',
              disabled: !!selectedAnswer,
            }"
            :disabled="!!selectedAnswer"
            @click="selectAnswer(opt.label)"
          >
            <span class="opt-label">{{ opt.label }}</span>
            <span class="opt-text">{{ opt.text }}</span>
          </button>
        </div>

        <!-- ── Explanation ── -->
        <transition name="exp-slide">
          <div v-if="showExplanation" class="prospect-explanation">
            <div v-if="current.type === 'theory'" class="exp-verdict" :class="isCorrect ? 'correct' : 'wrong'">
              {{ isCorrect ? '✅ Correcto' : '❌ Incorrecto' }}
            </div>
            <div v-else class="exp-verdict bias">
              <span v-if="selectedAnswer === current.kahneman">
                ⚠️ Sesgo detectado: <strong>{{ current.bias }}</strong>
              </span>
              <span v-else>
                ✅ Resististe el sesgo: <strong>{{ current.bias }}</strong>
              </span>
            </div>
            <p class="exp-text">{{ current.explanation }}</p>
            <button class="prospect-next-btn" @click="next">
              {{ currentIndex < totalQuestions - 1 ? 'Siguiente pregunta →' : 'Ver resultados →' }}
            </button>
          </div>
        </transition>
      </div>
    </transition>

    <!-- ── Results ── -->
    <transition name="q-fade">
      <div v-if="showResult" class="prospect-results">
        <div class="results-hero">
          <div class="results-interpretation" :style="{ borderColor: interpretation.color }">
            <p class="results-label" :style="{ color: interpretation.color }">{{ interpretation.label }}</p>
            <p class="results-desc">{{ interpretation.desc }}</p>
          </div>
        </div>

        <div class="results-grid">
          <div class="results-stat">
            <p class="stat-value">{{ results.theoryCorrect }}/{{ results.theoryTotal }}</p>
            <p class="stat-label">Respuestas teóricas correctas</p>
            <div class="stat-bar">
              <div class="stat-fill theory" :style="{ width: results.knowledgeScore + '%' }" />
            </div>
            <p class="stat-pct">{{ results.knowledgeScore }}%</p>
          </div>
          <div class="results-stat">
            <p class="stat-value">{{ results.choiceAligned }}/{{ results.choiceTotal }}</p>
            <p class="stat-label">Sesgos conductuales activos</p>
            <div class="stat-bar">
              <div class="stat-fill bias" :style="{ width: results.biasScore + '%' }" />
            </div>
            <p class="stat-pct">{{ results.biasScore }}%</p>
          </div>
        </div>

        <div v-if="results.biases.length" class="results-biases">
          <p class="biases-title">Sesgos detectados en tus respuestas:</p>
          <ul class="biases-list">
            <li v-for="bias in results.biases" :key="bias">{{ bias }}</li>
          </ul>
        </div>

        <div class="results-note">
          <p>
            📖 <strong>Referencia:</strong> Kahneman, D. &amp; Tversky, A. (1979).
            <em>Prospect Theory: An Analysis of Decision under Risk.</em> Econometrica, 47(2), 263–291.
          </p>
          <p>
            📖 <strong>Lectura recomendada:</strong> Kahneman, D. (2011).
            <em>Thinking, Fast and Slow.</em>
          </p>
        </div>

        <button class="prospect-restart-btn" @click="restart">🔄 Repetir el test</button>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.prospect-shell {
  margin: 2rem 0 1.5rem;
  padding: 1.75rem 2rem;
  background: linear-gradient(135deg, rgba(10, 18, 36, 0.92) 0%, rgba(20, 34, 60, 0.92) 100%);
  border: 1.5px solid rgba(44, 197, 232, 0.22);
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.30);
  color: #edf4ff;
  font-family: inherit;
}

.prospect-header {
  margin-bottom: 1.5rem;
}

.prospect-eyebrow {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2cc5e8;
  margin: 0 0 0.25rem;
}

.prospect-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #edf4ff;
  margin: 0 0 0.35rem;
}

.prospect-subtitle {
  font-size: 0.88rem;
  color: rgba(237, 244, 255, 0.65);
  margin: 0;
  line-height: 1.5;
}

/* ── Progress ── */
.prospect-progress-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.prospect-progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(44, 197, 232, 0.15);
  border-radius: 99px;
  overflow: hidden;
}

.prospect-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #2cc5e8, #5e9cf5);
  border-radius: 99px;
  transition: width 0.4s ease;
}

.prospect-progress-label {
  font-size: 0.8rem;
  color: #2cc5e8;
  font-weight: 700;
  white-space: nowrap;
}

/* ── Card ── */
.prospect-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(44, 197, 232, 0.14);
  border-radius: 14px;
  padding: 1.5rem;
}

.prospect-scenario {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #5e9cf5;
  margin-bottom: 0.5rem;
}

.prospect-type-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.prospect-type-badge.theory {
  background: rgba(240, 192, 64, 0.15);
  color: #f0c040;
  border: 1px solid rgba(240, 192, 64, 0.3);
}

.prospect-type-badge.choice {
  background: rgba(44, 197, 232, 0.12);
  color: #2cc5e8;
  border: 1px solid rgba(44, 197, 232, 0.3);
}

.prospect-question {
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.55;
  color: #edf4ff;
  margin: 0 0 1.1rem;
}

/* ── Options ── */
.prospect-options {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.prospect-option {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1.5px solid rgba(44, 197, 232, 0.18);
  border-radius: 10px;
  color: #edf4ff;
  font-size: 0.92rem;
  text-align: left;
  cursor: pointer;
  transition: background 0.18s, border-color 0.18s, transform 0.12s;
  line-height: 1.45;
}

.prospect-option:not(.disabled):hover {
  background: rgba(44, 197, 232, 0.1);
  border-color: rgba(44, 197, 232, 0.45);
  transform: translateY(-1px);
}

.prospect-option.disabled {
  cursor: default;
}

.opt-label {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(44, 197, 232, 0.15);
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.8rem;
  color: #2cc5e8;
}

/* Theory correct / wrong */
.prospect-option.correct {
  background: rgba(44, 232, 100, 0.1);
  border-color: #2ce864;
}

.prospect-option.correct .opt-label {
  background: rgba(44, 232, 100, 0.25);
  color: #2ce864;
}

.prospect-option.wrong {
  background: rgba(232, 93, 93, 0.1);
  border-color: #e85d5d;
}

.prospect-option.wrong .opt-label {
  background: rgba(232, 93, 93, 0.2);
  color: #e85d5d;
}

/* Choice: kahneman-predicted option highlighted, user chosen */
.prospect-option.kahneman {
  background: rgba(240, 192, 64, 0.08);
  border-color: rgba(240, 192, 64, 0.45);
}

.prospect-option.kahneman .opt-label {
  background: rgba(240, 192, 64, 0.2);
  color: #f0c040;
}

.prospect-option.chosen:not(.kahneman) {
  background: rgba(44, 232, 100, 0.08);
  border-color: rgba(44, 232, 100, 0.45);
}

/* ── Explanation ── */
.prospect-explanation {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(10, 18, 36, 0.5);
  border-radius: 10px;
  border: 1px solid rgba(44, 197, 232, 0.15);
}

.exp-verdict {
  font-size: 0.88rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.exp-verdict.correct {
  color: #2ce864;
}

.exp-verdict.wrong {
  color: #e85d5d;
}

.exp-verdict.bias {
  color: #f0c040;
}

.exp-text {
  font-size: 0.88rem;
  color: rgba(237, 244, 255, 0.80);
  line-height: 1.55;
  margin: 0 0 0.9rem;
}

.prospect-next-btn {
  padding: 0.5rem 1.2rem;
  background: linear-gradient(90deg, #2cc5e8, #5e9cf5);
  border: none;
  border-radius: 8px;
  color: #0a1224;
  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.12s;
}

.prospect-next-btn:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

/* ── Results ── */
.prospect-results {
  padding: 0.5rem 0;
}

.results-hero {
  margin-bottom: 1.5rem;
}

.results-interpretation {
  padding: 1rem 1.25rem;
  border: 2px solid;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
}

.results-label {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
}

.results-desc {
  font-size: 0.9rem;
  color: rgba(237, 244, 255, 0.78);
  line-height: 1.55;
  margin: 0;
}

.results-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

@media (max-width: 540px) {
  .results-grid {
    grid-template-columns: 1fr;
  }
}

.results-stat {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(44, 197, 232, 0.14);
  border-radius: 10px;
  padding: 0.9rem 1rem;
}

.stat-value {
  font-size: 1.4rem;
  font-weight: 700;
  color: #edf4ff;
  margin: 0 0 0.2rem;
}

.stat-label {
  font-size: 0.78rem;
  color: rgba(237, 244, 255, 0.6);
  margin: 0 0 0.6rem;
}

.stat-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  overflow: hidden;
  margin-bottom: 0.3rem;
}

.stat-fill {
  height: 100%;
  border-radius: 99px;
  transition: width 0.6s ease;
}

.stat-fill.theory {
  background: linear-gradient(90deg, #2cc5e8, #5e9cf5);
}

.stat-fill.bias {
  background: linear-gradient(90deg, #f0c040, #e85d5d);
}

.stat-pct {
  font-size: 0.8rem;
  font-weight: 700;
  color: #2cc5e8;
  margin: 0;
}

.results-biases {
  background: rgba(240, 192, 64, 0.07);
  border: 1px solid rgba(240, 192, 64, 0.2);
  border-radius: 10px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.25rem;
}

.biases-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: #f0c040;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.biases-list {
  margin: 0;
  padding-left: 1.1rem;
  color: rgba(237, 244, 255, 0.8);
  font-size: 0.88rem;
  line-height: 1.8;
}

.results-note {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(44, 197, 232, 0.1);
  border-radius: 10px;
  padding: 0.9rem 1rem;
  margin-bottom: 1.25rem;
  font-size: 0.82rem;
  color: rgba(237, 244, 255, 0.6);
  line-height: 1.6;
}

.results-note p { margin: 0.25rem 0; }

.prospect-restart-btn {
  width: 100%;
  padding: 0.7rem;
  background: rgba(44, 197, 232, 0.1);
  border: 1.5px solid rgba(44, 197, 232, 0.35);
  border-radius: 10px;
  color: #2cc5e8;
  font-weight: 700;
  font-size: 0.92rem;
  cursor: pointer;
  transition: background 0.18s, transform 0.12s;
}

.prospect-restart-btn:hover {
  background: rgba(44, 197, 232, 0.18);
  transform: translateY(-1px);
}

/* ── Transitions ── */
.q-fade-enter-active,
.q-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.q-fade-enter-from {
  opacity: 0;
  transform: translateX(18px);
}

.q-fade-leave-to {
  opacity: 0;
  transform: translateX(-18px);
}

.exp-slide-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.exp-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
</style>
