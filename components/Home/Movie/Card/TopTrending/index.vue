<template>
  <div class="">
    <Swiper
      :modules="[SwiperParallax, SwiperPagination]"
      :slidesPerView="checkDisplaySize()"
      :freeMode="true"
      :pagination="false"
      :effect="'creative'"
      :speed="500"
      :spaceBetween="10"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1]
        },
        next: {
          translate: ['100%', 0, 0]
        }
      }"
    >
      <SwiperSlide v-for="(item, index) in ListRated" :key="index">
        <div v-if="loader">
          <div class="card" @click="nextPage(item)">
            <div class="blur"></div>

            <div class="">
              <HomeMovieCardTopRatedSubImage :path="item?.poster_path" />
            </div>
            <div class="content">
              <v-chip append-icon="mdi-star" size="small">
                <h4>{{ item.title }}</h4>
              </v-chip>
            </div>
          </div>
        </div>
        <div v-else class="">
          <v-skeleton-loader
            class="mx-auto border"
            max-width="300"
            type="image, article"
          ></v-skeleton-loader>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'

const display = useDisplay()
const { $api } = useNuxtApp() as any
const ListRated = ref<[]>([]) as any
const loader = ref<boolean>(false)
const router = useRouter()
//FUNCTIONS
const checkDisplaySize = () => {
  if (display.xs.value) {
    return 2
  } else if (display.sm.value) {
    return 3
  } else if (display.md.value) {
    return 3
  } else if (display.lg.value) {
    return 4
  } else if (display.xl.value) {
    return 5
  }
}

const getListRated = async () => {
  try {
    const { data } = await $api.get('/movie/now_playing?language=vi&page=1')
    //slice and randomize the genres
    ListRated.value = data.results
  } catch (error) {
    console.log(error)
  } finally {
    loader.value = true
  }
}

const nextPage = (item: any) => {
  router.push(`/movie/${item.id}`)
}
onMounted(() => {
  getListRated()
})
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 260px;
  height: 430px; /* Đặt chiều cao cho thẻ card */
  padding: 20px;
  background-color: #1a1a1a;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.blur {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 10px;
}

.blur:hover {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}
.blur:hover.image-container {
  transform: scale(1.1);
}

.content {
  position: absolute;
  bottom: 5%;
  left: 0;

  color: white;
  width: 100%;

  transition: 0.5s;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;

  h4 {
    font-size: 0.8rem;
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
  }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .card {
    width: 200px;
    height: 280px;

    .image-container img {
      width: 60px;
      height: 80px;
    }
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .card {
    width: 180px;
    height: 220px;

    .image-container img {
      width: 50px;
      height: 70px;
    }
    .content {
      h4 {
        font-size: 0.8rem;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

@media (max-width: 599px) {
  .card {
    width: 120px;
    height: 180px;

    .image-container img {
      width: 40px;
      height: 60px;
    }
    .content {
      h4 {
        font-size: 0.5rem;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
@media (max-width: 376px) {
  .card {
    width: 100px !important;
    height: 150px !important;

    .image-container img {
      width: 30px;
      height: 40px;
    }
  }
}
@media (max-width: 321px) {
  .card {
    width: 85px !important;
    height: 160px !important;

    .image-container img {
      width: 30px;
      height: 40px;
    }
  }
}
</style>
