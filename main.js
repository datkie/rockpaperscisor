

var life =10;
var score =0;

var text;
var rand2 = function(){
    if (Math.random() < 0.5) {
        text="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>"
        ;
    }
    else if (Math.random() < 0.3) {
        text="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
    } else {
        text="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
    }
    document.getElementById("answerbot").innerHTML ="CPU:"+text;
    document.getElementById("answerbot").style.display ="none";
    document.getElementById("indi").style.display ="block";
    document.getElementById("submitss").style.display ="none";
document.getElementById("submits").style.display ="none"; 
document.getElementById("answers").style.display ="block"; 
document.getElementById("submit").style.display ="block";
document.getElementById("life").innerHTML = "Life:"+life;
document.getElementById("score").innerHTML = "Score:"+score;
var audio = document.getElementById("audio");
        audio.play();
}
document.getElementById("indi").style.display ="none";
document.getElementById("submits").style.display ="none"; 
document.getElementById("answers").style.display ="none"; 
document.getElementById("submit").style.display ="none";
document.getElementById("you").style.display ="none";
document.getElementById("answerbot").style.display ="none";




var rand = function(){
    if (Math.random() < 0.5) {
        text="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
    }
    else if (Math.random() < 0.3) {
        text="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
    } else {
        text="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
    }

    document.getElementById("result").style.display ="none";
    document.getElementById("answerbot").innerHTML ="CPU:"+text;
    document.getElementById("answerbot").style.display ="none"; 
    document.getElementById("you").style.display ="none";
    document.getElementById("submits").style.display ="none"; 
document.getElementById("answers").style.display ="block"; 
document.getElementById("submit").style.display ="block";
document.getElementById("life").innerHTML = "Life:"+life;
document.getElementById("score").innerHTML = "Score:"+score;

}

    

var answer = function(){
    var audio = document.getElementById("audio");
    audio.play();
    
    document.getElementById("indi").style.display ="none";
    var answers = document.getElementById("answers").value;
    if(answers == "Paper" && text =="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = "Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Win";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = score++;
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio2 = document.getElementById("audio2");
        audio2.play();



    }
    else if(answers == "Rock" && text =="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Lose";
        document.getElementById("life").innerHTML = life--;
        document.getElementById("life").innerHTML = "Life:"+life;
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        var audio3 = document.getElementById("audio3");
        audio3.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
    }
    else if(answers == "Scissor" && text =="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Win";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("life").innerHTML = "Life:"+life;
        document.getElementById("score").innerHTML = score++;
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio2 = document.getElementById("audio2");
        audio2.play();
    }
    else if(answers == "Paper" && text =="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Lose";
        document.getElementById("life").innerHTML = life--;
        document.getElementById("life").innerHTML = "Life:"+life;
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        var audio3 = document.getElementById("audio3");
        audio3.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;

    }
    else if(answers == "Rock" && text =="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = life;
        document.getElementById("life").innerHTML = "Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Win";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = score++;
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio2 = document.getElementById("audio2");
        audio2.play();
    }
    else if(answers == "Scissor" && text =="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>" ){
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"You Lose";
        document.getElementById("life").innerHTML = life--;
        document.getElementById("life").innerHTML = "Life:"+life;
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio3 = document.getElementById("audio3");

        audio3.play();
    }
    else if(answers == "Rock" && text =="Rock"+"<i class='fas fa-hand-rock' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = life;
        document.getElementById("life").innerHTML = "Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"Draw";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-rock' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
    }
    else if(answers == "Scissor" && text =="Scissor"+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = life;
        document.getElementById("life").innerHTML = "Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"Draw";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-scissors' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
    }
    else if(answers == "Paper" && text =="Paper"+"<i class='fas fa-hand-paper' style='font-size:24px'></i>" ){
        document.getElementById("life").innerHTML = life;
        document.getElementById("life").innerHTML = "Life:"+life;
        document.getElementById("result").style.display ="block";
        document.getElementById("result").innerHTML ="Result:"+"Draw";
        document.getElementById("submits").style.display ="block";
        document.getElementById("answers").style.display ="none";
        document.getElementById("submit").style.display ="none";
        document.getElementById("answerbot").innerHTML ="CPU:"+text;
        document.getElementById("you").innerHTML ="Your Answer:"+answers+"<i class='fas fa-hand-paper' style='font-size:24px'></i>";
        document.getElementById("answerbot").style.display ="block";
        document.getElementById("you").style.display ="block";
        document.getElementById("score").innerHTML = "Score:"+score;
        var audio4 = document.getElementById("audio4");
        audio4.play();
        document.getElementById("score").innerHTML = score;
        document.getElementById("score").innerHTML = "Score:"+score;
    }
    else{
        alert("Invalid Answer");
    }
if(life == 0){
        document.getElementById("answerbot").innerHTML ="Game Over";
        document.getElementById("indi").style.display ="none";
    document.getElementById("submits").style.display ="none"; 
    document.getElementById("answers").style.display ="none"; 
    document.getElementById("submit").style.display ="none";
    document.getElementById("submitss").style.display ="none";
    document.getElementById("submits").style.display ="none";
    document.getElementById("answers").style.display ="none";
    document.getElementById("life").style.display ="none";
    document.getElementById("you").style.display ="none";
    document.getElementById("result").style.display ="none";
    document.getElementById("score").innerHTML = "Your Final score is:"+score;
    
    }

}



/*





*/


