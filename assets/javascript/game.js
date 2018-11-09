// creating the count
$("#yourWins").html(wins);
$("#yourLosses").html(losses);



// create global variables for the game
var wins=0;
var losses=0;
var userTotal=0;

// total (random number generation for the game)
var total= Math.floor((Math.random()*120) +1);
$(".RanNum").html(total);

// crystal values (random numbers for each click of the crystal)
// var cross= Math.floor((Math.random()*12) +1);
var green= Math.ceil((Math.random()*10));
var purple= Math.ceil((Math.random()*10));
var blue= Math.ceil((Math.random()*10));

// console.log(blue);

// restart and reset the game
function reset (){
	total= Math.floor((Math.random()*120) +1);
	console.log(total);

	var green= Math.ceil((Math.random()*10));
	var purple= Math.ceil((Math.random()*10));
	var blue= Math.ceil((Math.random()*10));
	userTotal=0;

	$(".ScoreNumber").html(userTotal);
	$(".RanNum").html(total);  // not resetting correctly (debug)
}

// function for winning that adds to the userTotal
function winningTime(){
	alert("You Win!");
	wins++;
	$(".Win").html(wins);
	reset();
}

// function for losing that also adds to the userTotal
function losingTime(){
	alert("You lose. Would you like to try again?")
	losses++;
	$(".Lose").html(losses);
	reset();
}

// clicks for each jewel so the user receives a score
$("#cross").on ("click", function() {
	userTotal= userTotal + cross;
	console.log("New Total= " + userTotal);
	$(".finalTotal").html(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime(); 					// might have to put the reset in for the count with the else if
	}

})

// on click events for the gems

$(".blueGem").on ("click", function() {
	console.log(blue);
	userTotal= userTotal + blue;
	console.log("New Total= " + userTotal);
	$(".ScoreNumber").html(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime();
	}

});



$(".purpleGem").on ("click", function() {
	console.log(purple);
	userTotal= userTotal + purple;
	console.log("New Total= " + userTotal);
	$(".ScoreNumber").html(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime();
	}

});



$(".greenGem").on ("click", function() {
	console.log(green);
	userTotal= userTotal + green;
	console.log("New Total= " + userTotal);
	$(".ScoreNumber").html(userTotal);

	if (userTotal == total) {
		winningTime();
	}

	else if (userTotal > total) {
		losingTime();
	}

});

console.log ("works")
