<template>
  <div>
    <v-img
      position="50% 50%"
      rounded="lg"
      class="mx-auto"
      :aspect-ratio="display.xs.value ? 1 / 1.5 : 16 / 9"
      max-height="700"
      gradient="to top, rgba(0,0,0,.5), rgba(0,0,0,.5)"
      lazy-src="https://picsum.photos/id/63/5000/2813"
      :src="
        movie.backdrop_path
          ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
          : 'https://bad.src/not/valid'
      "
      cover
      transition="scale-transition"
    >
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            color="grey-lighten-4"
            indeterminate
          ></v-progress-circular>
        </div>
      </template>

      <div class="content">
        <div class="title">
          <h1 class="font-weight-black">
            {{ movie.title }}
          </h1>
        </div>
        <div class="button mt-2">
          <div class="first-btn">
            <v-btn
              color="primary"
              prepend-icon="mdi-google-play"
              rounded="lg"
              size="large"
              :width="display.xs ? '250px' : 'auto'"
              :to="`watch/${movie.id}`"
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
    </v-img>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'

const props = defineProps<{
  movie: any
}>()
const display = useDisplay()
const { movie } = toRefs(props)
</script>

<style scoped>
.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  bottom: 0;

  padding: 20px;

  color: white;
}
h1 {
  font-size: 4.5rem;
  text-align: center;
  margin: 0;
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

@media screen and (max-width: 600px) {
  h1 {
    font-size: 1.8rem;
  }
  .button {
    flex-direction: column;
    gap: calc(1rem + 0.25rem);
  }
  .button .first-btn {
    display: block;
    margin-right: 0;
  }
}
</style>
