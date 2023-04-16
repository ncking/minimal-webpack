import { resolve } from 'node:path';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';

const env = process.env.NODE_ENV;
const PATH_SRC = resolve('./src')
const PATH_PUBLIC = resolve('./public')

export default {
  entry: `${PATH_SRC}/index.jsx`,
  mode: env,
  target: 'web',
  output: {
    clean: true
  },

  devServer: {
    static: [{
      directory: PATH_PUBLIC,
      watch: true,
    }],
    liveReload: true,
    historyApiFallback: true,
    port: 3001,
  },

  resolve: {
    modules: ['./src', './node_modules'],
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
    alias: {},
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        env == 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            url: false, // disable resolving image urls
          },
        },
        'sass-loader',
      ]
    }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATH_SRC}/index.html`
    }),
    new MiniCssExtractPlugin()
  ]
};