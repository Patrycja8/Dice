

    let randomNumber1 = Math.floor(Math.random()*6+1)
    let randomNumber2 = Math.floor(Math.random()*6+1)
    let p1= "/images/dice"+randomNumber1+".png";
    let p2= "/images/dice"+randomNumber2+".png";

    document.getElementById("img1").setAttribute("src",p1)
    document.getElementById("img2").setAttribute("src",p2)
    if (randomNumber1>randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins! 🚩"
    }
    else if (randomNumber2>randomNumber1){
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
    }
    else {
        document.querySelector("h1").textContent = "It's a Tie! 🎉"
    }

  