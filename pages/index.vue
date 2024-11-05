<template>
  <div>
    <v-container class="pa-6 pa-md-12">
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
              <HomeMovieCard />
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
    title: 'Popular',
    slot: 'popular'
  },
  {
    title: 'Top Rated',
    slot: 'topRated'
  },
  {
    title: 'New Release',
    slot: 'newRelease'
  }
])
</script>

<style lang="scss" scoped></style>
