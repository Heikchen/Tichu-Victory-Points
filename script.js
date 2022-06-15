let team1 = 0;
let team2 = 0;
let activeButtonTeam1;
let activeButtonTeam2;

//choice which team is active
const team1Box = document.getElementById("team1-box");
const team2Box = document.getElementById("team2-box");
const buttonClick = document.getElementsByClassName("team-button");
for (let i = 0; i < buttonClick.length; i++) {
  buttonClick[i].addEventListener("click", function (event) {
    let buttonTeam = event.target.value;
    if (buttonTeam === "team1") {
      activeButtonTeam1 = true;
      activeButtonTeam2 = false;
      document.getElementById("random-team").disabled = true;
      team1Box.style.display = "block";
      team2Box.style.display = "none";
    } else if (buttonTeam === "team2") {
      activeButtonTeam1 = false;
      activeButtonTeam2 = true;
      document.getElementById("random-team").disabled = true;
      team2Box.style.display = "block";
      team1Box.style.display = "none";
    }
    console.log(activeButtonTeam1, activeButtonTeam2);
  });
}

//add Points from cards to team and starting new round
const buttonPoints = document.getElementsByClassName("card");
for (let i = 0; i < buttonPoints.length; i++) {
  buttonPoints[i].addEventListener("click", function (event) {
    document.getElementById("double-victory").disabled = true;
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
//small Tichu Button
const smallTichuBox = document.getElementById("small-tichu-box");
const smallTichuSuccessful = document.getElementById("successful");
const smallTichuUnsuccessful = document.getElementById("unsuccessful");

function smallTichu() {
  smallTichuBox.style.display = "block";
}

function smallTichuClick() {
  team1Box.style.display = "none";
  team2Box.style.display = "none";
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
        team1Box.style.display = "block";
        team2Box.style.display = "none";
      } else if (teamSelectionId === "team2-selection") {
        activeButtonTeam1 = false;
        activeButtonTeam2 = true;
        teamSelectionBox.style.display = "none";
        team2Box.style.display = "block";
        team1Box.style.display = "none";
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
  team1Box.style.display = "none";
  team2Box.style.display = "none";
}

function smallTichuUnsuccessfulClick() {
  if (activeButtonTeam1 === true) {
    team1 -= 100;
  } else if (activeButtonTeam2 === true) {
    team2 -= 100;
  }
  smallTichuBox.style.display = "none";
  team1Box.style.display = "none";
  team2Box.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target == smallTichuBox) {
    smallTichuBox.style.display = "none";
  }
});

//Grand Tichu Button
const grandTichuBox = document.getElementById("grand-tichu-box");
const grandTichuSuccessful = document.getElementById("grand-successful");
const grandTichuUnsuccessful = document.getElementById("grand-unsuccessful");

function grandTichu() {
  grandTichuBox.style.display = "block";
}

function grandTichuClick() {
  team1Box.style.display = "none";
  team2Box.style.display = "none";
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
        team1Box.style.display = "block";
        team2Box.style.display = "none";
      } else if (teamSelectionId === "team2-selection") {
        activeButtonTeam1 = false;
        activeButtonTeam2 = true;
        teamSelectionBox.style.display = "none";
        team2Box.style.display = "block";
        team1Box.style.display = "none";
      }
    });
  }
  grandTichu();
  team1Box.style.display = "none";
  team2Box.style.display = "none";
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
  team1Box.style.display = "none";
  team2Box.style.display = "none";
}
function grandTichuUnsuccessfulClick() {
  if (activeButtonTeam1 === true) {
    team1 -= 200;
  } else if (activeButtonTeam2 === true) {
    team2 -= 200;
  }
  grandTichuBox.style.display = "none";
  team1Box.style.display = "none";
  team2Box.style.display = "none";
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
window.addEventListener("click", function (event) {
  if (event.target == doubleVictoryBox) {
    doubleVictoryBox.style.display = "none";
    newRound();
  }
});

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
  winnerBox.style.display = "none";
  smallTichuSuccessful.disabled = false;
  grandTichuSuccessful.disabled = false;
  activeButtonTeam1 = false;
  activeButtonTeam2 = false;
  team1 = 0;
  team2 = 0;
  counterRounds = 0;
  team1Box.style.display = "none";
  team2Box.style.display = "none";
  document.getElementById("double-victory").disabled = false;
  document.getElementById("random-team").disabled = false;

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
  if (team1 < 1000 && team2 < 1000) {
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
    document.getElementById("double-victory").disabled = false;
    clearCards();
    team1Box.style.display = "none";
    team2Box.style.display = "none";
  } else if (team1 >= 1000 || team2 >= 1000) {
    whoIsTheWinner();
  }
}
//diabled cards for each team which was choosen by the other one
function cardsDisabledTeam1() {
  const cardDisabled = document.querySelectorAll(
    "#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8, #card9, #card10, #card11, #card12, #card13, #card14"
  );
  console.log(cardDisabled);
  for (let i = 0; i < cardDisabled.length; i++) {
    if (
      !cardDisabled[i].classList.contains("team1-disabled") &&
      cardDisabled[i].classList.contains("button-click")
    ) {
      cardDisabled[i].disabled = true;
      cardDisabled[i].classList.add("team2-disabled");
    } else {
      cardDisabled[i].disabled = false;
    }
  }
}

function cardsDisabledTeam2() {
  const cardDisabled = document.querySelectorAll(
    "#card1, #card2, #card3, #card4, #card5, #card6, #card7, #card8, #card9, #card10, #card11, #card12, #card13, #card14"
  );
  console.log(cardDisabled);
  for (let i = 0; i < cardDisabled.length; i++) {
    if (
      !cardDisabled[i].classList.contains("team2-disabled") &&
      cardDisabled[i].classList.contains("button-click")
    ) {
      cardDisabled[i].disabled = true;
      cardDisabled[i].classList.add("team1-disabled");
    } else {
      cardDisabled[i].disabled = false;
    }
  }
}
//Random Team Button

function randomTeam() {
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  let name3 = document.getElementById("name3").value;
  let name4 = document.getElementById("name4").value;
  const nameArray = [name1, name2, name3, name4];
  nameArray.sort(() => Math.random() - 0.5);
  console.log(nameArray);
  for (let i = 0; i < nameArray.length; i++) {
    document.getElementById("name1").value = nameArray[0];
    document.getElementById("name2").value = nameArray[1];
    document.getElementById("name3").value = nameArray[2];
    document.getElementById("name4").value = nameArray[3];
  }
}
//Who is The winner
const winnerBox = document.getElementById("winner-box");
function closeWindow() {
  winnerBox.style.display = "none";
}

function whoIsTheWinner() {
  winnerBox.style.display = "block";
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;
  let name3 = document.getElementById("name3").value;
  let name4 = document.getElementById("name4").value;
  if (team1 > team2) {
    document.getElementById(
      "winner-header"
    ).innerText = `Congrats ${name1} & ${name2} `;
    document.getElementById(
      "winner-text"
    ).innerText = `You won by ${team1} : ${team2}`;
  } else if (team1 < team2) {
    document.getElementById(
      "winner-header"
    ).innerText = `Congrats ${name3} & ${name4} `;
    document.getElementById(
      "winner-text"
    ).innerText = `You won by ${team1} : ${team2}`;
  } else {
    document.getElementById("winner-header").innerText = `It's a draw `;
    document.getElementById("winner-text").innerText = `${team1} : ${team2}`;
  }
}
window.addEventListener("click", function (event) {
  if (event.target == winnerBox) {
    winnerBox.style.display = "none";
    newRound();
  }
});
