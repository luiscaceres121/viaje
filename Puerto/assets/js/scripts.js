var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 100) { //Añadimos clases con jquery
          $('nav').addClass('bg-dark', 'shadow');
        } else { 
          $('nav').removeClass('bg-dark', 'shadow');
        }
      }); 
  

$('.title').hover(function() {
  $('.title').addClass('text-danger')
}, function() {
  $('.title').removeClass('text-danger')
})


$( '.enviar' ).on( "click", function() {
  
  alert('Te has suscrito correctamente a Grupo2 Valparaíso')});


     