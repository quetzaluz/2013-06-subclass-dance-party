var FadeyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

FadeyDancer.prototype = new Dancer();
FadeyDancer.prototype.constructor = FadeyDancer;
oldStep = Dancer.prototype.step;

FadeyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.addClass('blinky');
    this.$node.fadeToggle('slow');
  };