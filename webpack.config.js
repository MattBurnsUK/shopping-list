var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({  // use the constructor function to create an instance of the object
    template: __dirname + '/app/index.html',  // the current file. The one to copy or move
    filename: 'index.html',  // name of the new file
    inject: 'body'  // where to place the script tag. Must be a string. Either 'body' or 'head'
});

module.exports = {
    entry: __dirname + '/app/index.js',    // the outermost component class. This is the entry point for webpack.
    module: {
        rules: [
            {
            test: /\js$/,   // regex to select all .js files
            exclude: /node_modules/,   // exclude these
            use: { 
                loader:'babel-loader'  // use 'babel-loader' package
            }
        }
        ]
    },
    output: {  // where to store the transformed js
        filename: 'transformed.js',   // new file name
        path: __dirname + '/build'   //new file path
    },
    plugins: [HTMLWebpackPluginConfig]  // add the newly created instance as a plugin
};