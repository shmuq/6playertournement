var playerOne = {
	indexNum : undefined,
	position : undefined,
	name : undefined,
	team : undefined,
	gamesPlayed : undefined,
	gamesWon : undefined,
	gamesTied : undefined,
	gamesLost : undefined,
	points : undefined,
	goalsFor : undefined,
	goalsAgainst : undefined,
	goalsDefrance : undefined
};
var playerTwo = {
	indexNum : undefined,
	position : undefined,
	name : undefined,
	team : undefined,
	gamesPlayed : undefined,
	gamesWon : undefined,
	gamesTied : undefined,
	gamesLost : undefined,
	points : undefined,
	goalsFor : undefined,
	goalsAgainst : undefined,
	goalsDefrance : undefined
};
var playerThree = {
	indexNum : undefined,
	position : undefined,
	name : undefined,
	team : undefined,
	gamesPlayed : undefined,
	gamesWon : undefined,
	gamesTied : undefined,
	gamesLost : undefined,
	points : undefined,
	goalsFor : undefined,
	goalsAgainst : undefined,
	goalsDefrance : undefined
};
var playerFour = {
	indexNum : undefined,
	position : undefined,
	name : undefined,
	team : undefined,
	gamesPlayed : undefined,
	gamesWon : undefined,
	gamesTied : undefined,
	gamesLost : undefined,
	points : undefined,
	goalsFor : undefined,
	goalsAgainst : undefined,
	goalsDefrance : undefined
};
var playerFive = {
	indexNum : undefined,
	position : undefined,
	name : undefined,
	team : undefined,
	gamesPlayed : undefined,
	gamesWon : undefined,
	gamesTied : undefined,
	gamesLost : undefined,
	points : undefined,
	goalsFor : undefined,
	goalsAgainst : undefined,
	goalsDefrance : undefined
};
var playerSix = {
	indexNum : undefined,
	position : undefined,
	name : undefined,
	team : undefined,
	gamesPlayed : undefined,
	gamesWon : undefined,
	gamesTied : undefined,
	gamesLost : undefined,
	points : undefined,
	goalsFor : undefined,
	goalsAgainst : undefined,
	goalsDefrance : undefined
};

function assName () {
	var player = document.getElementsByClassName("playerOne");
	playerOne.name = player[0].value;
	playerOne.team = player[1].value;
	player = document.getElementsByClassName("playerTwo");
	playerTwo.name = player[0].value;
	playerTwo.team = player[1].value;
	player = document.getElementsByClassName("playerThree");
	playerThree.name = player[0].value;
	playerThree.team = player[1].value;
	player = document.getElementsByClassName("playerFour");
	playerFour.name = player[0].value;
	playerFour.team = player[1].value;
	player = document.getElementsByClassName("playerFive");
	playerFive.name = player[0].value;
	playerFive.team = player[1].value;
	player = document.getElementsByClassName("playerSix");
	playerSix.name = player[0].value;
	playerSix.team = player[1].value;
};

function getRandomNumber (length) {
	var randomNumber = Math.round(Math.random() * (length));
	return randomNumber;
};
function generate () {
	var position = [1,2,3,4,5,6];
	var randomIndexNum =getRandomNumber(position.length-1);
	playerOne.indexNum = position[randomIndexNum];
	playerOne.position = playerOne.indexNum;
	delete position[randomIndexNum];
    position.sort().pop();
    randomIndexNum =getRandomNumber(position.length-1);
	playerTwo.indexNum = position[randomIndexNum];
	playerTwo.position = playerTwo.indexNum;
	delete position[randomIndexNum];
    position.sort().pop();
    randomIndexNum =getRandomNumber(position.length-1);
	playerThree.indexNum = position[randomIndexNum];
	playerThree.position = playerThree.indexNum;
	delete position[randomIndexNum];
    position.sort().pop();
    randomIndexNum =getRandomNumber(position.length-1);
	playerFour.indexNum = position[randomIndexNum];
	playerFour.position = playerFour.indexNum;
	delete position[randomIndexNum];
    position.sort().pop();
    randomIndexNum =getRandomNumber(position.length-1);
	playerFive.indexNum = position[randomIndexNum];
	playerFive.position = playerFive.indexNum;
	delete position[randomIndexNum];
    position.sort().pop();
    randomIndexNum =getRandomNumber(position.length-1);
	playerSix.indexNum = position[randomIndexNum];
	playerSix.position = playerSix.indexNum;
	delete position[randomIndexNum];
    position.sort().pop();
};

