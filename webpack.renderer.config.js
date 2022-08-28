const rules = require("./webpack.rules");

rules.push(
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }
      },
      {
        loader: 'sass-loader'
      }
    ]
  },
  {
    test: /\.(png|jpe?g|gif|ico|svg|woff2|woff)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          publicPath: "./../",
          name: "./img/[hash].[ext]",
          //outputPath: ''
        },
      },
    ],
  }
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
};
