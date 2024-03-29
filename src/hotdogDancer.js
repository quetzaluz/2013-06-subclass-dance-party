var HotdogDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.html('<span class="dancer hot"><img src="src/hotdogs.png"/></span>');
  this.setPosition(this.top, this.left);
};

HotdogDancer.prototype = Object.create(Dancer.prototype);
HotdogDancer.prototype.constructor = HotdogDancer;

HotdogDancer.prototype.step = function(top, bottom){
  Dancer.prototype.step.call(this);
  this.$node.stop(true,false);
  this.$node.css({position: 'absolute',
    left: this.left + Math.round(Math.random() * 5) - ((3 + 1) / 2) +'px', 
    top: this.top + Math.round(Math.random() * 5) - ((3) / 2) +'px'
  });
};

