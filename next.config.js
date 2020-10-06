const withCSS = require('@zeit/next-css')
const withStylus = require('@zeit/next-stylus')

module.exports = withCSS(withStylus({
  cssModules: true
}))
