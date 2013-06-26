describe("fartyDancer", function() {
  var fartyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();
    snd = new Audio("src/fart-04.wav"); // global in index so added here
    fartyDancer = new FartyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(fartyDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that adds the farty class", function() {
    spyOn(fartyDancer.$node, 'addClass');
    fartyDancer.step();
    expect(fartyDancer.$node.addClass).toHaveBeenCalled();
  });

  //test for sound effect?

});
