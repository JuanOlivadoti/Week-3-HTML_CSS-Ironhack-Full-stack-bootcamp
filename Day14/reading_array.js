var fs = require('fs');

function jumpRepeated(error, exs) {

	var arr = []

	var jumpRepeated = exs.split(',');
	
	var arr = jumpRepeated.filter(function(elem, index) {
	    return index == jumpRepeated.indexOf(elem);
	})

	// jumpRepeated.forEach (function(x, y){
	// 		if (x != y) {
	// 			arr.push (x)
	// 		};
	// 	});
	
	fs.writeFile('arranged_array.txt','Jump Repeated = [' + arr + ']', 'utf8')
	// console.log(arr)
}

// console.log(averageColon(numbers) === 85);

fs.readFile('sample2.txt', 'utf8', jumpRepeated);

// forEach (function (b, j){
// 			if (a + b === 0) {positions.push ( i + "," + j )}
// 		});