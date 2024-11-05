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
            <v-btn-group class="">
              <v-btn class="mr-4" color="primary" size="small">
                <v-icon class="mr-2"> mdi-google-play </v-icon>
                Play Now</v-btn
              >
              <v-btn class="mr-4" color="black" icon="mdi-plus"> </v-btn>
              <v-btn class="mr-4" color="black" icon="mdi-thumb-up-outline">
              </v-btn>
              <v-btn class="mr-4" color="black" icon="mdi-heart-outline">
              </v-btn>
            </v-btn-group>
          </div>
        </v-carousel-item>
      </div>
    </v-carousel>
  </v-container>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp() as any
const ListMovies = ref([]) as Ref<any[]>
onMounted(async () => {
  try {
    const { data } = await $api.get('/movie/popular?language=en-US&page=1')
    ListMovies.value = data.results.slice(3, 6)
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
