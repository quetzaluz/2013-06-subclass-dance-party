var FatDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

FatDancer.prototype = new Dancer();
FatDancer.prototype.constructor = FatDancer;
oldStep = Dancer.prototype.step;

FatDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
    this.$node.addClass('fat');
    this.$node.animate({'width': '30px', 'height': '30px'});
    this.$node.animate({'width': '20px', 'height': '20px'});
  };