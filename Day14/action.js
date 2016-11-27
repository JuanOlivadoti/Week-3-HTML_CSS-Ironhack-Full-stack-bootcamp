var Pit = require("./Pit.js");
var Viking = require("./vikings.js");

var thor = new Viking("Thor", 30, "For Asgard!!");
var loki = new Viking("Loki", 20, "Fucking Odin...");

var fightNow = new Pit(thor, loki);

fightNow.fight();