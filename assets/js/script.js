// DETECCIÓN DEL DOM
$(function(){
    console.log('EL DOM SE CARGÓ');

    // FUNCIONALIDAD SMOOTH SCROLL
    $("a").click(function(event){

        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top 
                }, 800, function(){
                window.location.hash = gato;
            })
        }
            
    });

    // FUNCIONALIDAD CAROUSEL
    $('.carousel').carousel({

        interval: 6000,

      });

    // FUNCIONALIDAD TOOLTIP
    $('[data-toggle="tooltip"]').tooltip();

    // FUNCIONALIDAD POPOVER
    $('[data-toggle="popover"]').popover();

});