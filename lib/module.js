const { join } = require('path')
const Fontagon = require('fontagon')
const { logger } = require('./logger')

function iconFontGenModule (_moduleOptions) {
  this.nuxt.hook('modules:done', (moduleContainer) => {
    const options = {
      srcDir: this.options.srcDir,
      ..._moduleOptions
    }

    // default path options
    const defaultFontagonOpts = {
      files: [join(options.srcDir, '/assets/**/*.svg')],
      dist: join(options.srcDir, '/assets/font')
    }

    const fontagonOpts = Object.assign({}, defaultFontagonOpts, this.options.iconFont)

    try {
      Fontagon(fontagonOpts)
    } catch (err) {
      logger.error('Generate Error: ', err)
    }
  })
}

module.exports = iconFontGenModule
module.exports.meta = require('../package.json')
