var Viking = require("./vikings.js");

var Asault = function(viking1, viking2) {
	this.viking1 = viking1;
	this.viking2 = viking2;
}
Pit.prototype.fight = function() {

	viking1 = this.viking1;
	viking2 = this.viking2;

	i = 0
		
		while ((viking1.health > 0) && (viking2.health > 0)) {

				console.log("Round " + ++i);
				console.log(viking1.name + "'s health: " + ( viking1.health - viking2.strength) + " says " + viking1.warCry);
				console.log(viking2.name + "'s health: " + ( viking2.health - viking1.strength) + " says " + viking2.warCry);

				viking1.health = viking1.health - viking2.strength;
				viking2.health = viking2.health - viking1.strength;
			
				if ((viking1.health < viking2.strength) || (viking2.health < viking1.strength)) {
					break;
				}

		}; 

		console.log("The battle is over")
		
};

module.exports = Asault;