let path = require('path');
let mode = "develpment";

if (process.env.NODE_ENV === "production") {
	mode = "production";
}

module.exports = {
	mode: mode,
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					}
				},
			]
	},
	devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
  	}
}