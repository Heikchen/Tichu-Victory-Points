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


const buttonClick = document.getElementsByClassName("team-button");
for(let i = 0; i < buttonClick.length; i++){
    buttonClick[i].addEventListener("click", function(event){  
        let buttonTeam = event.target.value;
            if (buttonTeam === "team1"){
                activeButtonTeam1 = true;
                activeButtonTeam2 = false;
               }else if(buttonTeam === "team2"){
                activeButtonTeam1 = false;
                activeButtonTeam2 = true;}
           console.log(activeButtonTeam1, activeButtonTeam2);
           
        })
}

const buttonPoints = document.getElementsByClassName("card");
    for(let i = 0; i < buttonPoints.length; i++){
        buttonPoints[i].addEventListener("click", function(event){
        let pointValue = event.target.value;
        let pointValueNumber = parseInt(pointValue);
if (activeButtonTeam1 === true){
    team1 = team1 + pointValueNumber;
    console.log(team1, team2); 
    }
else { team2 = team2 + pointValueNumber
        console.log(team1, team2);  } 
    })
    }






    



