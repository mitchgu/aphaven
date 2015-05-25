aph.APCalculusCalculator = function () {
  // Initialize Slider objects
  var mc1 = new aph.Slider("Multiple Choice (no Calculator)", "mc1", 14, 0, 28, this),
      mc2 = new aph.Slider("Multiple Choice (with Calculator)", "mc2", 9, 0, 17, this),
      frq1 = new aph.Slider("1st FRQ", "frq1", 5, 0, 9, this),
      frq2 = new aph.Slider("2nd FRQ", "frq2", 5, 0, 9, this),
      frq3 = new aph.Slider("3rd FRQ", "frq3", 5, 0, 9, this),
      frq4 = new aph.Slider("4th FRQ", "frq4", 5, 0, 9, this),
      frq5 = new aph.Slider("5th FRQ", "frq5", 5, 0, 9, this),
      frq6 = new aph.Slider("6th FRQ", "frq6", 5, 0, 9, this);
  aph.Sliderset([frq1, frq2, frq3, frq4, frq5, frq6], "slidergroup1", "Lock Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve("2008AB", [28, 38, 51, 67, 108]),
      curve2 = new aph.Curve("2003AB", [22, 34, 50, 68, 108]),
      curve3 = new aph.Curve("2008BC", [35, 43, 58, 68, 108]),
      curve4 = new aph.Curve("2003BC", [30, 40, 56, 66, 108]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2, curve3, curve4], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(1.2 * (mc1.getValue() + mc2.getValue()));
    var score2 = this.round(frq1.getValue() + frq2.getValue() + frq3.getValue() + frq4.getValue() + frq5.getValue() + frq6.getValue());
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APCalculusCalculator.prototype = new aph.Calculator();
  aph.apcalculuscalc = new aph.APCalculusCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});