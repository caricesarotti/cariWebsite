$(document).ready(function() {
  $(".read-more").click(function () {
    $("#moretext_" + this.id.split("_")[1]).toggle();
    $(this).text(function(i, text){
          return text === "Read more" ? "Read less" : "Read more";
      })
  });
});
