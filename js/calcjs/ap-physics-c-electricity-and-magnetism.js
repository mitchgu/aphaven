aph.APPhysicsCElecCalculator = function () {
  // Initialize Slider objects
  var mc = new aph.Slider("Multiple Choice", "mc", 17, 0, 35, this),
      frq1 = new aph.Slider("1st Free Response", "frq1", 7, 0, 15, this),
      frq2 = new aph.Slider("2nd Free Response", "frq2", 7, 0, 15, this),
      frq3 = new aph.Slider("3rd Free Response", "frq3", 7, 0, 15, this);
  aph.Sliderset([frq1, frq2, frq3], "slidergroup1", "Lock Free Response Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2009, [19, 31, 38, 52, 90]),
      curve2 = new aph.Curve(2004, [19, 27, 33, 47, 90]);

  curve1.setChecked();

  var curveset = new aph.Curveset([curve1, curve2], this);

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var score1 = this.round(45. / 35. * mc.getValue());
    var score2 = this.round(frq1.getValue() + frq2.getValue() + frq3.getValue());
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APPhysicsCElecCalculator.prototype = new aph.Calculator();
  aph.apphysicsceleccalc = new aph.APPhysicsCElecCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});