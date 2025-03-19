<template>
  <div>
    <p>slug: {{ slug }}</p>
    <p>id: {{ id }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const slug = ref(route.params.slug)
const id = ref(route.params.id)
</script>

<style scoped></style>
