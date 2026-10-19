<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  points: { type: Array, default: () => [] },
  label: { type: String, required: true },
})
const active = ref(false)
const cursorX = ref(30)
const positions = computed(() => [...new Set(props.points.map((point) => point.x))].sort((a, b) => a - b))
const selectedPosition = computed(() => Math.max(0, positions.value.indexOf(selected.value[0]?.x)))
const selectedIndex = computed(() => {
  if (!active.value || !props.points.length) return -1
  return props.points.reduce((nearest, point, index) => (
    Math.abs(point.x - cursorX.value) < Math.abs(props.points[nearest].x - cursorX.value) ? index : nearest
  ), 0)
})
const selected = computed(() => {
  const point = props.points[selectedIndex.value]
  return point ? props.points.filter((item) => Math.abs(item.x - point.x) < 0.01) : []
})

function inspect(event) {
  const svg = event.currentTarget
  const matrix = svg.getScreenCTM()
  if (!matrix) return
  const point = svg.createSVGPoint()
  point.x = event.clientX
  point.y = event.clientY
  cursorX.value = Math.max(30, Math.min(390, point.matrixTransform(matrix.inverse()).x))
}

function startInspect(event) {
  if (event.button !== 0) return
  active.value = true
  event.currentTarget.setPointerCapture(event.pointerId)
  inspect(event)
}

function moveInspect(event) {
  active.value = true
  inspect(event)
}

function selectPosition(value) {
  const position = positions.value[Number(value)]
  if (position == null) return
  cursorX.value = position
  active.value = true
}

function stepSelection(direction) {
  if (!props.points.length) return
  const current = selected.value[0]?.x
  const index = current == null ? (direction > 0 ? -1 : positions.value.length) : positions.value.indexOf(current)
  cursorX.value = positions.value[Math.max(0, Math.min(positions.value.length - 1, index + direction))]
  active.value = true
}
</script>

<template>
  <div class="chart-inspector">
    <div class="inspector-stage">
      <slot />
      <svg
        class="inspector-overlay"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid meet"
        tabindex="0"
        role="group"
        :aria-label="`${label}. Pulsa las flechas izquierda y derecha para recorrer los datos.`"
        @pointerdown.stop="startInspect"
        @pointermove="moveInspect"
        @click.stop
        @keydown.left.stop.prevent="stepSelection(-1)"
        @keydown.right.stop.prevent="stepSelection(1)"
        @keydown.enter.stop.prevent="stepSelection(1)"
        @keydown.space.stop.prevent="stepSelection(1)"
        @keydown.esc.stop="active = false"
      >
        <rect width="400" height="200" fill="transparent" />
        <g v-if="selected.length" pointer-events="none">
          <line :x1="cursorX" :x2="cursorX" y1="20" y2="170" stroke="#f8fafc" stroke-dasharray="4 3" />
          <circle v-for="(point, index) in selected" :key="index" :cx="point.x" :cy="point.y" r="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
        </g>
      </svg>
    </div>
    <label class="inspector-navigation" @click.stop @keydown.stop>
      <span>Recorrer operaciones</span>
      <input
        type="range"
        min="0"
        :max="Math.max(0, positions.length - 1)"
        step="1"
        :value="selectedPosition"
        :disabled="!positions.length"
        :aria-label="`Recorrer ${label}`"
        :aria-valuetext="selected.map((point) => point.label).join(', ')"
        @input="selectPosition($event.target.value)"
      />
    </label>
    <div class="inspector-details" @click.stop>
      <template v-if="selected.length">
        <article v-for="(point, index) in selected" :key="index">
          <strong>{{ point.label }}</strong>
          <p v-for="(detail, i) in point.details" :key="i">{{ detail }}</p>
        </article>
      </template>
      <p v-else>Mueve el cursor por el eje X o desliza el control para ver las operaciones.</p>
    </div>
  </div>
</template>

<style scoped>
.inspector-stage { position: relative; line-height: 0; }
.inspector-overlay { position: absolute; inset: 0; width: 100%; height: 100%; cursor: crosshair; touch-action: pan-y; }
.inspector-overlay:focus-visible { outline: 2px solid #38bdf8; outline-offset: 2px; border-radius: 4px; }
.inspector-navigation { display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.75rem; color: #94a3b8; font-size: 0.75rem; cursor: default; }
.inspector-navigation input { width: 100%; margin: 0; accent-color: #38bdf8; cursor: ew-resize; }
.inspector-details { margin-top: 0.75rem; padding: 0.75rem; min-height: 4rem; max-height: 12rem; overflow-y: auto; border: 1px solid #334155; border-radius: 0.5rem; color: #cbd5e1; background: rgba(15, 23, 42, 0.7); font-size: 0.8rem; cursor: default; }
.inspector-details strong { color: #f8fafc; }
.inspector-details p { margin: 0.3rem 0; line-height: 1.5; }
.inspector-details article + article { margin-top: 0.6rem; padding-top: 0.6rem; border-top: 1px solid #334155; }
</style>
