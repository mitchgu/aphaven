aph.APMusicTheoryCalculator = function () {
  // Initialize Slider objects
  var mc1 = new aph.Slider("Aural Multiple Choice", "mc", 21, 0, 42, this),
      mc2 = new aph.Slider("Non-Aural Multiple Choice", "mc2", 16, 0, 33, this),
      md1 = new aph.Slider("Melodic Dictation 1", "md1", 5, 0, 9, this),
      md2 = new aph.Slider("Melodic Dictation 2", "md2", 5, 0, 9, this),
      hd1 = new aph.Slider("Harmonic Dictation 1", "hd1", 12, 0, 24, this),
      hd2 = new aph.Slider("Harmonic Dictation 2", "hd2", 12, 0, 24, this),
      fb = new aph.Slider("Part Writing from Figured Bass", "fb", 13, 0, 25, this),
      rn = new aph.Slider("Part Writing from Roman Numerals", "rn", 9, 0, 18, this),
      bl = new aph.Slider("Composition of a Bass Line", "bl", 5, 0, 9, this),
      ss1 = new aph.Slider("Sight Singing 1", "ss1", 5, 0, 9, this),
      ss2 = new aph.Slider("Sight Singing 2", "ss2", 5, 0, 9, this);
  aph.Sliderset([md1, md2], "slidergroup1", "Lock Melodic Dictation Sliders", this);
  aph.Sliderset([hd1, hd2], "slidergroup2", "Lock Harmonic Dictation Sliders", this);
  aph.Sliderset([ss1, ss2], "slidergroup3", "Lock Sight Singing Sliders", this);
  // Initialize Curve objects
  var curve1 = new aph.Curve(2008, [62, 90, 114, 139, 200]),
      curve2 = new aph.Curve(2003, [61, 85, 109, 132, 200]);
  curve1.setChecked();
  var curveset = new aph.Curveset([curve1, curve2], this);

  // Append calculator-output with subscore display
  $("#calculator-output").append('<p class="output-header">Aural Subscore</p><output id="auralsubscore" class="output-number"></output>');
  $("#calculator-output").append('<p class="output-header">Non-Aural Subscore</p><output id="nonauralsubscore" class="output-number"></output>');

  this.recalculate = function () { // Uses CB formulas to calculate scores
    var mcaural = 45. / 42 * mc1.getValue();
    var mcnonaural = 45. / 33 * mc2.getValue();
    var score1 = this.round(mcaural + mcnonaural);
    var fraural = 55. / 54 * (md1.getValue() + md2.getValue() + ss1.getValue() + ss2.getValue()) + 55. / 3 / 48 * (hd1.getValue() + hd2.getValue());
    var frnonaural = 55. / 3 / 25 * fb.getValue() + 13.75 / 18 * rn.getValue() + 275 / 12 / 9 * bl.getValue();
    var score2 = this.round(fraural + frnonaural);
    var apscore = curveset.getAPScore(score1 + score2);
    this.display(score1, score2, apscore);

    var auralsubscore = Math.round(mcaural + fraural);
    var nonauralsubscore = Math.round(mcnonaural + frnonaural);
    $("#auralsubscore").html(auralsubscore + " / 100");
    $("#nonauralsubscore").html(nonauralsubscore + " / 100");
  };

  this.recalculate();
};

$(document).ready(function () {

  aph.APMusicTheoryCalculator.prototype = new aph.Calculator();
  aph.apmusictheorycalc = new aph.APMusicTheoryCalculator();

  $("#calculator").fadeTo(314.159265358979323, 1);

});