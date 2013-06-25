describe("shyDancer", function() {
  var shyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    shyDancer = new ShyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(shyDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that adds the shy class", function() {
    spyOn(shyDancer.$node, 'addClass');
    shyDancer.step();
    expect(shyDancer.$node.addClass).toHaveBeenCalled();
});

});
