const path = require("path");

module.exports = {
    entry: {
        index: './ts/index.ts',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        'babylonjs': "BABYLON"
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};