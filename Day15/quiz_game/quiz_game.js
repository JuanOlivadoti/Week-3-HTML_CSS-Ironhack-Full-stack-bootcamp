var read = require('read');

// =================== Question Class //
id = 0;

var Question = function(text, tell){
	this.text = text;
	this.tell = tell;
	this.id = ++id;
};

Question.prototype.ask = function() {
	console.log("Question nr." + this.id + " : " + this.text +" \n");
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
	this.index = 0;
	this.score = 0;
	this.points = 2;
	this.bonus_points = 0;

	this.askQuestion = function () {

		options = {

			prompt: this.list[this.index].ask()
		};
		read(options, this.answerValidation.bind(this));
	};

	this.bonusQ = function() {

		console.log(parseInt(this.bonus_points));
		console.log(parseInt(this.list[this.index].id));

		if (parseInt(this.bonus_points) == (this.list[this.index].id)) { 

			this.score + this.points;

			} else { this.score++;
		};
	};

	this.answerValidation = function(err, answer){

		if ((answer.toLowerCase() === list[this.index].tell.toLowerCase()) && (this.list[this.index].id < this.list.length)) {

			this.index++;
			console.log("Correct!!! Continue...");
			this.bonusQ();
			console.log("Your score now is:" + this.score);

			this.askQuestion();

		} else if ((answer.toLowerCase() != list[this.index].tell.toLowerCase()) && (this.list[this.index].id <= this.list.length)) {

			this.score--;
			console.log("Come on!! :/ \n");
			console.log("Your score now is:" + this.score);
			this.askQuestion();

		} else { 
			console.log("You finished!!");
			this.bonusQ();
			console.log("Your total score: " + this.score);

		}

	};

};

Quiz.prototype.play = function(){

	var bonus_points = Math.floor((Math.random()*this.list.length)+1);
	console.log("La pregunta con bonus es la " + bonus_points + ".\n");
	bonus_points = parseInt(bonus_points);
	console.log(bonus_points);
	this.bonus_points = Math.floor((Math.random()*this.list.length)+1);
	console.log("La pregunta con bonus es la " + this.bonus_points + ".\n");
	this.bonus_points = parseInt(this.bonus_points);
	console.log(this.bonus_points);

	this.askQuestion();

};

var Jeopardy = new Quiz(listOfQs);

Jeopardy.play();