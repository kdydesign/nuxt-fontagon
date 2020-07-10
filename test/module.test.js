const { Nuxt, Builder } = require('nuxt-edge')
const config = require('./fixture/nuxt.config')

let nuxt

const setupNuxt = async (config) => {
  nuxt = new Nuxt(config)

  const build = new Builder(nuxt)

  await build.validatePages()
  await build.generateRoutesAndFiles()
  await nuxt.listen(3333)
}

describe('module', () => {
  beforeAll(async () => {
    config.iconFont = {
      files: [`${__dirname}/assets/**/*.svg`],
      dist: `${__dirname}/assets/font`
    }

    await setupNuxt(config)
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('nuxt-iconfont-generator', () => {
    expect(nuxt.options).toHaveProperty('iconFont')

    expect(nuxt.options.iconFont).toHaveProperty('files')
    expect(nuxt.options.iconFont).toHaveProperty('dist')
  })
})
