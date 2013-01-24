//alert("JavaScript works!");
//Woods Jason
// SDI 1301
// Project 3
// The Game

//json data
var json1 = {
	"enteries" : {	
	"sx": ["Ryan V. #1", "Ryan D. #5", "James S. #7", "Justin B. #10", "Kyle C. #11", "Jake W. #12", "David M. #18",
 		"Broc T. #20", "Chad R. #22", "Andrew S. #29", "Josh G. #33", "Rober K. #39", "Trey C. #41", "Vince F. #42", "Weston P. #46", "Matt L. #47",
 		"Justin B. #51", "Jimmy A. #55", "Matt G. #62", "Mike A. #800", "Phillip N. #49", "Les S. #54"],
 	"sxLite": ["Eli T. #1", "Jason A. #21", "Jake C. #23", "Tyla R. #28", "Travis B. #31", "Malcolm S. #32", "Ryan S. #35", "Jessy N. #36", 
 		"Kyle C. #38","Martin D. #40", "Cole S. #43", "Christian C. #59", "Derek A. # 63", "Killian R. #66", "Dakota T. #72", "Max A. #74", 
 		"Austin P. #76", "Scott C. #78", "Michael L. #80", "Topher I. #91", "Ken R. #94", "Chris P. #98"]
 	
	}
};
//for loop
var handleData = function (json) {
	for (var i = 0; i < json.enteries.sx.length; i++){
		console.log(json.enteries.sx[i]);
	};
};

var handleDataLite = function(json) {
	for (var i = 0; i < json.enteries.sxLite.length; i++){
		console.log(json.enteries.sxLite [i]);
	};
}
//global var
var welcome = ("Welcome to your first experiance in Fantasy SuperCross!");
var eRacersX = ("The 450 race enteries are as follows:");
var eRacersL = ("The 250 race enteries are as follows:");

var rules = { rule1: "1. First rule of SuperX fantasy is you must talk about it!",
	rule2: "2. SuperX fantasy is a fanstasy style motor sport game",
	rule3: "The more players the better the fun!"
};




//while () {}
function arrayShuffle (oldArray) {
	var newArray = oldArray.slice();
	var len = newArray.length;
	var i = len;
	while (i--) {
		var p = parseInt(Math.random()*len);
		var t = newArray[i];
		newArray[i] = newArray[p];
		newArray[p] = t;
	}
	return newArray;
}


var players = { 
	jason: { name: "Jason", rank: " ", picks450: (arrayShuffle(json1.enteries.sx)), picks250: (arrayShuffle(json1.enteries.sxLite))
	},
	craig: { name: "Craig", rank: " ", picks450: (arrayShuffle(json1.enteries.sx)), picks250: (arrayShuffle(json1.enteries.sxLite))
	},
	jake: { name: "Jake", rank: " ", picks450: (arrayShuffle(json1.enteries.sx)), picks250: (arrayShuffle(json1.enteries.sxLite))
	}
};

var playerPicks = function (pick) {
	for (var i = 0; i < pick.length; i++){
		console.log(pick[i]);
	}
}

arrayShuffle(json1.enteries.sx);
console.log(welcome);
console.log(eRacersX);
handleData(json1);
console.log(eRacersL);
handleDataLite(json1);
console.log(players.jason.name + "s 450 picks are: ");
playerPicks(players.jason.picks450);
console.log(players.jason.name + "s 250 picks are: ");
playerPicks(players.jason.picks250);
console.log(players.craig.name + "s 450 picks are: ");
playerPicks(players.craig.picks450);
console.log(players.craig.name + "s 250 picks are: ");
playerPicks(players.craig.picks250);
console.log(players.jake.name + "s 450 picks are: ");
playerPicks(players.jake.picks450);
console.log(players.jake.name + "s 250 picks are: ");
playerPicks(players.jake.picks250);

/*var welcome = (" Welcome to your first experiance in Fantasy SuperCross!")
var rules = { rule1: "1. First rule of SuperX fantasy is you must talk about it!",
	rule2: "2. SuperX fantasy is a fanstasy style motor sport game",
	rule3: "The more players the better the fun!"
};

var riders= { sx: [" #1 Ryan V.","#5 Ryan D.","#7 James S.", "#10 Justin B.", "#11 Kyle C.", "#12 Jake W.",  ]

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
*/

// IF NOT = if (!(a < b))
// IF AND = if (a && c) 
// IF OR = if (a || b)




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

//property array
/*var enteries = {	
	"sx": ["Ryan V. #1", "Ryan D. #5", "James S. #7", "Justin B. #10", "Kyle C. #11", "Jake W. #12", "David M. #18",
 		"Broc T. #20", "Chad R. #22", "Andrew S. #29", "Josh G. #33", "Rober K. #39", "Trey C. #41", "Vince F. #42", "Weston P. #46", "Matt L. #47",
 		"Justin B. #51", "Jimmy A. #55", "Matt G. #62", "Mike A. #800", "Phillip N. #49", "Les S. #54"]
 	},
 	{
 	"sxLite": ["Eli T. #1", "Jason A. #21", "Jake C. #23", "Tyla R. #28", "Travis B. #31", "Malcolm S. #32", "Ryan S. #35", "Jessy N. #36", 
 		"Kyle C. #38","Martin D. #40", "Cole S. #43", "Christian C. #59", "Derek A. # 63", "Killian R. #66", "Dakota T. #72", "Max A. #74", 
 		"Austin P. #76", "Scott C. #78", "Michael L. #80", "Topher I. #91", "Ken R. #94", "Chris P. #98"]
 	}
 		
};*/
//console.log(enteries.sx);
//console.log(enteries);

/*for (var i =0; i < enteries.sx.length; i++) {
	console.log("450 SX Racer:");
	console.log(enteries.sx[i]);
};
console.log(eRacersL);
for (var i =0; i < enteries.sxLite.length; i++) {
	console.log("250 Lite Racer:");
	console.log(enteries.sxLite[i]);
};

console.log(players);*/

