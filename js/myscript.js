
// bounce effect on hover
$(".icons").hover(function() {
      $(this).effect("bounce", { times: 1 }, 480);
});

// adding smooth scroll

$('a[href*="#"]:not([href="#"])').on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 1050, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
