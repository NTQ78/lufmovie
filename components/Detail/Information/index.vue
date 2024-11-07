<template>
  <div>
    <div class="information pa-12">
      <v-row>
        <v-col cols="12">
          <h4 class="text-start">
            <v-icon size="small" class="mr-1"> mdi-calendar </v-icon>
            Released
          </h4>
          <p>
            <v-chip>
              {{ movie.release_date }}
            </v-chip>
          </p>
        </v-col>
        <v-col cols="12">
          <h4 class="text-start">
            <v-icon size="small" class="mr-1"> mdi-movie-filter </v-icon>
            Genres
          </h4>
          <p>
            <v-chip
              v-for="genre in movie.genres"
              :key="genre.id"
              class="ma-1"
              prepend-icon="mdi-movie-filter"
            >
              {{ genre.name }}
            </v-chip>
          </p>
        </v-col>
        <v-col cols="12">
          <h4 class="text-start">
            <v-icon size="small" class="mr-1"> mdi-clock-time-four </v-icon>
            Runtime
          </h4>
          <p>
            <v-chip> {{ movie.runtime }} minutes </v-chip>
          </p>
        </v-col>

        <v-col cols="12">
          <h4 class="text-start">
            <v-icon size="small" class="mr-1"> mdi-star </v-icon>
            Vote Average
          </h4>
          <div>
            <v-chip label>
              <v-rating
                :length="5"
                :size="32"
                :model-value="movie.vote_average / 2"
                active-color="primary"
                class="mr-2"
              />
              <div class="text-h7">
                {{ `${(movie.vote_average / 2).toFixed(2)}/ 5` }}
              </div>
            </v-chip>
          </div>
        </v-col>
        <v-col cols="12">
          <h4 class="text-start">
            <v-icon size="small" class="mr-1">
              mdi-account-group-outline
            </v-icon>
            Company
          </h4>
          <p>
            <v-chip
              v-for="company in movie.production_companies"
              :key="company.id"
              class="ma-1"
              prepend-icon="mdi-domain"
            >
              {{ company.name }}
            </v-chip>
          </p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  movie: any
}>()
</script>

<style lang="scss" scoped>
.information {
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
}
.information h4 {
  color: #cccccc75;
  font-size: 1rem;
  margin-bottom: 10px;
  font-weight: 400;
}
.information p {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
