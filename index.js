'use strict';
/**
 * @file filename main
 * @module filename
 * @package filename
 * @subpackage main
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @copyright hex7c0 2014
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var path = require('path');
    var basename = path.basename;
    var extname = path.extname;
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

/*
 * functions
 */
/**
 * options setting
 * 
 * @exports filename
 * @function filename
 * @param {String} path - path
 * @return {String}
 */
module.exports = function filename(path) {

    return basename(path, extname(path));
};
