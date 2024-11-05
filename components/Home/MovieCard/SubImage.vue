<template>
  <div v-if="loader" class="image-container">
    <img
      :src="`https://image.tmdb.org/t/p/original${ListImgRenges[1]?.poster_path}`"
      alt=""
    />
    <img
      :src="`https://image.tmdb.org/t/p/original${ListImgRenges[2]?.poster_path}`"
      alt=""
    />
    <img
      :src="`https://image.tmdb.org/t/p/original${ListImgRenges[3]?.poster_path}`"
      alt=""
    />
    <img
      :src="`https://image.tmdb.org/t/p/original${ListImgRenges[4]?.poster_path}`"
      alt=""
    />
  </div>
  <div v-else class="image-container">
    <v-skeleton-loader class="mx-auto border" type="image"></v-skeleton-loader>
    <v-skeleton-loader class="mx-auto border" type="image"></v-skeleton-loader>
    <v-skeleton-loader class="mx-auto border" type="image"></v-skeleton-loader>
    <v-skeleton-loader class="mx-auto border" type="image"></v-skeleton-loader>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp() as any

//props id
const props = defineProps<{
  id: number
}>()

const ListImgRenges = ref<any[]>([])
const loader = ref<boolean>(false)
onMounted(async () => {
  try {
    const { data } = await $api.get(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${props.id}`
    )
    ListImgRenges.value = data.results
  } catch (error) {
    console.log(error)
  } finally {
    loader.value = true
  }
})
</script>

<style lang="scss" scoped>
.image-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-self: center;
  justify-self: center;
  gap: 10px;
  height: 50%;
}
.image-container img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.image-container > .v-skeleton-loader {
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.image-container:deep() {
  .v-skeleton-loader__image {
    height: 100px;
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .card {
    width: 170px;
    height: 230px;

    .image-container img {
      width: 70px;
      height: 90px;
    }
    .image-container > .v-skeleton-loader {
      width: 70px;
      height: 90px;
    }
    .image-container:deep() {
      .v-skeleton-loader__image {
        height: 90px;
      }
    }
  }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .card {
    width: 170px;
    height: 220px;

    .image-container img {
      width: 60px;
      height: 80px;
    }
    .image-container > .v-skeleton-loader {
      width: 60px;
      height: 80px;
    }
    .image-container:deep() {
      .v-skeleton-loader__image {
        height: 80px;
      }
    }
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .card {
    width: 150px;
    height: 200px;

    .image-container img {
      width: 50px;
      height: 70px;
    }
    .image-container > .v-skeleton-loader {
      width: 50px;
      height: 70px;
    }
    .image-container:deep() {
      .v-skeleton-loader__image {
        height: 70px;
      }
    }
  }
}

@media (max-width: 599px) {
  .card {
    width: 90px;
    height: 150px;

    .image-container img {
      width: 40px;
      height: 60px;
    }
    .image-container > .v-skeleton-loader {
      width: 40px;
      height: 60px;
    }
    .image-container:deep() {
      .v-skeleton-loader__image {
        height: 60px;
      }
    }
  }
}
@media (max-width: 361px) {
  .card {
    width: 60px;
    height: 130px;

    .image-container img {
      width: 30px;
      height: 40px;
    }
    .image-container > .v-skeleton-loader {
      width: 30px;
      height: 40px;
    }
    .image-container:deep() {
      .v-skeleton-loader__image {
        height: 40px;
      }
    }

    .content {
      h4 {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
