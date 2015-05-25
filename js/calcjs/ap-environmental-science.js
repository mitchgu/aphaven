aph.APEnviroSciCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 50, 0, 100, this),
      frq1 = new aph.Slider("1st FRQ", "frq1", 5, 0, 10, this),
      frq2 = new aph.Slider("2nd FRQ", "frq2", 5, 0, 10, this),
      frq3 = new aph.Slider("3rd FRQ", "frq3", 5, 0, 10, this),
      frq4 = new aph.Slider("4th FRQ", "frq4", 5, 0, 10, this);
  aph.Sliderset([frq1, frq2, frq3, frq4], "slidergroup1", "Lock Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2008, [61, 74, 86, 106, 150]),
      curve2 = new aph.Curve(2003, [54, 65, 76, 95, 150]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(.9 * mc.getValue());
    var score2 = this.round(1.5 * (frq1.getValue() + frq2.getValue() + frq3.getValue() + frq4.getValue()));
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APEnviroSciCalculator.prototype = new aph.Calculator();
  aph.apenviroscicalc = new aph.APEnviroSciCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});