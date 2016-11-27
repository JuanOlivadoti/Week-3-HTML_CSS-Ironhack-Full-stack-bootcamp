var exampleArray = [ 2, -5, 10, 5, 4, -10, 0 ];

//var results = process(exampleArray);
//console.log(results)

function process(data) {
	var positions = [];
	data.forEach (function (a, i) {
		data.forEach (function (b, j){
			if ((a + b === 0) & ( i >= j )) {positions.push ( i + "," + j )}
		});
	});
console.log(positions)
}
process(exampleArray);

// for (var i = 0; 1 data.length; i++) {
	// for (var j = i; j < data.length; i++)
}