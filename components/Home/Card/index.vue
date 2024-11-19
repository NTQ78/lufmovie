<template>
  <v-card
    class="movie-card"
    @click="$router.push(`/movie/${movie?.id}`)"
    variant="outlined"
    elevation="2"
    rounded="lg"
  >
    <v-img
      :src="`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`"
    ></v-img>
    <v-card-title class="text-h6 pa-4">{{ movie?.title }}</v-card-title>
    <v-card-subtitle class="d-flex flex-row px-4 mb-4">
      <v-rating
        hover
        :length="5"
        :size="32"
        :model-value="movie?.vote_average / 2"
        active-color="primary"
        class="mr-2"
      ></v-rating>
      <v-chip color="primary">{{ movie?.vote_average }}</v-chip>
    </v-card-subtitle>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps<{
  movie?: any
}>()

const { movie } = toRefs(props)
</script>

<style scoped>
.movie-card {
  margin: 10px;
}
</style>
