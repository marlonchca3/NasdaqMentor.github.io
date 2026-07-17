<template>
  <div class="big-five-container">
    <!-- Header -->
    <div class="big-five-header">
      <button class="close-btn" @click="emit('close')" title="Cerrar">✕</button>
      <h1>Test Emocional: Cinco Grandes</h1>
      <p class="subtitle">Descubre tu perfil de personalidad</p>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
    </div>
    <p class="progress-text">Pregunta {{ currentQuestion + 1 }} de {{ questions.length }}</p>

    <!-- Main Content -->
    <div class="big-five-content">
      <!-- Questions Phase -->
      <template v-if="!showResults">
        <div class="question-container">
          <p class="dimension-tag">{{ dimensionLabels[currentDimension] }}</p>
          <h2>{{ questions[currentQuestion].text }}</h2>
          
          <div class="scale-container">
            <div class="scale-labels">
              <span class="label-left">Totalmente en desacuerdo</span>
              <span class="label-right">Totalmente de acuerdo</span>
            </div>
            
            <div class="scale-buttons">
              <button
                v-for="value in [1, 2, 3, 4, 5]"
                :key="value"
                class="scale-btn"
                :class="{ active: answers[currentQuestion] === value }"
                @click="selectAnswer(value)"
              >
                {{ value }}
              </button>
            </div>
          </div>

          <div class="navigation">
            <button 
              v-if="currentQuestion > 0"
              class="nav-btn prev"
              @click="previousQuestion"
            >
              ← Anterior
            </button>
            
            <button 
              v-if="currentQuestion < questions.length - 1"
              class="nav-btn next"
              :disabled="answers[currentQuestion] === null"
              @click="nextQuestion"
            >
              Siguiente →
            </button>
            
            <button 
              v-else
              class="nav-btn submit"
              :disabled="!allQuestionsAnswered"
              @click="calculateResults"
            >
              Ver Resultados
            </button>
          </div>
        </div>
      </template>

      <!-- Results Phase -->
      <template v-else>
        <div class="results-container">
          <h2>Tus Resultados</h2>
          
          <div class="results-grid">
            <div 
              v-for="(dimension, index) in dimensions"
              :key="dimension.key"
              class="result-card"
              :class="{ high: results[dimension.key] >= 65, medium: results[dimension.key] >= 35 && results[dimension.key] < 65, low: results[dimension.key] < 35 }"
            >
              <div class="dimension-name">{{ dimension.label }}</div>
              <div class="dimension-score">{{ Math.round(results[dimension.key]) }}%</div>
              <div class="dimension-bar">
                <div class="dimension-fill" :style="{ width: results[dimension.key] + '%' }"></div>
              </div>
              <p class="dimension-description">{{ dimension.descriptions[getScoreLevel(results[dimension.key])] }}</p>
            </div>
          </div>

          <div class="interpretation">
            <h3>Interpretación General</h3>
            <p>{{ getInterpretation() }}</p>
          </div>

          <div class="action-buttons">
            <button class="btn-secondary" @click="restartTest">Hacer Test Nuevamente</button>
            <button class="btn-primary" @click="saveResults">Guardar Resultados</button>
            <button class="btn-secondary" @click="emit('close')">Cerrar</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['close', 'save'])

const currentQuestion = ref(0)
const answers = ref([])
const showResults = ref(false)
const results = ref({})
const questions = ref([])
const lastQuestionsSignature = ref('')

const dimensions = [
  {
    key: 'openness',
    label: 'Apertura',
    descriptions: {
      low: 'Prefieres lo familiar y práctico. Eres tradicional y realista.',
      medium: 'Tienes una buena mezcla de apertura y practicidad.',
      high: 'Eres creativo, curioso y abierto a nuevas experiencias.'
    }
  },
  {
    key: 'conscientiousness',
    label: 'Responsabilidad',
    descriptions: {
      low: 'Eres más espontáneo y flexible. Prefieres la libertad.',
      medium: 'Tienes un buen equilibrio entre organización y flexibilidad.',
      high: 'Eres muy disciplinado, organizado y confiable.'
    }
  },
  {
    key: 'extraversion',
    label: 'Extraversión',
    descriptions: {
      low: 'Eres introvertido. Prefieres la introspección y grupos pequeños.',
      medium: 'Eres amable en grupo pero también disfrutas tiempo solo.',
      high: 'Eres extrovertido, social y energético.'
    }
  },
  {
    key: 'agreeableness',
    label: 'Amabilidad',
    descriptions: {
      low: 'Eres directo y competitivo. Priorizas tus objetivos.',
      medium: 'Tienes un equilibrio entre tu bienestar y el de otros.',
      high: 'Eres muy empático, altruista y cooperativo.'
    }
  },
  {
    key: 'neuroticism',
    label: 'Neuroticismo',
    descriptions: {
      low: 'Eres emocionalmente estable y resiliente.',
      medium: 'Tienes una reactividad emocional típica.',
      high: 'Tienes mayor sensibilidad emocional. Busca apoyo cuando la necesites.'
    }
  }
]

