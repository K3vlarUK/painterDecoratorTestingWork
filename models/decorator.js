const Decorator = function() {
  this.paintStock = [];
};

Decorator.prototype.getPaintStock = function() {
  return this.paintStock.length;
};

Decorator.prototype.addPaintToStock = function(paint) {
  this.paintStock.push(paint);
};

// Hold on tight...
Decorator.prototype.paintTotalCapacity = function() {
  let totalPaintCapacity = 0;
  for (let i = 0; i < this.paintStock.length; i++) {
    totalPaintCapacity += this.paintStock[i].capacity;
  };
  return totalPaintCapacity;
};

Decorator.prototype.hasEnoughPaint = function(room) {
  if (this.paintTotalCapacity() >= room.size) {
    return true;
  } else {
    return false;
  };
};

Decorator.prototype.paintRoom = function(room) {
  if (this.hasEnoughPaint(room)) {
    room.painted = true;
  } else {
    return "Not enough paint";
  };
};

module.exports = Decorator;
