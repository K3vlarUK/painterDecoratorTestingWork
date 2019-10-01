const assert = require('assert');
const Paint = require('../models/paint.js');

describe('Paint', function() {

  let paint;

  beforeEach(function() {
    paint = new Paint(10);
  });

  it('Should have a capacity of Paint', function() {
    const actual = paint.capacity;
    assert.strictEqual(actual, 10);
  });
  it('Should be able to check if not empty', function() {
    const actual = paint.notEmpty;
    assert.strictEqual(actual, true);
  });
  it('Should be able to empty itself of paint', function() {
    paint.emptyContents();
    const actualCapacity = paint.capacity;
    assert.strictEqual(actualCapacity, 0);
    const actualHasPaint = paint.notEmpty;
    assert.strictEqual(actualHasPaint, false);
  });
});
