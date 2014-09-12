# [filename](http://supergiovane.tk/#/filename)

[![NPM version](https://badge.fury.io/js/filename.svg)](http://badge.fury.io/js/filename)
[![Build Status](https://travis-ci.org/hex7c0/filename.svg)](https://travis-ci.org/hex7c0/filename)
[![Dependency Status](https://david-dm.org/hex7c0/filename/status.svg)](https://david-dm.org/hex7c0/filename)

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

Take a look at my [examples](https://github.com/hex7c0/filename/tree/master/examples)

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)
