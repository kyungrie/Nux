// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'}
      ],
      script: [
        {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'},
        {src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'},
        {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js'},
      ]
    }
  },

  devtools: { enabled: true },

  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
        name: "Persona Store",
        short_name: "PStore",
        theme_color: "#fff",
        background_color: "#fff",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
            {
                src: "images/icons/icon-96x96.png",
                sizes: "96x96",
                type: "image/png"
            },
            {
                src: "images/icons/icon-128x128.png",
                sizes: "128x128",
                type: "image/png"
            },
            {
                src: "images/icons/icon-144x144.png",
                sizes: "144x144",
                type: "image/png"
            },
        ]
    },
    devOptions:{
        enabled: true,
    }
  }
})
