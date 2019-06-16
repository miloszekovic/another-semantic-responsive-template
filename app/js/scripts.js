// Mobile menu
$(".js-mobile-toggle").click(function(e) {
  e.preventDefault();
  $(".js-main-nav").toggle(100);
  $(this).toggleClass("active");
});
