<template>
  <div class="seaching position-relative">
    <div v-if="loading" class="loading position-absolute">
      <Loading />
    </div>
    <div v-else class="cards">
      <v-container>
        <v-row>
          <v-col
            v-for="item in results"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="2"
          >
            <HomeCard :movie="item" />
          </v-col>
          <v-col cols="12">
            <v-pagination
              v-model="page"
              :length="pageTotal"
              :total-visible="3"
              @prev="previous"
              @next="next"
              @update:model-value="search"
            >
            </v-pagination>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp() as any
const results = ref(null) as any
const route = useRoute()

useHead({
  title: `Search: ${route.query.q}`
})
const loading = ref(false)
const page = ref(1)
const pageTotal = ref(0)
const setSearch = document?.querySelector('.searching') as HTMLElement
const search = async () => {
  try {
    loading.value = true

    const { data } = await $api.get(
      `/search/movie?query=${route.query.q}&language=vi-VI&page=${page.value}`
    )

    results.value = data.results
    pageTotal.value = data.total_pages
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

const previous = () => {
  if (page.value > 1) {
    page.value--
    search()
  }
}

const next = () => {
  if (page.value < pageTotal.value) {
    page.value++
    search()
  }
}
watch(loading, (value) => {
  if (value) {
    setSearch.style.height = '100vh'
  } else {
    setSearch.style.height = 'auto'
  }
})
onMounted(() => {
  search()
})
</script>

<style lang="scss" scoped>
.loading {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
