var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //this.parent.constructor.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

// makeBlinkyDancer.prototype = inherit(makeDancer.prototype);
// makeBlinkyDancer.prototype.step = function(){
//     var oldStep = this.step;

//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();

//      toggle() is a jQuery method to show/hide the <span> tag.
//      * See http://api.jquery.com/category/effects/ for this and
//      * other effects you can use on a jQuery-wrapped html tag. 
//     console.log("node inside blinky " + this.$node)
//     this.$node.toggle();
//   };


var inherit = function(proto) {
  function F() {}
  F.prototype = proto
  return new F
}

function extend(Child, Parent) {
  Child.prototype = inherit(Parent.prototype)
  Child.prototype.constructor = Child
  Child.parent = Parent.prototype
}
