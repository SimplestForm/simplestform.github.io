console.log("toc loaded");

var toc = $(".article-toc ul");
var level;

$(".container h2, .container h3").each(function(){
  if($(this).is("h2")){
    itemClass = "level1";
  }
  else{
    itemClass = "level2";
  }

  itemID = $(this).attr("id");
  itemText = $(this).text();
  toc.append("<a href='#" + itemID + "'<li class='" + itemClass + "'>" + itemText + "</li>");
});
