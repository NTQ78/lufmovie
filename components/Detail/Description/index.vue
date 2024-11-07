<template>
  <div>
    <div :class="['description', 'pa-12', { expanded }]" ref="descriptionRef">
      <h1>Description</h1>
      <p>
        {{ formattedBody }}
        <span
          v-if="showButton"
          variant="text"
          @click="toggleExpand"
          size="small"
        >
          {{ expanded ? 'Read Less' : 'Read More' }}
        </span>
      </p>
      <div class=""></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'

const props = defineProps<{
  movie: any
}>()
const { movie } = toRefs(props)
const display = useDisplay()
const expanded = ref(false)
const showButton = ref(false)
const descriptionRef = ref(null)

const toggleExpand = () => {
  expanded.value = !expanded.value
}
const formattedBody = computed(() => {
  const overview = movie.value.overview || ''
  const limit = display.xs.value ? 200 : 500
  showButton.value = overview.length >= limit
  return expanded.value || !showButton.value
    ? overview
    : overview.slice(0, limit).concat('...')
})
onMounted(() => {})
</script>

<style scoped>
.description {
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
}
.description h1 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.description p {
  color: #fff;
  font-size: 1rem;
}
.description p span {
  color: rgb(var(--v-theme-secondary));
  cursor: pointer;

  text-align: center;
}
@media screen and (max-width: 600px) {
  .description h1 {
    font-size: 1.2rem;
  }
  .description p {
    font-size: 0.9rem;
    text-align: start;
  }
}
</style>
