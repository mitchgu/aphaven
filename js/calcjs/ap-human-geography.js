aph.APHumanGeographyCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 40, 0, 75, this),
      frq = new aph.Slider("Total Free Response (in %)", "frq", 50, 0, 100, this),
  // Initialize Curve objects
      curve1 = new aph.Curve(2006, [34, 44, 58, 73, 120]),
      curve2 = new aph.Curve(2001, [41, 50, 62, 73, 120]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(60. / 75 * mc.getValue());
    var score2 = this.round(3. / 5 * frq.getValue());
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APHumanGeographyCalculator.prototype = new aph.Calculator();
  aph.aphumangeographycalc = new aph.APHumanGeographyCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});