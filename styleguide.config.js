module.exports = {
  styleguideDir: './dist/docs/',
  webpackConfig: Object.assign({}, () => require('./webpack.config.build.js'), {
    optimization: {
      splitChunks: {
        chunks: 'async',
        automaticNameDelimiter: '_',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            maxSize: 1500 * 1024, // 1500 KiB = 1.45 MiB
          },
        },
      },
    },
  }),
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
          description: 'The description for the installation section',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com',
        },
      ],
    },
    {
      name: 'Anexee-Flipcard',
      content: 'node_modules/anexee-flipcard-test/docs/readme.md',
    },
    //   {
    //     name: 'UI Components',
    //     //content: 'docs/ui.md',
    //     components: 'public/app/components/**/*.tsx',
    //     exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
    //     usageMode: 'expand' // 'hide' | 'collapse' | 'expand'
    //   }
  ],
};
