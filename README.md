# 🐾 Nuxt-Fontagon
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Standard JS][standard-js-src]][standard-js-href]
![License][license-src]

> Easy convert SVG from nuxt to icon font.
> Try converting svg into font easily to make icon-font automatically. 
> The Icon-Font generator [**Fontagon**](https://github.com/kdydesign/fontagon) is available on the Nuxt module.

## Info

> 🔔 This package has been renamed from `nuxt-iconfont-generator` to `nuxt-fontagon`

- [📖 **Release Notes**](./CHANGELOG.md)
- [💻 **CodeSandbox**](https://codesandbox.io/s/nuxt-fontagon-example-0gqg0?fontsize=14&hidenavigation=1&theme=dark)

## Features

√ Automatically convert svg to font file when building<br>
√ Based on the svg file name, create the `CSS` and `Stylus`, `SASS`, and `LESS` files as you want

🔔 `nuxt-fontagon` uses Fontagon functionality as it is. See the [**Fontagon documentation**](https://github.com/kdydesign/fontagon/tree/master/packages/fontagon)

## Install

1. Add `nuxt-fontagon` dependency to your project

```bash
# Using npm
npm install --save-dev nuxt-fontagon
# Using yarn
yarn add --dev nuxt-fontagon
```

2. Add `nuxt-fontagon` to the `buildModules` section of `nuxt.config.js`

```js
module.exports = {
  buildModules: [
    'nuxt-fontagon'
  ],
  iconFont: {
    /* Fontagon options */
  }
}
```

⚠️ If you are using `nuxt < 2.9.0`, use `modules` property instead and install it as a dependency (no `--dev` or `--save-dev` flags).

## Options

### `files`

List of SVG files.

🔔 *The files option `srcDir` in Nuxt is root path.*

* Type: `Array`
* Default: `[srcDir/assets/**/*.svg]`
* *required*

<br>

### `dist`

Directory for generated font files.

🔔 *The dist option `srcDir` in Nuxt is root path.*

* Type: `String`
* Default: `'srcDir/assets/font'`

<br>

### `fontName`

Specify a font name and the default name for the font file.

* Type: `String`
* Default: `'fontagon-icons'`

<br>

### `style`

stylesheet file generation type.

* Type: `String`
* Default: `'all'`
* options: `'css', 'sass', 'less', 'stylus'`

<br>

### `styleTemplate`

Specify a custom style template.


The **'.hbs'** extension is required because the custom template is compiled through [handlebars](https://handlebarsjs.com/).


If the `style` is **'all'**, only one pre-processor template is specified in the `styleTemplate`, 
it is merged with the default option and processed.

* Type: `Object`
* Default: 
```json
{
  "styleTemplate": {
      "css": "css.hbs",
      "sass": "sass.hbs",
      "less": "less.hbs",
      "stylus": "styl.hbs"
  }
}
```

<br>

### `classOptions`

Additional options for CSS templates, that extends default options.


When **'baseClass'** is set, it is specified by the default class name of the stylesheet, 
or **'classPrefix'** as a sub class factor of the stylesheet.

* Type: `Object`
* Default: 
```json
{
    "baseClass": "fontagon-icons",
    "classPrefix": "ft"
  }
```

<br>

### `order`

Order of `src` values in `font-face` in CSS file.

* Type: `Array`
* Default: `['eot', 'woff2', 'woff', 'ttf', 'svg']`

<br>

### `rename`

Function that takes path of file and return name of icon.

* Type: `Function`
* Default: basename of file

<br>

### `startCodepoint`

Starting codepoint. Defaults to beginning of unicode private area.

* Type: `Number`
* Default: `0xF101`

<br>

### `codepoints`

Specific codepoints for certain icons.
<br>
Icons without codepoints will have codepoints incremented from `startCodepoint` skipping duplicates.

* Type: `Object`
* Default: `{}`

<br>

### `formatOptions`
Specific per format arbitrary options to pass to the generator

* Type: `object`
* Default:
```json
{
  "svg": {
    "normalize": true,
    "fontHeight": 1000
  }
}
```

format and matching generator:
- `svg` - [svgicons2svgfont](https://github.com/nfroidure/svgicons2svgfont).
- `ttf` - [svg2ttf](https://github.com/fontello/svg2ttf).
- `woff2` - [ttf2woff2](https://github.com/nfroidure/ttf2woff2).
- `woff` - [ttf2woff](https://github.com/fontello/ttf2woff).
- `eot` - [ttf2eot](https://github.com/fontello/ttf2eot).

<br>

### `writeFiles`

It is possible to not create files and get generated fonts in object to write them to files later.
<br>
Also results object will have function `generateCss([urls])` where `urls` is an object with future fonts urls.

* Type: `Boolean`
* Default: `true`


## License

[MIT License](./LICENSE)

Copyright (c) [Dev.DY](https://kdydesign.github.io/)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-fontagon?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-fontagon
[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-fontagon?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-fontagon
[circle-ci-src]: https://img.shields.io/circleci/project/github/kdydesign/nuxt-fontagon/master.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/kdydesign/nuxt-fontagon/tree/master
[codecov-src]: https://img.shields.io/codecov/c/github/kdydesign/nuxt-fontagon.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/kdydesign/nuxt-fontagon
[david-dm-src]: https://david-dm.org/kdydesign/nuxt-fontagon/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/kdydesign/nuxt-fontagon
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
[license-src]: https://img.shields.io/npm/l/nuxt-fontagon?style=flat-square
