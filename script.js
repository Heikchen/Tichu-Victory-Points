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
//add Points from cards to team and starting new round
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

const smallTichuBox = document.getElementById("small-tichu-box");
const smallTichuSuccessful = document.getElementById("successful");
const smallTichuUnsuccessful = document.getElementById("unsuccessful");

function smallTichu() {
  smallTichuBox.style.display = "block";
}

function smallTichuClick() {
  teamSelection();
  const teamSelectionButton =
    document.getElementsByClassName("selection-button");
  for (let i = 0; i < teamSelectionButton.length; i++) {
    teamSelectionButton[i].addEventListener("click", function (event) {
      const teamSelectionId = event.target.id;
      if (teamSelectionId === "team1-selection") {
        console.log(teamSelectionId);
        activeButtonTeam1 = true;
        activeButtonTeam2 = false;
        teamSelectionBox.style.display = "none";
      } else if (teamSelectionId === "team2-selection") {
        activeButtonTeam1 = false;
        activeButtonTeam2 = true;
        teamSelectionBox.style.display = "none";
      }
    });
  }

  smallTichu();
}

function smallTichuSuccessfulClick() {
  if (activeButtonTeam1 === true) {
    team1 += 100;
    console.log("successful");
    smallTichuSuccessful.disabled = true;
  } else if (activeButtonTeam2 === true) {
    team2 += 100;
    smallTichuSuccessful.disabled = true;
  }

  smallTichuBox.style.display = "none";
}

function smallTichuUnsuccessfulClick() {
  if (activeButtonTeam1 === true) {
    team1 -= 100;
  } else if (activeButtonTeam2 === true) {
    team2 -= 100;
  }
  smallTichuBox.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target == smallTichuBox) {
    smallTichuBox.style.display = "none";
  }
});

const grandTichuBox = document.getElementById("grand-tichu-box");
const grandTichuSuccessful = document.getElementById("grand-successful");
const grandTichuUnsuccessful = document.getElementById("grand-unsuccessful");

function grandTichu() {
  grandTichuBox.style.display = "block";
}

function grandTichuClick() {
  teamSelection();
  const teamSelectionButton =
    document.getElementsByClassName("selection-button");
  for (let i = 0; i < teamSelectionButton.length; i++) {
    teamSelectionButton[i].addEventListener("click", function (event) {
      const teamSelectionId = event.target.id;
      if (teamSelectionId === "team1-selection") {
        console.log(teamSelectionId);
        activeButtonTeam1 = true;
        activeButtonTeam2 = false;
        teamSelectionBox.style.display = "none";
      } else if (teamSelectionId === "team2-selection") {
        activeButtonTeam1 = false;
        activeButtonTeam2 = true;
        teamSelectionBox.style.display = "none";
      }
    });
  }
  grandTichu();
}

function grandTichuSuccessfulClick() {
  if (activeButtonTeam1 === true) {
    team1 += 200;
    grandTichuSuccessful.disabled = true;
  } else if (activeButtonTeam2 === true) {
    team2 += 200;
    grandTichuSuccessful.disabled = true;
  }
  grandTichuBox.style.display = "none";
}
function grandTichuUnsuccessfulClick() {
  if (activeButtonTeam1 === true) {
    team1 -= 200;
  } else if (activeButtonTeam2 === true) {
    team2 -= 200;
  }
  grandTichuBox.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target == grandTichuBox) {
    grandTichuBox.style.display = "none";
  }
});

//Double victory add 200 points and start new round
const teamSelectionBox = document.getElementById("team-selection-box");
const team1Selection = document.getElementById("team1-selection");
const team2Selection = document.getElementById("team2-selection");

function teamSelection() {
  teamSelectionBox.style.display = "block";
}

function noTichu() {
  newRound();
  doubleVictoryBox.style.display = "none";
}

const doubleVictoryBox = document.getElementById("double-victory-box");
const smallDoubleVictory = document.getElementById("small-tichu-button");
const grandDoubleVictory = document.getElementById("grand-tichu-button");

