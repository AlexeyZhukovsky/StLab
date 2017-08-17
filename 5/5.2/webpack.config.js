module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}