var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    return {
        entry: {
            main: [
                path.join(__dirname, env.app, 'content/js/content.ts'),
                path.join(__dirname, env.app, 'content/css/content.css')
            ]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: path.join(
                                    __dirname,
                                    env.app,
                                    'tsconfig.json',
                                ),
                            },
                        },
                    ],
                    exclude: /node_modules/,
                },
                {test: /\.(css|scss)/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']}
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'app.js',
            path: path.join(__dirname, env.app, 'build'),
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'app.css',
            }),
            // ...
        ]
    };
};
