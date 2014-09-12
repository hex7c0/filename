"use strict";
/**
 * @file simple example
 * @module filename
 * @package filename
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var filename = require('../index.js'); // require('filename') instead
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

/*
 * use
 */
console.log(filename(__filename));
