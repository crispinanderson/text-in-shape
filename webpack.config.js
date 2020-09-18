var path = require('path');

module.exports = [
    {
        name: 'build',
        entry: './src/index.js',
        mode: "development",
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'index.js',
            libraryTarget: 'commonjs2'
        },
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /(node_modules|bower_components|build)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                }
            ]
        }
    },
    {
        name: 'test-integration',
        entry: './__tests__/integration/index.js',
        mode: "development",
        output: {
            path: path.resolve(__dirname, '__tests__/test-build'),
            filename: 'index.js',
            //libraryTarget: 'commonjs2'
        },
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /(node_modules|bower_components|build)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                }
            ]
        }
    }
];