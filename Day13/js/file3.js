function averageColon(numbers) {

	var numbersArray = numbers.split(':');
	
	var sum = numbersArray.reduce(function(a, b) {
		return parseInt(a) + parseInt(b);
	});
	var avg = sum / numbersArray.length;
}

var numbers = '80:70:90:100';
console.log(averageColon(numbers) === 85);