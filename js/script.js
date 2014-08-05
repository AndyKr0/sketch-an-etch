function tableGrid(x,y) {
  var ourTable = '';

  ourTable += '<table>';
  for (var i = 0; i < y ; i++) {
    ourTable +='<tr>';
    for (var j = 0; j < x; j++) {
      ourTable +='<td><div class="square-default"></div></td>';
    }
    ourTable += '</tr>'
  }
  ourTable += '</table>'
  $('#main-body').append(ourTable)


}

function onHover(color1, color2) {
   $('.square-default').hover($(this).css({"background-color":"green"}),
    $(this).css({"background-color":"blue"}));
}



$(document).ready(function(){
  tableGrid(10,10);
  $('.square-default').click(function() {
    $(this).css("background-color","red")});
  $('.square-default').hover(function() {
    $(this).css("background-color","green")},
     function() { $(this).css("background-color","blue")}
   );


});