var groupA1 = document.getElementsByClassName("GA1");
var groupA2 = document.getElementsByClassName("GA2");
var groupA3 = document.getElementsByClassName("GA3");
var groupB1 = document.getElementsByClassName("GB1");
var groupB2 = document.getElementsByClassName("GB2");
var groupB3 = document.getElementsByClassName("GB3");
function updateGroups () {
	switch (playerOne.position) {
		case 1:
			if (playerOne.name != undefined) {
				groupA1[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
			}
			if (playerOne.gamesPlayed != undefined) {
				groupA1[1].innerHTML = playerOne.gamesPlayed;
			}
			if (playerOne.gamesWon != undefined) {
				groupA1[2].innerHTML = playerOne.gamesWon;
			}
			if (playerOne.gamesTied != undefined) {
				groupA1[3].innerHTML = playerOne.gamesTied;
			}
			if (playerOne.gamesLost != undefined) {
				groupA1[4].innerHTML = playerOne.gamesLost;
			}
			if (playerOne.goalsFor != undefined) {
				groupA1[5].innerHTML = playerOne.goalsFor;
			}
			if (playerOne.goalsAgainst != undefined) {
				groupA1[6].innerHTML = playerOne.goalsAgainst;
			}
			if (playerOne.goalsDefrance != undefined) {
				groupA1[7].innerHTML = playerOne.goalsDefrance;
			}
			if (playerOne.points != undefined) {
				groupA1[8].innerHTML = playerOne.points;
			}
			break;
		case 2:
			if (playerOne.name != undefined) {
				groupB1[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
			}
			if (playerOne.gamesPlayed != undefined) {
				groupB1[1].innerHTML = playerOne.gamesPlayed;
			}
			if (playerOne.gamesWon != undefined) {
				groupB1[2].innerHTML = playerOne.gamesWon;
			}
			if (playerOne.gamesTied != undefined) {
				groupB1[3].innerHTML = playerOne.gamesTied;
			}
			if (playerOne.gamesLost != undefined) {
				groupB1[4].innerHTML = playerOne.gamesLost;
			}
			if (playerOne.goalsFor != undefined) {
				groupB1[5].innerHTML = playerOne.goalsFor;
			}
			if (playerOne.goalsAgainst != undefined) {
				groupB1[6].innerHTML = playerOne.goalsAgainst;
			}
			if (playerOne.goalsDefrance != undefined) {
				groupB1[7].innerHTML = playerOne.goalsDefrance;
			}
			if (playerOne.points != undefined) {
				groupB1[8].innerHTML = playerOne.points;
			}
			break;
		case 3:
			if (playerOne.name != undefined) {
				groupA2[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
			}
			if (playerOne.gamesPlayed != undefined) {
				groupA2[1].innerHTML = playerOne.gamesPlayed;
			}
			if (playerOne.gamesWon != undefined) {
				groupA2[2].innerHTML = playerOne.gamesWon;
			}
			if (playerOne.gamesTied != undefined) {
				groupA2[3].innerHTML = playerOne.gamesTied;
			}
			if (playerOne.gamesLost != undefined) {
				groupA2[4].innerHTML = playerOne.gamesLost;
			}
			if (playerOne.goalsFor != undefined) {
				groupA2[5].innerHTML = playerOne.goalsFor;
			}
			if (playerOne.goalsAgainst != undefined) {
				groupA2[6].innerHTML = playerOne.goalsAgainst;
			}
			if (playerOne.goalsDefrance != undefined) {
				groupA2[7].innerHTML = playerOne.goalsDefrance;
			}
			if (playerOne.points != undefined) {
				groupA2[8].innerHTML = playerOne.points;
			}
			break;
		case 4:
			if (playerOne.name != undefined) {
				groupB2[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
			}
			if (playerOne.gamesPlayed != undefined) {
				groupB2[1].innerHTML = playerOne.gamesPlayed;
			}
			if (playerOne.gamesWon != undefined) {
				groupB2[2].innerHTML = playerOne.gamesWon;
			}
			if (playerOne.gamesTied != undefined) {
				groupB2[3].innerHTML = playerOne.gamesTied;
			}
			if (playerOne.gamesLost != undefined) {
				groupB2[4].innerHTML = playerOne.gamesLost;
			}
			if (playerOne.goalsFor != undefined) {
				groupB2[5].innerHTML = playerOne.goalsFor;
			}
			if (playerOne.goalsAgainst != undefined) {
				groupB2[6].innerHTML = playerOne.goalsAgainst;
			}
			if (playerOne.goalsDefrance != undefined) {
				groupB2[7].innerHTML = playerOne.goalsDefrance;
			}
			if (playerOne.points != undefined) {
				groupB2[8].innerHTML = playerOne.points;
			}
			break;
		case 5:
			if (playerOne.name != undefined) {
				groupA3[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
			}
			if (playerOne.gamesPlayed != undefined) {
				groupA3[1].innerHTML = playerOne.gamesPlayed;
			}
			if (playerOne.gamesWon != undefined) {
				groupA3[2].innerHTML = playerOne.gamesWon;
			}
			if (playerOne.gamesTied != undefined) {
				groupA3[3].innerHTML = playerOne.gamesTied;
			}
			if (playerOne.gamesLost != undefined) {
				groupA3[4].innerHTML = playerOne.gamesLost;
			}
			if (playerOne.goalsFor != undefined) {
				groupA3[5].innerHTML = playerOne.goalsFor;
			}
			if (playerOne.goalsAgainst != undefined) {
				groupA3[6].innerHTML = playerOne.goalsAgainst;
			}
			if (playerOne.goalsDefrance != undefined) {
				groupA3[7].innerHTML = playerOne.goalsDefrance;
			}
			if (playerOne.points != undefined) {
				groupA3[8].innerHTML = playerOne.points;
			}
			break;
		case 6:	
			if (playerOne.name != undefined) {
				groupB3[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
			}
			if (playerOne.gamesPlayed != undefined) {
				groupB3[1].innerHTML = playerOne.gamesPlayed;
			}
			if (playerOne.gamesWon != undefined) {
				groupB3[2].innerHTML = playerOne.gamesWon;
			}
			if (playerOne.gamesTied != undefined) {
				groupB3[3].innerHTML = playerOne.gamesTied;
			}
			if (playerOne.gamesLost != undefined) {
				groupB3[4].innerHTML = playerOne.gamesLost;
			}
			if (playerOne.goalsFor != undefined) {
				groupB3[5].innerHTML = playerOne.goalsFor;
			}
			if (playerOne.goalsAgainst != undefined) {
				groupB3[6].innerHTML = playerOne.goalsAgainst;
			}
			if (playerOne.goalsDefrance != undefined) {
				groupB3[7].innerHTML = playerOne.goalsDefrance;
			}
			if (playerOne.points != undefined) {
				groupB3[8].innerHTML = playerOne.points;
			}
			break;
	}
	switch (playerTwo.position) {
		case 1:
			if (playerTwo.name != undefined) {
				groupA1[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
			}
			if (playerTwo.gamesPlayed != undefined) {
				groupA1[1].innerHTML = playerTwo.gamesPlayed;
			}
			if (playerTwo.gamesWon != undefined) {
				groupA1[2].innerHTML = playerTwo.gamesWon;
			}
			if (playerTwo.gamesTied != undefined) {
				groupA1[3].innerHTML = playerTwo.gamesTied;
			}
			if (playerTwo.gamesLost != undefined) {
				groupA1[4].innerHTML = playerTwo.gamesLost;
			}
			if (playerTwo.goalsFor != undefined) {
				groupA1[5].innerHTML = playerTwo.goalsFor;
			}
			if (playerTwo.goalsAgainst != undefined) {
				groupA1[6].innerHTML = playerTwo.goalsAgainst;
			}
			if (playerTwo.goalsDefrance != undefined) {
				groupA1[7].innerHTML = playerTwo.goalsDefrance;
			}
			if (playerTwo.points != undefined) {
				groupA1[8].innerHTML = playerTwo.points;
			}
			break;
		case 2:
			if (playerTwo.name != undefined) {
				groupB1[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
			}
			if (playerTwo.gamesPlayed != undefined) {
				groupB1[1].innerHTML = playerTwo.gamesPlayed;
			}
			if (playerTwo.gamesWon != undefined) {
				groupB1[2].innerHTML = playerTwo.gamesWon;
			}
			if (playerTwo.gamesTied != undefined) {
				groupB1[3].innerHTML = playerTwo.gamesTied;
			}
			if (playerTwo.gamesLost != undefined) {
				groupB1[4].innerHTML = playerTwo.gamesLost;
			}
			if (playerTwo.goalsFor != undefined) {
				groupB1[5].innerHTML = playerTwo.goalsFor;
			}
			if (playerTwo.goalsAgainst != undefined) {
				groupB1[6].innerHTML = playerTwo.goalsAgainst;
			}
			if (playerTwo.goalsDefrance != undefined) {
				groupB1[7].innerHTML = playerTwo.goalsDefrance;
			}
			if (playerTwo.points != undefined) {
				groupB1[8].innerHTML = playerTwo.points;
			}
			break;
		case 3:
			if (playerTwo.name != undefined) {
				groupA2[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
			}
			if (playerTwo.gamesPlayed != undefined) {
				groupA2[1].innerHTML = playerTwo.gamesPlayed;
			}
			if (playerTwo.gamesWon != undefined) {
				groupA2[2].innerHTML = playerTwo.gamesWon;
			}
			if (playerTwo.gamesTied != undefined) {
				groupA2[3].innerHTML = playerTwo.gamesTied;
			}
			if (playerTwo.gamesLost != undefined) {
				groupA2[4].innerHTML = playerTwo.gamesLost;
			}
			if (playerTwo.goalsFor != undefined) {
				groupA2[5].innerHTML = playerTwo.goalsFor;
			}
			if (playerTwo.goalsAgainst != undefined) {
				groupA2[6].innerHTML = playerTwo.goalsAgainst;
			}
			if (playerTwo.goalsDefrance != undefined) {
				groupA2[7].innerHTML = playerTwo.goalsDefrance;
			}
			if (playerTwo.points != undefined) {
				groupA2[8].innerHTML = playerTwo.points;
			}
			break;
		case 4:
			if (playerTwo.name != undefined) {
				groupB2[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
			}
			if (playerTwo.gamesPlayed != undefined) {
				groupB2[1].innerHTML = playerTwo.gamesPlayed;
			}
			if (playerTwo.gamesWon != undefined) {
				groupB2[2].innerHTML = playerTwo.gamesWon;
			}
			if (playerTwo.gamesTied != undefined) {
				groupB2[3].innerHTML = playerTwo.gamesTied;
			}
			if (playerTwo.gamesLost != undefined) {
				groupB2[4].innerHTML = playerTwo.gamesLost;
			}
			if (playerTwo.goalsFor != undefined) {
				groupB2[5].innerHTML = playerTwo.goalsFor;
			}
			if (playerTwo.goalsAgainst != undefined) {
				groupB2[6].innerHTML = playerTwo.goalsAgainst;
			}
			if (playerTwo.goalsDefrance != undefined) {
				groupB2[7].innerHTML = playerTwo.goalsDefrance;
			}
			if (playerTwo.points != undefined) {
				groupB2[8].innerHTML = playerTwo.points;
			}
			break;
		case 5:
			if (playerTwo.name != undefined) {
				groupA3[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
			}
			if (playerTwo.gamesPlayed != undefined) {
				groupA3[1].innerHTML = playerTwo.gamesPlayed;
			}
			if (playerTwo.gamesWon != undefined) {
				groupA3[2].innerHTML = playerTwo.gamesWon;
			}
			if (playerTwo.gamesTied != undefined) {
				groupA3[3].innerHTML = playerTwo.gamesTied;
			}
			if (playerTwo.gamesLost != undefined) {
				groupA3[4].innerHTML = playerTwo.gamesLost;
			}
			if (playerTwo.goalsFor != undefined) {
				groupA3[5].innerHTML = playerTwo.goalsFor;
			}
			if (playerTwo.goalsAgainst != undefined) {
				groupA3[6].innerHTML = playerTwo.goalsAgainst;
			}
			if (playerTwo.goalsDefrance != undefined) {
				groupA3[7].innerHTML = playerTwo.goalsDefrance;
			}
			if (playerTwo.points != undefined) {
				groupA3[8].innerHTML = playerTwo.points;
			}
			break;
		case 6:	
			if (playerTwo.name != undefined) {
				groupB3[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
			}
			if (playerTwo.gamesPlayed != undefined) {
				groupB3[1].innerHTML = playerTwo.gamesPlayed;
			}
			if (playerTwo.gamesWon != undefined) {
				groupB3[2].innerHTML = playerTwo.gamesWon;
			}
			if (playerTwo.gamesTied != undefined) {
				groupB3[3].innerHTML = playerTwo.gamesTied;
			}
			if (playerTwo.gamesLost != undefined) {
				groupB3[4].innerHTML = playerTwo.gamesLost;
			}
			if (playerTwo.goalsFor != undefined) {
				groupB3[5].innerHTML = playerTwo.goalsFor;
			}
			if (playerTwo.goalsAgainst != undefined) {
				groupB3[6].innerHTML = playerTwo.goalsAgainst;
			}
			if (playerTwo.goalsDefrance != undefined) {
				groupB3[7].innerHTML = playerTwo.goalsDefrance;
			}
			if (playerTwo.points != undefined) {
				groupB3[8].innerHTML = playerTwo.points;
			}
			break;
	}
	switch (playerThree.position) {
		case 1:
			if (playerThree.name != undefined) {
				groupA1[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
			}
			if (playerThree.gamesPlayed != undefined) {
				groupA1[1].innerHTML = playerThree.gamesPlayed;
			}
			if (playerThree.gamesWon != undefined) {
				groupA1[2].innerHTML = playerThree.gamesWon;
			}
			if (playerThree.gamesTied != undefined) {
				groupA1[3].innerHTML = playerThree.gamesTied;
			}
			if (playerThree.gamesLost != undefined) {
				groupA1[4].innerHTML = playerThree.gamesLost;
			}
			if (playerThree.goalsFor != undefined) {
				groupA1[5].innerHTML = playerThree.goalsFor;
			}
			if (playerThree.goalsAgainst != undefined) {
				groupA1[6].innerHTML = playerThree.goalsAgainst;
			}
			if (playerThree.goalsDefrance != undefined) {
				groupA1[7].innerHTML = playerThree.goalsDefrance;
			}
			if (playerThree.points != undefined) {
				groupA1[8].innerHTML = playerThree.points;
			}
			break;
		case 2:
			if (playerThree.name != undefined) {
				groupB1[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
			}
			if (playerThree.gamesPlayed != undefined) {
				groupB1[1].innerHTML = playerThree.gamesPlayed;
			}
			if (playerThree.gamesWon != undefined) {
				groupB1[2].innerHTML = playerThree.gamesWon;
			}
			if (playerThree.gamesTied != undefined) {
				groupB1[3].innerHTML = playerThree.gamesTied;
			}
			if (playerThree.gamesLost != undefined) {
				groupB1[4].innerHTML = playerThree.gamesLost;
			}
			if (playerThree.goalsFor != undefined) {
				groupB1[5].innerHTML = playerThree.goalsFor;
			}
			if (playerThree.goalsAgainst != undefined) {
				groupB1[6].innerHTML = playerThree.goalsAgainst;
			}
			if (playerThree.goalsDefrance != undefined) {
				groupB1[7].innerHTML = playerThree.goalsDefrance;
			}
			if (playerThree.points != undefined) {
				groupB1[8].innerHTML = playerThree.points;
			}
			break;
		case 3:
			if (playerThree.name != undefined) {
				groupA2[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
			}
			if (playerThree.gamesPlayed != undefined) {
				groupA2[1].innerHTML = playerThree.gamesPlayed;
			}
			if (playerThree.gamesWon != undefined) {
				groupA2[2].innerHTML = playerThree.gamesWon;
			}
			if (playerThree.gamesTied != undefined) {
				groupA2[3].innerHTML = playerThree.gamesTied;
			}
			if (playerThree.gamesLost != undefined) {
				groupA2[4].innerHTML = playerThree.gamesLost;
			}
			if (playerThree.goalsFor != undefined) {
				groupA2[5].innerHTML = playerThree.goalsFor;
			}
			if (playerThree.goalsAgainst != undefined) {
				groupA2[6].innerHTML = playerThree.goalsAgainst;
			}
			if (playerThree.goalsDefrance != undefined) {
				groupA2[7].innerHTML = playerThree.goalsDefrance;
			}
			if (playerThree.points != undefined) {
				groupA2[8].innerHTML = playerThree.points;
			}
			break;
		case 4:
			if (playerThree.name != undefined) {
				groupB2[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
			}
			if (playerThree.gamesPlayed != undefined) {
				groupB2[1].innerHTML = playerThree.gamesPlayed;
			}
			if (playerThree.gamesWon != undefined) {
				groupB2[2].innerHTML = playerThree.gamesWon;
			}
			if (playerThree.gamesTied != undefined) {
				groupB2[3].innerHTML = playerThree.gamesTied;
			}
			if (playerThree.gamesLost != undefined) {
				groupB2[4].innerHTML = playerThree.gamesLost;
			}
			if (playerThree.goalsFor != undefined) {
				groupB2[5].innerHTML = playerThree.goalsFor;
			}
			if (playerThree.goalsAgainst != undefined) {
				groupB2[6].innerHTML = playerThree.goalsAgainst;
			}
			if (playerThree.goalsDefrance != undefined) {
				groupB2[7].innerHTML = playerThree.goalsDefrance;
			}
			if (playerThree.points != undefined) {
				groupB2[8].innerHTML = playerThree.points;
			}
			break;
		case 5:
			if (playerThree.name != undefined) {
				groupA3[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
			}
			if (playerThree.gamesPlayed != undefined) {
				groupA3[1].innerHTML = playerThree.gamesPlayed;
			}
			if (playerThree.gamesWon != undefined) {
				groupA3[2].innerHTML = playerThree.gamesWon;
			}
			if (playerThree.gamesTied != undefined) {
				groupA3[3].innerHTML = playerThree.gamesTied;
			}
			if (playerThree.gamesLost != undefined) {
				groupA3[4].innerHTML = playerThree.gamesLost;
			}
			if (playerThree.goalsFor != undefined) {
				groupA3[5].innerHTML = playerThree.goalsFor;
			}
			if (playerThree.goalsAgainst != undefined) {
				groupA3[6].innerHTML = playerThree.goalsAgainst;
			}
			if (playerThree.goalsDefrance != undefined) {
				groupA3[7].innerHTML = playerThree.goalsDefrance;
			}
			if (playerThree.points != undefined) {
				groupA3[8].innerHTML = playerThree.points;
			}
			break;
		case 6:	
			if (playerThree.name != undefined) {
				groupB3[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
			}
			if (playerThree.gamesPlayed != undefined) {
				groupB3[1].innerHTML = playerThree.gamesPlayed;
			}
			if (playerThree.gamesWon != undefined) {
				groupB3[2].innerHTML = playerThree.gamesWon;
			}
			if (playerThree.gamesTied != undefined) {
				groupB3[3].innerHTML = playerThree.gamesTied;
			}
			if (playerThree.gamesLost != undefined) {
				groupB3[4].innerHTML = playerThree.gamesLost;
			}
			if (playerThree.goalsFor != undefined) {
				groupB3[5].innerHTML = playerThree.goalsFor;
			}
			if (playerThree.goalsAgainst != undefined) {
				groupB3[6].innerHTML = playerThree.goalsAgainst;
			}
			if (playerThree.goalsDefrance != undefined) {
				groupB3[7].innerHTML = playerThree.goalsDefrance;
			}
			if (playerThree.points != undefined) {
				groupB3[8].innerHTML = playerThree.points;
			}
			break;
	}
	switch (playerFour.position) {
		case 1:
			if (playerFour.name != undefined) {
				groupA1[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
			}
			if (playerFour.gamesPlayed != undefined) {
				groupA1[1].innerHTML = playerFour.gamesPlayed;
			}
			if (playerFour.gamesWon != undefined) {
				groupA1[2].innerHTML = playerFour.gamesWon;
			}
			if (playerFour.gamesTied != undefined) {
				groupA1[3].innerHTML = playerFour.gamesTied;
			}
			if (playerFour.gamesLost != undefined) {
				groupA1[4].innerHTML = playerFour.gamesLost;
			}
			if (playerFour.goalsFor != undefined) {
				groupA1[5].innerHTML = playerFour.goalsFor;
			}
			if (playerFour.goalsAgainst != undefined) {
				groupA1[6].innerHTML = playerFour.goalsAgainst;
			}
			if (playerFour.goalsDefrance != undefined) {
				groupA1[7].innerHTML = playerFour.goalsDefrance;
			}
			if (playerFour.points != undefined) {
				groupA1[8].innerHTML = playerFour.points;
			}
			break;
		case 2:
			if (playerFour.name != undefined) {
				groupB1[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
			}
			if (playerFour.gamesPlayed != undefined) {
				groupB1[1].innerHTML = playerFour.gamesPlayed;
			}
			if (playerFour.gamesWon != undefined) {
				groupB1[2].innerHTML = playerFour.gamesWon;
			}
			if (playerFour.gamesTied != undefined) {
				groupB1[3].innerHTML = playerFour.gamesTied;
			}
			if (playerFour.gamesLost != undefined) {
				groupB1[4].innerHTML = playerFour.gamesLost;
			}
			if (playerFour.goalsFor != undefined) {
				groupB1[5].innerHTML = playerFour.goalsFor;
			}
			if (playerFour.goalsAgainst != undefined) {
				groupB1[6].innerHTML = playerFour.goalsAgainst;
			}
			if (playerFour.goalsDefrance != undefined) {
				groupB1[7].innerHTML = playerFour.goalsDefrance;
			}
			if (playerFour.points != undefined) {
				groupB1[8].innerHTML = playerFour.points;
			}
			break;
		case 3:
			if (playerFour.name != undefined) {
				groupA2[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
			}
			if (playerFour.gamesPlayed != undefined) {
				groupA2[1].innerHTML = playerFour.gamesPlayed;
			}
			if (playerFour.gamesWon != undefined) {
				groupA2[2].innerHTML = playerFour.gamesWon;
			}
			if (playerFour.gamesTied != undefined) {
				groupA2[3].innerHTML = playerFour.gamesTied;
			}
			if (playerFour.gamesLost != undefined) {
				groupA2[4].innerHTML = playerFour.gamesLost;
			}
			if (playerFour.goalsFor != undefined) {
				groupA2[5].innerHTML = playerFour.goalsFor;
			}
			if (playerFour.goalsAgainst != undefined) {
				groupA2[6].innerHTML = playerFour.goalsAgainst;
			}
			if (playerFour.goalsDefrance != undefined) {
				groupA2[7].innerHTML = playerFour.goalsDefrance;
			}
			if (playerFour.points != undefined) {
				groupA2[8].innerHTML = playerFour.points;
			}
			break;
		case 4:
			if (playerFour.name != undefined) {
				groupB2[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
			}
			if (playerFour.gamesPlayed != undefined) {
				groupB2[1].innerHTML = playerFour.gamesPlayed;
			}
			if (playerFour.gamesWon != undefined) {
				groupB2[2].innerHTML = playerFour.gamesWon;
			}
			if (playerFour.gamesTied != undefined) {
				groupB2[3].innerHTML = playerFour.gamesTied;
			}
			if (playerFour.gamesLost != undefined) {
				groupB2[4].innerHTML = playerFour.gamesLost;
			}
			if (playerFour.goalsFor != undefined) {
				groupB2[5].innerHTML = playerFour.goalsFor;
			}
			if (playerFour.goalsAgainst != undefined) {
				groupB2[6].innerHTML = playerFour.goalsAgainst;
			}
			if (playerFour.goalsDefrance != undefined) {
				groupB2[7].innerHTML = playerFour.goalsDefrance;
			}
			if (playerFour.points != undefined) {
				groupB2[8].innerHTML = playerFour.points;
			}
			break;
		case 5:
			if (playerFour.name != undefined) {
				groupA3[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
			}
			if (playerFour.gamesPlayed != undefined) {
				groupA3[1].innerHTML = playerFour.gamesPlayed;
			}
			if (playerFour.gamesWon != undefined) {
				groupA3[2].innerHTML = playerFour.gamesWon;
			}
			if (playerFour.gamesTied != undefined) {
				groupA3[3].innerHTML = playerFour.gamesTied;
			}
			if (playerFour.gamesLost != undefined) {
				groupA3[4].innerHTML = playerFour.gamesLost;
			}
			if (playerFour.goalsFor != undefined) {
				groupA3[5].innerHTML = playerFour.goalsFor;
			}
			if (playerFour.goalsAgainst != undefined) {
				groupA3[6].innerHTML = playerFour.goalsAgainst;
			}
			if (playerFour.goalsDefrance != undefined) {
				groupA3[7].innerHTML = playerFour.goalsDefrance;
			}
			if (playerFour.points != undefined) {
				groupA3[8].innerHTML = playerFour.points;
			}
			break;
		case 6:	
			if (playerFour.name != undefined) {
				groupB3[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
			}
			if (playerFour.gamesPlayed != undefined) {
				groupB3[1].innerHTML = playerFour.gamesPlayed;
			}
			if (playerFour.gamesWon != undefined) {
				groupB3[2].innerHTML = playerFour.gamesWon;
			}
			if (playerFour.gamesTied != undefined) {
				groupB3[3].innerHTML = playerFour.gamesTied;
			}
			if (playerFour.gamesLost != undefined) {
				groupB3[4].innerHTML = playerFour.gamesLost;
			}
			if (playerFour.goalsFor != undefined) {
				groupB3[5].innerHTML = playerFour.goalsFor;
			}
			if (playerFour.goalsAgainst != undefined) {
				groupB3[6].innerHTML = playerFour.goalsAgainst;
			}
			if (playerFour.goalsDefrance != undefined) {
				groupB3[7].innerHTML = playerFour.goalsDefrance;
			}
			if (playerFour.points != undefined) {
				groupB3[8].innerHTML = playerFour.points;
			}
			break;
	}
	switch (playerFive.position) {
		case 1:
			if (playerFive.name != undefined) {
				groupA1[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
			}
			if (playerFive.gamesPlayed != undefined) {
				groupA1[1].innerHTML = playerFive.gamesPlayed;
			}
			if (playerFive.gamesWon != undefined) {
				groupA1[2].innerHTML = playerFive.gamesWon;
			}
			if (playerFive.gamesTied != undefined) {
				groupA1[3].innerHTML = playerFive.gamesTied;
			}
			if (playerFive.gamesLost != undefined) {
				groupA1[4].innerHTML = playerFive.gamesLost;
			}
			if (playerFive.goalsFor != undefined) {
				groupA1[5].innerHTML = playerFive.goalsFor;
			}
			if (playerFive.goalsAgainst != undefined) {
				groupA1[6].innerHTML = playerFive.goalsAgainst;
			}
			if (playerFive.goalsDefrance != undefined) {
				groupA1[7].innerHTML = playerFive.goalsDefrance;
			}
			if (playerFive.points != undefined) {
				groupA1[8].innerHTML = playerFive.points;
			}
			break;
		case 2:
			if (playerFive.name != undefined) {
				groupB1[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
			}
			if (playerFive.gamesPlayed != undefined) {
				groupB1[1].innerHTML = playerFive.gamesPlayed;
			}
			if (playerFive.gamesWon != undefined) {
				groupB1[2].innerHTML = playerFive.gamesWon;
			}
			if (playerFive.gamesTied != undefined) {
				groupB1[3].innerHTML = playerFive.gamesTied;
			}
			if (playerFive.gamesLost != undefined) {
				groupB1[4].innerHTML = playerFive.gamesLost;
			}
			if (playerFive.goalsFor != undefined) {
				groupB1[5].innerHTML = playerFive.goalsFor;
			}
			if (playerFive.goalsAgainst != undefined) {
				groupB1[6].innerHTML = playerFive.goalsAgainst;
			}
			if (playerFive.goalsDefrance != undefined) {
				groupB1[7].innerHTML = playerFive.goalsDefrance;
			}
			if (playerFive.points != undefined) {
				groupB1[8].innerHTML = playerFive.points;
			}
			break;
		case 3:
			if (playerFive.name != undefined) {
				groupA2[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
			}
			if (playerFive.gamesPlayed != undefined) {
				groupA2[1].innerHTML = playerFive.gamesPlayed;
			}
			if (playerFive.gamesWon != undefined) {
				groupA2[2].innerHTML = playerFive.gamesWon;
			}
			if (playerFive.gamesTied != undefined) {
				groupA2[3].innerHTML = playerFive.gamesTied;
			}
			if (playerFive.gamesLost != undefined) {
				groupA2[4].innerHTML = playerFive.gamesLost;
			}
			if (playerFive.goalsFor != undefined) {
				groupA2[5].innerHTML = playerFive.goalsFor;
			}
			if (playerFive.goalsAgainst != undefined) {
				groupA2[6].innerHTML = playerFive.goalsAgainst;
			}
			if (playerFive.goalsDefrance != undefined) {
				groupA2[7].innerHTML = playerFive.goalsDefrance;
			}
			if (playerFive.points != undefined) {
				groupA2[8].innerHTML = playerFive.points;
			}
			break;
		case 4:
			if (playerFive.name != undefined) {
				groupB2[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
			}
			if (playerFive.gamesPlayed != undefined) {
				groupB2[1].innerHTML = playerFive.gamesPlayed;
			}
			if (playerFive.gamesWon != undefined) {
				groupB2[2].innerHTML = playerFive.gamesWon;
			}
			if (playerFive.gamesTied != undefined) {
				groupB2[3].innerHTML = playerFive.gamesTied;
			}
			if (playerFive.gamesLost != undefined) {
				groupB2[4].innerHTML = playerFive.gamesLost;
			}
			if (playerFive.goalsFor != undefined) {
				groupB2[5].innerHTML = playerFive.goalsFor;
			}
			if (playerFive.goalsAgainst != undefined) {
				groupB2[6].innerHTML = playerFive.goalsAgainst;
			}
			if (playerFive.goalsDefrance != undefined) {
				groupB2[7].innerHTML = playerFive.goalsDefrance;
			}
			if (playerFive.points != undefined) {
				groupB2[8].innerHTML = playerFive.points;
			}
			break;
		case 5:
			if (playerFive.name != undefined) {
				groupA3[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
			}
			if (playerFive.gamesPlayed != undefined) {
				groupA3[1].innerHTML = playerFive.gamesPlayed;
			}
			if (playerFive.gamesWon != undefined) {
				groupA3[2].innerHTML = playerFive.gamesWon;
			}
			if (playerFive.gamesTied != undefined) {
				groupA3[3].innerHTML = playerFive.gamesTied;
			}
			if (playerFive.gamesLost != undefined) {
				groupA3[4].innerHTML = playerFive.gamesLost;
			}
			if (playerFive.goalsFor != undefined) {
				groupA3[5].innerHTML = playerFive.goalsFor;
			}
			if (playerFive.goalsAgainst != undefined) {
				groupA3[6].innerHTML = playerFive.goalsAgainst;
			}
			if (playerFive.goalsDefrance != undefined) {
				groupA3[7].innerHTML = playerFive.goalsDefrance;
			}
			if (playerFive.points != undefined) {
				groupA3[8].innerHTML = playerFive.points;
			}
			break;
		case 6:	
			if (playerFive.name != undefined) {
				groupB3[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
			}
			if (playerFive.gamesPlayed != undefined) {
				groupB3[1].innerHTML = playerFive.gamesPlayed;
			}
			if (playerFive.gamesWon != undefined) {
				groupB3[2].innerHTML = playerFive.gamesWon;
			}
			if (playerFive.gamesTied != undefined) {
				groupB3[3].innerHTML = playerFive.gamesTied;
			}
			if (playerFive.gamesLost != undefined) {
				groupB3[4].innerHTML = playerFive.gamesLost;
			}
			if (playerFive.goalsFor != undefined) {
				groupB3[5].innerHTML = playerFive.goalsFor;
			}
			if (playerFive.goalsAgainst != undefined) {
				groupB3[6].innerHTML = playerFive.goalsAgainst;
			}
			if (playerFive.goalsDefrance != undefined) {
				groupB3[7].innerHTML = playerFive.goalsDefrance;
			}
			if (playerFive.points != undefined) {
				groupB3[8].innerHTML = playerFive.points;
			}
			break;
	}
	switch (playerSix.position) {
		case 1:
			if (playerSix.name != undefined) {
				groupA1[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
			}
			if (playerSix.gamesPlayed != undefined) {
				groupA1[1].innerHTML = playerSix.gamesPlayed;
			}
			if (playerSix.gamesWon != undefined) {
				groupA1[2].innerHTML = playerSix.gamesWon;
			}
			if (playerSix.gamesTied != undefined) {
				groupA1[3].innerHTML = playerSix.gamesTied;
			}
			if (playerSix.gamesLost != undefined) {
				groupA1[4].innerHTML = playerSix.gamesLost;
			}
			if (playerSix.goalsFor != undefined) {
				groupA1[5].innerHTML = playerSix.goalsFor;
			}
			if (playerSix.goalsAgainst != undefined) {
				groupA1[6].innerHTML = playerSix.goalsAgainst;
			}
			if (playerSix.goalsDefrance != undefined) {
				groupA1[7].innerHTML = playerSix.goalsDefrance;
			}
			if (playerSix.points != undefined) {
				groupA1[8].innerHTML = playerSix.points;
			}
			break;
		case 2:
			if (playerSix.name != undefined) {
				groupB1[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
			}
			if (playerSix.gamesPlayed != undefined) {
				groupB1[1].innerHTML = playerSix.gamesPlayed;
			}
			if (playerSix.gamesWon != undefined) {
				groupB1[2].innerHTML = playerSix.gamesWon;
			}
			if (playerSix.gamesTied != undefined) {
				groupB1[3].innerHTML = playerSix.gamesTied;
			}
			if (playerSix.gamesLost != undefined) {
				groupB1[4].innerHTML = playerSix.gamesLost;
			}
			if (playerSix.goalsFor != undefined) {
				groupB1[5].innerHTML = playerSix.goalsFor;
			}
			if (playerSix.goalsAgainst != undefined) {
				groupB1[6].innerHTML = playerSix.goalsAgainst;
			}
			if (playerSix.goalsDefrance != undefined) {
				groupB1[7].innerHTML = playerSix.goalsDefrance;
			}
			if (playerSix.points != undefined) {
				groupB1[8].innerHTML = playerSix.points;
			}
			break;
		case 3:
			if (playerSix.name != undefined) {
				groupA2[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
			}
			if (playerSix.gamesPlayed != undefined) {
				groupA2[1].innerHTML = playerSix.gamesPlayed;
			}
			if (playerSix.gamesWon != undefined) {
				groupA2[2].innerHTML = playerSix.gamesWon;
			}
			if (playerSix.gamesTied != undefined) {
				groupA2[3].innerHTML = playerSix.gamesTied;
			}
			if (playerSix.gamesLost != undefined) {
				groupA2[4].innerHTML = playerSix.gamesLost;
			}
			if (playerSix.goalsFor != undefined) {
				groupA2[5].innerHTML = playerSix.goalsFor;
			}
			if (playerSix.goalsAgainst != undefined) {
				groupA2[6].innerHTML = playerSix.goalsAgainst;
			}
			if (playerSix.goalsDefrance != undefined) {
				groupA2[7].innerHTML = playerSix.goalsDefrance;
			}
			if (playerSix.points != undefined) {
				groupA2[8].innerHTML = playerSix.points;
			}
			break;
		case 4:
			if (playerSix.name != undefined) {
				groupB2[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
			}
			if (playerSix.gamesPlayed != undefined) {
				groupB2[1].innerHTML = playerSix.gamesPlayed;
			}
			if (playerSix.gamesWon != undefined) {
				groupB2[2].innerHTML = playerSix.gamesWon;
			}
			if (playerSix.gamesTied != undefined) {
				groupB2[3].innerHTML = playerSix.gamesTied;
			}
			if (playerSix.gamesLost != undefined) {
				groupB2[4].innerHTML = playerSix.gamesLost;
			}
			if (playerSix.goalsFor != undefined) {
				groupB2[5].innerHTML = playerSix.goalsFor;
			}
			if (playerSix.goalsAgainst != undefined) {
				groupB2[6].innerHTML = playerSix.goalsAgainst;
			}
			if (playerSix.goalsDefrance != undefined) {
				groupB2[7].innerHTML = playerSix.goalsDefrance;
			}
			if (playerSix.points != undefined) {
				groupB2[8].innerHTML = playerSix.points;
			}
			break;
		case 5:
			if (playerSix.name != undefined) {
				groupA3[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
			}
			if (playerSix.gamesPlayed != undefined) {
				groupA3[1].innerHTML = playerSix.gamesPlayed;
			}
			if (playerSix.gamesWon != undefined) {
				groupA3[2].innerHTML = playerSix.gamesWon;
			}
			if (playerSix.gamesTied != undefined) {
				groupA3[3].innerHTML = playerSix.gamesTied;
			}
			if (playerSix.gamesLost != undefined) {
				groupA3[4].innerHTML = playerSix.gamesLost;
			}
			if (playerSix.goalsFor != undefined) {
				groupA3[5].innerHTML = playerSix.goalsFor;
			}
			if (playerSix.goalsAgainst != undefined) {
				groupA3[6].innerHTML = playerSix.goalsAgainst;
			}
			if (playerSix.goalsDefrance != undefined) {
				groupA3[7].innerHTML = playerSix.goalsDefrance;
			}
			if (playerSix.points != undefined) {
				groupA3[8].innerHTML = playerSix.points;
			}
			break;
		case 6:	
			if (playerSix.name != undefined) {
				groupB3[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
			}
			if (playerSix.gamesPlayed != undefined) {
				groupB3[1].innerHTML = playerSix.gamesPlayed;
			}
			if (playerSix.gamesWon != undefined) {
				groupB3[2].innerHTML = playerSix.gamesWon;
			}
			if (playerSix.gamesTied != undefined) {
				groupB3[3].innerHTML = playerSix.gamesTied;
			}
			if (playerSix.gamesLost != undefined) {
				groupB3[4].innerHTML = playerSix.gamesLost;
			}
			if (playerSix.goalsFor != undefined) {
				groupB3[5].innerHTML = playerSix.goalsFor;
			}
			if (playerSix.goalsAgainst != undefined) {
				groupB3[6].innerHTML = playerSix.goalsAgainst;
			}
			if (playerSix.goalsDefrance != undefined) {
				groupB3[7].innerHTML = playerSix.goalsDefrance;
			}
			if (playerSix.points != undefined) {
				groupB3[8].innerHTML = playerSix.points;
			}
			break;
	}
};

var match1 = document.getElementsByClassName("match1");
var match2 = document.getElementsByClassName("match2");
var match3 = document.getElementsByClassName("match3");
var match4 = document.getElementsByClassName("match4");
var match5 = document.getElementsByClassName("match5");
var match6 = document.getElementsByClassName("match6");
var matchOne = {
	home : undefined,
	homeOldScore : 0,
	homeScore : undefined,
	away : undefined,
	awayOldScore : 0,
	awayScore : undefined
};
var matchTwo = {
	home : undefined,
	homeOldScore : 0,
	homeScore : undefined,
	away : undefined,
	awayOldScore : 0,
	awayScore : undefined
};
var matchThree = {
	home : undefined,
	homeOldScore : 0,
	homeScore : undefined,
	away : undefined,
	awayOldScore : 0,
	awayScore : undefined
};
var matchFour = {
	home : undefined,
	homeOldScore : 0,
	homeScore : undefined,
	away : undefined,
	awayOldScore : 0,
	awayScore : undefined
};
var matchFive = {
	home : undefined,
	homeOldScore : 0,
	homeScore : undefined,
	away : undefined,
	awayOldScore : 0,
	awayScore : undefined
};
var matchSix = {
	home : undefined,
	homeOldScore : 0,
	homeScore : undefined,
	away : undefined,
	awayOldScore : 0,
	awayScore : undefined
};
function updateMatchs () {
	switch (playerOne.indexNum) {
		case 1: 
			if (playerOne.name != undefined) {
				match1[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
				match5[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
				matchOne.home = playerOne.name;
				matchFive.home = playerOne.name;
			}
			break;
		case 2:
			if (playerOne.name != undefined) {
				match2[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
				match6[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
				matchTwo.home = playerOne.name;
				matchSix.home = playerOne.name;
			}
			break;
		case 3:
			if (playerOne.name != undefined) {
				match1[3].innerHTML = playerOne.name + "<br>" + playerOne.team;
				match3[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
				matchOne.away = playerOne.name;
				matchThree.home = playerOne.name;
			}
			break;
		case 4:
			if (playerOne.name != undefined) {
				match2[3].innerHTML = playerOne.name + "<br>" + playerOne.team;
				match4[0].innerHTML = playerOne.name + "<br>" + playerOne.team;
				matchTwo.away = playerOne.name;
				matchFour.home = playerOne.name;
			}
			break;
		case 5:
			if (playerOne.name != undefined) {
				match3[3].innerHTML = playerOne.name + "<br>" + playerOne.team;
				match5[3].innerHTML = playerOne.name + "<br>" + playerOne.team;
				matchThree.away = playerOne.name;
				matchFive.away = playerOne.name;
			}
			break;
		case 6:
			if (playerOne.name != undefined) {
				match4[3].innerHTML = playerOne.name + "<br>" + playerOne.team;
				match6[3].innerHTML = playerOne.name + "<br>" + playerOne.team;
				matchFour.away = playerOne.name;
				matchSix.away = playerOne.name;
			}
			break;
	}
	switch (playerTwo.indexNum) {
		case 1: 
			if (playerTwo.name != undefined) {
				match1[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				match5[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				matchOne.home = playerTwo.name;
				matchFive.home = playerTwo.name;
			}
			break;
		case 2:
			if (playerTwo.name != undefined) {
				match2[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				match6[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				matchTwo.home = playerTwo.name;
				matchSix.home = playerTwo.name;
			}
			break;
		case 3:
			if (playerTwo.name != undefined) {
				match1[3].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				match3[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				matchOne.away = playerTwo.name;
				matchThree.home = playerTwo.name;
			}
			break;
		case 4:
			if (playerTwo.name != undefined) {
				match2[3].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				match4[0].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				matchTwo.away = playerTwo.name;
				matchFour.home = playerTwo.name;
			}
			break;
		case 5:
			if (playerTwo.name != undefined) {
				match3[3].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				match5[3].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				matchThree.away = playerTwo.name;
				matchFive.away = playerTwo.name;
			}
			break;
		case 6:
			if (playerTwo.name != undefined) {
				match4[3].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				match6[3].innerHTML = playerTwo.name + "<br>" + playerTwo.team;
				matchFour.away = playerTwo.name;
				matchSix.away = playerTwo.name;
			}
			break;
	}
	switch (playerThree.indexNum) {
		case 1: 
			if (playerThree.name != undefined) {
				match1[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
				match5[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
				matchOne.home = playerThree.name;
				matchFive.home = playerThree.name;
			}
			break;
		case 2:
			if (playerThree.name != undefined) {
				match2[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
				match6[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
				matchTwo.home = playerThree.name;
				matchSix.home = playerThree.name;
			}
			break;
		case 3:
			if (playerThree.name != undefined) {
				match1[3].innerHTML = playerThree.name + "<br>" + playerThree.team;
				match3[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
				matchOne.away = playerThree.name;
				matchThree.home = playerThree.name;
			}
			break;
		case 4:
			if (playerThree.name != undefined) {
				match2[3].innerHTML = playerThree.name + "<br>" + playerThree.team;
				match4[0].innerHTML = playerThree.name + "<br>" + playerThree.team;
				matchTwo.away = playerThree.name;
				matchFour.home = playerThree.name;
			}
			break;
		case 5:
			if (playerThree.name != undefined) {
				match3[3].innerHTML = playerThree.name + "<br>" + playerThree.team;
				match5[3].innerHTML = playerThree.name + "<br>" + playerThree.team;
				matchThree.away = playerThree.name;
				matchFive.away = playerThree.name;
			}
			break;
		case 6:
			if (playerThree.name != undefined) {
				match4[3].innerHTML = playerThree.name + "<br>" + playerThree.team;
				match6[3].innerHTML = playerThree.name + "<br>" + playerThree.team;
				matchFour.away = playerThree.name;
				matchSix.away = playerThree.name;
			}
			break;
	}
	switch (playerFour.indexNum) {
		case 1: 
			if (playerFour.name != undefined) {
				match1[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
				match5[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
				matchOne.home = playerFour.name;
				matchFive.home = playerFour.name;
			}
			break;
		case 2:
			if (playerFour.name != undefined) {
				match2[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
				match6[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
				matchTwo.home = playerFour.name;
				matchSix.home = playerFour.name;
			}
			break;
		case 3:
			if (playerFour.name != undefined) {
				match1[3].innerHTML = playerFour.name + "<br>" + playerFour.team;
				match3[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
				matchOne.away = playerFour.name;
				matchThree.home = playerFour.name;
			}
			break;
		case 4:
			if (playerFour.name != undefined) {
				match2[3].innerHTML = playerFour.name + "<br>" + playerFour.team;
				match4[0].innerHTML = playerFour.name + "<br>" + playerFour.team;
				matchTwo.away = playerFour.name;
				matchFour.home = playerFour.name;
			}
			break;
		case 5:
			if (playerFour.name != undefined) {
				match3[3].innerHTML = playerFour.name + "<br>" + playerFour.team;
				match5[3].innerHTML = playerFour.name + "<br>" + playerFour.team;
				matchThree.away = playerFour.name;
				matchFive.away = playerFour.name;
			}
			break;
		case 6:
			if (playerFour.name != undefined) {
				match4[3].innerHTML = playerFour.name + "<br>" + playerFour.team;
				match6[3].innerHTML = playerFour.name + "<br>" + playerFour.team;
				matchFour.away = playerFour.name;
				matchSix.away = playerFour.name;
			}
			break;
	}
	switch (playerFive.indexNum) {
		case 1: 
			if (playerFive.name != undefined) {
				match1[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
				match5[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
				matchOne.home = playerFive.name;
				matchFive.home = playerFive.name;
			}
			break;
		case 2:
			if (playerFive.name != undefined) {
				match2[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
				match6[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
				matchTwo.home = playerFive.name;
				matchSix.home = playerFive.name;
			}
			break;
		case 3:
			if (playerFive.name != undefined) {
				match1[3].innerHTML = playerFive.name + "<br>" + playerFive.team;
				match3[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
				matchOne.away = playerFive.name;
				matchThree.home = playerFive.name;
			}
			break;
		case 4:
			if (playerFive.name != undefined) {
				match2[3].innerHTML = playerFive.name + "<br>" + playerFive.team;
				match4[0].innerHTML = playerFive.name + "<br>" + playerFive.team;
				matchTwo.away = playerFive.name;
				matchFour.home = playerFive.name;
			}
			break;
		case 5:
			if (playerFive.name != undefined) {
				match3[3].innerHTML = playerFive.name + "<br>" + playerFive.team;
				match5[3].innerHTML = playerFive.name + "<br>" + playerFive.team;
				matchThree.away = playerFive.name;
				matchFive.away = playerFive.name;
			}
			break;
		case 6:
			if (playerFive.name != undefined) {
				match4[3].innerHTML = playerFive.name + "<br>" + playerFive.team;
				match6[3].innerHTML = playerFive.name + "<br>" + playerFive.team;
				matchFour.away = playerFive.name;
				matchSix.away = playerFive.name;
			}
			break;
	}
	switch (playerSix.indexNum) {
		case 1: 
			if (playerSix.name != undefined) {
				match1[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
				match5[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
				matchOne.home = playerSix.name;
				matchFive.home = playerSix.name;
			}
			break;
		case 2:
			if (playerSix.name != undefined) {
				match2[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
				match6[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
				matchTwo.home = playerSix.name;
				matchSix.home = playerSix.name;
			}
			break;
		case 3:
			if (playerSix.name != undefined) {
				match1[3].innerHTML = playerSix.name + "<br>" + playerSix.team;
				match3[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
				matchOne.away = playerSix.name;
				matchThree.home = playerSix.name;
			}
			break;
		case 4:
			if (playerSix.name != undefined) {
				match2[3].innerHTML = playerSix.name + "<br>" + playerSix.team;
				match4[0].innerHTML = playerSix.name + "<br>" + playerSix.team;
				matchTwo.away = playerSix.name;
				matchFour.home = playerSix.name;
			}
			break;
		case 5:
			if (playerSix.name != undefined) {
				match3[3].innerHTML = playerSix.name + "<br>" + playerSix.team;
				match5[3].innerHTML = playerSix.name + "<br>" + playerSix.team;
				matchThree.away = playerSix.name;
				matchFive.away = playerSix.name;
			}
			break;
		case 6:
			if (playerSix.name != undefined) {
				match4[3].innerHTML = playerSix.name + "<br>" + playerSix.team;
				match6[3].innerHTML = playerSix.name + "<br>" + playerSix.team;
				matchFour.away = playerSix.name;
				matchSix.away = playerSix.name;
			}
			break;
	}
};
function inti (){
	playerOne = {
		indexNum : undefined,
		position : undefined,
		name : undefined,
		team : undefined,
		gamesPlayed : undefined,
		gamesWon : undefined,
		gamesTied : undefined,
		gamesLost : undefined,
		points : undefined,
		goalsFor : undefined,
		goalsAgainst : undefined,
		goalsDefrance : undefined
	};
	playerTwo = {
		indexNum : undefined,
		position : undefined,
		name : undefined,
		team : undefined,
		gamesPlayed : undefined,
		gamesWon : undefined,
		gamesTied : undefined,
		gamesLost : undefined,
		points : undefined,
		goalsFor : undefined,
		goalsAgainst : undefined,
		goalsDefrance : undefined
	};
	playerThree = {
		indexNum : undefined,
		position : undefined,
		name : undefined,
		team : undefined,
		gamesPlayed : undefined,
		gamesWon : undefined,
		gamesTied : undefined,
		gamesLost : undefined,
		points : undefined,
		goalsFor : undefined,
		goalsAgainst : undefined,
		goalsDefrance : undefined
	};
	playerFour = {
		indexNum : undefined,
		position : undefined,
		name : undefined,
		team : undefined,
		gamesPlayed : undefined,
		gamesWon : undefined,
		gamesTied : undefined,
		gamesLost : undefined,
		points : undefined,
		goalsFor : undefined,
		goalsAgainst : undefined,
		goalsDefrance : undefined
	};
	playerFive = {
		indexNum : undefined,
		position : undefined,
		name : undefined,
		team : undefined,
		gamesPlayed : undefined,
		gamesWon : undefined,
		gamesTied : undefined,
		gamesLost : undefined,
		points : undefined,
		goalsFor : undefined,
		goalsAgainst : undefined,
		goalsDefrance : undefined
	};
	playerSix = {
		indexNum : undefined,
		position : undefined,
		name : undefined,
		team : undefined,
		gamesPlayed : undefined,
		gamesWon : undefined,
		gamesTied : undefined,
		gamesLost : undefined,
		points : undefined,
		goalsFor : undefined,
		goalsAgainst : undefined,
		goalsDefrance : undefined
	};
	assName();
	generate();
	updateGroups();
	updateMatchs();
};

var isPlayerOneFirstMatch = true;
var isPlayerTwoFirstMatch = true;
var isPlayerThreeFirstMatch = true;
var isPlayerFourFirstMatch = true;
var isPlayerFiveFirstMatch = true;
var isPlayerSixFirstMatch = true;
function updatePlayersScore (whichPlayer,goalsFor,goalsAgainst,oldGoalsFor,oldGoalsAgainst,matchUpdated){
	switch (whichPlayer) {
		case playerOne.name :
			if (isPlayerOneFirstMatch) {
				playerOne.gamesPlayed = 0;
				playerOne.gamesWon = 0;
				playerOne.gamesTied = 0;
				playerOne.gamesLost = 0;
				playerOne.points = 0;
				playerOne.goalsFor = 0;
				playerOne.goalsAgainst = 0;
				playerOne.goalsDefrance = 0;
			}
			isPlayerOneFirstMatch = false;
			playerOne.goalsFor = playerOne.goalsFor + goalsFor - oldGoalsFor;
			playerOne.goalsAgainst = playerOne.goalsAgainst + goalsAgainst - oldGoalsAgainst;
			playerOne.goalsDefrance = playerOne.goalsFor - playerOne.goalsAgainst;
			playerOne.gamesPlayed ++;
			if (matchUpdated) {
				playerOne.gamesPlayed --;
				if (oldGoalsFor > oldGoalsAgainst) {
					playerOne.gamesWon --;
				} else if (oldGoalsFor < oldGoalsAgainst) {
					playerOne.gamesLost --;
				} else {
					playerOne.gamesTied --;
				}
			}
			if (goalsFor > goalsAgainst) {
				playerOne.gamesWon ++;
			} else if (goalsFor < goalsAgainst) {
				playerOne.gamesLost ++;
			} else {
				playerOne.gamesTied ++;
			}
			playerOne.points = 3 * playerOne.gamesWon + 1 * playerOne.gamesTied; 
			return;
		case playerTwo.name :
			if (isPlayerTwoFirstMatch) {
				playerTwo.gamesPlayed = 0;
				playerTwo.gamesWon = 0;
				playerTwo.gamesTied = 0;
				playerTwo.gamesLost = 0;
				playerTwo.points = 0;
				playerTwo.goalsFor = 0;
				playerTwo.goalsAgainst = 0;
				playerTwo.goalsDefrance = 0;
			}
			isPlayerTwoFirstMatch = false;
			playerTwo.goalsFor = playerTwo.goalsFor + goalsFor - oldGoalsFor;
			playerTwo.goalsAgainst = playerTwo.goalsAgainst + goalsAgainst- oldGoalsAgainst;
			playerTwo.goalsDefrance = playerTwo.goalsFor - playerTwo.goalsAgainst;
			playerTwo.gamesPlayed ++;
			if (matchUpdated) {
				playerTwo.gamesPlayed --;
				if (oldGoalsFor > oldGoalsAgainst) {
					playerTwo.gamesWon --;
				} else if (oldGoalsFor < oldGoalsAgainst) {
					playerTwo.gamesLost --;
				} else {
					playerTwo.gamesTied --;
				}
			}
			if (goalsFor > goalsAgainst) {
				playerTwo.gamesWon ++;
			} else if (goalsFor < goalsAgainst) {
				playerTwo.gamesLost ++;
			} else {
				playerTwo.gamesTied ++;
			}
			playerTwo.points = 3 * playerTwo.gamesWon + 1 * playerTwo.gamesTied; 
			return;
		case playerThree.name :
			if (isPlayerThreeFirstMatch) {
				playerThree.gamesPlayed = 0;
				playerThree.gamesWon = 0;
				playerThree.gamesTied = 0;
				playerThree.gamesLost = 0;
				playerThree.points = 0;
				playerThree.goalsFor = 0;
				playerThree.goalsAgainst = 0;
				playerThree.goalsDefrance = 0;
			}
			isPlayerThreeFirstMatch = false;
			playerThree.goalsFor = playerThree.goalsFor + goalsFor - oldGoalsFor;
			playerThree.goalsAgainst = playerThree.goalsAgainst + goalsAgainst - oldGoalsAgainst;
			playerThree.goalsDefrance = playerThree.goalsFor - playerThree.goalsAgainst;
			playerThree.gamesPlayed ++;
			if (matchUpdated) {
				playerThree.gamesPlayed --;
				if (oldGoalsFor > oldGoalsAgainst) {
					playerThree.gamesWon --;
				} else if (oldGoalsFor < oldGoalsAgainst) {
					playerThree.gamesLost --;
				} else {
					playerThree.gamesTied --;
				}
			}
			if (goalsFor > goalsAgainst) {
				playerThree.gamesWon ++;
			} else if (goalsFor < goalsAgainst) {
				playerThree.gamesLost ++;
			} else {
				playerThree.gamesTied ++;
			}
			playerThree.points = 3 * playerThree.gamesWon + 1 * playerThree.gamesTied; 
			return;
		case playerFour.name :
			if (isPlayerFourFirstMatch) {
				playerFour.gamesPlayed = 0;
				playerFour.gamesWon = 0;
				playerFour.gamesTied = 0;
				playerFour.gamesLost = 0;
				playerFour.points = 0;
				playerFour.goalsFor = 0;
				playerFour.goalsAgainst = 0;
				playerFour.goalsDefrance = 0;
			}
			isPlayerFourFirstMatch = false;
			playerFour.goalsFor = playerFour.goalsFor + goalsFor - oldGoalsFor;
			playerFour.goalsAgainst = playerFour.goalsAgainst + goalsAgainst - oldGoalsAgainst;
			playerFour.goalsDefrance = playerFour.goalsFor - playerFour.goalsAgainst;
			playerFour.gamesPlayed ++;
			if (matchUpdated) {
				playerFour.gamesPlayed --;
				if (oldGoalsFor > oldGoalsAgainst) {
					playerFour.gamesWon --;
				} else if (oldGoalsFor < oldGoalsAgainst) {
					playerFour.gamesLost --;
				} else {
					playerFour.gamesTied --;
				}
			}
			if (goalsFor > goalsAgainst) {
				playerFour.gamesWon ++;
			} else if (goalsFor < goalsAgainst) {
				playerFour.gamesLost ++;
			} else {
				playerFour.gamesTied ++;
			}
			playerFour.points = 3 * playerFour.gamesWon + 1 * playerFour.gamesTied;
			return; 
		case playerFive.name :
			if (isPlayerFiveFirstMatch) {
				playerFive.gamesPlayed = 0;
				playerFive.gamesWon = 0;
				playerFive.gamesTied = 0;
				playerFive.gamesLost = 0;
				playerFive.points = 0;
				playerFive.goalsFor = 0;
				playerFive.goalsAgainst = 0;
				playerFive.goalsDefrance = 0;
			}
			isPlayerFiveFirstMatch = false;
			playerFive.goalsFor = playerFive.goalsFor + goalsFor - oldGoalsFor;
			playerFive.goalsAgainst = playerFive.goalsAgainst + goalsAgainst - oldGoalsAgainst;
			playerFive.goalsDefrance = playerFive.goalsFor - playerFive.goalsAgainst;
			playerFive.gamesPlayed ++;
			if (matchUpdated) {
				playerFive.gamesPlayed --;
				if (oldGoalsFor > oldGoalsAgainst) {
					playerFive.gamesWon --;
				} else if (oldGoalsFor < oldGoalsAgainst) {
					playerFive.gamesLost --;
				} else {
					playerFive.gamesTied --;
				}
			}
			if (goalsFor > goalsAgainst) {
				playerFive.gamesWon ++;
			} else if (goalsFor < goalsAgainst) {
				playerFive.gamesLost ++;
			} else {
				playerFive.gamesTied ++;
			}
			playerFive.points = 3 * playerFive.gamesWon + 1 * playerFive.gamesTied; 
			return;
		case playerSix.name :
			if (isPlayerSixFirstMatch) {
				playerSix.gamesPlayed = 0;
				playerSix.gamesWon = 0;
				playerSix.gamesTied = 0;
				playerSix.gamesLost = 0;
				playerSix.points = 0;
				playerSix.goalsFor = 0;
				playerSix.goalsAgainst = 0;
				playerSix.goalsDefrance = 0;
			}
			isPlayerSixFirstMatch = false;
			playerSix.goalsFor = playerSix.goalsFor + goalsFor - oldGoalsFor;
			playerSix.goalsAgainst = playerSix.goalsAgainst + goalsAgainst - oldGoalsAgainst;
			playerSix.goalsDefrance = playerSix.goalsFor - playerSix.goalsAgainst;
			playerSix.gamesPlayed ++;
			if (matchUpdated) {
				playerSix.gamesPlayed --;
				if (oldGoalsFor > oldGoalsAgainst) {
					playerSix.gamesWon --;
				} else if (oldGoalsFor < oldGoalsAgainst) {
					playerSix.gamesLost --;
				} else {
					playerSix.gamesTied --;
				}
			}
			if (goalsFor > goalsAgainst) {
				playerSix.gamesWon ++;
			} else if (goalsFor < goalsAgainst) {
				playerSix.gamesLost ++;
			} else {
				playerSix.gamesTied ++;
			}
			playerSix.points = 3 * playerSix.gamesWon + 1 * playerSix.gamesTied;
			return; 				
	}
};
var isMatch1Locked = false;
var isMatch2Locked = false;
var isMatch3Locked = false;
var isMatch4Locked = false;
var isMatch5Locked = false;
var isMatch6Locked = false;
var isMatch1Updated = false;
var isMatch2Updated = false;
var isMatch3Updated = false;
var isMatch4Updated = false;
var isMatch5Updated = false;
var isMatch6Updated = false;
function updateScore () {
	//match one
	if (match1[1].value != "" || match1[2].value != "") {
		if (!isMatch1Locked) {
			if (isMatch1Updated) {
				matchOne.homeOldScore = matchOne.homeScore;
				matchOne.awayOldScore = matchOne.awayScore;
			}
			matchOne.homeScore = match1[1].value * 1;
			matchOne.awayScore = match1[2].value * 1;
			updatePlayersScore (matchOne.home,matchOne.homeScore,matchOne.awayScore,matchOne.homeOldScore,matchOne.awayOldScore,isMatch1Updated);
			updatePlayersScore (matchOne.away,matchOne.awayScore,matchOne.homeScore,matchOne.awayOldScore,matchOne.homeOldScore,isMatch1Updated);
			isMatch1Updated = true;
		}
	}
	//match two
	if (match2[1].value != "" || match2[2].value != "") {
		if (!isMatch2Locked) {
			if (isMatch2Updated) {
				matchTwo.homeOldScore = matchTwo.homeScore;
				matchTwo.awayOldScore = matchTwo.awayScore;
			}
			matchTwo.homeScore = match2[1].value * 1;
			matchTwo.awayScore = match2[2].value * 1;
			updatePlayersScore (matchTwo.home,matchTwo.homeScore,matchTwo.awayScore,matchTwo.homeOldScore,matchTwo.awayOldScore,isMatch2Updated);
			updatePlayersScore (matchTwo.away,matchTwo.awayScore,matchTwo.homeScore,matchTwo.awayOldScore,matchTwo.homeOldScore,isMatch2Updated);
			isMatch2Updated = true;
		}
	}
	//mathc three
	if (match3[1].value != "" || match3[2].value != "") {
		if (!isMatch3Locked) {
			if (isMatch3Updated) {
				matchThree.homeOldScore = matchThree.homeScore;
				matchThree.awayOldScore = matchThree.awayScore;
			}
			matchThree.homeScore = match3[1].value * 1;
			matchThree.awayScore = match3[2].value * 1;
			updatePlayersScore (matchThree.home,matchThree.homeScore,matchThree.awayScore,matchThree.homeOldScore,matchThree.awayOldScore,isMatch3Updated);
			updatePlayersScore (matchThree.away,matchThree.awayScore,matchThree.homeScore,matchThree.awayOldScore,matchThree.homeOldScore,isMatch3Updated);
			isMatch3Updated = true;
		}
	}
	//match four
	if (match4[1].value != "" || match4[2].value != "") {
		if (!isMatch4Locked) {
			if (isMatch4Updated) {
				matchFour.homeOldScore = matchFour.homeScore;
				matchFour.awayOldScore = matchFour.awayScore;
			}
			matchFour.homeScore = match4[1].value * 1;
			matchFour.awayScore = match4[2].value * 1;
			updatePlayersScore (matchFour.home,matchFour.homeScore,matchFour.awayScore,matchFour.homeOldScore,matchFour.awayOldScore,isMatch4Updated);
			updatePlayersScore (matchFour.away,matchFour.awayScore,matchFour.homeScore,matchFour.awayOldScore,matchFour.homeOldScore,isMatch4Updated);
			isMatch4Updated = true;
		}
	}
	//match Five
	if (match5[1].value != "" || match5[2].value != "") {
		if (!isMatch1Locked) {
			if (isMatch5Updated) {
				matchFive.homeOldScore = matchFive.homeScore;
				matchFive.awayOldScore = matchFive.awayScore;
			}
			matchFive.homeScore = match5[1].value * 1;
			matchFive.awayScore = match5[2].value * 1;
			updatePlayersScore (matchFive.home,matchFive.homeScore,matchFive.awayScore,matchFive.homeOldScore,matchFive.awayOldScore,isMatch5Updated);
			updatePlayersScore (matchFive.away,matchFive.awayScore,matchFive.homeScore,matchFive.awayOldScore,matchFive.homeOldScore,isMatch5Updated);
			isMatch5Updated = true;
		}
	}
	//match six
	if (match6[1].value != "" || match6[2].value != "") {
		if (!isMatch6Locked) {
			if (isMatch6Updated) {
				matchSix.homeOldScore = matchSix.homeScore;
				matchSix.awayOldScore = matchSix.awayScore;
			}
			matchSix.homeScore = match6[1].value * 1;
			matchSix.awayScore = match6[2].value * 1;
			updatePlayersScore (matchSix.home,matchSix.homeScore,matchSix.awayScore,matchSix.homeOldScore,matchSix.awayOldScore,isMatch6Updated);
			updatePlayersScore (matchSix.away,matchSix.awayScore,matchSix.homeScore,matchSix.awayOldScore,matchSix.homeOldScore,isMatch6Updated);
			isMatch6Updated = true;
		}
	}
};

//updating position
//group A
var groupAP1 = {
	name : undefined,
	points: undefined,
	GD : undefined,
	GF : undefined
};
var groupAP2 = {
	name : undefined,
	points: undefined,
	GD : undefined,
	GF : undefined
};
var groupAP3 = {
	name : undefined,
	points: undefined,
	GD : undefined,
	GF : undefined
};
//group B
var groupBP1 = {
	name : undefined,
	points: undefined,
	GD : undefined,
	GF : undefined
};
var groupBP2 = {
	name : undefined,
	points: undefined,
	GD : undefined,
	GF : undefined
};
var groupBP3 = {
	name : undefined,
	points: undefined,
	GD : undefined,
	GF : undefined
};
function findPlayer (whichIndex) {
	switch (whichIndex) {
		case playerOne.indexNum:
			return playerOne.name;
		case playerTwo.indexNum:
			return playerTwo.name;
		case playerThree.indexNum:
			return playerThree.name;
		case playerFour.indexNum:
			return playerFour.name;
		case playerFive.indexNum:
			return playerFive.name;
		case playerSix.indexNum:
			return playerSix.name;
	}
};
function findPlayerPoints (whichIndex) {
	switch (whichIndex) {
		case playerOne.indexNum:
			return playerOne.points;
		case playerTwo.indexNum:
			return playerTwo.points;
		case playerThree.indexNum:
			return playerThree.points;
		case playerFour.indexNum:
			return playerFour.points;
		case playerFive.indexNum:
			return playerFive.points;
		case playerSix.indexNum:
			return playerSix.points;
	}
};
function findPlayerGD (whichIndex) {
	switch (whichIndex) {
		case playerOne.indexNum:
			return playerOne.goalsDefrance;
		case playerTwo.indexNum:
			return playerTwo.goalsDefrance;
		case playerThree.indexNum:
			return playerThree.goalsDefrance;
		case playerFour.indexNum:
			return playerFour.goalsDefrance;
		case playerFive.indexNum:
			return playerFive.goalsDefrance;
		case playerSix.indexNum:
			return playerSix.goalsDefrance;
	}
};
function findPlayerGF (whichIndex) {
	switch (whichIndex) {
		case playerOne.indexNum:
			return playerOne.goalsFor;
		case playerTwo.indexNum:
			return playerTwo.goalsFor;
		case playerThree.indexNum:
			return playerThree.goalsFor;
		case playerFour.indexNum:
			return playerFour.goalsFor;
		case playerFive.indexNum:
			return playerFive.goalsFor;
		case playerSix.indexNum:
			return playerSix.goalsFor;
	}
};
function updatePlayerPosition (whichPlayer,position) {
	switch (whichPlayer) {
		case playerOne.name:
			playerOne.position = position;
			return;
		case playerTwo.name:
			playerTwo.position = position;
			return;
		case playerThree.name:
			playerThree.position = position;
			return;
		case playerFour.name:
			playerFour.position = position;
			return;
		case playerFive.name:
			playerFive.position = position;
			return;
		case playerSix.name:
			playerSix.position = position;
			return;
	}
};
function updatePosition () {
	// group A
	groupAP1.name = findPlayer(1);
	groupAP2.name = findPlayer(3);
	groupAP3.name = findPlayer(5);
	groupAP1.points = findPlayerPoints(1);
	groupAP2.points = findPlayerPoints(3);
	groupAP3.points = findPlayerPoints(5);
	groupAP1.GD = findPlayerGD(1);
	groupAP2.GD = findPlayerGD(3);
	groupAP3.GD = findPlayerGD(5);
	groupAP1.GF = findPlayerGF(1);
	groupAP2.GF = findPlayerGF(3);
	groupAP3.GF = findPlayerGF(5);
	// NOTE THAT UNDEFINED IS NOT BIGGER OR SMALLER THAN A NUMBER
	// compair points group A
	if (groupAP1.points>groupAP2.points && groupAP1.points>groupAP3.points) {
		// p1 =1
		updatePlayerPosition(groupAP1.name,1);
		if (groupAP2.points>groupAP3.points) {
			//p2 =3 p3 = 5
			updatePlayerPosition(groupAP2.name,3);
			updatePlayerPosition(groupAP3.name,5);
		} else if (groupAP3.points>groupAP2.points) {
			//p3 = 3  p2 = 5
			updatePlayerPosition(groupAP3.name,3);
			updatePlayerPosition(groupAP2.name,5);
		} else {
			//compair GD
			if (groupAP2.GD>groupAP3.GD) {
				//p2 =3   p3=5
				updatePlayerPosition(groupAP2.name,3);
				updatePlayerPosition(groupAP3.name,5);
			} else if (groupAP3.GD>groupAP2.GD) {
				//p3 = 3    p2=5
				updatePlayerPosition(groupAP3.name,3);
				updatePlayerPosition(groupAP2.name,5);
			} else {
				//note to make a function to check matchs
				//compair Gf
				if (groupAP2.GF>groupAP3.GF) {
					//p2=3 p3=5
					updatePlayerPosition(groupAP2.name,3);
					updatePlayerPosition(groupAP3.name,5);
				} else if (groupAP3.GF>groupAP2.GF) {
					//p3=3  p2=5
					updatePlayerPosition(groupAP3.name,3);
					updatePlayerPosition(groupAP2.name,5);
				} else {
					//p2=3  p3=5
					updatePlayerPosition(groupAP2.name,3);
					updatePlayerPosition(groupAP3.name,5);
				}
			}
		}
	} else if (groupAP2.points>groupAP1.points && groupAP2.points>groupAP3.points) {
		// p2 =1
		updatePlayerPosition(groupAP2.name,1);
		if (groupAP1.points>groupAP3.points) {
			//p1=3    p3=5
			updatePlayerPosition(groupAP1.name,3);
			updatePlayerPosition(groupAP3.name,5);
		} else if (groupAP3.points>groupAP1.points) {
			//p3=3    p1=5
			updatePlayerPosition(groupAP3.name,3);
			updatePlayerPosition(groupAP1.name,5);
		} else {
			//compair Gd
			if (groupAP1.GD>groupAP3.GD) {
				//p1 =3   p3=5
				updatePlayerPosition(groupAP1.name,3);
				updatePlayerPosition(groupAP3.name,5);
			} else if (groupAP3.GD>groupAP1.GD) {
				//p3 = 3    p1=5
				updatePlayerPosition(groupAP3.name,3);
				updatePlayerPosition(groupAP1.name,5);
			} else {
				//note to make a function to check matchs
				//compair Gf
				if (groupAP1.GF>groupAP3.GF) {
					//p2=3 p3=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP3.name,5);
				} else if (groupAP3.GF>groupAP1.GF) {
					//p1=3  p3=5
					updatePlayerPosition(groupAP3.name,3);
					updatePlayerPosition(groupAP1.name,5);
				} else {
					//p3=3  p1=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP3.name,5);
				}
			}
		}
	} else if (groupAP3.points>groupAP1.points && groupAP3.points>groupAP2.points) {
		//p3 =1
		updatePlayerPosition(groupAP3.name,1);
		if (groupAP1.points>groupAP2.points) {
			//p1=3   p2=5
			updatePlayerPosition(groupAP1.name,3);
			updatePlayerPosition(groupAP2.name,5);
		} else if (groupAP2.points>groupAP1.points) {
			//p2=3   p1=5
			updatePlayerPosition(groupAP2.name,3);
			updatePlayerPosition(groupAP1.name,5);
		} else {
			//compair Gd
			if (groupAP1.GD>groupAP2.GD) {
				//p1 =3   p2=5
				updatePlayerPosition(groupAP1.name,3);
				updatePlayerPosition(groupAP2.name,5);
			} else if (groupAP2.GD>groupAP1.GD) {
				//p2 = 3    p1=5
				updatePlayerPosition(groupAP2.name,3);
				updatePlayerPosition(groupAP1.name,5);
			} else {
				//note to make a function to check matchs
				//compair Gf
				if (groupAP1.GF>groupAP2.GF) {
					//p1=3 p2=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP2.name,5);
				} else if (groupAP2.GF>groupAP1.GF) {
					//p2=3  p1=5
					updatePlayerPosition(groupAP2.name,3);
					updatePlayerPosition(groupAP1.name,5);
				} else {
					//p1=3  p2=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP2.name,5);
				}
			}
		}
	} else if (groupAP1.points==groupAP2.points && groupAP1.points>groupAP3.points) {
		//p3=5
		updatePlayerPosition(groupAP3.name,5);
		//check GD
		if (groupAP1.GD>groupAP2.GD) {
			//p1=1  p2=3
			updatePlayerPosition(groupAP1.name,1);
			updatePlayerPosition(groupAP2.name,3);
		} else if (groupAP2.GD>groupAP1.GD) {
			//p2=1  p1=3
			updatePlayerPosition(groupAP2.name,1);
			updatePlayerPosition(groupAP1.name,3);
		} else {
			//note to make a function to check matchs 
			//check GF
			if (groupAP1.GF>groupAP2.GF) {
				//p1=1  p2=3
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP2.name,3);
			} else if (groupAP2.GF>groupAP1.GF) {
				//p2=1  p1=3
				updatePlayerPosition(groupAP2.name,1);
				updatePlayerPosition(groupAP1.name,3);
			} else {
				//p1=1  p2=3
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP2.name,3);
			}
		}
	} else if (groupAP1.points==groupAP3.points && groupAP1.points>groupAP2.points) {
		//p2=5
		updatePlayerPosition(groupAP2.name,5);
		//check GD
		if (groupAP1.GD>groupAP3.GD) {
			//p1=1  p3=3
			updatePlayerPosition(groupAP1.name,1);
			updatePlayerPosition(groupAP3.name,3);
		} else if (groupAP3.GD>groupAP1.GD) {
			//p3=1  p1=3
			updatePlayerPosition(groupAP3.name,1);
			updatePlayerPosition(groupAP1.name,3);
		} else {
			//note to make a function to check matchs 
			//check GF
			if (groupAP1.GF>groupAP3.GF) {
				//p1=1  p3=3
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP3.name,3);
			} else if (groupAP3.GF>groupAP1.GF) {
				//p3=1  p1=3
				updatePlayerPosition(groupAP3.name,1);
				updatePlayerPosition(groupAP1.name,3);
			} else {
				//p1=1  p3=3
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP3.name,3);
			}
		}
	} else if (groupAP2.points==groupAP3.points && groupAP2.points>groupAP1.points) {
		//p1=5
		updatePlayerPosition(groupAP1.name,5);
		//check GD
		if (groupAP2.GD>groupAP3.GD) {
			//p2=1  p3=3
			updatePlayerPosition(groupAP2.name,1);
			updatePlayerPosition(groupAP3.name,3);
		} else if (groupAP3.GD>groupAP2.GD) {
			//p3=1  p2=3
			updatePlayerPosition(groupAP3.name,1);
			updatePlayerPosition(groupAP2.name,3);
		} else {
			//note to make a function to check matchs 
			//check GF
			if (groupAP2.GF>groupAP3.GF) {
				//p2=1  p3=3
				updatePlayerPosition(groupAP2.name,1);
				updatePlayerPosition(groupAP3.name,3);
			} else if (groupAP3.GF>groupAP2.GF) {
				//p3=1  p2=3
				updatePlayerPosition(groupAP3.name,1);
				updatePlayerPosition(groupAP2.name,3);
			} else {
				//p2=1  p3=3
				updatePlayerPosition(groupAP2.name,1);
				updatePlayerPosition(groupAP3.name,3);
			}
		}
	} else if (groupAP3.points==undefined) { 
		//p3=5
		updatePlayerPosition(groupAP3.name,5);
		if (groupAP1.points>groupAP2.points) {
			//p1=1  p2=3
			updatePlayerPosition(groupAP1.name,1);
			updatePlayerPosition(groupAP2.name,3);
		} else if (groupAP2.points>groupAP1.points) {
			//p2=1  p1=3
			updatePlayerPosition(groupAP2.name,1);
			updatePlayerPosition(groupAP1.name,3);
		} else {
			//it is a tie
			//p1=1  p2=3
			updatePlayerPosition(groupAP1.name,1);
			updatePlayerPosition(groupAP2.name,3);
		}
	} else {
		//compair Gd
		if (groupAP1.GD>groupAP2.GD && groupAP1.GD>groupAP3.GD) {
			//p1=1
			updatePlayerPosition(groupAP1.name,1);
			if (groupAP2.GD>groupAP3.GD) {
				//p2=3  p3=5
				updatePlayerPosition(groupAP2.name,3);
				updatePlayerPosition(groupAP3.name,5);
			} else if (groupAP3.GD>groupAP2.GD) {
				//p3=3 p2=5
				updatePlayerPosition(groupAP3.name,3);
				updatePlayerPosition(groupAP2.name,5);
			} else {
				//note to make a function to check matchs
				//GF check
				if (groupAP2.GF>groupAP3.GF) {
					//p2=3  p3=5
					updatePlayerPosition(groupAP2.name,3);
					updatePlayerPosition(groupAP3.name,5);
				} else if (groupAP3.GF>groupAP2.GF) {
					//p3=3   p2=5
					updatePlayerPosition(groupAP3.name,3);
					updatePlayerPosition(groupAP2.name,5);
				} else {
					//p2=3  p3=5
					updatePlayerPosition(groupAP2.name,3);
					updatePlayerPosition(groupAP3.name,5);
				}
			}
		} else if (groupAP2.GD>groupAP1.GD && groupAP2.GD>groupAP3.GD) {
			//p2=1
			updatePlayerPosition(groupAP2.name,1);
			if (groupAP1.GD>groupAP3.GD) {
				//p1=3  p3=5
				updatePlayerPosition(groupAP1.name,3);
				updatePlayerPosition(groupAP3.name,5);
			} else if (groupAP3.GD>groupAP1.GD) {
				//p3=3 p1=5
				updatePlayerPosition(groupAP3.name,3);
				updatePlayerPosition(groupAP1.name,5);
			} else {
				//note to make a function to check matchs
				//GF check
				if (groupAP1.GF>groupAP3.GF) {
					//p1=3  p3=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP3.name,5);
				} else if (groupAP3.GF>groupAP1.GF) {
					//p3=3   p1=5
					updatePlayerPosition(groupAP3.name,3);
					updatePlayerPosition(groupAP1.name,5);
				} else {
					//p1=3  p3=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP3.name,5);
				}
			}
		} else if (groupAP3.GD>groupAP1.GD && groupAP3.GD>groupAP1.GD) {
			//p3=1
			updatePlayerPosition(groupAP3.name,1);
			if (groupAP1.GD>groupAP2.GD) {
				//p1=3  p2=5
				updatePlayerPosition(groupAP1.name,3);
				updatePlayerPosition(groupAP2.name,5);
			} else if (groupAP2.GD>groupAP1.GD) {
				//p2=3 p1=5
				updatePlayerPosition(groupAP2.name,3);
				updatePlayerPosition(groupAP1.name,5);
			} else {
				//note to make a function to check matchs
				//GF check
				if (groupAP1.GF>groupAP2.GF) {
					//p1=3  p2=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP2.name,5);
				} else if (groupAP2.GF>groupAP1.GF) {
					//p2=3   p1=5
					updatePlayerPosition(groupAP2.name,3);
					updatePlayerPosition(groupAP1.name,5);
				} else {
					//p1=3  p2=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP2.name,5);
				}
			}
		} else if (groupAP1.GD==groupAP2.GD && groupAP1.GD>groupAP3.GD) {
			//p3=5
			updatePlayerPosition(groupAP3.name,5);
			//note to make a function to check matchs 
			//check GF
			if (groupAP1.GF>groupAP2.GF) {
				//p1=1  p2=3
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP2.name,3);
			} else if (groupAP2.GF>groupAP1.GF) {
				//p2=1  p1=3
				updatePlayerPosition(groupAP2.name,1);
				updatePlayerPosition(groupAP1.name,3);
			} else {
				//p1=1  p2=3
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP2.name,3);
			}
		} else if (groupAP1.GD==groupAP3.GD && groupAP1.GD>groupAP2.GD) {
			//p2=5
			updatePlayerPosition(groupAP2.name,5);
			//note to make a function to check matchs 
			//check GF
			if (groupAP1.GF>groupAP3.GF) {
				//p1=1  p3=3
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP3.name,3);
			} else if (groupAP3.GF>groupAP1.GF) {
				//p3=1  p1=3
				updatePlayerPosition(groupAP3.name,1);
				updatePlayerPosition(groupAP1.name,3);
			} else {
				//p1=1  p3=3
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP3.name,3);
			}
		} else if (groupAP2.GD==groupAP3.GD && groupAP2.GD>groupAP1.GD) {
			//p1=5
			updatePlayerPosition(groupAP1.name,5);
			//note to make a function to check matchs 
			//check GF
			if (groupAP2.GF>groupAP3.GF) {
				//p2=1  p3=3
				updatePlayerPosition(groupAP2.name,1);
				updatePlayerPosition(groupAP3.name,3);
			} else if (groupAP3.GF>groupAP2.GF) {
				//p3=1  p2=3
				updatePlayerPosition(groupAP3.name,1);
				updatePlayerPosition(groupAP2.name,3);
			} else {
				//p2=1  p3=3
				updatePlayerPosition(groupAP2.name,1);
				updatePlayerPosition(groupAP3.name,3);
			}
		} else {
			//NOTE HERE ALL THREE MATCHES WERE TIE NO NEED TO CHECK MATCH WINNER
			//GF check
			if (groupAP1.GF>groupAP2.GF && groupAP1.GF>groupAP3.GF) {
				//p1=1
				updatePlayerPosition(groupAP1.name,1);
				if (groupAP2.GF>groupAP3.GF) {
					//p2=3  p3=5
					updatePlayerPosition(groupAP2.name,3);
					updatePlayerPosition(groupAP3.name,5);
				} else if (groupAP3.GF>groupAP2.GF) {
					//p3=3  p2=5
					updatePlayerPosition(groupAP3.name,3);
					updatePlayerPosition(groupAP2.name,5);
				} else {
					//p2=3  p3=5
					updatePlayerPosition(groupAP2.name,3);
					updatePlayerPosition(groupAP3.name,5);
				}
			} else if (groupAP2.GF>groupAP1.GF && groupAP2.GF>groupAP3.GF) {
				//p2=1
				updatePlayerPosition(groupAP2.name,1);
				if (groupAP1.GF>groupAP3.GF) {
					//p1=3  p3=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP3.name,5);
				} else if (groupAP3.GF>groupAP1.GF) {
					//p3=3  p1=5
					updatePlayerPosition(groupAP3.name,3);
					updatePlayerPosition(groupAP1.name,5);
				} else {
					//p1=3  p3=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP3.name,5);
				}
			} else if (groupAP3.GF>groupAP1.GF && groupAP3.GF>groupAP2.GF) {
				//p3=1
				updatePlayerPosition(groupAP3.name,1);
				if (groupAP1.GF>groupAP2.GF) {
					//p1=3  p2=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP2.name,5);
				} else if (groupAP2.GF>groupAP1.GF) {
					//p2=3  p1=5
					updatePlayerPosition(groupAP2.name,3);
					updatePlayerPosition(groupAP1.name,5);
				} else {
					//p1=3  p2=5
					updatePlayerPosition(groupAP1.name,3);
					updatePlayerPosition(groupAP2.name,5);
				}
			} else if (groupAP1.GF==groupAP3.GF && groupAP1.GF>groupAP2.GF) {
				//p1=1  p3=3  p2=5
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP3.name,3);
				updatePlayerPosition(groupAP2.name,5);
			} else if (groupAP2.GF==groupAP3.GF && groupAP2.GF>groupAP1.GF) {
				//p2=1  p3=3  p1=5
				updatePlayerPosition(groupAP2.name,1);
				updatePlayerPosition(groupAP3.name,3);
				updatePlayerPosition(groupAP1.name,5);
			} else {
				//p1=1  p2=3  p3=5
				updatePlayerPosition(groupAP1.name,1);
				updatePlayerPosition(groupAP2.name,3);
				updatePlayerPosition(groupAP3.name,5);
			}
		}
	}

	// group B
	groupBP1.name = findPlayer(2);
	groupBP2.name = findPlayer(4);
	groupBP3.name = findPlayer(6);
	groupBP1.points = findPlayerPoints(2);
	groupBP2.points = findPlayerPoints(4);
	groupBP3.points = findPlayerPoints(6);
	groupBP1.GD = findPlayerGD(2);
	groupBP2.GD = findPlayerGD(4);
	groupBP3.GD = findPlayerGD(6);
	groupBP1.GF = findPlayerGF(2);
	groupBP2.GF = findPlayerGF(4);
	groupBP3.GF = findPlayerGF(6);
	//comparison
	if (groupBP1.points>groupBP2.points && groupBP1.points>groupBP3.points) {
		// p1 =2
		updatePlayerPosition(groupBP1.name,2);
		if (groupBP2.points>groupBP3.points) {
			//p2 =4 p3 = 6
			updatePlayerPosition(groupBP2.name,4);
			updatePlayerPosition(groupBP3.name,6);
		} else if (groupBP3.points>groupBP2.points) {
			//p3 = 4  p2 = 6
			updatePlayerPosition(groupBP3.name,4);
			updatePlayerPosition(groupBP2.name,6);
		} else {
			//compair GD
			if (groupBP2.GD>groupBP3.GD) {
				//p2 =4   p3=6
				updatePlayerPosition(groupBP2.name,4);
				updatePlayerPosition(groupBP3.name,6);
			} else if (groupBP3.GD>groupBP2.GD) {
				//p3 = 4    p2=6
				updatePlayerPosition(groupBP3.name,4);
				updatePlayerPosition(groupBP2.name,6);
			} else {
				//note to make a function to check matchs
				//compair Gf
				if (groupBP2.GF>groupBP3.GF) {
					//p2=4 p3=6
					updatePlayerPosition(groupBP2.name,4);
					updatePlayerPosition(groupBP3.name,6);
				} else if (groupBP3.GF>groupBP2.GF) {
					//p3=4  p2=6
					updatePlayerPosition(groupBP3.name,4);
					updatePlayerPosition(groupBP2.name,6);
				} else {
					//p2=4  p3=6
					updatePlayerPosition(groupBP2.name,4);
					updatePlayerPosition(groupBP3.name,6);
				}
			}
		}
	} else if (groupBP2.points>groupBP1.points && groupBP2.points>groupBP3.points) {
		// p2 =2
		updatePlayerPosition(groupBP2.name,2);
		if (groupBP1.points>groupBP3.points) {
			//p1=4    p3=6
			updatePlayerPosition(groupBP1.name,4);
			updatePlayerPosition(groupBP3.name,6);
		} else if (groupBP3.points>groupBP1.points) {
			//p3=4    p1=6
			updatePlayerPosition(groupBP3.name,4);
			updatePlayerPosition(groupBP1.name,6);
		} else {
			//compair Gd
			if (groupBP1.GD>groupBP3.GD) {
				//p1 =4   p3=6
				updatePlayerPosition(groupBP1.name,4);
				updatePlayerPosition(groupBP3.name,6);
			} else if (groupBP3.GD>groupBP1.GD) {
				//p3 = 4    p1=6
				updatePlayerPosition(groupBP3.name,4);
				updatePlayerPosition(groupBP1.name,6);
			} else {
				//note to make a function to check matchs
				//compair Gf
				if (groupBP1.GF>groupBP3.GF) {
					//p2=4 p3=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP3.name,6);
				} else if (groupBP3.GF>groupBP1.GF) {
					//p1=4  p3=6
					updatePlayerPosition(groupBP3.name,4);
					updatePlayerPosition(groupBP1.name,6);
				} else {
					//p3=4  p1=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP3.name,6);
				}
			}
		}
	} else if (groupBP3.points>groupBP1.points && groupBP3.points>groupBP2.points) {      
		//p3 =2
		updatePlayerPosition(groupBP3.name,2);  
		if (groupBP1.points>groupBP2.points) {
			//p1=4   p2=6
			updatePlayerPosition(groupBP1.name,4);
			updatePlayerPosition(groupBP2.name,6);
		} else if (groupBP2.points>groupBP1.points) {
			//p2=4   p1=6
			updatePlayerPosition(groupBP2.name,4);
			updatePlayerPosition(groupBP1.name,6);
		} else {
			//compair Gd
			if (groupBP1.GD>groupBP2.GD) {
				//p1 =4   p2=6
				updatePlayerPosition(groupBP1.name,4);
				updatePlayerPosition(groupBP2.name,6);
			} else if (groupBP2.GD>groupBP1.GD) {
				//p2=4    p1=6
				updatePlayerPosition(groupBP2.name,4);
				updatePlayerPosition(groupBP1.name,6);
			} else {
				//note to make a function to check matchs
				//compair Gf
				if (groupBP1.GF>groupBP2.GF) {
					//p1=4 p2=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP2.name,6);
				} else if (groupBP2.GF>groupBP1.GF) {
					//p2=4  p1=6
					updatePlayerPosition(groupBP2.name,4);
					updatePlayerPosition(groupBP1.name,6);
				} else {
					//p1=4  p2=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP2.name,6);
				}
			}
		}
	} else if (groupBP1.points==groupBP2.points && groupBP1.points>groupBP3.points) {
		//p3=6
		updatePlayerPosition(groupBP3.name,6);
		//check GD
		if (groupBP1.GD>groupBP2.GD) {
			//p1=2  p2=4
			updatePlayerPosition(groupBP1.name,2);
			updatePlayerPosition(groupBP2.name,4);
		} else if (groupBP2.GD>groupBP1.GD) {
			//p2=2  p1=4
			updatePlayerPosition(groupBP2.name,2);
			updatePlayerPosition(groupBP1.name,4);
		} else {
			//note to make a function to check matchs 
			//check GF
			if (groupBP1.GF>groupBP2.GF) {
				//p1=2  p2=4
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP2.name,4);
			} else if (groupBP2.GF>groupBP1.GF) {
				//p2=2  p1=4
				updatePlayerPosition(groupBP2.name,2);
				updatePlayerPosition(groupBP1.name,4);
			} else {
				//p1=2  p2=4
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP2.name,4);
			}
		}
	} else if (groupBP1.points==groupBP3.points && groupBP1.points>groupBP2.points) {
		//p2=6
		updatePlayerPosition(groupBP2.name,6);
		//check GD
		if (groupBP1.GD>groupBP3.GD) {
			//p1=2  p3=4
			updatePlayerPosition(groupBP1.name,2);
			updatePlayerPosition(groupBP3.name,4);
		} else if (groupBP3.GD>groupBP1.GD) {
			//p3=2  p1=4
			updatePlayerPosition(groupBP3.name,2);
			updatePlayerPosition(groupBP1.name,4);
		} else {
			//note to make a function to check matchs 
			//check GF
			if (groupBP1.GF>groupBP3.GF) {
				//p1=2  p3=4
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP3.name,4);
			} else if (groupBP3.GF>groupBP1.GF) {
				//p3=2  p1=4
				updatePlayerPosition(groupBP3.name,2);
				updatePlayerPosition(groupBP1.name,4);
			} else {
				//p1=2  p3=4
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP3.name,4);
			}
		}
	} else if (groupBP2.points==groupBP3.points && groupBP2.points>groupBP1.points) {
		//p1=6
		updatePlayerPosition(groupBP1.name,6);
		//check GD
		if (groupBP2.GD>groupBP3.GD) {
			//p2=2  p3=4
			updatePlayerPosition(groupBP2.name,2);
			updatePlayerPosition(groupBP3.name,4);
		} else if (groupBP3.GD>groupBP2.GD) {
			//p3=2  p2=4
			updatePlayerPosition(groupBP3.name,2);
			updatePlayerPosition(groupBP2.name,4);
		} else {
			//note to make a function to check matchs 
			//check GF
			if (groupBP2.GF>groupBP3.GF) {
				//p2=2  p3=4
				updatePlayerPosition(groupBP2.name,2);
				updatePlayerPosition(groupBP3.name,4);
			} else if (groupBP3.GF>groupBP2.GF) {
				//p3=2  p2=4
				updatePlayerPosition(groupBP3.name,2);
				updatePlayerPosition(groupBP2.name,4);
			} else {
				//p2=2  p3=4
				updatePlayerPosition(groupBP2.name,2);
				updatePlayerPosition(groupBP3.name,4);
			}
		}
	} else if (groupBP3.points==undefined) { 
		//p3=6
		updatePlayerPosition(groupBP3.name,6);
		if (groupBP1.points>groupBP2.points) {
			//p1=2  p2=4
			updatePlayerPosition(groupBP1.name,2);
			updatePlayerPosition(groupBP2.name,4);
		} else if (groupBP2.points>groupBP1.points) {
			//p2=2  p1=4
			updatePlayerPosition(groupBP2.name,2);
			updatePlayerPosition(groupBP1.name,4);
		} else {
			//it is a tie
			//p1=2  p2=4
			updatePlayerPosition(groupBP1.name,2);
			updatePlayerPosition(groupBP2.name,4);
		}
	} else {
		//compair Gd
		if (groupBP1.GD>groupBP2.GD && groupBP1.GD>groupBP3.GD) {
			//p1=2
			updatePlayerPosition(groupBP1.name,2);
			if (groupBP2.GD>groupBP3.GD) {
				//p2=4  p3=6
				updatePlayerPosition(groupBP2.name,4);
				updatePlayerPosition(groupBP3.name,6);
			} else if (groupBP3.GD>groupBP2.GD) {
				//p3=4 p2=6
				updatePlayerPosition(groupBP3.name,4);
				updatePlayerPosition(groupBP2.name,6);
			} else {
				//note to make a function to check matchs
				//GF check
				if (groupBP2.GF>groupBP3.GF) {
					//p2=4  p3=6
					updatePlayerPosition(groupBP2.name,4);
					updatePlayerPosition(groupBP3.name,6);
				} else if (groupBP3.GF>groupBP2.GF) {
					//p3=4   p2=6
					updatePlayerPosition(groupBP3.name,4);
					updatePlayerPosition(groupBP2.name,6);
				} else {
					//p2=4  p3=6
					updatePlayerPosition(groupBP2.name,4);
					updatePlayerPosition(groupBP3.name,6);
				}
			}       //continue here
		} else if (groupBP2.GD>groupBP1.GD && groupBP2.GD>groupBP3.GD) {
			//p2=2
			updatePlayerPosition(groupBP2.name,2);
			if (groupBP1.GD>groupBP3.GD) {
				//p1=4  p3=6
				updatePlayerPosition(groupBP1.name,4);
				updatePlayerPosition(groupBP3.name,6);
			} else if (groupBP3.GD>groupBP1.GD) {
				//p3=4 p1=6
				updatePlayerPosition(groupBP3.name,4);
				updatePlayerPosition(groupBP1.name,6);
			} else {
				//note to make a function to check matchs
				//GF check
				if (groupBP1.GF>groupBP3.GF) {
					//p1=4  p3=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP3.name,6);
				} else if (groupBP3.GF>groupBP1.GF) {
					//p3=4   p1=6
					updatePlayerPosition(groupBP3.name,4);
					updatePlayerPosition(groupBP1.name,6);
				} else {
					//p1=4  p3=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP3.name,6);
				}
			}
		} else if (groupBP3.GD>groupBP1.GD && groupBP3.GD>groupBP1.GD) {
			//p3=2
			updatePlayerPosition(groupBP3.name,2);
			if (groupBP1.GD>groupBP2.GD) {
				//p1=4  p2=6
				updatePlayerPosition(groupBP1.name,4);
				updatePlayerPosition(groupBP2.name,6);
			} else if (groupBP2.GD>groupBP1.GD) {
				//p2=4 p1=6
				updatePlayerPosition(groupBP2.name,4);
				updatePlayerPosition(groupBP1.name,6);
			} else {
				//note to make a function to check matchs
				//GF check
				if (groupBP1.GF>groupBP2.GF) {
					//p1=4  p2=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP2.name,6);
				} else if (groupBP2.GF>groupBP1.GF) {
					//p2=4   p1=6
					updatePlayerPosition(groupBP2.name,4);
					updatePlayerPosition(groupBP1.name,6);
				} else {
					//p1=4  p2=6
					updatePlayerPosition(groupBP1.name,3);
					updatePlayerPosition(groupBP2.name,5);
				}
			}
		} else if (groupBP1.GD==groupBP2.GD && groupBP1.GD>groupBP3.GD) {
			//p3=6
			updatePlayerPosition(groupBP3.name,6);
			//note to make a function to check matchs 
			//check GF
			if (groupBP1.GF>groupBP2.GF) {
				//p1=2  p2=4
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP2.name,4);
			} else if (groupBP2.GF>groupBP1.GF) {
				//p2=2  p1=4
				updatePlayerPosition(groupBP2.name,2);
				updatePlayerPosition(groupBP1.name,4);
			} else {
				//p1=2  p2=4
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP2.name,4);
			}
		} else if (groupBP1.GD==groupBP3.GD && groupBP1.GD>groupBP2.GD) {
			//p2=6
			updatePlayerPosition(groupBP2.name,6);
			//note to make a function to check matchs 
			//check GF
			if (groupBP1.GF>groupBP3.GF) {
				//p1=2  p3=4
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP3.name,4);
			} else if (groupBP3.GF>groupBP1.GF) {
				//p3=2  p1=4
				updatePlayerPosition(groupBP3.name,2);
				updatePlayerPosition(groupBP1.name,4);
			} else {
				//p1=2  p3=4
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP3.name,4);
			}
		} else if (groupBP2.GD==groupBP3.GD && groupBP2.GD>groupBP1.GD) {
			//p1=6
			updatePlayerPosition(groupBP1.name,6);
			//note to make a function to check matchs 
			//check GF
			if (groupBP2.GF>groupBP3.GF) {
				//p2=2  p3=4
				updatePlayerPosition(groupBP2.name,2);
				updatePlayerPosition(groupBP3.name,4);
			} else if (groupBP3.GF>groupBP2.GF) {
				//p3=2  p2=4
				updatePlayerPosition(groupBP3.name,2);
				updatePlayerPosition(groupBP2.name,4);
			} else {
				//p2=2  p3=4
				updatePlayerPosition(groupBP2.name,2);
				updatePlayerPosition(groupBP3.name,4);
			}
		} else {
			//NOTE HERE ALL THREE MATCHES WERE TIE NO NEED TO CHECK MATCH WINNER
			//GF check
			if (groupBP1.GF>groupBP2.GF && groupBP1.GF>groupBP3.GF) {
				//p1=2
				updatePlayerPosition(groupBP1.name,2);
				if (groupBP2.GF>groupBP3.GF) {
					//p2=4  p3=6
					updatePlayerPosition(groupBP2.name,4);
					updatePlayerPosition(groupBP3.name,6);
				} else if (groupBP3.GF>groupBP2.GF) {
					//p3=4  p2=6
					updatePlayerPosition(groupBP3.name,4);
					updatePlayerPosition(groupBP2.name,6);
				} else {
					//p2=4  p3=6
					updatePlayerPosition(groupBP2.name,4);
					updatePlayerPosition(groupBP3.name,6);
				}
			} else if (groupBP2.GF>groupBP1.GF && groupBP2.GF>groupBP3.GF) {
				//p2=2
				updatePlayerPosition(groupBP2.name,2);
				if (groupBP1.GF>groupBP3.GF) {
					//p1=4  p3=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP3.name,6);
				} else if (groupBP3.GF>groupBP1.GF) {
					//p3=4  p1=6
					updatePlayerPosition(groupBP3.name,4);
					updatePlayerPosition(groupBP1.name,6);
				} else {
					//p1=4  p3=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP3.name,6);
				}
			} else if (groupBP3.GF>groupBP1.GF && groupBP3.GF>groupBP2.GF) {
				//p3=2
				updatePlayerPosition(groupBP3.name,2);
				if (groupBP1.GF>groupBP2.GF) {
					//p1=4  p2=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP2.name,6);
				} else if (groupBP2.GF>groupBP1.GF) {
					//p2=5  p1=6
					updatePlayerPosition(groupBP2.name,4);
					updatePlayerPosition(groupBP1.name,6);
				} else {
					//p1=4  p2=6
					updatePlayerPosition(groupBP1.name,4);
					updatePlayerPosition(groupBP2.name,6);
				}
			} else if (groupBP1.GF==groupBP3.GF && groupBP1.GF>groupBP2.GF) {
				//p1=2  p3=4  p2=6
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP3.name,4);
				updatePlayerPosition(groupBP2.name,6);
			} else if (groupBP2.GF==groupBP3.GF && groupBP2.GF>groupBP1.GF) {
				//p2=2  p3=4  p1=6
				updatePlayerPosition(groupBP2.name,2);
				updatePlayerPosition(groupBP3.name,4);
				updatePlayerPosition(groupBP1.name,6);
			} else {
				//p1=2  p2=4  p3=6
				updatePlayerPosition(groupBP1.name,2);
				updatePlayerPosition(groupBP2.name,4);
				updatePlayerPosition(groupBP3.name,6);
			}
		}
	}
};
function update () {
	updateScore();
	updatePosition();
	updateGroups();
};
