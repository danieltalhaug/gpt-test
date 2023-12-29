// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
    devtools: { enabled: true },
    runtimeConfig: {
        OPENAI_API_KEY: '',
        OPENAI_MODEL: '',
    },
});
