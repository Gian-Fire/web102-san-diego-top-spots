$(document).ready(function() {
// write your code here
$.getJSON( "data.json", function( data ) {
      var tableData = [];
    $.each( data, function( key, val ) {
        tableData.push('<tr><td>' + this.name + '</td>' + '<td>' + this.description + '</td>' + '<td>' + '<a href=https://www.google.com/maps?q='+ this.location + ' id="button"button>Link</a></td></tr>');
    });
   
    $( "<tbody/>", {
      "name": "",
      "description": "",
      "location": "",
      html: tableData.join( "" )
    }).appendTo( "tbody" );
});
});