const assert = require('assert');
const add = require('../add');

describe('Addition Testing', function () {

    it('should return 30 when adding 10 and 20', function () {
        assert.strictEqual(add(10, 20), 30);
    });

    it('should return 10 when adding 5 and 5', function () {
        assert.strictEqual(add(5, 5), 10);
    });

});