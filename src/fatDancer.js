var FatDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

FatDancer.prototype = Object.create(Dancer.prototype);
FatDancer.prototype.constructor = FatDancer;

FatDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.addClass('fat');
  this.$node.animate({'width': '50px', 'height': '50px'});
  this.$node.animate({'width': '20px', 'height': '20px'});
};