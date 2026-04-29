<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { ref, watch, computed } from 'vue'
import { db } from './firebase'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const props = defineProps({
  userId: String,
  oneR: Number,
  objetivo: Number,
  totalR: Number,
  totalUSD: Number,
  restanR: Number,
  restanUSD: Number
})

const chartData = ref({
  labels: ['Avanzado', 'Total R', 'Total USD', 'Restan R', 'Restan USD'],
  datasets: [
    {
      label: 'Meta de Evaluación',
      backgroundColor: [
        '#4ade80', '#60a5fa', '#fbbf24', '#f87171', '#a78bfa'
      ],
      data: [props.totalUSD, props.totalR, props.totalUSD, props.restanR, props.restanUSD]
    }
  ]
})

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false }
  },
  scales: {
    y: { beginAtZero: true }
  }
}

// Firestore sync
const chartDocRef = computed(() => props.userId ? doc(db, 'users', props.userId, 'chart', 'meta') : null)

watch(
  () => [props.oneR, props.objetivo, props.totalR, props.totalUSD, props.restanR, props.restanUSD],
  async ([oneR, objetivo, totalR, totalUSD, restanR, restanUSD]) => {
    if (chartDocRef.value) {
      await setDoc(chartDocRef.value, {
        oneR, objetivo, totalR, totalUSD, restanR, restanUSD, updatedAt: new Date()
      })
    }
    chartData.value.datasets[0].data = [totalUSD, totalR, totalUSD, restanR, restanUSD]
  },
  { immediate: true }
)

if (chartDocRef.value) {
  onSnapshot(chartDocRef.value, (docSnap) => {
    if (docSnap.exists()) {
      const d = docSnap.data()
      chartData.value.datasets[0].data = [d.totalUSD, d.totalR, d.totalUSD, d.restanR, d.restanUSD]
    }
  })
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #181f2a;
  border-radius: 16px;
  padding: 24px 12px 12px 12px;
  box-shadow: 0 2px 8px #0002;
}
</style>
