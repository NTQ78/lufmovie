<template>
  <div class="mt-8">
    <div class="cast pa-12">
      <h1>Cast</h1>
      <div class="actor">
        <div
          v-for="(item, index) in credit?.cast.slice(0, 6)"
          :key="index"
          class="actor-item"
        >
          <div class="image">
            <v-img
              class="actor-image mx-auto cursor-pointer mb-2"
              :src="`https://image.tmdb.org/t/p/w185${item.profile_path}`"
              position="50% 50%"
              rounded="lg"
              :aspect-ratio="display.xs.value ? 1 / 1 : 1 / 1.5"
              :width="display.xs.value ? 85 : 'auto'"
              height="auto"
              gradient="to top, rgba(0,0,0,.9), rgba(0,0,0,.1)"
              lazy-src="https://picsum.photos/200/300"
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
                  <v-chip size="small">
                    {{ item.character }}
                  </v-chip>
                </div>
              </div>
            </v-img>
          </div>
          <div class="character">
            <v-chip size="small" append-icon="mdi-star">
              {{ item.name }}
            </v-chip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'
const display = useDisplay()
const props = defineProps<{
  credit: any
}>()
const { credit } = toRefs(props)
</script>

<style lang="scss" scoped>
.cast {
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
}
.cast h1 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.actor {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-self: start;
  gap: 20px;
}
.actor-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  bottom: -100px;
  padding: 20px;
  color: white;
  transition: bottom 0.3s;
}
.v-img:hover .content {
  bottom: 0;
}

@media screen and (max-width: 600px) {
  .cast h1 {
    font-size: 1.2rem;
  }
  .content {
    display: none;
  }
}
@media screen and (max-width: 390px) {
  .content {
    display: none;
  }
  .character {
    display: none;
  }
}
</style>
