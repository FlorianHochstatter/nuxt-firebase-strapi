// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/strapi"
    ],
    runtimeConfig: {
        private: {
            API_PROVIDER_URL: process.env.API_PROVIDER_URL,
            API_PROVIDER_TOKEN: process.env.API_PROVIDER_TOKEN
        },
        public: {
            FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
            FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN
        }
    },
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        admin: '/admin',
        version: 'v4',
        cookie: {},
        cookieName: 'strapi_jwt'
    }
})
