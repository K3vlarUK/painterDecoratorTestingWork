const Paint = function(capacity) {
  this.capacity = capacity;
  this.notEmpty = true;
};

Paint.prototype.emptyContents = function() {
  this.capacity = 0;
  this.notEmpty = !this.notEmpty;
};

module.exports = Paint;
