export default {
  outputPath: 'site',
  mode: 'site',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ]
  ],
  resolve: {
    includes: ['docs'],
  }
};
