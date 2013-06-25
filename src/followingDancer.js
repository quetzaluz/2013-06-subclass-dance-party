var FollowingDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.randomFactor = Math.random() * 20;
  this.$node.data('ran', this.randomFactor);
};

FollowingDancer.prototype = Object.create(Dancer.prototype);
FollowingDancer.prototype.constructor = FollowingDancer;

FollowingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.addClass('following');
};