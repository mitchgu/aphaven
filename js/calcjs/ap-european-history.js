aph.APEuroHistoryCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 50, 0, 80, this),
      dbq = new aph.Slider("DBQ", "dbq", 5, 0, 9, this),
      frq1 = new aph.Slider("1st FRQ", "frq1", 5, 0, 9, this),
      frq2 = new aph.Slider("2nd FRQ", "frq2", 5, 0, 9, this);
  aph.Sliderset([dbq, frq1, frq2], "slidergroup1", "Lock Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2009, [59, 70, 99, 118, 180]),
      curve2 = new aph.Curve(2004, [59, 76, 105, 125, 180]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(1.125 * mc.getValue());
    var score2 = this.round(4.5 * dbq.getValue() + 2.75 * (frq1.getValue() + frq2.getValue()));
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APEuroHistoryCalculator.prototype = new aph.Calculator();
  aph.apeurohistorycalc = new aph.APEuroHistoryCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});