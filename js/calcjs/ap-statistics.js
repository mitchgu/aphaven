aph.APStatisticsCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 20, 0, 40, this),
      frq1 = new aph.Slider("1st FRQ", "frq1", 2, 0, 4, this),
      frq2 = new aph.Slider("2nd FRQ", "frq2", 2, 0, 4, this),
      frq3 = new aph.Slider("3rd FRQ", "frq3", 2, 0, 4, this),
      frq4 = new aph.Slider("4th FRQ", "frq4", 2, 0, 4, this),
      frq5 = new aph.Slider("5th FRQ", "frq5", 2, 0, 4, this),
      frq6 = new aph.Slider("6th FRQ", "frq6", 2, 0, 4, this);
  aph.Sliderset([frq1, frq2, frq3, frq4, frq5, frq6], "slidergroup1", "Lock Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2007, [28, 36, 48, 62, 100]),
      curve2 = new aph.Curve(2002, [34, 44, 56, 69, 100]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(1.25 * mc.getValue());
    var score2 = this.round(1.875 * (frq1.getValue() + frq2.getValue() + frq3.getValue() + frq4.getValue() + frq5.getValue()) + 3.125 * frq6.getValue());
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APStatisticsCalculator.prototype = new aph.Calculator();
  aph.apstatisticscalc = new aph.APStatisticsCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});