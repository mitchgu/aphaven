/* Author:Mitchell Gu

 */

$(function () {

  $("#main-header").hover(function () {
    $('#slidedown').stop();
    $('#site-heading').stop();
    $('#slidedown').animate({ bottom:'-209px' }, 500);
    $('#site-heading').animate({ borderBottomWidth:'4px', height:'89px' }, 500);

    if ($("#slidedownswitch input").prop("checked")) {
      $('#main-header').stop();
      $('#main-header').animate({ height:'282px' }, 500);
    }

  }, function () {
    $('#slidedown').stop();
    $('#site-heading').stop();
    $('#slidedown').animate({bottom:"0px"}, 500);
    $('#site-heading').animate({ borderBottomWidth:'1px', height:'92px' }, 500);

    if ($("#slidedownswitch input").prop("checked")) {
      $('#main-header').stop();
      $('#main-header').animate({height:"72px"}, 500);
    }
  });

  $("#hedgehogswitch").toggle(
      function () {
        $("body").css('background-image', 'url(/img/hedgehog.jpeg)');
      },
      function () {
        $("body").css('background-image', 'url(/img/bg.jpg');
      }
  );

});