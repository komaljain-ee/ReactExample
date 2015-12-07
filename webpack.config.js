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
                loader: 'babel',
                query:
                  {
                    presets:['react', 'es2015']
                  }
            },
             {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};