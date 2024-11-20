<template>
  <v-app class="d-flex align-center justify-space-between">
    <Header />
    <v-main>
      <nuxt-page />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Luf Movie` : 'Luf Movie'
  }
})
</script>

<style>
/* Add any custom styles here */
</style>
