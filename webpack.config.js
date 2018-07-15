module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: require('path').resolve(__dirname, 'dist'), // eslint-disable-line global-require
    filename: 'bundle.js',
  },
  devServer: {
    open: true,
    openPage: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
};
