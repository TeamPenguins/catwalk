// const webpack = require('webpack');
// const path = require('path');

// const config = {
//   entry: [
//     __dirname + '/client/src/index.jsx',
//   ],
//   output: {
//     path: path.resolve(__dirname, 'client/dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ]
//       },
//       {
//         test: /\.png$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               mimetype: 'image/png'
//             }
//           }
//         ]
//       }
//     ]
//   },
//   resolve: {
//     extensions: [
//       '.js',
//       '.jsx'
//     ],
//   },
//   devServer: {
//     contentBase: './client/dist'
//   }
// };

// module.exports = config;

const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client', 'dist'),
    open: true,
    clientLogLevel: 'silent',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'client', 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults"
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  }
};