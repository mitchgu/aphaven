aph.APArtHistoryCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 50, 0, 115, this),
      frq1 = new aph.Slider("1st Short FRQ", "frq1", 2, 0, 4, this),
      frq2 = new aph.Slider("2nd Short FRQ", "frq2", 2, 0, 4, this),
      frq3 = new aph.Slider("3rd Short FRQ", "frq3", 2, 0, 4, this),
      frq4 = new aph.Slider("4th Short FRQ", "frq4", 2, 0, 4, this),
      frq5 = new aph.Slider("5th Short FRQ", "frq5", 2, 0, 4, this),
      frq6 = new aph.Slider("6th Short FRQ", "frq6", 2, 0, 4, this),
      frq7 = new aph.Slider("7th Short FRQ", "frq7", 2, 0, 4, this),
      frq8 = new aph.Slider("1st Long FRQ", "frq8", 5, 0, 9, this),
      frq9 = new aph.Slider("2nd Long FRQ", "frq9", 5, 0, 9, this);
  aph.Sliderset([frq1, frq2, frq3, frq4, frq5, frq6, frq7], "slidergroup1", "Lock Short Free Response Sliders", this);
  aph.Sliderset([frq8, frq9], "slidergroup2", "Lock Long Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2009, [71, 89, 112, 141, 200]),
      curve2 = new aph.Curve(2004, [62, 81, 109, 139, 200]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(80. / 115 * mc.getValue());
    var score2 = this.round(2.5 * (frq1.getValue() + frq2.getValue() + frq3.getValue() + frq4.getValue() + frq5.getValue() + frq6.getValue() + frq7.getValue()) + 25. / 9 * (frq8.getValue() + frq9.getValue()));
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APArtHistoryCalculator.prototype = new aph.Calculator();
  aph.aparthistorycalc = new aph.APArtHistoryCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});