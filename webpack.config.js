var path = require('path');

module.exports = {  
    context: path.join(__dirname, 'public'),
    entry: '../client/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        index:'index.html'
      }
    
};