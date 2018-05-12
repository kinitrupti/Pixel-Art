function makeGrid() {
	
	
	var canvas, cell, gridHeight, gridWidth, rows;
	
	canvas = $('#pixel_canvas');
	gridHeight = $('#input_height').val();
	gridWidth = $('#input_width').val();
	
	canvas.children().remove()
	
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	cell.click(function() {
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

var submit;

submit = $('input[type="submit"]')

submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});


