import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3', // TMDB API base URL
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTU5OTFhYmI4YzRlYWYwODcyZTI5YTU0ZDg0MDY4YyIsIm5iZiI6MTczMDc0MjQ2MS44ODc3MjgsInN1YiI6IjY3MjkwNzZlMjI4MmZlMGU1YjhiYTIyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.54C41QrCOYiX6ENR-mvp-5DEjAxI8nfaQqYmgHGvRio`
    }
  })

  // Make the axios instance available globally
  nuxtApp.provide('api', api)
})
