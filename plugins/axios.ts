import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3', // TMDB API base URL
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_KEY}` // TMDB API key
    }
  })

  // Make the axios instance available globally
  nuxtApp.provide('api', api)
})
