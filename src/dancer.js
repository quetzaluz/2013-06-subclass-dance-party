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
  //The following code is in grave need of refactoring. Bad op time, long code.
  types = {}
  for (var i = 0; i < window.dancers.length; i++) {
    if (types[window.dancers[i].$node.attr('class')] === undefined) {
      types[window.dancers[i].$node.attr('class')] = [window.dancers[i]]
    } else {types[window.dancers[i].$node.attr('class')].push([window.dancers[i]])}
  }
  for (var key in types) {
    var avTop = 0;
    var avLeft = 0;
    for (var i = 0; i < types[key].length; i++) {
       avTop += types[key][i].top;
       avleft += types[key][i].left;
       if (i === types[key].length-1) {
         avTop = avTop / types[key].length;
         avLeft = avLeft / types[key].length
         for (var j = 0; j < types[key].length; j++) {
           console.log(avTop, avLeft, types[key])
           types[key][j].top = avTop;
           types[key][j].left = avLeft;
           types[key][j].$node.stop(true, true).animate({'left': types[key][j].left +'px', 'top': types[key][j].top + 'px'}, 500);
         }
       }
    }
  }
  //define a variable as the sound file, and play it.
};