const dimensionLabels = {
  0: 'Apertura (O)',
  1: 'Responsabilidad (C)',
  2: 'Extraversión (E)',
  3: 'Amabilidad (A)',
  4: 'Neuroticismo (N)'
}

const questionPool = {
  0: [
    { text: 'Tengo imaginación activa' },
    { text: 'Disfruto de las cosas simples', reverse: true },
    { text: 'Tengo interés en temas artísticos y estéticos' },
    { text: 'Prefiero trabajar con hechos que con ideas', reverse: true },
    { text: 'Puedo encontrar algo interesante en casi cualquier cosa' },
    { text: 'Me atraen las ideas nuevas y poco comunes' },
    { text: 'Evito probar actividades diferentes', reverse: true },
    { text: 'Me gusta aprender por curiosidad, aunque no sea necesario' },
  ],
  1: [
    { text: 'Soy cuidadoso y detallista' },
    { text: 'Soy desorganizado', reverse: true },
    { text: 'Tengo una tendencia a procrastinar', reverse: true },
    { text: 'Me esfuerzo en todo lo que hago' },
    { text: 'Sigo un plan definido' },
    { text: 'Cumplo mis compromisos aunque me cueste' },
    { text: 'Dejo tareas importantes para última hora', reverse: true },
    { text: 'Mantengo rutinas que me ayudan a rendir mejor' },
  ],
  2: [
    { text: 'Disfruto siendo el centro de atención' },
    { text: 'Soy reservado', reverse: true },
    { text: 'Soy tímido', reverse: true },
    { text: 'Soy la vida de la fiesta' },
    { text: 'Prefiero actividades sociales a estar solo' },
    { text: 'Me siento con energía al estar con otras personas' },
    { text: 'Me cansa socializar por mucho tiempo', reverse: true },
    { text: 'Me resulta fácil iniciar conversaciones' },
  ],
  3: [
    { text: 'Soy compasivo y comprensivo' },
    { text: 'Soy competitivo', reverse: true },
    { text: 'Tengo tendencias a ser crítico', reverse: true },
    { text: 'Me gusta ayudar a otros' },
    { text: 'Soy interesado principalmente en mí mismo', reverse: true },
    { text: 'Intento mantener la armonía en los conflictos' },
    { text: 'Me cuesta considerar el punto de vista ajeno', reverse: true },
    { text: 'Suelo cooperar en lugar de imponerme' },
  ],
  4: [
    { text: 'Me preocupo con frecuencia' },
    { text: 'Soy tranquilo y seguro', reverse: true },
    { text: 'Me siento frustrado fácilmente' },
    { text: 'Soy emocionalmente estable', reverse: true },
    { text: 'Tengo cambios de humor frecuentes' },
    { text: 'Me cuesta soltar pensamientos negativos' },
    { text: 'Me recupero rápido después de un mal día', reverse: true },
    { text: 'Siento tensión incluso cuando todo va bien' },
  ],
}

