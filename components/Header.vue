<template>
  <header class="header">
    <div class="logo">
      <img src="images/logo.png" alt="Logo" />
    </div>
    <v-text-field
      class="text-field"
      append-inner-icon="mdi-magnify"
      density="compact"
      variant="outlined"
      hide-details
      single-line
      max-width="500"
      color="#ffffff"
      bg-color="transparent"
      base-color="#ffffff"
    >
      <template #label>
        <span class="text-white text-body-2">What do you want to watch?</span>
      </template>
    </v-text-field>
    <nav>
      <ul>
        <div class="button_toggle">
          <v-icon class="mr-2"> mdi-bell-outline </v-icon>
          <v-icon>mdi-account</v-icon>
        </div>
      </ul>
    </nav>
    <v-icon
      class="hamburger"
      color="primary"
      size="x-large"
      @click="toggleMenu"
    >
      mdi-hamburger
    </v-icon>

    <v-dialog
      v-model="isMenuOpen"
      transition="dialog-bottom-transition"
      fullscreen
    >
      <v-card>
        <v-toolbar color="primary">
          <v-toolbar-title> Menu </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn icon="mdi-close" @click="isMenuOpen = false"></v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list lines="two" subheader>
          <v-list-subheader>Search</v-list-subheader>
          <div class="px-4 mb-4">
            <v-text-field
              append-inner-icon="mdi-magnify"
              density="compact"
              variant="outlined"
              hide-details
              single-line
              color="primary"
              bg-color="transparent"
              base-color="#ffffff"
            >
              <template #label>
                <span class="text-white text-body-2"
                  >What do you want to watch?</span
                >
              </template>
            </v-text-field>
          </div>

          <v-divider></v-divider>

          <v-list-subheader>General</v-list-subheader>

          <v-list-item
            subtitle="Settings your account preferences"
            title="Account"
            @click="isMenuOpen = false"
          >
            <template v-slot:prepend>
              <v-list-item-action>
                <v-icon> mdi-account </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item
            subtitle="List of your favorite movies"
            title="Wishlist"
            @click="isMenuOpen = false"
          >
            <template v-slot:prepend>
              <v-list-item-action>
                <v-icon> mdi-heart </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item title="Notifications" @click="isMenuOpen = false">
            <template v-slot:prepend>
              <v-list-item-action>
                <v-icon> mdi-bell </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const notifications = ref(false)
const sound = ref(false)
const widgets = ref(false)

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      document.querySelector('.header').style.boxShadow =
        '0 2px 5px rgb(var(--v-theme-box-shadow))'
    } else {
      document.querySelector('.header').style.boxShadow = 'none'
    }
  })
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 8rem;
  background-color: transparent;
  backdrop-filter: blur(20px);
  color: #fff;
}

.logo img {
  height: 50px;
}

nav {
  display: flex;
}

nav ul {
  display: flex;

  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: rgb(var(--v-theme-border-color));
  text-decoration: none;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
}

@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .text-field {
    display: none;
  }

  nav {
    display: none;
  }

  nav.open {
    display: flex;

    width: 100%;
  }

  .hamburger {
    display: flex;
  }
}
</style>
