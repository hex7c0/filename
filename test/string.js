"use strict";
/**
 * @file string test
 * @module filename
 * @package filename
 * @subpackage test
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var filename = require('../index.js'); // require('filename')
    var assert = require('assert');
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

/*
 * test module
 */
describe('string', function() {

    it('__filename', function(done) {

        assert.deepEqual(filename(__filename), 'string');
        assert.deepEqual(filename(__dirname), 'test');
        done();
    });

    it('from doku path', function(done) {

        assert.deepEqual(filename('/foo/bar/baz/asdf/quux.html'), 'quux');
        assert.deepEqual(filename('index.html'), 'index');
        assert.deepEqual(filename('index.coffee.md'), 'index.coffee');
        assert.deepEqual(filename('index.'), 'index');
        assert.deepEqual(filename('index'), 'index');
        done();
        return;
    });
});
