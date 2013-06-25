var HotdogDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.html('<span class="dancer" id="hot"><img src="src/hotdogs.png"/></span>');

};

HotdogDancer.prototype = new Dancer();
HotdogDancer.prototype.constructor = HotdogDancer;
oldStep = Dancer.prototype.step;

HotdogDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    this.$node.effect('shake', 10000);
    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
     //this.$node;
  };