<template>
  <v-app class="d-flex justify-space-between align-center">
    <Header />
    <v-main>
      <nuxt-page />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
useHead({
  title: 'My Nuxt App'
})
</script>

<style>
/* Add any custom styles here */
</style>
