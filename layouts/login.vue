<template>
  <v-app light>
    <v-main>
      <v-container fluid fill-height class="bg-login">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LoginLayout',
  data() {
    return {}
  },
  mounted() {
    this.$vuetify.theme.dark = false
  }
}
</script>

<style scoped lang="scss">
.bg-login {
  background: url('~/assets/image/bg-login-1.jpg') no-repeat center bottom fixed;
  background-size: cover;
}
</style>
