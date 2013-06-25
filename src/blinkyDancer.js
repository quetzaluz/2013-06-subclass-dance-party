var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};  

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
makeBlinkyDancer.prototype.step = function(){

oldStep = Dancer.prototype.step; //Bad global, fix later.

BlinkyDancer.prototype.step = function(){
  oldStep.call(this);
  this.$node.addClass('blinky');
  this.$node.toggle();
};