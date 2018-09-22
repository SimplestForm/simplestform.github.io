console.log("toc loaded");

$(function(){
  var iteration = 0;

  $(".article-toc ul").each(function(){
    var toc = $(this);
    iteration++;
    $(".container h2, .container h3").each(function(){
      console.log(iteration);
      if($(this).is("h2")){
        itemClass = "level1";
      }
      else{
        itemClass = "level2";
      }

      itemID = $(this).attr("id");
      itemText = $(this).text();
      toc.append("<a href='#" + itemID + "'><li class='" + itemClass + "'>" + itemText + "</li>");
      console.log(toc, $(this));
    });
  });
});
