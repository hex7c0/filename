# [filename](http://supergiovane.tk/#/filename)

[![NPM version](https://img.shields.io/npm/v/REPLACE.svg)](https://www.npmjs.com/package/REPLACE)
[![Linux Status](https://img.shields.io/travis/hex7c0/REPLACE.svg?label=linux)](https://travis-ci.org/hex7c0/REPLACE)
[![Windows Status](https://img.shields.io/appveyor/ci/hex7c0/REPLACE.svg?label=windows)](https://ci.appveyor.com/project/hex7c0/REPLACE)
[![Dependency Status](https://img.shields.io/david/hex7c0/REPLACE.svg)](https://david-dm.org/hex7c0/REPLACE)

Tiny module for get script filename

## Installation

Install through NPM

```bash
npm install filename
```
or
```bash
git clone git://github.com/hex7c0/filename.git
```

## API

inside nodejs script
```js
var filename = require('filename');

var name = filename(__filename);
```

### filename(path)

#### path

 - `path` - **String** Path to normalize *(default "required")*

## Examples

Take a look at my [examples](examples)

### [License GPLv3](LICENSE)
