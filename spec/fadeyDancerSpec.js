describe("fadeyDancer", function() {
  var fadeyDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    // sets up a way to delay this test -- used below
    jasmine.Clock.useMock();

    fadeyDancer = new FadeyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(fadeyDancer.$node).toEqual(jasmine.any(jQuery));
  });

  it("should have a step function that adds fade class and toggles fade", function() {
    spyOn(fadeyDancer.$node, 'addClass');
    spyOn(fadeyDancer.$node, 'fadeToggle');
    fadeyDancer.step();
    expect(fadeyDancer.$node.addClass).toHaveBeenCalled();
    expect(fadeyDancer.$node.fadeToggle).toHaveBeenCalled();    
  });

});
