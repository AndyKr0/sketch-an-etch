// build a grid x-wide by y-height using a table
function tableGrid(x,y) {
  var ourTable = '';

  ourTable += '<table id="grid">';
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


// reset grid
function resetGrid(){
  $('#reset').click(function ()
  {

    var gridSize = prompt("Enter grid size:");

    $("#grid").remove();
    tableGrid(gridSize, gridSize);


    //$(".square-default").css("background-color", "red");


  });
}


// main

$(document).ready(function(){
  //set colors
  var colorHover = "yellow";
  var colorLeave = "green";
  var colorClick = "blue";
  var gridSize = 5;

  // logic
  resetGrid();
  tableGrid(gridSize, gridSize);
  //onClick(".square-default", colorClick, colorHover);
  mouseEvents(".square-default", colorHover, colorLeave, colorClick);


});
