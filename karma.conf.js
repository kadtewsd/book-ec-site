const args = process.argv;
args.splice(0, 4);

const polyfills = [];

const files = polyfills.concat(args);

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: files,
    preprocessors: {
      '**/*.spec.ts': ['webpack'],
      '**/*.spec.tsx': ['webpack']
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    // list of files to exclude
    exclude: [
    ],
    webpack: {
      resolve: {
        extensions: ['.ts', '.js', ".tsx"]
      },
      module: {
        loaders: [
        ],
        rules: [
          {
            test: /\.(ts|tsx)?$/,
            use: [
              { loader: "ts-loader" }
            ]
          },
          {
            test: /\.css$/, loader: "style-loader!css-loader"
          }
        ]
      }
    },
    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
};

