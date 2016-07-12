$(document).ready(function() {
  $(".text a").click(function(e) {
    e.preventdefault();
  });
  $(".doppler-howmuch>div").click(function() {
    var targetShow = $(this).attr('id');
    $(".doppler-introbox").fadeIn(500);
    $('.box[data-show=' + targetShow + ']').fadeIn(500).css("animation-name", "showUp");;
    $(".doppler").addClass('blur');
    $("body").css("overflow-y","hidden");
  });
  $(".close, .bg-close").click(function() {
    $(".doppler-introbox, .box").fadeOut(500);
    $(".box").css("animation-name", "showDown");
    $(".doppler").removeClass('blur');
    $("body").css("overflow-y","auto");
  });
});
$(window).load(function() {
  // 一開始進來
  $(".doppler-content").fadeIn(4000);
  $(".doppler-content").css("display","flex");
});

// //reveal效果
// window.sr = ScrollReveal();
// sr.reveal('.sec1 .reveal',300);
// sr.reveal('.sec2 .reveal',400);
// sr.reveal('.sec3 .reveal',400);
// sr.reveal('.sec4 .reveal',400);
// sr.reveal('.sec5 .reveal',340);




