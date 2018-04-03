$(function () {

  const half = 90;
  const full = 178;
  const speed = 500;

  const animation1 = function () {

    $('<div>').appendTo('#animation1')
      .animate({right: half}, speed).delay(500)
      .animate({right: 0}, speed).delay(500)
      .animate({top: half}, speed).delay(500)
      .animate({top: full}, speed).delay(500)
      .animate({left: half}, speed).delay(500)
      .animate({left: 0}, speed).delay(500)
      .animate({top: half}, speed).delay(500)
      .animate({top: 0}, speed, function () {
        $(this).remove();
      })
  };
  setInterval(function () {
    animation1()
  }, 1000);

  const animation2 = function () {

    $('<div>').css('background-color', '#C5FFEC').appendTo('#animation2')
      .animate({right: half}, speed).delay(750)
      .animate({right: 0}, speed)
      .animate({top: half}, speed).delay(750)
      .animate({top: full}, speed)
      .animate({left: half}, speed).delay(750)
      .animate({left: 0}, speed)
      .animate({top: half}, speed).delay(750)
      .animate({top: 0}, speed, function () {
        $(this).remove();
      })
  };
  setInterval(function () {
    animation2()
  }, 1000);

  const animation3 = function () {

    $('<div>').css({'background-color' : '#00AA00', 'border-radius' : '50%'}).appendTo('#animation3')
      .animate({top: full, right: half}, speed)
      .animate({top: 0, right: 0}, speed, function () {
        $(this).remove()
      })
  };
  setInterval(function () {
    animation3()
  }, 1000);

  const animation4 = function () {

    $('<div>').css({'background-color' : '#FF5500', 'border-radius' : '50%', 'right' : half}).appendTo('#animation4')
      .animate({top: 190  }, speed * 2)
      .animate({width: 80, right: half - 30}, speed / 3, function () {
        $(this).remove()
      })
  };
  setInterval(function () {
    animation4()
  }, 800);

  const animation5 = function () {

    $('<div>').appendTo('#animation5').animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
    $('<div>').appendTo('#animation5').css('left', '20px').delay(100).animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
    $('<div>').appendTo('#animation5').css('left', '40px').delay(200).animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
    $('<div>').appendTo('#animation5').css('left', '60px').delay(300).animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
    $('<div>').appendTo('#animation5').css('left', '80px').delay(400).animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
    $('<div>').appendTo('#animation5').css('left', '100px').delay(500).animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
    $('<div>').appendTo('#animation5').css('left', '120px').delay(600).animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
    $('<div>').appendTo('#animation5').css('left', '140px').delay(700).animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
    $('<div>').appendTo('#animation5').css('left', '160px').delay(800).animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
    $('<div>').appendTo('#animation5').css('left', '180px').delay(900).animate({top: full}, speed, function () {$(this).css({'background-color' : 'black'})}).animate({top: 0}, speed, function () {$(this).remove()});
  };
  setInterval(function () {
    animation5()
  }, 2000);

  const animation6 = function () {

    $('<div>').appendTo('#animation6').animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
    $('<div>').appendTo('#animation6').css('top', '20px').delay(100).animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
    $('<div>').appendTo('#animation6').css('top', '40px').delay(200).animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
    $('<div>').appendTo('#animation6').css('top', '60px').delay(300).animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
    $('<div>').appendTo('#animation6').css('top', '80px').delay(400).animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
    $('<div>').appendTo('#animation6').css('top', '100px').delay(500).animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
    $('<div>').appendTo('#animation6').css('top', '120px').delay(600).animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
    $('<div>').appendTo('#animation6').css('top', '140px').delay(700).animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
    $('<div>').appendTo('#animation6').css('top', '160px').delay(800).animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
    $('<div>').appendTo('#animation6').css('top', '180px').delay(900).animate({left: full}, speed * 2, function () {$(this).css({'border-radius' : '50%'})}).animate({left: 0}, speed * 2, function () {$(this).remove()});
  };
  setInterval(function () {
    animation6()
  }, 3000);

  const animation7 = function () {

    $('<div>').appendTo('#animation7').css({top: half, left: half}, speed)
      .animate({height: '100%', width: '100%', top: 0, left: 0}, speed)
      .animate({height: '20px', width: '20px', top: full, left: full}, speed)
      .animate({top: 0, left: 0}, speed)
      .animate({top: full}, speed)
      .animate({top: half, left: half}, speed, function () {$(this).remove()})
  };
  setInterval(function () {
    animation7()
  }, 3000);

  const animation8 = function () {

    $('<div>').appendTo('#animation8').animate({left: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css('top', '40px').appendTo('#animation8').animate({left: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css('top', '80px').appendTo('#animation8').animate({left: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css('top', '120px').appendTo('#animation8').animate({left: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css('top', '160px').appendTo('#animation8').animate({left: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'top' : '20px', 'right' : '0px', 'background-color' : '#17d0ff'}).appendTo('#animation8').animate({right: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'top' : '60px', 'right' : '0px', 'background-color' : '#17d0ff'}).appendTo('#animation8').animate({right: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'top' : '100px', 'right' : '0px', 'background-color' : '#17d0ff'}).appendTo('#animation8').animate({right: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'top' : '140px', 'right' : '0px', 'background-color' : '#17d0ff'}).appendTo('#animation8').animate({right: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'top' : '180px', 'right' : '0px', 'background-color' : '#17d0ff'}).appendTo('#animation8').animate({right: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'left' : '20px', 'top' : full, 'background-color' : '#ff5d1f'}).appendTo('#animation8').animate({top: 0}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'left' : '60px', 'top' : full, 'background-color' : '#ff5d1f'}).appendTo('#animation8').animate({top: 0}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'left' : '100px', 'top' : full, 'background-color' : '#ff5d1f'}).appendTo('#animation8').animate({top: 0}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'left' : '140px', 'top' : full, 'background-color' : '#ff5d1f'}).appendTo('#animation8').animate({top: 0}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'left' : '40px', 'top' : '0px', 'background-color' : '#ffe43c'}).appendTo('#animation8').animate({top: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'left' : '80px', 'top' : '0px', 'background-color' : '#ffe43c'}).appendTo('#animation8').animate({top: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'left' : '120px', 'top' : '0px', 'background-color' : '#ffe43c'}).appendTo('#animation8').animate({top: full}, speed * 4, function () {$(this).remove()});
    $('<div>').css({'left' : '160px', 'top' : '0px', 'background-color' : '#ffe43c'}).appendTo('#animation8').animate({top: full}, speed * 4, function () {$(this).remove()});
  };
  setInterval(function () {
    animation8()
  }, 2000)
});