function shuffleArray(list) {
  const copy = [...list]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function buildRandomQuestions() {
  const byDimension = [0, 1, 2, 3, 4].flatMap((dimension) => {
    const pool = questionPool[dimension] || []
    return shuffleArray(pool)
      .slice(0, 5)
      .map((item) => ({ ...item, dimension }))
  })

  return shuffleArray(byDimension)
}

function questionsSignature(list) {
  return list.map((q) => `${q.dimension}:${q.text}`).join('|')
}

function initializeTest() {
  let nextQuestions = buildRandomQuestions()
  let nextSignature = questionsSignature(nextQuestions)
  let retries = 0

  while (nextSignature === lastQuestionsSignature.value && retries < 10) {
    nextQuestions = buildRandomQuestions()
    nextSignature = questionsSignature(nextQuestions)
    retries += 1
  }

  questions.value = nextQuestions
  lastQuestionsSignature.value = nextSignature
  answers.value = new Array(nextQuestions.length).fill(null)
  currentQuestion.value = 0
  showResults.value = false
  results.value = {}
}

initializeTest()

const progressPercentage = computed(() => {
  const total = questions.value.length || 1
  return ((currentQuestion.value + 1) / total) * 100
})

const allQuestionsAnswered = computed(() => {
  return answers.value.every(answer => answer !== null && answer !== undefined)
})

const currentDimension = computed(() => {
  return questions.value[currentQuestion.value]?.dimension ?? 0
})

function selectAnswer(value) {
  answers.value[currentQuestion.value] = value
}

function nextQuestion() {
  if (answers.value[currentQuestion.value] !== null) {
    currentQuestion.value++
  }
}

function previousQuestion() {
  if (currentQuestion.value > 0) {
    currentQuestion.value--
  }
}

function calculateResults() {
  results.value = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
  }

  const dimensionCounts = {
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0
  }

  questions.value.forEach((q, index) => {
    let score = answers.value[index]
    if (q.reverse) {
      score = 6 - score
    }

    const dimensionKey = ['openness', 'conscientiousness', 'extraversion', 'agreeableness', 'neuroticism'][q.dimension]
    results.value[dimensionKey] += score
    dimensionCounts[q.dimension]++
  })

  // Normalize to 0-100
  Object.keys(results.value).forEach(key => {
    const dimension = dimensions.findIndex(d => d.key === key)
    const count = dimensionCounts[dimension]
    results.value[key] = (results.value[key] / (count * 5)) * 100
  })

  showResults.value = true
}

function getScoreLevel(score) {
  if (score >= 65) return 'high'
  if (score >= 35) return 'medium'
  return 'low'
}

function getInterpretation() {
  const scores = results.value
  const highest = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)
  const lowest = Object.entries(scores).reduce((a, b) => a[1] < b[1] ? a : b)
  
  const highestDim = dimensions.find(d => d.key === highest[0]).label
  const lowestDim = dimensions.find(d => d.key === lowest[0]).label

  return `Tu perfil muestra una puntuación más alta en ${highestDim} y más baja en ${lowestDim}. Esto sugiere que eres particularmente ${highestDim.toLowerCase()} pero menos enfocado en ${lowestDim.toLowerCase()}. Recuerda que cada persona es única y estos resultados son solo indicadores generales.`
}

function restartTest() {
  initializeTest()
}

function saveResults() {
  emit('save', {
    results: results.value,
    answers: answers.value,
    timestamp: new Date()
  })
  alert('Resultados guardados exitosamente!')
}
</script>

<style scoped>
:root {
  --bf-font-title: 'Space Grotesk', 'Segoe UI', Tahoma, Verdana, sans-serif;
  --bf-font-body: 'Sora', 'Segoe UI', Tahoma, Verdana, sans-serif;
  --bf-accent: #2f80ed;
  --bf-accent-2: #f28c28;
  --bf-ink: #eaf2ff;
  --bf-muted: #9bb2cd;
  --bf-panel: rgba(11, 23, 45, 0.9);
  --bf-panel-strong: rgba(8, 16, 34, 0.95);
  --bf-border: rgba(113, 170, 255, 0.34);
}

.big-five-container {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: min(82vh, 900px);
  background:
    radial-gradient(1200px 420px at 6% -20%, rgba(242, 140, 40, 0.16), transparent 60%),
    radial-gradient(1200px 420px at 96% -30%, rgba(47, 128, 237, 0.26), transparent 62%),
    linear-gradient(165deg, #081125 0%, #0b1b34 42%, #0f1c35 100%);
  border: 1px solid var(--bf-border);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 24px 70px rgba(2, 10, 25, 0.58);
  color: var(--bf-ink);
  font-family: var(--bf-font-body);
  animation: bigFiveLiftIn 280ms ease-out;
}

@keyframes bigFiveLiftIn {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.big-five-header {
  position: relative;
  padding: 1.75rem 2rem 1.25rem;
  text-align: center;
  border-bottom: 1px solid rgba(113, 170, 255, 0.2);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0));
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(6, 13, 28, 0.65);
  color: #e9f3ff;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  transition: transform 0.18s ease, background-color 0.18s ease, border-color 0.18s ease;
}

