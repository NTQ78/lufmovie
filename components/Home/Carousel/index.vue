<template>
  <v-container class="my-carousel mb-16">
    <v-carousel
      v-if="ListMovies.length"
      :show-arrows="false"
      height="600"
      hide-delimiter-background
      cycle
      interval="5000"
      continuous
      delimiter-icon="mdi-minus"
      touch
      color="transparent"
    >
      <div v-for="(item, i) in ListMovies" :key="i">
        <v-carousel-item
          :src="`https://image.tmdb.org/t/p/original${item?.backdrop_path}`"
          cover
          rounded="lg"
          max-height="600"
          lazy-src="https://placehold.co/1280x600/png"
        >
          <div class="blur"></div>
          <div class="content text-center">
            <h2 class="font-weight-black">{{ item.original_title }}</h2>
            <p class="text-body-1 text-grey">
              {{ item.overview }}
            </p>
            <div class="button mt-2">
              <div class="first-btn">
                <v-btn
                  color="primary"
                  prepend-icon="mdi-google-play"
                  rounded="lg"
                  size="large"
                  :width="display.xs ? '250px' : 'auto'"
                  :to="`watch/${item.id}`"
                >
                  Play Now
                </v-btn>
              </div>
              <div class="d-flex flex-row">
                <v-btn class="mr-4" color="black" icon="mdi-plus" rounded="lg">
                </v-btn>
                <v-btn
                  class="mr-4"
                  color="black"
                  icon="mdi-thumb-up-outline"
                  rounded="lg"
                >
                </v-btn>
                <v-btn
                  class="mr-4"
                  color="black"
                  icon="mdi-heart-outline"
                  rounded="lg"
                >
                </v-btn>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </div>
    </v-carousel>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'
const { $api } = useNuxtApp() as any
const ListMovies = ref([]) as Ref<any[]>
const display = useDisplay()

onMounted(async () => {
  try {
    const { data } = await $api.get('/movie/popular?language=vi-VI&page=1')
    ListMovies.value = data.results.slice(0, 3)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped>
.my-carousel:deep() {
  position: relative;

  .v-carousel__controls__item .v-icon {
    color: rgba(255, 255, 255, 0.562);
    opacity: 1;
    font-size: 3rem;
  }
  .v-btn--active .v-icon {
    color: red;
  }

  .v-btn--active > .v-btn__overlay {
    opacity: 0;
  }

  .blur {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .content {
    position: absolute;
    bottom: -10%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 50%;
    padding: 1rem;
    transition: 0.5s;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
}
.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.button .first-btn {
  margin-right: 1rem;
}

@media screen and (max-width: 1024px) {
  .my-carousel:deep() {
    .v-carousel {
      height: auto !important;
    }
  }

  .content {
    width: 80% !important;
    bottom: -10% !important;
  }
}

@media screen and (max-width: 430px) {
  .my-carousel {
    display: none;
  }
}
</style>
