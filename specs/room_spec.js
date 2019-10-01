const assert = require('assert');
const Room = require('../models/room.js');

describe('Room', function() {

  let room;

  beforeEach(function() {
    room = new Room(25)
  });

  it('Should have a size in square meters', function() {
    const actual = room.size;
    assert.strictEqual(actual, 25);
  });
  it('Should start not painted', function() {
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });
  it('Should be able to be painted', function() {
    room.paintRoom();
    const actual = room.painted;
    assert.strictEqual(actual, true);
  })
});
