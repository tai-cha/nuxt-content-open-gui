// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'src/',
  typescript: {
    shim: true,
    strict: true,
    typeCheck: false,
  },
  devtools: { enabled: true }
})
