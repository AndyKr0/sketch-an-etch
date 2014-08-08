// build a grid x-wide by y-height using a table
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

// color changes on hover
function onHover(element, colorIn, colorOut) {
   $(element).hover(function() {
     $(this).css("background-color", colorIn);
   }, function(){
     $(this).css("background-color", colorOut);
   });
 }

// color changes and stays set on click
function onClick(element, colorClick, colorLeave) {
  $(element).click(function() {
    $(this).css("background-color", colorClick);
    onHover(this, colorClick, colorClick);
  });
}

// color cycle
function colorCycle(element, colorHover, colorLeave, colorClick) {
  $(element).click(function() {
    var colorClickTemp = colorClick;
    var colorLeaveTemp = colorLeave;
    var colorHoverTemp = colorHover;
    colorLeave = colorClickTemp;
    colorClick = colorHoverTemp;
    colorHover = colorLeaveTemp;
  });
}

// reset grid
function resetGrid(){
  $('#reset').click(function ()
  {
    console.log("yes you clicked it!")
    $(".square-default").css("background-color", "red")
  });
}


// main
$(document).ready(function(){
  //set colors
  var colorHover = "yellow";
  var colorLeave = "green";
  var colorClick = "blue";


  tableGrid(10,10);

  onHover(".square-default", colorHover, colorLeave);
  onClick(".square-default", colorClick, colorLeave);
  resetGrid();
});
