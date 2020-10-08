
const path = require('path');

var config = {
    entry: './main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 3007
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: ["html-loader?config=otherHtmlLoaderConfig"]
            },
            {
                test: /\.ts$/,
                use: ["ts-loader"]
            }

        ],


    }
}
module.exports = config;


