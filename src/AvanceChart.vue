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
  totalUSD: Number,
  objetivo: Number
})


const chartData = ref({
  labels: ['Avance', 'Objetivo'],
  datasets: [
    {
      label: 'Avance hacia meta',
      backgroundColor: ['#4ade80', '#64748b'],
      data: [props.totalUSD, props.objetivo]
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
const chartDocRef = computed(() => props.userId ? doc(db, 'users', props.userId, 'chart', 'avance') : null)

watch(
  () => [props.totalUSD, props.objetivo],
  async ([totalUSD, objetivo]) => {
    if (chartDocRef.value) {
      await setDoc(chartDocRef.value, {
        totalUSD, objetivo, updatedAt: new Date()
      })
    }
    chartData.value.datasets[0].data = [totalUSD, objetivo]
  },
  { immediate: true }
)

if (chartDocRef.value) {
  onSnapshot(chartDocRef.value, (docSnap) => {
    if (docSnap.exists()) {
      const d = docSnap.data()
      chartData.value.datasets[0].data = [d.totalUSD, d.objetivo]
    }
  })
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto 24px auto;
  background: #181f2a;
  border-radius: 16px;
  padding: 24px 12px 12px 12px;
  box-shadow: 0 2px 8px #0002;
}
</style>
