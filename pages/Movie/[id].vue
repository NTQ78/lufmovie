<template>
  <div class="">
    <v-container fluid>
      <h1>Product Page</h1>
      <p>Product ID: {{ id }}</p>
      <iframe
        :src="streamingLink"
        width="100%"
        height="500"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const router = useRoute()
const id = ref(router.params.id)
const streamingLink = ref(
  `https://streamapi.idnmarket.biz.id/embed/movie?tmdb=533535`
)
</script>

<style scoped></style>
