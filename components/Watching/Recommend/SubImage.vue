<template>
  <div class="image-container">
    <img :src="`https://image.tmdb.org/t/p/original${props.path}`" alt="" />
  </div>
</template>

<script setup lang="ts">
//props id
const props = defineProps<{
  path?: string
}>()
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  height: 100%;
}
.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 5%;
  object-fit: contain;
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .image-container img {
    width: 100%;
    height: 200px;
  }
}

@media (min-width: 960px) and (max-width: 1279px) {
  .image-container img {
    width: 100%;
    height: 250px;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .image-container img {
    width: 100%;
    height: 190px;
  }
}

@media (max-width: 599px) {
  .image-container img {
    width: 100%;
    height: 150px;
  }
}
@media (max-width: 376px) {
  .image-container img {
    width: 100%;
    height: 130px;
  }
}
</style>
