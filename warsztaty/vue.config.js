module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~vuetify/dist/vuetify.min.css";
        `,
      },
    },
    extract: false
  },

}
