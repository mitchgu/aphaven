aph.APPsychCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 50, 0, 100, this),
      frq1 = new aph.Slider("1st Free Response", "frq1", 4, 0, 7, this),
      frq2 = new aph.Slider("2nd Free Response", "frq2", 4, 0, 8, this),
  // Initialize Curve objects
      curve1 = new aph.Curve(2007, [64, 76, 92, 112, 150]),
      curve2 = new aph.Curve(2004, [55, 72, 89, 106, 150]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(mc.getValue());
    var score2 = this.round(25. / 7 * frq1.getValue() + 25. / 8 * frq2.getValue());
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APPsychCalculator.prototype = new aph.Calculator();
  aph.appsychcalc = new aph.APPsychCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});