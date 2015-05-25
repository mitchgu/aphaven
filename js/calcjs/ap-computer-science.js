aph.APCompSciCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 20, 0, 40, this),
      frq1 = new aph.Slider("1st FRQ", "frq1", 5, 0, 9, this),
      frq2 = new aph.Slider("2nd FRQ", "frq2", 5, 0, 9, this),
      frq3 = new aph.Slider("3rd FRQ", "frq3", 5, 0, 9, this),
      frq4 = new aph.Slider("4th FRQ", "frq4", 5, 0, 9, this);
  aph.Sliderset([frq1, frq2, frq3, frq4], "slidergroup1", "Lock Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2009, [28, 36, 46, 61, 80]),
      curve2 = new aph.Curve(2004, [35, 42, 51, 64, 80]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(mc.getValue());
    var score2 = this.round(10. / 9 * (frq1.getValue() + frq2.getValue() + frq3.getValue() + frq4.getValue()));
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APCompSciCalculator.prototype = new aph.Calculator();
  aph.apcompscicalc = new aph.APCompSciCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});