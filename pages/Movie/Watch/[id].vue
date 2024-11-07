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
            <v-breadcrumbs-item color="red">Watching</v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12">
          <div class="embet-video">
            <iframe
              :src="streamingLink"
              frameborder="0"
              allowfullscreen
              picture-in-picture
              autoplay
              aspect-ratio="16/9"
              width="100%"
              :height="setHeight"
            ></iframe>
          </div>
        </v-col>
        <v-col md="8" sm="12">
          <DetailDescription :movie="movie" />
          <watching-recommend :movie="movie?.recommendations" />
        </v-col>
        <v-col md="4" sm="12">
          <DetailInformation :movie="movie" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'

// Variables
const router = useRoute()
const display = useDisplay()
const id = ref(router.params.id)

const streamingLink = ref(
  `https://vidsrc.xyz/embed/movie?tmdb=${id.value}&ds_lang=vi&ds_player=auto&ds_theme=dark&ds_fullscreen=true&ds_autoplay=true&ds_mute=true&ds_seekbar=true&ds_seekbar_color=red&ds_seekbar_height=5&ds_seekbar_buffer=true&ds_seekbar_buffer_color=grey&ds_seekbar_buffer_opacity=0.5&ds_seekbar_background=true&ds_seekbar_background_color=black&ds_seekbar_background_opacity=0.5&ds_seekbar_time=true&ds_seekbar_time_color=white&ds_seekbar_time_background=true&ds_seekbar_time_background_color=black&ds_seekbar_time_background_opacity=0.5&ds_seekbar_time_fontsize=12&ds_seekbar_time_fontweight=normal&ds_seekbar_time_fontfamily=Arial&ds_seekbar_time_padding=5&ds_seekbar_time_margin=5&ds_seekbar_time_border_radius=5&ds_seekbar_time_border_width=1&ds_seekbar_time_border_color=white&ds_seekbar_time_border_style=solid&ds_seekbar_time_opacity=1&ds_seekbar_time_hover_color=red&ds_seekbar_time_hover_background_color=black&ds_seekbar_time_hover_opacity=0.5&ds_seekbar_time_hover_fontsize=12&ds_seekbar_time_hover_fontweight=normal&ds_seekbar_time_hover_fontfamily=Arial&ds_seekbar_time_hover_padding=5&ds_seekbar_time_hover_margin=5&ds_seekbar_time_hover_border_radius=5&ds_seekbar_time_hover_border_width=1&ds_seekbar_time_hover_border_color=white&ds_seekbar_time_hover_border_style=solid&ds_seekbar_time_hover_opacity=1&ds_seekbar_time_hover_hover_color=red&ds_seekbar_time_hover_hover_background_color=black&ds_seekbar_time_hover_hover_opacity=0.5&ds_seekbar_time_hover_hover_fontsize=12&ds_seekbar_time_hover_hover_fontweight=normal&ds_seekbar_time_hover_hover_fontfamily=Arial&ds_seekbar_time_hover_hover_padding=5&ds_seekbar_time_hover_hover_margin=5&ds_seekbar_time_hover_hover_border_radius=5&ds_seekbar_time_hover_hover_border_width=1&ds_seekbar_time_hover_hover_border_color=white&ds_seekbar_time_hover_hover_border_style=solid&ds_seekbar_time_hover_hover_opacity=1&ds_seekbar_time_hover_hover_hover_color=red&ds_seekbar_time_hover_hover_hover_background_color=black&ds_seekbar_time_hover_hover_hover_opacity=0.5`
)
const { $api } = useNuxtApp() as any
const movie = ref({}) as Ref<any>

// Methods
const setHeight = computed(() => {
  return display.xs.value ? 200 : 600
})

onMounted(async () => {
  try {
    const { data } = await $api.get(
      `/movie/${id.value}?language=vi-VI&append_to_response=videos,credits,reviews,similar,recommendations,ratings`
    )
    movie.value = data
    useHead({
      title: movie.value.title,
      meta: [
        {
          name: 'description',
          content: movie.value.overview
        }
      ]
    })
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>
.embed-video {
  width: 100%;
  overflow: hidden;

  iframe {
    width: 100%;
  }
}
</style>
