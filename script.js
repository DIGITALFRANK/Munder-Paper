$(document).ready(function(){
    // burger nav animation, launches lightbox 
    $('.toggle').click(function(){
      $('#nav').toggleClass('open');
      $('.lightbox').toggleClass('lightbox-open');
      $('.nav-list').toggleClass('nav-list-entry-animation');
    });
    // exit lightbox with escape key
    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            $('#nav').removeClass('open');
            $('.lightbox').removeClass('lightbox-open');
            $('.nav-list').toggleClass('nav-list-entry-animation');
        }
    });


    // ///////////////////////////// bottom tree animation scroll up & scroll down
    let tree = document.getElementById('tree');

    var lastScrollTop = 0;
    var delta = 5;
    var didScroll;
    // on scroll, let the interval function know the user has scrolled
    $(window).scroll(function(event){
    didScroll = true;
    });
    // run hasScrolled() and reset didScroll status
    setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
    }, 250);
    function hasScrolled() {
    // do stuff here...
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop){
        // Scroll Down
        // $('header').addClass('nav-down');
        tree.setAttribute('class', 'slideOutDown');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            tree.setAttribute('class', 'slideInUp');
        }
    }
    
    lastScrollTop = st;
}

    // ///////////////////////////// slideshow animation

    let current = 0,
    slides = document.getElementsByClassName("slide");

    setInterval(function() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    current = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
    }, 3000);




    // ///////////////////////////// email lightbox pop up


});





// BUBBLY BUTTON JS

// var animateButton = function(e) {

//     e.preventDefault;
//     //reset animation
//     e.target.classList.remove('animate');
    
//     e.target.classList.add('animate');
//     setTimeout(function(){
//       e.target.classList.remove('animate');
//     },700);
//   };
  
//   var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
//   for (var i = 0; i < bubblyButtons.length; i++) {
//     bubblyButtons[i].addEventListener('click', animateButton, false);
// }