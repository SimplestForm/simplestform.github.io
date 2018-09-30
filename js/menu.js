var clicked = false;
console.log($(".topbar-hamburger"));
$(".topbar-hamburger").click(function(){
  $(".topbar-inner").toggleClass("show-sidebar");
  clicked = !clicked
  console.log(clicked);
  if (clicked == true){
    $(".topbar-hamburger span").html("<i class='fas fa-times'></i>");
  }
  else{
    $(".topbar-hamburger span").html("<i class='fas fa-bars'></i>");
  }
});
