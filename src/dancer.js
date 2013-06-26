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
  this.top = ($("body").height() / 2 -200)+200* Math.random();
  this.left = ($("body").width() / 2 -200)+200* Math.random();
  this.$node.stop(true, true).animate({'left': this.left +'px', 'top': this.top + 'px'}, 500);
};

Dancer.prototype.clear = function(){
  this.$node.remove();
};

Dancer.prototype.pairUp = function(){
  //Iterate through all dancers, find one that is closest to object calling this method
  var distances = {};
  for (var i = 0; i < window.dancers.length; i++) {
    distance = Math.sqrt(Math.pow((window.dancers[i].top - this.top), 2) + Math.pow((window.dancers[i].left - this.left),2))
    if (distance > 0) {distances[window.dancers[i]] = distance;}
  }
  console.log(distances);
};