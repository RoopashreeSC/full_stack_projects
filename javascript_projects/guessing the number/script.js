var random = Math.floor(Math.random()*10)+1
    var score1 = document.getElementById("score")
    var guess = document.getElementById("number")
    var score = 10
    score1.textContent = "score : "+score
    function check(){
    var re = document.getElementById("result")
    var guessed_value = guess.value
    
    if (guessed_value == random && score>1){
        result.textContent = "right"
        alert("yehhh you won!!!!")
        location.reload()
    }
    else{
        if(score<1){
            alert("you lose try again")
            location.reload()
        }else{
        score = score-1
        score1.textContent = "score : "+score
        result.textContent = "wrong"
        }
    }
    
    }