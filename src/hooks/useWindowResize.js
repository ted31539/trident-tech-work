import { ref, onMounted, onUnmounted } from 'vue'
import CONFIGS from '@/configs'

function useWindowResize() {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)
  const isMobile = ref(width.value <= CONFIGS.MOBILE_BREAKPOINT)

  function handler() {
    width.value = window.innerWidth
    height.value = window.innerHeight
    isMobile.value = window.innerWidth <= CONFIGS.MOBILE_BREAKPOINT
  }

  onMounted(() => window.addEventListener('resize', handler))
  onUnmounted(() => window.removeEventListener('resize', handler))

  return { width, height, isMobile }
}

export default useWindowResize
