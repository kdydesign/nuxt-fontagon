const consola = require('consola')
const { red, green } = require('chalk')

module.exports = {
  logger: consola.withScope('icon-font'),
  red,
  green
}
