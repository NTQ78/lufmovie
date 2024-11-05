import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  const target = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (target.value) {
      observer = new IntersectionObserver(callback, options)
      observer.observe(target.value)
    }
  })

  onUnmounted(() => {
    if (observer && target.value) {
      observer.unobserve(target.value)
    }
  })

  return { target }
}
