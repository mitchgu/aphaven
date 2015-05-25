aph.APLitCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice (Percent)", "mc", 50, 0, 100, this),
      frq1 = new aph.Slider("1st Essay", "frq1", 5, 0, 9, this),
      frq2 = new aph.Slider("2nd Essay", "frq2", 5, 0, 9, this),
      frq3 = new aph.Slider("3rd Essay", "frq3", 5, 0, 9, this);
  aph.Sliderset([frq1, frq2, frq3], "slidergroup1", "Lock Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2009, [52, 80, 97, 113, 150]),
      curve2 = new aph.Curve(2004, [49, 75, 94, 110, 150]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(67.5 / 100 * mc.getValue());
    var score2 = this.round(82.5 / 27 * (frq1.getValue() + frq2.getValue() + frq3.getValue()));
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APLitCalculator.prototype = new aph.Calculator();
  aph.aplitcalc = new aph.APLitCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});