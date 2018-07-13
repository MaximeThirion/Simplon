
$( "#rond1" ).click(function() {

  if ($("#rond1").hasClass('anime')) {

    $( "#rond1" ).removeClass('anime').animate({
      left: "-=50",
      top: "-=25",
      height: "+=100",
      width: "+=100"
    }, 500);

    $( "#rond1_icone" ).animate({marginLeft: "+=50"}, 500);
    $( "#rond1_texte").delay(500).fadeIn(200);

    $( "#rond2" ).animate({top: "+=50"}, 500);
    $( "#rond3" ).animate({top: "+=25"}, 500);
  }
  else {

    $( "#rond1_texte").fadeOut(100);

    $( "#rond1" ).addClass('anime').animate({
      left: "+=50",
      top: "+=25",
      height: "-=100",
      width: "-=100"
    }, 500);

    $( "#rond1_icone" ).animate({marginLeft: "-=50"}, 500);

    $( "#rond2" ).animate({top: "-=50"}, 500);
    $( "#rond3" ).animate({top: "-=25"}, 500);
  }
});

$( "#rond2" ).click(function() {

  if ($("#rond2").hasClass('anime')) {

    $("#rond2").removeClass('anime').animate({
      left: "-=50",
      top: "-=50",
      height: "+=100",
      width: "+=100"
    }, 500);

    $("#rond2_icone").animate({marginLeft: "+=50"}, 500);
    $("#rond2_texte").delay(500).fadeIn(200);

    $("#rond1").animate({top: "-=25"}, 500);
    $("#rond3").animate({top: "+=25"}, 500);

  }
  else {

    $( "#rond2_texte").fadeOut(100);

    $("#rond2").addClass('anime').animate({
      left: "+=50",
      top: "+=50",
      height: "-=100",
      width: "-=100"
    }, 500);

    $("#rond2_icone").animate({marginLeft: "-=50"}, 500);

    $("#rond1").animate({top: "+=25"}, 500);
    $("#rond3").animate({top: "-=25"}, 500);
  }
});

$( "#rond3" ).click(function() {

  if ($("#rond3").hasClass('anime')) {

    $("#rond3").removeClass('anime').animate({
      left: "-=50",
      top: "-=75",
      height: "+=100",
      width: "+=100"
    }, 500);

    $("#rond3_icone").animate({marginLeft: "+=50"}, 500);
    $("#rond3_texte").delay(500).fadeIn(200);

    $("#rond1").animate({top: "-=25"}, 500);
    $("#rond2").animate({top: "-=50"}, 500);

  }
  else  {

    $( "#rond3_texte").fadeOut(100);

    $("#rond3").addClass('anime').animate({
      left: "+=50",
      top: "+=75",
      height: "-=100",
      width: "-=100"
    }, 500);

    $("#rond3_icone").animate({marginLeft: "-=50"}, 500);

    $("#rond1").animate({top: "+=25"}, 500);
    $("#rond2").animate({top: "+=50"}, 500);
  }
});

