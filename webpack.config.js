const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
      main: path.resolve(__dirname, 'src/index.js'),   
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module:{
      rules:[
        {
          test:/\.css$/,
          use:["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
        },
      ],
    }
};