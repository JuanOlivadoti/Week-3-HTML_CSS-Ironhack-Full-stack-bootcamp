var read = require('read');

// =================== Question Class //
id = 0;

var Question = function(ask, tell){
	this.ask = ask;
	this.tell = tell;
	this.id = ++id;
};

var first_q = new Question("¿Qué color era el caballo blanco del Cid?", "blanco");
var second_q = new Question("¿Qué color primario contiene por 'z'?", "azul");
var third_q = new Question("¿Qué color primario contiene la 'll'?", "amarillo");
var fourth_q = new Question("¿De qué color es la sangre?", "rojo");
var fifth_q = new Question("¿Qué color se forma mezclando todos los colores?", "negro");

var listOfQs = [first_q, second_q, third_q, fourth_q, fifth_q];

// // ================= Quiz Class =======================//

var Quiz = function(list) {
	this.list = list;
};

Quiz.prototype.goAsk = function() {

	list = this.list;
	
	var qs = 0;

	options = { 

		prompt: list[qs].ask

		};

	read(options, validation);

	function validation (err, answer){ 

    var i=0;

    if (answer === list[i].tell) {
    	console.log("Your answer is: " + answer + " Correct!!");
    	i++;
    	qs++;
    } else {
    	console.log("Prueba otra vez:\n");
    }
	}

	// while (qs < list.length) {

	// 	options = { 
	// 		prompt: list[qs].ask
	// 	};

		read(options, validation);

		function validation (err, answer){ 

		    this.answer = answer;
		    var i=0;

		    if (answer === list[i].tell) {
		    	console.log("Your answer is: " + answer + " Correct!!");
		    	i++;
		    } else {
		    	console.log("Prueba otra vez:\n");
		    }
		}

		qs++;
	};



// ==================== Start Questions ==================//

var jeopardy = new Quiz(listOfQs);

jeopardy.goAsk();



// 	listsOfQs.forEach(tellMe) {



// 	}

// 	read(options, validation);

// };

// var start = function(){

// 	this.listIn = listIn;

// 	options = {

// 		prompt: console.log(listIn[i].ask)

// 	};

// };



// };

// var Jeopardy = new NewShow(listOfQs);

// Jeopardy.tellMe;
