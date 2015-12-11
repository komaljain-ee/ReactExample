module.exports = {
    entry: "./app/rateProducts/main.js",
    output: {
        path: "./public/",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            },
             {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};