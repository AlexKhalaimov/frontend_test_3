const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const paths = require('./paths')
const path = require('path')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      // 'img': path.resolve(__dirname, './assets/img') 
      // or wherever it is located relative to this file
    },
  },
  

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

        // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.build,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'test task CGP',
      favicon: paths.src + '/assets/img/favicon.ico',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
      // inject: 'body',
    }),

    // ESLint configuration
    // new ESLintPlugin({
    //   files: ['.', 'src', 'config'],
    //   formatter: 'table',
    // }),

    // Prettier configuration
    new PrettierPlugin(),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, use: ['babel-loader'] },

      // Images: Copy image files to build folder
    //   {
    //     test: /\.(?:ico|png|jpg|jpeg|svg|gif)$/,
    //     use: [
    //       {
    //         options: {
    //           name: "[name].[ext]",
    //           outputPath: "assets/img"
    //         },
    //         // loader: 'html-loader'
    //         loader: 'url-loader'
    //         // loader: 'file-loader'
    //       }
    //     ]
    // },
    {
      test: /\.(gif|png|jpeg|jpg|svg)$/,
        use: [
        {
          loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/img/'
          }
        }
      ]
    },

   

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'file-loader',
        options: {
            outputPath:  'assets/fonts',
                   
          },
         },
    ],
  },
}