.close-btn:hover {
  transform: translateY(-1px);
  background: rgba(13, 26, 50, 0.85);
  border-color: rgba(113, 170, 255, 0.5);
}

.close-btn:focus-visible {
  outline: 2px solid rgba(113, 170, 255, 0.75);
  outline-offset: 2px;
}

.big-five-header h1 {
  margin: 0;
  font-family: var(--bf-font-title);
  font-weight: 700;
  font-size: clamp(1.35rem, 2.7vw, 2rem);
  letter-spacing: 0.02em;
}

.subtitle {
  margin: 0.45rem 0 0;
  font-size: 0.95rem;
  color: var(--bf-muted);
}

.progress-bar {
  height: 0.45rem;
  background: rgba(255, 255, 255, 0.08);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(
    90deg,
    #ff0033 0%,
    #ff7a00 16%,
    #ffd400 32%,
    #37d67a 48%,
    #00b3ff 64%,
    #5c6cff 80%,
    #a43dff 100%
  );
  background-size: 220% 100%;
  box-shadow: 0 0 18px rgba(164, 61, 255, 0.45);
  transition: width 0.26s ease;
  animation: rainbowFlow 3s linear infinite;
}

@keyframes rainbowFlow {
  from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
}

.progress-text {
  margin: 0;
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #c9dbf2;
  text-transform: uppercase;
}

.big-five-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 2rem 2rem;
  overflow-y: auto;
}

