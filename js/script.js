// function divGrid(x,y) {
//   var i = 0;
//   $("#container").append('<table>');
//   //$("table").append('<tr>');
//   for (i = 1; i < x * y ; i++){
//
//
//     if ((i % y) == 0) or ((i % y) = undefined {
//       $("table").append('<tr>');
//
//     }
//
//     $("tr").append('<td><div class="square">' + i + '</div></td>');
//
//     if (i >= x) {
//       if ((i % x) == 0) {
//         $("table").append('</tr>');
//       }
//     }
//
//   }

  //$("#table").append('</tr>');
//   $("#table").append('</table>');
// }


function tableGrid(x,y) {

  var ourTable = '';
  var i, j = 0;

  ourTable += '<table>';
  for (var i = 0; i < y ; i++) {
    ourTable +='<tr>';

    for (var j = 0; j < x; j++) {
      ourTable +='<td><div class="square">' + i + ',' + j + '</div></td>';
    }
    ourTable += '</tr>'
  }


  ourTable += '</table>'

  $('#main-body').append(ourTable)


}






$(document).ready(function(){
  tableGrid(5,5);
});
