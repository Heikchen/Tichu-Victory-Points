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

const buttonPoints = document.getElementsByClassName("card");
for(let i = 0; i < buttonPoints.length; i++){
    buttonPoints[i].addEventListener("click", function(event){
    const pointValue = event.target.value;
    const pointValueNumber = parseInt(pointValue);
console.log(pointValueNumber);
})
    }

function scoringTeam1(){
    const buttonTeam1 = document.getElementById("team1");
     buttonTeam1.addEventListener('click', function(){
        activeButtonTeam1 = true;
        activeButtonTeam2 = false;
        console.log(activeButtonTeam1,activeButtonTeam2)
     })
}
function scoringTeam2(){
    const buttonTeam2 = document.getElementById("team2");
     buttonTeam2.addEventListener('click', function(){
        activeButtonTeam1 = false;
        activeButtonTeam2 = true;
        console.log(activeButtonTeam1,activeButtonTeam2 )
     })
}



