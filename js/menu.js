var clicked = false;
$(".topbar-hamburger").click(function(){
  $(".topbar-inner").toggleClass("show-sidebar");
  clicked = !clicked
  if (clicked == true){
    $(".topbar-hamburger span").html("<i class='fas fa-times'></i>");
  }
  else{
    $(".topbar-hamburger span").html("<i class='fas fa-bars'></i>");
  }
});
