var fs = require('fs');

function averageColon(error, numbers) {

	var numbersArray = numbers.split(':');
	
	var sum = numbersArray.reduce(function(a, b) {
		return parseInt(a) + parseInt(b);
	});
	var avg = sum / numbersArray.length;
	console.log(avg);
}

// console.log(averageColon(numbers) === 85);

fs.readFile('sample1.txt', 'utf8', averageColon);