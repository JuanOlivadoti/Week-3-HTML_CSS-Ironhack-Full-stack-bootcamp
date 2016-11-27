var words, message;

words = [
	"dead",
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"atention",
	"agent"
];

message = decoder(words);
console.log(message);

function decoder(words) {

	var index = 0;
	var secretMessage = "";

	for (var i = 0; i < words.length; i++) {
		secretMessage += words[i].charAt(index); //words[i][index] es la misma expresión sin el charAt selecciona el index de la palabra.
		
		index = ( index +1 ) % 5;

		// index++; 
		// if (index === 6) { 
		// 	index = 0;
	};

		return secretMessage;
}