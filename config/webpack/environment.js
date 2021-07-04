const { environment } = require('@rails/webpacker')
const customConfig = require('./custom')

module.exports = environment

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jquery: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)

environment.config.merge(customConfig)