<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-space-between align-center">
            <h2 class="text-lg-h5 text-capitalize text-white text-sm-h6">
              {{ pageTitle }}
            </h2>
            <v-btn
              v-show="showBtn"
              class="text-h7"
              color="primary"
              variant="outlined"
            >
              View All
              <v-icon class="ml-1"> mdi-chevron-triple-right </v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <slot :name="slot" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  pageTitle: string
  slot: string
  showBtn?: boolean
}>()
const { pageTitle, slot, showBtn } = toRefs(props)
</script>

<style scoped></style>
