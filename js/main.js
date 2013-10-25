
$(".menu-btn").click(function(){

  if($(".chapter-nav").is(".show")){
    $(".chapter-nav").removeClass("show");
    $(".page").removeClass("withsidebar");
    $(".navbar").removeClass("withsidebar")

  } else{
    $(".page").addClass("withsidebar")
    $(".chapter-nav").addClass("show");
    $(".navbar").addClass("withsidebar")
  }

});

$(".chapter-nav .close").click(function(){
  $(".menu-btn").click();
})


$(function(){

  if($("div.in-chapter-nav").length > 0){
    $(".chapter-text").find("h3").each(function(i,el){
      $el = $(el);
      var slug = $el.text().toLowerCase().replace(/\s/g, "-").replace("'", "");
      $el.append("<a href='#"+slug+"' name='"+slug+"' ></a>")
      var $sectionLink = $("<li>"+$el.text()+"</li>");
      (function($el){
        $sectionLink.click(function(){
          $(document).scrollTo( $el, 500, {offset:{top:-120}, easing:"swing" });
        });
      })($el);
      $("div.in-chapter-nav ul.sections").append($sectionLink);
    });
  }
});


// Fix chapter navigation in place when it's about to be scrolled off the window
var $fixedEl = $('.in-chapter-nav')
var fixedElPosition
var fixedElWidth = $fixedEl.width()

$(window).scroll(function () {
  if ($fixedEl.length > 0 ) {
    if ($(window).scrollTop() > $fixedEl.offset().top - 110 && !fixedElPosition) {
      fixedElPosition = $fixedEl.offset().top - 110
      $fixedEl.css('position', 'fixed').css('top', '90px').css('width', fixedElWidth + 'px');
      $('.return-top').show()
    }
    else if ($(window).scrollTop() < fixedElPosition) {
      fixedElPosition = null
      $fixedEl.css('position', 'relative').css('top', '0');
      $('.return-top').hide()
    }
  }
});

$('.return-top').click(function() {
  $(document).scrollTo('.page', 500, {easing:"swing"})
})

