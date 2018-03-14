$(document).ready(function(){
   
    $('.toggle').click(function(){
      $('#nav').toggleClass('open');
      $('.lightbox').toggleClass('lightbox-open');
      $('.nav-list').toggleClass('nav-list-entry-animation');
    });

    $('.toggle').click(function() {
         //if the lightbox was open make the nav list fade up
        // if ($('#nav').hasClass('open')) {
        //     $('.nav-list').toggleClass('nav-list-entry-animation');
        //     $('.nav-list').toggleClass('nav-list-exit-animation');
        // }
        // do {
        //     $('.nav-list').toggleClass('nav-list-exit-animation')
        // } while ($('#nav').hasClass('open'));
    });

    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            $('#nav').removeClass('open');
            $('.lightbox').removeClass('lightbox-open');
            $('.nav-list').toggleClass('nav-list-entry-animation');
        }
    });


});