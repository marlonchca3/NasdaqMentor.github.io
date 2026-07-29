<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const container = ref(null)

let scene
let camera
let renderer
let cube
let animationId
let resizeObserver

function resizeCanvas() {
  if (!container.value || !renderer || !camera) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()

  renderer.setSize(width, height, false)
}

function animate() {
  animationId = requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.015

  renderer.render(scene, camera)
}

onMounted(() => {
  const width = container.value.clientWidth
  const height = container.value.clientHeight

  // Escena
  scene = new THREE.Scene()
  scene.background = new THREE.Color('#111827')

  // Cámara
  camera = new THREE.PerspectiveCamera(
    50,
    width / height,
    0.1,
    1000
  )

  camera.position.z = 5

  // Cubo
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshNormalMaterial()

  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // Renderizador
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)

  container.value.appendChild(renderer.domElement)

  resizeObserver = new ResizeObserver(resizeCanvas)
  resizeObserver.observe(container.value)

  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)

  resizeObserver?.disconnect()

  cube?.geometry.dispose()
  cube?.material.dispose()
  renderer?.dispose()

  if (renderer?.domElement?.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement)
  }
})
</script>

<template>
  <div ref="container" class="three-cube"></div>
</template>

<style scoped>
.three-cube {
  width: 100%;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
  border-radius: 16px;
}

.three-cube canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>