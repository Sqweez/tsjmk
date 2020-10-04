const Webpack = require('webpack');
module.exports = {
    configureWebpack: {
        plugins: [
            new Webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }),
        ],
    }
}