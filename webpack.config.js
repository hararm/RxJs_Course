module.exports = {
    entry: "./main_hot_cold",
    output: { filename: "app.js" },
    module: {
        loaders: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }

}