var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = (env, argv) => {
    var plugins = [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyPlugin({
            patterns: [
                path.join(__dirname, env.app, `manifest${argv.mode === 'development' ? '' : '.prod'}.json`),
                argv.mode === 'development'
                    ? path.join(__dirname, 'node_modules', `livereload-js`, 'dist', 'livereload.js')
                    : undefined,
            ],
        }),
        new webpack.DefinePlugin({
            'process.env.npm_package_version': null,
            'TTAF.dev': argv.mode === 'development' ? true : false,
        }),
    ];
    var devPlugins = [
        new LiveReloadPlugin({
            protocol: 'http',
        }),
    ];

    const entry = {
        main: [
            path.join(__dirname, env.app, 'content/js/content.ts'),
            path.join(__dirname, env.app, 'content/css/content.scss'),
        ],
        background: [path.join(__dirname, env.app, 'content/js/background.ts')],
    };
    if (argv.mode === 'development') {
        entry.livereloadplugin = [path.join(__dirname, env.app, 'content/js/liveReloadPlugin.ts')];
    }

    return {
        entry,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: path.join(__dirname, env.app, 'tsconfig.json'),
                            },
                        },
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.(css|scss)/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                },
            ],
        },
        devtool: 'cheap-module-source-map',
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: '[name].js',
            path: path.join(__dirname, env.app, 'build'),
        },
        plugins: [...plugins, ...(argv.mode === 'development' ? devPlugins : [])],
    };
};
