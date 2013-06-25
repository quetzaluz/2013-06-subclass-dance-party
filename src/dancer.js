var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this.top, this.left);
  this.step();

};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var self = this;
  setTimeout(function(){
    self.step();
  }, this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  this.$node.stop(true,false).animate({'left': '15px'});
  this.left = 15;
};

Dancer.prototype.shuffle = function(){
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();
  this.$node.stop(true, true).animate({'left': this.left +'px', 'top': this.top + 'px'}, 500);
};

Dancer.prototype.cluster = function(){
  //Iterate through window.dancers, use jquery .getClass
};