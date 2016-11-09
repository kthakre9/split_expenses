module.exports = {
    entry: "./app.js",
    output: {
       filename: "./app/build/bundle.js"
    },
    resolve: {
        modulesDirectories: ['web_modules','node_modules'],
        extensions: ['', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }

        ]
    },
    node: {
        dns: 'mock',
        net: 'mock',
        fs: 'empty',
        tls: 'empty'
    }
};