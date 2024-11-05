<template>
  <v-app>
    <Header />
    <v-main>
      <nuxt-page />
    </v-main>
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
