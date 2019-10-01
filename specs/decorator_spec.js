const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');

describe('Decorator', function() {

  let decorator;
  let paint1;
  let paint2;
  let room;

  beforeEach(function() {
    decorator = new Decorator();
    paint1 = new Paint(10);
    paint2 = new Paint(20);
    room = new Room(28);
  });

  it('Should start with an empty paint stock', function() {
    const actual = decorator.getPaintStock();
    assert.strictEqual(actual, 0);
  });
  it('should be able to add a can to paint stock', function() {
    decorator.addPaintToStock(paint1);
    const actual = decorator.getPaintStock();
    assert.strictEqual(actual, 1);
  });
  it('Should be able to calculate total litres of paint', function() {
    decorator.addPaintToStock(paint1);
    decorator.addPaintToStock(paint2);
    const actual = decorator.paintTotalCapacity();
    assert.strictEqual(actual, 30);
  });
  it('should be able to calculate if there is enough paint', function() {
    decorator.addPaintToStock(paint1);
    const actual = decorator.hasEnoughPaint(room);
    assert.strictEqual(actual, false);
    decorator.addPaintToStock(paint2);
    assert.strictEqual(actual, false);
  });
  it('should be able to paint room if enough paint', function() {
    const actualBefore = room.painted;
    assert.strictEqual(actualBefore, false);
    decorator.addPaintToStock(paint1);
    decorator.addPaintToStock(paint2);
    decorator.paintRoom(room);
    const actualAfter = room.painted;
    assert.strictEqual(actualAfter, true);
  })
});
