const assert = require('assert');
const add = require('../add');

describe('Adding name and age', function () {

    it('should return name and age', function () {
        assert.strictEqual(
            add('Gautam', 22),
            'User name is Gautam and his age is 22'
        );
    });
});