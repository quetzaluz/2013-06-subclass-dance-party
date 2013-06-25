describe("hotdogDancer", function() {
  var hotdogDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    hotdogDancer = new HotdogDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(hotdogDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that stops last animation and moves object css coordinates randomly", function() {
    spyOn(hotdogDancer.$node, 'stop');
    spyOn(hotdogDancer.$node, 'css');
    hotdogDancer.step();
    expect(hotdogDancer.$node.stop).toHaveBeenCalled();
    expect(hotdogDancer.$node.css).toHaveBeenCalled();
});

});
