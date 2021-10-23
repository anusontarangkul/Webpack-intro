# webpack-intro

This app was to help me learn how to use the basics of webpack 5. I followed a [tutorial](https://www.youtube.com/watch?v=9c3dBhvtt6o) by Steve Griffith.

## Development Highlights

- Set up development mode of webpack config.

```JavaScript
    mode: 'development',
```

- Set up entry point

```JavaScript
    entry: {
        main: path.resolve(__dirname, 'src/app.js')
    },
```

- Set up output for the files to be created. Set a dyanamic name and a hash to get a version. Clean is set to true to delete any previous webpack versions.

```JavaScript
    output: {
        path: path.resolve(__dirname, 'dist'),
        // use content hash to keep track of version
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
```

- Keep track of where files come from so developers can debugg and troubleshoot.

```JavaScript
 devtool: 'inline-source-map',
```

- Create development server. We set the port and open once the you run `npm run dev`

```JavaScript
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 5001,
        open: true,
        hot: true,
    },
```

- Use loaders. We look for css files and then inject the css into the output files. Babel is also used to convert to older version of ES5 for more broswer compatibility.

```JavaScript
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
```

- Use plugin to dynamically create a html file and use the template.

```JavaScript
    plugins: [
        new HthmlWebpackPlugin({
            title: 'Demo',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        })
    ]
}
```

## Technologies

- [webpack](https://webpack.js.org/)

## Credits

The starter code was provided by Steve Griffith. His [tutorial](https://www.youtube.com/watch?v=9c3dBhvtt6o) was followed.

|                           |                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **David Anusontarangkul** | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/anusontarangkul/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/anusontarangkul) |

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
