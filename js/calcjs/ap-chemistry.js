aph.APChemistryCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 40, 0, 75, this),
      frq = new aph.Slider("Total Free Response (%)", "frq", 50, 0, 100, this),
  // Initialize Curve objects
      curve1 = new aph.Curve(2009, [48, 61, 80, 99, 150]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(mc.getValue());
    var score2 = this.round(3. / 4 * frq.getValue());
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APChemistryCalculator.prototype = new aph.Calculator();
  aph.apchemistrycalc = new aph.APChemistryCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});