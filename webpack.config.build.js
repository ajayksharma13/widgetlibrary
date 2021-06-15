const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const ChunkRenamePlugin = require("webpack-chunk-rename-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const Dotenv = require("dotenv-webpack");

// App directory
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

module.exports = (env, argv) => ({
  context: path.join(__dirname, "/"),
  entry: {
    app: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
    filename: "[name].[hash:10].js",
    chunkFilename: "[name].[hash:10].js",
  },
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
          cache: true,
          parallel: true,
          sourceMap: false,
          compress: {
            drop_console: true,
          },
        },
        extractComments: false,
      }),
    ],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "async",
      automaticNameDelimiter: "_",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          maxSize: 250 * 1024, // 250 KiB
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/,
        resolve: { extensions: [".scss"] },
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", //generating unique classname
            // options: {
            //   importLoaders: 1, // if specifying more loaders
            //   sourceMap: false,
            //   modules: {
            //     localIdentName: '[path]___[name]__[local]___[hash:base64:5]', //babel-plugin-css-module format
            //     //localIdentName: "[path][name]__[local]" //recommended settings by cssloader#local-scope , this option generate unique classname for compiled css
            //   },
            // },
          },
          {
            loader: `postcss-loader`,
            options: {
              options: {},
            },
          },
          "sass-loader?sourceMap",
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new Dotenv({
      path: ".env",
    }),
    new ChunkRenamePlugin({
      initialChunks: true,
      // vendors: "[name].js",
      app: "[name].js",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath("public/index.html"),
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  performance: {
    hints: "error",
  },
  externals: [
    nodeExternals(),
    {
      react: "React",
      "react-dom": "ReactDOM",
      "semantic-ui-react": "semanticUIReact",
    },
  ],
});
