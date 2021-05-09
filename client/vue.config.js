module.exports = {
  pwa: {
    name: 'fundog',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './public/sw.js',
      // ...other Workbox options...
    },

    // // Manifest configure
    // assetsVersion: '',
    // manifestPath: 'manifest.json',
    // manifestOptions: {},
    // manifestCrossorigin: undefined,
    // iconPaths: {},
  }
}
