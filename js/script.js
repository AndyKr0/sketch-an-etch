// MAIN
$(document).ready(function(){
  //set colors and grid size
  var colorHover = "yellow";
  var colorLeave = "green";
  var colorClick = "grey"
  var defaultGridSize = 5;

  // logic
  tableGrid(defaultGridSize, defaultGridSize);
  mouseEvents(".square-default", colorHover, colorLeave, colorClick);

  $("#random").click(function()
  {

    mouseEvents(".square-default", randomColorGenerator, randomColorGenerator, colorClick);
  });

  $('#reset').click(function ()
  {
    var gridSize = prompt("Enter grid size:");
    $('#grid').replaceWith(tableGrid(gridSize, gridSize));
    mouseEvents(".square-default", colorHover, colorLeave, colorClick);
  });

});

// FUNCTIONS
// build a grid x-wide by y-height using a table
function tableGrid(x,y) {
  var ourTable = '';

  ourTable += '<table id="grid">';
  for (var i = 0; i < y ; i++) {
    ourTable +='<tr>';
    for (var j = 0; j < x; j++) {
      ourTable +='<td><div class="square-default"></div></td>';
    }
    ourTable += '</tr>';
  }
  ourTable += '</table>';

  $('#main-body').append(ourTable);
  $('.square-default').css('width', (600/x));
  $('.square-default').css('height', (600/y));
}

// color changes on hover, mouseclick
function mouseEvents(element, colorIn, colorOut, colorClick) {

  $(element).on({
    mouseenter: function(){
      $(this).css("background-color", colorIn);
    },
    mouseleave: function() {
      $(this).css("background-color", colorOut);
      $(".square-clicked").css("background-color", colorClick);
    },

    click: function() {
      $(this).addClass("square-clicked").removeClass('square-default');
      $(".square-clicked").css("background-color", colorClick);
    }
  });
 }

function randomColorGenerator() {
  var color = "#" + Math.random().toString(16).slice(2, 8);
  console.log(color);
  return color;
}
