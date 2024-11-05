<template>
  <v-container class="my-carousel mb-16">
    <v-carousel
      :show-arrows="false"
      height="600"
      hide-delimiter-background
      cycle
      interval="100000"
      continuous
      delimiter-icon="mdi-minus"
      touch
      color="transparent"
    >
      <div v-for="(item, i) in src" :key="i">
        <v-carousel-item
          :src="item.source"
          cover
          rounded="lg"
          max-height="600"
          lazy-src="https://placehold.co/1280x600/png"
        >
          <div class="blur"></div>
          <div class="content text-center">
            <h2 class="font-weight-black">{{ item.title }}</h2>
            <p class="text-body-1 text-grey">
              {{ item.description }}
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
const src = [
  {
    source: '_nuxt/assets/images/AdobeStock_825470510_Preview.jpeg',
    title: 'John Wick',
    description:
      'John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit'
  },
  {
    source: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    title: 'Sky',
    description:
      'Sky is everything that lies above the surface of the Earth, including the atmosphere and outer space'
  },
  {
    source: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    title: 'Bird',
    description:
      'Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton'
  }
]
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
