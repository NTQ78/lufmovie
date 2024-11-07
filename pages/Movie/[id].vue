<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <DetailBackdrop :movie="movie" />
        </v-col>
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
          </v-breadcrumbs>
        </v-col>
        <v-col md="8" sm="12">
          <DetailDescription :movie="movie" />
          <DetailCast :credit="movie?.credits" />
        </v-col>
        <v-col md="4" sm="12">
          <DetailInformation :movie="movie" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp() as any
const router = useRoute()
const id = ref(router.params.id)

const movie = ref({}) as Ref<any>
onMounted(async () => {
  try {
    const { data } = await $api.get(
      `/movie/${id.value}?language=vi-VI&append_to_response=videos,credits,reviews,similar,recommendations,ratings`
    )
    movie.value = data
    useHead({
      title: movie.value?.title,
      meta: [
        {
          name: 'description',
          content: movie.value?.overview
        }
      ]
    })
  } catch (error) {
    console.log(error)
  }
})
</script>

<style scoped></style>
