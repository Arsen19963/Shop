const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
//mode: 'development',
module.exports = {
    mode: 'development',
    target: 'node',
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'server.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf|svg|png|jpg|jpeg|gif|ico|ogg|wav|mp3)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: '[name].[ext]',
                        outputPath: 'img/'
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    externals: [webpackNodeExternals()]
};
