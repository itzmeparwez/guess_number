'use strict';
let secratno = Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent=secratno;
let score=20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    const guess= Number( document.querySelector('.guess').value);
    // console.log(guess , typeof guess);
    
    // when user not write input
    if(!guess){
        console.log( document.querySelector('.message').textContent= "no number");

        //when player win
     }else if( guess=== secratno){
        document.querySelector('.message').textContent= "you win "
        document.querySelector('.number').textContent=secratno;

        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width ='30rem';

        // high score
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

        // when score is too high 
     }else if(guess>secratno){

        if(score>0){
            document.querySelector('.message').textContent= "high"
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent="YOU LOST" 
            document.querySelector('body').style.backgroundColor="red";
        }
        // when score is too low
     }else if(guess<secratno){
        if(score >0){
            document.querySelector('.message').textContent= "low"
            score--;
            document.querySelector('.score').textContent=score;

        }else{
            document.querySelector('.message').textContent="You lost"
            document.querySelector('body').style.backgroundColor="red";
        }     
     }   
})

// for again button
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secratno = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='black';
        document.querySelector('.number').style.width ='15rem';


})
