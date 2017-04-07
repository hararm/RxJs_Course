module.exports = {
    entry: "./main_03",
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