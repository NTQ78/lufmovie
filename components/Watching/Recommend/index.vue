<template>
  <div class="mt-8">
    <div class="recommend pa-12">
      <h1>Recommend</h1>
      <Swiper
        :modules="[SwiperParallax, SwiperPagination]"
        :slidesPerView="checkDisplaySize()"
        :freeMode="true"
        :pagination="false"
        :effect="'creative'"
        :speed="500"
        :space-between="checkSpaceSize()"
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
        <SwiperSlide v-for="(item, index) in movie?.results" :key="index">
          <div v-if="item">
            <div class="card" @click="nextPage(item)">
              <div class="blur"></div>

              <div class="">
                <WatchingRecommendSubImage :path="item?.poster_path" />
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
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'

const display = useDisplay()
const { $api } = useNuxtApp() as any

const loader = ref<boolean>(false)
const router = useRouter()

const props = defineProps<{
  movie: any
}>()
const { movie } = toRefs(props)

//FUNCTIONS
const checkDisplaySize = () => {
  if (display.xs.value) {
    return 2
  } else if (display.sm.value) {
    return 3
  } else if (display.md.value) {
    return 2
  } else if (display.lg.value) {
    return 4
  } else if (display.xl.value) {
    return 3
  }
}
const checkSpaceSize = () => {
  if (display.xs.value) {
    return 70
  } else if (display.sm.value) {
    return 70
  } else if (display.md.value) {
    return 30
  } else if (display.lg.value) {
    return 30
  } else if (display.xl.value) {
    return 30
  }
}

const nextPage = (item: any) => {
  router.push(`/movie/${item.id}`)
}
</script>

<style lang="scss" scoped>
.recommend {
  background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 20px;
}
.recommend h1 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
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
    width: 140px;
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
    width: 160px;
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
    width: 110px;
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
    width: 90px !important;
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
