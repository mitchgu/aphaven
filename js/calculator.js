$(document).ready(function () {
  $(".calculator-no-js").remove();

  // Add semantic classnames automatically for styling
  $("#calculator-output output").addClass("output-number");
  $("#calculator-output p").addClass("output-header");
  $("#curveset label").addClass("curve-label");

});

var aph = window.aph || {}; // Initialize namespace aph


// --------- Slider Object ---------- //
aph.Slider = function (name, id, initial, min, max, obj) {
  // Initialize jQuery sliders
  var value = initial;
  var sliderid = id + "slider";
  var slideroutputid = id + "output";
  var html = '<li><span class="slider-label">' + name + ' Score: </span><output id="' + slideroutputid + '" class="slider-output"></output><div id="' + sliderid + '"></div></li>';
  $("#sliderset ul").append(html);

  $("#" + sliderid).slider({
    range:"min",
    animate:true,
    value:initial,
    min:min,
    max:max,
    step:1,
    slide:function (event, ui) {
      value = ui.value;
      setOutput(ui.value);
      obj.recalculate();
    }
  });

  function getValue() { // Getter method for slider value
    return value;
  }

  function setValue(val) { // Setter method for slider value
    value = val;
    $("#" + sliderid).slider("value", value);
  }

  function setOutput(val) {
    $("#" + slideroutputid).html(val + " / " + max);
  }

  function getID() {
    return sliderid;
  }

  setOutput(value);

  return {
    getValue:getValue,
    setValue:setValue,
    setOutput:setOutput,
    getID:getID
  };

};

// --------- Sliderset Object ---------- //

aph.Sliderset = function (sliderList, id, label, obj) {

  var lock = false;
  var html = '<li><label class="slidercheckbox buttondeselected"><input type="checkbox" id="' + id + '" class="free-response-lock">' + label + '</label></li>';
  $("#sliderset ul").append(html);
  $("#" + id).change(function () {
    lock = $("#" + id).prop("checked");
    $("#" + id).parent().toggleClass("buttondeselected", !lock);
    $("#" + id).parent().toggleClass("buttonselected", lock);
  });

  $.each(sliderList, function (index, slider) {
    $("#" + slider.getID()).unbind("slide");
    $("#" + slider.getID()).bind("slide", function (event, ui) {
      //value = ui.value;
      if (lock) {
        $.each(sliderList, function (newindex, newslider) {
          if (index != newindex) {
            newslider.setValue(ui.value);
          }
          newslider.setOutput(ui.value);
        });
        obj.recalculate();
      }
      else {
        slider.setOutput(ui.value);
        obj.recalculate();
      }
    });
  });

};

// --------- Curve Object ---------- //
aph.Curve = function (year, arr) {
  var html = '<label id="curve' + year + '"><input type="radio" name="curveset">' + year + ' curve</label>';

  $("#curveset").append(html); // Add the button html to the document

  function getCurve() { // Getter method for curve array
    return arr;
  }

  function setChecked() { // Method to set a button as checked
    $("#curve" + year + " input").attr("checked", true);
  }

  function getID() {
    return "curve" + year;
  }

  return {
    getCurve:getCurve,
    setChecked:setChecked,
    getID:getID
  };
};

// --------- Curveset Object ---------- //
aph.Curveset = function (inputList, obj) { // input list must be an array of curve objects in the order they appear in the html
  var activecurve;

  $("#" + inputList[0].getID()).addClass("firstcurve");
  $("#" + inputList[inputList.length - 1].getID()).addClass("lastcurve");

  function getChecked() { // Function to retrieve the curve object that is checked
    var radios = $('#curveset input[type="radio"]');
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return inputList[i];
      }
    }
    return null;
  }

  function checkCurve() { // Changes the active curve
    activecurve = getChecked();
    $.each(inputList, function (index, curve) {
      if (curve == activecurve) {
        $("#" + curve.getID()).removeClass("buttondeselected");
        $("#" + curve.getID()).addClass("buttonselected");
      }
      else {
        $("#" + curve.getID()).removeClass("buttonselected");
        $("#" + curve.getID()).addClass("buttondeselected");
      }
    });
  }

  function getAPScore(composite) { // Returns the AP score
    var i = 0;
    while (composite > activecurve.getCurve()[i]) {
      i++;
    }
    switch (i + 1) {
      case 1:
        $("#apscore").css("color", "#E24949");
        break;
      case 2:
        $("#apscore").css("color", "#EE911A");
        break;
      case 3:
        $("#apscore").css("color", "green");
        break;
      case 4:
        $("#apscore").css("color", "#3CAA33");
        break;
      case 5:
        $("#apscore").css("color", "#1BDF00");
        break;
    }
    return i + 1;
  }

  $("#curveset input").change(function () {
    checkCurve();
    obj.recalculate();
  }); // When the buttons are interacted with, change the curve and recalculate
  //$("#curveset").buttonset();  // Assign curve jquery radio buttons
  checkCurve();

  return {
    getAPScore:getAPScore
  };
};

// --------- Calculator Object ---------- //
aph.Calculator = function () {

  this.round = function (num) { // Rounds to three decimals
    return Math.round(num * 1000) / 1000;
  };

  this.display = function (score1, score2, apscore) { // Displays the scores in calculator-output
    $("#score1").html(score1);
    $("#score2").html(score2);
    $("#composite").html(Math.round(score1 + score2));
    $("#apscore").html(apscore);
  };
};
