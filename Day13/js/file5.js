var words2 = [
"January", "lacks", "caveats", "hazardous", "DOORS", "crying", "arrogantly", "climate", "proponent", "rabuttal"
];

message = decoder(words2);
console.log(message);

function decoder(words2) {

	var index = 0;
	var secretMessage = "";

	for (var i = 0; i < words2.length; i++) {
		secretMessage += words2[i].charAt(index); //words[i][index] es la misma expresión sin el charAt selecciona el index de la palabra.
		
		index = ( index +1 ) % 5;

		// index++; 
		// if (index === 6) { 
		// 	index = 0;
	};

		return secretMessage;
}