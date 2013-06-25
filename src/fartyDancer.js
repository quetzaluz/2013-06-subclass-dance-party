var FartyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  snd.play();
  this.$node.html('<span class="dancer hot"><img src="src/toilet.jpeg"/></span>');

};

FartyDancer.prototype = Object.create(Dancer.prototype);
FartyDancer.prototype.constructor = FartyDancer;

FartyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.addClass('farty');
};