var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

oldStep = Dancer.prototype.step; //Bad global, fix later.

BlinkyDancer.prototype.step = function(){
  oldStep.call(this);
  this.$node.addClass('blinky');
  this.$node.toggle();
};