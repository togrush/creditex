const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PugPlugin = require('pug-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'development',
  entry: {
    uiKit: './src/pages/ui-kit/ui-kit.pug',
    index: './src/pages/main/main.pug',
    entrepreneur: './src/pages/entrepreneur/entrepreneur.pug',
    partners: './src/pages/partners/partners.pug',
    authorization: './src/pages/authorization/authorization.pug',
    registration: './src/pages/registration/registration.pug',
    confirmation: './src/pages/confirmation/confirmation.pug',
    restorePasswordPhoneNumberRequest:
      './src/pages/restore-password-request/restore-password-request.pug',
    recoveryPassword: './src/pages/recovery-password/recovery-password.pug',
    emptyLk: './src/pages/empty-lk/empty-lk.pug',
    brokerLk: './src/pages/broker-lk/broker-lk.pug',
    personalData: './src/pages/personal-data/personal-data.pug',
    newApplication: './src/pages/new-application/new-application.pug',
    newPassword: './src/pages/new-password/new-password.pug',
  },
  output: {
    filename: 'assets/js/[name].js',
    path: path.join(__dirname, './build'),
  },
  stats: {
    children: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        scripts: {
          test: /\.(js)$/,
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, './build'),
    },
    open: true,
    compress: true,
    hot: 'only',
    port: 3000,
    watchFiles: [
      './src/pages/**/*.*',
      './src/layouts/*.*',
      './src/components/**/*.*',
      './src/assets/common/*.*',
      './src/UIKit/**/*.*',
    ],
  },
  resolve: {
    alias: {
      Images: path.join(__dirname, './src/assets/images/'),
      Icons: path.join(__dirname, './src/assets/icons/'),
      Fonts: path.join(__dirname, './src/assets/fonts/'),
      Components: path.join(__dirname, './src/components/'),
      Layouts: path.join(__dirname, './src/layouts/'),
      UIKit: path.join(__dirname, './src/UIKit'),
      Styles: path.join(__dirname, './src/assets/styles/'),
      Libs: path.join(__dirname, './src/libs/'),
      NodeModules: path.join(__dirname, './node_modules/'),
      Utils: path.join(__dirname, './src/utils/'),
      Mixins: path.join(__dirname, './src/assets/pug/mixins/'),
      JSON: path.join(__dirname, './src/assets/json'),
      Constants: path.join(__dirname, './src/constants'),
      Moc: path.join(__dirname, './src/assets/moc/'),
    },
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      extractCss: {
        filename: 'assets/css/[name].css',
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon/'),
          to: path.resolve(__dirname, 'build/assets/favicon/'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/icons/'),
          to: path.resolve(__dirname, 'build/assets/icons/'),
        },
        {
          from: path.resolve(__dirname, 'src/assets/moc/'),
          to: path.resolve(__dirname, 'build/moc/'),
        },
      ],
    }),
  ],
  devtool: isDev ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(png|jpg|jpeg|svg|ico|webp)/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.mp4$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/video/[name][ext]',
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },
};
