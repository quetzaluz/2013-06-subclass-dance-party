var ShyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

ShyDancer.prototype = new Dancer();
ShyDancer.prototype.constructor = ShyDancer;
oldStep = Dancer.prototype.step;

ShyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.addClass('shy');
  };