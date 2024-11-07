<template>
  <div>
    <v-container class="pa-0">
      <HomeCarousel />
      <HomeFrame pageTitle="Movies">
        <div class="w-100">
          <HomeMovieSlider
            v-for="item in ListTitle"
            :key="item.title"
            :pageTitle="item.title"
            :slot="item.slot"
          >
            <template #genre>
              <HomeMovieCardGenres />
            </template>
            <template #popular>
              <HomeMovieCardPopular />
            </template>
            <template #topTrending>
              <HomeMovieCardTopTrending />
            </template>
            <template #topRated>
              <HomeMovieCardTopRated />
            </template>
            <template #newRelease>
              <HomeMovieCardUpComing />
            </template>
          </HomeMovieSlider>
        </div>
      </HomeFrame>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'
import { useRouter } from 'vue-router'
import type { Title } from '~/types/movies'

// title of the page
const pageTitle = 'My Page'
useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: 'Get the help you need'
    }
  ]
})
useSeoMeta({
  title: pageTitle,
  description: 'Get the help you need'
})

const ListTitle = ref<Title[]>([
  {
    title: 'Our Genres',
    slot: 'genre'
  },
  {
    title: 'Popular Top 10 In Genres',
    slot: 'popular'
  },
  {
    title: 'Top Trending',
    slot: 'topTrending'
  },
  {
    title: 'New Release',
    slot: 'newRelease'
  },
  {
    title: 'Top Rated',
    slot: 'topRated'
  }
])
</script>

<style lang="scss" scoped></style>
