const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');

module.exports = {
    entry: {
        app: './app.js'
    },
    module: {
        rules: [
          {
            test: /\.pug$/,
            use: [
              "raw-loader",
              "pug-html-loader"
            ]
          }
        ],
        noParse: function (content) {
            return /express/.test(content);
        }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'views/index.pug',
        filename: 'index.html'
      }),
      new HtmlWebpackPlugin({
        template: 'views/nosotros.pug',
        filename: 'nosotros.html'
      }),
      new HtmlWebpackPlugin({
        template: 'views/servicios.pug',
        filename: 'servicios.html'
      }),
      new HtmlWebpackPlugin({
        template: 'views/contacto.pug',
        filename: 'contacto.html'
      })
    ],
    mode: 'production',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};