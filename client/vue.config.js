module.exports = {
  devServer: {
    proxy: 'http://localhost:5000',
  },
  pwa: {
    name: 'fundog',
    themeColor: '#4DBA87',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    //appleMobileWebAppStatusBarStyle: 'black',

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
    manifestOptions: {
      name: 'Fundog',
      display: 'standalone',
      short_name: 'fdg'
    },
    // manifestCrossorigin: undefined,
    // iconPaths: {},
  },
};
