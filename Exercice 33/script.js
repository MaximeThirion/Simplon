/*
 * accordéon
 * Quand je clique sur le titre d'un article, je veux afficher le paragraphe correspondant
 */

$(function() {

  $('h3').on('click', function (event) {

    $(this).next().toggle().parent().siblings().find('p').hide()

  })

});