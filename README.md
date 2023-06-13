<div align="center">

<h1 style="margin-bottom:0;">pronouns.js</h1>

<img src="https://raw.githubusercontent.com/akpi816218/pronouns.js/gitmaster/files/pronouns.js_animated_banner.gif" style="width:1200px;max-width:50vw;margin:1.5em;margin-top:0;">

<br>

[![package-version-npm](https://img.shields.io/npm/v/pronouns.js?logo=npm) ![npm-downloads](https://img.shields.io/npm/dt/pronouns.js?logo=npm)](https://npmjs.com/package/pronouns.js)
[![npm-dependency-versions](https://img.shields.io/librariesio/release/npm/pronouns.js?logo=npm)](https://www.npmjs.com/package/pronouns.js?activeTab=dependencies)
![license-npm](https://img.shields.io/npm/l/pronouns.js?logo=npm)
![npm-types](https://img.shields.io/npm/types/pronouns.js?logo=npm)
[![github-latest-commit](https://img.shields.io/github/last-commit/akpi816218/pronouns.js?logo=github)](https://github.com/akpi816218/pronouns.js/commits/gitmaster)
[![github-release](https://img.shields.io/github/v/release/akpi816218/pronouns.js?logo=github) ![github-stars](https://img.shields.io/github/stars/akpi816218/pronouns.js?style=social)](https://github.com/akpi816218/pronouns.js)

A simple system to keep track of pronouns — and genders — with JavaScript and TypeScript.

</div>

A simple and lightweight JavaScript library for managing and creating pronouns. **_Supports custom pronouns!_**
I got carried away one day and now this library also has genders.

Contibutions welcome.

The programmatic (API) documentation is available [here](/?api). Built using [Docma](https://onury.io/docma). For browser usage, see the "browser" section below.

For examples, see the `examples/` folder.

## Installation

Install from NPM. Type definitions are included for you TypeScript people (including me), so there's no need to try and install `@types/pronouns.js` as a devDependency — it probably doesn't exist anyways.

```bash
$ npm i pronouns.js
```

## Browser functionality

You may use any one of the following imports:

```html
<!--
	Recommended for production - does not rely on a CDN, fixed version
	You must download the minified webpack.js file from the GitHub repository and then include it like so
 -->
<script src="../dist/webpack.js"></script>
<!--
	Recommended for testing and development
	"https://unpkg.com/pronouns.js" automatically redirects to the specified file of the latest version
	i.e. "https://unpkg.com/pronouns.js@3.3.0/dist/webpack.js"
	you may use tag @latest to select the latest version (i.e. "https://unpkg.com/pronouns.js@latest")
	For production, it is HIGHLY RECOMMENDED you use a fixed version.
 -->
<script src="https://unpkg.com/pronouns.js"></script>
<!--
	Secondary CDN - not tested
	"https://cdn.jsdelivr.net/npm/pronouns.js" serves latest version, default file
	add version tag similar to unpkg for a specified version
	For production, it is HIGHLY RECOMMENDED you use a fixed version.
 -->
<script src="https://cdn.jsdelivr.net/npm/pronouns.js@latest/dist/webpack.js"></script>
```

## Support

There is no support for CJS modules (`require()`). Use ESM instead (`import ... from ...`). If it works for one version, that's a coincidence. There is no intended support for CommonJS modules, only the modular syntax introduced in ES6. See [MDN's JavaScript module guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).
