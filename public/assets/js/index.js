$(document).ready(function() {
  $(".text a").click(function(e) {
    e.preventdefault();
  });
  $(".doppler-howmuch>div").click(function() {
    var targetShow = $(this).attr('id');
    $(".doppler-introbox").fadeIn(500);
    $('.box[data-show=' + targetShow + ']').fadeIn(0);
    $(".doppler").addClass('blur');
    $("body").css("overflow-y","hidden");
  });
  $(".close,.bg-close").click(function() {
    $(".doppler-introbox").fadeOut(300);
    $('.box').fadeOut(0);
    $(".doppler").removeClass('blur');
    $("body").css("overflow-y","auto");
  });

});

// //reveal效果
// window.sr = ScrollReveal();
// sr.reveal('.sec1 .reveal',300);
// sr.reveal('.sec2 .reveal',400);
// sr.reveal('.sec3 .reveal',400);
// sr.reveal('.sec4 .reveal',400);
// sr.reveal('.sec5 .reveal',340);




