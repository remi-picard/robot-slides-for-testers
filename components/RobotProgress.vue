<template>
  <div v-if="showRobot" class="robot-progress-container" :style="robotStyle">
    <img src="/images/Robot-framework-logo.png" class="robot"/>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()
const showRobot = ref(true)

const robotStyle = computed(() => {
  const total = $slidev.nav.total
  const current = $slidev.nav.currentPage
  const progress = total > 1 ? (current - 1) / (total - 1) : 0
  return {
    left: `calc(${progress * 100}% - ${progress * 25}px)` // Adjusting for robot width
  }
})

watch(() => $slidev.nav.currentPage, () => {
  showRobot.value = true
  setTimeout(() => {
    showRobot.value = false
  }, 1000)
}, { immediate: true })
</script>

<style>
.robot-progress-container {
  position: fixed;
  bottom: 20px;
  width: 25px;
  height: 25px;
  z-index: 1000;
  transition: left 1s ease-in-out;
}

.robot {
  animation: spin 1s linear infinite;
  width: 25px;
  height: 25px;
}

@keyframes spin {
  from {
    transform: rotate(-360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
