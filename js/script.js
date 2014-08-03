function divGrid(x,y) {
  for (var i = 0, limit_x = x; i < limit_x; i++){
    $("#container").append('<div class="grid-element-x">Red</div>');
    for (var j = 0, limit_y = y; j < limit_y; j++ ){
      $("#container").append('<div class="grid-element-y">Blue</div>');
    }
  }
}


$(document).ready(function(){
  divGrid(5,5);
});