.question-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.dimension-tag {
  margin: 0;
  width: fit-content;
  border: 1px solid rgba(113, 170, 255, 0.45);
  border-radius: 999px;
  background: rgba(22, 46, 88, 0.72);
  color: #dcecff;
  padding: 0.4rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 650;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.question-container h2 {
  margin: 0;
  color: #f1f7ff;
  font-family: var(--bf-font-title);
  font-size: clamp(1.35rem, 2.8vw, 1.9rem);
  line-height: 1.35;
}

.scale-container {
  background: var(--bf-panel);
  border: 1px solid var(--bf-border);
  border-radius: 14px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.scale-labels {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: #b8cde7;
}

.scale-buttons {
  display: grid;
  grid-template-columns: repeat(5, minmax(40px, 1fr));
  gap: 0.65rem;
}

.scale-btn {
  min-height: 2.8rem;
  border-radius: 10px;
  border: 1px solid rgba(113, 170, 255, 0.45);
  background: rgba(8, 20, 40, 0.78);
  color: #d8e8fb;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, background-color 0.18s ease;
}

.scale-btn:hover {
  transform: translateY(-1px);
  border-color: rgba(95, 182, 255, 0.8);
  background: rgba(17, 38, 72, 0.92);
}

.scale-btn.active {
  border-color: rgba(242, 140, 40, 0.85);
  background: linear-gradient(160deg, #2f80ed, #1f5eb2 62%, #f28c28 185%);
  color: #ffffff;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
}

.scale-btn:focus-visible,
.nav-btn:focus-visible,
.btn-primary:focus-visible,
.btn-secondary:focus-visible {
  outline: 2px solid rgba(95, 182, 255, 0.9);
  outline-offset: 2px;
}

.navigation {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.nav-btn,
.btn-primary,
.btn-secondary {
  border-radius: 10px;
  font-family: var(--bf-font-body);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  padding: 0.72rem 1.1rem;
  cursor: pointer;
  transition: transform 0.16s ease, opacity 0.16s ease, border-color 0.16s ease;
}

.nav-btn.prev,
.btn-secondary {
  border: 1px solid rgba(113, 170, 255, 0.42);
  background: rgba(10, 24, 48, 0.8);
  color: #d8e9fb;
}

.nav-btn.next,
.nav-btn.submit,
.btn-primary {
  border: 1px solid rgba(95, 182, 255, 0.32);
  background: linear-gradient(135deg, #2f80ed 0%, #2a68c2 50%, #f28c28 175%);
  color: #ffffff;
}

.nav-btn:hover:not(:disabled),
.btn-primary:hover,
.btn-secondary:hover {
  transform: translateY(-1px);
}

.nav-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.results-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.results-container h2 {
  margin: 0;
  text-align: center;
  font-family: var(--bf-font-title);
  font-size: clamp(1.3rem, 2.7vw, 1.95rem);
  color: #f3f8ff;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;
}

.result-card {
  background: var(--bf-panel-strong);
  border: 1px solid var(--bf-border);
  border-left: 4px solid var(--bf-accent);
  border-radius: 12px;
  padding: 1rem;
}

.result-card.high {
  border-left-color: #1ec58b;
}

.result-card.medium {
  border-left-color: #f5b13f;
}

.result-card.low {
  border-left-color: #ef6a6a;
}

.dimension-name {
  margin-bottom: 0.3rem;
  color: #a9c2df;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.75rem;
  font-weight: 700;
}

.dimension-score {
  margin-bottom: 0.65rem;
  font-family: var(--bf-font-title);
  font-size: 1.7rem;
  line-height: 1;
  color: #f1f7ff;
}

.dimension-bar {
  height: 0.48rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.11);
}

.dimension-fill {
  height: 100%;
  background: linear-gradient(90deg, #2f80ed, #4da4f6, #f28c28);
  transition: width 0.45s ease;
}

.dimension-description {
  margin: 0;
  color: #c6d8ee;
  font-size: 0.83rem;
  line-height: 1.45;
}

.interpretation {
  border: 1px solid rgba(113, 170, 255, 0.35);
  border-radius: 12px;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(47, 128, 237, 0.17), rgba(13, 30, 61, 0.82));
}

.interpretation h3 {
  margin: 0 0 0.5rem;
  font-family: var(--bf-font-title);
  font-size: 1.05rem;
  color: #f4f8ff;
}

.interpretation p {
  margin: 0;
  color: #d3e3f6;
  line-height: 1.58;
}

.action-buttons {
  margin-top: 0.35rem;
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .results-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .big-five-header {
    padding: 1.3rem 1.1rem 1rem;
  }

  .close-btn {
    width: 2rem;
    height: 2rem;
    font-size: 1.05rem;
    top: 0.72rem;
    right: 0.72rem;
  }

  .progress-text {
    padding: 0.65rem 0.8rem;
    font-size: 0.77rem;
  }

  .big-five-content {
    padding: 1.05rem 0.95rem 1.15rem;
  }

  .question-container {
    gap: 1.1rem;
  }

  .scale-labels {
    font-size: 0.72rem;
  }

  .scale-buttons {
    gap: 0.45rem;
  }

  .scale-btn {
    min-height: 2.55rem;
    font-size: 0.95rem;
  }

  .navigation,
  .action-buttons {
    flex-direction: column;
  }

  .nav-btn,
  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}

:global(:root[data-theme='light']) .big-five-container {
  --bf-ink: #102749;
  --bf-muted: #556d8d;
  --bf-panel: rgba(240, 247, 255, 0.88);
  --bf-panel-strong: rgba(247, 251, 255, 0.95);
  --bf-border: rgba(33, 100, 186, 0.26);
  background:
    radial-gradient(1100px 420px at 5% -20%, rgba(242, 140, 40, 0.2), transparent 60%),
    radial-gradient(1100px 420px at 95% -30%, rgba(47, 128, 237, 0.2), transparent 62%),
    linear-gradient(175deg, #f2f7ff 0%, #dfeeff 44%, #e8f2ff 100%);
  box-shadow: 0 20px 60px rgba(9, 49, 101, 0.18);
}

:global(:root[data-theme='light']) .question-container h2,
:global(:root[data-theme='light']) .results-container h2,
:global(:root[data-theme='light']) .interpretation h3,
:global(:root[data-theme='light']) .dimension-score {
  color: #0f2c52;
}

:global(:root[data-theme='light']) .subtitle,
:global(:root[data-theme='light']) .scale-labels,
:global(:root[data-theme='light']) .dimension-description,
:global(:root[data-theme='light']) .interpretation p {
  color: #47678d;
}

:global(:root[data-theme='light']) .nav-btn.prev,
:global(:root[data-theme='light']) .btn-secondary {
  background: rgba(255, 255, 255, 0.78);
  color: #20456e;
}
</style>
