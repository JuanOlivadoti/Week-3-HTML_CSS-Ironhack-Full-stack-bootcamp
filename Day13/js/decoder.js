function decoder(words) {

	var index = 0;
	var secretMessage = "";

	for (var i = 0; i < words.length; i++) {
		
		secretMessage += words[i].charAt(index); //words[i][index] es la misma expresión sin el charAt selecciona el index de la palabra.
		
		index = ( index +1 ) % 5;

	};

		return secretMessage;
}

module.exports = decoder;