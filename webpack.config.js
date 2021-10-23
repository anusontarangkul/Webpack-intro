const path = require('path');
const HthmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // set up mode (dev or prod)
    mode: 'development',

    // files to start out with
    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },

    // where the files are going to be created to
    output: {
        path: path.resolve(__dirname, 'dist'),
        // use content hash to keep track of version
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    // keep tracks of where files come from
    devtool: 'inline-source-map',
    // set up dev server
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 5001,
        open: true,
        hot: true,
    },


    // loaders (for non js files)
    module: {
        // css-loader: Looks for css file and turns into module
        // style-loader: injects css mode into file.
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    // plugins
    plugins: [
        new HthmlWebpackPlugin({
            title: 'Demo',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        })
    ]
}