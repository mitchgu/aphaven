aph.APPhysicsBCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 35, 0, 70, this),
      frq = new aph.Slider("Total Free Response", "frq", 40, 0, 80, this),
  // Initialize Curve objects
      curve1 = new aph.Curve(2009, [39, 56, 84, 111, 180]),
      curve2 = new aph.Curve(2004, [58, 71, 97, 120, 180]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(90. / 70. * mc.getValue());
    var score2 = this.round(90. / 80 * frq.getValue());
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APPhysicsBCalculator.prototype = new aph.Calculator();
  aph.apphysicsbcalc = new aph.APPhysicsBCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});