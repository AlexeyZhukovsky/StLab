var path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './dist/app.bundle.js'
    },
    devServer:{
        contentBase: path.join(__dirname),
        compress: true,
        port: 9000,
        stats: "errors-only",
        open: true
    },
    resolve:{   
        alias:{
            'components': path.resolve(__dirname, './src/components'),
            'containers': path.resolve(__dirname, './src/containers'),
            'reducers': path.resolve(__dirname, './src/reducers'),
            'helpers': path.resolve(__dirname, './src/helpers'),
            'styles': path.resolve(__dirname, './src/styles'),
            'loginPage': path.resolve(__dirname, './src/loginPage'),
            'filmsListPage': path.resolve(__dirname, './src/filmsListPage'),
            'filmInfoPage': path.resolve(__dirname, './src/filmInfoPage')

        },
        extensions: [" ", ".js", ".jsx", ".css", ".less", ".json"] // расширения для загрузки модулей
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader','css-loader','less-loader']
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}