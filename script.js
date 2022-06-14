//Building Teams 4 inputs; Team 1 and Team2
//Random Team Button
//victory Points (5,10,king,dragon,phoenix) cards as buttons onclick:
//gray and not clickable, add value to points of the Team
//next round if nobody has reached 1000 points
//round counter and bomb counter
//reset button to start a new game

//statistic of the same Teams
let team1 = 0;
let team2 = 0;
let activeButtonTeam1;
let activeButtonTeam2;

//choice which team is active
const buttonClick = document.getElementsByClassName("team-button");
for (let i = 0; i < buttonClick.length; i++) {
  buttonClick[i].addEventListener("click", function (event) {
    let buttonTeam = event.target.value;
    if (buttonTeam === "team1") {
      activeButtonTeam1 = true;
      activeButtonTeam2 = false;
    } else if (buttonTeam === "team2") {
      activeButtonTeam1 = false;
      activeButtonTeam2 = true;
    }
    console.log(activeButtonTeam1, activeButtonTeam2);
  });
}
//add Points from cards to team
const buttonPoints = document.getElementsByClassName("card");
for (let i = 0; i < buttonPoints.length; i++) {
  buttonPoints[i].addEventListener("click", function (event) {
    let pointValue = event.target.value;
    let pointValueNumber = parseInt(pointValue);

    if (activeButtonTeam1 === true) {
      team1 = team1 + pointValueNumber;
      console.log(team1, team2);
      var buttonCardsId = event.target.id;
      let buttonCards = document.getElementById(buttonCardsId);
      buttonCards.classList.toggle("button-click");
    } else if (activeButtonTeam2 === true) {
      team2 = team2 + pointValueNumber;
      console.log(team1, team2);
      var buttonCardsId = event.target.id;
      let buttonCards = document.getElementById(buttonCardsId);
      buttonCards.classList.toggle("button-click");
    }
    if (
      team1 !== 1000 &&
      team2 !== 1000 &&
      document.getElementById("card1").classList.contains("button-click") &&
      document.getElementById("card2").classList.contains("button-click") &&
      document.getElementById("card3").classList.contains("button-click") &&
      document.getElementById("card4").classList.contains("button-click") &&
      document.getElementById("card5").classList.contains("button-click") &&
      document.getElementById("card6").classList.contains("button-click") &&
      document.getElementById("card7").classList.contains("button-click") &&
      document.getElementById("card8").classList.contains("button-click") &&
      document.getElementById("card9").classList.contains("button-click") &&
      document.getElementById("card10").classList.contains("button-click") &&
      document.getElementById("card11").classList.contains("button-click") &&
      document.getElementById("card12").classList.contains("button-click") &&
      document.getElementById("card13").classList.contains("button-click") &&
      document.getElementById("card14").classList.contains("button-click")
    ) {
      newRound();
    }
  });
}
//change Value in case of double click if a Team is selected
const changeValueCards = document.getElementsByClassName("card");
for (let i = 0; i < changeValueCards.length; i++) {
  changeValueCards[i].addEventListener("click", function (event) {
    if (activeButtonTeam1 === true || activeButtonTeam2 === true) {
      let changeValue = event.target.value;
      let changeValueNumber = parseInt(changeValue);
      changeValueNumber = changeValueNumber * -1;
      let changeValueString = changeValueNumber.toString();
      changeValueCards[i].value = changeValueString;
      console.log(changeValueCards[i]);
    }
  });
}

let counterRounds = 0;

function newRound() {
  counterRounds++;
  const counterRoundsString = counterRounds.toString();
  const roundNumber = document.createElement("li");
  const roundParent = document.getElementById("rounds-number");
  roundNumber.innerText = counterRoundsString;
  roundParent.appendChild(roundNumber);
  const resultTeam1 = document.createElement("li");
  const resultParent1 = document.getElementById("rounds-point-team1");
  const team1String = team1.toString();
  resultTeam1.innerText = team1String;
  resultParent1.appendChild(resultTeam1);
  const resultParent2 = document.getElementById("rounds-point-team2");
  const resultTeam2 = document.createElement("li");
  const team2String = team2.toString();
  resultTeam2.innerText = team2String;
  resultParent2.appendChild(resultTeam2);
}

function doubleVictoryButton() {
  if (activeButtonTeam1 === true) {
    team1 += 200;
  } else if (activeButtonTeam1 === false) {
    team2 += 200;
  }
  newRound();
}
