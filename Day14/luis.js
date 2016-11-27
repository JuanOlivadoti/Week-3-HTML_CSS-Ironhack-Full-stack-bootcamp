var Men = function(nombre, peso, altura, colorPelo) {
	this.nombre = nombre;
	this.peso = peso;
	this.altura = altura;
	this.colorPelo = colorPelo
	this.hablar = "Visca Bar¢a!!!";
};

Men.prototype.barca = function() {
	console.log("Mi nombre es " + this.nombre);
	console.log(this.hablar + "!!!!");

};

var Luis = new Men("Luis", 90, 190, "marron");

Luis.barca();
