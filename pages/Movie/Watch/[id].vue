<template>
  <div class="">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-breadcrumbs
            bg-color="#1e1e1e"
            color="white"
            rounded="lg"
            icon="mdi-home"
            active-color="red"
          >
            <v-breadcrumbs-item to="/"> Home </v-breadcrumbs-item>
            <v-breadcrumbs-divider></v-breadcrumbs-divider>
            <v-breadcrumbs-item :to="`/movie/${movie.id}`">
              {{ movie.title }}
            </v-breadcrumbs-item>
            <v-breadcrumbs-divider></v-breadcrumbs-divider>
            <v-breadcrumbs-item>Watching</v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12">
          <iframe
            :src="streamingLink"
            width="100%"
            height="500"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const router = useRoute()
const id = ref(router.params.id)
const streamingLink = ref(
  `https://vidsrc.xyz/embed/movie?tmdb=${id.value}&ds_lang=vi`
)
const { $api } = useNuxtApp() as any
const movie = ref({}) as Ref<any>
onMounted(async () => {
  try {
    const { data } = await $api.get(
      `/movie/${id.value}?language=vi-VI&append_to_response=videos,credits,reviews,similar,recommendations,ratings`
    )
    movie.value = data
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped></style>
