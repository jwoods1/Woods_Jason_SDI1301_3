//alert("JavaScript works!");
//Woods Jason
// SDI 1301
// Project 3
// The Game

var welcome = (" Welcome to your first experiance in Fantasy SuperCross!")
var rules = { rule1: "1. First rule of SuperX fantasy is you must talk about it!",
	rule2: "2. SuperX fantasy is a fanstasy style motor sport game",
	rule3: "The more players the better the fun!"
};

var riders= { 

};

var player1 = { name: "Jake",
	rank: []

		
};
var player2 = { name: "Jason",
	rank: []

};

var player3 = { name: "Craig",
	rank:[]

}

console.log(rules);
console.log(rules.rule2);

console.log(welcome)
for (var key in rules) {
	console.log("key: " + key + ", value: ", rules[key]);

};

//Accessor Method:
//aka "getter" going to be function

//Mutator Method:  Procedure
//change a property
//aka " setter"

//Prodedure:
//Subroutine Funcion that doesn't return a value

// dauntless, interceptor, bouty, Enterprise
/*var dauntless = {name: "Dauntless", hold:[] };
var interceptor = {name: "Inerceptor", hold:[] };
var bounty = {name: "bounty", hold:[] };
var enterprise = {name: "Enterprise", hold:[] };
daunless.hold.push("oranges");
*/

/*var pirateShip = function (name) {
	//......
	return {
		"name" : name,
		"hold" : []
	};
};
var dauntless = pirateShip("Dauntless");
var interceptor = pirateShip("interceptor");
var bounty = pirateShip("Bounty");
var enterprise = pirateShip("Enterprise");




console.log(dauntless);
*/


