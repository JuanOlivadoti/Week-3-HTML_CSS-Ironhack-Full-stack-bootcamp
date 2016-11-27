var fs = require('fs');

function print (error, content) {
	console.log(content);
};

fs.readFile('sample.txt', 'utf8', print);

console.log(1+1)



// ESTA FUNCIÓN PUEDO EJECUTARLA AL LEER EL ARCHIVO. !!!!!
//
// fs.readFile('sample.txt', 'utf8', function print (error, content) {
// 	console.log(content);
// 	};
// );