var FadeyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

FadeyDancer.prototype = new Dancer();
FadeyDancer.prototype.constructor = FadeyDancer;

FadeyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.addClass('fadey');
  this.$node.fadeToggle('slow');
  };