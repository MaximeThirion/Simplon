/**
 * Gestion des onglets
 * Lorsque l'on clique sur un lien, il faut ajouter la classe active au <li> parent de ce lien et afficher l'article correspondant.
 */

$(function(){

  $('ul li a').on("click", function (event) {

    //transformer l'élement HTML en objet jquery
    $(event.target).parent().addClass("active").siblings().removeClass("active");

    const article_id = $(event.target).attr('href');
    $(article_id).show().siblings().hide();
  });

});