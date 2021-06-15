const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const ChunkRenamePlugin = require("webpack-chunk-rename-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const fs = require("fs");

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

module.exports = (env, argv) => ({
  cache: true,
  context: path.join(__dirname, "/"),
  entry: {
    app: "./index.js",
  },
  mode: "development",
  devtool: "eval-cheap-module-source-map", //'eval-cheap-module-source-map', //'eval' // 'eval-cheap-module-source-map',   // 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
    // minimize: false,   
    // runtimeChunk: "single",
    // splitChunks: {
    //   chunks: "async",
    //   automaticNameDelimiter: "_",
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendors",
    //       chunks: "all",
    //       maxSize: 250 * 1024, // 250 KiB
    //     },
    //   },
    // },
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
        resolve: { extensions: [".css",".scss"] },
        // exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: `postcss-loader`,
            options: {
              plugins: () => [require("autoprefixer")],
              sourceMap: true,
            },
          },
          "sass-loader?sourceMap",
        ],
      },
      {
        test: /\.(less)$/,    
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,       
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        // use: "file-loader?name=[name].[ext]?[hash]",     
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
              outputPath: "assets/images",
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //loader: "url-loader?limit=10000&mimetype=application/font-woff",       
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              mimeType: "application/font-woff",
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //loader: "file-loader",       
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
              outputPath: "assets/fonts",
            },
          },
        ],
      },
      {
        test: /\.otf(\?.*)?$/,   
        //use:
        //"file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf",
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
              mimeType: "application/font-otf",
              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    //new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css",
      ignoreOrder: true
    }),
    new Dotenv({
      path: path.join(__dirname,"dotenv",".env.development"),
    }),
    new ChunkRenamePlugin({
      initialChunks: true,
      vendors: "[name].js",
      app: "[name].js",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath("public/index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/assets", to: "assets" }],
    }),
  ],
  devServer: {
    contentBase: [path.join(__dirname, "dist"), path.join(__dirname, "public")],
    compress: true,
    historyApiFallback: true,
    port: 9005,
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "../../theme.config$": path.join(__dirname, "semantic-ui/theme.config"),
      "images" :  path.join(__dirname, "public/assets/images"),
      "styles" :  path.join(__dirname, "public/assets/styles"),
      "scripts" :  path.join(__dirname, "public/assets/scripts"),
    },
  },
  performance: {
    hints: false,
  }  
});
