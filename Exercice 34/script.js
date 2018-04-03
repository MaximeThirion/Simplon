/**
 * afficher une seule image à la fois, et qui change toutes les 4 secondes
 */

$(function(){

  let cible = $('#carousel').children().first().show();

  setInterval(function () {
    cible.next().show().siblings().hide();
    cible = cible.next();
    if (cible.length < 1) {
      $('#carousel').children().hide();
      cible = $('#carousel').children().first().show();
    }
  }, 1000);

});