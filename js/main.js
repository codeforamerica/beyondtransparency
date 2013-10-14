
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
