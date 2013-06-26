describe("followingDancer", function() {
  var followingDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    followingDancer = new FollowingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(followingDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that adds a following class", function() {
    spyOn(followingDancer.$node, 'addClass');
    followingDancer.step();
    expect(followingDancer.$node.addClass).toHaveBeenCalled();
  });
});
