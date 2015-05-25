aph.APMicroCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 30, 0, 60, this),
      frq1 = new aph.Slider("Long FRQ (%)", "frq1", 50, 0, 100, this),
      frq2 = new aph.Slider("Short FRQ 1 (%)", "frq2", 50, 0, 100, this),
      frq3 = new aph.Slider("Short FRQ 2 (%)", "frq3", 50, 0, 100, this);
  new aph.Sliderset([frq1, frq2, frq3], "slidergroup1", "Lock Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2005, [38, 49, 61, 74, 90]),
      curve2 = new aph.Curve(2000, [34, 46, 57, 72, 90]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(1. * mc.getValue());
    var score2 = this.round(15. / 100 * frq1.getValue() + 7.5 / 100 * (frq2.getValue() + frq3.getValue()));
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APMicroCalculator.prototype = new aph.Calculator();
  aph.apmicrocalc = new aph.APMicroCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});