function doubleVictoryButton() {
  if (activeButtonTeam1 === true) {
    team1 += 200;
    doubleVictoryBox.style.display = "block";
  } else if (activeButtonTeam2 === true) {
    team2 += 200;
    doubleVictoryBox.style.display = "block";
  }
}
//Reset Game

function clearCards() {
  document.getElementById("card1").classList.remove("button-click");
  document.getElementById("card1").value = "5";
  document.getElementById("card2").classList.remove("button-click");
  document.getElementById("card2").value = "5";
  document.getElementById("card3").classList.remove("button-click");
  document.getElementById("card3").value = "5";
  document.getElementById("card4").classList.remove("button-click");
  document.getElementById("card4").value = "5";
  document.getElementById("card5").classList.remove("button-click");
  document.getElementById("card5").value = "10";
  document.getElementById("card6").classList.remove("button-click");
  document.getElementById("card6").value = "10";
  document.getElementById("card7").classList.remove("button-click");
  document.getElementById("card7").value = "10";
  document.getElementById("card8").classList.remove("button-click");
  document.getElementById("card8").value = "10";
  document.getElementById("card9").classList.remove("button-click");
  document.getElementById("card9").value = "10";
  document.getElementById("card10").classList.remove("button-click");
  document.getElementById("card10").value = "10";
  document.getElementById("card11").classList.remove("button-click");
  document.getElementById("card11").value = "10";
  document.getElementById("card12").classList.remove("button-click");
  document.getElementById("card12").value = "10";
  document.getElementById("card13").classList.remove("button-click");
  document.getElementById("card13").value = "25";
  document.getElementById("card14").classList.remove("button-click");
  document.getElementById("card14").value = "-25";
}
const resetGameNumber = document.getElementById("rounds-number");
const resetGameTeam1 = document.getElementById("rounds-point-team1");
const resetGameTeam2 = document.getElementById("rounds-point-team2");

function resetGame() {
  clearCards();
  smallTichuSuccessful.disabled = false;
  grandTichuSuccessful.disabled = false;
  activeButtonTeam1 = false;
  activeButtonTeam2 = false;

  while (resetGameNumber.firstChild) {
    resetGameNumber.removeChild(resetGameNumber.lastChild);
  }

  while (resetGameTeam1.firstChild) {
    resetGameTeam1.removeChild(resetGameTeam1.lastChild);
  }

  while (resetGameTeam2.firstChild) {
    resetGameTeam2.removeChild(resetGameTeam2.lastChild);
  }
}

//reset round
function resetRound() {
  newRound();
  resetGameNumber.removeChild(resetGameNumber.lastChild);
  const team1Lastround = resetGameTeam1.lastChild.innerHTML;
  const team1LastRoundNumber = parseInt(team1Lastround);
  resetGameTeam1.removeChild(resetGameTeam1.lastChild);
  const team1actualround = resetGameTeam1.lastChild.innerHTML;
  const team1actualroundNumber = parseInt(team1actualround);
  team1 = team1 - (team1LastRoundNumber - team1actualroundNumber);
  const team2Lastround = resetGameTeam2.lastChild.innerHTML;
  const team2LastRoundNumber = parseInt(team2Lastround);
  resetGameTeam2.removeChild(resetGameTeam2.lastChild);
  const team2actualround = resetGameTeam2.lastChild.innerHTML;
  const team2actualroundNumber = parseInt(team2actualround);
  team2 = team2 - (team2LastRoundNumber - team2actualroundNumber);
}
//creating new elements for rounds
let counterRounds = 0;

function newRound() {
  if (team1 !== 1000 && team2 !== 1000) {
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
    smallTichuSuccessful.disabled = false;
    grandTichuSuccessful.disabled = false;
    activeButtonTeam1 = false;
    activeButtonTeam2 = false;
    clearCards();
  } else if (team1 === 1000) {
    alert(`Team 1 has won the game: ${team1}:${team2}`);
  } else if (team2 === 1000) {
    alert(`Team 2 has won the game: ${team1}:${team2}`);
  }
}
