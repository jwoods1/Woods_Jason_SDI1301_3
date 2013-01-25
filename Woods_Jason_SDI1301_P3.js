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
 	},
 	"arrayShuffle": function (oldArray) {
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




//while loop /return array

//method procedure
var players = { 
	jason: { name: "Jason", 
		picks450: (json1.arrayShuffle(json1.enteries.sx)), 
		picks250: (json1.arrayShuffle(json1.enteries.sxLite))
	},
	craig: { name: "Craig", 
		picks450: (json1.arrayShuffle(json1.enteries.sx)), 
		picks250: (json1.arrayShuffle(json1.enteries.sxLite))
	},
	jake: { name: "Jake", 
		picks450: (json1.arrayShuffle(json1.enteries.sx)), 
		picks250: (json1.arrayShuffle(json1.enteries.sxLite))
	},
	playerPicks: function (pick) {
	for (var i = 0; i < pick.length; i++){
		console.log(pick[i]);
	};


}

};
var winners250 = ("Winners for SX 250!!");
var results = {
	sx450: {sxResults: (json1.arrayShuffle(json1.enteries.sx))} , 
	sxLite: {sxLiteResults: (json1.arrayShuffle(json1.enteries.sxLite)) } ,
	raceResults: function (result,race450) {
			console.log( "Results are what follows:");
			for (var i = 0; i < result.length; i++){
				console.log(result[i])
			};
			return console.log(race450);
	},// boolean
	playerRank: function (a, b) {
   		var score = [];
   		var total = [];
   		if (a == b) { 
   			score = 100
   			
  			console.log("Perfect Card!");

  		} else{ 
  			score = 5;
  			points = a;

  			console.log("You did not get a Perfect Card")
  			};

  			if (a !== b) {
  				total = 5 + 10;

  			} else{
  				total = 10;
  			};
  			return total
	}
};





json1.arrayShuffle(json1.enteries.sx);
console.log(welcome);
console.log("<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>");
console.log(eRacersX);
handleData(json1);
console.log("<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>");
console.log(eRacersL);
handleDataLite(json1);
console.log("<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>");

console.log(players.jason.name + "s 450 picks are: ");
players.playerPicks(players.jason.picks450);
console.log("<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>");
console.log(players.jason.name + "s 250 picks are: ");
players.playerPicks(players.jason.picks250);
console.log("<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>");
console.log(players.craig.name + "s 450 picks are: ");
players.playerPicks(players.craig.picks450);
console.log("<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>");
console.log(players.craig.name + "s 250 picks are: ");
players.playerPicks(players.craig.picks250);
console.log("<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>");
console.log(players.jake.name + "s 450 picks are: ");
players.playerPicks(players.jake.picks450);
console.log("<<<<<<<<<<<<<<<  >>>>>>>>>>>>>>>>>>>>");
console.log(players.jake.name + "s 250 picks are: ");
players.playerPicks(players.jake.picks250);
console.log("<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>");
results.raceResults(json1.arrayShuffle(json1.enteries.sx),"The 450 Races are complete!");
console.log("Jake 450 picks");
results.playerRank(players.jake.picks450, results.raceResults);
console.log("Jason 450 picks");
results.playerRank(players.jason.picks450, results.raceResults);
console.log("Craig 450 picks")
results.playerRank(players.craig.picks450, results.raceResults);
console.log("<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>");
console.log(winners250)
results.raceResults(json1.arrayShuffle(json1.enteries.sxLite), "The 250 Races are complete!");
console.log("Jake 250 picks");
results.playerRank(players.jake.picks250, results.raceResults);
console.log("Jason 250 picks");
results.playerRank(players.jason.picks250, results.raceResults);
console.log("Craig 250 picks")








