describe("fatDancer", function() {
  var fatDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    fatDancer = new FatDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(fatDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that adds a fat class and calls two animations", function() {
    spyOn(fatDancer.$node, 'addClass');
    spyOn(fatDancer.$node, 'animate');
    fatDancer.step();
    expect(fatDancer.$node.addClass).toHaveBeenCalled();
    expect(fatDancer.$node.animate.callCount).toEqual(2);
});

});
