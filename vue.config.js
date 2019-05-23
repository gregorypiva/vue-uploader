module.exports = {
  configureWebpack: {
      output: {
          library: "VueUploader",
          libraryExport: 'default'
      },
  },
  css: {
      extract: false
  }
}