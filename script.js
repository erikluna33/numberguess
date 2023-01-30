'use strict';

let NumberGenerator = Math.trunc(Math.random()*20) + 1;
let correctNumber = document.querySelector(".number").value=NumberGenerator;
console.log(`The correct number is: ${correctNumber}`);

let score = 20;

const checkBtn = document.querySelector(".check");



checkBtn.addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value)


    //When user does not input any number
    if(!guess){
        document.querySelector(".message").textContent="⛔️ No Number!"
    }
    //When user's guess is too low
    else if(guess < correctNumber){
        document.querySelector(".message").textContent="A little higher ⬆️"
        score--;
        document.querySelector(".score").textContent = score;
            if(score <= 0){
                document.querySelector("body").style.backgroundColor="red"
                document.querySelector('.header').textContent = "YOU LOSE!"
            }
            
            

    }
    //When user's guess is too high
    else if(guess > correctNumber){
        document.querySelector(".message").textContent="A little lower ⤵️";
        score--;
        document.querySelector(".score").textContent = score;
        if(score <= 0){
            document.querySelector("body").style.backgroundColor="red"
            document.querySelector('.header').textContent = "YOU LOSE!"
        }

    }
    //When user's guess is correct
    else{

        let score = Number(document.querySelector(".score").textContent);
        let highScore = Number(document.querySelector(".highscore").textContent);
        let newHighScore = 0;

        document.querySelector(".message").textContent="Correct! 🎉🎊🍾"
        document.querySelector(".number").textContent = correctNumber;
        document.querySelector("body").style.backgroundColor="#60b347"
        document.querySelector(".highscore").textContent = score;
        
        console.log(`The score is ${score}`)
        console.log(`The new high score is ${highScore}`)

        if(score < highScore){
            document.querySelector(".highscore").textContent = highScore;
        }

    }
    
})


//NEED TO RESET THE NUMBER WHEN PRESSING "AGAIN"

const agnBtn = document.querySelector(".again");
agnBtn.addEventListener("click", function(){

    //Score is reset to 20 for the next player
    score = 20;

    //background color is rest to default
    document.querySelector("body").style.backgroundColor="#222222";

    //Main random number is reset to ?
    document.querySelector(".number").textContent="?"

    //Guess input is rest to none for next player
    document.querySelector(".guess").value="";

    //Text is reset to default for next player
    document.querySelector(".message").textContent="Start guessing..."

    //Score display is reset to 20 default
    document.querySelector(".score").textContent=score;

    
})