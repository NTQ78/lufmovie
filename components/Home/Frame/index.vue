<template>
  <v-container>
    <div class="frame pa-lg-16 pa-sm-2">
      <div class="button">
        <v-btn class="text-capitalize text-h7" color="primary" size="small">
          {{ pageTitle }}
        </v-btn>
      </div>
      <slot />
    </div>
  </v-container>
</template>

<script setup lang="ts">
//props
const props = defineProps<{
  pageTitle: string
}>()

const { pageTitle } = props
</script>

<style lang="scss" scoped>
.frame {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  height: auto;
  width: 100%;
  border: 1px solid #ffffff0c;
  border-radius: 10px;

  .button {
    position: absolute;
    top: -2%;
    left: 5%;
  }
}
</style>
