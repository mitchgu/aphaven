aph.APCompGovCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 30, 0, 55, this),
      frq1 = new aph.Slider("1st Short Answer", "frq1", 2, 0, 3, this),
      frq2 = new aph.Slider("2nd Short Answer", "frq2", 2, 0, 3, this),
      frq3 = new aph.Slider("3rd Short Answer", "frq3", 2, 0, 3, this),
      frq4 = new aph.Slider("4th Short Answer", "frq4", 2, 0, 3, this),
      frq5 = new aph.Slider("5th Short Answer", "frq5", 2, 0, 3, this),
      frq6 = new aph.Slider("Conceptual Question", "frq6", 3, 0, 5, this),
      frq7 = new aph.Slider("1st Country Specific Question", "frq7", 4, 0, 7, this),
      frq8 = new aph.Slider("2nd Country Specific Question", "frq8", 4, 0, 7, this);
  aph.Sliderset([frq1, frq2, frq3, frq4, frq5], "slidergroup1", "Lock Short Answer Sliders", this);
  aph.Sliderset([frq7, frq8], "slidergroup2", "Lock Country Specific Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2006, [42, 59, 71, 83, 120]),
      curve2 = new aph.Curve(1999, [34, 51, 72, 82, 120]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(60. / 55 * mc.getValue());
    var score2 = this.round((frq1.getValue() + frq2.getValue() + frq3.getValue() + frq4.getValue() + frq5.getValue()) + 3. * frq6.getValue() + 15. / 7 * (frq7.getValue() + frq8.getValue()));
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APCompGovCalculator.prototype = new aph.Calculator();
  aph.apcompgovcalc = new aph.APCompGovCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});