module.exports = {
    entry: "./src/main.js",
    output: {
        path: "./static/main",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
            	test: /\.js$/,
            	exclude: /node_modules/,
            	loader: 'babel',
            	query: {
            		presets: ['es2015']
            	}
            }
        ]
    }
};
