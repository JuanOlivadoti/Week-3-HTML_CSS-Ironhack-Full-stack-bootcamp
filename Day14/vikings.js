var Viking = function(name, strength, warCry) {

	this.health = 100;
	this.name = name;
	this.strength = strength;
	this.warCry = warCry;

};

var thor = new Viking("Thor", 30, "For Asgard!!");
var loki = new Viking("Loki", 20, "Fucking Odin...");

module.exports = Viking;