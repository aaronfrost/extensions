var path = require('path');

module.exports = (env) => {
    return {
        entry: path.join(__dirname, env.app, 'content/js/content.ts'),
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
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'app.js',
            path: path.join(__dirname, env.app, 'build'),
        },
    };
};
