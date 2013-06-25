var HotdogDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.html('<span class="dancer" id="hot"><img src="src/hotdogs.png"/></span>');
  this.setPosition(this.top, this.left);
};

HotdogDancer.prototype = new Dancer();
HotdogDancer.prototype.constructor = HotdogDancer;
oldStep = Dancer.prototype.step;

HotdogDancer.prototype.step = function(top, bottom){
  // call the old version of step at the beginning of any call to this new version of step
  oldStep.call(this);
  this.$node.stop(true,false)
  .css({position: 'absolute', 
    left: this.left + Math.round(Math.random() * 5) - ((3 + 1) / 2) +'px', 
    top: this.top + Math.round(Math.random() * 5) - ((3) / 2) +'px'
  });
};

