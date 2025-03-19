<template>
  <div class="login-container">
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="formData.username"
        label="Username"
        required
      ></v-text-field>
      <v-text-field
        v-model="formData.password"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-form>
    <div id="bottomBTN" class="">
      <div class=""></div>
      <v-btn @click="refreshNuxtData('popularMovies')">Refresh count</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: ''
})

const handleSubmit = () => {}

definePageMeta({
  layout: 'LoginLayout'
})
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
</style>
