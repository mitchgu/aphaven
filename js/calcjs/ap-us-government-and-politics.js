aph.APUSGovCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 30, 0, 60, this),
      frq = new aph.Slider("Total Free Response (in Percent)", "frq", 50, 0, 100, this),
  // Initialize Curve objects
      curve1 = new aph.Curve(2009, [47, 65, 81, 92, 120]),
      curve2 = new aph.Curve(2002, [41, 65, 81, 95, 120]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(mc.getValue());
    var score2 = this.round(3. / 5 * frq.getValue());
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APUSGovCalculator.prototype = new aph.Calculator();
  aph.apusgovcalc = new aph.APUSGovCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});