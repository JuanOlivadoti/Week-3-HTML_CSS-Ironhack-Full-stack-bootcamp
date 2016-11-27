var Car = function(model, noise) {
	this.model = model;
	this.noise = noise;
	this.numberOfWheels = 4;
};

Car.prototype.makeNoise = function() {
	console.log(this.noise + "!!!!");

//return 2

};

var mustang = new Car("mustang", "Brrmmm");

mustang.makeNoise();

// console.log(mustang.makeNoise()); Devuelve 2 con el return... o undefined si no hay return