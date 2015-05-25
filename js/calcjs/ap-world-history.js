aph.APWorldHistoryCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 35, 0, 70, this),
      dbq = new aph.Slider("Document-Based Essay", "dbq", 5, 0, 9, this),
      ccot = new aph.Slider("Continuity and Change-Over-Time Essay", "ccot", 5, 0, 9, this),
      comp = new aph.Slider("Comparative Essay", "comp", 5, 0, 9, this);
  aph.Sliderset([dbq, ccot, comp], "slidergroup1", "Lock Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2007, [33, 47, 63, 76, 120]),
      curve2 = new aph.Curve(2002, [33, 48, 66, 81, 120]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(60. / 70. * mc.getValue());
    var score2 = this.round(60. / 27. * (dbq.getValue() + ccot.getValue() + comp.getValue()));
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APWorldHistoryCalculator.prototype = new aph.Calculator();
  aph.apworldhistorycalc = new aph.APWorldHistoryCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});