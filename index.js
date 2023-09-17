$(document).ready(function(){
  // first script
  $(".header_inner").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  // second script
  $(".menu_navigation_item_sub_titles").hide();
  $(".menu_navigation_icon_arrow img").addClass("rotate0");

  $(".menu_navigation_item_name").click(function() {
    if ($(".menu_navigation_item_sub_titles").is(":visible")) {
      $(".menu_navigation_item_sub_titles").slideUp();
      $(".menu_navigation_icon_arrow img").removeClass("rotate90");
      $(".menu_navigation_icon_arrow img").addClass("rotate0");
    } else {
      $(".menu_navigation_item_sub_titles").slideDown();
      $(".menu_navigation_icon_arrow img").removeClass("rotate0");
      $(".menu_navigation_icon_arrow img").addClass("rotate90");
    }
  });

  // third script
  $(".menu").click(function() {
    $(".menu_wrapper").css("right", "0");
  });

  $(".close").click(function() {
    $(".menu_wrapper").css("right", "-300px");
  });
});
