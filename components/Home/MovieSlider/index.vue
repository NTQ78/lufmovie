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
            <div v-show="!showBtn" class="icon_slider">
              <v-icon size="small"> mdi-chevron-triple-right </v-icon>
            </div>
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
</script>

<style lang="scss" scoped>
.icon_slider:deep() {
  .v-icon {
    margin-right: 20px;
    animation: identifier 3s infinite;
  }
}
@keyframes identifier {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
