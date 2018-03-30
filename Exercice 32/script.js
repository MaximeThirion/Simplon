$(function(){

  // au survol des balises <a>, je veux qu'une infobulle soit créée
  // et affiche le contenu de l'attribut "title" du a en question
  $('a').on('mouseenter', function(){
    const content = $(this).data('title');
    const tooltip = $('<div>'+ content +'</div>');
    $(this).append(tooltip)
  });
  
  $('a').on('mouseleave', function () {
    $(this).find('div').remove();
  })
});

